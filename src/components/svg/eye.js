import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Eye(props) {
  return (
    <Svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.412.002l16.97 16.969.001-.002.002.002-1.414 1.414-3.357-3.357c-1.257.586-2.78.972-4.614.972C2.408 16 .126 9.383.104 9.316L0 9l.105-.316c.014-.042.929-2.699 3.515-4.65L1 1.415 2.412.002zM13.087 13.5l-1.797-1.797c-.392.19-.83.296-1.29.296a3.02 3.02 0 01-3-3c0-.46.107-.898.296-1.29l-2.26-2.26C3.27 6.667 2.416 8.31 2.116 9c.5 1.154 2.562 5 7.884 5 1.184 0 2.207-.19 3.087-.5z"
        fill="#9D9FA0"
      />
      <Path
        d="M7.5 2.261C8.261 2.095 9.093 2 10 2c7.592 0 9.874 6.617 9.896 6.684L20 9l-.105.316c-.01.033-.57 1.657-2.044 3.296L16.46 11.22A8.594 8.594 0 0017.883 9c-.499-1.154-2.56-5-7.883-5-.252 0-.498.009-.736.025L7.5 2.261z"
        fill="#9D9FA0"
      />
    </Svg>
  )
}

export default Eye