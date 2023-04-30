import React, { useContext, useState } from 'react'
import { FormContext } from '../App'
import Description from './Descriptions'





function Radio(props) {
    props = props.edata
    const { updateForm } = useContext(FormContext)

    const onChange = e => {
        console.log("on change radio " + props.jsonKey + e.target.value)
        updateForm(props.jsonKey, e.target.value)
    }

    console.log("Radio: ", props)

    return <div>
        {props.validate.options.map(e => <div><label>{e.label} </label> <Description description={e.description} /><input type="radio" name={props.jsonKey} value={e.value} onChange={onChange} /><br/></div>)}
    </div>
}
export default Radio