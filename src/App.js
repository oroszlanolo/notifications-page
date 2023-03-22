import './App.css';
import Bubble from './components/Bubble';
import User from './components/User';
import Post from './components/Post';
import Club from './components/Club';


function App() {
  return (
    <div className='bg-neutral-300 w-screen h-screen pt-20'>
      <div className={`max-w-2xl m-auto
       bg-neutral-white rounded-lg 
       flex flex-col p-6 `}>
        <div className='flex flex-row mb-6 items-center'>
          <p className=' font-bold mr-2 text-2xl'>Notifications</p>
          <p className=' text-neutral-white bg-primary-blue px-2.5 text-xs leading-none font-bold py-1 rounded-md'>3</p>
          <div className='grow'/>
          <button className=' text-neutral-500 text-md'>Mark all as read</button>
        </div>
        <div className='flex flex-col gap-2'>
          <Bubble 
            profilePic={require("./images/avatar-mark-webber.webp")}
            isNew={true}
            time={'1m'} >
            <User name={'Mark Webber'} /> reacted to your recent post <Post name={'My first tournament today!'}/>
            </Bubble>
          <Bubble 
            profilePic={require("./images/avatar-angela-gray.webp")}
            isNew={true}
            time={'5m'}>
            <User name={'Angela Gray'} /> followed you
          </Bubble>
          <Bubble 
            profilePic={require("./images/avatar-jacob-thompson.webp")}
            isNew={true}
            time={'1 day'}>
            <User name={'Jacob Thompson'} /> has joined your group <Club name={'Chess Club'} /> 
            
          </Bubble>
          <Bubble 
            profilePic={require("./images/avatar-rizky-hasanuddin.webp")}
            isNew={false}
            time={'5 days'}
            msg={"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."}>
            <User name={'Rizky Hasanuddin'} /> sent you a private message
          </Bubble>
          <Bubble 
            profilePic={require("./images/avatar-kimberly-smith.webp")}
            isNew={false}
            time={'1 week'}
            pic={require("./images/image-chess.webp")}>
            <User name={'Kimberly Smith'} /> commented on your picture
          </Bubble>
          <Bubble 
            profilePic={require("./images/avatar-nathan-peterson.webp")}
            isNew={false}
            time={'1 week'}>
            <User name={'Nathan Peterson'} /> reacted to your recent post <Post name={'5 end-game strategies to increase your win rate'} />
          </Bubble>
          <Bubble 
            profilePic={require("./images/avatar-anna-kim.webp")}
            isNew={false}
            time={'2 weeks'}>
            <User name={'Anna Kim'} /> left the group <Club name={'Chess Club'} />
          </Bubble>
        </div>
      </div>
    </div>
  );
}

export default App;
