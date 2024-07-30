import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  
  return c.text('Hello Hono!')
})
async function fetchText(url, opt) {
    console.info(url);
    let gap = "  ";
    let resp = await fetch(url, opt || {});
    let txt = await resp.text();
    console.log(gap, resp.status, resp.statusText);
    console.log(gap, txt, "\n");
    return txt;
}

app.get('/*', (c) => {
  // https://raw.githubusercontent.com/git-dazz/dist/main/deno/fast.ts
  
  return c.text(''+c.req.url)
})

Deno.serve(app.fetch)
