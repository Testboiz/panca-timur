import AboutUs from './components/aboutus'
import Footer from './components/footer'
import Hero from './components/hero'
import InsightsUpdates from './components/insightsupdates'
import Navbar from './components/navbar'
import Portfolio from './components/portfolio'
import Solutions from './components/solutions'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Solutions />
      <Portfolio />
      <InsightsUpdates />
      <Footer />
    </>
  )
}
