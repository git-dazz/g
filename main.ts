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
  let url = `https://raw.githubusercontent.com`+c.req.path;
  let txt = await fetchText(url);
  return c.text(''+txt);
})

Deno.serve(app.fetch)
