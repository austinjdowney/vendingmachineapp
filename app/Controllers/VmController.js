import { ProxyState } from "../AppState.js";
import { vmService } from "../Services/VmService.js";

//Private
function _drawSnacks() {
  let snacks = ProxyState.snacks;
  document.getElementById('A1').innerHTML = `
 <button class="btn btn-danger" id='A1' onclick="app.VmController.snack(${snacks.price}, '${snacks.name}')">Doritos</button>
  `
  document.getElementById('A2').innerHTML = `
 <button class="btn btn-danger" id='A2' onclick="app.VmController.snack(${snacks.price}, '${snacks.name}')">Fig Newtons</button>
  `
  document.getElementById('A3').innerHTML = `
 <button class="btn btn-danger" id='A3' onclick="app.VmController.snack(${snacks.price}, '${snacks.name}')">King Snickers</button>
  `
}



//Public
export default class VmController {
  constructor() {
    ProxyState.on('cash', 'A1', 'A2', 'A3', _drawSnacks, _drawCash);
    _draw()
  }

  snack(price, name) {
    vmService.snack(price, name)
  }

  cash(money) {
    vmService.cash(price)
  }
}
