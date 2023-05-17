import React, { useState } from 'react'
import { FirstOneToKnowContainer } from './style'

const Index = () => {
    const [email, setEmail] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        setEmail("")
    }

    return (
        <FirstOneToKnowContainer>
            <div className='container' id='contactus'>
                <div className='cta_heading'>
                    <h1>Be the first to know</h1>
                </div>
                <div className='cta_form'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='youremail@gmail.com' />
                        <button type='submit'>
                            <img src='images/sendMessageIcon.svg' alt='sendMessageIcon' />
                        </button>
                    </form>
                </div>
            </div>
        </FirstOneToKnowContainer >
    )
}

export default Index