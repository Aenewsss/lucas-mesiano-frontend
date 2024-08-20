import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICurrentVideoMobile, IHorizontais, IVerticais } from './types';
import { DescriptionEnum } from './description.enum';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  @ViewChild('videoMobile') videoMobile: any;

  constructor() {

  }

  verticais: IVerticais[] = [
    {
      id: "video1",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/C%C3%B3pia+de+Lan%C3%A7amento+de+curso+-+Mariana+Del+Monte.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/Psicologia+-+Mariana+Del+Monte.png",
      controlsId: "1"
    },
    {
      id: "video2",
      url: "../../../assets/videos/4-compostos-para-imunidade.mp4",
      thumb: "../../../assets/thumbs/4-compostos-para-imunidade.png",
      controlsId: "2"

    },
    {
      id: "video3",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/C%C3%B3pia+de+Arquiteta+-+Fl%C3%A1via+Cristina.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/Arquiteta+-+Fl%C3%A1via+Cristina.png",
      controlsId: "3"

    },
    {
      id: "video4",
      url: "../../../assets/videos/tipos-de-treinamentos.mp4",
      thumb: "../../../assets/thumbs/tipos-de-treinamentos.png",
      controlsId: "4"
    },
    {
      id: "video5",
      url: "../../../assets/videos/eu-vendo-coragem.mp4",
      thumb: "../../../assets/thumbs/eu-vendo-coragem.png",
      controlsId: "5"

    },
    {
      id: "video6",
      url: "../../../assets/videos/apresentacao-equipe-duuck-finalizado.mp4",
      thumb: "../../../assets/thumbs/apresentacao-equipe-duuck-finalizado.png",
      controlsId: "6"
    },
    {
      id: "video7",
      url: "../../../assets/videos/treino-dos-graduados.mp4",
      thumb: "../../../assets/thumbs/treino-dos-graduados.png",
      controlsId: "7"
    },
    {
      id: "video8",
      url: "../../../assets/videos/teaser.mp4",
      thumb: "../../../assets/thumbs/teaser.png",
      controlsId: "6"
    },
  ]

  currentVideoMobile: ICurrentVideoMobile = {
    title: this.verticais[0].title,
    url: this.verticais[0].url,
    description: this.verticais[0].description,
    index: 0
  }

  videoPaused: string = "../../../../assets/icons/pause.svg";
  videoPlayed: string = "../../../../assets/icons/play.svg";

  videoHorizontalPaused: boolean = true;

  currentIcon: string = this.videoPlayed;

  initialTranslate: number = 400;
  screenCenter: number = window.innerWidth / 2;

  ngOnInit(): void {
    this.checkCardActive()
  }

  playOrPauseVideo(videoId: string) {
    const video = document.getElementById(videoId) as any

    const controlsIdNumber = videoId[videoId.length - 1]

    const playIcon = document.getElementById(`play${controlsIdNumber}`)!
    const pauseIcon = document.getElementById(`pause${controlsIdNumber}`)!
    if (video.paused) {
      pauseIcon.style.opacity = "1"
      playIcon.style.opacity = "0"
      video.play()
    } else {
      pauseIcon.style.opacity = "0"
      playIcon.style.opacity = "1"
      video.pause()
    }

  }

  checkCardActive() {
    const event = { target: { id: "video3" } }
    setTimeout(() => {

      this.videoClicked(event)
      this.playOrPauseVideo(event.target.id)
    }, 1000)
  }

  videoClicked(event: any) {
    const elementId = event.target.id;

    this.pauseOtherVideosPlaying(elementId)
    
    this.translateVideo(elementId)
    
    this.playOrPauseVideo(elementId)
  }

  translateVideo(elementId: string) {
    const portfolioCards = document.querySelectorAll<HTMLElement>(".card-portfolio")
    const currentCard = Object.values(portfolioCards).filter(el => el.children[0].id == elementId)[0]

    const centerDistance = this.screenCenter - currentCard.getBoundingClientRect().x
    const elementWidth = this.screenCenter < 760 ? 102 : 153
    const centerPosition = centerDistance - elementWidth;

    const lastCardActive = document.querySelector(".card-active")!
    lastCardActive.classList.remove("card-active")

    currentCard.classList.add("card-active")

    portfolioCards.forEach(el => {
      const currentTransformX = new WebKitCSSMatrix(getComputedStyle(el).transform).m41;
      if (el != currentCard) el.style.transform = `translateX(${currentTransformX + centerPosition}px) scale(0.9)`
      else el.style.transform = `translateX(${currentTransformX + centerPosition}px)`
    })
  }

  hoverVideo(event: any) {
    let video = document.getElementById(event.target.id)! as any

    const controlsIdNumber = event.target.id[event.target.id.length - 1]

    const playIcon = document.getElementById(`play${controlsIdNumber}`)!


    if (video.paused) {
      playIcon.style.opacity = "1"
    }

  }

  outVideo(event: any) {
    let video = document.getElementById(event.target.id)! as any
    video.pause()

    const controlsIdNumber = event.target.id[event.target.id.length - 1]
    const playIcon = document.getElementById(`play${controlsIdNumber}`)!
    const pauseIcon = document.getElementById(`pause${controlsIdNumber}`)!

    playIcon.style.opacity = "0"
    pauseIcon.style.opacity = "0"

    video.src = "asdas"
    video.src = this.verticais.filter(el => el.id === event.target.id)[0].url
  }

  pauseOtherVideosPlaying(videoId: string) {
    console.log(videoId)
    const videos = document.querySelectorAll(".portfolio-video")

    videos.forEach((video: any) => {
      if(videoId !== video.id){
        video.pause()
        this.outVideo({target: { id: video.id }})
      }
    })
  }

}
