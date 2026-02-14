import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import Policy from './Components/Policy'
import Footer from './Components/Footer'
import SearchPage from './Components/SearchPage'
import LodgePage from './Components/LodgePage'
import Support from './Components/Support'
import { Routes, Route } from 'react-router-dom'
import { SignIn, SignUp } from '@clerk/clerk-react'
import Admin from './Components/Admin'

const App = () => {
  return (
    <Routes>
      {/* Home Page Route */}
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/" element={
        <div>
          <Navbar />
          <Hero />
          <AboutUs />
          <Policy />
          <Footer />
        </div>
      } />

      {/* Search Page Route */}
      <Route path="/search" element={<SearchPage />} />

      {/* Lodge Details Page Route */}
      <Route path="/lodge/:id" element={<LodgePage />} />

      {/* Support Page */}
      <Route path="/support" element={<Support />} />

      {/* Auth Routes (Clerk) - include wildcards for nested steps */}
      <Route path="/login/*" element={
        <div>
          <Navbar />
          <div className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-orange-50 to-white">
            <SignIn routing="path" path="/login" signUpUrl="/signup" />
          </div>
        </div>
      } />

      <Route path="/signup/*" element={
        <div>
          <Navbar />
          <div className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-orange-50 to-white">
            <SignUp routing="path" path="/signup" signInUrl="/login" />
          </div>
        </div>
      } />
    </Routes>
  )
}

export default App
