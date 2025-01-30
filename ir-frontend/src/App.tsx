import { AppRoutes } from "src/routes";
import { loginContext } from "./context";

export default function App() {
  
  return (
    <loginContext.Provider value={token}>
      <AppRoutes />
    </loginContext.Provider>
  )
}
