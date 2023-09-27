import { FC, PropsWithChildren } from "react";
import { useStore } from "../../hooks/useGlobalStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute: FC<PropsWithChildren> = ({ children }) => {
  const user = useStore((store) => store.user);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
