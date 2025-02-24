import css from "./Hero.module.css";
export const Hero = () => {
  return (
    <>
      <div className={css.hero}>
        <div className={css.wrapper}>
          <h2 className={css.slogan}>
            Wo<span className={css.dark}>od</span>{" "}
            <span className={css.light}>Des</span>ign
          </h2>
        </div>
      </div>
    </>
  );
};
