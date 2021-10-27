import firebase from 'firebase/compat/app';
import  'firebase/compat/auth'
import 'firebase/compat/firestore'
import config from './config'
firebase.initializeApp(config)
const auth=firebase.auth()
/*export {auth,db,provider}*/
export default firebase;
