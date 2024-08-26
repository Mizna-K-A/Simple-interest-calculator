import './App.css'
import { useState } from 'react'
import { TextField, Stack, Button } from '@mui/material'
// import TextField from '@mui/material/TextField';

function App() {

  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)


  const [isPrincipleValid, setIsPrincipleValid] = useState(false)
  const [isRateValid, setIsRateValid] = useState(false)
  const [isYearValid, setIsYearValid] = useState(false)


  const vaildateInput = (inputTag)=>{
    const {name,value} = inputTag
    console.log(name,value);
    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    // console.log(!!value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      setPrinciple(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleValid(false) : setIsPrincipleValid(true)
    }else if(name=="rate"){
      setRate(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsRateValid(false) : setIsRateValid(true)
    }else if(name=="year"){
      setYear(value)
      !!value.match(/^\d*\.?\d+$/) ? setIsYearValid(false) : setIsYearValid(true)
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("inside handleCalculate");
    if(principle && rate && year){
      // calculate
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form compeletly")
    }
  
  }
  const resetCalculate = ()=>{
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInterest(0)
    setIsPrincipleValid(false)
    setIsRateValid(false)
    setIsYearValid(false)
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest Easily</p>
        <div className='d-flex flex-column justify-content-center align-items-center bg-warning shadow p-3 rounded text-light'>
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className="mt-5">
          <div className='mb-3'>
            <TextField value={principle || ""} onChange={e=>vaildateInput(e.target)} name='principle' id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' />
          </div>
          {
            isPrincipleValid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Principle Amount</div>
          }   
           <div className='mb-3'>
            <TextField value={rate || ""} onChange={e=>vaildateInput(e.target)} name='rate' id="outlined-basic1" label="Rate of Interest (p.a) %" variant="outlined" className='w-100' />
          </div>
          {
            isRateValid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Rate</div>
          } 
          <div className='mb-3'>
            <TextField value={year || ""} onChange={e=>vaildateInput(e.target)} name='year' id="outlined-basic2" label="Time Period (yr)" variant="outlined" className='w-100' />
          </div>
          {
            isYearValid &&
            <div className="mb-3 text-danger fw-bolder">Invalid Year</div>
          } 
          <Stack direction="row" spacing={2}>
            <Button disabled={isPrincipleValid || isRateValid || isYearValid} onClick={handleCalculate} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate</Button>
            <Button onClick={resetCalculate} style={{ width: '50%', height: '70px' }} variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
