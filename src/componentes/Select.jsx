import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
function Select(props) {
    const navigate = useNavigate()
    const [Pselect, setPselect] = useState("")
    const seleccion = async() => {
        const obtener = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        const {results} = await obtener.json();
        setPselect(results);
    };
    const detalles = async () => {
        if (Pselect) navigate(`/pokemones/${Pselect}`);
        else alert("Debe seleccionar un pokemon");
    };
    useEffect(() => {
        seleccion();
    }, []);

    return (
        <div>
            <select className="form-select" onChange={((e) =>  setPselect(e.target.value))}>
                <option >pokemones</option>
                {props.list.map((item) => (<option key={item.name} value={item.name} >{item.name}</option>))}
            </select>
            <button className="btn btn-dark" onClick={detalles}>Ver detalles</button>
        </div>

    )
}
export default Select
