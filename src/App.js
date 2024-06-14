import {useState, useEffect} from 'react'
import icon1 from './components/images/server1.svg'
import icon2 from './components/images/server2.svg'
import icon3 from './components/images/server3.svg'
import icon4 from './components/images/server4.svg'
import icon5 from './components/images/server5.svg'
import icon6 from './components/images/server6.svg'
import DarkHeaderView from './components/DarkHeaderView'
import WebHostingView from './components/WebHostingView'
import VPSHostingView from './components/VPSHostingView'
import WordPressHostingView from './components/WordPressHostingView'
import DedicatedHostingView from './components/DedicatedHostingView'
import CloudHostingView from './components/CloudHostingView'
import DomainNamesView from './components/DomainNamesView'
import {Route, Routes} from 'react-router-dom'
import './App.css';
import {API_KEY, API_SECRET} from './environment'
import LoginView from './components/LoginView'
import RegisterView from './components/RegisterView'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:5001')


function App() {

  // const[searchDomain, setSearchDomain] = useState('')
  const[isDomainAvailable, setIsDomainAvailable] = useState(false)

  useEffect(() => {
      socket.on('isDomainAvailable', (data) => {
          let {available} =  data
          setIsDomainAvailable(available)
      })
      socket.on('receivedProfile', (data) => {
        console.log(data)
      })
  },[])

  return (
    <>
      <Routes>
          <Route path="/" element={<DarkHeaderView/>} />
          <Route path="/login" element={<LoginView socket={socket}/>} />
          <Route path="/register" element={<RegisterView socket={socket}/>} />
          <Route path="/webhosting" element={<WebHostingView icon={icon1}/>} />
          <Route path="/wordpresshosting" element={<WordPressHostingView icon={icon4} />} />
          <Route path="/vpshosting" element={<VPSHostingView icon={icon3} />} />
          <Route path="/dedicatedhosting" element={<DedicatedHostingView icon={icon5} />} />
          <Route path="/cloudhosting" element={<CloudHostingView icon={icon2} />} />
          <Route path="/domainnames" element={<DomainNamesView icon={icon6} socket={socket} domainAvailable={isDomainAvailable}
          apiKey={API_KEY} apiSecret={API_SECRET}/>} />
        </Routes>
    </>
  );
}

export default App;
