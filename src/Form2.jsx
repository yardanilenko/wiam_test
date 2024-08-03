import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form2({ formData, handleChange }) {
  const [workplaceOptions, setWorkplaceOptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkplaces = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products/category-list');
        setWorkplaceOptions(response.data);
      } catch (error) {
        console.error('Ошибка загрузки мест работы:', error);
      }
    };

    fetchWorkplaces();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get('https://dummyjson.com/products/category-list');
    navigate('/form3');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Место работы</label>
        <select
          name="workplace"
          value={formData.workplace}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option value="">Выберите место работы</option>
          {workplaceOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Адрес проживания</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Далее</button>
    </form>
  );
}

export default Form2;
