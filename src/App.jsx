import { useState } from 'react'

import './App.css'

function App() {
 
const [monthly,setMonthly] = useState(false)

  return (
    <>
      <div className='body'>
        <h1>Our Pricing</h1>
        <div className="toggle">
          <label className='name'>Annually</label>
            <input checked={monthly} onChange={() => setMonthly(!monthly)} type = "checkbox" className='checkbox' id='checkbox'/>
            <label for = "checkbox" className = "label">
              <div  className="ball"></div>
            </label>
            <label className='name'>Monthly</label>
 
        </div>
        <div className="wrapper">
        <div className="containers">
          <div className="first">
            <span className='title'>Basic</span>
            {monthly &&(
            <div className = "biggy">$19.99</div>
            )}
            {!monthly &&(
               <div className = "biggy">$199.99</div>
            )}
            <hr></hr>
            <p>500 GB Storage</p>
            <hr></hr>
            <p className="">2 Users Allowed</p>
            <hr></hr>
            <p>Send up to 3 GB</p>
            <hr></hr>
            <button className='learn'>LEARN MORE</button>
          </div>
          <div className="second">
          <span className='title'>Professional</span>
          {monthly && (
            <div className="biggy">$24.99</div>
          )}
           {!monthly && (
            <div className="biggy">$249.99</div>
          )}
            <hr></hr>
            <p>500 GB Storage</p>
            <hr></hr>
            <p className="">2 Users Allowed</p>
            <hr></hr>
            <p className=''>Send up to 3 GB</p>
            <hr></hr>
            <button className='learns'>LEARN MORE</button>
          </div>
          <div className="firsts">
          <span className='title'>Master</span>
          {monthly && (
            <div className="biggy">$39.99</div>
          )}
          {!monthly && (
            <div className="biggy">$399.99</div>
          )}
            
            <hr></hr>
            <p>500 GB Storage</p>
            <hr></hr>
            <p className="">2 Users Allowed</p>
            <hr></hr>
            <p>Send up to 3 GB</p>
            <hr></hr>
            <button className='learn'>LEARN MORE</button>
          </div>
        </div>
        </div>
      </div>
      
    </>
  )
}

export default App
