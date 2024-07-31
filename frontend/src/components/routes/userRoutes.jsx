import React from "react";
import { Route } from "react-router-dom";

import ProductDetails from "../product/ProductDetails.jsx";
import Login from "../auth/Login.jsx";
import Register from "../auth/Register.jsx";
import Profile from "../user/Profile.jsx";
import UpdateProfile from "../user/UpdateProfile.jsx";
import ProtectedRoute from "../auth/ProtectedRoute.jsx";
import UploadAvatar from "../user/UploadAvatar.jsx";
import UpdatePassword from "../user/UpdatePassword.jsx";
import ForgotPassword from "../auth/ForgotPassword.jsx";
import ResetPassword from "../auth/ResetPassword.jsx";
import Cart from "../cart/Cart.jsx";
import Shipping from "../cart/Shipping.jsx";
import ConfirmOrder from "../cart/ConfirmOrder.jsx";
import PaymentMethod from "../cart/PaymentMethod.jsx";
import MyOrders from "../order/MyOrders.jsx";
import OrderDetails from "../order/OrderDetails.jsx";
import Invoice from "../invoice/Invoice.jsx";
import Home from "../Home.jsx";

const userRoutes = () => {
    return (
        <>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/password/forgot" element={<ForgotPassword />} />
            <Route path="/password/reset/:token" element={<ResetPassword />} />

            <Route
                path="/me/profile"
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/me/update_profile"
                element={
                    <ProtectedRoute>
                        <UpdateProfile />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/me/upload_avatar"
                element={
                    <ProtectedRoute>
                        <UploadAvatar />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/me/update_password"
                element={
                    <ProtectedRoute>
                        <UpdatePassword />
                    </ProtectedRoute>
                }
            />

            <Route path="/cart" element={<Cart />} />
            <Route
                path="/shipping"
                element={
                    <ProtectedRoute>
                        <Shipping />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/confirm_order"
                element={
                    <ProtectedRoute>
                        <ConfirmOrder />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/payment_method"
                element={
                    <ProtectedRoute>
                        <PaymentMethod />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/me/orders"
                element={
                    <ProtectedRoute>
                        <MyOrders />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/me/order/:id"
                element={
                    <ProtectedRoute>
                        <OrderDetails />
                    </ProtectedRoute>
                }
            />

            <Route
                path="/invoice/order/:id"
                element={
                    <ProtectedRoute>
                        <Invoice />
                    </ProtectedRoute>
                }
            />
        </>
    );
};

export default userRoutes;