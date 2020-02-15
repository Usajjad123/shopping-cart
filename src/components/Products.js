import React from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import productList from './data/data'

export default class Products extends React.Component {

    /*productList = [
        { "title": "Mobile Phones", "thumbnail": Phones },
        { "title": "Bikes", "thumbnail": Bikes },
        { "title": "Toys", "thumbnail": Toys },
        { "title": "Electronics", "thumbnail": Electronics },
        { "title": "Books", "thumbnail": Books },
        { "title": "Property", "thumbnail": Properties }
    ]*/
    render() {
        return <div>
            <div className="container products">
                <div className="row">
                    {productList.map((prod, idx) =>
                        <Link key={idx} to={`/products/${idx}`} className="col-md-4">
                            <div>
                                <div className="card text-white bg-primary mb-3" >
                                    <div className="card-header">{prod.title}</div>
                                    <img src={prod.thumbnail} alt="default" className="card-image" />
                                    <div class="card-body">
                                        <p class="card-text">Price : {prod.price}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div >
    }

}