import { render, screen } from '@testing-library/react';
import PartnerList from './PartnerList';

import partners from '../../data/partners.json';

test('renders list', () => {
  render(<PartnerList partners={partners} />);
  const partnerList = screen.getByRole('list');
  expect(partnerList).toBeInTheDocument();
});

test("doesn't render list without partners prop", () => {
  render(<PartnerList />);
  const partnerList = screen.queryByRole('list');
  expect(partnerList).not.toBeInTheDocument();
});

test("doesn't render list with empty partners array", () => {
  render(<PartnerList partners={[]} />);
  const partnerList = screen.queryByRole('list');
  expect(partnerList).not.toBeInTheDocument();
});

test("doesn't render list with wrong data type for partners", () => {
  render(<PartnerList partners={''} />);
  const partnerList = screen.queryByRole('list');
  expect(partnerList).not.toBeInTheDocument();
});
