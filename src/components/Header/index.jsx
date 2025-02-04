import css from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <div className={css.header}>
        <div className={css.wrapper}>
          <div className={css.logo}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 -960 960 960"
              className={css.icon}
            >
              <path d="M168-96q-29.7 0-50.85-21.15Q96-138.3 96-168v-624q0-29.7 21.15-50.85Q138.3-864 168-864h624q29.7 0 50.85 21.15Q864-821.7 864-792v624q0 29.7-21.15 50.85Q821.7-96 792-96H168Zm0-72h624v-624H168v624Zm144-72h336q39.6 0 67.8-28.2Q744-296.4 744-336v-144q0-26.63-13-48.81Q718-551 696-563v-61q0-40-28-68t-68-28H360q-40 0-68 28t-28 68v61q-22.08 13.29-35.04 34.64Q216-507 216-480v144q0 39.6 28.2 67.8Q272.4-240 312-240Zm0-72q-10 0-17-7t-7-17v-144q0-10.2 6.86-17.1 6.86-6.9 17-6.9t17.14 6.9q7 6.9 7 17.1v96h288v-96q0-10.2 6.86-17.1 6.86-6.9 17-6.9t17.14 6.9q7 6.9 7 17.1v144q0 10-7 17t-17 7H312Zm96-144v-24q0-34-20.5-59.5T336-573v-51q0-10.4 6.8-17.2 6.8-6.8 17.2-6.8h240q10.4 0 17.2 6.8 6.8 6.8 6.8 17.2v51q-31 8-51.5 33.5T552-480v24H408ZM168-168v-624 624Z" />
            </svg>
          </div>
          <button className={css["btn-burger"]} onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 -960 960 960"
              className={css.burger}
            >
              <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
            </svg>
          </button>
          <nav className={css.navigation}>
            <ul className={css.list}>
              <Link to="/">
                <li className={css.item}>USŁUGI</li>
              </Link>
              <Link to="/">
                <li className={css.item}>GALERIA</li>
              </Link>
              <Link to="/">
                <li className={css.item}>KONTAKT</li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
