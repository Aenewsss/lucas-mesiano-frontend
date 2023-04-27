import { DescriptionEnum } from "./description.enum"

export interface IVerticais {
    title: string,
    url: string,
    description?: DescriptionEnum
}

export interface IHorizontais {
    title: string,
    titleBorder: string,
    url: string,
    thumb: string
}

export interface ICurrentVideoMobile {
    title: string,
    url: string,
    index: number,
    description?: DescriptionEnum
}