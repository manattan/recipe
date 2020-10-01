import firebase from 'firebase'

if(!firebase.apps.length) {
    firebase.initializeApp(
        {
            apiKey: 'AIzaSyD430U_PzBaaI6WSMKh9PX6-VlOeAUfuSc',
            authDomain:'recipe-ab8e5.firebaseapp.com',
            databaseURL: 'https://recipe-ab8e5.firebaseio.com/',
            projectedId: 'recipe-ab8e5',
            storageBucket: 'recipe-ab8e5.appspot.com',
            messagingSenderId: '864930084747',
            appId: '1:864930084747:web:e3d3abf66145e8cac9618e'
        }
    )
}else [
    console.log('not created')
]

export default firebase
