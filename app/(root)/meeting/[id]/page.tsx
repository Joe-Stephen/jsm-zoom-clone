const Meeting = ({ params }: { params: { id: string } }) => {
  return <p>Meeting Room: #{params.id}</p>;
};

export default Meeting;
