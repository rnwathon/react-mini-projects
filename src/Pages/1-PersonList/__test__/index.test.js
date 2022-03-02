import { fireEvent, render, screen } from '@testing-library/react';
import Index from '../index';

test('should renders list component', () => {
  render(<Index />);
  const listElements = screen.getAllByTestId(/list-item/);
  const { length } = listElements;
  expect(length).toEqual(5);
});

test('should renders Clear List button', () => {
  render(<Index />);
  const clearBtn = screen.getByText(/Clear List/);
  expect(clearBtn).toBeInTheDocument();
});

test('show "no data" on clear button click', () => {
  render(<Index />);
  const clearBtn = screen.getByText(/Clear List/);
  fireEvent.click(clearBtn);
  const noDataText = screen.getByText(/No Data/);
  expect(noDataText).toBeInTheDocument();
});
