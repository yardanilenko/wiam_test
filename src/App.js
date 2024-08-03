import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import ConfirmationModal from './ConfirmationModal';
import { useNavigate } from 'react-router-dom';
import './App.css'; 


function ProtectedRoute({ isAllowed, redirectTo, children }) {
  return isAllowed ? children : <Navigate to={redirectTo} />;
}

function App() {
  const [formData, setFormData] = useState({
    phone: '',
    firstName: '',
    lastName: '',
    gender: '',
    workplace: '',
    address: '',
    loanAmount: 200,
    loanDuration: 10
  });

  const [isForm1Completed, setIsForm1Completed] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSliderChange = (name, value) => {
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleForm1Submit = () => {
    setIsForm1Completed(true);
    navigate('/form2');
  };

  const handleSubmit = () => {
    setModalOpen(true);
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={<Form1 formData={formData} handleChange={handleChange} handleSubmit={handleForm1Submit} />}
        />
        <Route
          path="/form2"
          element={
            <ProtectedRoute isAllowed={isForm1Completed} redirectTo="/">
              <Form2 formData={formData} handleChange={handleChange} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/form3"
          element={
            <ProtectedRoute isAllowed={isForm1Completed && formData.workplace && formData.address} redirectTo="/">
              <Form3 formData={formData} handleSliderChange={handleSliderChange} handleSubmit={handleSubmit} />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ConfirmationModal
        isOpen={isModalOpen}
        formData={formData}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
