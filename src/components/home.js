import React from 'react';
import './Home.css'
import {Link} from 'react-router-dom'

export default class Home extends React.Component{

    render(){
        return <div className="container home-bg">
            <div className="container">
                <div className="row">
                    <div className="value-buttons text-center">
                    <Link className="button" to="/">
                        Get Started
                    </Link>
                    <Link className="button" to="/">
                        Contact Now
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    }


}
