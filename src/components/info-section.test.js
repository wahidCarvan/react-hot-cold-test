import React from 'react';
import { shallow } from 'enzyme';

describe('<InfoSection />', () => {
	it('Renders without crashing', () => {
		shallow(<InfoSection />);
	});
});