import React from "react";
import { useLocation } from "react-router";
import LoginDesktopHeader from "./DesktopHeader";

const TITLE = "TakeAwayTray";

const REGISTRATION_PATH = [
  "/login",
  "/new-login",
  "/registration",
  "/login-email",
  "/forgot-password",
  "/email-sent",
  "/phone-number",
  "/verify-email"
];

function Header({ showIcon = false }) {
  const location = useLocation();
  const showCart = !REGISTRATION_PATH.includes(location.pathname);

  return (
    <LoginDesktopHeader showIcon={false} title={TITLE} showCart={showCart} />
  );
}

export default React.memo(Header);
