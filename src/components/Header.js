import React from 'react'
import angrybrid from './images/angrybird.png';

function Header() {
    return (
            <header>
                <img src={angrybrid} alt='Problem' />
                <p>Meme Generator</p>
            </header>
    )
}

export default Header
