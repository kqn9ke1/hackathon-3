import React from "react";
import { BrowserRouter } from "react-router-dom";
import UsersContext from "./Components/contexts/UsersContext/UsersContext";
import AppRoutes from "./Routers";
import AuthContext from "./Components/contexts/AuthContext/AuthContext";
import FavoritesContext from "./Components/contexts/FavoritesContext/FavoritesContext";
import ElectContext from "./Components/contexts/ElectContext/ElectContext";
function App() {
  return (
    <BrowserRouter>
      <UsersContext>
        <AuthContext>
          <FavoritesContext>
            <ElectContext>
              <AppRoutes />
            </ElectContext>
          </FavoritesContext>
        </AuthContext>
      </UsersContext>
    </BrowserRouter>
  );
}

export default App;
