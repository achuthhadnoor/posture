import React from 'react'

function Transparent() {
    return (
        <div className='bg-gradient-to-r from-neutral-950 via-neutral-900/40 to-neutral-950 h-full w-full relative' >
            <div className="flex justify-center bottom-0">
                <div className="flex items-center justify-center absolute bg-neutral-900/40 rounded-full p-2 scale-up">
                    <div className="flex items-center justify-center  h-24 w-24 bg-gradient-to-b from-green-300  to-green-700 rounded-full">
                        <span className='scale-200'>↑</span>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Transparent