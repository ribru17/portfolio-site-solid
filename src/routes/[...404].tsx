import { A, Title } from "solid-start";
import { HttpStatusCode } from "solid-start/server";
import "./404.css"

export default function NotFound() {
  return (
    <div class="pageDiv">
      <main class="active">
        <Title>Page Not Found</Title>
        <HttpStatusCode code={404} />
        <h1>Page not found :(</h1>
        <A href="/" id="notFoundHomeLink">Return home</A>
        <div class="codeSnippet">
          <header>
            PageNotFound.tsx
          </header>
          <pre>&#60;<span class="code-identifier">div</span> <span class="code-property">className</span>=<span class="code-stringLiteral">"pageDiv"</span>&#62;</pre>
          <pre class="cursorLine">    &#123;<span class="code-comment">&#47;* TODO: implement this page *&#47;</span>&#125;</pre>
          <pre>&#60;/<span class="code-identifier">div</span>&#62;</pre>
        </div>
      </main>
    </div>
)
}
