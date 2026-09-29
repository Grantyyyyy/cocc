"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// ogl and the shader stay out of the initial bundle and only load once the page is idle.
const SideRays = dynamic(() => import("@/components/react-bits/SideRays"), { ssr: false });

// Gold and violet from the site palette, mirrored from both top corners.
// Sits behind everything, so it is dimmed to keep text readable.
export default function SideRaysBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Skip the WebGL layer for reduced motion and for small screens, where it costs the most.
    const skip = window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 767px)");
    if (skip.matches) return;
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 600));
    const cancel = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(() => setReady(true));
    return () => cancel(handle);
  }, []);

  if (!ready) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-55"
    >
      <div className="absolute inset-0">
        <SideRays
          origin="top-right"
          rayColor1="#fcdc58"
          rayColor2="#8214d9"
          speed={1.2}
          intensity={1.1}
          blend={0.6}
        />
      </div>
      <div className="absolute inset-0">
        <SideRays
          origin="top-left"
          rayColor1="#b37cf0"
          rayColor2="#8214d9"
          speed={1}
          intensity={1.1}
          blend={0.6}
        />
      </div>
    </div>
  );
}
