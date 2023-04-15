import Svg, {Circle, Path, Defs, ClipPath, G, LinearGradient, Stop} from 'react-native-svg'


export default function Coupon(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 512 512"
            fill={props.color || '#000'}>
            <G clip-rule="evenodd" fill-rule="evenodd">
                <Path d="m89.837 126.948h320.326c8.606 0 15.626 7.02 15.626 15.626v50.942c0 7.13-4.594 13.163-11.466 15.061-18.165 5.017-31.504 21.662-31.504 41.424 0 19.761 13.339 36.407 31.504 41.424 6.872 1.898 11.466 7.931 11.466 15.06v50.942c0 8.606-7.02 15.626-15.626 15.626h-320.326c-8.606 0-15.626-7.019-15.626-15.626v-50.942c0-7.13 4.594-13.163 11.466-15.06 18.165-5.017 31.505-21.663 31.505-41.424s-13.339-36.407-31.505-41.424c-6.872-1.898-11.466-7.931-11.466-15.061v-50.942c0-8.607 7.02-15.626 15.626-15.626z" fill="#ffbf31" />
                <G fill="#4187b5">
                    <Path d="m169.918 156.246c0-3.236 2.624-5.86 5.86-5.86s5.86 2.624 5.86 5.86v29.607c0 3.236-2.624 5.86-5.86 5.86s-5.86-2.624-5.86-5.86z" />
                    <Path d="m169.918 235.197c0-3.236 2.624-5.86 5.86-5.86s5.86 2.624 5.86 5.86v29.607c0 3.236-2.624 5.86-5.86 5.86s-5.86-2.623-5.86-5.86z" />
                    <Path d="m169.918 314.147c0-3.236 2.624-5.86 5.86-5.86s5.86 2.624 5.86 5.86v29.607c0 3.236-2.624 5.86-5.86 5.86s-5.86-2.624-5.86-5.86z" />
                </G>
            </G>
        </Svg>
    )
}   