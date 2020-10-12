export interface CommonDocumentData {
    addTimestamp: firebase.firestore.FieldValue,
    updateTimestamp: firebase.firestore.FieldValue
}

export type User = {
    userUid: string,
    userName: string
}

export type Ingredients = {
    title: string,
    item: string[]
}

export type instruction = {
    value:string
}

export type recipe = {
    name: string,
    summary: string,
    ingredients:Ingredients[],
    instructions: instruction[],
    timeInfo: string[]
}