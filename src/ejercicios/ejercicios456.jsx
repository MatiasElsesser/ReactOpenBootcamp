import { useEffect, useState } from "react";

export function Clock () {
    const [ state, setState] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: 'Martin',
        apellidos: 'San José'
    })

    const tick = () => {
        setState(prev => {
            let edad = prev.edad ++
            return {
                ...prev,
                fecha: new Date(),
                edad
            }
        })
    }

    useEffect(() =>{
        setInterval(() => tick(), 1000)
        return (
            clearInterval()
        )
    },[])

    return (
        <div>
            <h2>Hora Actual: {state.fecha.toLocaleTimeString()}</h2>
            <h3>{state.nombre} {state.apellidos}</h3>
            <h1>Edad: {state.edad}</h1>
        </div>
    )
}
