import React from "react";
import './App.css';
import Mash from './components/Mash';
import ShowPooch from './components/ShowPooch';
import Navigation from './components/Navigation';

const URL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [poochImg, setPoochImg] = React.useState(null);
  const gotPooch = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPoochImg(data)
    
  }
  return (
    <div className="App">
      <Navigation />
      <Mash poochSearch={gotPooch}/>
      <ShowPooch gotPooch={poochImg}/>
    </div>
  );
};

export default App;
