type IconName =
  | "arrow-right"
  | "chevron-left"
  | "chevron-right"
  | "play"
  | "phone"
  | "mail"
  | "pin"
  | "clock"
  | "menu"
  | "close"
  | "quote";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-right": <path d="M4 12h15m-5.5-5.5L19 12l-5.5 5.5" />,
  "chevron-left": <path d="m14.5 6-6 6 6 6" />,
  "chevron-right": <path d="m9.5 6 6 6-6 6" />,
  play: <path d="M8 5.6v12.8L19 12 8 5.6Z" strokeLinejoin="round" />,
  phone: (
    <path d="M6.2 4h3l1.4 3.6-2 1.5a10.5 10.5 0 0 0 5.3 5.3l1.5-2L19 13.8v3a2 2 0 0 1-2.2 2A15.4 15.4 0 0 1 4.2 6.2 2 2 0 0 1 6.2 4Z" />
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.5 7.5-5.5" />
    </>
  ),
  pin: (
    <>
      <path d="M19 10.5c0 5-7 10.5-7 10.5S5 15.5 5 10.5a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10.3" r="2.6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3.2 2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  quote: (
    <path d="M10 17c-2.6 0-4-1.8-4-4.4C6 9 8.3 6.4 11.6 5m7.4 12c-2.6 0-4-1.8-4-4.4C15 9 17.3 6.4 20.6 5" />
  ),
};

export default function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}
