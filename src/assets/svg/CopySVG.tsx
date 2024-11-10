import { SVGProps } from 'react'
export const CopySVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={8}
      height={8}
      x={2}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#805B5B"
        fillOpacity={0.99}
        stroke="#E4E4E4"
        strokeWidth={0.5}
        d="M9.75 7.443H2.558V.25H9.75z"
      />
    </mask>
    <g mask="url(#a)">
      <path stroke="#fff" strokeWidth={0.5} d="M8.212 8.98H1.02V1.79h7.192z" />
    </g>
    <path stroke="#fff" strokeWidth={0.5} d="M.25 2.558h7.192V9.75H.25z" />
  </svg>
)
