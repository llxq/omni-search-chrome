export interface IOpenTabBookmark {
  /**
   * 是否为已经打开的标签页
   */
  isOpenTab?: boolean;
  /**
   * 对应的window下的tab的索引
   */
  tabIndex?: number;
  /**
   * 为已经打开的tab的时候的窗口id
   */
  windowId?: number;
  /**
   * 打开的window的索引
   */
  windowIndex?: number;
}

export interface ITemporaryBookmark {
  /**
   * 是否为临时数据
   */
  isTemporary?: boolean;
}

export interface IBookmark extends ITemporaryBookmark, IOpenTabBookmark {
  url: string;
  title: string;
  id: string;
  parentId?: string;
  parentTitle?: string;
  faviconURL: string;
}

export interface ITemporaryData extends IBookmark {
  createdTime: number;
}

export type TSearchRule = keyof IBookmark;

/**
 * 0: false
 * 1: true
 */
export type TBooleanValue = "0" | "1";

export interface ISearchBookmarkSetting {
  /**
   * 是否在打开的时候查询是否有对应的tab，如果开启了则会优先切换到已打开的tab
   * @default 1
   */
  openNewTab: TBooleanValue;
  /**
   * 搜索需要匹配的类型
   * @default ["url", "title", "parentTitle"]
   */
  searchRule: TSearchRule[];
  /**
   * 查询结果为空的时候是否用默认搜索引擎搜索
   * @default 0
   */
  useDefaultSearch: TBooleanValue;
  /**
   * 是否启用扩展搜索
   * @default 0
   */
  enableExtensionSearch: TBooleanValue;
  /**
   * 是否搜索打开的标签页
   * @default 0
   */
  searchOpenedTab: TBooleanValue;
}
