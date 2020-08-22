//Este es un archivo jsx
import React from 'react';

const HolaMundo =()=>{
  const hola ="Hola mundo desde jsx";
  const isTrue =true;
  return(

    <div className="Holamundo">
      <p>{hola}</p>
      <img src="https://arepa.s3.amazonaws.com/react.png"/>
      {isTrue ? <h2>Es verdadero</h2> : <h2>Es falso!</h2>}
    </div>

  );
};

export default HolaMundo;
