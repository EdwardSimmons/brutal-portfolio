import { Link, useMatch } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { HomeIcon } from "lucide-react";

export const HomeBtn = () => {
  const match = useMatch({ from: "/", shouldThrow: false });

  return (
    <Link to="/">
      <Button disabled={!!match}>
        <HomeIcon />
      </Button>
    </Link>
  );
};
