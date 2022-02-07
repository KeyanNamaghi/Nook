import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

const Popeth = ({}) => {
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
        style={{ background: '#95CC95' }}
        onClick={handleOnClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.circle
            cx="37.5"
            cy="37.5"
            r="7"
            fill="#FFD700"
            stroke="black"
            animate={
              hovered
                ? { x: 0, y: [0, -15, 0, 1, 0, 0, 0, 0, 0, 0], fill: ['#daa520', '#FFD700', '#FFD700'] }
                : { x: 0, y: 0 }
            }
            transition={hovered ? { repeat: Infinity, duration: 1.5, ease: 'linear', delay: 0.2 } : {}}
          />
          <motion.circle
            cx="59.5"
            cy="37.5"
            r="7"
            fill="#90EE90"
            stroke="black"
            animate={
              hovered
                ? { x: 0, y: [0, -10, 0, 1, 0, 0, 0, 0, 0, 0], fill: ['#32cd32', '#90EE90', '#90EE90'] }
                : { x: 0, y: 0 }
            }
            transition={hovered ? { repeat: Infinity, duration: 1.5, ease: 'linear', delay: 0.4 } : {}}
          />
          <motion.circle
            cx="15.5"
            cy="37.5"
            r="7"
            fill="#FA8072"
            stroke="black"
            animate={
              hovered
                ? { x: 0, y: [0, -10, 0, 1, 0, 0, 0, 0, 0, 0], fill: ['#dc143c', '#FA8072', '#FA8072'] }
                : { x: 0, y: 0 }
            }
            transition={hovered ? { repeat: Infinity, duration: 1.5, ease: 'linear' } : {}}
          />
        </svg>
      </motion.button>
      <motion.div
        className={styles.backdrop}
        style={{ background: '#95CC95' }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  )
}

export { Popeth }
