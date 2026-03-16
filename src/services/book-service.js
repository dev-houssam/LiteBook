
import engine from "../engine/index.js"

export async function openBook(path){
  return engine.loadBook(window.api, path)
}
