"use client";

import { ReactNode, useEffect } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  className: string;
}

export function Section({ id, children, className }: SectionProps) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Update URL when section comes into view
          history.replaceState({}, "", `#${id}`);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  return (
    <section className={className} id={id}>
      {children}
    </section>
  );
}
