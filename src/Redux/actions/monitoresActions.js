import { types } from "../types/types"
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { dataBase } from "../../Firebase/firebaseConfig";

export const addMonitorSinc = data => {
    return {
        type: types.addMonitores,
        payload: data
    }
}

export const addMonitorAsync = data => {
    return (dispatch) => {
        addDoc(collection(dataBase, 'monitores'), data)
            .then(resp => {
                console.log(resp)
                dispatch(addMonitorSinc(data))
            })
            .catch(error => {
                console.log(error)
            })
    }
}

export const listMonitoresSinc = (data) => {
    return {
        type: types.listMonitores,
        payload: data
    }
}

export const listMonitoresAsync = () => {
    return async (dispatch) => {
        const getCollection = await getDocs(collection(dataBase, 'monitores'));
        const monitores = [];

        getCollection.forEach((doc) => {
            monitores.push({
                ...doc.data()
            })
        })

        dispatch(listMonitoresSinc(monitores))

    }
}