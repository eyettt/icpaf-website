export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`bg-white rounded-2xl flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_15px_rgba(255,255,255,0.1)] ${className}`}>
      <img src="/logo.png" alt="ICPAF Logo" className="w-[85%] h-[85%] object-contain mix-blend-multiply" />
    </div>
  );
}
