import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Package2 } from "lucide-react";
import { NavItem } from "./NavItem";
import { useSupabaseAuth } from "@/integrations/supabase/auth";

export const MobileSheet = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <nav className="grid gap-6 text-lg font-medium">
          <NavItem
            to="/"
            className="flex items-center gap-2 text-lg font-semibold"
          >
            <Package2 className="h-6 w-6" />
            <span>Acme Inc</span>
          </NavItem>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          {session ? (
            <>
              <NavItem to="/profile">Profile</NavItem>
              <NavItem to="/settings">Settings</NavItem>
              <NavItem to="/support">Support</NavItem>
              <Button onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <NavItem to="/login">Login</NavItem>
              <NavItem to="/register">Register</NavItem>
            </>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};