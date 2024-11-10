import { forwardRef, useRef } from 'react'
import { bgImg, kleyImg, videoImg } from '../../../assets/inxex'
import { Logo } from '../../../shared/ui/logo/Logo'
import styles from './VideoInfo.module.scss'
import videojs from 'video.js'
import VideoJS from './videoJS/VideoJS'
import { ShareWithPadding } from '../../../shared/ui/shareWithPadding/ShareWithPadding'

export const VideoInfo = forwardRef<HTMLDivElement>((props, ref) => {
  const playerRef = useRef(null)

  const videoJsOptions = {
    controls: true,
    responsive: true,
    fluid: true,
    poster: videoImg,
    sources: [
      {
        src: 'https://ik.imagekit.io/ikmedia/example_video.mp4',
        type: 'video/mp4',
      },
    ],
  }

  const handlePlayerReady = (player: any) => {
    playerRef.current = player

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting')
    })

    player.on('dispose', () => {
      videojs.log('player will dispose')
    })
  }

  return (
    <div ref={ref} className={styles.videoInfo}>
      <img className={styles.bgImg} src={bgImg} alt="bg" />
      <ShareWithPadding>
        <Logo />
        <div className={styles.content}>
          <img
            className={styles.content__kley}
            src={kleyImg}
            alt="клей - runkaline"
          />
          <p>
            Тюбик клея выполнен из высокопрочного материала, что делает его
            хранение безопасным. Преимуществом RNA-13.1 является удобство в
            использовании «носика», с помощью которого можно проклеивать
            труднодоступные места. Материал упаковки, транспортировки и хранения
            клея выполнен из картона с глянцевым покрытием и вмещает в себя 20
            единиц. RNA-13.1 универсален, поскольку он идеально склеивает
            пластик, дерево, сталь, резину и каучук!
          </p>
          <div className={styles.video}>
            <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            {/* <video
            width={600}
            height={600}
            poster={videoImg}
            controls
            src="https://ik.imagekit.io/ikmedia/example_video.mp4"
          >
            f
          </video> */}
          </div>
        </div>
      </ShareWithPadding>
    </div>
  )
})
