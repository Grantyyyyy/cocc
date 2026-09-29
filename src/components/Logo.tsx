export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="19" fill="currentColor" opacity="0.12" />
      <path
        d="M20 7.5 30.5 15v18h-7.5v-8.5h-6V33H9.5V15L20 7.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M20 11.5v7M16.5 15h7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
