import { Component } from "react";
import styles from "./accordion.module.css";

class AccordionOption1 extends Component {
  state = {
    isExpanded: false,
    activeIndex: 0,
  };

  expandAllBtnClick = () => {
    this.setState({ activeBtnIndex: NaN, isExpanded: true });
  };

  collapseAllBtnClick = () => {
    this.setState({ activeBtnIndex: NaN, isExpanded: false });
  };

  setActiveIndex = (index) => {
    this.setState({ activeBtnIndex: index });
  };

  makeTitleClassName = (index) => {
    const { activeBtnIndex, isExpanded } = this.state;
    const titleClassNames =
      index === activeBtnIndex || isExpanded
        ? `${styles.title} ${styles.isExpanded}`
        : styles.title;
    return titleClassNames;
  };

  makeContentClassName = (index) => {
    const { activeBtnIndex, isExpanded } = this.state;
    const contentClassNames =
      index === activeBtnIndex || isExpanded
        ? `${styles.content} ${styles.isExpanded}`
        : styles.content;
    return contentClassNames;
  };

  render() {
    const { expandAllBtnClick, collapseAllBtnClick } = this;

    const { items } = this.props;
    const elements = items.map(({ title, text, id }, index) => {
      const titleClassNames = this.makeTitleClassName(index);
      const contentClassNames = this.makeContentClassName(index);
      return (
        <div key={id} className={styles.accordion__item}>
          <p
            onClick={() => {
              this.setActiveIndex(index);
            }}
            className={titleClassNames}
          >
            {title}
          </p>
          <div
            onClick={() => {
              this.setActiveIndex(index);
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

export default AccordionOption1;
