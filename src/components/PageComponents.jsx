import { useParams } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function PageTitle({ theme = "sky", tag, title, className }) {
  const { lang } = useParams();

  const textColorClass = {
    sky: "text-dd-sky",
    yellow: "text-[#FFAF2B]",
    green: "text-dd-green",
    pink: "text-dd-pink",
    white: "text-white",
    gray: "text-[#ADADAD]",
  }[theme];

  return (
    <h2
      className={twMerge(
        "text-[54px] font-bold",
        lang === "ko" && "font-primary text-[70px]",
        "mo:text-[32px]",
        className?.container,
      )}
    >
      {tag && (
        <span
          className={twMerge(
            "mb-[0.3em] block font-second text-[0.43em] font-semibold leading-[1em]",
            textColorClass,
            className?.tag,
          )}
        >
          {tag}
        </span>
      )}
      {title && (
        <span
          className={twMerge(
            "block leading-[1.2]",
            lang === "en" && textColorClass,
            lang === "en" && "font-semibold",
            className?.title,
          )}
        >
          {title}
        </span>
      )}
    </h2>
  );
}

export function BulletList({ items, className }) {
  return (
    <ul className={twMerge(className?.container)}>
      {items.map((item) => (
        <li
          className={twMerge(
            "relative mb-[0.5em] pl-[1.5em] leading-[1.4] last:mb-0",
            "before:absolute before:left-0 before:top-[0.7em] before:h-[11px] before:w-[11px] before:-translate-y-1/2 before:rounded-full before:bg-[#FFAF2B]",
            className?.item,
          )}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function PageLayout({ children, className }) {
  return (
    <div className={twMerge("grid h-full grid-cols-[440px,1fr] gap-[80px]", className)}>
      {children}
    </div>
  );
}
