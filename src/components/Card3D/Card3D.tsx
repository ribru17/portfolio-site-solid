import { createSignal, JSX } from 'solid-js'
import './card3d.css'

interface Props {
    children?: JSX.Element,
    photo: string,
    aspectRatio: string
}

export default function Card3D({ children, photo, aspectRatio }: Props) {

    const [isClicked, setIsClicked] = createSignal(false)

    const handleClick = () => {
        setIsClicked(prev => !prev)
    }

    return (
        <div class={`background ${isClicked() ? 'details' : ''}`} onClick={handleClick}>
            <div class="card" style={{
                // aspectRatio: aspectRatio
                "aspect-ratio": aspectRatio
            }}>
                <div class="photo" style={{
                    background: `url(${photo}) no-repeat center center`,
                    "background-size": 'cover',
                    }}></div>
                <div class="chart">
                    <div></div>
                    {children}
                    <div></div>
                </div>
            </div>
        </div>
    )
}