import { BrowserRouter,Routes, Route } from "react-router-dom";
import { DashboardPage, DeclararImposto, DeclararRendimentos, Historico, Login } from "src/pages";
import { loginContext } from "src/context";

export function AppRoutes() {
  return (

   <loginContext.Provider value={''}>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/declarar" element={<DeclararImposto />} />
        <Route path="/rendimentos" element={<DeclararRendimentos />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </BrowserRouter>
  </loginContext.Provider>
  );
}
