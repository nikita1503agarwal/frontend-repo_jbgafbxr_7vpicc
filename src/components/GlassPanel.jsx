import React from 'react'

function GlassPanel({ children, className = '' }) {
  return (
    <div
      className={
        `relative rounded-3xl p-4 sm:p-6 ${className}`
      }
      style={{
        background:
          'linear-gradient(180deg, rgba(163, 230, 255, 0.10), rgba(14, 165, 233, 0.10))',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -6px 20px rgba(14,165,233,0.25), 0 20px 60px rgba(14, 165, 233, 0.20)',
        border: '1.2px solid rgba(255,255,255,0.45)',
        backdropFilter: 'blur(16px) saturate(140%)',
        WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      }}
    >
      {/* thick convex highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            'linear-gradient( to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.25) 12%, rgba(255,255,255,0) 40% )',
          maskImage:
            'radial-gradient(180%_40% at 50% -10%, black 30%, transparent 70%)',
        }}
      />
      {children}
    </div>
  )
}

export default GlassPanel
