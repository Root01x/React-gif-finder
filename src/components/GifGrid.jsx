import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"


//Este componente rederiza una lista de imagenes por cada categoria

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs( category ) // Este es un custom hooks que se encagar de cargar las imagenes

   
   

  return (
    <>
        <h3>  {category}  </h3>

        {
            isLoading && (<h2>Cargando... </h2> )
        }
        
        <div className="card-grid">
            {
                images.map( (image) =>(

                    <GifItem 
                        key={image.id} 
                       {...image} //Esparce todas las props para ser usadas posteriormente
                    />

                ))
            }
        </div>
       
    </>
  )
}
