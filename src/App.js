import React from "react"
import Header from "./components/Header"
import Maintop from "./components/Maintop"
import Mainbot from "./components/Mainbot"
import Footer from "./components/Footer"



function App() {
  return (
    <div className="App">
      <div className="container">
      <Header/>
      <Maintop/>
      <Mainbot/>
      <Footer/>
      </div>

    </div>
  );
}

export default App;
