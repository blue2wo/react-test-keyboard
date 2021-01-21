import * as React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Keyboard from "./Keyboard";  


const Router = ({
  keyboardState
}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Keyboard 
            keyboardState={keyboardState}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router;