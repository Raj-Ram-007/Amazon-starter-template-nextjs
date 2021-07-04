function GetImage() {
  const loc = process.env.EMAIL_SERVER_HOST;

  // const loc = fetch(`${process.env.API_URL}`);

  // fetch(process.env.EMAIL_SERVER_HOST).then((response) => response.json());

  return <div>{loc}</div>;
}

export default GetImage;
