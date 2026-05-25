import type { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-black py-20 sm:py-24">
      <div className="container-narrow">
        <div className="mb-12 flex items-baseline gap-4">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <div className="h-px flex-1 bg-black" />
        </div>
        {children}
      </div>
    </section>
  );
}
