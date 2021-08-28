import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'
// {1} wrap everything insdie router,inside here we pass the navbar outside of a switch so it will appear inside every other component and then we pass insdie the switch evary component wrapped inside a route with the path we are going, the first one with / will need the exact path because every other url have the slash inside and without exact path it will return all the component at once, the single cocktail need the value we are going to grab from js so we need to pass like this /: we decide the name for the value
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cocktail/:id'>
            <SingleCocktail />
          </Route>
          <Route path='*'>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
