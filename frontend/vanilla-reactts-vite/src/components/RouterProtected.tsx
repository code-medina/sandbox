import { Navigate} from "react-router";
import { useAuth } from "../hooks/useAuth";

type Props = {
  children: React.ReactNode;
};
export const RouterProtected = ({ children }: Props) => {
 
  const { userCurrent } = useAuth();
  if (!userCurrent || userCurrent.rol !== "admin") {
    return <Navigate to="/" replace />;
  }
  return children;
};
