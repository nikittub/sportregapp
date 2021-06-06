import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Arrow(props) {
  return (
    <Svg
      width={8}
      height={12}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M.995 11.293a1 1 0 001.414 0l4.596-4.596a1 1 0 000-1.415L2.41.686A1 1 0 10.995 2.101l3.182 3.181a1 1 0 010 1.415L.995 9.879a1 1 0 000 1.414z"
        fill="#2C2C84"
      />
    </Svg>
  )
}

export default Arrow
