import { SVGProps } from 'react'

export const SliderButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={30}
    fill="none"
    {...props}
  >
    <path
      fill="#00483A"
      d="M3.205 9.604c-3.816 2.796-3.816 8.495 0 11.292l10.407 7.627c4.624 3.388 11.138.086 11.138-5.647V7.624c0-5.733-6.514-9.035-11.138-5.647L3.205 9.604Z"
    />
  </svg>
)
