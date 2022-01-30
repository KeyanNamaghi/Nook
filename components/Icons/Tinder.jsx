import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

const Tinder = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hovered, setHovered] = useState(false)

  const router = useRouter()
  const variants = {
    open: { width: '100vw', height: '100vh', borderRadius: '0%', top: 0, left: 0, zIndex: 2 },
    closed: { width: '75px', height: '75px', borderRadius: '25px' },
    hover: { scale: 1.4, transition: { duration: 0.2 } }
  }

  const handleOnClick = () => {
    setIsOpen(!isOpen)
    setTimeout(() => router.push('/test'), 1000)
  }

  return (
    <div className={styles.iconContainer}>
      <motion.button
        whileHover="hover"
        variants={variants}
        className={styles.icon}
        style={{ background: '#FA9A6A' }}
        onClick={handleOnClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="9" y="9" width="35" height="47" rx="5" fill="#FCEFDF" />
          <rect x="13" y="13" width="27" height="39" rx="1" fill="#FA9A6A" />
          <motion.path
            animate={hovered ? { y: 0, x: [-10, -35, -10] } : { x: 0, y: 0 }}
            transition={hovered ? { repeat: Infinity, duration: 1 } : {}}
            d="M53.4737 32.0545C53.5186 34.9538 53.4737 51.1096 53.4737 51.1096L47.9638 48.118C45.8219 48.0921 45.6207 48.8459 46.4611 51.1096L54.726 62.3553C56.7985 64.8091 57.8966 65.0725 60.7367 64.9865C62.5039 64.8648 63.4897 64.5688 65.245 63.737C65.8204 63.4337 68 62.5355 68 57.6696C68 52.8037 67.9999 41.8704 68 41.1135C68.0001 40.3565 65.6606 39.3449 64.2432 41.1135V39.3954C64.2432 39.3954 62.2225 37.2803 60.4864 39.3954C59.2342 37.9897 58.7332 37.9897 56.9801 39.3954C56.9801 39.3954 57.0238 34.6289 56.9801 32.0545C56.9363 29.4801 53.4289 29.1551 53.4737 32.0545Z"
            fill="#F7D555"
          />
          <motion.path
            animate={hovered ? { y: 0, x: [-10, -35, -10] } : { x: 0, y: 0 }}
            transition={hovered ? { repeat: Infinity, duration: 1 } : {}}
            d="M56.9801 46.7363V39.3954M56.9801 39.3954C56.9801 39.3954 57.0238 34.6289 56.9801 32.0545C56.9363 29.4801 53.4289 29.1551 53.4737 32.0545C53.5186 34.9538 53.4737 51.1096 53.4737 51.1096L47.9638 48.118C45.8219 48.0921 45.6207 48.8459 46.4611 51.1096L54.726 62.3553C56.7985 64.8091 57.8966 65.0725 60.7367 64.9865C62.5039 64.8648 63.4897 64.5688 65.245 63.737C65.8204 63.4337 68 62.5355 68 57.6696C68 52.8037 67.9999 41.8704 68 41.1135C68.0001 40.3565 65.6606 39.3449 64.2432 41.1135M56.9801 39.3954C58.7332 37.9897 59.2342 37.9897 60.4864 39.3954M60.4864 39.3954V46.7363M60.4864 39.3954C62.2225 37.2803 64.2432 39.3954 64.2432 39.3954V41.1135M64.2432 46.7363V41.1135"
            stroke="#644F3D"
          />
        </svg>
      </motion.button>
      <motion.div
        className={styles.backdrop}
        style={{ background: '#e99b6e' }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  )
}

export { Tinder }
