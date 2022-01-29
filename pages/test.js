import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

export default function Test() {
  const router = useRouter()

  return (
    <main className={`${styles.test}`} style={{ background: '#96a4f3;' }}>
      <button onClick={() => router.push('/')}>Click me</button>
    </main>
  )
}
