import React, {useState,useEffect} from 'react';



const API_URL="https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743"
const Contact = () => {

  const [movies, setMovies]=useState([]);

    useEffect(()=>{
      fetch(API_URL)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      })
    
    },[]) 


  return (
    <div>
         <div>
            <div className='h1 mh  text-dark text-muted'id="Products">Top-rated movies</div>
            </div>
            
            

                {
                    
                    movies.map((movieReq,i)=>{
                      return <h1 key={i}>{movieReq.original_title}</h1>
                    })
                }  
                    
                
        </div>
  )
}

export default Contact;