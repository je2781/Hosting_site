
const HSHero = (props) => {
    return(
        <div id="hs-hero" style={{paddingBottom: `${props.hsPaddingBottom}`}} className="container-fluid">
            <div className="container">
                <div className="hero-header text-center">
                    <span className="icon" style={{backgroundColor: `${props.headerIconColor}`}}><img className="img-fluid" src={props.icon} alt="" /></span>
                    <span className="text">{props.hsName}</span>
                    <div className="intro" style={{marginTop: `${props.headerIntroMarginTop}`}}>{props.headerIntro}</div>
                </div>
            </div>
        </div>
    )
}

export default HSHero