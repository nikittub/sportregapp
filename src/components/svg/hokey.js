import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function Hokey(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={13} cy={13} r={13} fill="#fff" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.712 12.707a3 3 0 011.004-3.364l4.455-3.427a3 3 0 013.658 0l4.455 3.427a3 3 0 011.004 3.364l-2.015 5.789a3 3 0 01-2.834 2.013h-4.878a3 3 0 01-2.833-2.013l-2.016-5.789zm3.292 2.023a4.231 4.231 0 117.992 0l-.2.572a4.02 4.02 0 01-7.593 0l-.199-.572z"
        fill="#EA5515"
      />
    </Svg>
  )
}

export default Hokey
