import firebase from '~/plugins/firebase'
import 'firebase/firestore'
import * as commonTypes from '~/types/common'

const db = firebase.firestore()

export const addUserData = (user: commonTypes.User)  => {
    console.log("firestoreにuserを格納しようとしています")
    const common: commonTypes.CommonDocumentData = {
        addTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
        updateTimestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    console.log(user)
    const ref = db.collection('User').doc(user.userUid)
    ref.set(Object.assign(user,common)).then(()=>{
        console.log("firestoreにuserdataを格納しました")
    })
}