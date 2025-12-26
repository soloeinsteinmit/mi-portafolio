import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div id="root" className={spaceGrotesk.className}>
      <Component {...pageProps} />
      <SpeedInsights route={router.pathname} />
    </div>
  );
}
