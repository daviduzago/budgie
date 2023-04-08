import * as React from 'react'
import Svg, {Path} from 'react-native-svg'

function IconFromPath(props) {
    let {svgWidth, svgHeight, path, fill, viewBox, direction} = props
    if (!svgWidth) {
        svgWidth = 24
    }

    let ratio = (svgWidth || 24) / (svgHeight || 24)
    let size = props.size || props.svgWidth || 24

    let iconWidth = size
    let iconHeight = size * ratio
    if (!svgHeight) {
        svgHeight = size * ratio
    }

    const rotate = direction === 'down' ? '180deg' : direction === 'right' ? '90deg' : direction === 'left' ? '-90deg' : '0deg'
    const Paths = Array.isArray(path) ? path.map((path, i) => <Path key={'path' + i} d={path} />) : <Path d={path} />

    let propsPass = {...props}
    delete propsPass.svgHeight
    delete propsPass.svgWidth

    return (
        <Svg
            width={iconWidth}
            height={iconHeight}
            viewBox={viewBox || `0 0 ${svgWidth} ${svgHeight}`}
            fill={fill || 'none'}
            xmlns="http://www.w3.org/2000/svg"
            {...propsPass}
            style={[{fill: fill}, props.style || {}, {transform: [{rotate}]}]}
        >
            {Paths}
        </Svg>
    )
}

export default React.memo(IconFromPath)