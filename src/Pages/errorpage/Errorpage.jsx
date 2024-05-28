import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../Components/Components'

function Errorpage() {
    return (
        <Container>
            <div className='h-screen w-full flex flex-col gap-10 justify-center items-center'>
                <p className='text-[4rem] capitalize'>work in progress 🧑‍🏭</p>
                <Link to="/" className='border p-4  rounded-full'>Go to Home</Link>
            </div>
        </Container>
    )
}

export default Errorpage