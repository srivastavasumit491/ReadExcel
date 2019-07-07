import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../../views/Main';
import { dataListContent, fileContent } from '../mocks/DataTable.mock';
import { shallow, mount } from 'enzyme';
import readXlsxFile from 'read-excel-file'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});

it('sould upload file and check rows to be updated', () => {
    const wrapper = mount(<Main />);
    const e = { 
        target: {
            files: []
        }
    };
    wrapper.find('input').props().onChange(e);
    expect(wrapper.state().dataList).toEqual([]);
});