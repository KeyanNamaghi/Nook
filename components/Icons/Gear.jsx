import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import styles from '../../styles/Home.module.css'

const Gear = ({}) => {
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
        style={{ background: '#CA9AF8' }}
        onClick={handleOnClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            animate={hovered ? { rotate: -360 } : { rotate: 0 }}
            transition={hovered ? { repeat: Infinity, duration: 3 } : {}}
            d="M40.9126 8.06573C40.8376 8.10329 40.7157 8.18779 40.6501 8.26291C40.5844 8.33802 39.9328 9.5164 39.2015 10.8873C38.4703 12.2534 37.8046 13.4834 37.7202 13.6196C37.4718 14.014 37.4905 14.0093 36.1826 14.0609L35.0247 14.1125L34.7763 13.9905C34.5278 13.8684 34.4997 13.8309 32.8262 11.4131C31.8886 10.0657 31.0776 8.8967 31.0167 8.81689C30.8808 8.63379 30.6417 8.51642 30.3979 8.51642C30.1963 8.51642 24.8945 10.2816 24.7117 10.4084C24.4398 10.6009 24.3835 10.8262 24.4351 11.5117C24.5476 12.9013 24.7679 15.6994 24.8148 16.3425L24.871 17.0608L24.7351 17.3284C24.6038 17.5866 24.557 17.6289 23.6382 18.2674C23.1084 18.6336 22.6022 18.9575 22.5131 18.9857C22.1287 19.0983 22.0818 19.0843 19.0629 17.8308C15.9643 16.5444 16.0534 16.5773 15.6877 16.7416C15.5096 16.8261 12.0266 21.164 11.9562 21.3894C11.9187 21.5255 11.9187 21.6147 11.9562 21.7509C11.9937 21.8682 12.6688 22.7978 13.8407 24.3424C15.4252 26.4362 15.6736 26.7883 15.7205 26.9902C15.7861 27.2953 15.7861 27.2953 15.1767 28.7507C14.6376 30.0511 14.5158 30.2342 14.1501 30.3657C14.0423 30.4033 12.6313 30.6755 11.0046 30.9666C7.9107 31.5206 7.89664 31.5253 7.69037 31.807C7.44661 32.1356 6.84189 37.7599 7.03877 37.8773C7.0669 37.896 8.41229 38.3937 10.0249 38.9852C11.6375 39.5768 13.0251 40.1026 13.1047 40.1495C13.4141 40.3279 13.4845 40.5298 13.7657 42.0884C13.911 42.8818 14.0282 43.6283 14.0282 43.7551C14.0282 43.9006 13.986 44.0602 13.9204 44.1823C13.8501 44.3184 13.1376 45.0133 11.614 46.4311C10.3999 47.5578 9.36859 48.5484 9.31703 48.6235C9.25609 48.7221 9.22796 48.8442 9.23265 49.0038C9.23265 49.2197 9.34984 49.4592 10.428 51.5577C11.089 52.83 11.6844 53.9332 11.7547 54.0084C11.8203 54.0788 11.9656 54.1633 12.0734 54.1915C12.2563 54.2431 12.4813 54.2008 15.2002 53.5858C18.266 52.891 18.3738 52.8769 18.716 53.0365C18.8988 53.1257 21.0786 55.3792 21.2099 55.614C21.388 55.9426 21.3787 56.0365 20.9005 57.905C19.7989 62.2101 19.8223 62.1162 19.8833 62.318C19.9114 62.4213 19.9864 62.5575 20.0426 62.6232C20.0989 62.6889 21.1771 63.3227 22.4381 64.0316C24.5148 65.2006 24.7538 65.3227 24.946 65.3227C25.0726 65.3227 25.2226 65.2851 25.3023 65.2382C25.382 65.1865 26.3805 64.1959 27.529 63.0269C28.6775 61.8579 29.6901 60.8627 29.7885 60.8157C30.1307 60.6326 30.2245 60.642 31.9402 61.027C32.8262 61.2242 33.6044 61.4166 33.6653 61.4589C33.9887 61.6702 34.0075 61.7124 35.006 64.717C35.9482 67.548 35.9764 67.6231 36.1545 67.7827C36.2576 67.8766 36.4123 67.9611 36.5155 67.9799C36.942 68.0597 39.6 67.8907 41.297 67.6747C42.0658 67.5761 42.2298 67.4963 42.3611 67.1442C42.4033 67.0315 42.7127 65.6325 43.0455 64.0363C43.4487 62.1302 43.6877 61.0786 43.744 60.9847C43.9268 60.6937 44.0628 60.6232 45.4925 60.0786C47.0348 59.4871 47.2317 59.4449 47.5739 59.6279C47.6583 59.6749 48.7365 60.5246 49.9647 61.5199C51.1975 62.5152 52.2664 63.365 52.346 63.4119C52.4492 63.4729 52.557 63.4917 52.7351 63.4776C52.9742 63.4635 53.0258 63.426 54.3712 62.4072C57.1041 60.3369 57.362 60.135 57.451 60.0082C57.5026 59.9425 57.5542 59.7829 57.5635 59.6561C57.587 59.4495 57.4932 59.1773 56.4994 56.567C55.8994 54.9896 55.3978 53.6281 55.3884 53.5389C55.3415 53.2149 55.4493 53.0131 56.1994 51.9802C56.6025 51.431 56.9776 50.9286 57.0338 50.8723C57.1979 50.6892 57.4791 50.5671 57.7417 50.5718C57.8682 50.5718 59.2699 50.7127 60.8497 50.8864L63.7186 51.1962L63.9201 51.107C64.028 51.0554 64.1545 50.9756 64.2014 50.9239C64.267 50.8488 65.9078 46.4451 66.1796 45.6142C66.2828 45.309 66.2171 45.0508 65.9781 44.8067C65.8843 44.7081 64.7217 43.8302 63.3951 42.8537C61.0137 41.1025 60.9856 41.0791 60.8684 40.8209L60.7512 40.5626L60.8075 39.5533C60.8825 38.2341 60.8918 38.173 61.0653 37.9195C61.2059 37.7176 61.3137 37.6566 63.9389 36.3374C65.4437 35.5815 66.7047 34.9337 66.7469 34.9008C66.85 34.8116 67 34.5018 67 34.375C67 34.1778 65.7859 28.6615 65.7109 28.516C65.6687 28.4362 65.5609 28.3235 65.4624 28.2578C65.2655 28.131 65.4671 28.1451 60.7137 27.8399C58.8902 27.7226 58.8574 27.7132 58.5808 27.4503C58.3792 27.2578 57.5354 25.6663 57.5026 25.4128C57.4838 25.286 57.5026 25.1311 57.5401 25.0184C57.5776 24.9151 58.2995 23.6616 59.1433 22.2344C60.6153 19.7556 60.6809 19.6335 60.6809 19.4082C60.6762 19.2814 60.6481 19.1265 60.6153 19.0608C60.5543 18.9434 56.6307 14.9106 56.4056 14.7369C56.3353 14.6806 56.1947 14.6384 56.0306 14.629L55.7634 14.6102L53.1195 16.0796C51.6663 16.8871 50.3912 17.5773 50.2881 17.6148C49.9647 17.7275 49.7537 17.6571 48.8818 17.1688C48.0005 16.6759 47.9067 16.6054 47.7708 16.3378C47.6489 16.1031 47.6536 16.1641 47.5411 12.8121C47.4473 10.0422 47.4426 9.94362 47.3395 9.73705C47.1661 9.38495 47.5083 9.48823 42.7267 8.34741C41.9204 8.15962 41.2126 8 41.1563 8C41.1001 8.0047 40.9923 8.03287 40.9126 8.06573ZM39.1078 20.5068C40.3969 20.6758 41.4657 20.9152 42.5767 21.2861C48.4786 23.2391 52.9976 28.3282 54.2211 34.3938C54.4884 35.7224 54.5493 36.3609 54.5493 37.9054C54.554 39.3608 54.5305 39.7176 54.3383 40.8866C53.4383 46.3747 49.8615 51.2009 44.8503 53.6797C42.9518 54.6187 41.311 55.1116 39.014 55.4262C38.2968 55.5248 35.681 55.506 34.8888 55.4027C30.7917 54.844 27.2196 53.06 24.4351 50.1775C20.4552 46.0555 18.7535 40.3749 19.7942 34.6848C20.4786 30.9431 22.5084 27.3705 25.4008 24.8118C28.2556 22.2908 31.7386 20.7931 35.5685 20.4457C36.2764 20.38 38.4187 20.4176 39.1078 20.5068Z"
            fill="#58413C"
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

export { Gear }
