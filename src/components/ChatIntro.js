import React from 'react';
import './ChatIntro.css'


export default function ChatIntro() {
    return (
        <div className="chatIntro">
          <img src="/intro.svg" alt=""/>
          <h1> Esteja logado no Facebook</h1>
          <h2> A aplicação utiliza seu nome e foto do facebook.</h2>
        </div>
    )
}
