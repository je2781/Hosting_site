import Navbar from './Navbar'
import HSHero from './HSHero'
import HSPricing from './HSPricing'
import Features from './Features'
import HSDomainSearch from './HSDomainSearch'
import Support from './Support'
import Footer from './Footer'
import featureImage4 from './images/feature4.png'
import featureImage5 from './images/feature5.png'
import featureImage6 from './images/feature6.png'

const DedicatedHostingView = (props) => {
    return(
        <div>
            <div id="header-holder">
                <Navbar leadItemName="Home" direction="/" navbarCenteredPos="absolute" navbarCenteredPosT="0"
                navbarCenteredPosL="23px"/>
                <HSHero hsName="Dedicated Hosting" icon={props.icon} headerIntro="Choose from a variety of affordable, high quality shared hosting services" 
                headerIconColor="rgb(82, 145, 228)"/>
            </div>
            <HSPricing starterPrice="22.80" businessPrice="31.00" vipPrice='59.00'/>
            <Features image1={featureImage4} image2={featureImage5} image3={featureImage6}/>
            <HSDomainSearch/>
            <Support/>
            <Footer/>
        </div>
    )
}

export default DedicatedHostingView