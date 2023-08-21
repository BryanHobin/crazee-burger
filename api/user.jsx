import { getDoc, doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu } from "../src/fakeData/fakeMenu"

export const getUser = async (idUser) => {
 const docRef = doc(db, "users", idUser)

 const docSnapshot = await getDoc(docRef)
 if (docSnapshot.exists()) {
  const userData = docSnapshot.data()
  return userData
 }

}


export const createUser = (userId) => {
 const docRef = doc(db, "users", userId)

 const newDoc = {
  username: userId,
  menu: fakeMenu.LARGE
 }
 setDoc(docRef, newDoc)
}