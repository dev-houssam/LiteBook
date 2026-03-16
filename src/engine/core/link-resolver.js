
export function resolveLink(currentChapter, target){

  if(target.endsWith(".md")){
    return {
      type: "chapter",
      path: target
    }
  }

  return {
    type: "external",
    url: target
  }
}
