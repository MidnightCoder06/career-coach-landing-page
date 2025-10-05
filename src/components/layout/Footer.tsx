import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center text-muted-foreground text-sm">
          <div className="mb-4 sm:mb-0">
            © 2025 More Than A Dev. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-foreground transition-colors cursor-pointer">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
