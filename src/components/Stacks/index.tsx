import type { ReactNode } from "react";
import "./styles.css";

interface StacksProps {
  technologyName: string;
  children: ReactNode;
}

export function Stacks({ technologyName, children }: StacksProps) {
  return (
    <section className="stackContain">
      <div className="children">{children}</div>
      <h1 className="stackText">{technologyName}</h1>
    </section>
  );
}
