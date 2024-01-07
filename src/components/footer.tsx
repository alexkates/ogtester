import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="text-balance pb-4 pt-8 text-center text-sm text-muted-foreground">
      Built by&nbsp;
      <Link href="https://alexkates.dev" target="_blank" rel="noreferrer" className="underline">
        Alex Kates
      </Link>
      . The source code is available on&nbsp;
      <Link href="https://github.com/alexkates/ogtester" target="_blank" rel="noreferrer" className="underline">
        GitHub
      </Link>
      .
    </footer>
  );
}

export default Footer;
