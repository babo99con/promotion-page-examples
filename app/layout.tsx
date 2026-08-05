import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "프로모션 페이지 기능 예제",
  description: "슬라이드, 쿠폰팩, 타이머, 출석체크를 직접 실행해 보는 예제 모음",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
