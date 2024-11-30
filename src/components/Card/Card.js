import { AppContext } from "../../App";
import "./Card.css";
import { useContext, useState } from "react";

function Card({ name, description, link, isLight }) {
  let [isMaximized, setIsMaximized] = useState(false)

  function handleClick() {
    console.log(isMaximized)
    setIsMaximized(!isMaximized)
  }

  return (
    <div className={"Card Card-" + ((isLight) ? "lightmode" : "darkmode")} tabIndex="0" onClick={handleClick}>
      <h3>{name}</h3>
      {isMaximized ? 
      <>
        <p>{description}</p>
        <InfoBlock isLight={isLight}  />

        <a href={link} target="_blank" rel="noreferrer">{'<'} {name.toLowerCase()} docs {'>'}</a>
      </>
      : <></>}
    </div>
  )
}

function InfoBlock({isLight }) {
  return (<CustomButton isLight={isLight}  ></CustomButton>)
}

function CustomButton({isLight }) {
  return (<Text isLight={isLight} />)
}

function Text({isLight}) {
  const context = useContext(AppContext)

  return (<p style={{
   padding: "4px", color: isLight?"black":"white", borderWidth: "1px", borderStyle: "solid", borderRadius: "15px", borderColor: isLight?"black":"white"}}> Learn it now, {context.username}!</p>)
}



export default Card;