import React, { useContext } from 'react'
import { MyContext } from '../'

function Trees() {
    const { trees } = useContext(MyContext)

    return (
      <div>
        <h1>Trees That I Own...</h1>
        {trees.map(({ id, type }) => (
          <h2 key={id}>{type}</h2>
        ))}
      </div>
    );
}

export default Trees
