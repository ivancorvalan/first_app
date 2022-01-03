import { addDoc, collection, getFirestore } from 'firebase/firestore';

const UploadOrder = (order) => {
    const database = getFirestore()
    const reference = collection(database , 'orders')
    addDoc(reference , order)
        .then((snapShot) => {
            snapShot._key.path.segments[1]
        }
        )
}

export default UploadOrder