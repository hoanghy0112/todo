
import React, { useRef, useContext, useState, useEffect, forwardRef } from 'react'
import { PopupContext } from '../../Contexts/PopupContext.js'
import './Popup.css'


function PopupResource({ children, defaultState }) {
  const groupRef = useRef(null)
  const [ state, setState ] = useState(() => {
    return defaultState
  })
  useEffect(() => {
    // groupRef.current.style.display = defaultState === 'appear' ? 'flex' : 'none'
  }, [])

  const popupAppear = () => {
    groupRef.current.classList.add('appear')
    groupRef.current.classList.remove('disappear')
    setState(prev => 'appear')
  }

  const popupDisappear = () => {
    groupRef.current.classList.remove('appear')
    groupRef.current.classList.add('disappear')
    setState(prev => 'disappear')
  }

  return (
    <PopupContext.Provider value={{ popupAppear, popupDisappear, groupRef, state, }} >
      { children }
    </PopupContext.Provider>
  )
}

export let PopupWrapper = ( Child ) => ({ children, defaultState, ...args }) => {
  return (
    <div className="popup">
      <PopupResource defaultState={defaultState}>
        <Child {...args} > { children } </Child>
      </PopupResource>
    </div>
  )
}

function Button({ children, buttonTitle, onClick, width, ...args }) {
  const { popupAppear, popupDisappear, groupRef, state } = useContext(PopupContext) 
  return (
    <React.Fragment>
      <button 
        className="btn" 
        onClick={ state === 'appear' ? popupDisappear : popupAppear} 
        { ...args }
      >
        { buttonTitle }
      </button>
      <div ref={groupRef} className="popup-group" style={{width}}>
        <div onClick={popupDisappear} className="popup-outer"></div>
        <div className="popup-group-content">{ children }</div>
      </div>
    </React.Fragment>
  )
}

function ListItem({ visible, children }) {
  const { popupAppear, popupDisappear, groupRef, state } = useContext(PopupContext)
  if (visible==='enter') popupAppear()
  else if (visible==='leave') popupDisappear()

  return (
      <React.Fragment>
        <div ref={groupRef} className="popup-group">
          <div class="popup-group-content">{ children }</div>
        </div>
      </React.Fragment>
  )
}
export let ListItemPopup = PopupWrapper(ListItem)


export let ButtonPopup = forwardRef(
  (props, ref) => React.createElement(
    PopupWrapper(
      forwardRef((props, ref) => <Button {...props} ref={ref} />)),
      { ...props, ref }
  )
)