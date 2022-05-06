export interface INews {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    imageUrl: string,
    newsSite: string,
    summary: string,
    publishedAt: string,
    launches: ILaunches[],
    events: IEvents[]
}

interface ILaunches {
  id: string,
  provider: string
}

interface IEvents {
  id: number,
  provider: string
}