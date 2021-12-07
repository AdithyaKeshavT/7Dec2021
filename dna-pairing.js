function pairElement(str) {
  let q = str.split("")
  let p = []
  for(let i=0;i<q.length;i++) {
    let a=[]
    a.push(q[i])
    if(q[i]=='G')
      a.push('C')
    if(q[i]=='C')
      a.push('G')
    if(q[i]=='A')
      a.push('T')
    if(q[i]=='T')
      a.push('A')
    p.push(a)
  }
  return p
}

pairElement("GCG")