// @refresh reload
import { Suspense, createSignal, onMount, onCleanup } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import DropDown from "./components/DropDown/DropDown";
import Menu from "./components/SVGs/Menu/Menu";
import "./root.css";

export default function Root() {

  const [isOpen, setIsOpen] = createSignal(true)

  let dropDownRef: HTMLDivElement | undefined = undefined
  let svgRef: SVGSVGElement | undefined = undefined

  function toggleDropDown() {
    setIsOpen(prev => !prev)
    // setIsOpen(true)
  }

  function handleClickOutside(e: MouseEvent) {
    if (dropDownRef && !dropDownRef.contains(e.target as Node) && svgRef && !svgRef.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  onMount(() => {
    document.addEventListener('mousedown', handleClickOutside)
  })

  onCleanup(() => {
    document.removeEventListener('mousedown', handleClickOutside)
  })

  return (
    <Html lang="en">
      <Head>
        <Title>Riley Bruins - Full Stack Developer</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <div id="navBar">
              <A href="/" id="nameLink">Riley Bruins<img class='logo' src='logo192.png' alt='Logo'></img></A>
              <div id="otherLinks">
                <A href="/experience">Experience</A>
                <A href="/projects">Projects</A>
                <A href="/contact">Contact</A>
              </div>
              <Menu ref={svgRef} open={isOpen()} id="menuSvg" onClick={toggleDropDown} fill="white" />
            </div>
            <DropDown showing={isOpen()} ref={dropDownRef} />
            <div id="mainContainer">
              <Routes>
                <FileRoutes />
              </Routes>
            </div>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
