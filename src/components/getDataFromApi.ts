interface Item {
  id: number,
  name: string,
  status: string,
  species: string,
  gender: string,
  location: { name: string },
  image: string
}

export default class Items {
  getItems(): Promise<Item[]> {
    return fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(res => res.results)
  }
}
