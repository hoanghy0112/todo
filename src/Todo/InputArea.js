
import { useRef, useState, useContext, useEffect } from 'react'
import React from 'react'

import { ButtonPopup } from './Components/Popup/Popup.js'


function FormInput({ data, onChange, inputRef }) {
  const [ formData, setFormData ] = useState(data)
  useEffect(() => {
    inputRef.current.value = formData.title
  }, [formData])

  const handleChange = ( event, newState ) => {
    // onChange(event, newState)
    setFormData(prev => ({
      ...prev,
      ...newState
    }))
  }

  return (
    <form className="edit-form">
      <label className="edit-input">
        <div className="title">Title</div>
        <input 
          type="text" 
          value={formData.title}
          onChange={event => {
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
  // const inputRef = useRef(null)
  // const titleRef = useRef(null)
  // const descriptionRef = useRef(null)
  // const dateRef = useRef(null)
  // const editRef = useRef(null)
  // const confirmRef = useRef(null)

  const [ formData, setFormData ] = useState({
    title: '',
    description: '',
    date: '',
  })

  const formData2 = useRef({
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

  const handleChange2 = (event, newState) => {
    formData2.current = {
      ...formData.current,
      ...newState
    }

  }

  const handleEdit = () => {

  }

  // const handleConfirm = () => {
  //   const value = inputRef.current.value 
  //   if (value !== '') addTask({ 
  //     title: value,
  //     description: descriptionRef.current.value,
  //     date: dateRef.current.value,
  //   })
  //   inputRef.current.value = ''
  //   descriptionRef.current.value = ''
  //   dateRef.current.value = ''
  //   inputRef.current.focus()
  //   // popupDisappear()
  // }

  const inputRef = useRef()

  return (
    <div className="input-area">
      <input 
        ref={inputRef} 
        className="task-input" 
        onChange={(event) => {
          handleChange(event, { title: event.target.value})
        }}
        // onKeyPress={(event) => {
        //   if (event.code === 'Enter') {
        //     handleConfirm()
        //   }
        // }} 
        // onChange={event => {
        //   if (inputRef.current.value.length === 1) {
        //     inputRef.current.value = inputRef.current.value.toUpperCase()
        //   }
        //   titleRef.current.value = inputRef.current.value
        //   handleChange(event, { title: inputRef.current.value })
        // }}
        type="text" 
        placeholder="Enter your task here..." 
      />
      {/* <input ref={inputRef} className="task-input" /> */}
      <ButtonPopup defaultState="disappear" width={300} buttonTitle={<i className="fas fa-pencil-alt"></i>} >

        <FormInput data={formData2} inputRef={inputRef} onChange={handleChange2}>

        </FormInput>
        {/* <form className="edit-form" >

          <label className="edit-input">
            <div className="title">Title</div>
            <input 
              ref={titleRef} 
              type="text" 
              onChange={event => {
                handleChange(event, { title: event.target.value })
              }}
              // onChange={event => (inputRef.current.value = titleRef.current.value) && handleChange(event, { title: inputRef.current.value })} 
              // onKeyPress={event => {
              //   if (event.code === 'Enter') {
              //     event.preventDefault()
              //     descriptionRef.current.focus()
              //   }
              // }}
            />
          </label>
        </form> */}

        {/* <form className="edit-form" onSubmit={(e) => e.preventDefault()}>
          <label className="edit-input">
            <div className="title">Title</div>
            <input 
              ref={titleRef} 
              type="text" 
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
        </form> */}
      </ButtonPopup>
      <button className="btn"><i className="fas fa-arrow-right"></i></button>
      {/* <Popup>
        <button className="btn " ref={editRef} onClick={handleEdit}><i className="fas fa-pencil-alt"></i></button>
        <form className="edit-form" onSubmit={(e) => e.preventDefault()}>
          <label className="edit-input">
            <div className="title">Title</div>
            <input 
              ref={titleRef} 
              type="text" 
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
      </Popup> */}
      {/* <button className="btn " ref={confirmRef} onClick={handleConfirm}><i className="fas fa-arrow-right"></i></button> */}
    </div>
  )
}

// // function SubmitButton({ handleConfirm }) {
// //               const { popupDisappear } = useContext(popupResources)
// //   return (
// //                 <button className="btn" onClick={() => {
// //                   handleConfirm()
// //                   popupDisappear()
// //                 }
// //                 }>Submit</button>

// //   )
// // }

// import { useRef, useState, useContext } from 'react'
// import React from 'react'

// import { ButtonPopup } from './Components/Popup/Popup.js'

// export default function InputArea({ addTask }) {
//   return (

//       <ButtonPopup buttonTitle={<i className="fas fa-pencil-alt"></i>}  >

//           <label className="edit-input">
//             <div className="title">Title</div>
//             <input 
//               // ref={titleRef} 
//               type="text" 
//               // onChange={event => (inputRef.current.value = titleRef.current.value) && handleChange(event, { title: inputRef.current.value })} 
//               // onKeyPress={event => {
//               //   if (event.code === 'Enter') {
//               //     event.preventDefault()
//               //     descriptionRef.current.focus()
//               //   }
//               // }}
//             />
//           </label>
//           <label className="edit-input">
//             <div className="title">Description</div>
//             <textarea 
//               rows={5} 
//               cols={20}
//               // ref={descriptionRef}
//               onKeyPress={event => {
//                 if (event.code === 'Enter') {
//                 }
//               }}
//               // onChange={event => handleChange(event, { description: descriptionRef.current.value })}
//             ></textarea>
//           </label>
//           <label className="edit-input">
//             <div className="title">Date</div>
//             <input 
//               type="time" 
//               // ref={dateRef} 
//               // onChange={event => handleChange(event, { description: dateRef.current.value })}
//               // onKeyPress={event => {
//               //   if (event.code === 'Enter') {
//               //     event.preventDefault()
//               //     // handleConfirm()
//               //     // popupDisappear()
//               //   }
//               // }}
//             />
//           </label>
//       </ButtonPopup>
//   )
// }