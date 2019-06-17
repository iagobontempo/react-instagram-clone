import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native' //permite usar como uma TAG

import Feed from './pages/Feed';
import New from './pages/New';

import logo from './assets/logo.png'

export default createAppContainer( // ISSO SE APLICA PARA TODAS AS TELAS
    createStackNavigator({
        Feed,
        New,
    }, {
        // initialRouteName: 'New', // Apenas usar isso quando precisar ficar dando reload em alguma pagina, para testar
        defaultNavigationOptions: { //ISSO SE APLICA PARA TODAS AS TELAS
            headerTintColor: '#000', // Botao de voltar esta preto por conta desse tintcolor!
            headerTitle: <Image style={{margin: 25}} source={logo} />,
            headerBackTitle: null, // Esconde o titulo do app.
        },
        mode: 'modal' // Mode diz como a animação vem. Se é de baixo pra cima etc...
    })
)