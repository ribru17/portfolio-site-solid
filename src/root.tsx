// @refresh reload
import { Suspense } from "solid-js";
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
import "./root.css";

export default function Root() {
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
            </div>
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
