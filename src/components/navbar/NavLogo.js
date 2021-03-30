import React from 'react'

const Navlogo = ({image, imageTitle}) => {
    return (
        <div className='flex flex-row items-center'>
            <img src={image} alt={imageTitle} className="w-16 h-16"/>
            <h2 className='text-2xl font-bold ml-8 hidden md:block'>pagubris</h2>
        </div>
    )
}

export default Navlogo
