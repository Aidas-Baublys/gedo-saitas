const Map = () => {
  const address = 'Konstitucijos pr. 12, Vilnius, 09309';
  const encodedAddress = encodeURIComponent(address);

  return (
    <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
      <iframe
        title='Google Map'
        width='100%'
        height='100%'
        style={{ border: 0 }}
        src={`https://www.google.com/maps?q=${encodedAddress}&output=embed`}
        allowFullScreen></iframe>
    </div>
  );
};

export default Map;
