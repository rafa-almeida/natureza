import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import Gallery from "./Components/Gallery"
import Inicio from "../pages/Inicio"

function App() {
    return (
        <Router>
            <Switch>
            <Route path="/Inicio">
                    < Inicio />
                </Route>
                <Route path="/Gallery">
                    <Gallery />
                </Route>
            </Switch>
        </Router>
    )
}

export default App