import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LOAD_MOVIES } from '../../GraphQL/Queries'


const ListMovie = () => {
  const {data, loading, error} = useQuery(LOAD_MOVIES)
  const [movies, setMovies] = useState(undefined)
  
  useEffect(() => {
    setMovies(data)
    return () => {
      setMovies([])
    }
  },[data])
 
 
  if(loading){
    return <p>loading..</p>
  }
  if(movies){
  return (
    <>
      <h1 className='text-2xl text-center uppercase'>List Movie</h1>
      {
        movies.movies.map((movie) => (
          <article key={movie.id}>
            <div className='border'>
              <p>{movie.name}</p>
            </div>
          </article>
        ))
      }
    </>
  )
    }
}

export default ListMovie