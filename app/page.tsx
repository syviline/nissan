import styles from "./page.module.css"
import {ServiceSection} from "@/components/service-section"
import {AppointmentForm} from "@/components/appointment-form"

export default function Home() {
    return (
        <>
            <section className={styles.hero}></section>

            <section className={styles.services}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Купить новый автомобиль BMW</h2>
                    <div className={styles.servicesGrid}>
                        <ServiceSection title="СЕРВИС" image="/bmw1.png" href="/service"/>
                        <ServiceSection title="СПЕЦПРЕДЛОЖЕНИЯ" image="/bmw2.webp" href="/special-offers"/>
                    </div>
                    <div className={styles.servicesGrid}>
                        <ServiceSection title="ЗАПАСНЫЕ ЧАСТИ И АКСЕССУАРЫ" image="/bmw3.webp" href="/parts"/>
                        <ServiceSection title="ГАРАНТИЯ И ПОДДЕРЖКА" image="/bmw4.webp" href="/guarantee"/>
                    </div>
                </div>
            </section>

            <section className={styles.advantages}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Преимущества официального дилера BMW</h2>
                    <p className={styles.advantagesText}>
                        Проведём грамотный ремонт автомобиля. Быстро устраняем неисправности, используя оригинальные
                        детали и
                        рекомендованные производителем технологии. Вы оцените невысокую стоимость услуг.
                    </p>
                </div>
            </section>

            <section className={styles.appointment}>
                <div className="container">
                    <AppointmentForm/>
                </div>
            </section>
        </>
    )
}

