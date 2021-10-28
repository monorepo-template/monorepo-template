import { render } from '@testing-library/react';
import App from '../..';

describe('App', (): void => {
  it('should render "Hello world"', (): void => {
    const { getByText } = render(<App />);
    getByText('Hello world');
  });
});
