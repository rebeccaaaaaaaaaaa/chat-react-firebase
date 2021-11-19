import React from 'react'
import './ChatWindow.css'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default function ChatWindow() {
    return (
      <div className="chatWindow">
        <div className="chatWindow--header">
          <div className="chatWindow--headerInfo">
            <img
              className="chatWindow--avatar"
              alt=""
              src="https://www.w3schools.com/howto/img_avatar2.png"
            />
            <div className="chatWindow--name">Rebecca</div>
          </div>
          <div className="chatWindow--headerButtons">
            <div className="chatWindow--btn">
              <SearchIcon style={{ color: "#919191" }} />
            </div>
            <div className="chatWindow--btn">
              <AttachFileIcon style={{ color: "#919191" }} />
            </div>
            <div className="chatWindow--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </div>
        <div className="chatWindow--body"></div>
        <div className="chatWindow--footer">
          <div className="chatWindow--pre">
            <div className="chatWindow--pre--btn">
              <div className="chatWindow--btn">
                <InsertEmoticonIcon style={{ color: "#919191" }} />
              </div>
            </div>
          </div>

          <div className="chatWindow--inputArea">
              <input className="chatWindow--input" type="text" placeholder="Digite uma mensagem" />
          </div>

          <div className="chatWindow--pós">
            <div className="chatWindow--btn">
                <SendIcon style={{ color: "#919191" }} />
              </div>
          </div>
        </div>
      </div>
    );
}


