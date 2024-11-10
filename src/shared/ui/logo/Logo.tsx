import { logoImg } from '../../../assets/inxex'
import styles from './Logo.module.scss'
import './Logo.module.scss'

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoImg} alt="bg" />
      <h3>Runkaline</h3>
    </div>
  )
}
