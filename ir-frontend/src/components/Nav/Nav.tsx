import {Link} from "react-router-dom";
import {NavLogo} from "./NavLogo";
import { Button } from "@components/Button";

export function Nav() {
  return (
    <nav className="w-full h-20 bg-gray-50 border-b border-gray-300">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between">
        <NavLogo />
        <div className="flex items-center gap-4">
          <Link to="/dashboard">
            <Button variant="primary">Dashboard</Button>
          </Link>
          <Link to="/declarar">
            <Button variant="primary">Declarar Agora</Button>
          </Link>
          <Link to="/rendimentos">
            <Button variant="primary">Rendimentos</Button>
          </Link>
          <Link to="/historico">
            <Button variant="primary">Histórico</Button>
          </Link>
          <Link to="/logout">
            <Button variant="primary">Deslogar</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
