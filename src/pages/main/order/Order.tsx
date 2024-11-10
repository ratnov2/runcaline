import { forwardRef } from 'react'
import { bgImg, boxImg, kleyImg, orderImg } from '../../../assets/inxex'
import styles from './Order.module.scss'
import { ShareWithPadding } from '../../../shared/ui/shareWithPadding/ShareWithPadding'

export const Order = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styles.order}>
      <h2>Заказать</h2>
      <img className={styles.bgImg} src={bgImg} alt="bg" />
      <ShareWithPadding>
        <div className={styles.content}>
          <div className={styles.content__left}>
            <div className={styles.imgs}>
              <div className={styles.asset1}>
                <img src={boxImg} alt="коробка клея runkaline" />
              </div>
              <div className={styles.asset2}>
                <img src={kleyImg} alt="клей runkaline" />
              </div>
            </div>
            <div className={styles.text}>
              <h5>Информация для розничных покупателей</h5>
              <div className={styles.text__left}>
                <p>
                  Наш клей участвует в акции OZON, поэтому скорее заказывайте!
                </p>
                <a href="https://ozon.ru/t/6b0dE0l">
                  https://ozon.ru/t/6b0dE0l
                </a>
                <p>
                  Также наш клей RNA-13.1 продается на Яндекс.Маркете. При
                  покупке Вы получите 75 баллов Яндекс.Плюса!
                </p>
                <a href="https://market.yandex.ru/cc/T9wrD8i">
                  https://market.yandex.ru/cc/T9wrD8i
                </a>
              </div>
            </div>
          </div>
          <div className={styles.content__right}>
            <div className={styles.imgs}>
              <div className={styles.asset2}>
                <img src={kleyImg} alt="клей runkaline" />
              </div>
              <div className={styles.asset1}>
                <img src={orderImg} alt="коробка клея runkaline" />
              </div>
            </div>
            <div className={styles.text}>
              <h5>Условия оптовой закупки!</h5>
              <div className={styles.text__right}>
                <p>
                  Для того, чтобы закупка считалась оптовой необходимо сделать
                  минимальный заказ определенного количества. Минимальным
                  заказом является - 1 упаковка (в одной упаковке - 20 шт.). В
                  одной целой коробке - 400 штук. Данное количество оптовой
                  поставки распространяется на клей цианоакрилатный RNA - 13.1.
                  По оптовым заказам работаем только юридическими лицами и ИП.
                </p>
                <p>
                  Если Вы готовы приобрести наш продукт или
                  проконсультироваться, Вы должны сделать следующее: Прислать
                  свой заказ на email - runkaline@inbox.ru, указав реквизиты
                  компании и контактный телефон. Также Вы можете позвонить по
                  телефону - +7 (916) 606-05-77. Если вдруг не получили ответа
                  по поводу заказа или консультации, продублируйте свой запрос
                  по номеру телефона - +7 (916) 606-05-77, а также по данному
                  номеру телефона в мессенджере WhatsApp или написать сообщение
                  в наше сообщество ВК, приложив скриншот неотвеченного запроса.
                </p>
                <p>
                  С каждым клиентом условия работы с нами обговариваются
                  индивидуально!
                </p>
                <p>
                  Мы всегда добиваемся полного взаимопонимания и найдем подход
                  клюбому покупателю.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ShareWithPadding>
    </div>
  )
})
