import React from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
const DeteleModal = ({showDeleteModal, setShowDeleteModal, onDelete, todolist}) => {

    const handleClose = () => setShowDeleteModal(false);
    const handleShow = () => setShowDeleteModal(true);


    return (
        <>

      <Modal show={showDeleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the todolist?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {onDelete(todolist.id)
          handleClose()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default DeteleModal
