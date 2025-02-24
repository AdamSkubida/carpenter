import css from "./Offer.module.css";

export const Offer = () => {
  return (
    <>
      <section className={css["reveal-section"]}>
        <ul className={css["offer-list"]}>
          <li className={css["offer-item"]}>
            <div className={css["item-topic"]}>
              <p>BIURKA</p>
              <p>STOŁY</p>
            </div>
          </li>
          <li className={css["offer-item"]}>
            <div className={css["item-topic"]}>
              <p>KUCHNIE</p>
              <p>ZABUDOWA</p>
            </div>
          </li>
          <li className={css["offer-item"]}>
            <div className={css["item-topic"]}>
              <p>DRZWI</p>
              <p>SUWNICE</p>
            </div>
          </li>
          <li className={css["offer-item"]}>
            <div className={css["item-topic"]}>
              <p>SZAFY</p>
              <p>MEBLE</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={css["bg-image"]}></section>
      <section className={css["reveal-section"]}>Drugi komponent</section>
    </>
  );
};
