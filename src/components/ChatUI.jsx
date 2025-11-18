import React, { useState } from 'react'
import { Send } from 'lucide-react'
import GlassPanel from './GlassPanel'

function PillButton({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-white/95 text-sm font-semibold transition-all active:scale-[0.98] ${className}`}
      style={{
        background:
          'linear-gradient(180deg, rgba(59, 216, 255, 0.9), rgba(12, 178, 226, 0.95))',
        boxShadow:
          'inset 0 1px 0 rgba(255,255,255,0.7), 0 10px 30px rgba(34,211,238,0.4)',
        border: '1px solid rgba(255,255,255,0.6)'
      }}
    >
      {/* specular */}
      <span className="pointer-events-none absolute inset-0 rounded-full opacity-90" style={{
        background: 'linear-gradient( to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.1) )',
        maskImage: 'radial-gradient(160%_100% at 50% -60%, black 45%, transparent 60%)'
      }} />
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  )
}

function ChatUI() {
  const [messages, setMessages] = useState([
    { id: 1, user: 'AquaBot', text: 'Welcome to the underwater lounge. Type a message to chill. ✨', me: false },
  ])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { id: Date.now(), user: 'You', text: input.trim(), me: true }])
    setInput('')
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10 sm:py-16">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-cyan-400/40 border border-white/60 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_24px_rgba(34,211,238,0.35)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(12px_10px_at_40%_35%,rgba(255,255,255,0.95),transparent_60%)]" />
          </div>
          <div>
            <h1 className="text-white font-semibold text-lg sm:text-xl tracking-tight">Frutiger Aero Chat</h1>
            <p className="text-white/70 text-xs">MSN-style, glassy and serene</p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <PillButton>Online</PillButton>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 sm:gap-6">
        {/* User list */}
        <GlassPanel className="col-span-12 sm:col-span-4 lg:col-span-3">
          <div className="flex items-center justify-between mb-3">
            <p className="text-white/90 font-semibold">Friends</p>
            <span className="text-white/60 text-xs">2 online</span>
          </div>
          <div className="space-y-2">
            {['AquaBot','CoralCat','BubbleBoy'].map((u, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl p-2 bg-white/5 hover:bg-white/10 transition">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                <div className="w-8 h-8 rounded-xl bg-cyan-300/30 border border-white/40 backdrop-blur">
                  <div className="w-full h-full rounded-xl bg-[radial-gradient(8px_6px_at_45%_35%,rgba(255,255,255,0.9),transparent_60%)]" />
                </div>
                <p className="text-white/90 text-sm">{u}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        {/* Chat panel */}
        <GlassPanel className="col-span-12 sm:col-span-8 lg:col-span-9">
          <div className="h-[48vh] sm:h-[56vh] overflow-y-auto pr-1 sm:pr-2 space-y-4">
            {messages.map(m => (
              <div key={m.id} className={`flex ${m.me ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm text-white ${m.me ? 'ml-auto' : ''}`}
                  style={{
                    background: m.me
                      ? 'linear-gradient(180deg, rgba(59,216,255,0.85), rgba(14,165,233,0.85))'
                      : 'linear-gradient(180deg, rgba(14,165,233,0.28), rgba(14,165,233,0.18))',
                    border: '1px solid rgba(255,255,255,0.5)',
                    boxShadow: m.me
                      ? 'inset 0 1px 0 rgba(255,255,255,0.8), 0 12px 30px rgba(34,211,238,0.35)'
                      : 'inset 0 1px 0 rgba(255,255,255,0.6)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {!m.me && <p className="text-white/80 font-semibold mb-0.5">{m.user}</p>}
                  <p className="leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* input bar */}
          <div className="mt-4 flex items-center gap-2">
            <div className="relative flex-1 rounded-full">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Type a message…"
                className="w-full rounded-full px-5 py-3 text-white placeholder-white/60 outline-none"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(163,230,255,0.18), rgba(14,165,233,0.16))',
                  border: '1px solid rgba(255,255,255,0.55)',
                  boxShadow:
                    'inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -8px 18px rgba(14,165,233,0.25)'
                }}
              />
              {/* glossy strip */}
              <div className="pointer-events-none absolute inset-0 rounded-full"
                   style={{
                     background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.1))',
                     maskImage: 'radial-gradient(140%_80% at 50% -60%, black 45%, transparent 60%)'
                   }}
              />
            </div>
            <PillButton onClick={send}>
              <Send size={16} />
              Send
            </PillButton>
          </div>
        </GlassPanel>
      </div>
    </div>
  )
}

export default ChatUI
