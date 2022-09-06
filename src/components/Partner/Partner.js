import './Partner.css';

function Partner({ data }) {
  if (!data || !data.name || !data.partner_id) return null;

  return (
    <>
      <span className="name">{data.name}</span> - ID: {data.partner_id}
    </>
  );
}

export default Partner;
