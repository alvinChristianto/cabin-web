
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonial",
};

export default function TestimonialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
