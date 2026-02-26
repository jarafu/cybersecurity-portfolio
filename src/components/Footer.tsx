export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Jarafu Ijudigal. All rights reserved.
      </div>
    </footer>
  );
}
