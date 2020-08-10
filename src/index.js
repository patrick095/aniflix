import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/video'


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './pages/cadastro/categoria';
import AnimePage from './pages/anime';
import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login} />
    <Route path="/editanimes" component={CadastroVideo} />
    <Route path="/editcategories" component={CadastroCategoria} />
    <Route exact path="/anime/:name" component={AnimePage} />
    <Route path="/anime/:name/:episode" component={AnimePage} />

    <Route component={()=> (<div>Página não encontrada! Erro 404</div>)} />
  </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);