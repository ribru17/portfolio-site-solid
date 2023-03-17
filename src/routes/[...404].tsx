import { A, Title } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';
import './404.css';

export default function NotFound() {
  return (
    <div class='pageDiv'>
      <main class='active'>
        <Title>Page Not Found</Title>
        <HttpStatusCode code={404} />
        <h1>Page not found :(</h1>
        <A href='/' id='notFoundHomeLink'>Return home</A>
        <div class='codeSnippet'>
          <header>
            PageNotFound.tsx
          </header>
          <pre><span class="code-tag">&#60;</span><span class="code-identifier">div</span> <span class="code-property">class</span>=<span class="code-stringLiteral">"pageDiv"</span><span class="code-tag">&#62;</span></pre>
          <pre>    <span class="code-bracket">&#123;</span><span class="code-comment">&#47;* TODO: implement this page *&#47;</span><span class="code-bracket">&#125;</span><span class="cursorLine"></span></pre>
          <pre><span class="code-tag">&#60;/</span><span class="code-identifier">div</span><span class="code-tag">&#62;</span></pre>
        </div>
      </main>
    </div>
  );
}
