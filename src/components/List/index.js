import { List as ListAntd, Avatar } from 'antd';

const List = ({ data }) => {

  return <ListAntd
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <ListAntd.Item>
        <ListAntd.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<span>{item.title}</span>}
          description={item.description}
        />
      </ListAntd.Item>
    )}
  />
}

export default List;
