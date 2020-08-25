import React from 'react';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'
import {mount} from 'enzyme';
import {shallow} from 'enzyme';
import EditCommponent from './EditComponent'
import {configure} from 'enzyme'
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});
// it('Render',()=>{
//     const wrapper=shallow(<Router><AddComponent /></Router>);
//     const h=wrapper.find("h1");
//     const result=h.text();
//     expect(result).toBe("ADD PRODUCT");
//   })
it('Submit Fucntion',()=>{
    const onSubmitFun=jest.fn();
    const wrapper=mount(<form onSubmit={onSubmitFun}></form>)
    const form=wrapper.find('form');
    form.simulate('submit');
    expect(onSubmitFun).toHaveBeenCalledTimes(1);
  });
  it('name field',()=>{
    const wrapper=mount(<input type="text" name="name"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('text');
    expect(input.prop('name')).toEqual('name');
  });
  it('Price field',()=>{
    const wrapper=mount(<input type="number" name="price"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('number');
    expect(input.prop('name')).toEqual('price');
  })
  it('Stock field',()=>{
    const wrapper=mount(<input type="number" name="stock"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('number');
    expect(input.prop('name')).toEqual('stock');
  })
  it('Image field',()=>{
    const wrapper=mount(<input type="file" name="imageUrl"/>);
    const input=wrapper.find('input');
    expect(input).toHaveLength(1);
    expect(input.prop('type')).toEqual('file');
    expect(input.prop('name')).toEqual('imageUrl');
  })
  it('Button field',()=>{
    const wrapper=mount(<button type="submit">Login</button>);
    const input=wrapper.find('button');
    const result=input.text();
    expect(result).toBe('Login')
    expect(input.prop('type')).toEqual('submit');
  })