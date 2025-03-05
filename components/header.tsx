import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.css"

export function Header() {
    return (
        <header className={styles.header}>
            <div className="container">
                <div className="logo">
                    <Link href="/" className={styles.logo}>
                        <Image src="/bmw.svg" alt="BMW" width={100} height={60} className={styles.logoImage}/>
                    </Link>
                </div>
                <div className={styles.headerRight}>
                    <div className={styles.topBar}>
                        <div className={styles.brand}>
                            <span className={styles.dealerText}>Официальный дилер BMW</span>
                        </div>
                        <div className={styles.contact}>
                            <div className={styles.contactItem}>
                                <svg className={styles.icon} viewBox="0 0 24 24" width="24" height="24">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z M12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
                                    />
                                </svg>
                                <span>BMW Ставрополь</span>
                            </div>
                            <div className={styles.contactItem}>
                                <svg className={styles.icon} viewBox="0 0 24 24" width="24" height="24">
                                    <path
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                                    />
                                </svg>
                                <span>+7 (87922) 258-17</span>
                            </div>
                        </div>
                    </div>
                    <nav className={styles.nav}>
                        <ul className={styles.navList}>
                            <li>
                                <Link href="/service/service">СЕРВИС</Link>
                            </li>
                            <li>
                                <Link href="/special-offers">СПЕЦПРЕДЛОЖЕНИЯ</Link>
                            </li>
                            <li>
                                <Link href="/parts">ЗАПАСНЫЕ ЧАСТИ И АКСЕССУАРЫ</Link>
                            </li>
                            <li>
                                <Link href="/warranty">ГАРАНТИЯ И ПОДДЕРЖКА</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

