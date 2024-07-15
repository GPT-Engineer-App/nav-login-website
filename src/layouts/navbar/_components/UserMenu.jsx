import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { NavLink } from "react-router-dom";

export const UserMenu = ({ logout }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="secondary" size="icon" className="rounded-full">
        <CircleUser className="h-5 w-5" />
        <span className="sr-only">Toggle user menu</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild>
        <NavLink to="/profile">Profile</NavLink>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <NavLink to="/settings">Settings</NavLink>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <NavLink to="/support">Support</NavLink>
      </DropdownMenuItem>
      <DropdownMenuSeparator />
      <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);