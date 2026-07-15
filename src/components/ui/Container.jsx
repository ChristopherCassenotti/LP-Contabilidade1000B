export default function Container({
  as: Tag = "div",
  className = "",
  children,
  ...props
}) {
  return (
    <Tag
      className={`w-full max-w-none px-[20px] lg:px-[80px] ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
