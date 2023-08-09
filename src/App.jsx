import { useState } from 'react'
import './App.css'
import Birthdays from './Birthdays'
import data from './data'
function App() {
  const [people, setPeople] = useState(data);

return (
    <>
      <div className="app-container">
        <h2 className='title'>{people.length} Birthday Today</h2>
        <Birthdays data={people} />
        <button disabled={!people} onClick={() => setPeople([])} className={ !people?'btn-disabled':'' } >Clear All</button>
      </div>
    </>
  )
}

export default App
