import React from 'react'
import { useLocation } from 'react-router-dom'
export default function Second() {
    const {state} = useLocation();
    console.log(state, 'sssss');
  return (
    <>
    <h2>second</h2>
    <h2>{state.post_id}</h2>
    <h2>{state.post_name}</h2>
    <h2>{state.post_description}</h2>

    </>
  )
}
///animation authentication unit test github action custom hook example form 
