// import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom'
import Links from './Links';
import React from "react";
import Images from './Image';
import Error from './Error'
import Trending from './Trending'
// import SearchResult from './SearchResult';
import Home from './Components/Home';
import Recipe from './Components/Recipe'


function App() {
  // function myData(data){
  //   console.log(data)
  // }
  return (
    <>
      <Navbar className="primaryResNav" bg="dark" variant="dark" >
        <Container>
          {/* <Navbar.Brand >Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Links />
           

          </Nav>
        </Container>
      </Navbar>



     


      <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/image'><Images /></Route>
        <Route path='/news'><Trending /></Route>
        <Route path='/recipe'><Recipe/></Route>
        <Route  path='*' exact><Error /></Route>

      </Switch>

       
      
    </>
  );
}

export default App;
