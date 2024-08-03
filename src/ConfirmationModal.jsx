import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmationModal({ isOpen, formData, onClose }) {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Подтверждение заявки</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Поздравляем, {formData.lastName} {formData.firstName}. Вам одобрена {formData.loanAmount} $ на {formData.loanDuration} дней.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
