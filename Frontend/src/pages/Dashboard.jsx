import AadhaarForm from '../components/AadhaarForm';

const Dashboard = ({ token }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-lg font-semibold">
        UMANG Dashboard
      </header>
      <AadhaarForm token={token} />
    </div>
  );
};

export default Dashboard;
