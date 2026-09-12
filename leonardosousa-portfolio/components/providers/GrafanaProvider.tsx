"use client";

import { useEffect } from "react";

import { initializeFaroMonitoring } from "../../lib/faro";

interface GrafanaProviderProps {
  children: React.ReactNode;
}

export default function GrafanaProvider({ children }: GrafanaProviderProps) {
  useEffect(() => {
    initializeFaroMonitoring();
  }, []);

  return children;
}
