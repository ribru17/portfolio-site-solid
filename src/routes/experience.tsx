import { createSignal, onCleanup, onMount } from 'solid-js';
import './experience.css';

export default function Experience() {
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
    <main class={active() ? 'active' : ''} ref={mainRef}>
      <h1>Experience</h1>
      <div class='largeBlock' id='experienceBody'>
        <h2 style={{ 'margin-top': 0 }}>Employment Experience</h2>
        <div class='flex'>
          <div class='workCont'>
            <div class='workInfoCont'>
              <h3>AI Model Trainer at Surge AI</h3>
              <h3 class='timeWorked'>June 2022 - August 2022</h3>
            </div>
            <p class='workText'>
              Here I worked part-time with a team of over 80 people to write
              helpful and production-quality code in order to teach an AI model
              to do the same. My main focus was in Javascript and Typescript but
              I also trained the bot in Rust and C.
            </p>
          </div>
        </div>
        <h2>Personal Experience</h2>
        <div class='flex'>
          <div class='workCont spaceBottom revOnMobile'>
            <div id='experienceTextCont'>
              <p id='experienceText'>
                I mostly use Express with Node for my backends and favor React
                as my frontend framework. This website, however, is built with
                SolidJS and Typescript with a Rust (Actix Web) backend! Feel
                free to{' '}
                <a
                  class='inlineLink'
                  target='_blank'
                  rel='noreferrer'
                  href='https://github.com/ribru17/portfolio-site-solid'
                >
                  view this site's source code
                </a>{' '}
                or take a look at some of my skills below!
              </p>
            </div>
            <div class='typewriterCont'>
              <p class='typewriterStatic'>background-color:&nbsp;</p>
              <p class='typewriter'></p>
            </div>
          </div>
        </div>
        <div id='experienceCont'>
          <div class='bar'>
            <div class='max'>Javascript / Typescript</div>
          </div>
          <div class='bar'>
            <div class='max'>React.js / React Native</div>
          </div>
          <div class='bar'>
            <div class='max'>Node.js</div>
          </div>
          <div class='bar'>
            <div class='max'>HTML + CSS</div>
          </div>
          <div class='bar'>
            <div class='max'>MongoDB</div>
          </div>
          <div class='bar'>
            <div class='max'>Git</div>
          </div>
          <div class='bar'>
            <div class='max'>Python</div>
          </div>
          <div class='bar'>
            <div class='max'>C / C++</div>
          </div>
          <div class='bar'>
            <div class='eighty'>Rust</div>
          </div>
          <div class='bar'>
            <div class='eighty'>Lua</div>
          </div>
          <div class='bar'>
            <div class='sixty'>Haskell</div>
          </div>
          <div class='bar'>
            <div class='sixty'>C#</div>
          </div>
          <div class='bar'>
            <div class='sixty'>Go</div>
          </div>
          <div class='bar'>
            <div class='sixty'>R</div>
          </div>
        </div>
      </div>
    </main>
  );
}
