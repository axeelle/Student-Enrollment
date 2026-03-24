import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase"; // adjust path if needed

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // habang chine-check pa login state
  if (user === undefined) return <p>Loading...</p>;

  // kung hindi logged in → balik login
  if (!user) return <Navigate to="/" />;

  return children;
}

export default ProtectedRoute;