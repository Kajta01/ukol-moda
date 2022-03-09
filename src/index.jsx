import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Header from './komponenty/Header/Header'
import Footer from './komponenty/Footer/Footer'

import Dresses from './komponenty/Main/Dresses/Dresses'
import Shoes from './komponenty/Main/Shoes/Shoes'
import Accessories from './komponenty/Main/Accessories/Accessories'

const App = () => (
<div class="container">
  <Header title="Moda"/>
  <Dresses/>
  <Shoes/>
  <Accessories/>
  <Footer year={2022} author="Kamča"/>
</div>
);

render(<App />, document.querySelector('#app'));
