import Link from "next/link"
import styles from "./footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.mainLink}>
          <Link href="/">ГЛАВНАЯ СТРАНИЦА</Link>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>СЕРВИС</h3>
            <ul className={styles.columnList}>
              <li>
                <Link href="/service/body">Кузовной ремонт</Link>
              </li>
              <li>
                <Link href="/service/warranty">Обещания BMW</Link>
              </li>
              <li>
                <Link href="/service/appointment">Запись на сервис</Link>
              </li>
              <li>
                <Link href="/service/tradein">Подменный автомобиль</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>СПЕЦПРЕДЛОЖЕНИЯ</h3>
            <ul className={styles.columnList}>
              <li>
                <Link href="/offers/service">Выгодные сервисные предложения</Link>
              </li>
              <li>
                <Link href="/offers/programs">Сервисные программы BMW</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>ЗАПАСНЫЕ ЧАСТИ И АКСЕССУАРЫ</h3>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>ГАРАНТИЯ И ПОДДЕРЖКА</h3>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.disclaimer}>Сайт не является публичной офертой.</p>
          <p className={styles.disclaimer}>
            Все содержащиеся на Сайте сведения носят исключительно информационный характер и не являются исчерпывающими.
          </p>
          <p className={styles.copyright}>Сделано в UDP Auto</p>
        </div>
      </div>
    </footer>
  )
}

