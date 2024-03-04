import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none"
  },
};
Modal.setAppElement("#root");

const ImageModal = ({ src, alt, closeModal, modalIsOpen }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img src={src} alt={alt} onClick={closeModal} />
    </Modal>
  );
};

export default ImageModal;