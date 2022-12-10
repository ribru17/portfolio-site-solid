import { createSignal, JSX, onCleanup, onMount } from "solid-js";
import Github from "~/components/SVGs/Github/Github";
import LinkedIn from "~/components/SVGs/LinkedIn/LinkedIn";
import CoolButton from "~/components/CoolButton/CoolButton";
import "./contact.css"

interface PageProps {
    delayActivation?: boolean
}

export default function Contact(props: PageProps) {

    interface ContactForm extends HTMLFormControlsCollection {
        name?: HTMLInputElement,
        message?: HTMLInputElement,
        submit?: HTMLInputElement
    }

    let formRef: HTMLFormElement | undefined = undefined;

    const [buttonText, setButtonText] = createSignal('Send')
    const [active, setActive] = createSignal(false)

    let mainRef: HTMLElement | undefined = undefined

    function handleScroll() {
        let windowHeight = window.innerHeight

        let elementTop = mainRef?.getBoundingClientRect().top

        let elementVisible = window.innerHeight / 8

        if (elementTop && elementTop < windowHeight - elementVisible) {
            // mainRef?.classList.add("active")
            setActive(true)
        }
    }

    onMount(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
    })

    onCleanup(() => {
        window.removeEventListener('scroll', handleScroll)
    })

    const sendMail: JSX.EventHandlerUnion<HTMLFormElement, Event & { submitter: HTMLElement; }> = async (e) => {
        e.preventDefault()
        let fields: ContactForm = (e.target as HTMLFormElement).elements
        // let rootUrl = process.env.NODE_ENV === 'production' ? 'https://rb-portfolio-site.herokuapp.com' : ''
        let rootUrl = 'https://portfolio-backend-dig6.onrender.com'
        let messageName = fields.name?.value || ""
        let messageContent = fields.message?.value || ""
        if (fields.name) {
            fields.name.value = ''
        }
        if (fields.message) {
            fields.message.value = ''
        }
        setButtonText('Message sent!')
        setTimeout(() => {
            setButtonText('Send')
        }, 1000)
        await fetch(`${rootUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: messageName,
                message: messageContent
            })
        })
    }

    return (
        <main class={active() ? "active" : ""} ref={mainRef}>
            <h1>Contact</h1>
            <div id="contactInvite">
                <p>
                    Check out my linked profiles on the right.
                    If you have a question or you want to work with me, send me an email below!
                </p>
                <div id="logoCont">
                    <a target="_blank" rel="noreferrer" href="https://github.com/ribru17"><Github /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/riley-bruins/"><LinkedIn /></a>
                </div>
            </div>
            <form ref={formRef} onSubmit={sendMail} id='contactForm'>
                <input autocomplete="off" type="text" placeholder="Your email" name="name" required></input>
                <textarea rows={3} autocomplete="off" placeholder="Your message" name="message" required></textarea>
                <CoolButton title={buttonText()} onClick={(_e) => formRef?.submit} />
            </form>
        </main>
    )
}