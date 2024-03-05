import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

import { AiOutlineDollarCircle } from "react-icons/ai";
export default function ProductsTable() {
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const deleteModalCancel = () => {
    setIsShowDelete(false);
    console.log("Modal cancel shod");
  };
  const deleteModalAction = () => {
    setIsShowDelete(false);
    console.log("Modal Taid shod");
  };
  const closeDetailsModal = () => {
    setIsShowModal(false);
  };
  const updateProfileInfo = (event) => {
    event.preventDefault();
    console.log("virayesh shod");

    setIsEditModal(false);
  };
  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>فیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr className="products-table-tr">
            <td>
              <img
                src="Laptop.webp"
                alt="Laptop image"
                className="products-table-img"
              />
            </td>
            <td className="products-table-name">MacBook Air M1 8g</td>
            <td className="products-table-price">45,000,000 تومان</td>
            <td className="products-table-number">3</td>
            <td>
              <button
                className="products-table-btn"
                onClick={() => setIsShowModal(true)}
              >
                جزيیات
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsEditModal(true)}
              >
                ویرایش
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowDelete(true)}
              >
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowDelete && (
        <DeleteModal submit={deleteModalAction} cancel={deleteModalCancel} />
      )}
      {isShowModal && <DetailsModal onHide={closeDetailsModal} />}
      {isEditModal && (
        <EditModal
          onClose={() => setIsEditModal(false)}
          onSubmit={updateProfileInfo}
        >
          {/* {children} */}
          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              className="edit-products-input"
              type="text"
              placeholder="عنوان جدید را وارد کنید"
            />
          </div>
          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              className="edit-products-input"
              type="text"
              placeholder="عنوان جدید را وارد کنید"
            />
          </div>
          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              className="edit-products-input"
              type="text"
              placeholder="عنوان جدید را وارد کنید"
            />
          </div>
          <div className="add-products-form-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              className="edit-products-input"
              type="text"
              placeholder="عنوان جدید را وارد کنید"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
