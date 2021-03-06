import { types } from "../types/types"
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { facebook, google } from "../../Firebase/firebaseConfig"

const auth = getAuth()

export const loginSinc = ({ email, password }) => {
    return {
        type: types.login,
        payload: {
            email, password
        }
    }
}

export const loginAsync = ({ email, password }) => {
    return (dispatch) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(resp => {
                console.log(resp)
                console.log('Usuario autorizado')

                dispatch(loginSinc(email, password))
            })
            .catch(error => {
                console.log('Usuario no autorizado')
                console.warn(error)
                console.warn(error.code)
                console.warn(error.message)
            })
    }
}

export const loginGoogle = () => {
    signInWithPopup(auth, google)
        .then(() => {
            
        })
        .catch(error => {
            console.log(error)
        })
}

export const loginFacebook = () => {
    const auth = getAuth()

    signInWithPopup(auth, facebook)
        .then((resp) => {
            console.log(resp)
            console.log('Usuario autorizado')
        })
        .catch((error) => {
            console.log(error)
            console.log('Usuario no autorizado')
        })
}

export const logoutAsync = () => {
    return (dispatch) => {
        signOut(auth)
            .then(() => {
                dispatch(logoutSinc())
            })
            .catch(error => console.log(error))
    }
}

export const logoutSinc = () => {
    return {
        type: types.logout
    }
}