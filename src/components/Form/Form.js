import { useEffect, useState } from 'react';


function Form({isLight}) {

  return (
    <div className={(isLight ? "light" : "dark")}>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" placeholder="Enter Course Name"/>
        <input type="text" placeholder="Enter Course Description"/>
        <input type="text" placeholder="Provide Link to Documentation"/>
        <button className={isLight ? "light" : "dark"} type='submit' onClick={()=>{}} >Add Technology</button>
      </form>
    </div >
  );
}


export default Form;
