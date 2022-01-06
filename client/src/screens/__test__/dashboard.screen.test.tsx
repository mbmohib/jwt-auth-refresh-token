import { screen } from '@testing-library/react';

import { Dashboard } from '..';
import { renderWithRouter as render } from '../../utils/test';

test('show dashboard page data', () => {
  render(<Dashboard />);

  expect(screen.getByText(/Congratulations! You are in!/i)).toBeInTheDocument();
});
