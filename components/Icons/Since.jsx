import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

const Since = ({}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const router = useRouter()

  const fill = '#544633'
  const variants = {
    open: { width: '100vw', height: '100vh', borderRadius: '0%', top: 0, left: 0, zIndex: 2 },
    closed: { width: '75px', height: '75px', borderRadius: '25px' },
    hover: { scale: 1.4, transition: { duration: 0.2 } }
  }

  const minutes = 6 * new Date().getMinutes()
  const hours = 30 * ((new Date().getHours() + new Date().getMinutes() / 60) % 12) - 90

  console.log({ hours, minutes })
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
        style={{ background: '#F4D270' }}
        onClick={handleOnClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="75" height="70" viewBox="0 0 75 75" fill="white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="38.5" r="27" stroke={fill} strokeWidth="3" />
          <line x1="37.5" y1="13" x2="37.5" y2="17" stroke={fill} />
          <line x1="59" y1="38.5" x2="63" y2="38.5" stroke={fill} />
          <line x1="12" y1="38.5" x2="16" y2="38.5" stroke={fill} />
          <line x1="17.125" y1="26.7835" x2="18.857" y2="27.7835" stroke={fill} strokeWidth="0.5" />
          <line x1="55.875" y1="27.7835" x2="57.6071" y2="26.7835" stroke={fill} strokeWidth="0.5" />
          <line x1="17.875" y1="49.7835" x2="19.607" y2="48.7835" stroke={fill} strokeWidth="0.5" />
          <line x1="56.125" y1="48.7835" x2="57.8571" y2="49.7835" stroke={fill} strokeWidth="0.5" />
          <line x1="26.2165" y1="17.875" x2="27.2165" y2="19.607" stroke={fill} strokeWidth="0.5" />
          <line x1="48.7835" y1="19.6071" x2="49.7835" y2="17.875" stroke={fill} strokeWidth="0.5" />
          <line x1="26.7835" y1="57.6071" x2="27.7835" y2="55.875" stroke={fill} strokeWidth="0.5" />
          <line x1="48.2165" y1="56.875" x2="49.2165" y2="58.6071" stroke={fill} strokeWidth="0.5" />
          <line x1="37.5" y1="60" x2="37.5" y2="64" stroke={fill} />
          <motion.line
            x1="38.5"
            y1="38.5"
            x2="50.5"
            y2="38.5"
            style={{ originY: '38.5', originX: '37.5' }}
            stroke={fill}
            strokeLinecap="round"
            animate={hovered ? { rotate: 360 + hours } : { rotate: hours }}
            transition={hovered ? { repeat: Infinity, duration: 24, ease: 'linear' } : {}}
          />
          <motion.line
            x1="37.5"
            y1="37.5"
            x2="37.5"
            y2="18.5"
            style={{ originY: '38.5', originX: '37.5' }}
            stroke={fill}
            strokeLinecap="round"
            animate={hovered ? { rotate: 360 + minutes } : { rotate: minutes }}
            transition={hovered ? { repeat: Infinity, duration: 2, ease: 'linear' } : {}}
          />
          <circle cx="37.5" cy="38.5" r="1.5" fill={'#64B9B8'} />
        </svg>
      </motion.button>
      <motion.div
        className={styles.backdrop}
        style={{ background: '#F4D270' }}
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </div>
  )
}

export { Since }
