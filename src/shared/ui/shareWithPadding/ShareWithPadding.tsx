import { FC, ReactNode } from 'react'
import styles from './ShareWithPadding.module.scss'

interface IShare {
  children: ReactNode
}

export const ShareWithPadding = ({ children }: IShare) => {
  return <div className={styles.share}>{children}</div>
}
