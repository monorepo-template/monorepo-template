import { render } from '@testing-library/react';
import Employees from '.';

describe('Employees', (): void => {
  it('should render my name', (): void => {
    const { getByText } = render(<Employees />);
    getByText('Charles Stover');
  });
});
