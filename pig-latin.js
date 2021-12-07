function translatePigLatin(str) {
  let a=["a",'e','i','o','u']
  if(a.some(p=>p===str.charAt(0))) {
    return str+"way"
  }
  else
  for(let i=1;i<str.length;i++) {
    if(a.some(p=>p===str.charAt(i)))
      return str.substring(i)+str.substring(0,i)+"ay"
  }
  return str+"ay"
}

translatePigLatin("consonant")