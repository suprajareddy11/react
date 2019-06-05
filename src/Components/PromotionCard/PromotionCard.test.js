import React from 'react';
import ReactDOM from 'react-dom';

import PromotionCard from './PromotionCard';

describe ('PromoationCard component', () => {
  it('should render with default values', () => {
    const div = document.createElement('div');
    const data = {title: 'Manage Campaign', desc: 'create, view & edit campaign', bgColor:"green", nextLink: '/campaign/'}
    ReactDOM.render(<PromotionCard detail={data} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with different sizes', () => {
    const div = document.createElement('div');
    const data = {title: 'Manage Campaign', desc: 'create, view & edit campaign', bgColor:"green", nextLink: '/campaign/'}
    ReactDOM.render(<PromotionCard detail={data} small />, div);
    ReactDOM.render(<PromotionCard detail={data} medium />, div);
    ReactDOM.render(<PromotionCard detail={data} large />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render with box', () => {
    const div = document.createElement('div');
    const data = {title: 'Manage Campaign', desc: 'create, view & edit campaign', bgColor:"green", nextLink: '/campaign/'}
    ReactDOM.render(<PromotionCard detail={data} boxed />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
