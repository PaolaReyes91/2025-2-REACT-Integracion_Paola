import React from "react";
import {Link} from "react-router-dom";



function Home() {
  return( 
  <div>
    <h1> Navegador de usuarios</h1>
    <Link to="/user/1"/>
    <Link to="/user/2"/>
    <Link to="/user/3"/>
    <Link to="/user/4"/>
    <Link to="/user/5"/>
    <Link to="/user/6"/>
    <Link to="/user/7"/>
    <Link to="/user/8"/>
    <Link to="/user/9"/>
    <Link to="/user/10"/>

  </div>
);
}
export default Home; 