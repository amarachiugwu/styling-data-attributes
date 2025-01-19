"use client";
import { useState } from "react";

export default function HomePage() {
  const [activeTabId, setActiveTabId] = useState("tab1");
  const tabs = [
    { id: "tab1", label: "Tab 1", content: "Tab 1 content here" },
    { id: "tab2", label: "Tab 2", content: "Tab 2 content here" },
    { id: "tab3", label: "Tab 3", content: "Tab 3 content here" },
  ];

  return (
    <div className="w-[500px] border border-blue-6 mx-auto mt-14 rounded-lg p-4">
      <div className="flex items-center justify-between border-b border-tertiary-6">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            data-active={tab.id === activeTabId}
            className="p-2 cursor-pointer"
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="">
        {tabs.map(
          (tab) =>
            tab.id === activeTabId && (
              <div key={tab.id} className="p-2">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}
