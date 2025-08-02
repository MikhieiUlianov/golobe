import { ComponentPropsWithoutRef } from "react";

import classes from "./input.module.scss";

type InputProps = {
  label?: string;
  name: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ label, name, ...props }: InputProps) {
  return (
    <div className={classes.input}>
      {label && <label htmlFor={name}>{label}</label>}
      <input name={name} type="text" {...props} />
    </div>
  );
}
