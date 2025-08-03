import Image from "next/image";
import SectionLayout from "../section-layout/section-layout";
import classes from "./fall-into-example.module.scss";
import Link from "next/link";

export default function FallIntoExample() {
  return (
    <SectionLayout
      link="/"
      linkText="See All"
      h2="Fall into travel"
      h3="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
    >
      <div className={classes["fall-into-example"]}>
        <div className={classes.info}>
          <header>
            <h2>Backpacking Sri Lanka</h2>
            <div>
              From <span>$700</span>
            </div>
          </header>
          <p>
            Traveling is a unique experience as it's the best way to unplug from
            the pushes and pulls of daily life. It helps us to forget about our
            problems, frustrations, and fears at home. During our journey, we
            experience life in different ways. We explore new places, cultures,
            cuisines, traditions, and ways of living.
          </p>
          <Link href={"/"}>See more</Link>
        </div>
        <div className={classes.images}>
          <Image
            width={315}
            height={200}
            src="/img/fall-into-example/house.jpeg"
            alt="beautiful house in forest"
          />
          <Image
            width={315}
            height={200}
            src="/img/fall-into-example/nature.jpeg"
            alt="beautiful nature"
          />
          <Image
            width={315}
            height={200}
            src="/img/fall-into-example/forest.jpeg"
            alt="beautiful forest"
          />
          <Image
            width={315}
            height={200}
            src="/img/fall-into-example/beach.jpeg"
            alt="beautiful beach"
          />
        </div>
      </div>
    </SectionLayout>
  );
}
