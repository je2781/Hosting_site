const HSPricing = (props) => {

    const pricingPlan = () => {     
        document.querySelector('.bd').classList.toggle('active')
        document.querySelector('.btn').classList.toggle('on')
        document.querySelector('.fd').classList.toggle('active') 

        let planPeriod = document.querySelectorAll('.pricing-body .duration')
        let priceList = document.querySelectorAll('.pricing-box  .num')

        planPeriod.forEach((period,i) => {
            if(period.classList.contains('annually')){
                period.innerText = '/mo'

                priceList[i].innerText = parseFloat(Number(priceList[i].innerText)/12).toFixed(2)
            }
            else{
                period.innerText = '/yr'

                priceList[i].innerText = parseFloat(Number(priceList[i].innerText)*12).toFixed(2)
            }
            period.classList.toggle('annually') 
        })

    }
    return(
        <div id="hs-pricing" className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="container">
                        <div id="d-toggle" className="d-toggle text-center">
                            <div className="bd active">Monthly bill</div>
                            <button type="button" onClick={pricingPlan} className="btn"></button>
                            <div className="fd">Annual bill</div>
                        </div>
                        <div className="row d-none d-lg-block">
                            <div className="col-lg-4 d-block">
                                <div className="pricing-1 pricing-box inner text-center">
                                    <div className="pricing-body text-center">
                                        <div className="text text-center">Starter Plan</div>
                                        <div className="quote text-center">
                                            <span className="currency">$</span>
                                            <span className="num">{props.starterPrice}</span>
                                            <span className="duration">/mo</span>
                                        </div>
                                    </div>
                                    <a href="/" className="pricing-link hs-btn">Buy now</a>
                                    <ul className="feature-list text-center">
                                        <li className="feature">10GB Storage</li>
                                        <li className="feature">1 Domain name</li>
                                        <li className="feature">512Mb RAM</li>
                                        <li className="feature">5GB Bandwidth</li>
                                        <li className="feature">10 Emails</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 d-block">
                                <div className="pricing-2 pricing-box inner text-center">
                                    <div className="pricing-body text-center">
                                        <div className="text text-center">Business Plan</div>
                                        <div className="quote text-center">
                                            <span className="currency">$</span>
                                            <span className="num">{props.businessPrice}</span>
                                            <span className="duration">/mo</span>
                                        </div>
                                    </div>
                                    <a href="/" className="pricing-link hs-btn">Buy now</a>
                                    <ul className="feature-list text-center">
                                        <li className="feature">10GB Storage</li>
                                        <li className="feature">1 Domain name</li>
                                        <li className="feature">512Mb RAM</li>
                                        <li className="feature">5GB Bandwidth</li>
                                        <li className="feature">10 Emails</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 d-block">
                                <div className="pricing-3 pricing-box inner text-center">
                                    <div className="pricing-body text-center">
                                        <div className="text text-center">VIP Plan</div>
                                        <div className="quote text-center">
                                            <span className="currency">$</span>
                                            <span className="num">{props.vipPrice}</span>
                                            <span className="duration">/mo</span>
                                        </div>
                                    </div>
                                    <a href="/" className="pricing-link hs-btn">Buy now</a>
                                    <ul className="feature-list text-center">
                                        <li className="feature">10GB Storage</li>
                                        <li className="feature">1 Domain name</li>
                                        <li className="feature">512Mb RAM</li>
                                        <li className="feature">5GB Bandwidth</li>
                                        <li className="feature">10 Emails</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HSPricing
