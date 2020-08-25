import {configure} from 'enzyme'
import React from 'react';
import {shallow} from 'enzyme'
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import Nav from './header/Nav';
configure({adapter:new Adapter()});

test('renders learn react link', () => {
  expect(true).toBeTruthy();
});

it('Nav exists or Not',()=>{
  const wrapper=shallow(<App />)
  const nav=wrapper.find(Nav);
  expect(nav.exists()).toBe(true);
})