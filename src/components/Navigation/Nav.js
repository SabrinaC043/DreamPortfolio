import React from 'react';

export default function Nav({ setPage }) {

    return (
        <nav>
            <p onClick={() => setPage('about')}>about</p>
            <p onClick={() => setPage('portfolio')}>portfolio</p>
            {/* <p onClick={() => setPage('contact')}>contact</p> */}
            <p onClick={() => setPage('resume')}>resume</p>
        </nav>


    )
} 