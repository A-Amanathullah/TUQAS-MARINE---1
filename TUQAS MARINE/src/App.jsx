import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { CharteringPage } from './pages/CharteringPage.jsx'
import { ConsultancyPage } from './pages/ConsultancyPage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { GlobalReachPage } from './pages/GlobalReachPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { SalePurchasePage } from './pages/SalePurchasePage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="chartering" element={<CharteringPage />} />
        <Route path="sale-purchase" element={<SalePurchasePage />} />
        <Route path="consultancy" element={<ConsultancyPage />} />
        <Route path="global-reach" element={<GlobalReachPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
