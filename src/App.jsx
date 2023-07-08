import { useState } from 'react'
import './App.css'

let App = () => {
  const [count, setCount] = useState(0)
  const [click_power, setClickPower] = useState(1)
  const [cost , setCost] = useState(100)
  const [is_power_up,setIsPowerUP] = useState(false)
  const [posive_earn , setPosiveEarn] = useState(false)
  const [posive_earn_power , setPosiveEarnPower] = useState(0)
  const [posive_earn_cost , setPosiveEarnCost] = useState(200)
  const [is_posive_earn , setIsPosiveEarn] = useState(false)


  if (is_power_up === true && count === cost || is_power_up === true && count > cost ) {
    setCount((count) => count - cost)
    setCost((cost) => cost + cost)
    setClickPower((click_power) => click_power + click_power)
    setIsPowerUP((is_power_up) => is_power_up = false)
  }
  
  
  return (
    <>
      <h1 className="counter">{count}</h1>
      <div className="card">
        <button className="click_btn" onClick={() => setCount((count) => count + click_power)}>
        -----
        </button>
      </div>
      
      <div className = "shop">
        <h2>shop</h2>
        <button className = "power_up_btn" onClick={() => setIsPowerUP((is_power_up) => is_power_up = true)}>power_up</button>
        <h4> power + {click_power}</h4>
        <h4> cost is {cost}</h4>
      </div>
    </>
  )
}

export default App
