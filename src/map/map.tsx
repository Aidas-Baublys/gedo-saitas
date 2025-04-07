const Map = () => {
  const address = '1322 SE 1st Ave, Fort Lauderdale, 33316';
  const encodedAddress = encodeURIComponent(address);

  return (
    <div style={{ width: '100%', height: '400px' }}>
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
