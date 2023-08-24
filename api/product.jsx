import { getDoc, setDoc, doc } from "firebase/firestore"
import { db } from "./firebase-config"

export const syncBothMenus = async (userId, menuUpdated) => {
 const docRef = doc(db, "users", userId)

 const dataMenu = {
  username: userId,
  menu: menuUpdated
 }

 await setDoc(docRef, dataMenu)
}

export const getMenu = async (idUser) => {
 const docRef = doc(db, "users", idUser)

 const docSnapshot = await getDoc(docRef)
 if (docSnapshot.exists()) {
  const { menu } = docSnapshot.data()
  return menu
 }

}