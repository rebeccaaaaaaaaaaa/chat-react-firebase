/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState} from 'react'
import EmojiPicker from 'emoji-picker-react'
import './ChatWindow.css'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicIcon from '@mui/icons-material/Mic';

export default function ChatWindow() {

    const [text, setText] = useState('')

    const [emojiOpen, setEmojiOpen] = useState(false)

    const handleEmojiClick = (e, emojiObject) => {
        setText(text + emojiObject.emoji)
    }

    const handleMicClick = () => {

    }

    const handleSendClick = () => {
      
    }
   

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

        <div className="chatWindow--emojiArea" style={{height: emojiOpen ? '200px' : '0'}}>
          <EmojiPicker 
            onEmojiClick={handleEmojiClick}
            disableSearchBar
            disableSkinTonePicker
          />
        </div>

        <div className="chatWindow--footer">
          <div className="chatWindow--pre">
            <div className="chatWindow--pre--btn">
              <div className="chatWindow--btn">
                <CloseIcon style={{ color: "#919191" }}
                  onClick={() => setEmojiOpen(false)}
                  style={{width: emojiOpen ? '30px' : '0'}}
                />
                <InsertEmoticonIcon style={{ color: "#919191" }} 
                 style = {{width: emojiOpen ? '0' : '40px'}}
                 onClick={() => setEmojiOpen(!emojiOpen)}/>
              </div>
            </div>
          </div>

          <div className="chatWindow--inputArea">
              <input className="chatWindow--input" 
                     type="text" 
                     placeholder="Digite uma mensagem" 
                     value={text}
                     onChange={(e) => setText(e.target.value)}

              />
          </div>

          <div className="chatWindow--pós">
            <div className="chatWindow--btn">
            {text === '' && 
               <MicIcon style={{ color: "#919191" }}
                onClick={handleMicClick}
               
               />
            }
            {text !== '' &&
              <SendIcon style={{ color: "#919191" }} 
                 onClick={handleSendClick}
              />
            }
              </div>
          </div>
        </div>
      </div>
    );
}


