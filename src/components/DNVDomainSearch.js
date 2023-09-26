import {useState} from 'react'

const DNVDomainSearch = (props) => {
    const aK = props.apiKey
    const aS = props.apiSecret

    const[domain, setState] = useState('')

    const handleChange = (e) => {
        setState(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.socket.emit('httpPost', {domain, aK, aS})
    }

    return(
        <div id="dnv-domain-search" className="container-fluid">
            <div className="container">
                <div className="section-body row">
                    <div className="offset-2 col-10">
                        <form name="sentQuery" className="search-form" onSubmit={handleSubmit}>
                            <input 
                            name="domain"
                            className="domain-search" 
                            placeholder="Domain name" 
                            type="text"
                            value={domain}
                            required
                            onChange={handleChange}
                            // onBlur={handleBlur}
                            />
                            <button 
                            className="search-btn search-btn-attr hs-btn"
                            type="submit">Search now
                            </button>
                            <div id="available"></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DNVDomainSearch