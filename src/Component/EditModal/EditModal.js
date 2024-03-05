import React from 'react'
import './EditModal.css'
import { MdClose } from "react-icons/md";
export default function EditModal({ children, onClose, onSubmit }) {
    return (
        <div className='modal-parent active'>
            <form className='edit-modal-form'>
                <MdClose className='closetab' onClick={onClose} />
                <h1>اطلاعات جدید را وارد نمایید</h1>
                {children}
                <button className='edit-form-submit' onClick={onSubmit}>ثبت</button>
            </form>
        </div>
    )
}
