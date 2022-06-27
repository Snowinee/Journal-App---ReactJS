import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Card'
import './css/general.css'
import data from './JournalData'

export default function App() {
    const card = data.map(item => {
        return <Main 
            item = {item}
        />
    })
    return (
        <>
            <Navbar />
            {card}
        </>
    )
}
