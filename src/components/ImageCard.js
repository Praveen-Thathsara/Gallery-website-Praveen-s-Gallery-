import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const ImageCard = ({ image }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="image-card bg-dark" onClick={handleShow}>
        <img src={image.url} alt={image.alt} className="img-fluid" />
        {image.caption && <p>{image.caption}</p>}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img src={image.url} alt={image.alt} className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark">
            <a
              href={image.url}
              download
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Download
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImageCard;
