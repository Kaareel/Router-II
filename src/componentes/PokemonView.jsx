import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
function PokemonView(props) {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({
        name:"",
        stats:[],
        sprites:{
            front_default:""
        }
    })
    useEffect(() => {
        async function traerInfo() {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
                const data = await response.json()
                setPokemon(data)
            } catch (error) {
                alert(error)
            }
        }

        traerInfo()
    }, [])
    return (
        <div className="card">
            <img src={pokemon.sprites.other?.dream_world.front_default} className="card-img-top border-0" alt={pokemon.name} />
                <h5 className="card-title">{pokemon.name}</h5>
                {pokemon.stats.map((stats) => (
                    <div className="estadisticas">
                        <ul>
                            <li>{stats.stat.name}: {stats.base_stat}</li>
                        </ul>
                        
                    </div>
                ))}
        </div>

    )
}
export default PokemonView
