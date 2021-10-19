
import { useRef, useState, useEffect } from 'react'
import React from 'react'

import { ButtonPopup } from './Components/Popup/Popup.js'


function FormInput({ title, onChange, inputRef }) {
  const [ formData, setFormData ] = useState({ title })
  useEffect(() => {
    inputRef.current.value = formData.title
  }, [formData.title])

  const handleChange = ( event, newState ) => {
    setFormData(prev => {
      const newFormData = { ...prev, ...newState }
      onChange(newFormData)
      return newFormData
    })
  }

  return (
    <form className="edit-form">
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
          onChange={event => handleChange(event, { description: event.target.value })}
        ></textarea>
      </label>
      <label className="edit-input">
        <div className="title">Date</div>
        <input 
          type="time" 
          onChange={event => handleChange(event, { date: event.target.value })}
        />
      </label>
    </form>
  )
}


export default function InputArea({ addTask }) {
  const [ title, setTitle ] = useState('')
  const formData = useRef({
    title: '',
    description: '',
    data: '',
  })
  const inputRef = useRef()

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
        <FormInput 
          onChange={handleChange} 
          onSubmit={handleSubmit} 
          title={title} 
          inputRef={inputRef}
        ></FormInput>
      </ButtonPopup>
      <button onClick={handleSubmit} className="btn"><i className="fas fa-arrow-right"></i></button>
    </div>
  )
}
