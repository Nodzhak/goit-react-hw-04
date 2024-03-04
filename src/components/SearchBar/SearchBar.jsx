import toast from "react-hot-toast";
import styles from './SearchBar.module.css'

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target.elements.query.value.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }

    onSubmit(event.target.elements.query.value);
    event.target.reset();
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={styles.button} type="submit">Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;