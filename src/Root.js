import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import IndexPage from 'pages/IndexPage';

const Root = () => (
  <BrowserRouter>
    <Route exact path="/" component={IndexPage} />
  </BrowserRouter>
);

export default Root;
