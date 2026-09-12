"use client";

import { useEffect } from "react";

import { initializeAOS } from "../../lib/aos";

interface AOSProviderProps {
  children: React.ReactNode;
}

export default function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    initializeAOS();
  }, []);

  return children;
}
