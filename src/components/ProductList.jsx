import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ProductList() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://product-catalog-9wje.onrender.com/products')
            .then(res => {
                setProducts(res.data)
            })
    }, [])
    const handleDelete = (id) => {

        const confirmDelete = window.confirm('Are you sure you want to delete this product?')

        if (confirmDelete) {
            axios.delete(`https://product-catalog-9wje.onrender.com/products${id}`)
                .then(res => {
                    alert('Product deleted successfully')

                    setProducts(products.filter(item => item.id !== id))
                })
        }
    }



    return (
        <div className="container mt-4">

               <div  className="card shadow p-4 mx-auto" style={{ maxWidth: '650px' }}>
                  
                   <h2 className="text-center mb-4 text-dark">PRODUCT LIST</h2>

            <div className="text-end mb-3">
                <Link to="/add-product" className="btn btn-primary">
                    Add Product
                </Link>
            </div>

            <table className="table table-bordered shadow">

                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {products.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td>
                                <Link to={`/edit-product/${item.id}`}
                                    className="btn btn-success btn-sm me-2">
                                    Edit
                                </Link>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleDelete(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>


               </div>
        </div>
    )

}

export default ProductList