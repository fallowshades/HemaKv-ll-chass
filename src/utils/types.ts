type MovieTHEMOVIADE = {
  page: number
  total_pages: number
  total_results: number
  results: books[]
}

export type bookState = {
  books: any
  isloading: boolean
  error: any
}

export type books = {
  adult: false
  backdrop_path: string
  genre_ids: Number[]
  id: Number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const mockApiResponse = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
      genre_ids: [28, 12, 878],
      id: 533535,
      original_language: 'en',
      title: 'The Tomorrow War',
      overview:
        'An ordinary family man is recruited to fight in a future war where the fate of humanity relies on his ability to confront his past.',
      popularity: 162.162,
      poster_path: '/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg',
      release_date: '2021-07-02',
      vote_average: 8.0,
      vote_count: 1234,
    },
    {
      adult: false,
      backdrop_path: '/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg',
      genre_ids: [28, 35],
      id: 917496,
      original_language: 'en',
      title: 'Jungle Cruise',
      overview:
        'Based on the famous Disneyland ride, Jungle Cruise is a rollicking adventure through the jungles of South America.',
      popularity: 124.674,
      poster_path: '/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg',
      release_date: '2021-07-30',
      vote_average: 7.5,
      vote_count: 2500,
    },
    {
      adult: false,
      backdrop_path: '/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg',
      genre_ids: [16, 35, 10751],
      id: 933260,
      original_language: 'en',
      title: 'Space Jam: A New Legacy',
      overview:
        'Basketball champion LeBron James teams up with Bugs Bunny and the Looney Tunes for a high-stakes basketball game.',
      popularity: 132.392,
      poster_path: '/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg',
      release_date: '2021-07-16',
      vote_average: 6.8,
      vote_count: 3000,
    },
    // Add more items here to reach a total of 20 mock entries...
  ],
  total_pages: 50886,
  total_results: 1017703,
}
