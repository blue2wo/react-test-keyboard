import * as React from 'react';
import Router from './components/Router';

import './App.css';


const App = () => {
  const [keyboardState, setKeyboardState] = React.useState ({
    toggleOn: "true",
    keyboardKeyData: {
      keyNo65: {
        pcKey: "A",
        dataKey: "65",
        srcFile: "sounds/clap.wav"
      },
      keyNo83: {
        pcKey: "S",
        dataKey: "83",
        srcFile: "./sounds/hithat.wav"
      },
      keyNo68: {
        pcKey: "D",
        dataKey: "68",
        srcFile: "./sounds/kick.wav"
      },
      keyNo70: {
        pcKey: "F",
        dataKey: "70",
        srcFile: "./sounds/openhat.wav"
      },
      keyNo71: {
        pcKey: "G",
        dataKey: "71",
        srcFile: "./sounds/boom.wav"
      },
      keyNo72: {
        pcKey: "H",
        dataKey: "72",
        srcFile: "./sounds/ride.wav"
      },
      keyNo74: {
        pcKey: "J",
        dataKey: "74",
        srcFile: "./sounds/hithat.wav"
      },
      keyNo75: {
        pcKey: "K",
        dataKey: "75",
        srcFile: "./sounds/tom.wav"
      },
      keyNo76: {
        pcKey: "L",
        dataKey: "76",
        srcFile: "./sounds/tink.wav"
      },
    }
  })

  return (
    <Router
      keyboardState={keyboardState}
    />
  );  
}

export default App;