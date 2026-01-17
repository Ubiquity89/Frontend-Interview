export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-20 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          
          {/* Brand - Hidden on Mobile */}
          <div className="hidden md:block">
            <h2 className="font-semibold text-lg">CA Monk</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Your trusted platform for CA exam preparation and career growth
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-medium mb-2">Resources</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Study Materials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mock Tests</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-medium mb-2">Legal</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2026 CA Monk. All rights reserved.
            </p>
             <p className="text-muted-foreground text-sm">
              Terms and Conditions
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};
