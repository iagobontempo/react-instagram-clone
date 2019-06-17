import React from 'react'
import { Switch, Route } from 'react-router-dom'; //react router dom faz as rotas

import Feed from './pages/Feed'
import New from './pages/New'

//Cada rota será um componente
function Routes(){
    return ( // Usa-se   \/ "exact" para não confundir o browser com os "/" e "/new". Se nao ouvesse o switch, ao tentar acessar 
            //                                                                        "/new" pelo navegador, ele acessaria o "/".
        <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/new" component={New} />
        </Switch>
    )
}

export default Routes