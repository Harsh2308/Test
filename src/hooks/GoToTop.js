import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function GoToTop() {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'instant',
    });
  }
  useEffect(() => {
    onTop()
  }, [routePath]);

  return null;
}