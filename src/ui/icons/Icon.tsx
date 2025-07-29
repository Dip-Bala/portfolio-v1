
import StackIcon from "tech-stack-icons";

interface IconProps {
  name : string,
  label : string,
  size : number
}
export default function Icon({ name, label, size }: IconProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-sm text-offwhite">
      <StackIcon name={name} className={`w-${size} h-${size}` }variant="dark" />
      <span className="text-sm tracking-wide">{label}</span>
    </div>
  );
}
