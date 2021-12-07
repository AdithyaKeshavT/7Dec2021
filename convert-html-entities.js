function convertHTML(str) {
  let a = {
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&apos;"
  }
  str=str.replace(/&|<|>|\"|'/g,b=>a[b])
  return str
}
convertHTML("Hamburgers < Pizza < Tacos")