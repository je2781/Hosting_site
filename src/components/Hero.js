import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import sliderImage1 from  './images/slide-img1.png'
import sliderImage2 from  './images/slide-img2.png'
import sliderImage3 from  './images/slide-img3.png'

const Hero = () => {

    const settings = {
        infinite: false,
        speed: 1000,
        autoplay: false,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true
    }
    return(
        <div id="top-content" className="container-fluid">
            <div className="container d-block d-sm-none d-md-block">
                <Slider className="main-slider" {...settings}>
                    <div className="slide">
                        <div className="row rtl-row flex-row-reverse">
                            <div className="col-md-5 col-12">
                                <div className="image-holder">
                                    <img className="img-fluid" src={sliderImage1} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7 col-12">
                                <div className="slide-info">
                                    <p className="m-text">Outstanding Web<br/>Hosting for you.</p>
                                    <p className="b-text">Starting at only <strong>$2.38/mo*</strong></p>
                                    <a className="hs-btn" href="/">
                                        Hosting Services
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="row rtl-row flex-row-reverse">
                            <div className="col-md-5 col-12">
                                <div className="image-holder">
                                    <img className="img-fluid" src={sliderImage2} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7 col-12">
                                <div className="slide-info">
                                    <p className="m-text">Create your first<br/>Website today.</p>
                                    <p className="b-text">Starting at only <strong>$2.38/mo*</strong></p>
                                    <a className="hs-btn" href="/">
                                        Create now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="row rtl-row flex-row-reverse">
                            <div className="col-md-5 col-12">
                                <div className="image-holder">
                                    <img className="img-fluid" src={sliderImage3} alt=""/>
                                </div>
                            </div>
                            <div className="col-md-7 col-12">
                                <div className="slide-info">
                                    <p className="m-text">Build your site<br/>With page builder.</p>
                                    <p className="b-text">Starting at only <strong>$2.38/mo*</strong></p>
                                    <a className="hs-btn" href="/">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="row default-row">
                            <div className="col-md-12 col-12">
                                <p className="m-text">Simple, affordable<br/>Web Hosting.</p>
                                <form className="search-form">
                                    <input className="domain-search" type="search" placeholder='My domain name'></input>
                                    <button className="search-btn" type="button">Search</button>
                                    <button className="transfer-btn" type="button">Transfer</button>
                                </form>
                                <span className="row-1"><button className="search-sm-btn" type="button">Search</button></span>
                                <span className="row-2"><button className="transfer-sm-btn" type="button">Transfer</button></span>
                                <p className="b-text">Starting at only <strong>$2.38/mo*</strong></p>
                            </div>
                        </div>
                    </div>
                </Slider>    
            </div>
            <div className="container-fluid d-none d-sm-block d-md-none">
                <Slider className="main-slider" {...settings}>
                    <div className="slide">
                        <div className="row rtl-row flex-row-reverse">
                            <div className="col-md-5 col-sm-12">
                                <div className="container">
                                    <div className="image-holder">
                                        <img className="img-fluid" src={sliderImage1} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <div className="slide-info">
                                    <p className="m-text">Outstanding Web<br/>Hosting for you.</p>
                                    <p className="b-text">Starting at only <strong>$2.38/mo*</strong></p>
                                    <a className="hs-btn" href="/">Hosting Services</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="row rtl-row flex-row-reverse">
                            <div className="col-md-5 col-sm-12">
                                <div className="container">
                                    <div className="image-holder">
                                        <img className="img-fluid" src={sliderImage2} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12">
                            <div className="slide-info">
                                <p className="m-text">Create your first<br/>Website today.</p>
                                <p className="b-text">Starting at only <strong>$2.38/mo*</strong></p>
                                <a className="hs-btn" href="/">
                                    Create now
                                </a>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="row rtl-row flex-row-reverse">
                            <div className="col-md-5 col-sm-12">
                                <div className="container">
                                    <div className="image-holder">
                                        <img className="img-fluid" src={sliderImage3} alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-12">
                                <div className="slide-info">
                                    <p className="m-text">Build your site With<br/>page builder.</p>
                                    <p className="b-text">Starting at only <strong>$2.38/mo*</strong></p>
                                    <a className="hs-btn" href="/">
                                        Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="row default-row">
                            <div className="col-md-12 col-sm-12">
                                <p className="m-text">Simple, affordable<br/>Web Hosting.</p>
                                <form className="search-form">
                                    <input className="domain-search" type="search" placeholder='My domain name'/>
                                    <button className="search-btn" type="button">Search</button>
                                    <button className="transfer-btn" type="button">Transfer</button>
                                </form>
                                <span className="row-1"><button className="search-sm-btn" type="button">Search</button></span>
                                <span className="row-2"><button className="transfer-sm-btn" type="button">Transfer</button></span>
                                <p className="b-text">Starting at only <strong>$2.38/mo*</strong></p>
                            </div>
                        </div>
                    </div>
                </Slider>    
            </div>
        </div>
    )
}

export default Hero;

