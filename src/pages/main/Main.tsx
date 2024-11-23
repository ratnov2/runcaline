import {
  Alert,
  Button,
  Checkbox,
  Drawer,
  Form,
  Input,
  Modal,
  Space,
  Typography,
} from 'antd'
import { useRef, useState } from 'react'
import styles from './Main.module.scss'
import { Link } from 'react-router-dom'
import bgImg from '../../assets/bg.png'
import headerImg from '../../assets/header.png'

import { mainData } from './main.data'
import { Products } from './products/Products'
import { VideoInfo } from './video-info/VideoInfo'
import { Brand } from './brand/Brand'
import { Order } from './order/Order'
import { Feedback } from './feedback/Feedback'
import { Footer } from './footer/Footer'
import CookieConsent from '../../shared/ui/CookieConsent/CookieConsent'

export const Main = () => {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [visibleCookie, setVisibleCookie] = useState(true)

  const productRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)
  const videoInfoRef = useRef<HTMLDivElement>(null)
  const brandRef = useRef<HTMLDivElement>(null)
  const orderRef = useRef<HTMLDivElement>(null)
  const feedbackRef = useRef<HTMLDivElement>(null)

  const handleClick = (value: string) => {
    switch (value) {
      case 'our_product':
        productRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'brand':
        brandRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'order':
        orderRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'feedback':
        feedbackRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
      case 'main':
        mainRef.current?.scrollIntoView({ behavior: 'smooth' })
        break
    }
  }
  return (
    <>
      <Button onClick={() => setVisible(true)}>go to authorization</Button>
      <Link to={'/board'}>
        <Button>go to BOARD</Button>
      </Link>
      <Modal
        footer={null}
        onClose={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        open={visible}
      >
        <h3>{isLogin ? 'Авторизация' : 'Регистрация'}</h3>
        <Form>
          <p>Введите почту</p>
          <Input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <p>Введите пароль</p>
          <Input
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <div className={styles.auth__policy}>
            <Checkbox />
            <span>Я соглачен на обработку персональных данных</span>
          </div>
        </Form>
        <div className={styles.buttons}>
          <Button onClick={() => setIsLogin(false)}>Регистрация</Button>
          <Button onClick={() => setIsLogin(true)}>Логин</Button>
        </div>
      </Modal>
      <div className={styles.shared}>
        <div className={styles.sidebar}>
          <img className={styles.bgImg} src={bgImg} alt="bg" />
          <header>
            <ul>
              {mainData.map((item) => (
                <li onClick={() => handleClick(item.value)} key={item.value}>
                  {item.label}
                </li>
              ))}
            </ul>
          </header>
          <div ref={mainRef} className={styles.wrapper__header}>
            <img src={headerImg} alt="runkaline" />
          </div>
        </div>
        <Products ref={productRef} />
        <VideoInfo ref={videoInfoRef} />
        <Brand ref={brandRef} />
        <Order ref={orderRef} />
        <Feedback ref={feedbackRef} />
      </div>
      <CookieConsent />
      <Footer handleClick={handleClick} />
    </>
  )
}
