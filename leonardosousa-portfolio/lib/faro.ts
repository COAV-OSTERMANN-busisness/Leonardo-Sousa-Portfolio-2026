import { getWebInstrumentations, initializeFaro } from "@grafana/faro-web-sdk";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

let faroInitialized = false;

export function initializeFaroMonitoring() {
  if (faroInitialized || typeof window === "undefined") {
    return;
  }

  const url = process.env.NEXT_PUBLIC_FARO_URL;
  const appName = process.env.NEXT_PUBLIC_FARO_APP_NAME;
  const appNamespace = process.env.NEXT_PUBLIC_FARO_APP_NAMESPACE;
  const appVersion = process.env.NEXT_PUBLIC_FARO_APP_VERSION;

  if (!url || !appName) {
    return;
  }

  initializeFaro({
    url,
    app: {
      name: appName,
      namespace: appNamespace,
      version: appVersion,
      environment: process.env.NODE_ENV,
    },
    instrumentations: [
      ...getWebInstrumentations(),
      new TracingInstrumentation(),
    ],
  });

  faroInitialized = true;
}
