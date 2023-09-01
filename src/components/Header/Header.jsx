import React, { useState } from "react";
import clsx from "clsx";
import { motion, AnimatePresence, delay } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Container from "../Container";
import Input from "../InputMovie";
import Nav from "../Nav";
import styles from "./Header.module.css";
const Header = ({
  onClick,
  onChange,
  changeType,
  arr,
  inputChange,
  sortIt,
  sortonYears,
  EnterHandler
}) => {
  const [activeMenu, setMenu] = useState(false);
  const showDrop = {
    hidden: {
      height: 0,
      opacity: 0,
      visibility: "hidden",
      transition: {
        ease: "easeOut",
        duration: 0.4,
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      visibility: "visible",
      transition: {
        ease: "easeOut",
        duration: 0.1,
      },
    },
  };
  return (
    <div className={styles.header}>
      <Container className={styles.headerContainer}>
        <div className={styles.header__left}>
          <div className={styles.headerLogo}>
            <img src="/img/Netflix logo.png" alt="Netflix_logo" />
          </div>
          <div className={styles.header__nav}>
            <Nav></Nav>
          </div>
        </div>
        <div className={styles.drop_container}>
          <div
            className={clsx(styles.search_container, {
              [styles.active_search]: activeMenu,
            })}
          >
            <form action="#" className={styles.search}>
              <Input
                onChange={(e) => inputChange(e)}
                className={styles.inputHeader}
              ></Input>
              <button onClick={(e) => onClick(e)}>
                <FontAwesomeIcon
                  icon={faSearch}
                  className={styles.searchIcon}
                ></FontAwesomeIcon>
              </button>
            </form>
            <button
              className={clsx(styles.chevron_down_btn, {
                [styles.active_down_btn]: activeMenu,
              })}
              onClick={() => setMenu(!activeMenu)}
            >
              <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
            </button>
          </div>
          <AnimatePresence initial={false}>
            {activeMenu && (
              <motion.div
                className={styles.drop_down}
                initial={"hidden"}
                animate={"visible"}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                variants={showDrop}
              >
                <motion.ul className={styles.type_list_films}>
                  {arr.map(({ title, id, value, checked }) => {
                    return (
                      <li
                        className={clsx(styles.type_link__films, {
                          [styles.active_type]: checked,
                        })}
                        onClick={() => changeType(id)}
                        id={id}
                        key={id}
                      >
                        {title}
                      </li>
                    );
                  })}
                </motion.ul>
                <button onClick={() => sortIt()}>Sort fIlms</button>
                <Input
                  placeholder="Type a Year"
                  className={styles.input_year}
                  onKeyPress={(e) => EnterHandler(e)}
                  onChange={(e) => sortonYears(e)}
                ></Input>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </div>
  );
};

export default Header;
