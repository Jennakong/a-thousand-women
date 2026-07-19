import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
};

export default function Button({
  children,
  variant = "primary",
  href = "#",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`atw-button ${
        variant === "primary"
          ? "atw-button-primary"
          : "atw-button-secondary"
      }`}
    >
      {children}
    </Link>
  );
}