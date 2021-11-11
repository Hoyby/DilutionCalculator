import React, { ReactNode } from "react";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
