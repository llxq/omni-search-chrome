import { useEffect, useState } from "react";
import { getStorage } from "../../shared/storage.ts";
import type { ISearchBookmarkSetting } from "../../shared/types.ts";
import { SETTING_STORAGE_KEY } from "../setting/Setting.tsx";

export const useSearchSetting = () => {
  const [setting, setSetting] = useState<ISearchBookmarkSetting>({
    openNewTab: "1",
    searchRule: ["url", "title", "parentTitle"],
    useDefaultSearch: "0",
  });

  const updateCompareRule = async () => {
    const storage =
      await getStorage<ISearchBookmarkSetting>(SETTING_STORAGE_KEY);
    if (storage) {
      setSetting({
        ...setting,
        ...storage,
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
