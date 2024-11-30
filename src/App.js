import { createContext, useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card/Card'
import apiService from './apiService';

export const AppContext = createContext({})

function App() {
  let [isLight, switchTheme] = useState(true)
  let [cardNumber, setCardNumber] = useState(0)
  let [data, setData] = useState([])
  let resource = data[cardNumber]
  let isThird = (cardNumber % 4 === 0)
  let username = "Grigory"
  let initialValue = {username: username}

  // добавь useEffect для получения данных с api при первом рендере
  // запиши их в состояние data
  // для получения данных используй: apiService.get()


  return (
    <AppContext.Provider value={initialValue}>
    <div className={"App " + (isLight ? "light" : "dark")}>
      <header className="App-header" >
        <h1>Header</h1>
      </header>
      <main className="main">
        <div className='display'>
          <button type='button' className={isLight ? "light" : "dark"} onClick={()=>{setCardNumber(cardNumber-1)}} disabled={cardNumber<1} >Previous</button>
          <Card key={resource?.id} name={resource?.name} description={resource?.description} link={resource?.link} isLight={isLight} />
          <button on type='button'className={isLight ? "light" : "dark"} onClick={()=>{setCardNumber(cardNumber+1)}} disabled={cardNumber>data.length-2} >Next</button>
        </div>

        <button className={isLight ? "light" : "dark"} onClick={() => { switchTheme(!isLight) }}>Switch Theme</button>
      </main>
    </div ></AppContext.Provider>
  );
}


export default App;
