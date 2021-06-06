import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Location(props) {
  return (
    <Svg
      width={9}
      height={13}
      viewBox="0 0 9 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M4.4 5.971a1.571 1.571 0 100-3.142 1.571 1.571 0 000 3.142zM4.4 0a4.4 4.4 0 014.4 4.4c0 3.3-4.4 8.171-4.4 8.171S0 7.7 0 4.4A4.4 4.4 0 014.4 0z"
        fill="#BDBDBD"
      />
    </Svg>
  )
}

export default Location
