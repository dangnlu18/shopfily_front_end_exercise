import React, {useEffect, useState} from 'react'
// import { Page } from '@shopify/polaris';
import axios from 'axios'

function PhotoCard(){

    const [image, setImage] = useState(null)

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {

        

        const fetchData = async () =>{
            const result = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
            setImage(result.data)
        }


        fetchData()
    },[])
    

    return(
        
        
        <div>
            {image && 
                <div>
                    <h1>{image.title}</h1>
                    <img src={image.url} alt={image.title}/> 
                    <p>{image.explanation}</p>
                </div>
                
                }


        </div>
    )
}

export default PhotoCard