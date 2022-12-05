import React from 'react'
import { useState, useEffect} from 'react'
import getBreeds from '../hooks/getBreeds';

const ListaPerros = () => {

    const initialBreeds = [
        {
            id: 1,
            name: 'boxer'
        },
        {
            id: 2,
            name: 'Pitbull'
        }
    ];

    
    const [breeds, setBreeds] = useState(initialBreeds);

    useEffect(()=> {
        updateBreeds();
    },[]) 

    const updateBreeds = () => {
        getBreeds()
            .then((newBreeds) => {
                setBreeds(newBreeds);
            })

    }

  return (
    <select onChange={() => alert("change")}>
        {breeds.map(breed => (
             <option value={breed.id} key={breed.id}>{breed.name}</option>
        ))}
    </select>
    
  )
}
export default ListaPerros