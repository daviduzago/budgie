import Svg, {Circle, Path, Defs, ClipPath, G, LinearGradient, Stop} from 'react-native-svg'


export default function Warning(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 128 128"
            fill={props.color || '#000'}>
            <G>
                <Path
                    d="m56.463 14.337-49.563 92.307c-2.8 5.217 1.273 11.356 7.537 11.356h99.126c6.264 0 10.338-6.139 7.537-11.356l-49.563-92.307c-3.106-5.783-11.968-5.783-15.074 0z"
                    fill="#fad271"
                />
                <G fill="#423e4f">
                    <Path d="m64 31.726a5.418 5.418 0 0 0 -5.5 5.45l1.017 44.289a4.422 4.422 0 0 0 4.483 4.261 4.422 4.422 0 0 0 4.482-4.261l1.018-44.289a5.418 5.418 0 0 0 -5.5-5.45z" />
                    <Circle cx={64} cy={100.222} r={6} />
                </G>
            </G>
        </Svg>
    )
}