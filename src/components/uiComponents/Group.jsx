import React from 'react'
import DynamicFormElement from './DynamicFormElement'

function Group({ edata }) {
    const subParameters = edata.subParameters
    // 'ignore' ui type uses '.' to denote children of a group ui type. 
    // used the same notation for overall form state for consistency.
    subParameters.forEach(subParameter => {
        subParameter.jsonKey = edata.jsonKey + "." + subParameter.jsonKey
    })

    return (
        <div>
            {subParameters.map(subParameter => {
                console.log("subParameter: ", subParameter)
                return <DynamicFormElement edata={subParameter} />
            })}
        </div>
    )
}

export default Group