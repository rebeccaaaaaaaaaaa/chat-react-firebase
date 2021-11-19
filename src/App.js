import React, {useState, useEffect} from 'react';
import './App.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import ChatListItem from './components/ChatListItem'
import ChatIntro from './components/ChatIntro'
import ChatWindow from './components/ChatWindow'

function App() {

  const [chatlist, setChatlist] = useState([
    {
      chatId: 1,
      title: "Maria",
      avatar: "https://www.w3schools.com/howto/img_avatar2.png",
    },
	{
		chatId: 2,
		title: "João",
		avatar: "https://www.w3schools.com/howto/img_avatar2.png",
	  },
	  {
		chatId: 3,
		title: "Raffael",
		avatar: "https://www.w3schools.com/howto/img_avatar2.png",
	  },
	  {
		chatId: 4,
		title: "Rebecca",
		avatar: "https://www.w3schools.com/howto/img_avatar2.png",
	  }
  ]);
  const [activeChat, setActiveChat] = useState({});

  return (
    <div className="app-window">
		<aside className="sidebar">
			<header>
				<img className="header--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt=""/>
				<div className="header--buttons">
					<div className="header--btn">
						<DonutLargeIcon style={{color: '#919191'}}/>
					</div>
					<div className="header--btn">
						<ChatIcon style={{color: '#919191'}}/>
					</div>
					<div className="header--btn">
						<MoreVertIcon fontSize="small" style={{color: '#919191'}}/>
					</div>
				</div>
			</header>
			<div className="search">
				<div className="search--input">
					<SearchIcon style={{color: '#919191'}}/>
					<input type="search" id="more-vert-checkbox" placeholder="Procurar ou começar uma nova conversa"/>
				</div>
			</div>
			<div className="chatlist">
				{chatlist.map((item, key) => (
					<ChatListItem 
						key={key}
						data={item}
						active={activeChat.chatId === chatlist[key].chatId}
						onClick={() => setActiveChat(chatlist[key])}
					/>
				))}
			</div>
		</aside>
		<div className="contentarea">

			 {activeChat.chatId !== undefined && 
			 	<ChatWindow />
			 }
			  {activeChat.chatId === undefined && 
			 	<ChatIntro />
			 }
			
		</div>
    </div>
  );
}

export default App;
