"use client"

import {useState} from "react"
import styles from "./appointment-form.module.css"

export function AppointmentForm() {
    const [date, setDate] = useState("")

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>ЗАПИСЬ НА СЕРВИС</h2>
            <form className={styles.form}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Причина обращения и автомобиль</label>
                    <select className={styles.select} defaultValue="">
                        <option value="" disabled>
                            Причина обращения
                        </option>
                        <option value="maintenance">Техническое обслуживание</option>
                        <option value="repair">Ремонт</option>
                        <option value="diagnostic">Диагностика</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Дилерский центр, дата и время визита</label>
                    <select className={styles.select} defaultValue="mineralnye">
                        <option value="mineralnye">BMW Ставрополь</option>
                    </select>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={styles.input}/>
                    <input type="time" className={styles.input}/>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Личные данные</label>
                    <input type="text" placeholder="Имя *" required className={styles.input}/>
                    <input type="tel" placeholder="Телефон *" required className={styles.input}/>
                    <input type="email" placeholder="Email" className={styles.input}/>
                </div>

                <button type="submit" className={styles.submitButton}>
                    ОТПРАВИТЬ
                </button>
            </form>
        </div>
    )
}

