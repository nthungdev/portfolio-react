import React from 'react'

import IconButton from '../IconButton/IconButton'
import LinkedIn from '../../assets/logos/linkedin.png'
import Github from '../../assets/logos/github.svg'
import Facebook from '../../assets/logos/facebook.png'

import styles from './Footer.module.css'

const Footer = () => {
  const icons = [
    {
      icon: LinkedIn,
      url: 'https://www.linkedin.com/in/nthungdev'
    },
    {
      icon: Github,
      url: 'https://github.com/nthungdev'
    },
    {
      icon: Facebook,
      url: 'https://www.facebook.com/nthungdev'
    }
  ]

  return (
    <div className={styles.root}>
      <div className={styles.social}>
        {icons.map((icon, index) => (
          <div key={index}>
            <IconButton icon={icon.icon} href={icon.url} />
          </div>
        ))}
      </div>
      <div className={styles.text}>
        <p>Hung Nguyen</p>
        <p>© Copyrights Reserved 2019</p>
      </div>
    </div>
  )
}

export default Footer
