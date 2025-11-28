import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-black/10 py-10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* Brand */}
        <p className="text-sm opacity-70">© 2025 nG</p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <SocialIcon href="https://instagram.com">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm4.8-3.75c-.5 0-.9.4-.9.9 0 .49.4.9.9.9.49 0 .9-.41.9-.9 0-.5-.41-.9-.9-.9z"/>
            </svg>
          </SocialIcon>

          {/* TikTok */}
          <SocialIcon href="https://tiktok.com">
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.5 2c0 .84.32 1.64.9 2.23.59.6 1.39.94 2.24.94v2.35c-1.13 0-2.23-.34-3.14-.97v6.91c0 2.49-2.03 4.54-4.5 4.54S3.5 15.95 3.5 13.46 5.53 8.92 8 8.92c.38 0 .75.04 1.1.13v2.36a2.18 2.18 0 0 0-1.1-.3c-1.2 0-2.17 1-2.17 2.25 0 1.24.97 2.25 2.17 2.25s2.17-1 2.17-2.25V2h2.33z"/>
            </svg>
          </SocialIcon>

          {/* YouTube */}
          <SocialIcon href="https://youtube.com">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 15.5l6-3.5-6-3.5v7z"/><path d="M21.5 7.5s-.2-1.4-.8-2c-.8-.9-1.7-.9-2.1-.9C15.3 4.4 12 4.4 12 4.4h-.1s-3.3 0-6.6.2c-.5 0-1.4 0-2.1.9-.6.7-.8 2-.8 2S2 9.1 2 10.6v1.8c0 1.5.2 3.1.2 3.1s.2 1.4.8 2c.8.9 1.9.9 2.4.9 1.8.17 6.4.22 6.4.22s3.3 0 6.6-.2c.5 0 1.4 0 2.1-.9.6-.7.8-2 .8-2s.2-1.5.2-3.1v-1.8c0-1.5-.2-3.1-.2-3.1z"/>
            </svg>
          </SocialIcon>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, children }: any) {
  return (
    <Link
      href={href}
      target="_blank"
      className="text-black opacity-80 hover:opacity-100 hover:scale-110 transition-transform"
    >
      {children}
    </Link>
  );
}
