import { SVGProps } from 'react'
export const PhoneSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.25}
      d="M6.3 13.494c7.267 7.235 9.396 5.504 10.347 4.827.154-.087 3.674-2.345 1.485-4.524-5.078-5.056-4.047 1.516-8.854-3.27-4.807-4.786 1.794-3.76-3.283-8.815C3.805-.468 1.537 3.037 1.45 3.19c-.68.946-2.42 3.068 4.848 10.304Z"
    />
  </svg>
)
