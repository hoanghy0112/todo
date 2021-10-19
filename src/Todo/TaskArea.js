
import { PopupWrapper, ButtonPopup } from './Components/Popup/Popup'
import { PopupContext } from './Contexts/PopupContext'
import React, { useContext, useState } from 'react'

const ListItemPopup = PopupWrapper(function ({popupItem, task, setPopupItem, editTask, deleteTask, markDone}) {
  const { popupAppear, popupDisappear, groupRef, state } = useContext(PopupContext)
  return (
    <React.Fragment>
      <li 
        onClick={() => markDone(task.id)}
        className={`task-list-item ${task.isDone ? 'disable' : 'active'}`}
        onMouseEnter={() => { popupAppear() }}
        onMouseLeave={() => { popupDisappear(task.id) }}
      >
          <span>
            <div class="task-title">
              {/* <ButtonPopup
                buttonTitle={task.title}
              ></ButtonPopup> */}
              { task.title }
            </div>
            <span className="task-date">-- {task.date}</span>
          </span>

          <div className="more-icon">
            {
              task.isStar ?
                <i 
                  onClick={(event) => {
                    event.stopPropagation()
                    editTask( task.id, { isStar: !task.isStar })
                    // groupRef.current.style.display = "none"
                  }} 
                  className="fas fa-star"
                ></i> :
                <i 
                  onClick={(event) => {
                    event.stopPropagation()
                    editTask( task.id, { isStar: !task.isStar })
                    // groupRef.current.style.display = "none"
                  }} 
                  className="far fa-star"
                ></i> 
            }
            <i className="fas fa-pencil-alt"></i>

            <i onClick={() => deleteTask(task.id)} className="fas fa-trash"></i>
          </div>
      </li>
      <div ref={groupRef} className="popup-group"><div className="popup-group-content">{ task.description }</div></div>
    </React.Fragment>
  )
})

export default function TaskArea({ taskList, editTask, deleteTask, markDone, ...args }) {
  return (
    <div className="task-area">
      <ul className="task-list">
        { taskList.map(task => (
          // <ListItemPopup key={task.id} task={task} {...args}></ListItemPopup>
      <li 
        onClick={() => markDone(task.id)}
        className={`task-list-item ${task.isDone ? 'disable' : 'active'}`}
        // onMouseEnter={() => { popupAppear() }}
        // onMouseLeave={() => { popupDisappear(task.id) }}
      >
          <span>
            {/* <div class="task-title"> */}
              { task.title }
              {/* <ButtonPopup
                buttonTitle={task.title}
              ></ButtonPopup> */}
              {/* { task.title } */}
            {/* </div> */}
            <span className="task-date">-- {task.date}</span>
            {
              task.description &&
            <div style={{display: 'inline-block', marginLeft: 5}}>
              <ButtonPopup width={200} buttonTitle={<i style={{fontSize: 18}} className="far fa-comment-dots"></i>} >
                {task.description}
              </ButtonPopup>
            </div>
            }
          </span>

          <div className="more-icon">
            {
              task.isStar ?
                <i 
                  onClick={(event) => {
                    event.stopPropagation()
                    editTask( task.id, { isStar: !task.isStar })
                    // groupRef.current.style.display = "none"
                  }} 
                  className="fas fa-star"
                ></i> :
                <i 
                  onClick={(event) => {
                    event.stopPropagation()
                    editTask( task.id, { isStar: !task.isStar })
                    // groupRef.current.style.display = "none"
                  }} 
                  className="far fa-star"
                ></i> 
            }
            <i className="fas fa-pencil-alt"></i>

            <i onClick={() => deleteTask(task.id)} className="fas fa-trash"></i>
          </div>
      </li>
        )) }
      </ul>
    </div>
  )
}