"use client";

import { useState } from "react";
import ActionButtonWithText from "../UI/action-button-with-text/action-button-with-text";
import ButtonWithText from "../UI/button-with-text/button-with-text";
import AddIcon from "../UI/images/add-icon";
import SendIcon from "../UI/images/send-icon";
import Input from "../UI/input/input";
import classes from "./find-trip.module.scss";

export default function FindTrip() {
  const [activeSearchTerm, setActiveSearchTerm] = useState<
    "airplane" | "house"
  >("airplane");
  console.log(activeSearchTerm);
  return (
    <section className={classes["find-trip"]}>
      <header>
        <ButtonWithText
          isActive={activeSearchTerm === "airplane"}
          name="Flights"
          img="/icons/header/airplane.svg"
          onClick={() => setActiveSearchTerm("airplane")}
        />
        <ButtonWithText
          isActive={activeSearchTerm === "house"}
          name="Stays"
          img="/icons/header/bed-black.svg"
          onClick={() => setActiveSearchTerm("house")}
        />
      </header>
      <form className={classes.form}>
        <div>
          <Input
            label="Name"
            name="name"
            placeholder="Name"
            style={{ width: "300px" }}
          />
          <Input
            label="Date"
            type="date"
            name="date"
            placeholder="date"
            style={{ width: "140px" }}
          />
          <Input
            label="Price"
            name="price"
            placeholder="price"
            style={{ width: "300px" }}
          />
          <Input
            label="Duration"
            type="number"
            name="duration"
            placeholder="duration"
            style={{ width: "300px" }}
          />
        </div>
        <div className={classes.actions}>
          <ActionButtonWithText text="Find" iconComp={() => <AddIcon />} />
          <ActionButtonWithText
            text="Find"
            isGreen={true}
            link="/flights"
            iconComp={() => <SendIcon />}
          />
        </div>
      </form>
    </section>
  );
}
