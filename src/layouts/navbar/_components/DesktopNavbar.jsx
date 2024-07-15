import { Package2 } from "lucide-react";
import { NavItem } from "./NavItem";
import { Button } from "@/components/ui/button";
import { UserMenu } from "./UserMenu";
import { useSupabaseAuth } from "@/integrations/supabase/auth";

export const DesktopNavbar = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <nav className="hidden md:flex md:items-center md:gap-5 lg:gap-6 text-lg font-medium md:text-sm w-full">
      <NavItem
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span>Acme Inc</span>
      </NavItem>
      <div className="flex-grow flex justify-center space-x-4">
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </div>
      <div className="flex items-center space-x-2">
        {session ? (
          <UserMenu logout={logout} />
        ) : (
          <>
            <NavItem to="/login">
              <Button variant="ghost">Login</Button>
            </NavItem>
            <NavItem to="/register">
              <Button>Register</Button>
            </NavItem>
          </>
        )}
      </div>
    </nav>
  );
};