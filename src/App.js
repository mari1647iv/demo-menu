import { useState } from 'react';
import './App.css';
import Display from "./components/Display/Display";
import Form from "./components/Form/Form";
import { topics } from "./constants";

function App() {
  let [isLight, switchTheme] = useState(true)
  let [isFormVisible, setIsFormVisible] = useState(false)
  let [data, setData] = useState(topics)

  return (
    <div className={"App " + (isLight ? "light" : "dark")}>
      <header className="App-header" >
        <h1>Header</h1>
      </header>
      <Display data={data} isLight={isLight}/>
      <button className={isLight ? "light" : "dark"} onClick={() => { switchTheme(!isLight) }}>Switch Theme</button>
      {
          <>
            <hr style={{width: "95%", border: "1px solid lightgrey"}}/>
            <Form isLight={isLight} />
            <button onClick={()=>{setIsFormVisible(!isFormVisible)}}>Скрыть форму</button>
          </>
      }
      <CustomButton >
        Кликов: 
      </CustomButton>
    </div >
  );
}

function useCustomState(init)  {
  if (!init || (typeof(inti)!=="number") || ((4 < init) && (init < 16))) { init = 0}
  else {init=init}
  let [state, setState] = useState(init)

  return [state, setState]
}

function CustomButton({children, initialState}) {
  let [state, setState] = useCustomState(67)

   function onClick() { setState(state+1) }

   return (
      <button className="red-button fancy-button" type="button" onClick={onClick}>
         {children} {state}
      </button>
   )
}






export default App;
