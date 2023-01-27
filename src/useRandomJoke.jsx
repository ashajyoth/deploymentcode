import React, {useEffect, useState} from 'react'

export default function useRandomJoke(firstName, lastName) {
    const [joke, setJoke] = useState("")
    useEffect(() => {
        const fetchJoke = async (e) => 
           await fetch (`http://api.icdb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
              .then (response => response.json() )
              .then (data => setJoke(data.value.joke))
              fetchJoke()
}, [firstName, lastName]);
return joke
  
}
