import React from 'react'
import Phones from '../assets/phones.jpg'

export default class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            cart : [
                {
                    id: "0",
                    thumbnail: Phones,
                    title: "Phones",
                    price: 50000
                }
            ]
        }
        this.removeItem = this.removeItem.bind(this);
    }
    removeItem(ind){
        let arr = this.state.cart
        arr.splice(ind, 1)
        this.setState({cart : arr})
    }
    
    render() {
        return <div>
            <h1>Cart</h1>
            <table className="table table-hover container">
                <thead>
                    <tr className="text-center">
                        <th scope="col">Product</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Items Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.cart.map(
                            (e, i) => <tr key={i}>
                                <td><img src={e.thumbnail} width="40" height="40" /></td>
                                <td className="text-center">{e.title}</td>
                                <td>{e.price}</td>
                                <td><button className="btn btn-danger" onClick={ () => this.removeItem(i) }>Remove
                                </button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    }
}