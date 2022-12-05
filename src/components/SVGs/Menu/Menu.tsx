import { CSSOptions } from 'vite'
import './menu.css'

interface Props extends CSSOptions {
    id?: string,
    onClick?(): any,
    open: boolean,
}

// const Menu = React.forwardRef((props: Props, ref: React.ForwardedRef<SVGSVGElement>) => {
export default function Menu(props: Props) {

    const {id, onClick, ...styles} = props

    return (
        <svg viewBox="0 0 100 80" height={30} width={30}
        style={{...styles}}
        id={id || ''}
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