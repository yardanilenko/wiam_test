import React from 'react';
import InputMask from 'react-input-mask';

function Form1({ formData, handleChange, handleSubmit }) {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name,
        value: value.trim().replace(/\s+/g, ' ')
      }
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>Телефон</label>
        <InputMask
          mask="0999-999-999"
          value={formData.phone}
          onChange={handleChange}
        >
          {() => (
            <input
              type="tel"
              name="phone"
              className="form-control"
              required
              placeholder="0XXX-XXX-XXX"
            />
          )}
        </InputMask>
      </div>
      <div className="form-group">
        <label>Имя</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Фамилия</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label>Пол</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="form-control"
          required
        >
          <option value="">Выберите пол</option>
          <option value="Мужской">Мужской</option>
          <option value="Женский">Женский</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Далее</button>
    </form>
  );
}

export default Form1;
