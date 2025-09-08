const c = "bookMarkSearch";
const n = () => new Promise((o) => {
  chrome.storage.local.get(c, (t) => {
    o(t[c] || []);
  });
}), h = (o) => {
  const t = new URL(chrome.runtime.getURL("/_favicon/"));
  return t.searchParams.set("pageUrl", o), t.searchParams.set("size", "24"), t.toString();
}, m = async () => new Promise(async (o) => {
  const t = [], e = (r, s = "") => {
    r.children && r.children.forEach(
      (i) => e(
        i,
        s ? `${s}/${r.title}` : r.title
      )
    ), r.url && r.title && t.push({
      url: r.url,
      title: r.title,
      id: r.id,
      parentId: r.parentId,
      parentTitle: s,
      faviconURL: h(r.url)
    });
  }, a = await chrome.bookmarks.getTree();
  Array.isArray(a) ? a.forEach((r) => e(r)) : e(a), o(t);
});
chrome.commands.onCommand.addListener((o) => {
  o === "open-bookmarks-search-dialog" && chrome.tabs.query({ active: !0, currentWindow: !0 }, async (t) => {
    const [e] = t;
    if (e) {
      const a = e.url;
      if (a && !a.startsWith("chrome://") && !a.startsWith("chrome-extension://"))
        try {
          const r = await m(), s = await n();
          e.id && await chrome.tabs.sendMessage(e.id, {
            action: "openPopup",
            bookMarks: r,
            historyBookmarks: s.map((i) => r.find((l) => l.url === i)).filter(Boolean)
          });
        } catch (r) {
          console.log("bookmark-search error:", r);
        }
      else
        console.log("Cannot inject script into this page:", a);
    }
  });
});
chrome.runtime.onMessage.addListener(async (o) => {
  if (o.action === "goToBookmark") {
    const t = await n(), e = t.findIndex((a) => a === o.url);
    e !== -1 && t.splice(e, 1), t.unshift(o.url), t.length > 10 && t.pop(), await chrome.storage.local.set({
      [c]: t
    }), await chrome.tabs.create({ url: o.url });
  }
});
