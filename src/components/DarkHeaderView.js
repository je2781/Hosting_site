import Hero from './Hero'
import Features from './Features'
import Pricing from './Pricing'
import LatestNews from './LatestNews'
import DomainSearch from './DomainSearch'
import Support from './Support'
import Footer from './Footer'
import Navbar from './Navbar'
import featureImage1 from './images/feature1.png'
import featureImage2 from './images/feature2.png'
import featureImage3 from './images/feature3.png'

const DarkHeaderView = () => {
    return(
        <>
            <div id="header-holder">
                <div className="cloud-bg"></div>
                <Navbar leadItemName="Light Header" direction="#" />
                <Hero/>
            </div>
            <Features image1={featureImage1} image2={featureImage2} image3={featureImage3} />
            <Pricing/>
            <LatestNews/>
            <DomainSearch/>
            <Support/>
            <Footer/>
        </>
    )
}

export default DarkHeaderView