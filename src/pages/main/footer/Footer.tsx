import { message } from 'antd'
import { geo, market, ozon2Img, tg, vk } from '../../../assets/inxex'
import { BriefcaseSVG } from '../../../assets/svg/BriefcaseSVG'
import { CopySVG } from '../../../assets/svg/CopySVG'
import { GeoSVG } from '../../../assets/svg/GeoSVG'
import { PhoneSVG } from '../../../assets/svg/PhoneSVG'
import { Logo } from '../../../shared/ui/logo/Logo'
import styles from './Footer.module.scss'

interface IFooter {
  handleClick: (value: string) => void
}

export const Footer = ({ handleClick }: IFooter) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.leftInfo}>
          <Logo />
          <div className={styles.navigation}>
            <ul>
              <li onClick={() => handleClick('main')}>Главная</li>
              <li onClick={() => handleClick('our_product')}>Наш продукт</li>
              <li onClick={() => handleClick('brand')}>О бренде</li>
            </ul>
            <ul>
              <li onClick={() => handleClick('order')}>Где заказать</li>
              <li onClick={() => handleClick('feedback')}>Отзывы</li>
              <li>Личный кабинет</li>
            </ul>
          </div>
        </div>
        <div className={styles.rightInfo}>
          <h6>Контакты</h6>
          <ul>
            <li>
              <PhoneSVG />
              <span>+7 (916) 606-05-77</span>
              <CopySVG
                className={styles.copySVG}
                onClick={() => {
                  message.open({ content: 'Скопировано', type: 'info' })
                  navigator.clipboard.writeText('+7 (916) 606-05-77')
                }}
              />
            </li>
            <li>
              <GeoSVG />
              <span>Малая Юшуньская улица, 1с1, Москва</span>
            </li>
            <li>
              <BriefcaseSVG />
              <span>График работы: ежедневно с 10:00 по 20:00</span>
            </li>
          </ul>
          <div className={styles.imgs}>
            <img src={geo} alt="геолокация runkaline" />
            <img src={ozon2Img} alt="ozon runkaline" />
            <img src={vk} alt="vk runkaline" />
            <img src={tg} alt="tg runkaline" />
            <img src={market} alt="market runkaline" />
          </div>
        </div>
      </div>
      <p className={styles.intention}>
        Обращаем Ваше внимание, что вся информация, размещенная на данном
        интернет-сайте, носит информационный характер и не является публичной
        офертой, определенной положениями Статьт 437 (2) ГК РФ.{' '}
      </p>
    </>
  )
}
