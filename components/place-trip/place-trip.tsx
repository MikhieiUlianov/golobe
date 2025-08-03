import Image from "next/image";
import classes from "./place-trip.module.scss";
import Fetch from "@/lib/fetch";
import SectionLayout from "../section-layout/section-layout";

type PlaceItem = {
  img: string;
  title: string;
  id: string;
};

export default async function PlaceTrip() {
  const places: PlaceItem[] = await Fetch("places");
  return (
    <SectionLayout
      link="/"
      linkText="See more places"
      h2="Plan your perfect trip"
      h3="Search Flights & Places Hire to our most popular destinations"
    >
      <ul className={classes["place-trip"]}>
        {places.map(({ img, title, id }) => (
          <li key={id}>
            <Image src={img} alt={title} width={90} height={90} />
            <span>
              <h4>{title}</h4>
              <p>Flight . Hotels . Resources</p>
            </span>
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
}
