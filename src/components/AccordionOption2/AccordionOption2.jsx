import { Component } from "react";
import styles from "./accordion.module.css";

class AccordionOption2 extends Component {
  state = {
    // isExpanded: false,
    activeIndex: [],
  };

  expandAllBtnClick = () => {
    const newActiveIndexArray = this.props.items.map((_, index) => index);
    this.setState({
      activeIndex: newActiveIndexArray,
    });
  };

  collapseAllBtnClick = () => {
    this.setState({ activeIndex: [] });
  };

  setActiveIndex = (index) => {
    this.setState((prevState) => {
      const newActiveIndexArray = prevState.activeIndex.includes(index)
        ? prevState.activeIndex.filter((item) => item !== index)
        : [...prevState.activeIndex, index];
      console.log(newActiveIndexArray);
      return {
        activeIndex: newActiveIndexArray,
      };
    });
    // this.setState({ activeBtnIndex: index });
  };

  makeTitleClassName = (index) => {
    const { activeIndex, isExpanded } = this.state;

    return activeIndex.includes(index)
      ? `${styles.title} ${styles.isExpanded}`
      : styles.title;
  };

  makeContentClassName = (index) => {
    const { activeIndex, isExpanded } = this.state;

    return activeIndex.includes(index)
      ? `${styles.content} ${styles.isExpanded}`
      : styles.content;
  };

  render() {
    const { expandAllBtnClick, collapseAllBtnClick, setActiveIndex } = this;

    const { items } = this.props;
    const elements = items.map(({ title, text, id }, index) => {
      const titleClassNames = this.makeTitleClassName(index);
      const contentClassNames = this.makeContentClassName(index);
      return (
        <div key={id} className={styles.accordion__item}>
          <p
            onClick={() => {
              setActiveIndex(index);
            }}
            className={titleClassNames}
          >
            {title}
          </p>
          <div
            onClick={() => {
              setActiveIndex(index);
            }}
            className={contentClassNames}
          >
            <p>{text}</p>
          </div>
        </div>
      );
    });

    return (
      <div className={styles.container}>
        <div className={styles.accordion}>
          <h1>FAQ</h1>
          <button
            onClick={expandAllBtnClick}
            type="button"
            className={styles.btn}
            id="expand-all"
          >
            Expand All
          </button>
          <button
            onClick={collapseAllBtnClick}
            type="button"
            className={styles.btn}
            id="collapse-all"
          >
            Collapse All
          </button>
          {elements}
        </div>
      </div>
    );
  }
}

export default AccordionOption2;
