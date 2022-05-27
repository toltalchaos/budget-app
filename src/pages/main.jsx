import React, { useContext } from 'react';
import AuthContext from '../components/authentication/auth';
import { Redirect, useRouteMatch} from "react-router-dom";
import ToDoApp from './../examples/examples';
import { render } from '@testing-library/react';


const Main = (props) => {
  const auth = useContext(AuthContext);
  // if (auth.authenticate) {
  //   return (<ToDoApp/>)
  // } 
  // else {
  //   return (<Redirect to="/login" />);
  // }
  return (<ToDoApp/>)
}
 
export default Main;