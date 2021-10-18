
import { useRef } from 'react'
import React from 'react'

export const popupResources = React.createContext()

export function TogglePopup({ onClick, children }) {
  return (
    <div className="toggle-popup" onClick={onClick}>
      { children }
    </div>
  )
}

export function PopupDefault({ width, children}) {
  // const outerRef = useRef(null)
  const groupRef = useRef(null)

  const popupAppear = () => {
    groupRef.current.style.display = 'flex'
    // outerRef.current.style.display = 'block'
  }

  const popupDisappear = () => {
    // outerRef.current.style.display = 'none'
    groupRef.current.style.animation = 'disappear 0.3s ease-out forwards'
    setTimeout(() => {
      groupRef.current.style.display = 'none'
      groupRef.current.style.animation = 'appear 0.3s ease-out'
    }, 300)
  }

  return (
    // <div className="popup">
      <popupResources.Provider value={{
        popupAppear,
        popupDisappear,
      }}>
        {/* <TogglePopup
          onClick={popupAppear}
        >
          { children[0] }
        </TogglePopup> */}
        {/* <div
          className="popup-outer"
          ref={outerRef}
          // onClick={popupDisappear}
        ></div> */}
        <div ref={groupRef} className="popup-group" style={{width}}>
          <div>{ children }</div>
        </div>
      </popupResources.Provider>
  )
}

export default function Popup({ width, children }) {
  const outerRef = useRef(null)
  const groupRef = useRef(null)

  const popupAppear = () => {
    groupRef.current.style.display = 'flex'
    outerRef.current.style.display = 'block'
  }

  const popupDisappear = () => {
    outerRef.current.style.display = 'none'
    groupRef.current.style.animation = 'disappear 0.3s ease-out forwards'
    setTimeout(() => {
      groupRef.current.style.display = 'none'
      groupRef.current.style.animation = 'appear 0.3s ease-out'
    }, 300)
  }


  return (
    <div className="popup">
      <popupResources.Provider value={{
        popupAppear,
        popupDisappear,
      }}>
        <TogglePopup
          onClick={popupAppear}
        >
          { children[0] }
        </TogglePopup>
        <div
          className="popup-outer"
          ref={outerRef}
          onClick={popupDisappear}
        ></div>
        <div ref={groupRef} className="popup-group" style={{width}}>
          <div>{ children.slice(1) }</div>
        </div>
      </popupResources.Provider>
    </div>
  )
}