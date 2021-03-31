import { ProxyState } from "../AppState.js"

class VmService {
    snack(price, name) {
        if (ProxyState.snacks.price < 0) {
            alert('NEED MORE MONEY')
        } else
            ProxyState.lastVended = name
        return alert(name)
    }
    cash(currentTransaction) {

        if (currentTransaction >= 0) {
            ProxyState.currentTransaction += .50
            ProxyState.currentTransaction -= snacks.price
        }

    }
}

export const vmService = new VmService()