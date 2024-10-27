import { Avatar, Button, Form, Input } from "antd"
import { useState } from "react"
import { UserOutlined  } from '@ant-design/icons';

export const Personal = ()=>{
    const [userInfo, setUserInfo] = useState({
        photo:'',
        name:'',
        email:'',
        password:''
    })

    return <>
    <h1>Личный кабинет</h1>
        <Avatar size={64} icon={<UserOutlined />} />
       <Form>   
            <p>Ваш email</p>
            <Input value={userInfo.email}/>
            <p>Имя</p>
            <Input value={userInfo.name}/>
            <p>Пароль</p>
            <Input value={userInfo.password}/>
       </Form>
       <div >
        <Button>Сохранить</Button>
        <Button  danger>Отменить</Button>
       </div>
       </>
}