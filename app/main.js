import VmController from "./Controllers/VmController.js";

class App {
  vMController = new VmController();
}

window["app"] = new App();
