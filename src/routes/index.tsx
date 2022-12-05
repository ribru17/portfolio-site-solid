import { createSignal, onMount, JSX } from "solid-js";
import Experience from "./experience";
import Projects from "./projects";
import Contact from "./contact";
import "./index.css"

export default function Home() {

  const [subHeaderWidth, setSubheaderWidth] = createSignal('0%')

  onMount(() => {
    setTimeout(() => {
      setSubheaderWidth('75%')
    }, 0)
  })

  return (
    <main class="active">
      <h1>Riley Bruins</h1>
      <h2 style={{"max-width": subHeaderWidth()}} class='subHeader'>Driven and passionate full stack developer</h2>
      <div id="aboutMeCont">
        <div class='aboutMe'>
          <h2>About Me</h2>
          <p>
            I am a full stack developer with 3+ years of experience building websites.
            I love programming and I have worked on countless projects, both in teams and by myself.
          </p>
        </div>
        <div id="aboutMeDivider" style={{"border-right": '1px solid white'}}></div>
        <div class='aboutMe'>
          <h2>My Priorities</h2>
          <p>
            When building a website (or any application), I always make sure that it is performant and simple
            to navigate. Nobody wants to wait forever or get lost figuring out a website!
          </p>
        </div>
      </div>
      <Experience delayActivation={true} />
      <Projects delayActivation={true} />
      <Contact delayActivation={true} />
    </main>
  );
}
