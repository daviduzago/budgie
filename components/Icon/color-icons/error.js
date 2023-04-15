import Svg, {Circle, Path, Defs, ClipPath, G, LinearGradient, Stop} from 'react-native-svg'


export default function Error(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 32 32"
            fill={props.color || '#000'}>
            <G id="cross">
                <Path d="m16 1a15 15 0 1 0 15 15 15 15 0 0 0 -15-15zm6.36 20-1.36 1.36-5-4.95-4.95 4.95-1.41-1.36 4.95-5-4.95-4.95 1.41-1.41 4.95 4.95 5-4.95 1.41 1.41-5 4.95z" fill="#ea2d3f" />
            </G>
        </Svg>
    )
}