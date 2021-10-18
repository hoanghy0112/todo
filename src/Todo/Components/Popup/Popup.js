
import React, { useRef, useContext, useState } from 'react'
import { PopupContext } from '../../Contexts/PopupContext.js'


function PopupResource({ children }) {
  const groupRef = useRef(null)
  const [ state, setState ] = useState('appear')

  const popupAppear = () => {
    // groupRef.current.style.display = 'flex'
    groupRef.current.classList.add('appear')
    groupRef.current.classList.remove('disappear')
    setState(prev => 'appear')
  }

  const popupDisappear = () => {
    // groupRef.current.style.animation = 'disappear 0.3s ease-out forwards'
    // setTimeout(() => {
    //   groupRef.current.style.display = 'none'
    //   groupRef.current.style.animation = 'appear 0.3s ease-out'
    // }, 300)
    // groupRef.current.style.display = 'none'
    groupRef.current.classList.remove('appear')
    groupRef.current.classList.add('disappear')
    setState(prev => 'disappear')
  }

  return (
    <PopupContext.Provider 
      value={{
        popupAppear, 
        popupDisappear,
        groupRef,
        state,
      }}
    >
      <div>{ children }</div>
    </PopupContext.Provider>
  )
}

let PopupWrapper = Child => ({ children }) => {
  return (
    <div className="popup">
      <PopupResource>
        <Child>
          { children }
        </Child>
      </PopupResource>
    </div>
  )
}

function Example({ children }) {
  const { popupAppear, popupDisappear, groupRef, state } = useContext(PopupContext) 
  return (
    <React.Fragment>
      <button className="btn" onClick={ state === 'appear' ? popupDisappear : popupAppear} >Enable popup</button>
      <div ref={groupRef} class="popup-group">{ children }</div>
    </React.Fragment>
  )
}

export let ExamplePopup = PopupWrapper(Example) 
