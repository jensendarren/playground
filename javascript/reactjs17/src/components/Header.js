import React from 'react'
import Button from './Button'

const Header = ({ onAdd, showAdd }) => {
    return (
        <header className='header'>
            <Button onClick={ onAdd }
                text={showAdd ? 'Close' : 'Add'} />
        </header>
    )
}

export default Header