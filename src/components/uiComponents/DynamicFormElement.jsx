import React from 'react'
import Input from './Input'
import Ignore from './Ignore'
import Radio from './Radio'
import Select from './Select'
import Switch from './Switch'
import Group from './Group'
import Description from './Descriptions'
import './dynamic.css'



function DynamicFormElement(props) {
  const { sort, label, description, jsonKey, uiType, icon, level, placeholder, pattern } = props.edata
  const required = props.edata.validate.required
  const immutable = props.edata.validate.immutable
  const subParameters = props.edata.subParameters

  switch (uiType) {
    case 'Input':
      return <div className='borders '  ><label  >{label}</label><Description description={description} /><Input edata={props.edata} /></div>
    case 'Group':
      return <div className='borders' >  <label>{label}</label><Description description={description} /><Group edata={props.edata} /></div>
    case 'Radio':
      return <div className='borders' ><Radio edata={props.edata} /></div>
    case 'Select':
      return <div className='borders' ><Select edata={props.edata} /></div>
    case 'Switch':
      return <div className='borders'><Switch edata={props.edata} /></div>
    case 'Ignore':
      return <Ignore edata={props.edata} />
  }
}
export default DynamicFormElement
