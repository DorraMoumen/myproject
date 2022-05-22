import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Upload from '../components/Upload';
import Header from '../components/Header';
import FilesList from '../components/FilesList';

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <div className="main-content">
        <Switch>
          <Route component={Upload} path="/" exact={true} />
          <Route component={FilesList} path="/list" />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;
