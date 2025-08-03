import Image from "next/image";
import classes from "./promo.module.scss";

export default function Promo() {
  return (
    <section className={classes.promo}>
      <p>
        <Image
          src="/background.jpeg"
          alt="boat as a background"
          priority
          fill
        />
      </p>
      <div></div>
      <div className={classes.promo__texts}>
        <h1>Helping Others</h1>
        <h2>Live & Travel</h2>
        <h3>Special offers to suit your plan</h3>
      </div>
    </section>
  );
}
