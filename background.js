// 缓存的key
const bookMarkSearchLocalStorageId = 'bookMarkSearchHistory',
    maxHistoryCount = 10 // 最多记录10条

/**
 * 获取历史选中的数据
 */
const getSelectHistory = () => {
    return new Promise(resolve => {
        chrome.storage.local.get(bookMarkSearchLocalStorageId, result => {
            resolve(result[bookMarkSearchLocalStorageId] || [])
        })
    })
}

const getFaviconURL = u => {
    const url = new URL(chrome.runtime.getURL('/_favicon/'))
    url.searchParams.set('pageUrl', u)
    url.searchParams.set('size', '24')
    return url.toString()
}

const getBookmarks = async () => {
    return new Promise(async resolve => {
        const bookmarks = []

        /* 拿到所有的书签 */
        const getBookMarksByNode = (node, parentTitle = '') => {
            // 如果没有url，则可能是文件夹。记录父节点的title
            if (node.children) {
                node.children.forEach(n =>
                    getBookMarksByNode(
                        n,
                        parentTitle
                            ? `${parentTitle}/${node.title}`
                            : node.title
                    )
                )
            }
            /* 不留存目录，只查询书签 */
            if (node.url && node.title) {
                bookmarks.push({
                    url: node.url,
                    title: node.title,
                    id: node.id,
                    parentId: node.parentId,
                    parentTitle,
                    faviconURL: getFaviconURL(node.url),
                })
            }
        }

        const nodes = await chrome.bookmarks.getTree()
        if (Array.isArray(nodes)) {
            nodes.forEach(getBookMarksByNode)
        } else {
            getBookMarksByNode(nodes)
        }

        resolve(bookmarks)
    })
}

const startListener = () => {
    chrome.commands.onCommand.addListener(command => {
        if (command === 'open-search-dialog') {
            chrome.tabs.query(
                { active: true, currentWindow: true },
                async tabs => {
                    if (tabs[0]) {
                        const url = tabs[0].url
                        if (
                            url &&
                            !url.startsWith('chrome://') &&
                            !url.startsWith('chrome-extension://')
                        ) {
                            try {
                                const bookMarks = await getBookmarks()
                                const historyBookMarks =
                                    await getSelectHistory()
                                await chrome.tabs.sendMessage(tabs[0].id, {
                                    action: 'openPopup',
                                    bookMarks,
                                    historyBookMarks: historyBookMarks
                                        .map(m => {
                                            return bookMarks.find(
                                                b => b.url === m
                                            )
                                        })
                                        .filter(Boolean),
                                })
                            } catch (e) {
                                console.log('bookmark-search error:', e)
                            }
                        } else {
                            console.log(
                                'Cannot inject script into this page:',
                                url
                            )
                        }
                    }
                }
            )
        }
    })
}

startListener()

chrome.runtime.onMessage.addListener(async message => {
    if (message.action === 'goToBookmark') {
        // 记录当前跳转过的书签
        const history = await getSelectHistory()
        // 每次点过的会放在最前面
        const index = history.findIndex(h => h === message.url)
        if (index !== -1) {
            history.splice(index, 1)
        }
        history.unshift(message.url)
        if (history.length > maxHistoryCount) {
            history.pop()
        }
        await chrome.storage.local.set({
            [bookMarkSearchLocalStorageId]: history,
        })
        chrome.tabs.create({ url: message.url })
    }
})
