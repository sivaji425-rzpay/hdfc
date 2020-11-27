import React, { Component } from 'react'
import Image from '../images/hdfc1.png' 

export class Home extends Component {
    render() {
        return (
            <header>
            <div className="container">
                <nav class="navbar navbar-expand-sm navbar-dark">
                      
                     <a class="navbar-brand" href="/">
                        <img src={Image} alt="logo" class="rounded" style={{width:100, height: 70,marginLeft:10}}/>
                     </a>
                </nav>
            </div>
        </header>
        )
    }
}
export default Home