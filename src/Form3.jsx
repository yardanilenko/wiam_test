import React from 'react';
import { useState } from 'react';
import './Form3.css';


function Form3({ formData, handleSliderChange, handleSubmit }) {
  const [loanAmount, setLoanAmount] = useState(formData.loanAmount);
  const [loanDuration, setLoanDuration] = useState(formData.loanDuration);

  const handleLoanAmountChange = (e) => {
    setLoanAmount(e.target.value);
    handleSliderChange('loanAmount', e.target.value);
  };

  const handleLoanDurationChange = (e) => {
    setLoanDuration(e.target.value);
    handleSliderChange('loanDuration', e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: `${formData.firstName} ${formData.lastName}`,
            phone: formData.phone,
            gender: formData.gender,
            workplace: formData.workplace,
            address: formData.address,
            loanAmount: loanAmount,
            loanDuration: loanDuration,
          }),
        });
        const result = await response.json();
  
        handleSubmit();
        console.log(result);
      } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className="form-group">
        <label>Сумма займа</label>
        <input
          type="range"
          min="200"
          max="1000"
          step="100"
          value={loanAmount}
          onChange={handleLoanAmountChange}
          className="form-control range-slider"
          required
        />
        <span>${loanAmount}</span>
      </div>
      <div className="form-group">
        <label>Срок займа (дни)</label>
        <input
          type="range"
          min="10"
          max="30"
          step="1"
          value={loanDuration}
          onChange={handleLoanDurationChange}
          className="form-control range-slider"
          required
        />
        <span>{loanDuration} дней</span>
      </div>
      <button type="submit" className="btn btn-primary">Подать заявку</button>
    </form>
  );
}

export default Form3;
