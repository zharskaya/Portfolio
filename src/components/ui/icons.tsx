interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number;
}

export function MenuIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M4 21H1V3H4"/>
      <path d="M20 3L23 3L23 21L20 21"/>
      <path d="M8 8L16 8"/>
      <path d="M8 12L16 12"/>
      <path d="M8 16L16 16"/>
    </svg>
  );
}

export function ArrowLeftIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M12 19L5 12L12 5"/>
      <path d="M19 12H5"/>
    </svg>
  );
}

export function ArrowUpRightIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M8 6H18V16"/>
      <path d="M6 18L17.5 6.5"/>
    </svg>

  );
}

export function TrendingUpIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M15 6H21V12"/>
      <path d="M21 6L12 15L9 12L3 18"/>
    </svg>

  );
}

export function TrendingDownIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M9 18L3 18L3 12"/>
      <path d="M3 18L12 9L15 12L21 6"/>
    </svg>

  );
}

export function StopwatchIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M10 2H14"/>
      <path d="M12 14L15 11"/>
      <path d="M12 22C16.4183 22 20 18.4183 20 14C20 9.58172 16.4183 6 12 6C7.58172 6 4 9.58172 4 14C4 18.4183 7.58172 22 12 22Z"/>
    </svg>

  );
}

export function AimIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z"/>
      <path d="M23 12L18 12"/>
      <path d="M6 12L1 12"/>
      <path d="M12 6V1"/>
      <path d="M12 23L12 18"/>
    </svg>

  );
}

export function ArrowUpIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M5 12L12 5L19 12"/>
      <path d="M12 19L12 5"/>
    </svg>

  );
}

export function SchieldCheckIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M20 13C20 18 16.16 20.5501 12 22.0001C7.83 20.5601 4 18 4 13L4 5.00008C6 5.00008 10.26 3.51951 12 1.99951C13.75 3.52951 18 5 20 5V13Z" strokeLinejoin="bevel"/>
      <path d="M9 12L11 14L15 10"/>
    </svg>
  );
}

export function ScriptIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M16 8H9"/>
      <path d="M19 17V5C19 4.46957 18.7893 3.96086 18.4142 3.58579C18.0391 3.21071 17.5304 3 17 3H4"/>
      <path d="M8 21H20C20.5304 21 21.0391 20.7893 21.4142 20.4142C21.7893 20.0391 22 19.5304 22 19V17H10L10 19C10 19.5304 9.78928 20.0391 9.41421 20.4142C9.03914 20.7893 8.53043 21 8 21ZM8 21C7.46957 21 6.96086 20.7893 6.58578 20.4142C6.21071 20.0391 6 19.5304 6 19V5C6 4.46957 5.78928 3.96086 5.41421 3.58579C5.03914 3.21071 4.53043 3 4 3C3.46957 3 2.96086 3.21071 2.58578 3.58579C2.21071 3.96086 2 4.46957 2 5L2 8H6"/>
    </svg>
  );
}

export function SettingsIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M14 19L3 19"/>
      <path d="M18 19H21"/>
      <path d="M18 6L21 6"/>
      <path d="M3 12H6"/>
      <path d="M21 12L10 12"/>
      <path d="M16 21C17.1046 21 18 20.1046 18 19C18 17.8954 17.1046 17 16 17C14.8954 17 14 17.8954 14 19C14 20.1046 14.8954 21 16 21Z"/>
      <path d="M14 6L3 6"/>
      <path d="M16 8C17.1046 8 18 7.10457 18 6C18 4.89543 17.1046 4 16 4C14.8954 4 14 4.89543 14 6C14 7.10457 14.8954 8 16 8Z"/>
      <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"/>
</svg>
  );
}

export function CursorIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M10.0909 21L3 3L21 10.0909L12.8182 12.8182L10.0909 21Z" strokeLinejoin="bevel"/>
    </svg>
  );
}

export function CircleCheckIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
      <path d="M9 12L11 14L15 10"/>
    </svg>
  );
}

export function TrophyIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M10 14.6602V16.2862C9.99622 16.6288 9.90448 16.9647 9.73358 17.2617C9.56268 17.5586 9.31834 17.8067 9.024 17.9822C8.39914 18.445 7.89084 19.0471 7.53948 19.7408C7.18813 20.4345 7.00341 21.2006 7 21.9782"/>
      <path d="M14 14.6602V16.2862C14.0038 16.6288 14.0955 16.9647 14.2664 17.2617C14.4373 17.5586 14.6817 17.8067 14.976 17.9822C15.6009 18.445 16.1092 19.0471 16.4605 19.7408C16.8119 20.4345 16.9966 21.2006 17 21.9782"/>
      <path d="M18 10H19.5C20.163 10 20.7989 9.73661 21.2678 9.26777C21.7366 8.79893 22 8.16304 22 7.5C22 6.83696 22 5.00012 22 5.00012L18 5"/>
      <path d="M4 22H20"/>
      <path d="M6 8.99989C6 10.5912 6.63214 12.1173 7.75736 13.2425C8.88258 14.3678 10.4087 14.9999 12 14.9999C13.5913 14.9999 15.1174 14.3678 16.2426 13.2425C17.3679 12.1173 18 10.5912 18 8.99989V2L6 2.00004L6 8.99989Z"/>
      <path d="M6 10H4.5C3.83696 10 3.20107 9.73662 2.73223 9.26778C2.26339 8.79894 2 8.16305 2 7.50001C2 6.83697 2 5.00022 2 5.00022L6 5"/>
    </svg>

  );
}

export function DiamanIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M10.5 3L8 9L12 20L16 9L13.5 3"/>
      <path d="M18 3L21.9998 8V10L12 22L2 10V8L6.10404 3.00017L18 3Z"/>
      <path d="M2 9H22"/>
    </svg>
  );
}

export function StarIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      <path d="M12 3L15.2328 8.55041L21.5106 9.90983L17.2308 14.6996L17.8779 21.0902L12 18.5L6.12215 21.0902L6.76919 14.6996L2.48944 9.90983L8.76718 8.55041L12 3Z"/>
    </svg>

  );
}

export function XIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >
      
      <path d="M20 4L4 20" />
      <path d="M4 4L20 20"/>
    </svg>
  );
}

export function SwatchBookIcon({ size = 24, className, ...props }: IconProps) {
  const strokeWidth = size >= 24 ? 1.5 : 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    >

    <path d="M11 18.0001L8 21H6L3.00001 18L3 3.0001L11 3L11 18.0001Z"/>
    <path d="M16.7 13.0002L21 13V21L7 21.0002"/>
    <path d="M10.8591 7.04062L13.8995 3.99992L19.5563 9.65677L9.65699 19.5564"/>
    <path d="M7 17H7.01"/>
  </svg>

  );
}
