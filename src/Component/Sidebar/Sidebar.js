import React from 'react'
import './Sidebar.css'
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegCommentDots } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <h1 className="sidebar-title">به داشبورد خود خوش آمدید</h1>
            <ul className="sidebar-links">
                <li>
                    <Link to='./'>
                        <IoHomeOutline className='icon' />
                        صفحه اصلی
                    </Link>
                </li>
                <li className='active'>
                    <Link to='./products'>
                        <MdOutlineShoppingCart className='icon' />
                        محصولات
                    </Link>

                </li>
                <li>
                    <Link to='./comments'>
                        <FaRegCommentDots className='icon' />
                        کامنت ها
                    </Link>
                </li>
                <li>
                    <Link to='./users'>
                        <LuUsers className='icon' />
                        کاربران
                    </Link>
                </li>
                <li>
                    <Link to='./orders'>
                        <IoReorderThreeOutline className='icon' />
                        سفارشات
                    </Link>
                </li>
                <li>
                    <Link to='./offs'>
                        <IoPricetagOutline className='icon' />
                        تخفیف ها
                    </Link>
                </li>
            </ul>
        </div>
    )
}
