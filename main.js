import './style.scss'

import {app, analytics, storage} from "./firebase";
import {ref} from "firebase/storage";

const storageRef = ref(storage);

const image = ref(storage, 'images/Logo.png');

console.log(image);
