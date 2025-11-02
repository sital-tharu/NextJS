
const UserDetails = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Showing details for User #{id}</h1>

    </div>
  )
};

export default UserDetails;