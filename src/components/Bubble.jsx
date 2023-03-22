import React from 'react'

export default function Bubble({ profilePic, children, time, isNew, pic, msg }) {
  return (
    <div className={`${isNew ? 'bg-neutral-100' : 'bg-neutral-white'} rounded-md p-4 text-md flex flex-row gap-4`}>
        <img src={profilePic} alt="profile pic" className=' aspect-square h-12' />
        <div className="flex flex-col w-full">
            <div className="flex flex-row">
                <div className='flex flex-col items-start w-full'>
                    <div className='flex flex-row flex-wrap items-center'>
                        <p >
                            {children}
                            {/* <a href='#' className=' aspect-square h-2 w-2 bg-primary-red rounded-full ml-1'>''</a> */}
                        </p>
                    </div>
                    <p className='text-neutral-400'>{time} ago</p>
                </div>
                <div className="grow"></div>
                {pic && <img src={pic} className='aspect-square h-12'/>}
            </div>
            {msg && <p className='p-3 border-solid border border-neutral-300 mt-2 text-neutral-500'>{msg}</p>}
        </div>
    </div>
  )
}
