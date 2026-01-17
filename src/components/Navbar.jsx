export const Navbar = () => {
  return (
    <nav className="border-b bg-background transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-sm">CA</span>
            </div>
            <span className="font-bold text-lg transition-colors duration-200 group-hover:text-primary">CA MONK</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Tools', 'Practice', 'Events', 'Job Board', 'Points'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Profile Button */}
          <div className="flex items-center">
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-all duration-200 hover:scale-105 hover:shadow-md">
              Profile
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
