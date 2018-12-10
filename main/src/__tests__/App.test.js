import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import render from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshot changes when input change', () => {
  const component = render.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('check for toggling state change', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().showFilters).toEqual(false);
  wrapper.instance().toggleFilter();
  expect(wrapper.state().showFilters).toEqual(true);
});
