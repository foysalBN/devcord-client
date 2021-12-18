import { useEffect, useState } from 'react'
import initializeFirebase from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'


// Initialize firebase app
initializeFirebase()
const auth = getAuth()

const useFirebase = () => {
    const [user, setUser] = useState({}); //test
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)


    // TEst func
    const test = () => {
        console.log('test ok')
    }

    // Create user
    const signUpWithEmailPass = (username, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(user => {
                // add display name
                updateProfile(auth.currentUser, { displayName: username })
                    .then(() => {
                        // Profile updated!
                    }).catch((error) => {
                        // An error occurred
                    });

                // send user to database
            })
            .catch(err => {
                console.log('create user error: ', err)
                // setError(err)
            })
    }

    // sign in with email and pass
    const signInWithEmailPass = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(user => {
                console.log('form signin', user)
            })
            .catch(err => {
                console.log('signin error:', err)
            })

    }

    // sign Out
    const logOut = () => {
        signOut(auth)
    }


    // special Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
                console.log(user)

            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])

    return {
        test,
        user,
        error,
        isLoading,
        signUpWithEmailPass,
        signInWithEmailPass,
        logOut,
    }

}

export default useFirebase;