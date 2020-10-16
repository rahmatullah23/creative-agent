import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import ServiceData from './components/Admin/ServiceData/ServiceData';
import AddService from './components/Admin/AddService/AddService';
import AddEmail from './components/Admin/AddEmail/AddEmail';
import Review from './components/Dashboard/Review/Review';
import ServiceList from './components/Dashboard/ServiceList/ServiceList';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router >
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/servicedata">
            <ServiceData />
          </PrivateRoute>
          <Route path="/addservice">
            <AddService />
          </Route>
          <Route path="/addadmin">
            <AddEmail />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/servicelist">
            <ServiceList />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
