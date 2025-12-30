const PortfolioSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-muted/30 to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-display font-bold text-foreground mb-6">
                Build Your Portfolio with Real-<br />
                World Internships and Hands-<br />
                On Projects
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-medium">
                Practice the skills you'll use in the real world
              </p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Different from typical online programs, here you'll develop a professional portfolio 
                  that will set you apart from other candidates.
                </p>
                <p>
                  Every student completing our curriculum receives placement in an internship program 
                  with one of our industry partners to enhance their expertise before entering the 
                  competitive job marketplace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
