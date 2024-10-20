import "./Card.css";
import { useState } from "react";

function Card({ name, description, link, isLight }) {
  let [isMaximized, setIsMaximized] = useState(false)

  function handleClick() {
    console.log(isMaximized)
    setIsMaximized(!isMaximized)
  }

  return (
    <div className={"Card Card-" + ((isLight) ? "lightmode" : "darkmode") + (isMaximized ? " maximized" : " minimized")} tabIndex="0" onClick={handleClick}>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={link}>{'<'} {name.toLowerCase()} docs {'>'}</a>
    </div>
  )
}

export default Card;