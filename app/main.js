import CashController from "./Controllers/cashController.js";
import VmController from "./Controllers/VmController.js";

class App {
  vmController = new VmController();
  cashController = new CashController();
}

window["app"] = new App();
