import { ComponentPropsWithoutRef } from "react";
import classes from "./button-with-text.module.scss";

type ButtonWithTextProps = {
  name: string;
  img: string;
  isActive: boolean;
} & ComponentPropsWithoutRef<"button">;

export default function ButtonWithText({
  name,
  img,
  isActive,
  ...props
}: ButtonWithTextProps) {
  let clazz = classes["button-with-text"];
  if (isActive) {
    clazz += ` ${classes.active}`;
  }

  return (
    <button className={clazz} {...props}>
      <img src={img} alt={name} />
      <div className="fw-600 fz-14 f-montserrat header__find-text">{name}</div>
    </button>
  );
}
