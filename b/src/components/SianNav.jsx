import { twMerge } from "tailwind-merge";

export default function SianNav() {
  const buttons = [
    { text: "A안", href: "../a/", active: false },
    { text: "B안", href: "../b/", active: true },
  ];

  return (
    <nav className="absolute right-0 top-[150px] z-[99999999] flex min-w-[120px] flex-col gap-1 py-0">
      {buttons.map((button, index) => (
        <a
          key={index}
          href={button.href}
          className={twMerge(
            "block rounded-l bg-[#666] px-4 py-2 text-lg font-bold text-white",
            button.active && "bg-[#FC6262]",
          )}
        >
          {button.text}
        </a>
      ))}
    </nav>
  );
}
