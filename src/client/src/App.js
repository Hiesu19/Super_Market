import React, { useState, useEffect } from "react";
import {
    Route,
    Routes,
    useNavigate,
    BrowserRouter as Router,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout";
import UserList from "./Components/Page/Profile/UserList";
import Dashboard from "./Components/Page/Dashboard/Dashboard";
import ProductManagement from "./Components/Page/ProductManagement/ProductList";
import ProductDetail from "./Components/Page/ProductManagement/ProductDetail";
import CreateInvoicet from "./Components/Page/CreateInvoicet/CreateInvoicet";
import InvoicePreview from "./Components/Page/CreateInvoicet/InvoicePreview";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route
                    path="/dashboard"
                    element={<Layout content={<Dashboard />} />}
                    
                />
                <Route
                    path="/employee_management"
                    element={<Layout content={<UserList />} />}
                />
                <Route
                    path="/create_invoicet"
                    element={<Layout content={<CreateInvoicet />} />}
                />
                <Route
                    path="/invoice_preview"
                    element={<Layout content={<InvoicePreview />} />}
                />
                <Route
                    path="/product_management"
                    element={<Layout content={<ProductManagement />} />}
                />
                <Route
                    path="/product/:id"
                    element={<Layout content={<ProductDetail />} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
