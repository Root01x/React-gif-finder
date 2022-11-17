import { useState } from "react"

//Este componente dibuja el input para agregar una nueva categoria

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState(''); //Se crea un nuevo estado para guardar el valor del input

    const onInputChange = ({target}) => { //Esta funcion se ejecuta cada vez que el input cambia
        setinputValue(target.value);  //Actualiza el estado del input

    }

    const onSubmit = (event) => { //Una vez se presiona Enter se actualiza el estado inicial con la funcion onNewCategory

        event.preventDefault();
        if( inputValue.trim().length  <= 1) return; 
        onNewCategory(inputValue.trim()) //funcion para actualizar el estado inicial
        setinputValue('') // Se actualiza el estado del input a cero
    }

  return (
      <form onSubmit={ onSubmit }>
          <input 
               type="text"
               placeholder="Buscar gifs"
               value={ inputValue } 
               onChange={onInputChange} //
           />        
        </form>
  )
}
