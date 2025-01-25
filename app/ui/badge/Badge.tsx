type BadgeProps = {
  label: string;
  type?: 'red' | 'yellow' | 'green' | 'blue' | 'violet'; 
  className?: string;
}

export default function Badge({ label, type = 'red', className }: BadgeProps) {
  const baseStyle = "inline-flex rounded-md p-1 text-offwhite ring-1 ring-inset";
  const colorStyles = {
    red: 'bg-terracotta',
    yellow: 'bg-yellow',
    green: 'bg-lightgreen',
    blue: 'bg-tropicsblue',
    violet: 'bg-misspiggy',
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
