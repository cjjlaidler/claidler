import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/profile.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <img className="image avatar" src={avatar} alt="" />
                    <h1><strong>Chris Laidler BSc</strong>, full stack Web Developer <br />
                    and software engineer<br />
                    </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
