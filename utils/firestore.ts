import firebase from '~/plugins/firebase'
import 'firebase/firestore'
import * as commonTypes from '~/types/common'

const db = firebase.firestore()

const common: commonTypes.CommonDocumentData = {
    addTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
    updateTimestamp: firebase.firestore.FieldValue.serverTimestamp()
}

export const addUserData = (user: commonTypes.User)  => {
    console.log("firestoreにuserを格納しようとしています")
    console.log(user)
    const ref = db.collection('User').doc(user.userUid)
    ref.set(Object.assign(user,common)).then(()=>{
        console.log("firestoreにuserdataを格納しました")
    })
}

export const addRecipeData = (user: commonTypes.User, recipe: commonTypes.recipe) => {
    console.log("firestoreにrecipeを格納しようとしています")
    const ref= db.collection('Recipes')
    ref.add(Object.assign({userName:user.userName},recipe,common))
    console.log("firestoreにrecipedataを格納しました")
}

export const getAllRecipeData = () =>{
    console.log("データをゲットしようとしています")
    const ref =db.collection('Recipes')
    ref.get().then((res)=>{
        return res.docs.map(
            doc => Object.assign(doc.data(), { id: doc.id })
          )
    })
}