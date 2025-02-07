import { useReducer } from "react";

function Form({isLight}) {

  function formDataReducer(state, updatedData) {
    if (!!updatedData 
      && ((!updatedData.hasOwnProperty("name")) || (updatedData.name.length>0)) 
      && ((!updatedData.hasOwnProperty("description")) || (updatedData.description?.length>0)) 
      && ((!updatedData.hasOwnProperty("link")) || (updatedData.link?.length>0))
    ) {
      let newstate = Object.assign(state, updatedData)
      return newstate
    }
    return state
  }

  const [ formdata, setformdata ] = useReducer(formDataReducer, {
    name: "Name",
    description: "Description",
    link: "Link"
  })

  function changeEventHandler(event) {
    let tempdata = {}
    tempdata[event.target.name] = event.target.value
    setformdata(tempdata)
  }

  console.log(formdata)

  return (
    <div className={(isLight ? "light" : "dark")}>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        {
          Array.from(formdata).map((field)=>(
            <input type="text" placeholder={"Enter topic "+field[0]} name={field[0]} value={field[1]} onChange={changeEventHandler}/>
          ))
        }
        <button className={isLight ? "light" : "dark"} type='submit' onClick={()=>{}} >Add Technology</button>
      </form>
    </div >
  );
}


export default Form;
