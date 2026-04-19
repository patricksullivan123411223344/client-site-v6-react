/*
Name: Patrick Sullivan
Date: 4/19/2026
File: ServerErrorPage.jsx
Description: 500 page route component.
*/
import ErrorPage from "../components/ErrorPage";

export default function ServerErrorPage() {
  return (
    <ErrorPage
      code="500"
      title="Something Went Wrong"
      message="Our server encountered an unexpected issue."
      detail="We're working to fix it. Try refreshing or come back later."
    />
  );
}