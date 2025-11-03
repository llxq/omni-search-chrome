import "./layout.scss";
import { useState } from "react";
import { Search } from "../search/Search.tsx";
import { Setting } from "../setting/Setting.tsx";

const layoutTabs = [
  {
    name: "搜索",
    key: "search",
    component: <Search />,
  },
  {
    name: "设置",
    key: "setting",
    component: <Setting />,
  },
];

export const Layout = () => {
  const [activeTab, setActiveTab] = useState("search");

  return (
    <div className="layout__container">
      <div className="layout__header">
        {layoutTabs.map((tab) => {
          return (
            <div
              className={`layout__tab ${tab.key === activeTab ? "active" : ""}`}
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="layout__content">
        {layoutTabs.find((tab) => tab.key === activeTab)?.component}
      </div>
    </div>
  );
};
