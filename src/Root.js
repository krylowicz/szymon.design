import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from 'pages/Home';

const Root = () => (
  <BrowserRouter>
    <Route exact path="/" component={HomeView} />
  </BrowserRouter>
);

export default Root;
