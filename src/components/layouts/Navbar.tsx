import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-background border-b py-4">
      <div className="container flex justify-between items-center">
        <p className="text-lg font-medium text-primary">FlavorFindr</p>
        <nav className="flex gap-5">
          <NavLink to="/" className="text-slate-600 hover:text-primary">
            Home
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
