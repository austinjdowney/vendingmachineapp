import { ProxyState } from "../AppState.js";
import { VmService } from "../Services/ValuesService.js";

//Private
function _draw() {
  let snacks = ProxyState.snacks;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById('snacks').innerHTML = `
 <button class="btn btn-danger" id='${snack.id}' onclick="app.VmController.snack(${snacks.price}, '${snacks.name}')">${snacks.name}</button>
  `
}



//Public
export default class VmController {
  constructor() {
    ProxyState.on('snacks', _draw);
    _draw()
  }

  snack(type, name) {
    vendingMachingeService.snack(type, name)
  }

}
