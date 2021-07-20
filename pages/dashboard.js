import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user, loading } = useAuth();

  console.log({user})

  return (
    <>
      <h1>Dashboard</h1>

      {loading ? "Loading..." : user.email}
    </>
  )
};

export default Dashboard;