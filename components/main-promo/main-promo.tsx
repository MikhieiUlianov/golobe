import classes from "./main-promo.module.scss";
import Image from "next/image";

export default function MainPromo() {
  return (
    <section className={classes["main-promo"]}>
      <p>
        <Image
          src="/airplane-sunset.webp"
          alt="boat as a background"
          priority
          fill
        />
      </p>
      <div className={classes.texts}>
        <h1>Make your travel whishlist, we’ll do the rest</h1>
        <h2>Special offers to suit your plan</h2>
      </div>
    </section>
  );
}
