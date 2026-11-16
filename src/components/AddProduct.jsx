import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function AddProduct() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!name || !price || !category) {
            alert('Please fill all details')
        }
        else {
            axios.post('http://localhost:3000/products', {
                name,
                price,
                category
            })
                .then(res => {
                    alert('Product added successfully')
                    navigate('/products')
                })
        }
    }

    return (
        <div>


            <div className="container mt-4">
                <div className="card shadow p-4 mx-auto" style={{ maxWidth: '450px' }}>

                    <h3 className="text-center mb-3">Add Product</h3>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Product Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />

                       <br />

                        <input
                            type="number"
                            className="form-control"
                            placeholder="Price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />

                        <br />

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        />

                        <br />

                        <button className='btn btn-primary' type="submit">Add Product</button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddProduct
