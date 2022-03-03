import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import Index from '../index';

const mockResponse = {
  author: 'John Doe',
  content:
    'One option when manually mocking a module is to create a folder named __mocks__ and place a file in it with the same name as the module you are mocking. In our case we can do this, and that is because fetch is available globally.',
};

const handlers = [
  rest.get('http://api.quotable.io/random', (req, res, ctx) =>
    res(ctx.json(mockResponse))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should render loading when requesting the quote', () => {
  render(<Index />);
  const loadingText = screen.getByText(/Loading.../);
  expect(loadingText).toBeInTheDocument();
});

test('should render quote & author after request is done', async () => {
  render(<Index />);

  const quoteEl = await screen.findByTestId(/quote/);
  const authorEl = await screen.findByTestId(/author/);

  expect(quoteEl).toBeInTheDocument();
  expect(authorEl).toBeInTheDocument();
});

test('should request & show new quote when Another One button is clicked', async () => {
  render(<Index />);

  const anotherOneBtn = screen.getByText(/Another One/);
  fireEvent.click(anotherOneBtn);

  const loadingText = screen.getByText(/Loading.../);
  expect(loadingText).toBeInTheDocument();

  const quoteEl = await screen.findByTestId(/quote/);
  const authorEl = await screen.findByTestId(/author/);

  expect(quoteEl).toBeInTheDocument();
  expect(authorEl).toBeInTheDocument();
});
