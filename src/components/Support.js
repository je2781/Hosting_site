import info from "./images/info.svg"
import chat from './images/chat.svg'
const Support = () => {
    return(
        <div id="support" className="container-fluid section-body">
            <div className="container">
                <div className="section-body-box">
                    <div className="row">
                        <div className="col-md-6 col-12 section-body-left">
                            <div className="row">
                                <div className="col-4">
                                    <div className="image-holder image-holder-attr">
                                        <img className="img-fluid" src={info} alt=""/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="support-header">
                                        <a href="/" className="link">Let's talk&nbsp;
                                            <span className="image-holder-2"><img className="img-fluid" src="https://img.icons8.com/small/23/314e83/long-arrow-right.png" alt=""/></span>
                                        </a>
                                        <div className="text">non ipsum cupidatat cupidatat voluptate commodo
                                        enim est deserunt ea nulla fugiat.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-body-right col-12 col-md-6">
                            <div className="row">
                                <div className="col-4 d-flex justify-content-center">
                                    <div className="image-holder image-holder-attr d-flex justify-content-center align-items-center">
                                        <img src={chat} alt=""/>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="support-header">
                                        <a href="/" className="link">Go to support center&nbsp;
                                            <span className="image-holder-2"><img className="img-fluid" src="https://img.icons8.com/small/23/314e83/long-arrow-right.png" alt=""/></span>
                                        </a>
                                        <div className="text">non ipsum cupidatat cupidatat voluptate commodo
                                        enim est deserunt ea nulla fugiat.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
