import Link from "next/link";

import classes from "./section-layout.module.scss";
import { ReactNode } from "react";
type SectionLayoutProps = {
  children: ReactNode;
  link: string;
  linkText: string;
  h2: string;
  h3: string;
};
export default function SectionLayout({
  children,
  link,
  linkText,
  h2,
  h3,
}: SectionLayoutProps) {
  return (
    <section className={classes["section-layout"]}>
      <header>
        <div>
          <h2>{h2}</h2>
          <h3>{h3}</h3>
        </div>
        <div>
          <Link href={link}>{linkText}</Link>
        </div>
      </header>
      {children}
    </section>
  );
}
