const HSDomainSearch = () => {
    return(
        <div id="domain-search" className="container-fluid">
            <div className="office"></div>
            <div className="container">
                <div className="section-body row">
                    <div className="col-12">
                        <div className="text">Get your website up and running today.<br/>Search a domain of your choice.</div>
                    </div>
                    <div className="col-12">
                        <form className="hs-search-form">
                            <input className="hs-domain-search domain-search-attr" placeholder="Domain name" type="search"></input>
                            <button className="hs-search-btn search-btn-attr hs-btn" type="button">Search now</button>
                        </form>
                    </div>
                    {/* <div className="col-12 d-block d-md-none">
                        <input className="domain-search" placeholder="Domain name" type="search"></input>
                    </div>
                    <div className="col-12 d-block d-md-none">
                        <button className="search-btn hs-btn" type="button">Search now</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HSDomainSearch