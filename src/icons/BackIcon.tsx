type Props = {
  className?: string;
  style?: any;
  size?: number;
};
function BackIcon({ className, style, size = 24 }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className || ""}
      style={style || {}}
    >
      <path
        fill="currentColor"
        d="M9.125 21.1L.7 12.7q-.15-.15-.212-.325Q.425 12.2.425 12t.063-.375Q.55 11.45.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L3.55 12l7.35 7.35q.35.35.35.862q0 .513-.375.888t-.875.375q-.5 0-.875-.375Z"
      />
    </svg>
  );
}

export default BackIcon;
