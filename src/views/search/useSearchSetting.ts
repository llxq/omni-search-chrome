import { useEffect, useState } from "react";
import type { ISearchBookmarkSetting } from "../../shared/types.ts";

export const useSearchSetting = () => {
  const [setting, setSetting] = useState<ISearchBookmarkSetting>({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0",
  });

  const updateCompareRule = async () => {
    const storage = await chrome.storage.local.get<{
      searchBookmarkSetting: ISearchBookmarkSetting;
    }>("searchBookmarkSetting");
    if (storage.searchBookmarkSetting) {
      setSetting({
        ...setting,
        ...storage.searchBookmarkSetting,
      });
    }
  };

  useEffect(() => {
    void updateCompareRule();
  }, []);

  return {
    setting,
  };
};
