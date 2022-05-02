import { addDoc, collection, getFirestore } from 'firebase/firestore';

const UploadMessage = (msg) => {
    const db = getFirestore()
    const ref = collection(db , 'inbox')
    addDoc(ref , msg)
        .then((snapShot)=>{
            console.log(snapShot.id)
            return true
        })
        .catch((error)=>{
            console.log(error)
            return false
        })   
}

export default UploadMessage