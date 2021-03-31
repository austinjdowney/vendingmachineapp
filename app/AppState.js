import Snacks from "./Models/snacks.js"
//import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  state = {
    currentTransaction: 0,
    snacks: [new Snacks('A1', 'Doritos', 1.00),
    new Snacks('A2', 'Fig Newtons', 2.00),
    new Snacks('A3', 'King Snickers', 4.00)],
    lastVended: null
  }
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
