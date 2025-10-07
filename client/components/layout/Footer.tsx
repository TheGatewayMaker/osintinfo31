export function Footer() {
  return (
    <footer className="border-t border-border mt-12">
      <div className="container mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/70 text-center">
        <div className="flex items-center gap-2 font-semibold">
          <img
            src="https://i.ibb.co/27yVz2jK/osintleak-osintleak-osintleak-osintleak-osintleak-osintleak-osintleak-osintleak-osintleak-osintleak.png"
            alt="Osint Leak logo"
            className="h-5 w-5 rounded-lg"
          />
          <span>Osint Info</span>
        </div>
        <p className="text-center">
          © {new Date().getFullYear()} Osint Info. All rights reserved.
        </p>
        <div className="flex gap-4 items-center">
          <a className="hover:text-foreground" href="/privacy">
            Privacy
          </a>
          <a className="hover:text-foreground" href="/terms">
            Terms
          </a>
          <a
            className="hover:text-foreground"
            href="https://t.me/yourchannel"
            aria-label="Telegram"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 240 240"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M120 0C53.7 0 0 53.7 0 120s53.7 120 120 120 120-53.7 120-120S186.3 0 120 0zm58.7 83.4l-20.6 96.9c-1.6 6.8-5.8 8.6-11.7 5.3l-32.3-23.8-15.6 15c-1.7 1.7-3.1 3.1-6.3 3.1l2.3-32.9 59.8-54.1c2.6-2.3-.6-3.6-4-1.3L69.4 123.5 22.6 108.7c-7.7-2.9-7.8-7.7 1.6-11.4l154.9-59.7c7.2-2.7 13.5 1.7 11.6 11.8z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
