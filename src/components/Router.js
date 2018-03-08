import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Basic from './Basic';

const users = [{
  name: 'Ali Gutierrez',
  address: 'San Roque, Mahinog, Camiguin',
  cardNo: 987654321,
  cardExp: 4321,
}];

const Router = () => {
    return(
        <Switch>
            <Route
              path='/basic'
              component={Basic}
              // render={() => {
              //   return(
              //     <Basic users={users} />
              //   );
              // }}
            />
        </Switch>
    );
}

export default Router;
