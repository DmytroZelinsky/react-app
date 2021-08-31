import React from 'react'
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ITodoItem } from '../types/types';

type Props = {
  showDeleteModal: boolean,
  setShowDeleteModal: (arg0:boolean) => void,
  onDelete: (arg0: number) => void,
  todolist: ITodoItem
}

const DeteleModal = ({showDeleteModal, setShowDeleteModal, onDelete, todolist}:Props) => {

    const handleClose = () => setShowDeleteModal(false);


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
          <Button variant="danger" onClick={() => {onDelete(todolist.id)
          handleClose()}}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default DeteleModal
