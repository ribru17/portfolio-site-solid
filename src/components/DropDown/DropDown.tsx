import { createSignal, createEffect } from 'solid-js'
import { A } from 'solid-start'
import { useLocation } from '@solidjs/router'
import './DropDown.css'

interface DropDownType {
    showing: boolean,
    ref: HTMLDivElement | undefined
}

// const DropDown = React.forwardRef((props: DropDownType, ref: React.ForwardedRef<HTMLDivElement>) => {
export default function DropDown(props: DropDownType) {

    const location = useLocation()
    const [activePage, setActivePage] = createSignal([
        false,
        false,
        false,
        false,
    ])

    createEffect(() => {
        switch(location.pathname) {
            case '/':
                setActivePage([true, false, false, false])
                break
            case '/experience':
                setActivePage([false, true, false, false])
                break
            case '/projects':
                setActivePage([false, false, true, false])
                break
            case '/contact':
                setActivePage([false, false, false, true])
                break
        }
        console.log(location.pathname)
        console.log(activePage())
    })

    return (
        <div ref={props.ref} id="dropDown" style={{
                "max-width": props.showing ? '150px' : '0%',
                "border-right": props.showing ? '2px solid darkgoldenrod' : 'none'
            }}>
            <A class={activePage()[0] ? "currentPage" : ""} href="/">Home</A>
            <A class={activePage()[1] ? "currentPage" : ""} href="/experience">Experience</A>
            <A class={activePage()[2] ? "currentPage" : ""} href="/projects">Projects</A>
            <A class={activePage()[3] ? "currentPage" : ""} href="/contact">Contact</A>
        </div>
    )
}