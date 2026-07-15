import { twMerge } from "tailwind-merge";
import { getWhatsAppUrl } from "../../utils/whatsapp";
import { WhatsAppIcon } from "./Icons";

const variants = {
  primary:
    "border-cyan-500 bg-cyan-500 text-navy-950 shadow-[0_12px_26px_rgba(24,196,244,0.22)] hover:bg-cyan-400 hover:shadow-[0_16px_32px_rgba(24,196,244,0.28)]",
  light:
    "border-white/70 bg-transparent text-white hover:border-cyan-400 hover:text-cyan-400",
  green:
    "border-green-500 bg-green-500 text-white shadow-[0_12px_26px_rgba(252,252,252,0.22)] hover:bg-[#123264] hover:border-white hover:shadow-[0_16px_32px_rgba(24,196,244,0.28)]",
};

export default function WhatsAppButton({
  message,
  children,
  className = "",
  variant = "primary",
  showIcon = true,
}) {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border px-5 font-semibold leading-tight transition hover:-translate-y-0.5",
        variants[variant],
        className,
      )}
    >
      {showIcon && <WhatsAppIcon className="h-5 w-5 shrink-0" />}

      <span>{children}</span>
    </a>
  );
}
