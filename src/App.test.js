import {render, screen} from '@testing-library/react';
import GlobalApp from './AppContainer';
import React from 'react';
import ReactDOM from 'react-dom'

test('renders learn react link', () => {
  render(<GlobalApp />);
  const linkElement = screen.getByText('learn react');
  expect(linkElement).toBeInTheDocument();
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GlobalApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
})