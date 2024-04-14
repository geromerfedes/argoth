import React from 'react'
import { BannerHome, ContactHome, GalleryHome, PrensaHome, ProjectHome, UnitsHome } from '../components/home/'

const HomeContainer = () => {
  return (
    <main>
      <BannerHome />
      <GalleryHome />
      <ProjectHome />
      <UnitsHome />
      <PrensaHome />
      <ContactHome />
    </main>
  )
}

export default HomeContainer