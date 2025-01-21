import Image from "next/image"
import Link from "next/link"
import styles from "./service-section.module.css"

interface ServiceSectionProps {
  title: string
  image: string
  href: string
}

export function ServiceSection({ title, image, href }: ServiceSectionProps) {
  return (
    <div className={styles.section}>
      <Image src={image || "/placeholder.svg"} alt={title} width={600} height={400} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <Link href={href} className={styles.button}>
          ПОДРОБНЕЕ
        </Link>
      </div>
    </div>
  )
}

