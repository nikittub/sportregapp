import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Washer(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.716 4.834A3 3 0 00.712 8.198l2.015 5.788A3 3 0 005.561 16h4.878a3 3 0 002.834-2.014l2.015-5.788a3 3 0 00-1.004-3.364L9.83 1.407a3 3 0 00-3.658 0L1.716 4.834z"
        fill="#EA5515"
      />
      <Path
        d="M5.42 5.475a4.231 4.231 0 00-1.416 4.746l.2.572a4.02 4.02 0 007.593 0l.199-.572A4.231 4.231 0 005.42 5.475z"
        fill="#fff"
      />
    </Svg>
  )
}

export default Washer
