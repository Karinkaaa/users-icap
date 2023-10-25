import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage, UsersPage } from "../../pages";
import { useAppSelector } from "../../store/hooks";

export const App = () => {
  const isLoggedIn = useAppSelector((state) => state.login.isLoggedIn);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {isLoggedIn ? (
        <Route path="/table" element={<UsersPage />} />
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
};
