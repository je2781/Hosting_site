const DomainSearch = () => {
    return(
        <div id="domain-search" className="container-fluid">
            <div className="container">
                <div className="section-body row">
                    <div className="col-lg-3 col-12">
                        <div className="text">Search a domain</div>
                    </div>
                    <div className="offset-lg-1 col-lg-8 col-md-12 d-none d-md-block">
                        <form className="search-form">
                            <input className="domain-search domain-search-attr" placeholder="Domain name" type="search"></input>
                            <button className="search-btn search-btn-attr hs-btn" type="button">Search now</button>
                        </form>
                    </div>
                    <div className="col-12 d-block d-md-none">
                        <input className="domain-search" placeholder="Domain name" type="search"></input>
                    </div>
                    <div className="col-12 d-block d-md-none">
                        <button className="search-btn hs-btn" type="button">Search now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DomainSearch