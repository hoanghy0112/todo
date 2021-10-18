import { useRef } from 'react'
import Popup from './Popup.js'

export default function Header({ changeFilter, markDoneAll, deleteAll }) {
  const selectRef = useRef(null)
  const checkboxRef = useRef(null)
  return (
    <div className="header">
      <h1>Todo</h1>
      <Popup width="250px">
        <button className="btn">Options</button>
        <div className="function-filter">
          <select defaultValue="" ref={selectRef} name="filter" onChange={() => changeFilter(prev => ({ ...prev, sortType: selectRef.current.value }))}>
            <option value="" disabled={false} >Default</option>
            <option value="name">Sort by name</option>
            {/* <option value="date-create">Sort by date modified</option> */}
            <option value="time">Sort by time</option>
            {/* <option value="done"></option> */}
          </select>
        </div>
        <hr />
        <label className="checkbox">
          <input ref={checkboxRef} type="checkbox" onChange={() => changeFilter(prev => ({ ...prev, filterType: ((checkboxRef.current.checked && 'incompleted-only') || 'all')}))} />
          Incomplete tasks only
        </label>
        <hr />
        <div className="function-button">
          <button 
            onClick={() => {
                markDoneAll()
              }} 
            className="btn"
          >
            Mark done all
          </button>
          <button 
            onClick={() => {
                deleteAll()
              }} 
            className="btn warning"
          >
            Delete all
          </button>
        </div>
      </Popup>
      {/* <div 
        className="options btn"
        onClick={popupAppear} 
      >
        Options
      </div>
      <div 
        ref={popupRefBg} 
        className="function-group-outer"
        onClick={popupDisappear}
      ></div>
      <div ref={popupRef} className="function-group">
        <div className="function-filter">
          <select defaultValue="" ref={selectRef} name="filter" onChange={() => changeFilter(prev => ({ ...prev, sortType: selectRef.current.value }))}>
            <option value="" disabled={true} >Default</option>
            <option value="name">Sort by name</option>
            <option value="date-create">Sort by date modified</option>
            <option value="time">Sort by time</option>
            <option value="done"></option>
          </select>
        </div>
        <hr />
        <label className="checkbox">
          <input ref={checkboxRef} type="checkbox" onChange={() => changeFilter(prev => ({ ...prev, filterType: ((checkboxRef.current.checked && 'incompleted-only') || 'all')}))} />
          Incomplete tasks only
        </label>
        <hr />
        <div className="function-button">
          <button 
            onClick={() => {
                markDoneAll()
                popupDisappear() 
              }} 
            className="btn mark-done"
          >
            Mark done all
          </button>
          <button 
            onClick={() => {
                deleteAll()
                popupDisappear() 
              }} 
            className="btn warning mark-done"
          >
            Delete all
          </button>
        </div>
      </div> */}
    </div>
  )
}
