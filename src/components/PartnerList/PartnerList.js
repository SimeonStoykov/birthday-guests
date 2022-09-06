import Partner from '../Partner/Partner';
import './PartnerList.css';

function PartnerList({ partners }) {
  if (!partners || !Array.isArray(partners) || partners.length === 0) return null;

  return (
    <ol>
      {partners.map((p) => (
        <li key={p.partner_id}>
          <Partner data={p} />
        </li>
      ))}
    </ol>
  );
}

export default PartnerList;
