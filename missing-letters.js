function fearNotLetter(str) {
  let a=str.charCodeAt(0)
  for(let i=0;i<str.length;i++,a++) {
    if(str.charCodeAt(i)!==a)
      return String.fromCharCode(a)
  }
  return
}

fearNotLetter("abce");