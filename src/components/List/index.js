import { List as ListAntd, Avatar } from 'antd';

const List = ({ data, onClick }) => (
  <ListAntd
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <ListAntd.Item onClick={() => onClick && onClick(item)} style={{ cursor: 'pointer' }}>
        <ListAntd.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<span>{item.title}</span>}
          description={item.description}
        />
      </ListAntd.Item>
    )}
  />
);

export default List;
