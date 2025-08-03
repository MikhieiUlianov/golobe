import Link from "next/link";
import classes from "./reviews.module.scss";
import Image from "next/image";
import Fetch from "@/lib/fetch";
import SectionLayout from "../section-layout/section-layout";

type ReviewItem = {
  title: string;
  text: string;
  rating: string;
  name: string;
  from: string;
  picture: string;
  id: string;
};

export default async function Reviews() {
  const reviews: ReviewItem[] = await Fetch("reviews");

  return (
    <SectionLayout
      link="/"
      linkText="See all"
      h2="Reviews"
      h3="What people says about Golobe facilities"
    >
      <ul className={classes.reviews}>
        {reviews.map(({ title, text, rating, name, from, picture, id }) => {
          const formattedRating = parseFloat(rating);
          return (
            <li key={id}>
              <h3>{title}</h3>
              <p>{text}</p>
              <Link href="/">View more</Link>
              <div className={classes.rating}>
                Rating:{" "}
                <progress value={formattedRating} max={5}>
                  <span className={classes.ratingValue}>{rating}</span>
                </progress>{" "}
                out of 5
              </div>
              <div className={classes.name}>{name}</div>
              <div className={classes.from}>{from}</div>
              <div className={classes.google}>
                <img src="/icons/google.svg" alt="google icon" />
                <div>Google</div>
              </div>
              <Image src={picture} alt={title} width={377} height={200} />
            </li>
          );
        })}
      </ul>
    </SectionLayout>
  );
}
