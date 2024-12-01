import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from "@simonsmith/cypress-image-snapshot/plugin";

export default defineConfig({
  component: {
    devServer: {
      bundler: "webpack",
      framework: "next",
    },
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on);
    },
  },
  e2e: {
    setupNodeEvents(on) {
      addMatchImageSnapshotPlugin(on);
    },
  },
});
