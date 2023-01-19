import { mount, StartClient } from "solid-start/entry-client";
// import { inject } from "@vercel/analytics/";

mount(() => <StartClient />, document);
// mount(() => {
//     inject()
//     return <StartClient />
// }, document)