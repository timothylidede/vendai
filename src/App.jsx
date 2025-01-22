import { Routes, Route } from 'react-router-dom';

import Overview from './pages/Overview';
import Invoice from './pages/Invoice';
import Assistant from './pages/Assistant';
import Demand from './pages/Demand';
import Fraud from './pages/Fraud';
import Risk from './pages/Risk';
import Settings from './pages/Settings';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex h-screen bg-gray-900 text-gray-100 overflow-hidden'>

      {/* BG */}
			<div className='fixed inset-0 z-0'>
				<div className='absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80' />
				<div className='absolute inset-0 backdrop-blur-sm' />
			</div>

      <Sidebar />
      <Routes>
        <Route path='/' element={<Overview/>} />
        <Route path='/invoice' element={<Invoice />} />
        <Route path='/assistant' element={<Assistant />} />
        <Route path='/demand' element={<Demand />} />
        <Route path='/fraud' element={<Fraud />} />
        <Route path='/risk' element={<Risk />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div> 
  )
}

export default App
