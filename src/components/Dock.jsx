import React from 'react'
import "./dock.scss"

const Dock = ({windowsState, setWindowsState}) => {
  return (
    <footer className='dock'> 

        <div 
          className="icon github" 
          onClick={() => setWindowsState(state => ({ ...state, github: true }))}
          title="GitHub Projects"
        >
          <img src="/doc-icons/github.svg" alt="" />
        </div>

        <div 
          className="icon note" 
          onClick={() => setWindowsState(state => ({ ...state, note: true }))}
          title="Notes"
        >
          <img src="/doc-icons/note.svg" alt="" />
        </div>

        <div 
          className="icon pdf" 
          onClick={() => setWindowsState(state => ({ ...state, resume: true }))}
          title="Resume"
        >
          <img src="/doc-icons/pdf.svg" alt="" />
        </div>

        <div 
          className="icon calender" 
          onClick={()=>{window.open("https://calendar.google.com","_blank")}}
          title="Calendar"
        >
          <img src="/doc-icons/calender.svg" alt="" />
        </div>

        <div 
          className="icon spotify" 
          onClick={() => setWindowsState(state => ({ ...state, spotify: true }))}
          title="Spotify"
        >
          <img src="/doc-icons/spotify.svg" alt="" />
        </div>

        <div 
          className="icon mail" 
          onClick={()=>{window.open("mailto:kunalraikwar12367@gmail.com","_blank")}}
          title="Mail"
        >
          <img src="/doc-icons/mail.svg" alt="" />
        </div>

        <div 
          className="icon link" 
          onClick={()=>{window.open("https://github.com/KunalRaikwar02","_blank")}}
          title="Portfolio Link"
        >
          <img src="/doc-icons/link.svg" alt="" />
        </div>
        
        <div 
          className="icon cli" 
          onClick={() => setWindowsState(state => ({ ...state, cli: true }))}
          title="CLI Terminal"
        >
          <img src="/doc-icons/cli.svg" alt="" />
        </div>
    </footer>
  )
}

export default Dock