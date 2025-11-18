import React from 'react'

const bubbles = [
  { size: 6, left: '15%', delay: '0s', duration: '18s', opacity: 0.25 },
  { size: 8, left: '32%', delay: '3s', duration: '22s', opacity: 0.2 },
  { size: 10, left: '55%', delay: '6s', duration: '26s', opacity: 0.18 },
  { size: 5, left: '72%', delay: '1s', duration: '16s', opacity: 0.22 },
  { size: 7, left: '85%', delay: '5s', duration: '20s', opacity: 0.2 },
]

function AquaBackground({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Deep aqua backdrop with smooth depth transition */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_20%_10%,rgba(34,211,238,0.18),transparent_40%),radial-gradient(1000px_circle_at_80%_20%,rgba(56,189,248,0.16),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900 via-sky-900 to-cyan-950"></div>

      {/* Soft underwater light shafts (very subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-screen">
        <div className="absolute -left-20 top-0 w-[60%] h-[140%] rotate-6 bg-[radial-gradient(800px_200px_at_30%_0%,rgba(255,255,255,0.18),transparent_70%)]"></div>
      </div>

      {/* Floating bubbles - minimal, photorealistic touch */}
      <div className="pointer-events-none absolute inset-0">
        {bubbles.map((b, i) => (
          <span
            key={i}
            style={{
              left: b.left,
              width: b.size,
              height: b.size,
              animationDelay: b.delay,
              animationDuration: b.duration,
              opacity: b.opacity,
            }}
            className="absolute bottom-[-10%] rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.35)] animate-[rise_linear_infinite]"
          >
            {/* inner specular highlight */}
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(6px_6px_at_30%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0)_70%)]"></span>
          </span>
        ))}
      </div>

      {/* Very subtle grain to avoid banding while keeping it clean */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(transparent,transparent),radial-gradient(2px_2px_at_10%_20%,rgba(255,255,255,0.2),transparent_60%)]"></div>

      <div className="relative z-10">{children}</div>

      <style>
        {`
        @keyframes rise {
          0% { transform: translateY(0) translateZ(0); }
          100% { transform: translateY(-120vh) translateZ(0); }
        }
        `}
      </style>
    </div>
  )
}

export default AquaBackground
