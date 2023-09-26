const DomainFeatures = () => {
    return(
        <div id="domain-features" className="container-fluid">
            <div className="container">
                <div className="header">
                    <div className="text text-center">FREE with every domain</div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="dfeature-holder">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <i className="fa-gear fa-solid"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="dfeature-holder">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <i className="fa-gear fa-solid"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="dfeature-holder">
                            <div className="icon d-flex justify-content-center align-items-center">
                                <i className="fa-lock fa-solid"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainFeatures