import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jarafu Ijudigal | Cybersecurity Analyst",
  description:
    "Cybersecurity Analyst specializing in SIEM deployment, endpoint monitoring, vulnerability assessment, and threat detection engineering.",
  keywords: [
    "Cybersecurity",
    "SIEM",
    "Wazuh",
    "ELK Stack",
    "Azure Security",
    "Blue Team",
    "Threat Detection",
    "Vulnerability Assessment",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
