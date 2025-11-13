import type {
  IBookmark,
  ISearchBookmarkSetting,
  TSearchRule,
} from "./types.ts";

/**
 * 获取默认设置
 */
export const getDefaultSetting = (): ISearchBookmarkSetting => {
  return {
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0",
    searchSimilarity: 30,
    enableExtensionSearch: "0",
  };
};

export const ruleSettingToWeight: Partial<Record<TSearchRule, number>> = {
  title: 1,
  url: 0.6,
  parentTitle: 0.3,
};

/**
 * 给设定的搜索规则增加去除空格的内容
 */
export const getFuseSearchResult = (item: IBookmark) => {
  const defaultSetting = getDefaultSetting();
  return {
    ...item,
    ...defaultSetting.searchRule.reduce((pre, cur) => {
      const value = Reflect.get(item, cur) as string;
      if (!value) return pre;
      Reflect.set(pre, `${cur}NoSpace`, value.replace(/\s+/g, ""));
      return pre;
    }, {}),
  };
};
