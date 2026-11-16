
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditProduct() {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(res => {
                setName(res.data.name)
                setPrice(res.data.price)
                setCategory(res.data.category)
            })
    }, [id])

    const handleUpdate = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:3000/products/${id}`, {
            name,
            price,
            category
        })
            .then(res => {
                alert('Product updated successfully')
                navigate('/products')
            })
    }

    return (
        <div>
            

            <div className="container mt-4">
                <div className="card shadow p-4 mx-auto" style={{ maxWidth: '450px' }}>

                  <h2 className='text-dark p-2'>Edit Product</h2>

                    <form onSubmit={handleUpdate}>

                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Product Name"
                        />

                        <br />

                        <input
                            type="number"
                            className="form-control"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            placeholder="Price"
                        />

                        <br />

                        <input
                            type="text"
                            className="form-control"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            placeholder="Category"/>

                        <br />

                        <button className='btn btn-primary' type="submit">Update Product</button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditProduct
