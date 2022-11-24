import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import App from './App'
import { AppContext, useGlobal } from './context'

const Home = () => {

  const {openSidebar,openModal}=useGlobal();
  return <>
  <main>
    <button className='sidebar-toggle' onClick={openSidebar}>
      <FaBars />

    </button>
    <button className='btn' onClick={openModal}>
    showModal
    </button>
  </main>
  </>
}

export default Home
