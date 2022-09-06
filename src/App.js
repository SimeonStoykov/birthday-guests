import partners from './data/partners.json';
import { calculateDistance } from './utils';
import config from './config';
import PartnersList from './components/PartnerList/PartnerList';

const { officeLocation, distanceRangeInKm, sortingDirection } = config;

function App() {
  const partnersInRange = partners.filter((p) => {
    const distance = calculateDistance(officeLocation, p);
    return distance <= distanceRangeInKm;
  });

  if ((sortingDirection && sortingDirection === 'asc') || sortingDirection === 'desc') {
    partnersInRange.sort((a, b) =>
      sortingDirection === 'asc' ? a.partner_id - b.partner_id : b.partner_id - a.partner_id
    );
  }

  return <PartnersList partners={partnersInRange} />;
}

export default App;
