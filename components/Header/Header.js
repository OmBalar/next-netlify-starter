import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/recipes" className={styles.navLink}>
          Recipes
        </Link>
        <Link href="/about" className={styles.navLink}>
          About Me
        </Link>
      </nav>
    </header>
  )
}