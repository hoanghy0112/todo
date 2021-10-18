
// import userEvent from '@testing-library/user-event'
import React, { useRef, useContext } from 'react'
import { PopupContext } from '../../Contexts/PopupContext.js'

// const { popupAppear, popupDisappear, state } = useContext(PopupContext.Provider);

function Popup({ width, height, children }) {
  const groupRef = useRef(null)

  const popupAppear = () => {
    groupRef.current.style.display = 'flex'
  }

  const popupDisappear = () => {
    groupRef.current.style.animation = 'disappear 0.3s ease-out forwards'
    setTimeout(() => {
      groupRef.current.style.display = 'none'
      groupRef.current.style.animation = 'appear 0.3s ease-out'
    }, 300)
  }

  return (
    <PopupContext.Provider 
      value={{
        popupAppear, popupDisappear
      }}
    >
      { children }
    </PopupContext.Provider>
  )
}

export function PopupWrapper({ children }) {
  return (
    <Popup {...args} >
      { children }
    </Popup>
  )
}

export function ExamplePopup({ width, height, children }) {
  
  function InnerPopup({ width, height, children }) {
    const { popupAppear, popupDisappear } = useContext(PopupContext)
    return (
      <React.Fragment>
        <button onClick={popupAppear} >Enable popup</button>
        { children }
      </React.Fragment>
    )
  }

  return (
    <Popup width={width} height={height} >
      <InnerPopup>
        {children}
      </InnerPopup>
    </Popup>
  )
}

export let ExamplePopup = () =>  (
  <PopupWrapper>
    {(function() {
      const { popupAppear, popupDisappear } = useContext(PopupContext)
      return (
        <React.Fragment>
          <button onClick={popupAppear} >Enable popup</button>
          { children }
        </React.Fragment>
      )
    })()}
  </PopupWrapper>
)