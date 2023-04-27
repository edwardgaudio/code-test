import { useState, useEffect } from 'react'
import axios from 'axios'
import strawberry from '../strawberry.png'

const ProductList = () => {
    const [products, setProducts] = useState()
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState()

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/products')
        .then((result) => {
            const data = result.data
            console.log(data)
            setTimeout(() => {
                setProducts(data)
            }, 1000)
        })
        .catch((error) => {
            console.log(error)
            alert(error)
        })
    }, [])

    if (!products) {
        return <div>
            LOADING
            {/* <img src={strawberry} className="App-logo loading-spinner" alt="logo" /> */}
        </div>
    }

    return (
        <div>
            <ul>
                {
                    products.map((p) => {
                        return(
                            <>
                            <li key={p.name}>{p.name}</li>
                                <ul>
                                    {p.characteristics && p.characteristics.map((c) => {
                                        return (<li>{c}</li>)
                                    })}
                                </ul>
                            </>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProductList