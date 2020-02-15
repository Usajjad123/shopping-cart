import React from 'react'
import './Products.css'
import Phones from '../assets/phones.jpg'
import Bikes from '../assets/bikes.jpg'
import Toys from '../assets/toys.jpg'
import Electronics from '../assets/electronics.jpg'
import Books from '../assets/books.jpeg'
import Properties from '../assets/properties.jpg'

export default class Products extends React.Component {

    productList = [
        {"Title" : "Mobile Phones", "thumbnail" : Phones},
        {"Title" : "Bikes", "thumbnail" : Bikes},
        {"Title" : "Toys", "thumbnail" : Toys},
        {"Title" : "Electronics", "thumbnail" : Electronics},
        {"Title" : "Books", "thumbnail" : Books},
        {"Title" : "Property", "thumbnail" : Properties}
    ]
    render() {
        return <div>

            <div className="container products">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3" >
                            <div className="card-header">Mobile Phones</div>
                            <img src={Phones} alt="default" className="card-image"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3" >
                            <div className="card-header">Bikes</div>
                            <img src={Bikes} alt="default" className="card-image"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3" >
                            <div className="card-header">Toys</div>
                            <img src={Toys} alt="default" className="card-image"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3" >
                            <div className="card-header">Electronics</div>
                            <img src={Electronics} alt="default" className="card-image"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3" >
                            <div className="card-header">Books</div>
                            <img src={Books} alt="default" className="card-image"/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card text-white bg-primary mb-3" >
                            <div className="card-header">Property</div>
                            <img src={Properties} alt="default" className="card-image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

}