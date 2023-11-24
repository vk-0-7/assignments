import React from 'react'
import './App.css'
import DynamicFormElement from './uiComponents/DynamicFormElement.jsx'
import { useState, useRef } from 'react'





function component(ele) {
  return (
    <DynamicFormElement edata={ele} />
  )
}


function App() {
  const [form, setForm] = useState({})
  const [parsedJson, setParsedJson] = useState([])
  const inputRef = useRef(null)

  const updateForm = (jsonKey, value) => {
    const newForm = { ...form, [jsonKey]: value }
    console.log("new form: ", newForm)
    setForm(newForm)
  }

  const parseJson = (x) => {
    try {
      return JSON.parse(x);
    } catch (e) {
      alert("Incorrect json: " + e.message)
      return [];
    }
  }

  const onMakeForm = () => {
    const json = parseJson(inputRef.current.value)
    setParsedJson(json)
    setForm({})
  }

  return (
    <div className='flex-container'>
      <div className='input'>
        <label>Input </label>
        <div style={{ display: "block" }}>
          <button onClick={onMakeForm}> Make form</button>
          <button onClick={() => {
            setParsedJson([])
            inputRef.current.value = ""
          }}>Clear</button>
        </div>

        <textarea
          ref={inputRef}
          placeholder='Enter text here....'
          className='json-input'
        />

      </div>
      <div>
        <label>Output</label>
        <div className='output'>
          <FormContext.Provider value={{ form: form, updateForm: updateForm }}>
            <form onSubmit={e => {
              e.preventDefault()
              alert(JSON.stringify(form))
            }}>
              {parsedJson.map(component)}
              {/* <input type='submit' value="Submit" /> */}
            </form>
          </FormContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default App
export const FormContext = React.createContext(null)