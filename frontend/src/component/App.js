import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainForm from './MainForm';
import TabTile from './TabTile';
import Faltu from './Faltu';
import Dashboard from './Dashboard';

function App() {

  return (
    <Switch>
      <Route exact path="/" component={MainForm} />
      <Route exact path="/tabtile" component={TabTile} />
      <Route exact path="/faltu" component={Faltu} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
   
  );
}

export default App;
