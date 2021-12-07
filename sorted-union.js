function uniteUnique(arr) {
  let a = Array.prototype.slice.call(arguments);
  let b = [...a[0]]
  for(let i=1;i<a.length;i++) 
    for(let j=0;j<a[i].length;j++) 
      if(!b.includes(a[i][j])) 
        b.push(a[i][j])
  return b
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])