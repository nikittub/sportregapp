import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Notification(props) {
  return (
    <Svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.5c0-3.07-1.14-5.64-4-6.32V0H6v2.18c-2.87.68-4 3.24-4 6.32V14l-2 1v2h16v-2l-2-1V8.5zM8.4 19.96A2.014 2.014 0 015.99 18h4c0 .28-.05.54-.15.78-.26.6-.79 1.04-1.44 1.18z"
        fill="#303030"
      />
    </Svg>
  )
}

export default Notification
