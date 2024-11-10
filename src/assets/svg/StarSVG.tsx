import { SVGProps } from 'react'
export const StarSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={35}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#F7FF00"
        d="M6.523 33.782c-.693.433-1.479-.326-1.339-1.295l1.49-10.347L.35 14.799c-.59-.687-.284-1.943.508-2.079l8.79-1.522 3.92-9.465c.354-.854 1.311-.854 1.665 0l3.92 9.465 8.791 1.522c.792.136 1.099 1.392.506 2.079l-6.321 7.34 1.49 10.348c.14.969-.647 1.728-1.34 1.295l-7.88-4.935-7.877 4.935Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.04 0h28.718v35H.04z" />
      </clipPath>
    </defs>
  </svg>
)
