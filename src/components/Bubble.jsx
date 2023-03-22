import React from 'react'
import Club from './Club'
import User from './User'
import Post from './Post'

export default function Bubble({ post }) {
  return (
    <div className={`${post.new ? 'bg-neutral-100' : 'bg-neutral-white'} rounded-md p-4 text-md flex flex-row gap-4`}>
        <img src={require(`../images/${post.user.avatar}`)} alt="profile pic" className=' aspect-square h-12' />
        <div className="flex flex-col w-full">
            <div className="flex flex-row">
                <div className='flex flex-col items-start w-full'>
                    <div className='flex flex-row flex-wrap items-center'>
                        <p >
                            <User name={post.user.name} /> {post.text} {post.club && <Club name={post.club}/>}{post.post && <Post name={post.post}/>} {post.new && <span className='relative after:absolute after:top-2 left-2 after:bg-primary-red after:rounded-full after:w-2 after:h-2'></span>}
                        </p>
                    </div>
                    <p className='text-neutral-400'>{post.time} ago</p>
                </div>
                <div className="grow"></div>
                {post.img && <img src={require(`../images/${post.img}`)} className='aspect-square h-12'/>}
            </div>
            {post.msg && <p className='p-3 border-solid border border-neutral-300 mt-2 text-neutral-500'>{post.msg}</p>}
        </div>
    </div>
  )
}
