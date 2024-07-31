import React from "react";
import { Route } from "react-router-dom";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import Dashboard from "../admin/Dashboard.jsx";
import ListProducts from "../admin/ListProducts.jsx";
import NewProduct from "../admin/NewProduct.jsx";
import UpdateProduct from "../admin/UpdateProduct.jsx";
import UploadImages from "../admin/UploadImages.jsx";
import ListOrders from "../admin/ListOrders.jsx";
import ProcessOrder from "../admin/ProcessOrder.jsx";
import ListUsers from "../admin/ListUsers.jsx";
import UpdateUser from "../admin/UpdateUser.jsx";
import ProductReviews from "../admin/ProductReviews.jsx";

const adminRoutes = () => {
    return (
        <>
            <Route
                path="/admin/dashboard"
                element={
                    <ProtectedRoute admin={true}>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/products"
                element={
                    <ProtectedRoute admin={true}>
                        <ListProducts />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/product/new"
                element={
                    <ProtectedRoute admin={true}>
                        <NewProduct />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/products/:id"
                element={
                    <ProtectedRoute admin={true}>
                        <UpdateProduct />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/admin/products/:id/upload_images"
                element={
                    <ProtectedRoute admin={true}>
                        <UploadImages />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/orders"
                element={
                    <ProtectedRoute admin={true}>
                        <ListOrders />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/orders/:id"
                element={
                    <ProtectedRoute admin={true}>
                        <ProcessOrder />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/users"
                element={
                    <ProtectedRoute admin={true}>
                        <ListUsers />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/users/:id"
                element={
                    <ProtectedRoute admin={true}>
                        <UpdateUser />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/admin/reviews"
                element={
                    <ProtectedRoute admin={true}>
                        <ProductReviews />
                    </ProtectedRoute>
                }
            />
        </>
    );
};

export default adminRoutes;