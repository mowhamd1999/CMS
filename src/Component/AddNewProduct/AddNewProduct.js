import React from 'react'
import './AddNewProduct.css'
import { RiProductHuntLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import { CiSliderVertical } from "react-icons/ci";
import { SlPicture } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCellular } from "react-icons/io5";
import { VscSymbolColor } from "react-icons/vsc";
export default function AddNewProduct() {
    return (
        <div className='products-main'>
            <h1 className='products-title'>افزودن متن جدید</h1>
            <form action="#" className='add-products-form'>
                <div className="add-products-form-wrap">
                    <div className='add-products-form-group'>
                        <RiProductHuntLine className='add-products-icon' />
                        <input type="text" placeholder='اسم محصول' className='add-products-input' />
                    </div>
                    <div className='add-products-form-group'>
                        <BsCurrencyDollar className='add-products-icon' />
                        <input type="text" placeholder='قیمت محصول' className='add-products-input' />
                    </div>
                    <div className='add-products-form-group'>
                        <CiSliderVertical className='add-products-icon' />
                        <input type="text" placeholder='موجودی محصول' className='add-products-input' />
                    </div>
                    <div className='add-products-form-group'>
                        <SlPicture className='add-products-icon' />

                        <input type="text" placeholder='آدرس عکس' className='add-products-input' />
                    </div>
                    <div className='add-products-form-group'>
                        <MdFavoriteBorder className='add-products-icon' />
                        <input type="text" placeholder='میزان مجبوبیت محصول' className='add-products-input' />
                    </div>
                    <div className='add-products-form-group'>
                        <IoCellular className='add-products-icon' />
                        <input type="text" placeholder='میزان فروش محصول' className='add-products-input' />
                    </div>
                    <div className='add-products-form-group'>
                        <VscSymbolColor className='add-products-icon' />
                        <input type="text" placeholder='تعداد رنگ بندی محصول' className='add-products-input' />
                    </div>
                </div>
                <button className='add-product-btn'>ثبت محصول</button>
            </form>
        </div>
    )
}
