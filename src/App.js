import React, { useContext } from 'react'
import { MyContext } from './'
import Apples from './components/Apples'
import Trees from './components/Trees'

function App() {
  const {trees} = useContext(MyContext)
  console.log(trees)
  return (
    <div>
      <h1>Trees I've Heard Of</h1>
      <ul>
        {trees.map(({type, id}) => <li key={id}>{type}</li>)}
      </ul>
      <Trees />
      <Apples />
    </div>
  );
}

export default App;
