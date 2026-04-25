"use client";

import { useEffect } from "react";

const ScrollRestoration = () => {
  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);

    // Disable scroll restoration
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  return null;
};

export default ScrollRestoration;
