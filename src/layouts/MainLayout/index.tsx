import { ReactNode } from "react"
import styles from './style.module.css'

export type MainLayoutType ={
  children: ReactNode
}

const MainLayout = ({children}: MainLayoutType) => {
  return (
    <div className={styles.Container}>{children}</div>
  )
}

export default MainLayout
