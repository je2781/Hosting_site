
const Features = (props) => {
    return (
        <div id="features" className="container-fluid">
            <div className="container d-block d-sm-none d-md-block">
                <div className="row rtl-row flex-row-reverse">
                    <div className="col-md-5 col-12 image-box">
                        <div className="image-holder">
                            <img alt="image" className="img-fluid" src={props.image1}/>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="feature-info">
                            <div className="feature-heading">Hosting For Every Website</div>
                            <div className="feature-text">consectetur consequat Excepteur dolore minim amet dolore sunt
                            do sint et laboris fugiat consectetur enim consectetur sed. lorem consequat 
                             qui tempor cupidatat aute tempor lorem consectetur eiusmod cillum amet anim velit non Duis.</div>
                             <a href="/" className="feature-link hs-btn-default hs-btn">Get Started!</a>
                        </div>
                    </div>
                </div>
                <div className="row default-row">
                    <div className="col-md-5 col-12 image-box">
                        <div className="image-holder">
                            <img alt="image" className="img-fluid" src={props.image2}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-5 offset-md-2">
                        <div className="feature-info">
                            <div className="feature-heading">In a hurry? let's start!</div>
                            <div className="feature-text">consectetur consequat Excepteur dolore minim amet dolore sunt
                            do sint et laboris fugiat consectetur enim consectetur sed. lorem consequat 
                            qui tempor cupidatat aute tempor lorem consectetur eiusmod cillum amet anim velit non Duis</div>
                             <a href="/" className="feature-link hs-btn-default hs-btn">Get Started!</a>
                        </div>
                    </div>
                </div>
                <div className="row rtl-row flex-row-reverse">
                    <div className="col-md-5 col-12 image-box">
                        <div className="image-holder">
                            <img alt="image" className="img-fluid" src={props.image3}/>
                        </div>
                    </div>
                    <div className="col-md-7 col-12">
                        <div className="feature-info">
                            <div className="feature-heading">Grow with us</div>
                            <div className="feature-text">consectetur consequat Excepteur dolore minim amet dolore sunt
                            do sint et laboris fugiat consectetur enim consectetur sed. lorem consequat 
                             qui tempor cupidatat aute tempor lorem consectetur eiusmod cillum amet anim velit non Duis.</div>
                             <a href="/" className="feature-link hs-btn-default hs-btn">Get Started!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-none d-sm-block d-md-none">
                <div className="row rtl-row">
                    <div className="col-sm-12">
                        <div className="container image-box">
                            <div className="image-holder">
                                <img alt="image" className="img-fluid" src={props.image1}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="feature-info">
                            <div className="feature-heading">Hosting For Every Website</div>
                            <div className="feature-text">consectetur consequat Excepteur dolore minim amet dolore sunt
                             do sint et laboris fugiat consectetur enim consectetur sed. lorem consequat 
                             qui tempor cupidatat aute tempor lorem consectetur eiusmod cillum amet anim velit non Duis.</div>
                             <a href="/" className="feature-link hs-btn-default hs-btn">Get Started!</a>
                        </div>
                    </div>
                </div>
                <div className="row default-row">
                    <div className="col-sm-12">
                        <div className="container image-box">
                            <div className="image-holder">
                                <img alt="image" className="img-fluid" src={props.image2}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="feature-info">
                            <div className="feature-heading">In a hurry? let's start!</div>
                            <div className="feature-text">consectetur consequat Excepteur dolore minim amet dolore sunt
                            do sint et laboris fugiat consectetur enim consectetur sed. lorem consequat 
                            qui tempor cupidatat aute tempor lorem consectetur eiusmod cillum amet anim velit non Duis</div>
                             <a href="/" className="feature-link hs-btn-default hs-btn">Get Started!</a>
                        </div>
                    </div>
                </div>
                <div className="row rtl-row">
                    <div className="col-sm-12">
                        <div className="container image-box">
                            <div className="image-holder">
                                <img alt="image" className="img-fluid" src={props.image3}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="feature-info">
                            <div className="feature-heading">Grow with us</div>
                            <div className="feature-text">consectetur consequat Excepteur dolore minim amet dolore sunt
                            do sint et laboris fugiat consectetur enim consectetur sed. lorem consequat
                            qui tempor cupidatat aute tempor lorem consectetur eiusmod cillum amet anim velit non Duis.</div>
                             <a href="/" className="feature-link hs-btn-default hs-btn">Get Started!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
