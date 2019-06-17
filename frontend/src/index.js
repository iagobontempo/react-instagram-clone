import React from 'react'; // Essa é a biblioteca do react, que permite o uso das tags do html com javascript
import ReactDOM from 'react-dom'; // Modulo de integração do react com o browser
import App from './App';
import './global.css'

ReactDOM.render(<App />, document.getElementById('root')); // ReactDOM esta falando para pegar o App e colocar ele dentro do document.getElementById('root')


