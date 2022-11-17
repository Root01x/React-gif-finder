import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState( true )

    const getImages = async() => {

        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }
   //El useEffect solo se ejecuta la primera vez que el componente se crea
    useEffect(() => {  
    
        getImages();
    
    }, [])


    return {
        images: images,
        isLoading: isLoading
    }
 
}
