import { CheckCircle, Calendar, Play } from "lucide-react";

export default function Scheduled() {
  const mockVideos = [
    {
      title: "Why Hybrid Roles Are the Future",
      duration: "3:24"
    },
    {
      title: "How I Landed My First $150K Offer",
      duration: "5:12"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-6 pb-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 max-w-lg mx-auto">
        {/* Logo/Brand */}
        <div className="text-center mb-8 pt-6">
          <span className="text-3xl font-bold text-white italic">Not Just A Dev</span>
        </div>

        {/* Success icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Main headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight text-center">
          You&apos;re All Set! 🎉
        </h1>

        {/* Confirmation message */}
        <p className="text-lg text-white/80 mb-8 leading-relaxed text-center">
          Your strategy call has been scheduled. Check your email for the calendar invite and meeting details.
        </p>

        {/* What to expect */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 text-left">
          <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            What to expect on our call:
          </h2>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Review your current situation and career goals</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Identify the best hybrid roles for your background</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Get an overview of the 9-week curriculum</span>
            </li>
          </ul>
        </div>

        {/* Videos Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-white mb-2 text-center">
            While You Wait...
          </h2>
          <p className="text-white/70 text-center mb-6">
            Check out some videos I made talking more about the opportunity ahead of us:
          </p>

          {/* Mock Video Frames */}
          <div className="space-y-4">
            {mockVideos.map((video, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white/15 transition-colors cursor-pointer group"
              >
                {/* Video Thumbnail Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative flex items-center justify-center">
                  {/* Play Button */}
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                {/* Video Title */}
                <div className="p-4">
                  <h3 className="text-white font-medium">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <p className="text-white/60 text-sm mb-4">
            Follow me for more tips:
          </p>
          <div className="flex justify-center gap-6">
            {/* Instagram */}
            <a href="https://www.instagram.com/techwithjean/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            {/* X (Twitter) */}
            <a href="https://x.com/IiLeconte" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/jean-leconte-ii/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            {/* TikTok */}
            <a href="https://www.tiktok.com/@emperor_leconte" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

