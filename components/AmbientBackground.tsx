
'use client'

const stars = [
  [4, 8, 1], [12, 15, 2], [21, 5, 1], [30, 19, 1],
  [39, 9, 2], [48, 24, 1], [57, 6, 1], [67, 17, 2],
  [76, 10, 1], [87, 22, 1], [95, 7, 2],
  [6, 35, 1], [15, 44, 2], [25, 31, 1], [34, 48, 1],
  [43, 37, 2], [53, 46, 1], [62, 33, 1], [72, 49, 2],
  [82, 38, 1], [92, 45, 1],
  [3, 58, 2], [13, 69, 1], [23, 55, 1], [32, 76, 2],
  [42, 63, 1], [51, 84, 1], [61, 57, 2], [70, 72, 1],
  [80, 61, 1], [89, 79, 2], [97, 65, 1],
  [8, 88, 1], [18, 96, 2], [28, 85, 1], [38, 93, 1],
  [48, 74, 2], [58, 96, 1], [68, 88, 1], [78, 97, 2],
  [88, 90, 1], [96, 83, 1],
] as const

const flocks = [
  { top: '24%', delay: '-8s', duration: '42s', scale: 0.7 },
  { top: '51%', delay: '-22s', duration: '48s', scale: 0.52 },
  { top: '73%', delay: '-35s', duration: '45s', scale: 0.62 },
] as const

function Birds() {
  return (
    <svg
      viewBox="0 0 120 40"
      width="72"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M2 13 Q7 5 13 13 Q19 5 24 13" />
      <path d="M30 24 Q36 13 42 24 Q48 13 54 24" />
      <path d="M60 10 Q65 3 70 10 Q75 3 80 10" />
      <path d="M83 27 Q88 19 93 27 Q98 19 103 27" />
      <path d="M95 9 Q100 2 105 9 Q110 2 115 9" />
    </svg>
  )
}

export default function AmbientBackground() {
  return (
    <div className="ambient-sky" aria-hidden="true">
      <div className="sky-night">
        <div className="sky-glow" />

        {stars.map(([left, top, size], i) => (
          <span
            key={i}
            className={`sky-star star-${i % 4}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${-(i % 8) * 0.9}s`,
            }}
          />
        ))}

        <span className="shooting-star shooting-one" />
        <span className="shooting-star shooting-two" />
        <span className="shooting-star shooting-three" />
        <span className="shooting-star shooting-four" />
      </div>

      <div className="sky-day">
        <div className="sky-cloud cloud-one">
          <span />
        </div>
        <div className="sky-cloud cloud-two">
          <span />
        </div>
        <div className="sky-cloud cloud-three">
          <span />
        </div>

        {flocks.map((flock, i) => (
          <div
            key={i}
            className={`bird-flock flock-${i + 1}`}
            style={{
              top: flock.top,
              animationDelay: flock.delay,
              animationDuration: flock.duration,
              transform: `scale(${flock.scale})`,
            }}
          >
            <Birds />
          </div>
        ))}
      </div>

      <style jsx global>{`
        .ambient-sky {
           position: fixed;
           inset: 0;
           z-index: -1;
          overflow: hidden;
          pointer-events: none;
          user-select: none;
        }

        .sky-night,
        .sky-day {
          position: absolute;
          inset: 0;
          overflow: hidden;
          display: none;
        }

        html[data-theme='dark'] .sky-night {
          display: block;
        }

        html[data-theme='light'] .sky-day {
          display: block;
        }

        .sky-glow {
          position: absolute;
          width: 70vw;
          height: 50vw;
          max-height: 600px;
          max-width: 900px;
          top: 8%;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(92, 123, 190, 0.075),
            rgba(70, 95, 155, 0.025) 45%,
            transparent 72%
          );
        }

        .sky-star {
          position: absolute;
          display: block;
          border-radius: 50%;
          background: #e1eaff;
          box-shadow: 0 0 5px rgba(190, 215, 255, 0.35);
          animation: star-breathe 5s ease-in-out infinite alternate;
        }

        .star-0 {
          opacity: 0.38;
        }

        .star-1 {
          opacity: 0.55;
          animation-duration: 7s;
        }

        .star-2 {
          opacity: 0.24;
          animation-duration: 6s;
        }

        .star-3 {
          opacity: 0.42;
          animation-duration: 8s;
        }

        @keyframes star-breathe {
          from {
            opacity: 0.18;
          }
          to {
            opacity: 0.65;
          }
        }

        .shooting-star {
          position: absolute;
          width: 105px;
          height: 1px;
          opacity: 0;
          border-radius: 50%;
          background: linear-gradient(
            270deg,
            transparent,
            rgba(190, 215, 255, 0.15) 22%,
            rgba(220, 235, 255, 0.85)
          );
          transform: rotate(-32deg);
          transform-origin: right center;
          animation: shooting-star-flight 14s linear infinite;
        }

        .shooting-one {
          top: 24%;
          left: 75%;
          animation-delay: 2s;
          animation-duration: 15s;
        }

        .shooting-two {
          top: 43%;
          left: 90%;
          animation-delay: 9s;
          animation-duration: 18s;
        }

        .shooting-three {
          top: 62%;
          left: 65%;
          animation-delay: 16s;
          animation-duration: 17s;
        }

        .shooting-four {
          top: 82%;
          left: 83%;
          animation-delay: 25s;
          animation-duration: 19s;
        }

        @keyframes shooting-star-flight {
          0% {
            opacity: 0;
            translate: 0 0;
          }
          3% {
            opacity: 0.75;
          }
          7% {
            opacity: 0;
            translate: -180px 110px;
          }
          100% {
            opacity: 0;
            translate: -180px 110px;
          }
        }

        .sky-cloud {
          position: absolute;
          width: 220px;
          height: 64px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse,
            rgba(105, 148, 190, 0.075),
            rgba(125, 165, 200, 0.025) 65%,
            transparent 75%
          );
          filter: blur(9px);
          animation: cloud-drift 85s linear infinite alternate;
        }

        .sky-cloud span {
          position: absolute;
          width: 70%;
          height: 70%;
          top: -15%;
          left: 15%;
          border-radius: 50%;
          background: rgba(145, 180, 210, 0.035);
        }

        .cloud-one {
          top: 18%;
          left: 5%;
          animation-duration: 95s;
        }

        .cloud-two {
          top: 48%;
          left: 52%;
          transform: scale(1.3);
          animation-duration: 115s;
          animation-delay: -30s;
        }

        .cloud-three {
          top: 78%;
          left: 20%;
          transform: scale(0.85);
          animation-duration: 105s;
          animation-delay: -45s;
        }

        @keyframes cloud-drift {
          from {
            translate: -25px 0;
          }
          to {
            translate: 100px 8px;
          }
        }

        .bird-flock {
          position: absolute;
          left: -150px;
          color: rgba(65, 87, 107, 0.45);
          animation-name: birds-cross-sky;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .bird-flock svg {
          display: block;
          overflow: visible;
        }

        .flock-2 {
          color: rgba(65, 87, 107, 0.32);
        }

        .flock-3 {
          color: rgba(65, 87, 107, 0.38);
        }

        @keyframes birds-cross-sky {
          from {
            left: -150px;
          }
          to {
            left: calc(100% + 150px);
          }
        }

        @media (max-width: 700px) {
          .sky-glow {
            width: 95vw;
            height: 70vw;
          }

          .shooting-star {
            width: 70px;
          }

          .sky-cloud {
            transform: scale(0.75);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sky-star,
          .shooting-star,
          .sky-cloud,
          .bird-flock {
            animation: none !important;
          }

          .shooting-star,
          .bird-flock {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}