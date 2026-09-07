import { useState, useRef, useEffect, useCallback } from "react";

export default function Tabs({ tabs, defaultActive, className }) {
  const [active, setActive] = useState(defaultActive || tabs[0]?.key);
  const activeTab = tabs.find((tab) => tab.key === active);
  const scrollable = !!activeTab?.scrollable;

  const scrollRef = useRef(null);
  const [thumb, setThumb] = useState({ top: 0, height: 0, visible: false });

  const updateThumb = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollTop, scrollHeight, clientHeight } = el;
    if (scrollHeight <= clientHeight + 1) {
      setThumb({ top: 0, height: 0, visible: false });
      return;
    }
    const height = Math.max((clientHeight / scrollHeight) * clientHeight, 24);
    const top = (scrollTop / (scrollHeight - clientHeight)) * (clientHeight - height);
    setThumb({ top, height, visible: true });
  }, []);

  useEffect(() => {
    if (!scrollable) return undefined;
    updateThumb();
    const el = scrollRef.current;
    el?.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);
    return () => {
      el?.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [scrollable, updateThumb, activeTab]);

  const handleThumbMouseDown = (e) => {
    e.preventDefault();
    const el = scrollRef.current;
    if (!el) return;

    const startY = e.clientY;
    const startScrollTop = el.scrollTop;
    const trackHeight = el.clientHeight;
    const scrollRange = el.scrollHeight - el.clientHeight;
    const thumbRange = trackHeight - thumb.height;

    const handleMove = (moveEvent) => {
      const delta = moveEvent.clientY - startY;
      const scrollDelta = thumbRange > 0 ? (delta / thumbRange) * scrollRange : 0;
      el.scrollTop = startScrollTop + scrollDelta;
    };
    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  const panel = (
    <div
      className={`tabs-panel${scrollable ? " tabs-panel--scroll" : ""}`}
      ref={scrollable ? scrollRef : null}
    >
      {activeTab?.content}
    </div>
  );

  return (
    <div className={`tabs${className ? ` ${className}` : ""}`}>
      <div className="tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`tabs-nav-btn${tab.key === active ? " is-active" : ""}`}
            onClick={() => setActive(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {scrollable ? (
        <div className="wheel_prevent tabs-scroll-wrap">
          {panel}
          {thumb.visible && (
            <div className="tabs-scrollbar-track">
              <div
                className="tabs-scrollbar-thumb"
                style={{ top: thumb.top, height: thumb.height }}
                onMouseDown={handleThumbMouseDown}
              />
            </div>
          )}
        </div>
      ) : (
        panel
      )}
    </div>
  );
}
