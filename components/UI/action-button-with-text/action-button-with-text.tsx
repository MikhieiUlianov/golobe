import { JSX } from "react";
import classes from "./action-button-with-text.module.scss";
import Link from "next/link";

type ActionButtonWithTextProps = {
  text: string;
  isGreen?: boolean;
  iconComp: () => JSX.Element;
  link?: string;
  center?: boolean;
};

export default function ActionButtonWithText({
  text,
  iconComp,
  isGreen,
  link,
  center,
}: ActionButtonWithTextProps) {
  let clazz = `${classes.button}`;
  if (isGreen) {
    clazz += ` ${classes.green}`;
  }
  if (center) {
    clazz += ` ${classes.center}`;
  }
  if (link) {
    return (
      <Link href={link} className={clazz}>
        {iconComp()}
        {text}
      </Link>
    );
  }
  return (
    <button className={clazz}>
      {iconComp()}
      {text}
    </button>
  );
}
