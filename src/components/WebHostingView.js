import Navbar from './Navbar'
import HSHero from './HSHero'
import HSPricing from './HSPricing'
import HSDomainSearch from './HSDomainSearch'
import Support from './Support'
import Footer from './Footer'
import Features from './Features'
import featureImage4 from './images/feature4.png'
import featureImage5 from './images/feature5.png'
import featureImage6 from './images/feature6.png'

const WebHostingView = (props) => {
    return(
        <>
            <div id="header-holder">
                <Navbar leadItemName="Home" direction="/" navbarCenteredPos="absolute" navbarCenteredPosT="0"
                navbarCenteredPosL="23px"/>
                <HSHero hsName="Web Hosting" icon={props.icon} headerIntro="Choose from a variety of affordable, high quality shared hosting services" 
                headerIconColor="rgb(82, 145, 228)"/>
            </div>
            <HSPricing starterPrice="2.75" businessPrice="10.95" vipPrice='38.95' />
            <Features image1={featureImage4} image2={featureImage5} image3={featureImage6}/>
            <HSDomainSearch/>
            <Support/>
            <Footer/>
        </>
    )
}

export default WebHostingView