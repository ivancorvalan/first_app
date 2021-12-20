import {products} from '../Database/DatabaseItems'
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const UploadProducts = () => {
    const database = getFirestore()
    const reference = collection(database , 'products')
    products.map((product) => addDoc(reference , product))
    return true
}

export default UploadProducts