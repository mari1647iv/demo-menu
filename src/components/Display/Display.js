import { useState } from 'react';
import Card from '../Card/Card'

function Display({data, isLight}) {
  let [cardNumber, setCardNumber] = useState(0)
  let resource = data[cardNumber]

  return (
    <main className="main">
      <div className='display'>
        <button type='button' className={isLight ? "light" : "dark"} onClick={()=>{setCardNumber(cardNumber-1)}} disabled={cardNumber<1} >Previous</button>
        <Card key={resource?.id} name={resource?.name} description={resource?.description} link={resource?.link} isLight={isLight} />
        <button on type='button'className={isLight ? "light" : "dark"} onClick={()=>{setCardNumber(cardNumber+1)}} disabled={cardNumber>data.length-2} >Next</button>
      </div>
    </main>
  );
}


export default Display;
