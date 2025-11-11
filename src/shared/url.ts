/**
 * 从完整的 URL 中提取路径部分（pathname），不包括查询参数或哈希。
 * @param url 要处理的完整 URL 字符串。
 * @returns URL 的路径字符串（例如 "/search"），如果 URL 无效则返回 undefined。
 */
export function getPath(
  url: string | TUndefinable<string>,
): TUndefinable<string> {
  if (!url) return "";
  return new URL(url).pathname;
}

/**
 * 获取某个url的域名
 */
export const getDomain = (url?: string) => {
  if (!url) return "";
  return new URL(url).hostname;
};

/**
 * 找到相似度最高的tab
 */
export const findSimilarTab = (
  tabs: chrome.tabs.Tab[],
  currentUrl: string,
): TUndefinable<chrome.tabs.Tab> => {
  const currentDomain = getDomain(currentUrl);
  // 找到与当前url域名一致的tab
  const sameDomainTabs = tabs.filter(
    (tab) => getDomain(tab.url) === currentDomain,
  );
  if (sameDomainTabs.length < 2) {
    return sameDomainTabs[0];
  }
  const currentPath = getPath(currentUrl) || "";
  let bestMatchTab: TUndefinable<chrome.tabs.Tab> = void 0;
  let maxSimilarityScore = -1;
  sameDomainTabs.forEach((tab) => {
    const tabPath = getPath(tab.url) || "";
    let currentSimilarityScore = 0;
    if (tabPath === currentPath) {
      currentSimilarityScore = Number.MAX_VALUE;
    } else {
      const currentPathSegments = currentPath.split("/");
      const tabPathSegments = tabPath.split("/");
      const maxLength = Math.max(
        currentPathSegments.length,
        tabPathSegments.length,
      );
      for (let i = 0; i < maxLength; i++) {
        if (currentPathSegments[i] === tabPathSegments[i]) {
          currentSimilarityScore++;
        } else {
          break;
        }
      }
    }
    if (currentSimilarityScore > maxSimilarityScore) {
      maxSimilarityScore = currentSimilarityScore;
      bestMatchTab = tab;
    }
  });

  return bestMatchTab;
};
