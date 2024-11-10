import { SVGProps } from "react"
export const BriefcaseSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M8.125 1.25A1.875 1.875 0 0 0 6.25 3.125v.625H1.875A1.875 1.875 0 0 0 0 5.625v10A1.875 1.875 0 0 0 1.875 17.5h16.25A1.875 1.875 0 0 0 20 15.625v-10a1.875 1.875 0 0 0-1.875-1.875H13.75v-.625a1.875 1.875 0 0 0-1.875-1.875h-3.75Zm0 1.25h3.75a.625.625 0 0 1 .625.625v.625h-5v-.625a.625.625 0 0 1 .625-.625Zm2.357 8.643 8.268-2.204v6.686a.624.624 0 0 1-.625.625H1.875a.625.625 0 0 1-.625-.625V8.937l8.268 2.206c.316.084.648.084.964 0ZM1.876 5h16.25a.625.625 0 0 1 .625.625v2.02l-8.589 2.29a.625.625 0 0 1-.322 0L1.25 7.645v-2.02A.625.625 0 0 1 1.875 5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)