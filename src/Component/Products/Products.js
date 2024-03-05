import React from 'react'
import ErrorBox from '../ErrorBox/ErrorBox'
import AddNewProduct from '../AddNewProduct/AddNewProduct'
import ProductsTable from '../ProductsTable/ProductsTable'
import './Products.css'
export default function Products() {
  return (
    <div>
      <AddNewProduct />
      {/* <ErrorBox msg='هیچ محصولی یافت نشد' /> */}
      <ProductsTable />
    </div>
  )
}