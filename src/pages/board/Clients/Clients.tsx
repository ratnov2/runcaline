import { Table } from "antd"

export const Clients = ()=>{
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
    <h1>Просмотр клиентов рассылки</h1>
    <p>В таблице отображаются клиенты рассылки</p>

    <Table dataSource={dataSource} columns={columns} />;
    </>
}