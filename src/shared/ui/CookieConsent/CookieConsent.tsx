import { useState, useEffect } from 'react'
import { Alert, Button, Space } from 'antd'

const CookieConsent = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    setVisible(false)
    localStorage.setItem('cookieConsent', 'true')
  }

  if (!visible) {
    return null // Не отображать элемент, если согласие уже получено
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,

        padding: '10px 16px',
      }}
    >
      <Alert
        message="Мы используем куки"
        description="Мы используем файлы куки для улучшения вашего опыта. Продолжая использовать наш сайт, вы соглашаетесь на их использование."
        type="info"
        action={
          <Space>
            <Button size="small" type="primary" onClick={handleAccept}>
              Принять
            </Button>
          </Space>
        }
        closable={false}
        showIcon
      />
    </div>
  )
}

export default CookieConsent
