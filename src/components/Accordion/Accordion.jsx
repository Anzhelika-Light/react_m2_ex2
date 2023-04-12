import { Component } from "react";
import styles from "./accordion.module.css";

class Accordion extends Component {
  state = {
    isExpanded: false,
  };

  handleClick = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  };

  render() {
    const { handleClick } = this;

    const { isExpanded } = this.state;

    const titleClassNames = isExpanded
      ? `${styles.title} ${styles.isExpanded}`
      : styles.title;
    const contentClassNames = isExpanded
      ? `${styles.content} ${styles.isExpanded}`
      : styles.content;

    return (
      <div className={styles.container}>
        <div className={styles.accordion}>
          <div className={styles.accordion__item}>
            <p onClick={handleClick} className={titleClassNames}>
              First Question
            </p>
            <div onClick={handleClick} className={contentClassNames}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                eu interdum diam. Donec interdum porttitor risus non bibendum.
                Maecenas sollicitudin eros in quam imperdiet placerat. Cras
                justo purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec
                dignissim arcu nec elit faucibus condimentum. Donec facilisis
                consectetur enim sit amet varius. Pellentesque justo dui,
                sodales quis luctus a, iaculis eget mauris. Aliquam dapibus,
                ante quis fringilla feugiat, mauris risus condimentum massa, at
                elementum libero quam ac ligula. Pellentesque at rhoncus dolor.
                Duis porttitor nibh ut lobortis aliquam. Nullam eu dolor
                venenatis mauris placerat tristique eget id dolor. Quisque
                blandit adipiscing erat vitae dapibus. Nulla aliquam magna nec
                elementum tincidunt.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accordion;
