import { useState } from 'react'
import ServiceCard from './components/ServiceCard';
import data from '../data.json'
import axios from 'axios';
import './App.css'

function App() {
  const [service, setServices] = useState(props)

  return (
    <>
     service.maps((service)=()
      <ServiceCard props = {service}/>
     )
    </>
  )
}

export default App
