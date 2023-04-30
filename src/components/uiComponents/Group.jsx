import React from 'react'
import DynamicFormElement from './DynamicFormElement'

function Group({ edata }) {


    return (
        <div>
            {edata.subParameters.map(subParameter => {
                console.log("subParameter: ", subParameter)
                const newSubParameter = {...subParameter, jsonKey: edata.jsonKey + "." + subParameter.jsonKey}
                return <DynamicFormElement edata={newSubParameter} />
            })}
        </div>
    )
}

export default Group