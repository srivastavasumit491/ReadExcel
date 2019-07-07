import React from 'react';
import ReactDOM from 'react-dom';
import DataTable from '../DataTable';
import { dataListContent} from '../mocks/DataTable.mock';
import { shallow, mount } from 'enzyme';

it('renders table without crashing', () => {
    let wrapper = mount(<DataTable dataList={dataListContent} />);
    expect(wrapper.find('table')).not.toBeUndefined();
    expect(wrapper.find('tbody')).not.toBeUndefined();
    expect(wrapper.find('tr')).not.toBeUndefined();
});