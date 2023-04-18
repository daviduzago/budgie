import Svg, {Circle, Path, Defs, ClipPath, G, LinearGradient, Stop} from 'react-native-svg'


export default function PaymentMethod(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg"
            width={props.size}
            height={props.size}
            viewBox="0 0 512 512"
            fill={props.color || '#000'}>
            <Path d="m498.1875 283.320312-123.632812 123.632813c-15.625 15.625-40.96875 15.625-56.589844-.007813l-214.996094-214.996093c-3.234375-3.234375-5.804688-6.878907-7.695312-10.773438-7.265626-14.917969-4.703126-33.417969 7.695312-45.828125l123.625-123.625c15.632812-15.628906 40.976562-15.628906 56.597656 0l214.996094 214.996094c15.632812 15.625 15.632812 40.96875 0 56.601562zm0 0" fill="#4395fb" />
            <Path d="m498.1875 283.320312-123.632812 123.632813c-15.625 15.625-40.96875 15.625-56.589844-.007813l-214.996094-214.996093c-3.234375-3.234375-5.804688-6.878907-7.695312-10.773438h357.371093l45.542969 45.542969c15.632812 15.625 15.632812 40.96875 0 56.601562zm0 0" fill="#2482ff" />
            <Path d="m171.753906 66.570312 42.316406-42.320312 271.589844 271.59375-42.316406 42.316406zm0 0" fill="#2c5bab" />
            <Path d="m370.996094 181.175781h-84.632813l156.988281 156.980469 42.3125-42.3125zm0 0" fill="#274b92" />
            <Path d="m481.917969 512h-454.417969c-15.1875 0-27.5-12.3125-27.5-27.5v-233.300781c0-15.1875 12.3125-27.5 27.5-27.5h454.417969c15.1875 0 27.5 12.3125 27.5 27.5v233.300781c0 15.1875-12.3125 27.5-27.5 27.5zm0 0" fill="#1eb7a2" />
            <Path d="m471.289062 316.082031v103.539063c0 5.761718-4.042968 10.707031-9.679687 11.90625-4.964844 1.058594-9.636719 2.917968-13.867187 5.4375-4.117188 2.433594-7.8125 5.488281-10.972657 9.039062l-.03125.03125c-4.347656 4.890625-7.664062 10.71875-9.636719 17.144532-1.542968 5.039062-6.3125 8.398437-11.582031 8.398437h-321.621093c-5.269532 0-10.039063-3.359375-11.582032-8.398437-4.859375-15.894532-18.066406-28.148438-34.507812-31.652344-5.636719-1.199219-9.679688-6.144532-9.679688-11.90625v-103.539063c0-5.753906 4.042969-10.710937 9.679688-11.90625 3.769531-.808593 7.371094-2.070312 10.738281-3.738281 11.320313-5.585938 20.023437-15.664062 23.769531-27.917969 1.542969-5.039062 6.3125-8.398437 11.582032-8.398437h321.621093c5.269531 0 10.039063 3.359375 11.582031 8.398437 4.859376 15.894531 18.066407 28.148438 34.507813 31.65625 5.636719 1.195313 9.679687 6.152344 9.679687 11.90625zm0 0" fill="#65d196" />
            <Path d="m471.289062 316.082031v103.539063c0 5.761718-4.042968 10.707031-9.679687 11.90625-4.964844 1.058594-9.636719 2.917968-13.867187 5.4375-4.117188 2.433594-7.8125 5.488281-10.972657 9.039062l-.03125.03125h-322.421875c-5.269531 0-10.035156-3.359375-11.578125-8.398437-4.863281-15.894531-18.070312-28.160157-34.511719-31.65625-5.636718-1.207031-9.679687-6.152344-9.679687-11.914063v-93.628906c11.320313-5.585938 20.023437-15.664062 23.769531-27.917969 1.542969-5.039062 6.3125-8.398437 11.582032-8.398437h321.621093c5.269531 0 10.039063 3.359375 11.582031 8.398437 4.859376 15.894531 18.066407 28.148438 34.507813 31.65625 5.636719 1.195313 9.679687 6.152344 9.679687 11.90625zm0 0" fill="#7af4ab" />
            <G fill="#7af4a9">
                <Path d="m54.230469 265.265625c0 5.527344-4.480469 10.007813-10.007813 10.007813s-10.007812-4.480469-10.007812-10.007813 4.480468-10.007813 10.007812-10.007813 10.007813 4.480469 10.007813 10.007813zm0 0" />
                <Path d="m475.203125 265.265625c0 5.527344-4.480469 10.007813-10.007813 10.007813-5.527343 0-10.007812-4.480469-10.007812-10.007813s4.480469-10.007813 10.007812-10.007813c5.527344 0 10.007813 4.480469 10.007813 10.007813zm0 0" />
                <Path d="m54.230469 470.4375c0 5.527344-4.480469 10.007812-10.007813 10.007812s-10.007812-4.480468-10.007812-10.007812 4.480468-10.007812 10.007812-10.007812 10.007813 4.480468 10.007813 10.007812zm0 0" />
                <Path d="m475.203125 470.4375c0 5.527344-4.480469 10.007812-10.007813 10.007812-5.527343 0-10.007812-4.480468-10.007812-10.007812s4.480469-10.007812 10.007812-10.007812c5.527344 0 10.007813 4.480468 10.007813 10.007812zm0 0" />
            </G>
            <Path d="m336.601562 367.851562c0 45.226563-36.664062 81.890626-81.894531 81.890626-45.226562 0-81.890625-36.664063-81.890625-81.890626 0-45.230468 36.664063-81.890624 81.890625-81.890624 45.230469 0 81.894531 36.660156 81.894531 81.890624zm0 0" fill="#1a9c91" />
            <Path d="m427.414062 357.875h-46.195312c-4.347656 0-7.871094 3.527344-7.871094 7.875s3.523438 7.875 7.871094 7.875h46.195312c4.351563 0 7.875-3.527344 7.875-7.875s-3.523437-7.875-7.875-7.875zm0 0" fill="#1a9c91" />
            <Path d="m128.199219 362.074219h-46.195313c-4.351562 0-7.875 3.527343-7.875 7.875 0 4.347656 3.523438 7.875 7.875 7.875h46.195313c4.347656 0 7.871093-3.527344 7.871093-7.875 0-4.347657-3.523437-7.875-7.871093-7.875zm0 0" fill="#1a9c91" />
            <Path d="m283.769531 388.957031c0-35.210937-40.835937-26.015625-40.835937-43.808593 0-6.824219 4.796875-10.285157 14.257812-10.285157 6.492188 0 10.039063 1.828125 12.628906 3.164063 1.617188.832031 3.015626 1.554687 4.617188 1.554687 4.398438 0 7.09375-4.855469 7.09375-8.335937 0-6.820313-10.378906-9.542969-18.257812-10.4375v-12.804688c0-4.351562-3.523438-7.875-7.875-7.875-4.347657 0-7.875 3.523438-7.875 7.875v13.410156c-12.855469 2.824219-20.265626 11.628907-20.265626 24.726563 0 32.050781 40.835938 21.640625 40.835938 43.808594 0 10.550781-7.957031 12.765625-14.628906 12.765625-14.117188 0-15.382813-10.054688-21.222656-10.054688-3.996094 0-7.214844 4.558594-7.214844 8.335938 0 5.921875 8.578125 14.179687 22.496094 16.191406v10.84375c0 4.347656 3.527343 7.875 7.875 7.875 4.351562 0 7.875-3.527344 7.875-7.875v-11.414062c12.996093-3.070313 20.496093-12.925782 20.496093-27.660157zm0 0" fill="#7af4a9" />
        </Svg>
    )
}