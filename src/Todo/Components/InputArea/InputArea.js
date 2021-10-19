
import './InputArea.css'

import { useRef, useState, useEffect } from 'react'
import React from 'react'

import { ButtonPopup } from '../Popup/Popup.js'


export function EditFormBase({ defaultVal, onChange=() => {}, outerRef, onSubmit, ...args }) {
  const [ formData, setFormData ] = useState({ ...defaultVal })
  useEffect(() => {
    if (outerRef) {
      outerRef.current.value = formData.title
      outerRef.current.textContent = formData.title
    }
  }, [formData.title])

  const handleChange = ( event, newState ) => {
    setFormData(prev => {
      const newFormData = { ...prev, ...newState }
      onChange(newFormData)
      return newFormData
    })
  }

  const handleSubmit = (event, ...args) => {
    event.preventDefault()
    onSubmit(formData)
  }

  return (
    <form onSubmit={handleSubmit} onClick={e => e.stopPropagation()} className="edit-form">
      <label className="edit-input">
        <div className="title">Title</div>
        <input 
          type="text" 
          value={formData.title}
          onChange={event => {
            if (formData.title === '') 
              handleChange(event, { title: event.target.value.toUpperCase() })
            else
            handleChange(event, { title: event.target.value })
          }}
        />
      </label>
      <label className="edit-input">
        <div className="title">Description</div>
        <textarea 
          rows={5} 
          cols={20}
          value={formData.description}
          onChange={event => handleChange(event, { description: event.target.value })}
        ></textarea>
      </label>
      <label className="edit-input">
        <div className="title">Date</div>
        <input 
          type="time" 
          value={formData.date}
          onChange={event => handleChange(event, { date: event.target.value })}
        />
      </label>
      <button type="submit" className="btn">Submit</button>
    </form>
  )
}


export default function InputArea({ addTask }) {
  const inputRef = useRef()
  const [ title, setTitle ] = useState('')
  const formData = useRef({
    title: '',
    description: '',
    data: '',
  })

  function handleSubmit(  ) {
    if (formData.current.title !== '') {
      let task = formData.current
      addTask(task)
      setTitle('')
      formData.current = {}
      inputRef.current.focus()
    }
  }

  function handleChange( task ) {
    formData.current = { ...formData.current, ...task }
  }

  return (
    <div className="input-area">
      <input 
        ref={inputRef} 
        value={title}
        className="task-input" 
        onChange={(event) => {
          if (title === '') {
            setTitle(() => event.target.value.toUpperCase())
            handleChange({ title: event.target.value.toUpperCase()})
          }
          else {
            setTitle(() => event.target.value)
            handleChange({ title: event.target.value })
          }
        }}
        type="text" 
        placeholder="Enter your task here..." 
      />
      <ButtonPopup 
        defaultState="disappear" 
        width={300} 
        buttonTitle={<i className="fas fa-pencil-alt"></i>} 
      >
        <EditFormBase 
          onChange={handleChange} 
          onSubmit={handleSubmit} 
          defaultVal={{ title: title || '' }} 
          outerRef={inputRef}
        ></EditFormBase>
      </ButtonPopup>
      <button onClick={handleSubmit} className="btn">
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}
