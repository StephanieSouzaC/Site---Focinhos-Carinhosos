import {obterCookie} from './requests.js'

const token = obterCookie('tokenJWT')

console.log(token);