import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVJ4ZTxx1hKChIlZWeVa6UCaBpeoOSb5o",
  authDomain: "ccc3-c7c70.firebaseapp.com",
  projectId: "ccc3-c7c70",
  storageBucket: "ccc3-c7c70.firebasestorage.app",
  messagingSenderId: "45563238896",
  appId: "1:45563238896:web:55d8c1ca929cf619a2e535"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
