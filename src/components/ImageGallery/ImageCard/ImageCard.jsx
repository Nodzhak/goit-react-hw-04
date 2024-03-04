import styles from "../ImageGallery.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <>
      <img
        onClick={openModal}
        className={styles.image}
        src={image.urls.small}
        alt={image.description}
      />
    </>
  );
};

export default ImageCard;