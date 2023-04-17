import { useState } from "react";

function Lista(){
  const [lista, setLista] = useState([]);
  const [texto, setTexto] = useState('');

  function Input(event){
    setTexto(event.target.value);
  }

  function Add(){
    setLista([...lista, texto]);
    setTexto('');
  }


  return (
  <div>
      <input type="text" value={texto} onChange={Input}/>
      <button onClick={Add} >ADICIONAR</button>
       <ul>{
          lista.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> 
  </div>
    
  )
}

export default Lista;