import { addDoc, collection, getFirestore } from 'firebase/firestore';


/*function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;}
*/
const UploadOrder = (order) => {
    /*const numOrder = parseInt(getRandomArbitrary(5000 , 9999))
    order['numOrder'] = numOrder*/
    const database = getFirestore()
    const reference = collection(database , 'orders')
    addDoc(reference , order)
        .then((snapShot) => {
            const numOrder = snapShot._key.path.segments[1]
            console.log(numOrder)
        })
   
}

export default UploadOrder