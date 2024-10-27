import { Button, Input, Modal, Table } from "antd";
import { useState } from "react";

export const Messages = ()=>{
    const [visible, setVisible] = useState(true)
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];
      
      const columns = [
        {
          title: 'Номер',
          dataIndex: 'name',
          key: 'id',
        },
        {
          title: 'Электронная почта',
          dataIndex: 'age',
          key: 'email',
        },
        {
          title: 'Фамилия и имя',
          dataIndex: 'address',
          key: 'fio',
        },
        {
            title: 'Информация',
            dataIndex: 'address',
            key: 'info',
        },
        {
            title: 'Владелец',
            dataIndex: 'address',
            key: 'admin',
        },
      ];
    return <>
    <h1>Просмотр Сообщений</h1>
    <p>В таблице отображаются сообщения</p>
    <Button type="primary">Создать сообщение</Button>
    <Modal onClose={()=>setVisible(false)} onCancel={()=>setVisible(false)}  open={visible}>
        <p>Тема письма</p>
        <Input />
        <p>Тело письма</p>
        <Input />
        <p>Активная рассылка</p>
        <Input />
    </Modal>
    <Table dataSource={dataSource} columns={columns} />;
    </>
}