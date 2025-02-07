import { useReducer } from "react";

function Form({isLight}) {

  const formdata = [
    ["name", ""],
    ["description", ""],
    ["link", ""]
  ]

  return (
    <div className={(isLight ? "light" : "dark")}>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        {
          Array.from(formdata).map((field)=>(
            <input type="text" placeholder={"Enter topic "+field[0]} name={field[0]} value={field[1]}/>
          ))
        }
        <button className={isLight ? "light" : "dark"} type='submit' onClick={()=>{}} >Add Technology</button>
      </form>
    </div >
  );
}


export default Form;
