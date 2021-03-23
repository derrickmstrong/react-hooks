import React, { useContext } from 'react'
import { MyContext } from '../'

function Apples() {
    const { apples } = useContext(MyContext)

    return (
        <div>
            <h1>Apples That I've Heard Of...</h1>
            {apples.map(({id, type}) => <h2 key={id}>{type}</h2>)}
        </div>
    )
}

export default Apples
