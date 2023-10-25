import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../../pages/LoginPage";
import { TablePage } from "../../pages/TablePage";
import { useAppSelector } from "../../store/hooks";

export const App = () => {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {isLoggedIn ? (
        <Route path="/table" element={<TablePage />} />
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};
