import React from 'react'

function Transparent() {
    return (
        <div className='bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900 h-full w-full relative' >
            <div className="flex justify-center bottom-0 scale-0 animate-[scale-in_0.3s_ease-in-out_1s_forwards]">
                <div className="flex items-center justify-center absolute bg-neutral-900/80 rounded-full p-2 ">
                    <div className="flex items-center justify-center  h-24 w-24 bg-gradient-to-b from-green-300  to-green-700 rounded-full">
                        <span className='scale-200'>↑</span>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Transparent