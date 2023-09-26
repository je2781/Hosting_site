import Navbar from './Navbar'
import HSHero from './HSHero'
import Support from './Support'
import Footer from './Footer'
import DNVDomainSearch from './DNVDomainSearch'
import DomainTable from './DomainTable'
import DomainFeatures from './DomainFeatures'

const DomainNamesView = (props) => {
    return(
        <div id="domain-names-view">
            <div id="header-holder2">
                <Navbar leadItemName="Home" direction="/" navbarCenteredPos="absolute" navbarCenteredPosT="0"
                navbarCenteredPosL="23px" activateLink="activated"/>
                <HSHero hsName="Domain Names" icon={props.icon} headerIntro="Search a domain of your choice. Get your website up and running"
                headerIconColor="#ffc600" headerIntroMarginTop="17px" hsPaddingBottom="0"/>
            </div>
            <DNVDomainSearch socket={props.socket} apiKey={props.apiKey} apiSecret={props.apiSecret}/>
            <DomainTable/>
            <DomainFeatures/>
            <Support/>
            <Footer/>
        </div>
    )
}

export default DomainNamesView