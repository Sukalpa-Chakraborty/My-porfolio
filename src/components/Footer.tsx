const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} <span className="text-primary font-semibold">Sukalpa Chakraborty</span>. 
          <span className="block sm:inline sm:ml-1">All rights reserved.</span>
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Built with passion and modern web technologies
        </p>
      </div>
    </footer>
  );
};

export default Footer;