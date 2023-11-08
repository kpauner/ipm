import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-300 flex justify-between">
      Logo here
      <ul className="flex justify-between gap-3">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>infienf</li>
        <li>infienf</li>
      </ul>
    </header>
  );
}
