import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



// Este es el componente padre en donde se van a renderizar todos los componentes hijos

export const GifExpertApp = () => {  // se crea el componente y se exporta

    const [categories, setcategories] = useState(['One Punch', 'One Piece']); // creamos un estado inicial de la App con useState

    const onAddCategory = (event) => {  //funcion para agregar una nueva categoria

      if ( categories.includes(event) ) return; //valida si existe una categoria repetida
      
      setcategories([event, ...categories]) //actualiza el estado agregando una nueva categoria

    } 

  return (
    <>  
      
        <h1>GifExpertApp</h1>

        {/* se llama al componente hijo que dibuja el form de agregar categoria y luego se envia como props
        la definicion de la funcion de agregar 
        categoria */}

        <AddCategory  
          
         onNewCategory={ onAddCategory } 
        
        />

          {
              categories.map(anime => < GifGrid key={anime} category={anime} /> )  //Se usa el metodo map para listar todas las categorias
          } 
        
    </>
  )
}
