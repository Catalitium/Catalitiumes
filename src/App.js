import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import { Inicio } from './components/Inicio';
import { Servicios } from './components/Servicios';
import { Contacto } from './components/Contacto';
import { Historia } from './components/Historia';
import { Layout } from './components/Layout';
import { NoExiste } from './components/NoExiste';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./components/NavigationBar";
import './app.css'

class App extends Component {
  render() {

    return (

<React.Fragment>
<NavigationBar/>
<Layout>

<Router>
  
        <Switch> 
          
          <Route exact path= '/' component= {Inicio} />
          <Route exact path= '/servicios' component= {Servicios} />
          <Route exact path= '/contacto' component= {Contacto} />
          <Route exact path= '/nuestra-historia' component= {Historia} />
          <Route component= {NoExiste} />
          
        </Switch>
        
</Router>

<Footer />
</Layout>
</React.Fragment>
  
    ) ;
  }
}

export default App;