//Importamos los componenetes de react
import React, {Component} from 'react';
//Aca esta el estado de vida de nuestra aplicacion, los estados y los eventos
class Stateful extends Component{
 //En el render esta todo lo que se ve en html 
 constructor(props){
   super(props);
   this.state={
     hello: 'Hola mundo'
   }
 } 
 
 render(){
    return (
      <h1>{}this.state.hello</h1>
    )
  }

};

export default Stateful;