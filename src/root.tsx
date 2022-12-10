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
  Link,
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
        <Link rel="icon" href="https://rb-portfolio-site.vercel.app/favicon.ico" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#000000" />
        <Meta
          name="description"
          content="Web portfolio of Riley Bruins"
        />
        <Link rel="apple-touch-icon" href="https://rb-portfolio-site.vercel.app/logo192.png" />
        {/* SOCIAL MEDIA DESCRIPTORS, MOSTLY FOR LINKEDIN
        Facebook Meta Tags*/}
        <Meta property="og:url" content="https://rb-portfolio-site.vercel.app/" />
        <Meta property="og:type" content="website" />
        <Meta property="og:title" content="Riley Bruins - Full Stack Developer" />
        <Meta property="og:description" content="Web portfolio of Riley Bruins" />
        <Meta property="og:image" content="https://rb-portfolio-site.vercel.app/logoog.png" />

        {/* Twitter Meta Tags */}
        <Meta name="twitter:card" content="summary_large_image" />
        <Meta property="twitter:domain" content="ribru17.github.io" />
        <Meta property="twitter:url" content="https://rb-portfolio-site.vercel.app/" />
        <Meta name="twitter:title" content="Riley Bruins - Full Stack Developer" />
        <Meta name="twitter:description" content="Web portfolio of Riley Bruins" />
        <Meta name="twitter:image" content="https://rb-portfolio-site.vercel.app/logoog.png" />
        {/* END OF SOCIAL MEDIA DESCRIPTORS */}
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
