import "./globals.css"
import { Nunito } from "next/font/google"
import type React from "react"

const nunito = Nunito({ subsets: ["latin"] })

export const metadata = {
  title: "Abhinav Govindaraju Personal Website",
  description: "Personal website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}

