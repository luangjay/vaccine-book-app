import localFont from "next/font/local";

export const fontSans = localFont({
  src: "../../public/fonts/Inter.var.woff2",
  variable: "--font-sans",
});

export const fontMono = localFont({
  src: "../../public/fonts/SpaceMono-Regular.woff2",
  variable: "--font-mono",
});

export const fontTitle = localFont({
  src: "../../public/fonts/Doctor.woff2",
  variable: "--font-title",
});
