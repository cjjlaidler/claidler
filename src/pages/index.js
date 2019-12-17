import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/cag_europe.jpg'
import thumb02 from '../assets/images/thumbs/nodejs.jpg'
import thumb03 from '../assets/images/thumbs/hearing_test.jpg'
import thumb04 from '../assets/images/thumbs/questionnaire_admin_app.jpg'
import thumb05 from '../assets/images/thumbs/occ_health_app.jpg'
import thumb06 from '../assets/images/thumbs/saltwater_sun_website.jpg'

import full01 from '../assets/images/fulls/cag_europe.png'
import full02 from '../assets/images/fulls/nodejs.png'
import full03 from '../assets/images/fulls/hearing_test.png'
import full04 from '../assets/images/fulls/questionnaire_admin_app.png'
import full05 from '../assets/images/fulls/occ_health_app.png'
import full06 from '../assets/images/fulls/saltwater_sun_website.png'

const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Accountancy application', description: 'An application for finding accountancy errors during invoicing.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Web scraper - server-side script', description: 'A script which creates and updates ical calendar files after searching for changes on a companies website.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Hearing test application', description: 'An electron application that implements the HTML 5 audio API\'s to play different frequencies'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Health questionnaire system', description: 'A permission based questionnaire system built with React and GraphQL used by thousands of employees around the UK.'},
    { id: '5', src: full05, thumbnail: thumb05, caption: 'Occupational health application', description: 'A PWA created with Angular that allows health practitioners to conduct tests offline, create and upload reports.'},
    { id: '6', src: full06, thumbnail: thumb06, caption: 'Saltwater Sun website', description: 'A website that uses spotify and connects to the bands schedule, which is scraped from songkick and updated on a daily basis.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Chris Laidler - Full stack web developer and software engineer"
        const siteDescription = "Chris Laidler is a full stack web developer and software engineer with over 8 years of experience"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Coding languages<br /></h2>
                        </header>
                        <p>HTML, CSS, Javascript, PHP, MySQL, C#, Typescript, Visual Basic, Swift, Python, Bash</p>
                        <header className="major">
                            <h2>Frameworks, libraries and tools<br /></h2>
                        </header>
                        <p>React, Angular, Electron, VBA for Office, Docker, GIT, NodeJS, Gatsby, AWS, .Net, Unix terminal, Websockets, Rxjs, Redux, Vue, GraphQL, Sequelize, DexieJs & Localforage (indexedDB libraries), React Native, Flutter </p>
                    </section>

                    <section id="two">
                        <h2>Work examples</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Please get in touch with me for any reason and I will respond as soon as possible. Thank you.</p>
                        <div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Location</span></h3>
                                        Wendover<br />
                                        Aylesbury<br />
                                        England, UK
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        <a href="tel:07753227523">07753227523</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:cjjlaidler@gmail.com">cjjlaidler@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex