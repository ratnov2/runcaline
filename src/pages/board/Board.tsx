import { Avatar, Button, Form, Input, Menu } from "antd"
import Sider from "antd/es/layout/Sider"
import Layout, { Content, Header } from "antd/es/layout/layout"
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { UserOutlined,HomeOutlined,MessageOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

const userItems = [
  {
    icon:<HomeOutlined />,
    label: <Link to={'/'}>Главная</Link>,
    key:''
  },
  {
    icon:<UserOutlined />,
    label: <Link to={'/board/personal'}>Личный кабинет</Link>,
    key:'/board/personal'
  }
]

const adminItems = [
  {
    icon:<UserOutlined />,
    label: <Link to={'/board/clients'}>Клиенты рассылки</Link>,
    key:'clients'
  },
  {
    icon:<MessageOutlined />,
    label: <Link to={'/board/messages'}>Просмотр сообщений</Link>,
    key:'/board/messages'
  }
 
]

interface IBoard{
  children: ReactNode
}

export const Board = ({children}:IBoard)=>{
    const [collapsed, setCollapsed] = useState(false);
    const [items, setItems] = useState(userItems)

    const [admin, setAdmin] = useState(false)
    const ref = useRef(true)
    const toggle = () => {
      ref.current &&  setItems( [...items,...adminItems])
      ref.current = false
    };
    useEffect(()=>{
      toggle()
    },[])
    return <Layout style={{height:'100vh'}}>
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Header>
        <Button onClick={toggle}>Стать админом</Button>
      </Header>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['personal']}
        items={items}
      />
    </Sider>
    <Layout style={{height:'100%'}}>
      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 280,
         
        }}
      >
        {children}
      </Content>
    </Layout>
  </Layout>
}