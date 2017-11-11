import React from 'react';
import {it, describe} from 'mocha';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import sinon from 'sinon';

import App from './App';

describe('<App/>', () => {

    it('renders without any error', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('div')).to.have.length(1);
    });

    it('calls right method on componentDidMount', () => {
        const spyDidMount = sinon.spy(App.prototype, 'componentDidMount');
        const fetchSpy = sinon.spy();
        const wrapper = mount(<App fetchTrendingGifs={fetchSpy}/>);

        expect(spyDidMount.calledOnce).to.equal(true);
        expect(fetchSpy.calledOnce).to.equal(true);

        App.prototype.componentDidMount.restore();
    })
});
