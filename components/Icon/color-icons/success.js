import Svg, {Circle, Path, Defs, ClipPath, G, LinearGradient, Stop} from 'react-native-svg'


export default function Success(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 24 24"
            fill={props.color || '#000'}>
            <G id="Flat_Color" fill="#20bf55" data-name="Flat Color">
                <Path d="m12 22.75a10.75 10.75 0 0 1 0-21.5 10.53 10.53 0 0 1 4.82 1.15.75.75 0 0 1 -.68 1.34 9 9 0 0 0 -4.14-1 9.25 9.25 0 1 0 9.25 9.26 2 2 0 0 0 0-.25.75.75 0 1 1 1.5-.14v.39a10.76 10.76 0 0 1 -10.75 10.75z" />
                <Path d="m11.82 15.41a.7.7 0 0 1 -.52-.22l-4.83-4.74a.75.75 0 0 1 0-1.06.77.77 0 0 1 1.07 0l4.29 4.23 9.65-9.49a.77.77 0 0 1 1.07 0 .75.75 0 0 1 0 1.06l-10.18 10a.74.74 0 0 1 -.55.22z" />
            </G>
        </Svg>
    )
}