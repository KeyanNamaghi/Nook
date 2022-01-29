import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

const Icon = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const variants = {
    open: { width: '100vw', height: '100vh', borderRadius: '0%', top: 0, left: 0, zIndex: 2 },
    closed: { width: '75px', height: '75px', borderRadius: '25px' }
  }

  const handleOnClick = () => {
    setIsOpen(!isOpen)
    setTimeout(() => router.push('/test'), 1000)
  }

  return (
    <div className={styles.iconContainer}>
      <button className={styles.icon} onClick={handleOnClick}>
        Button
      </button>
      <motion.div
        className={styles.backdrop}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  )
}

export { Icon }
