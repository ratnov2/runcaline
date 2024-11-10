import { Slide, SlideshowRef } from 'react-slideshow-image'
import { bgImg, ozonImg } from '../../../assets/inxex'
import { Logo } from '../../../shared/ui/logo/Logo'
import styles from './Feedback.module.scss'
import { slideData } from './slide-item/slide.data'
import { StarSVG } from '../../../assets/svg/StarSVG'
import { SliderButton } from '../../../assets/svg/SliderButton'
import { forwardRef, useRef, useState } from 'react'
import { ShareWithPadding } from '../../../shared/ui/shareWithPadding/ShareWithPadding'

export const Feedback = forwardRef<HTMLDivElement>((props, ref) => {
  const [slideIndex, setSlideIndex] = useState(0)
  const slideRef = useRef<SlideshowRef>(null)
  return (
    <div ref={ref} className={styles.feedback}>
      <h2>Отзывы</h2>

      <img className={styles.bgImg} src={bgImg} alt="bg" />

      <ShareWithPadding>
        <Logo />
        <div className={styles.sliderButtons}>
          <button>
            <SliderButton onClick={() => slideRef.current?.goBack()} />
          </button>
          <button>
            <SliderButton onClick={() => slideRef.current?.goNext()} />
          </button>
        </div>
      </ShareWithPadding>
      <div className={styles.slides}>
        <Slide
          ref={slideRef}
          slidesToScroll={1}
          slidesToShow={2}
          arrows={false}
        >
          {slideData.map((slide, index) => (
            <div key={index} className={styles.slide}>
              <img src={ozonImg} alt="ozon - runkaline" />
              <h5>{slide.name}</h5>
              <div className={styles.slide__stars}>
                {new Array(slide.stars).fill(0).map((_, index) => (
                  <StarSVG key={index} />
                ))}
              </div>
              <p>{slide.text}</p>
            </div>
          ))}
        </Slide>
      </div>
      <h4>
        Мы всегда добиваемся полного взаимопонимания <br /> и найдем подход к
        любому покупателю!
      </h4>
    </div>
  )
})
