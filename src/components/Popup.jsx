import { useState } from 'react';
import '../style/Popup.scss'

export default function Popup({ error, children, title, exitHandler }) {
  return(
    <div className="popup">
      <div className="popup__header">
        <h3 className="popup__title">{title}</h3>
        <button onClick={()=>exitHandler()}>Close</button>
      </div>
      <div className="popup__content">
        {children}
      { error && <span>{error}</span> }
      </div>
    </div>
  )
}