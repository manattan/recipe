export interface CommonDocumentData {
    addTimestamp: firebase.firestore.FieldValue,
    updateTimestamp: firebase.firestore.FieldValue
}

export type User = {
    userUid: string,
    userName: string
}