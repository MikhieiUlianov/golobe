import Image from "next/image";
import Link from "next/link";

import Fetch from "@/lib/fetch";
import SectionLayout from "../section-layout/section-layout";
import classes from "./fall-into-travel.module.scss";

type Travel = {
  img: string;
  title: string;
  price: string;
  text: string;
  id: string;
};
export default async function FallIntoTravel() {
  const travels: Travel[] = await Fetch("travels");

  return (
    <SectionLayout
      linkText="See All"
      link="/flights"
      h2="Fall into travel
"
      h3="Going somewhere to celebrate this season? Whether you’re going home or somewhere to roam, we’ve got the travel tools to get you to your destination."
    >
      <ul className={classes["fall-into-travel"]}>
        {travels.map(({ img, title, price, id, text }) => (
          <li key={id}>
            <div className={classes.image}>
              <Image src={img} alt={title} fill />
            </div>
            <div className={classes.texts}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <div>
                <span>${price}</span>
              </div>
            </div>

            <Link href="/flights">View Details</Link>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}
