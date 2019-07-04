import React from 'react';
import Nav from './Nav'
import Hero from "./Hero";
import KegList from './KegList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';



function App() {
  return(
      <BrowserRouter>
      <div>
          <Nav/>
          <Switch>
              <Route exact path='/' component={Hero}/>
              <Container>
              <Route path='/keglist' component={KegList}/>
              </Container>
          </Switch>

      </div>
      </BrowserRouter>
  )
}

export default App;