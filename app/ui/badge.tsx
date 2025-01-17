type BadgeProps = {
  label: string;
  type?: 'red' | 'yellow' | 'green' | 'blue' | 'violet'; 
  className?: string;
}

export default function Badge({ label, type = 'red', className }: BadgeProps) {
  const baseStyle = "inline-flex rounded-md px-2 py-1 text-white font-medium ring-1 ring-inset";
  const colorStyles = {
    red: 'bg-terracotta',
    yellow: 'bg-goldenYellow',
    green: 'bg-lightGreen',
    blue: 'bg-skyBlue',
    violet: 'bg-bismol700',
  };

  const typeStyles = {
    red: 'badge-red',
    yellow: 'badge-yellow',
    green: 'badge-green',
    blue: 'badge-blue',
    violet: 'badge-violet',
  };

  return (
    <span className={`${baseStyle} ${colorStyles[type]} ${typeStyles[type]} ${className || ''}`}>
      {label}
    </span>
  );
}
