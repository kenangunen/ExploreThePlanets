import React from 'react';
import './App.scss';
import Header from "./component/header/index"
import Planets from './component/planets/index';
import About from './component/about/index';
import OurTeam from './component/ourTeam/index';
import Footer from './component/footer/index'

function App() {
  return (
    <div className="App">
      <Header />
      <Planets />
      <About />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;
