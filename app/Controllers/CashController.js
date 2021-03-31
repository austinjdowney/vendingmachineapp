import { ProxyState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";


Private
function _draw() {
    let currentTransactionElem = document.getElementById('cash')
    currentTransactionElem.innerText = `${currentTransaction}`
}

let currentTransaction = ProxyState.currentTransaction;
let template = ''
currentTrasaction.forEach(v => template += v.Template)
document.getElementById('cash').innerHTML = /*html*/`
 <div class="col-6">
                <button class="btn btn-success btn-lg shadow" id='${currentTransaction}' onclick="app.vmController.cash(${snacks.price})"> Insert
                    Money
                </button>
                <img class='w-75' src="./assets/img/Vending Machine.png" alt="">
            </div>
  `


Public
export default class CashController {
    constructor() {
        ProxyState.on('cash', _draw);
        _draw()
    }

    addValue() {
        valuesService.addValue()
    }

}