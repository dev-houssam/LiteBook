
export async function loadBook(fs, bookPath){

  const manifestText = fs.readFileSync(bookPath + "/book.json", "utf-8")
  const book = JSON.parse(manifestText)

  return book
}
