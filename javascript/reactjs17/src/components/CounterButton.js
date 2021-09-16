import React, { useState } from 'react'

const CounterButton = ({ color }) => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <button style={{ backgroundColor: color }} className='btn' onClick={() => setValue(( value+1 )) }>{value}</button>
        </div>
    )
}

CounterButton.defaultProps = {
    color: 'blue'
}

export default CounterButton