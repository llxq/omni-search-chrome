import { useEffect, useState } from "react";
import { getDefaultSetting } from "../../shared/shared.ts";
import { getStorage } from "../../shared/storage.ts";
import type { ISearchBookmarkSetting } from "../../shared/types.ts";
import { SETTING_STORAGE_KEY } from "../setting/Setting.tsx";

export const useSearchSetting = () => {
  const [setting, setSetting] =
    useState<ISearchBookmarkSetting>(getDefaultSetting());
  const [loadingSetting, setLoadingSetting] = useState(true);

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
    setLoadingSetting(true);
    updateCompareRule().finally(() => {
      setLoadingSetting(false);
    });
  }, []);

  return {
    setting,
    loadingSetting,
  };
};
