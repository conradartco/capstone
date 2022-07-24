// General Imports
import React, { useState } from 'react';

// Component Imports
import './Image.css';

const Image = ({ zoom, ...rest }) => {
    const [click, setClick] = useState(false)
  
    const setFlag = () => {
      setClick(true)
    }
  
    const unsetFlag = () => {
      setClick(false)
    }
  
    if (!zoom) return <img {...rest} />
    else
      return (
        <>
          {click ? (
            <div onClick={unsetFlag} className={"lightbox show"}>
              <img {...rest} className={"show_image"}></img>
            </div>
          ) : (
            <img {...rest} onClick={setFlag}></img>
          )}
        </>
      )
  }
  
  export default Image;