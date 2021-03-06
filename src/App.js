import './App.css';


import Header from './components/Header'
import Client from './components/Client';
import Operator from './components/Operator';
import Campaign from './components/Campaign';
import Subscription from './components/Subscription';
import ClientForm from './pages/ClientForm';
import AddClient from './pages/AddClient';
import EditClient from './pages/EditClient'
import AddOperator from './pages/AddOperator'
import EditCampaign from './pages/EditCampaign'
import history from './pages/history';
import NewClientForm from './pages/NewClientForm';

import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import Table  from './components/Table';

function App() {
  return (
    <Router history={history}>
    <div className="App">
      
  <Header></Header>
  <Switch>
            <Route exact path="/" component={Client} />
            <Route exact path="/operator" component={Operator} />
            <Route exact path="/campaign" component={Campaign} />
            <Route exact path="/Subscription" component={Subscription} />
            <Route exact path="/AddClient" component={AddClient} />
            <Route exact path="/NewClientForm" component={NewClientForm} />
            
            <Route exact path="/EditClient/:clientid" component={EditClient} />
            <Route exact path="/operator/AddOperator" component={AddOperator} />
            <Route exact path="/campaign/EditCampaign" component={EditCampaign} />
   
    </Switch>

    </div>
    </Router>
  );
}

export default App;

