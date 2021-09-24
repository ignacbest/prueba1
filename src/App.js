import './App.css';
import React, {useState, useEffect} from 'react';
import NavigationBar from './components/NavigationBar';
import Carousel from './components/Carousel';
import PubsList from './components/PubsList';



import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Switch, Route} from 'react-router-dom';
import DetailProduct from './components/DetailProduct';

function App() {
  //Uso id de categoria para setear 
  const [categoria, setCategoria] = useState(1);
  const [user, setUser] = useState(null);

  useEffect(checkUser, []);
  
  function checkUser() {
    fetch('http://localhost:8000/auth/check', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        updateUser(data.data);
      });
  }

  const updateUser= (newUser) => {
  setUser(newUser);
  }
  

  return (
    <>
    <BrowserRouter className="font-load">
    <NavigationBar user={user} updateUser={updateUser} setCategoria={setCategoria}/>
    <Carousel/>
    <Switch>
        <Route exact path="/">
          <PubsList categoria={categoria} />
        </Route>

        <Route path="/favoritos">
          <PubsList type="favoritos" />
        </Route>

        <Route path="/detail/:id" component={DetailProduct}/>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
