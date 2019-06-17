import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.18:3333' // Referencia ao localhost da sua maquina. Depende de onde estarei rodando!
    //                               // IOS = localhost // via usb ios ou android usar ip da maquina // genymotion 10.0.3.2
})

export default api