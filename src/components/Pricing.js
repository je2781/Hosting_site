import pricingImage1 from './images/server1.svg'
import pricingImage3 from './images/server3.svg'
import pricingImage4 from './images/server4.svg'
import pricingImage5 from './images/server5.svg'
import pricingImage2 from './images/server2.svg'
import pricingImage6 from './images/server6.svg'
import {Link} from 'react-router-dom'

const Pricing = () => {
 
    return(
        <div id="pricing" className="container-fluid">
            <div className="container">
                <div className="section-header text-center">Our hosting services</div>
                <div className="row">
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="pricing-1 pricing-box text-center">
                            <div className="pricing-header text-center">
                                <div className="text">Web Hosting</div>
                                <span className="icon"><img src={pricingImage1} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">User-friendly building tools</li>
                                <li className="feature">Host unlimited domains</li>
                                <li className="feature">Perfect for small sites/blogs</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">2.75</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/webhosting" className="pricing-link hs-btn">Get Started!</Link>
                        </div>
                        <div className="pricing-3 pricing-box text-center">
                            <div className="pricing-header text-center">
                                <div className="text">VPS Hosting</div>
                                <span className="icon"><img src={pricingImage3} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">Dedicated Control</li>
                                <li className="feature">Full Root Access</li>
                                <li className="feature">Scalable Resources</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">20.40</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/vpshosting" className="pricing-link hs-btn">Get Started!</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="pricing-4 pricing-box  text-center">
                                <div className="pricing-header text-center">
                                    <div className="text">WordPress Hosting</div>
                                    <span className="icon"><img src={pricingImage4} alt=""/></span>
                                </div>
                                <ul className="feature-list text-center">
                                    <li className="feature">Host up to 2 websites</li>
                                    <li className="feature">Experience faster load times</li>
                                    <li className="feature">Easy to use WP control panel</li>
                                </ul>
                                <ul className="pricing-footer text-center">
                                    <li className="text">Starting at only</li>
                                    <li className="quote">
                                        <span className="currency">$</span>
                                        <span className="num">5.34</span>
                                        <span className="duration">/mo</span>
                                    </li>
                                </ul>
                                <Link to="/wordpresshosting" className="pricing-link hs-btn">See Plans</Link>
                        </div>
                        <div className="pricing-5 pricing-box  text-center">
                            <div className="pricing-header text-center">
                                <div className="text">Dedicated Hosting</div>
                                <span className="icon"><img src={pricingImage5} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">Full Root Access</li>
                                <li className="feature">4 core CPU | 8GB RAM | 1TB disk</li>
                                <li className="feature">Unmetered bandwidth</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">22.80</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/dedicatedhosting" className="pricing-link hs-btn">See Plans</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 d-none d-lg-block">
                        <div className="pricing-2 pricing-box text-center">
                            <div className="pricing-header text-center">
                                <div className="text">Cloud Hosting</div>
                                <span className="icon"><img src={pricingImage2} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">Up to 2X faster</li>
                                <li className="feature">4X more scalable</li>
                                <li className="feature">Intuitive Dashboard</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">7.99</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/cloudhosting" className="pricing-link hs-btn">Know more</Link>
                        </div>
                        <div className="pricing-6 pricing-box text-center">
                            <div className="pricing-header text-center">
                                <div className="text">Domain Names</div>
                                <span className="icon"><img src={pricingImage6} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">User-friendly building tools</li>
                                <li className="feature">Host unlimited domains</li>
                                <li className="feature">Perfect for small sites/blogs</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">50.22</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/domainnames" className="pricing-link hs-btn">Know more</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-block d-lg-none">
                        <div className="pricing-1 pricing-box text-center">
                            <div className="pricing-header text-center">
                                <div className="text">Web Hosting</div>
                                <span className="icon"><img src={pricingImage1} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">User-friendly building tools</li>
                                <li className="feature">Host unlimited domains</li>
                                <li className="feature">Perfect for small sites/blogs</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">2.75</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/webhosting" className="pricing-link hs-btn">Get Started!</Link>
                        </div>
                        <div className="pricing-2 pricing-box text-center">
                            <div className="pricing-header text-center">
                                <div className="text">Cloud Hosting</div>
                                <span className="icon"><img src={pricingImage2} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">Up to 2X faster</li>
                                <li className="feature">4X more scalable</li>
                                <li className="feature">Intuitive Dashboard</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">7.99</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/cloudhosting" className="pricing-link hs-btn">Know more</Link>
                        </div>
                        <div className="pricing-5 pricing-box  text-center">
                            <div className="pricing-header text-center">
                                <div className="text">Dedicated Hosting</div>
                                <span className="icon"><img src={pricingImage5} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">Full Root Access</li>
                                <li className="feature">4 core CPU | 8GB RAM | 1TB disk</li>
                                <li className="feature">Unmetered bandwidth</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">22.80</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/dedicatedhosting" className="pricing-link hs-btn">See Plans</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 d-block d-lg-none">
                        <div className="pricing-3 pricing-box text-center">
                            <div className="pricing-header text-center">
                                <div className="text">VPS Hosting</div>
                                <span className="icon"><img src={pricingImage3} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">Dedicated Control</li>
                                <li className="feature">Full Root Access</li>
                                <li className="feature">Scalable Resources</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">20.40</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/vpshosting" className="pricing-link hs-btn">Get Started!</Link>
                        </div>
                        <div className="pricing-4 pricing-box  text-center">
                            <div className="pricing-header text-center">
                                <div className="text">WordPress Hosting</div>
                                <span className="icon"><img src={pricingImage4} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">Host up to 2 websites</li>
                                <li className="feature">Experience faster load times</li>
                                <li className="feature">Easy to use WP control panel</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">5.34</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/wordpresshosting" className="pricing-link hs-btn">See Plans</Link>
                        </div>
                        <div className="pricing-6 pricing-box text-center">
                            <div className="pricing-header text-center">
                                <div className="text">Domain Names</div>
                                <span className="icon"><img src={pricingImage6} alt=""/></span>
                            </div>
                            <ul className="feature-list text-center">
                                <li className="feature">User-friendly building tools</li>
                                <li className="feature">Host unlimited domains</li>
                                <li className="feature">Perfect for small sites/blogs</li>
                            </ul>
                            <ul className="pricing-footer text-center">
                                <li className="text">Starting at only</li>
                                <li className="quote">
                                    <span className="currency">$</span>
                                    <span className="num">50.22</span>
                                    <span className="duration">/mo</span>
                                </li>
                            </ul>
                            <Link to="/domainnames" className="pricing-link hs-btn">Know more</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing