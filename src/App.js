import { useEffect, useState } from 'react';
import './App.css';
import Display from "./components/Display/Display";
import Form from "./components/Form/Form";
import apiService from './apiService';

function App() {
  let [isLight, switchTheme] = useState(true)
  let [data, setData] = useState([])

  useEffect(()=>{
    apiService.get().then((resp)=>{
      console.log(resp)
      setData(resp)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])


  return (
    <div className={"App " + (isLight ? "light" : "dark")}>
      <header className="App-header" >
        <h1>Header</h1>
      </header>
      <Display data={data} isLight={isLight}/>
      <button className={isLight ? "light" : "dark"} onClick={() => { switchTheme(!isLight) }}>Switch Theme</button>
      <Form isLight={isLight}/>
    </div >
  );
}


export default App;
