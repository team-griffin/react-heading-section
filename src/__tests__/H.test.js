import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import H from '../H';
import { configure, shallow } from 'enzyme';

configure({ adapter: new Adapter() });

describe('<H/>', function() {
  it('renders an h at the given depth', function() {
    const h1 = shallow(<H depth={1}/>);
    const h6 = shallow(<H depth={6}/>);

    expect(h1.type()).to.eql('h1');
    expect(h6.type()).to.eql('h6');
  });

  it('passes through the children', function() {
    const h = shallow(<H depth={1}><div className="foo"/></H>);

    expect(h.children()).to.have.length(1);
  });

  it('does not pass through depth', function() {
    const h = shallow(<H depth={1}><div/></H>);

    expect(h.prop('depth')).to.be.undefined;
  });

  it('passes through the other props', function() {
    const h = shallow(<H depth={1} random={true}><div/></H>);

    expect(h.prop('random')).to.eql(true);
  });
});
