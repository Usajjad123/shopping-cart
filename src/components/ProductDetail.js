import React from 'react'
import './ProductDetail.css'
import {} from '../redux/selectors'

export default class ProductDetail extends React.Component{

    render(){
        var k = this.props.match.params.id
        
        return <div>
            <p className="header">Product # {k}</p>

        </div>
    }
}