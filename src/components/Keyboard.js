import * as React from 'react'
import styled from "styled-components";

const StyledIndvKey = styled.div.attrs(props => ({
  className: props.className,
}))`
  border: .4rem solid black;
  border-radius: .5rem;
  margin: 1rem;
  font-size: 1.5rem;
  padding: 1rem .5rem;
  transition: all .07s ease;
  width: 5rem;
  text-align: center;
  color: white;
  background: rgba(0,0,0,0.4);
  text-shadow: 0 0 .5rem black;
`

const KeyboardButton = ({
  keyNo,
  className,
  dataKey,
  srfFile
}) => {
  return (
  <div>
    <StyledIndvKey className={className}>{keyNo.pcKey}</StyledIndvKey>
    <audio 
    data-key={keyNo.dataKey}
    src={keyNo.srcFile}
    
    ></audio>
  </div>
  
  )
}

const Keyboard = ({
  keyboardState
}) => { 

  function useKeypress(key, action) {
    React.useEffect(() => {

      // TODO: define event listener
      function onKeyup(e) {
        if (e.key === key) action()
      }

        // TODO: register event listener
      window.addEventListener('keyup', onKeyup);

      return () => window.removeEventListener('keyup', onKeyup);
    }, []);
  }
  
  useKeypress('a', () => {
    alert('you pressed escape!')
  });





  React.useEffect(() => {
    const handlePress = (event) => {  
        console.log(event)
        const audioSound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        console.log(audioSound);
    };

    window.addEventListener('keydown', handlePress);

    // return () => {
    //   window.removeEventListener('keydown', handlePress);
    // };
  }, []);




  
  
  return (
    <div>
      <h1>Toggle Value: {keyboardState.toggleOn ? "True" : "False"}</h1>
        {Object.keys(keyboardState.keyboardKeyData).map((buttonKey) => {
          const keyNo = keyboardState.keyboardKeyData[buttonKey];
          return (
            <KeyboardButton
              className={"Keys"}
              keyNo={keyNo}
              dataKey={keyNo.dataKey}
              src={keyNo.srcFile}
            />
          );
        })}
    </div>
    
    

  )
}

export default Keyboard;
