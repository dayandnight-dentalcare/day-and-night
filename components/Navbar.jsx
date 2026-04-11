import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md">
      <div className="text-xl font-bold">Day & Night</div>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/team">Team</Link>
        <Link href="/specialities">Specialities</Link>
        <Link href="/appointment">Appointment</Link>
      </div>
    </nav>
  );
}