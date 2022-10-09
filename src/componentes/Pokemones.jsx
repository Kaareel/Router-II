import { useEffect, useState } from 'react'
import Select from './Select'
function Pokemones() {

    const [pokemones, setPokemones] = useState([])
    useEffect(() => {
        async function traerLista() {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
                const data = await response.json()
                setPokemones(data.results)
            } catch (error) {
                alert(error)
            }
        }

        traerLista()
    }, [])

    return (
        <div className="pokemon">
            <h1>Seleciona un Pokemon</h1>
            <Select list={pokemones}/>
        </div>
    )
}
export default Pokemones