import React from 'react';
import { Input } from 'antd';

const Search = ({ onSearch, placeholder, size, loading }) => (
  <Input.Search
    placeholder={placeholder}
    allowClear
    enterButton='Search'
    size={size || 'large'}
    onSearch={onSearch}
    loading={loading}
  />
);

export default Search;
