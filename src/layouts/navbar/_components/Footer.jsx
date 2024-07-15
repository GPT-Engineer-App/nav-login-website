import { Facebook, Twitter, Linkedin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t bg-background">
    <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Acme Inc
          </a>
          . The source code is available on{" "}
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
      <div className="flex gap-4">
        <a href="#" target="_blank" rel="noreferrer">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <Twitter className="h-5 w-5" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
);