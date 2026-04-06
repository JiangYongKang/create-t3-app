import { useState } from "react";

const TAB_ID_APP = "tab-app-router";
const TAB_ID_PAGES = "tab-pages-router";
const PANEL_ID_APP = "panel-app-router";
const PANEL_ID_PAGES = "panel-pages-router";

export function IntroductionTab() {
  const [isAppRouterSelected, setIsAppRouterSelected] = useState(true);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      setIsAppRouterSelected(!isAppRouterSelected);
    }
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Router selection"
        className="flex w-full justify-center gap-10 py-5"
      >
        <button
          role="tab"
          id={TAB_ID_APP}
          aria-selected={isAppRouterSelected}
          aria-controls={PANEL_ID_APP}
          tabIndex={isAppRouterSelected ? 0 : -1}
          className={`${isAppRouterSelected ? "bg-primary text-white" : "bg-transparent"} inline-flex cursor-pointer items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-500 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:px-5 md:text-base lg:px-4 lg:py-3`}
          onClick={() => setIsAppRouterSelected(true)}
          onKeyDown={handleKeyDown}
        >
          App Router
        </button>
        <button
          role="tab"
          id={TAB_ID_PAGES}
          aria-selected={!isAppRouterSelected}
          aria-controls={PANEL_ID_PAGES}
          tabIndex={!isAppRouterSelected ? 0 : -1}
          className={`${!isAppRouterSelected ? "bg-primary text-white" : "bg-transparent"} inline-flex cursor-pointer items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-500 hover:no-underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 md:px-5 md:text-base lg:px-4 lg:py-3`}
          onClick={() => setIsAppRouterSelected(false)}
          onKeyDown={handleKeyDown}
        >
          Pages Router
        </button>
      </div>
      <div className="embed">
        <div
          role="tabpanel"
          id={PANEL_ID_APP}
          aria-labelledby={TAB_ID_APP}
          hidden={!isAppRouterSelected}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d5x0JCZbAJs"
            title="The best stack for your next project - App Router"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          role="tabpanel"
          id={PANEL_ID_PAGES}
          aria-labelledby={TAB_ID_PAGES}
          hidden={isAppRouterSelected}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YkOSUVzOAA4"
            title="The best stack for your next project - Pages Router"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
