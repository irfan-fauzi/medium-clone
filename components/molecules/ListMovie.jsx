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
    <div>
      <div className='h-10'></div>
      <h1 className='text-2xl text-center uppercase'>List Movie</h1>
      <div className='h-5'></div>
      <div className='max-w-screen-lg gap-5 mx-auto p-5 grid grid-cards'>
      {
        movies.movies.map((movie) => (
          <article key={movie.id}>
            <div className='shadow-lg p-3 md:h-[150px] bg-gradient-to-tr from-orange-400 to-orange-300 rounded-xl'>
              <p className='text-2xl text-white font-semibold'>{movie.name}</p>
              <p className='text-white font-light italic'>{movie.genre}</p>
            </div>
          </article>
        ))
      }
      </div>
    </div>
  )
    }
}

export default ListMovie