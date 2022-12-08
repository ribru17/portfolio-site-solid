import { JSX } from 'solid-js'
import './menu.css'

interface Props extends JSX.CSSProperties {
    id?: string,
    onClick?(): any,
    open: boolean,
    ref: SVGSVGElement | undefined
}

// const Menu = React.forwardRef((props: Props, ref: React.ForwardedRef<SVGSVGElement>) => {
export default function Menu(props: Props) {
    const {id, onClick, ref, ...styles} = props

    return (
        <svg viewBox="0 0 100 80" height={30} width={30}
        style={{...styles}}
        id={id || ''}
        ref={ref}
        class={props.open ? 'close' : ''}
        onClick={() => {
            onClick?.()
        }}
        >
            <rect width={100} height={20} rx={12}></rect>
            <rect width={100} height={20} y={30} rx={12}></rect>
            <rect width={100} height={20} y={60} rx={12}></rect>
        </svg>
    )
}