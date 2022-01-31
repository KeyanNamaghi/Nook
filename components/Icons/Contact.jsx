import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

const Contact = ({}) => {
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
        style={{ background: '#D0D66F' }}
        onClick={handleOnClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="17" width="63" height="42" rx="20" fill="#F6F1EB" />
          <path d="M37 65L34 59H40L37 65Z" fill="#F6F1EB" />
          <motion.circle
            animate={hovered ? { x: 0, y: [0, -5, 0, 1, 0, 0, 0, 0, 0, 0] } : { x: 0, y: 0 }}
            transition={hovered ? { repeat: Infinity, duration: 1.5, ease: 'linear' } : {}}
            cx="23"
            cy="38"
            r="3"
            fill="#5E5247"
          />
          <motion.circle
            animate={hovered ? { x: 0, y: [0, -5, 0, 1, 0, 0, 0, 0, 0, 0] } : { x: 0, y: 0 }}
            transition={hovered ? { repeat: Infinity, duration: 1.5, ease: 'linear', delay: 0.2 } : {}}
            cx="37"
            cy="38"
            r="3"
            fill="#5E5247"
          />
          <motion.circle
            animate={hovered ? { x: 0, y: [0, -5, 0, 1, 0, 0, 0, 0, 0, 0] } : { x: 0, y: 0 }}
            transition={hovered ? { repeat: Infinity, duration: 1.5, ease: 'linear', delay: 0.4 } : {}}
            cx="51"
            cy="38"
            r="3"
            fill="#5E5247"
          />
          <rect x="14" y="14" width="15" height="9" rx="4.5" fill="#DC8AC0" />
        </svg>
      </motion.button>
      <motion.div
        className={styles.backdrop}
        style={{ background: '#D0D66F' }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  )
}

export { Contact }
