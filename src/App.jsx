import React from "react";
import { BrowserRouter, Route ,Routes ,Link} from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <div>  
      <Header/>
      <Footer />
    </div>
  );
}



export default App;
