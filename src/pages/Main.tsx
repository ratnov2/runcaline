import { Button, Form, Input, Modal } from "antd"
import { useState } from "react"
import styles from './Main.module.scss'
import { Link } from "react-router-dom"

export const Main = ()=>{
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)

    return <>
    <Button onClick={()=>setVisible(true)}>go to authorization</Button>
    <Link to={'/board'} > <Button>go to BOARD</Button></Link>
    <Modal footer={null} onClose={()=>setVisible(false)} onCancel={()=>setVisible(false)}  open={visible}>
        <h3>
            {isLogin? 'Авторизация' : 'Регистрация'}
        </h3>
        <Form>
            <p>Введите почту</p>
            <Input value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>
            <p>Введите пароль</p>
            <Input value={password} onChange={(e)=>setPassword(e.currentTarget.value)}/>
        </Form>
        <div className={styles.buttons}>
            <Button onClick={()=>setIsLogin(false)}>
                Регистрация
            </Button>
            <Button onClick={()=>setIsLogin(true)}>
                Логин
            </Button>
        </div>
    </Modal>
    </>

}