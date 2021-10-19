
import { PopupWrapper, ButtonPopup } from './Components/Popup/Popup'
import { PopupContext } from './Contexts/PopupContext'
import React, { useContext, useState } from 'react'


export default function TaskArea({ taskList, editTask, deleteTask, markDone, ...args }) {
  return (
    <div className="task-area">
      <ul className="task-list">
        { taskList.map(task => (
      <li 
        key={task.id}
        onClick={() => markDone(task.id)}
        className={`task-list-item ${task.isDone ? 'disable' : 'active'}`}
      >
          <span>
              { task.title }
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
                  }} 
                  className="fas fa-star"
                ></i> :
                <i 
                  onClick={(event) => {
                    event.stopPropagation()
                    editTask( task.id, { isStar: !task.isStar })
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