
import { useRef, useState, useContext } from 'react'
import Popup, { popupResources } from './Popup.js'
import './Popup.css'
import React from 'react'

export default function InputArea({ addTask }) {
  const inputRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const dateRef = useRef(null)
  const editRef = useRef(null)
  const confirmRef = useRef(null)

  // const { popupDisappear } = useContext(popupResources)
  // console.log(useContext(popupResources))

  const [ formData, setFormData ] = useState({
    title: '',
    description: '',
    date: '',
  })

  const handleChange = ( event, newState ) => {
    setFormData(prev => ({
      ...prev,
      ...newState
    }))
  }

  const handleEdit = () => {

  }

  const handleConfirm = () => {
    const value = inputRef.current.value 
    if (value !== '') addTask({ 
      title: value,
      description: descriptionRef.current.value,
      date: dateRef.current.value,
    })
    inputRef.current.value = ''
    descriptionRef.current.value = ''
    dateRef.current.value = ''
    inputRef.current.focus()
    // popupDisappear()
  }

  return (
    <div className="input-area">
      <input 
        ref={inputRef} 
        className="task-input" 
        onKeyPress={(event) => {
          if (event.code === 'Enter') {
            handleConfirm()
          }
        }} 
        onChange={event => {
          if (inputRef.current.value.length === 1) {
            inputRef.current.value = inputRef.current.value.toUpperCase()
          }
          titleRef.current.value = inputRef.current.value
          handleChange(event, { title: inputRef.current.value })
        }}
        type="text" 
        placeholder="Enter your task here..." 
      />
      <Popup>
        <button className="btn " ref={editRef} onClick={handleEdit}><i className="fas fa-pencil-alt"></i></button>
        <form className="edit-form" onSubmit={(e) => e.preventDefault()}>
          <label className="edit-input">
            <div className="title">Title</div>
            <input 
              ref={titleRef} 
              type="text" 
              // value={ inputRef.current?.value || '' } 
              onChange={event => (inputRef.current.value = titleRef.current.value) && handleChange(event, { title: inputRef.current.value })} 
              onKeyPress={event => {
                if (event.code === 'Enter') {
                  event.preventDefault()
                  descriptionRef.current.focus()
                }
              }}
            />
          </label>
          <label className="edit-input">
            <div className="title">Description</div>
            <textarea 
              rows={5} 
              cols={20}
              ref={descriptionRef}
              onKeyPress={event => {
                if (event.code === 'Enter') {
                  // event.preventDefault()
                  // dateRef.current.focus()
                }
              }}
              onChange={event => handleChange(event, { description: descriptionRef.current.value })}
            ></textarea>
          </label>
          <label className="edit-input">
            <div className="title">Date</div>
            <input 
              type="time" 
              ref={dateRef} 
              onChange={event => handleChange(event, { description: dateRef.current.value })}
              onKeyPress={event => {
                if (event.code === 'Enter') {
                  event.preventDefault()
                  // handleConfirm()
                  // popupDisappear()
                }
              }}
            />
          </label>
          <SubmitButton handleConfirm={handleConfirm}></SubmitButton>
        </form>
      </Popup>
      <button className="btn " ref={confirmRef} onClick={handleConfirm}><i className="fas fa-arrow-right"></i></button>
    </div>
  )
}

function SubmitButton({ handleConfirm }) {
              const { popupDisappear } = useContext(popupResources)
  return (
                <button className="btn" onClick={() => {
                  handleConfirm()
                  popupDisappear()
                }
                }>Submit</button>

  )
}