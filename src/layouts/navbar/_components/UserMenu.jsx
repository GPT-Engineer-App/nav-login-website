import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";
import { NavLink } from "react-router-dom";

export const UserMenu = ({ logout }) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" size="icon" className="rounded-full">
        <User className="h-5 w-5" />
        <span className="sr-only">Open user menu</span>
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