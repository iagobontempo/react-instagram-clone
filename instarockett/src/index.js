import React from 'react'
import { YellowBox } from 'react-native' //Caixinha amarela de erro / aviso

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

import Routes from './routes'

export default function App() {
  return <Routes />
}