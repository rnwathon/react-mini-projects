import { render, screen } from '@testing-library/react';
import Index from '../index';

test('should renders slider list item component', () => {
  render(<Index />);
  const sliderItems = screen.getAllByTestId(/slider-item/);
  const { length } = sliderItems;
  expect(length).toEqual(4);
});
