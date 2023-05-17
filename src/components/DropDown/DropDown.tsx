import { A } from 'solid-start';
import './DropDown.css';

interface DropDownType {
  showing: boolean;
  ref: HTMLDivElement | undefined;
}

function overrideHashLink(e: MouseEvent) {
  e.preventDefault();

  // extract link text after '/#'
  const targetId = (e.target as HTMLAnchorElement).getAttribute('href')
    ?.substring(2);

  // deprecate '/experience', '/contact', etc.
  if (window.location.pathname !== '/') {
    window.location.href = '/';
  }

  // no element, scroll to top
  if (!targetId) {
    window.scrollTo(0, 0);
  } else {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop = targetElement.offsetTop;

      window.scrollTo(0, offsetTop);
    }
  }
}

export default function DropDown(props: DropDownType) {
  return (
    <div ref={props.ref} id='dropDown' class={props.showing ? 'showing' : ''}>
      <A href='/#' onClick={overrideHashLink}>Home</A>
      <A href='/#experience' onClick={overrideHashLink}>
        Experience
      </A>
      <A href='/#projects' onClick={overrideHashLink}>
        Projects
      </A>
      <A href='/#contact' onClick={overrideHashLink}>
        Contact
      </A>
      <A href='https://rb-portfolio-site.vercel.app/resume.pdf' target='_blank'>
        <span class='resumeLink'>Resume</span>
      </A>
    </div>
  );
}
