import { gql } from "@apollo/client";
export const LOAD_MOVIES = gql`
    query {
	    movies {
	    id,
        name,
        genre,
        actor {
            id,
            name,
            }
	    }
    }
`
export const DETAIL_MOVIES = (id) => {
   return gql`
   query {
    movie(id: ${id}){
    name,
    actor {
        name
    },
        genre
    }
    }
    `
} 