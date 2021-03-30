import { ProxyState } from "../AppState.js"

class Snacks {
    snack(price, name) {
        ProxyState.currentTransactions += .50
        ProxyState.currentTransactions -= price
        if (ProxyState.snacks.price < 0) {
            alert('NEED MORE MONEY')
        } else
            ProxyState.lastVended = name
        return alert(name)
    }
}

