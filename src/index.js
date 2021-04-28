import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import Header from "./components/header";
import BreweriesIndex from "./components/breweries-index";
import BreweryShow from "./components/brewery-show";
import AddComment from "./components/add-comment";
import reducers from "./reducers";
import 'bootstrap/dist/css/bootstrap.min.css';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <Header>
        <Switch>
          <Route exact path='/' component={BreweriesIndex} />
          <Route path='/breweries/:id/addComment' component={AddComment} />
          <Route path='/breweries/:id' component={BreweryShow} />
        </Switch>
      </Header>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
