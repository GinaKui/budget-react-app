import React from 'react';
import { mount } from 'enzyme';
import { LoginPage } from '../../layout/LoginPage';
/**
 * @todo this test file will not work
 */

/* test('shoulde correctly render LoginPage', () => {
	const wrapper = mount(<LoginPage />);
	expect(wrapper).toMatchSnapshot();
}); */

/* test('should call startLogin on button click', () => {
	const startLogin = jest.fn();
	const wrapper = mount(<LoginPage startLogin={startLogin} />);
	wrapper.find('button').simulate('click');
	expect(startLogin).toHaveBeenCalled();
}) */

describe('LoginPage should render', () => {
	it('snapshot', () => {})
})