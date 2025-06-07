export interface INews {
    id: number,
    featured: boolean,
    title: string,
    url: string,
    image_url: string,
    news_site: string,
    summary: string,
    published_at: string,
    updated_at: string,
    launches: ILaunches[],
    events: IEvents[]
}

interface ILaunches {
  launch_id: string,
  provider: string
}

interface IEvents {
  event_id: number,
  provider: string
}