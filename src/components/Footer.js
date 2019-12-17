import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="tel:07753227523" className="icon fa-phone"><span className="label">Phone</span></a></li>
                        <li><a href="mailto:cjjlaidler@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li><a href="mailto:cjjlaidler@gmail.com">cjjlaidler@gmail.com</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
