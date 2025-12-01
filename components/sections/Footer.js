export default function Footer() {
  return (
    <footer className="mt-24 py-10 bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-sm text-slate-400 tracking-wider uppercase">
          SahajMobile
        </h3>
        <p className="text-slate-500 text-xs mt-2">
          © {new Date().getFullYear()} SahajMobile. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
