import { useState } from 'react';
import './App.css';
import Display from "./components/Display/Display";
import Form from "./components/Form/Form";
import { topics } from "./constants";

function App() {
  let [isLight, switchTheme] = useState(true)
  let [data, setData] = useState(topics)

  return (
    <div className={"App " + (isLight ? "light" : "dark")}>
      <header className="App-header" >
        <h1>Header</h1>
      </header>
      <Display data={data} isLight={isLight}/>
      <hr style={{width: "95%", border: "1px solid lightgrey"}}/>
      <Form isLight={isLight} />
    </div >
  );
}


export default App;
