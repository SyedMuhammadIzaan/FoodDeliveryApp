import React from 'react'
import AdminLayout from "../admin/layout/AdminLayout";
import Home from '../admin/pages/Home';
import { Route } from 'react-router-dom';
import Order from '../admin/pages/Order';
const AdminRoute = () => {
  return (
    <>
        <Route path="/admin/" element={<AdminLayout />}>
            <Route index element={<Home />} />
            <Route path='order' element={<Order />} />
        </Route>
    </>
  )
}

export default AdminRoute