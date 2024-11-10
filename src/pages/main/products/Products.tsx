import { forwardRef } from 'react'
import {
  bgImg,
  boxKleyimg,
  pitnoImg,
  usebleImg,
  materialImg,
  savingImg,
} from '../../../assets/inxex'
import styles from './Products.module.scss'
import { ShareWithPadding } from '../../../shared/ui/shareWithPadding/ShareWithPadding'

export const Products = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className={styles.product}>
      <h2>Наш продукт</h2>
      <img className={styles.bgImg} src={bgImg} alt="bg" />
      <ShareWithPadding>
        <div className={styles.product__wrapper}>
          <div className={styles.product__imgs}>
            <img className={styles.pitnoImg} src={pitnoImg} alt="bg" />
            <img
              className={styles.usebleImg}
              src={usebleImg}
              alt="применение"
            />
            <img className={styles.boxKleyimg} src={boxKleyimg} alt="клеу" />
            <img
              className={styles.materialImg}
              src={materialImg}
              alt="склеивает все"
            />
            <img className={styles.savingImg} src={savingImg} alt="хранение" />
          </div>
          <div className={styles.product__description}>
            <p className={styles.description__header}>
              Цианоакрилатный клей склеивает резину, пластмассу, стекло, фарфор.
              Он быстро и надежно соединяет точно прилегающие друг к другу
              детали. Например, с помощью цианоакрилатного клея можно приклеить
              к чашке отколовшуюся ручку. Если сделать это аккуратно, место
              стыка будет незаметным.
            </p>
            <div className={styles.description__info}>
              <p className={styles.description__head}>
                Клеи на основе цианоакрилатов используют в быту и в
                промышленности. Примеры применения:
              </p>
              <ul>
                <li>
                  1) Для ремонта посуды, пластиковых и резиновых предметов в
                  быту.
                </li>
                <li>
                  2) Для ремонта и сборки деталей при производстве автомобилей,
                  бытовой техники.
                </li>
                <li>3) В моделировании для сборки и ремонта моделей.</li>
                <li>4) Для сборки рекламных стендов, стоек.</li>
                <li>5) Для склеивания пластиковых водопроводных труб.</li>
              </ul>
              <p>
                Цианоакрилатный клей незаменим, когда нужно быстро и надежно
                соединить детали
              </p>
            </div>
          </div>
        </div>
      </ShareWithPadding>
    </div>
  )
})
