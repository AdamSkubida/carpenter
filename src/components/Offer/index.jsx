import css from "./Offer.module.css";

export const Offer = () => {
  return (
    <>
      <section className={css["reveal-section"]}>
        <ul className={css["offer-list"]}>
          <li className={css["offer-item"]}>1</li>
          <li className={css["offer-item"]}>2</li>
          <li className={css["offer-item"]}>3</li>
          <li className={css["offer-item"]}>4</li>
        </ul>
      </section>
      <section className={css["bg-image"]}></section>
      <section className={css["reveal-section"]}>Drugi komponent</section>
    </>
  );
};
