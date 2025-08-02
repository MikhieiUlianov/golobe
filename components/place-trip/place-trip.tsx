import Image from "next/image";
import classes from "./place-trip.module.scss";
import Fetch from "@/lib/fetch";
import Link from "next/link";

type PlaceItem = {
  img: string;
  title: string;
  id: string;
};

export default async function PlaceTrip() {
  const places: PlaceItem[] = await Fetch("places");
  return (
    <section className={classes["place-trip"]}>
      <header>
        <div>
          <h2>Plan your perfect trip</h2>
          <h3>Search Flights & Places Hire to our most popular destinations</h3>
        </div>
        <div>
          <Link href={"/"}>See more places</Link>
        </div>
      </header>
      <ul>
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
    </section>
  );
}
