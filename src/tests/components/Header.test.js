// react-test-renderyarn
import React from 'react';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
	/* 
	const renderer = new ReactShallowRenderer();
	renderer.render(<Header />);
	expect(renderer.getRenderOutput()).toMatchSnapshot();
	*/
	//the first time we run, it will always pass
	//latter, it will fail if the snapshot doesn't match

	//use Enzyme shallow instead
	const wrapper = shallow(<Header startLogout={() => {}} />);
	expect(toJSON(wrapper)).toMatchSnapshot();
	//expect(wrapper.find('h1').text()).toBe('Expensify');
});

test('should call startLogout on button click', () => {
	const startLogout = jest.fn();
	const wrapper = shallow(<Header startLogout={startLogout} />);
	wrapper.find('button').simulate('click');
	expect(startLogout).toHaveBeenCalled();
});
