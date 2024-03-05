import React from 'react'
import './DeleteModal.css'
import ReactDOM from 'react-dom'
export default function DeleteModal({cancel , submit}) {
  return ReactDOM.createPortal(
    <div className='modal-parent active'>
      <div className="delete-modal">
        <h1>آیا میخواهید حذف کنید ؟</h1>
        <div className="delete-modal-btn">
          <button className='delete-btn delete-modal-accept-btn' onClick={submit}>بله</button>
          <button className='delete-btn delete-modal-reject-btn' onClick={cancel}>خیر</button>
        </div>
      </div>
    </div>, document.getElementById('modals-parent')
  )
}
