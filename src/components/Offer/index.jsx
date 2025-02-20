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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 256 256"
            >
              <path d="M248 64H8a8 8 0 0 0 0 16h8v112a8 8 0 0 0 16 0v-48h192v48a8 8 0 0 0 16 0V80h8a8 8 0 0 0 0-16ZM32 80h88v48H32Zm192 48h-88V80h88ZM96 104a8 8 0 0 1-8 8H64a8 8 0 0 1 0-16h24a8 8 0 0 1 8 8Zm64 0a8 8 0 0 1 8-8h24a8 8 0 0 1 0 16h-24a8 8 0 0 1-8-8Z" />
            </svg>
          </li>
          <li className={css["offer-item"]}>
            <div className={css["item-topic"]}>
              <p>KUCHNIE</p>
              <p>ZABUDOWA</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 256 256"
            >
              <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H48V48h160v160ZM72 76a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm44 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm44 0a12 12 0 1 1 12 12 12 12 0 0 1-12-12Zm24 28H72a8 8 0 0 0-8 8v72a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-72a8 8 0 0 0-8-8Zm-8 72H80v-56h96Z" />
            </svg>
          </li>
          <li className={css["offer-item"]}>
            <div className={css["item-topic"]}>
              <p>DRZWI</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 256 256"
            >
              <path d="M232 216h-24V40a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v176H24a8 8 0 0 0 0 16h208a8 8 0 0 0 0-16ZM64 40h128v176H64Zm104 92a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
            </svg>
          </li>
          <li className={css["offer-item"]}>
            <div class={css["item-topic"]}>
              <p>SZAFY</p>
              <p>MEBLE</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 256 256"
            >
              <path d="M144 192a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8ZM120 72h16a8 8 0 0 0 0-16h-16a8 8 0 0 0 0 16Zm16 48h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16Zm80-80v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16ZM56 152h144v-48H56Zm0-112v48h144V40Zm144 176v-48H56v48h144Z" />
            </svg>
          </li>
        </ul>
      </section>
      <section className={css["bg-image"]}></section>
      <section className={css["reveal-section"]}>Drugi komponent</section>
    </>
  );
};
