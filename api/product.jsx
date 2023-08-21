import { setDoc, doc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothMenus = (userId, menuUpdated) => {
 const docRef = doc(db, "users", userId)

 const dataMenu = {
  username: userId,
  menu: menuUpdated
 }

 setDoc(docRef, dataMenu)
}