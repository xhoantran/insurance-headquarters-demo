import React from "react";
import Link from "../Link";

const ForwardedLink = React.memo(({ to, children, className }) => (
  <Link to={to ? to : "/"} className={`${className ? className : ""}`}>
    {children}
  </Link>
));

ForwardedLink.displayName = "ForwardedLink";

export default ForwardedLink;
