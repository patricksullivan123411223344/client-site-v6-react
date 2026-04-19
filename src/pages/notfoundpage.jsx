/*
Name: Patrick Sullivan
Date: 4/19/2026
File: NotFoundPage.jsx
Description: 404 page for unknown routes.
*/
import { useLocation } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <ErrorPage
      code="404"
      title="Oops! Page Not Found"
      message="The page you're looking for doesn't exist or has moved."
      detail={location.pathname}
    />
  );
}