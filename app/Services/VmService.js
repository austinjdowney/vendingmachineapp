import {ProxyState} from "../AppState.js"

class Snacks{
    snack(price){
        ProxyState.snacks -= price
        if (ProxyState.snacks.price < 0){
            alert('NEED MORE MONEY')
        }else 
        return lastVended
    }
}