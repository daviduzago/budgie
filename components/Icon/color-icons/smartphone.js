import Svg, {Circle, Path, Defs, ClipPath, G, LinearGradient, Stop} from 'react-native-svg'


export default function Smartphone(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 512 512"
            fill={props.color || '#000'}>
            <Path
                d="m396.836 365.563c-2.15-7.901-2.908-16.116-2.24-24.277l4.001-37.685c1.953-23.645-1.651-47.335-12.118-68.626-27.045-55.013-20.841-59.005-21.681-113.604 0-11.153-9.042-20.196-20.196-20.196-11.154 0-20.196 9.042-20.196 20.196 0 222.032.413 205.739-.956 212.249v29.074c0 24.496-19.929 44.426-44.425 44.426-16.269 0-72.374 0-110.552 0 16.984 23.62 40.219 42.114 67.183 53.313.167.069.334.139.501.21 20.833 8.799 44.094 26.357 47.981 48.142l.376 1.556c54.861-6.36 104.192-30.834 141.86-67.297z"
                fill="#f9ba8f"
            />
            <Path
                d="m93.463 101.881-6.151-5.699c-9.483-8.786-24.43-8.216-33.216 1.266-8.786 9.483-8.216 24.43 1.266 33.216l38.101 35.303z"
                fill="#f9ba8f"
            />
            <Path
                d="m67.863 112.997c-5.817-5.39-8.264-13.096-7.271-20.439-2.374 1.215-4.585 2.829-6.496 4.89-8.786 9.483-8.216 24.43 1.266 33.216l38.101 35.303v-29.249z"
                fill="#fcad6d"
            />
            <G>
                <Path
                    d="m398.676 370.388c-8.342 57.526-57.852 101.719-117.69 101.719-10.331 0-20.353-1.319-29.909-3.794 15.843 9.687 30.095 23.845 33.061 40.471l.376 1.556c54.861-6.36 104.191-30.834 141.86-67.297z"
                    fill="#fd995b"
                />
            </G>
            <G>
                <Path
                    d="m289.615 408.075h-162.235c-19.185 0-34.792-15.608-34.792-34.793v-338.489c0-19.185 15.607-34.793 34.792-34.793h162.235c19.185 0 34.792 15.608 34.792 34.793v338.49c0 19.184-15.608 34.792-34.792 34.792z"
                    fill="#2a428c"
                />
            </G>
            <Path
                d="m127.38 0c-19.185 0-34.792 15.608-34.792 34.792v338.49c0 19.185 15.608 34.793 34.792 34.793h48.364c-10.734-10.95 1.786-21.647 1.786-21.647-17.667-4.635-16.167-23.202-16.167-23.202s0-283.746 0-301.496 18.03-22.233 18.03-22.233c-7.102-7.102 0-14.565 0-14.565v-12.025c-6.551-4.152-5.261-9.805-3.835-12.907z"
                fill="#142766"
            />
            <G>
                <Path
                    d="m182.867 24.933h-3.474c-3.321 0-6.013-2.692-6.013-6.013s2.692-6.013 6.013-6.013h3.474c3.321 0 6.013 2.692 6.013 6.013s-2.692 6.013-6.013 6.013z"
                    fill="#3c58a0"
                />
            </G>
            <G>
                <Path
                    d="m236.771 24.933h-33.382c-3.321 0-6.013-2.692-6.013-6.013s2.692-6.013 6.013-6.013h33.382c3.321 0 6.013 2.692 6.013 6.013s-2.692 6.013-6.013 6.013z"
                    fill="#3c58a0"
                />
            </G>
            <Path
                d="m289.615 21.646h-24.383c-4.546 0-8.23 3.685-8.23 8.23 0 5.291-4.329 9.621-9.62 9.621h-77.767c-5.291 0-9.621-4.329-9.621-9.621 0-4.545-3.685-8.23-8.23-8.23h-24.384c-7.26 0-13.146 5.886-13.146 13.146v338.49c0 7.26 5.886 13.146 13.146 13.146h162.235c7.26 0 13.146-5.886 13.146-13.146 0-34.819 0-329.197 0-338.49 0-7.26-5.886-13.146-13.146-13.146z"
                fill="#73c3f9"
            />
            <Path
                d="m177.529 386.429c-2.5-10.787 10.012-13.307 10.012-13.307s7.958-69.709 0-77.667 0-15.473 0-15.473 8.694-68.972 0-77.667c-8.694-8.694 0-15.473 0-15.473v-77.667c-15.572-9.832-7.381-23.979-7.381-23.979v-22.275c-11.767-11.767-.772-23.419-.768-23.423h-9.778c-5.291 0-9.621-4.329-9.621-9.621 0-4.545-3.685-8.23-8.23-8.23h-24.383c-7.26 0-13.146 5.885-13.146 13.146v338.491c0 7.26 5.886 13.146 13.146 13.146h50.149z"
                fill="#4fabf7"
            />
            <G>
                <Path
                    d="m159.588 85.195h97.819c6.151 0 11.137-4.986 11.137-11.137s-4.986-11.137-11.137-11.137h-97.819c-6.151 0-11.138 4.986-11.138 11.137 0 6.152 4.987 11.137 11.138 11.137z"
                    fill="#e9efff"
                />
            </G>
            <Path
                d="m159.588 62.921h20.572v22.275h-20.572c-6.151 0-11.137-4.986-11.137-11.137-.001-6.153 4.986-11.138 11.137-11.138z"
                fill="#9bd8f9"
            />
            <G fill="#e9efff">
                <Path d="m277.174 186.841h-137.353c-5.51 0-10.018-4.508-10.018-10.018v-57.631c0-5.51 4.508-10.018 10.018-10.018h137.353c5.51 0 10.018 4.508 10.018 10.018v57.631c0 5.51-4.508 10.018-10.018 10.018z" />
                <Path d="m277.174 279.981h-137.353c-5.51 0-10.018-4.508-10.018-10.018v-57.631c0-5.51 4.508-10.018 10.018-10.018h137.353c5.51 0 10.018 4.508 10.018 10.018v57.631c0 5.51-4.508 10.018-10.018 10.018z" />
                <Path d="m277.174 373.121h-137.353c-5.51 0-10.018-4.508-10.018-10.018v-57.631c0-5.51 4.508-10.018 10.018-10.018h137.353c5.51 0 10.018 4.508 10.018 10.018v57.631c0 5.51-4.508 10.018-10.018 10.018z" />
                <Path d="m277.174 186.841h-137.353c-5.51 0-10.018-4.508-10.018-10.018v-57.631c0-5.51 4.508-10.018 10.018-10.018h137.353c5.51 0 10.018 4.508 10.018 10.018v57.631c0 5.51-4.508 10.018-10.018 10.018z" />
                <Path d="m277.174 279.981h-137.353c-5.51 0-10.018-4.508-10.018-10.018v-57.631c0-5.51 4.508-10.018 10.018-10.018h137.353c5.51 0 10.018 4.508 10.018 10.018v57.631c0 5.51-4.508 10.018-10.018 10.018z" />
                <Path d="m277.174 373.121h-137.353c-5.51 0-10.018-4.508-10.018-10.018v-57.631c0-5.51 4.508-10.018 10.018-10.018h137.353c5.51 0 10.018 4.508 10.018 10.018v57.631c0 5.51-4.508 10.018-10.018 10.018z" />
            </G>
            <Path
                d="m177.523 176.823v-57.63c0-5.51 4.508-10.018 10.018-10.018h-47.72c-5.51 0-10.018 4.508-10.018 10.018v57.63c0 5.51 4.508 10.018 10.018 10.018h47.72c-5.51 0-10.018-4.508-10.018-10.018z"
                fill="#d3dcfb"
            />
            <Path
                d="m177.523 269.963v-57.631c0-5.51 4.508-10.018 10.018-10.018h-47.72c-5.51 0-10.018 4.508-10.018 10.018v57.631c0 5.51 4.508 10.018 10.018 10.018h47.72c-5.51 0-10.018-4.508-10.018-10.018z"
                fill="#d3dcfb"
            />
            <Path
                d="m177.523 363.103v-57.631c0-5.51 4.508-10.018 10.018-10.018h-47.72c-5.51 0-10.018 4.508-10.018 10.018v57.631c0 5.51 4.508 10.018 10.018 10.018h47.72c-5.51 0-10.018-4.508-10.018-10.018z"
                fill="#d3dcfb"
            />
            <G>
                <Path
                    d="m203.082 141.387h-40.169c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h40.169c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z"
                    fill="#3c58a0"
                />
            </G>
            <G>
                <Path
                    d="m254.082 169.629h-91.169c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h91.169c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"
                    fill="#bec8f7"
                />
            </G>
            <G>
                <Path
                    d="m234.415 141.387h-5.667c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h5.667c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.357 7.5-7.5 7.5z"
                    fill="#bec8f7"
                />
            </G>
            <G>
                <Path
                    d="m203.082 234.527h-40.169c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h40.169c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"
                    fill="#3c58a0"
                />
            </G>
            <G>
                <Path
                    d="m254.082 262.769h-91.169c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h91.169c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z"
                    fill="#bec8f7"
                />
            </G>
            <G>
                <Path
                    d="m234.415 234.527h-5.667c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h5.667c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"
                    fill="#bec8f7"
                />
            </G>
            <G>
                <Path
                    d="m203.082 327.667h-40.169c-4.142 0-7.5-3.358-7.5-7.5 0-4.143 3.358-7.5 7.5-7.5h40.169c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"
                    fill="#3c58a0"
                />
            </G>
            <G>
                <Path
                    d="m254.082 355.909h-91.169c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h91.169c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z"
                    fill="#bec8f7"
                />
            </G>
            <G>
                <Path
                    d="m234.415 327.667h-5.667c-4.142 0-7.5-3.358-7.5-7.5 0-4.143 3.358-7.5 7.5-7.5h5.667c4.142 0 7.5 3.357 7.5 7.5s-3.357 7.5-7.5 7.5z"
                    fill="#bec8f7"
                />
            </G>
            <Path
                d="m127.669 225.842c-7.731 8.343-20.761 8.84-29.104 1.109l-34.497-31.964c-8.343-7.73-8.84-20.761-1.109-29.104 7.731-8.343 20.761-8.84 29.104-1.109l34.497 31.964c8.343 7.731 8.84 20.761 1.109 29.104z"
                fill="#f9ba8f"
            />
            <Path
                d="m112.757 212.422-34.497-31.964c-5.77-5.346-7.781-13.226-5.92-20.338-3.478 1.004-6.741 2.915-9.381 5.764-7.731 8.343-7.234 21.374 1.109 29.104l34.497 31.964c8.343 7.73 21.373 7.234 29.104-1.109 2.384-2.573 3.98-5.594 4.81-8.766-6.707 1.935-14.228.436-19.722-4.655z"
                fill="#fcad6d"
            />
            <G>
                <Path
                    d="m127.669 338.191c-7.731 8.343-20.761 8.84-29.104 1.109l-34.497-31.964c-8.343-7.73-8.84-20.761-1.109-29.104 7.731-8.343 20.761-8.84 29.104-1.109l34.497 31.964c8.343 7.73 8.84 20.761 1.109 29.104z"
                    fill="#f9ba8f"
                />
            </G>
            <Path
                d="m112.757 324.77-34.497-31.964c-5.77-5.346-7.781-13.226-5.92-20.338-3.478 1.004-6.741 2.915-9.381 5.764-7.731 8.343-7.234 21.374 1.109 29.104l34.497 31.964c8.343 7.73 21.373 7.234 29.104-1.109 2.384-2.573 3.98-5.594 4.81-8.766-6.707 1.936-14.228.436-19.722-4.655z"
                fill="#fcad6d"
            />
            <Path
                d="m127.669 282.017c-7.731 8.343-20.761 8.84-29.104 1.109l-34.497-31.964c-8.343-7.73-8.84-20.761-1.109-29.104 7.731-8.343 20.761-8.84 29.104-1.109l34.497 31.964c8.343 7.73 8.84 20.76 1.109 29.104z"
                fill="#f9ba8f"
            />
            <Path
                d="m112.757 268.596-34.497-31.964c-5.77-5.346-7.781-13.226-5.92-20.338-3.478 1.004-6.742 2.915-9.381 5.764-7.731 8.343-7.234 21.373 1.109 29.104l34.497 31.964c8.343 7.731 21.373 7.234 29.104-1.109 2.384-2.573 3.98-5.594 4.81-8.766-6.707 1.936-14.228.436-19.722-4.655z"
                fill="#fcad6d"
            />
            <Path
                d="m422.068 86.887c-13.299 16.916-25.301 41.22-15.706 67.742 18 49.753 46.667 91.99 33.333 165.538-6.05 33.372 13.803 47.361 37.296 52.687 15.379-32.042 24.009-67.938 24.009-105.855.001-71.228-30.405-135.345-78.932-180.112z"
                fill="#9181f2"
            />
        </Svg>
    )
}