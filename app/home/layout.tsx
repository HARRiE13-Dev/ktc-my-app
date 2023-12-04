"use client";
import Navbar from "../components/Navbar";
import Subnavbar from "../components/Subnavbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className='bg-white relative'>
      <Navbar />
      <Subnavbar />

      {children}
    </section>
  )
}