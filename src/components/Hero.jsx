import React, { useState, useEffect } from 'react'
import '../Css/Hero.css'

// Component for the typewriter effect on text

const useTypewriter = (text, speed = 10) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};
//Right now, the typewriter text, skips the 2nd character, so iadded a space at beginning.
const Typewriter = ({ text, speed }) => {
    const displayText = useTypewriter(text, speed);

    return <span><h3 className = "typewriter-text">{displayText}</h3></span>;
  };


const Hero = () => {
    return (
        < >
            <div className="backGround">
              <div className = "hero_container">
                <div className = "Welcome_Box">
                  <div className='CatchPhrase'>
                    <div className='Phrase1'><h1 >WELCOME TO <span style={{ color: '#fd5c63' }}>RIGHT-CROSS</span></h1></div>
                    <div className='Phrase2'><h3>The <span style={{ color: '#fd5c63' }}>Boxing Gym</span> For All Your Needs..</h3></div>
                  </div>
                  <button className="startToday_button">Learn More and Join Today</button>
                </div>
              </div>
            </div>
        </>
    )
    }
    export default Hero