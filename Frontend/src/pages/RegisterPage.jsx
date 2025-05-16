import RegisterForm from '../components/RegisterForm';

const RegisterPage = ({ setToken, setRole }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <RegisterForm setToken={setToken} setRole={setRole} />
    </div>
  );
};

export default RegisterPage;
