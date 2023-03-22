import { useState } from 'react';
import './App.css';
import Bubble from './components/Bubble';
import data from './data';


function App() {
  const [posts, setPosts] = useState(data);
  const markAsRead = () => {
    setPosts(prev => prev.map(p => {return {...p, new: false}}));
  }
  return (
    <div className='bg-neutral-300 w-screen h-screen pt-20'>
      <div className={`max-w-2xl m-auto
       bg-neutral-white rounded-lg 
       flex flex-col p-6 `}>
        <div className='flex flex-row mb-6 items-center'>
          <p className=' font-bold mr-2 text-2xl'>Notifications</p>
          <p className=' text-neutral-white bg-primary-blue px-2.5 text-xs leading-none font-bold py-1 rounded-md'>3</p>
          <div className='grow'/>
          <button className=' text-neutral-500 text-md' onClick={markAsRead}>Mark all as read</button>
        </div>
        <div className='flex flex-col gap-2'>
          {posts.map((post, idx) => <Bubble key={idx} post={post}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;
