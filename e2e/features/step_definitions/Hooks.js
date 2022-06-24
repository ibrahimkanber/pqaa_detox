import { BeforeAll, Before, AfterAll, After } from "@cucumber/cucumber";
import { init, cleanup } from "detox";
import { detox as config } from "../../../package.json";

BeforeAll({ timeout: 60 * 1000 }, async () => {
  try {
    await init(config);
  } catch (error) {
  }

});

Before(async () => {
  console.log("launched");
  await device.launchApp({ newInstance: true });
});

AfterAll(async () => {
  await cleanup();
});
