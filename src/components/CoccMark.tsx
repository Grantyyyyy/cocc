/** Centerline tracing of the church's existing four-letter fish monogram. */
const letterPaths = [
  "M140 193 V172 Q110 189 88 221 Q111 255 140 273 V251",
  "M240 140 Q207 138 175 150 V295 Q207 305 240 305 Z",
  "M345 193 V170 Q314 150 276 142 V302 Q313 294 345 275 V250",
  "M417 202 L425 173 Q394 190 371 221 Q393 252 425 273 L417 241",
];

export default function CoccMark() {
  return (
    <svg
      viewBox="60 110 400 225"
      fill="none"
      aria-hidden="true"
      className="h-auto w-[min(76vw,26rem)] overflow-visible"
    >
      <defs>
        <linearGradient id="intro-gold" x1="85" y1="140" x2="415" y2="310" gradientUnits="userSpaceOnUse">
          <stop stopColor="#c9a45c" />
          <stop offset="0.35" stopColor="#fff0bc" />
          <stop offset="0.64" stopColor="#bc913f" />
          <stop offset="1" stopColor="#e5c578" />
        </linearGradient>
      </defs>
      <g stroke="url(#intro-gold)" strokeWidth="19" strokeLinejoin="miter" strokeLinecap="square">
        {letterPaths.map((path) => (
          <path key={path} data-logo-stroke d={path} opacity="0" />
        ))}
      </g>
    </svg>
  );
}
