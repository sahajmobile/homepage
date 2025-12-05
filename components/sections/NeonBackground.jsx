export default function NeonBackground({ children }) {
  return (
    <div className="relative overflow-hidden">
      {/* Soft animated glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.25),transparent_70%)] animate-pulse-slow" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.25),transparent_70%)] animate-pulse-slower" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
        .animate-pulse-slower {
          animation: pulseSlower 9s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        @keyframes pulseSlower {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  );
}
