import { getMenu } from "../../../../../api/product"
import { getLocalStorage } from "../../../../utils/window"

const initialiseMenu = async (username, setMenu) => {
 const menuReceived = await getMenu(username)
 console.log(menuReceived)
 setMenu(menuReceived)
}

const initialiseBasket = (username, setBasket) => {
 const basketReceived = getLocalStorage(username)
 if (basketReceived) setBasket(basketReceived)
}

export const initialiseSession = async (username, setBasket, setMenu) => {
 await initialiseMenu(username, setMenu)
 initialiseBasket(username, setBasket)
}