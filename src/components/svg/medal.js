import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Medal(props) {
  return (
    <Svg
      width={12}
      height={18}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.473 10.26l-.806 6.073 3.333-2 3.333 2-.806-6.08m2.14-3.92a4.667 4.667 0 11-9.334 0 4.667 4.667 0 019.334 0z"
        stroke="#EA5515"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Medal
