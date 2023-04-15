import Svg, {Circle, Path, Defs, ClipPath, G, LinearGradient, Stop, Rect} from 'react-native-svg'


export default function ColombiaFlag(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 512 512"
            fill={props.color}>
            <Path fill={"#FF4B55"} d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345v-45.517H0V385.379z" />
            <Path fill={"#FFE15A"} d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V256h512V126.621C512,105.443,494.833,88.276,473.655,88.276z" />
            <Rect y="256" fill={"#41479B"} width="512" height="83.86" />
        </Svg>
    )
}