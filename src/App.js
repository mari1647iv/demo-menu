import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card'
import { data } from "./data"

function App() {
  let [isLight, switchTheme] = useState(true)

  return (
    <div className={"App " + (isLight ? "light" : "dark")}>
      <header className="App-header" >
        <h1>Header</h1>
      </header>
      <main className="main">
        {
          data.map((resource) => (
            <Card key={resource.id} name={resource.name} description={resource.description} link={resource.link} isLight={isLight} />
          ))
        }
        <button className={isLight ? "light" : "dark"} onClick={() => { switchTheme(!isLight) }}>Switch Theme</button>
      </main>
    </div >
  );
}


export default App;
