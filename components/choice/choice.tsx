import Image from "next/image";
import classes from "./choice.module.scss";
import ActionButtonWithText from "../UI/action-button-with-text/action-button-with-text";
import SendIcon from "../UI/images/send-icon";
import { Turret_Road } from "next/font/google";

export default function Choice() {
  return (
    <section className={classes.choice}>
      <div>
        <Image
          src="/img/choice-flights.jpeg"
          alt="Airport"
          width={600}
          height={560}
        />
        <span>
          <h2>Flights</h2>
          <p>Search Flights & Places Hire to our most popular destinations</p>
          <ActionButtonWithText
            center
            isGreen
            text="Flights"
            link="/flights"
            iconComp={() => SendIcon()}
          />
        </span>
      </div>

      <div>
        <Image
          src="/img/choice-hotels.jpeg"
          alt="Hotels"
          width={600}
          height={560}
        />
        <span>
          <h2>Hotels</h2>
          <p>Search hotels & Places Hire to our most popular destinations</p>
          <ActionButtonWithText
            center
            isGreen
            text="Hotels"
            link="/hotels"
            iconComp={() => SendIcon()}
          />
        </span>
      </div>
    </section>
  );
}
