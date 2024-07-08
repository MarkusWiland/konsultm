import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import Link from "next/link";

const buttonClasses = cva("", {
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
    size: {
      small: "text-xs px-3 h-7",
      medium: "text-sm px-4 h-8",
      large: "text-md px-6 h-12",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});
export const ButtonComponent = ({
  children,
  variant,
  size,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  variant: "primary" | "secondary" | "tertiary";
  size: "small" | "medium" | "large";
  className?: string;
}) => {
  const classes = buttonClasses({ variant, size, className: props.className });
  return (
    <Link href={props.href}>
      <Button {...props} className={classes}>
        {children}
      </Button>
    </Link>
  );
};
