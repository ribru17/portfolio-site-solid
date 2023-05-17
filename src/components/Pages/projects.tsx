import { createSignal, onCleanup, onMount } from 'solid-js';
import Github from '~/components/SVGs/Github/Github';
import WurdGIF from '~/assets/wurdpreviewcropped.gif';
import Westwordle from '~/assets/westwordle.jpg';
import Chordeographer from '~/assets/chordeographerpreview.jpg';
import Card3D from '~/components/Card3D/Card3D';
import './projects.css';

export default function Projects() {
  const [active, setActive] = createSignal(false);

  let mainRef: HTMLElement | undefined = undefined;

  function handleScroll() {
    let windowHeight = window.innerHeight;

    let elementTop = mainRef?.getBoundingClientRect().top;

    let elementVisible = window.innerHeight / 8;

    if (elementTop && elementTop < windowHeight - elementVisible) {
      setActive(true);
    }
  }

  onMount(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return (
    <main id='projects' class={active() ? 'active' : ''} ref={mainRef}>
      <h1>Projects</h1>
      {/* Don't let deno fmt remove the leading space */}
      {/* deno-fmt-ignore */}
      <p id='projectSubheader'> an image to show relevant skills.</p>
      <div class='projectDiv'>
        <h2 class='projectTitle'>
          Westwordle<a
            class='toSource'
            rel='noreferrer'
            target='_blank'
            href='https://github.com/ribru17/westwordle'
          >
            <Github />
          </a>
        </h2>
        <Card3D photo={Westwordle} aspectRatio='1.5'>
          <div class='card-bar card-bar2'>
            <span>React</span>
          </div>
          <div class='card-bar card-bar2'>
            <span>Typescript</span>
          </div>
        </Card3D>
        <div class='descDiv'>
          <p>
            This is a take on the New York Times' popular Wordle game with all
            words being UCLA-themed.
          </p>
        </div>
      </div>
      <div class='projectDiv'>
        <h2 class='projectTitle'>
          Wurd<a
            class='toSource'
            rel='noreferrer'
            target='_blank'
            href='https://github.com/ribru17/text-editor-app'
          >
            <Github />
          </a>
        </h2>
        <Card3D photo={WurdGIF} aspectRatio='1.8'>
          <div class='card-bar card-bar2'>
            <span>C++</span>
          </div>
          <div class='card-bar card-bar2'>
            <span>OOP</span>
          </div>
        </Card3D>
        <div class='descDiv'>
          <p>
            This is a text editor app I made for a school project. The text
            editor is capable of basic functions such as opening and editing
            files, and saving and creating files, and also comes with a basic
            spell checking system based on a provided dictionary file which can
            also be changed by the user.
          </p>
        </div>
      </div>
      <div class='projectDiv'>
        <h2 class='projectTitle'>
          Chordeographer<a
            class='toSource'
            rel='noreferrer'
            target='_blank'
            href='https://github.com/ribru17/text-editor-app'
          >
            <Github />
          </a>
        </h2>
        <Card3D photo={Chordeographer} aspectRatio='1.5'>
          <div class='card-bar card-bar2'>
            <span>JS</span>
          </div>
          <div class='card-bar card-bar2'>
            <span>React Native</span>
          </div>
        </Card3D>
        <div class='descDiv'>
          <p>
            This is a basic iOS app that provides helpful tools and tips related
            to music theory. It gives suggestions for chord progressions based
            on your preferred key and is also capable of generating random chord
            progressions within that key.
          </p>
        </div>
      </div>
    </main>
  );
}
