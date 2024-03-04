import ImageCard from "./ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <>
      <ul className={styles.gallery}>
        {images.map((image) => (
          <li key={image.id} className={styles.card}>
            <ImageCard
              image={image}
              openModal={() =>
                openModal({ src: image.urls.regular, alt: image.description })
              }
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ImageGallery;