import React from 'react'

import LandingSection from 'sections/LandingSection/LandingSection'
import NavBar from 'components/NavBar/NavBar'
import ProjectSection from 'sections/ProjectSection/ProjectSection'
import ExperienceSection from 'sections/ExperienceSection/ExperienceSection'
import ContactSection from 'sections/ContactSection/ContactSection'
import Footer from 'components/Footer/Footer'

const Deprecated = () => {
  return (
    <div className="root">
      <div className="content">
        <NavBar />
        <LandingSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  )
}

export default Deprecated
