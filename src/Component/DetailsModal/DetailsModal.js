import React, { useEffect } from 'react'
import './DetailsModal.css'
import { MdClose } from "react-icons/md";

export default function DetailsModal({ onHide }) {
    
    return (
        <div className='modal-parent active'>
            <div className='details-modal'>
                <MdClose className='closetab' onClick={onHide}/>
                <table className='cms-table'>
                    <thead>
                        <tr>
                            <th>اسم محصول</th> 
                            <th>قیمت</th>
                            <th>محبوبیت</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>لپتاپ</td>
                            <td>۴۵،۰۰۰،۰۰۰ تومان</td>
                            <td>۹۹٪</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
