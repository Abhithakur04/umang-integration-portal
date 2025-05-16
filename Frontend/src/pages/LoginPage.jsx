import LoginForm from '../components/LoginForm';

const LoginPage = ({ setToken, setRole }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <LoginForm setToken={setToken} setRole={setRole} />
    </div>
  );
};

export default LoginPage;
