import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import ProductList from './components/ProductList'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'

function App() {

  return (
    <BrowserRouter>

      <div className="container mt-3">

        <h2 className="text-center mb-3 text-dark  fs-2">
          Product Catalog Management
        </h2>

            <nav>
                <Link to="/products" className="text-decoration-none fw-bold me-3">Products</Link> {' '} 
                <Link to="/add-product" className="text-decoration-none fw-bold">Add Product</Link>
            </nav>

      </div>

      <Routes>

        <Route path="/products" element={<ProductList />} />

        <Route path="/add-product" element={<AddProduct />} />

        <Route path="/edit-product/:id" element={<EditProduct />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App

