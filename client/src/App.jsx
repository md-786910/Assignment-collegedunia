import { useState } from 'react'
import './App.css'
import FeatureStore from './components/FeatureStore'
import HeaderTop from './components/HeaderTop'
import LandingSearch from './components/LandingSearch'
import Navbar from './components/Navbar'
import Login from './page/Login'

function App() {

  const [open, setOpen] = useState(false)

  // handle close
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <div style={{
        position: 'relative',
        top: 0,
        zIndex: 10
      }}>

        <HeaderTop handleOpen={handleOpen} />
        <Navbar />
        <LandingSearch />
        <FeatureStore />
      </div>
      <Login open={open} handleClose={handleClose} />

    </>
  )
}

export default App
