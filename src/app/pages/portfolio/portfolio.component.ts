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
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/C%C3%B3pia+de+Agrobras%C3%ADlia+-+L%C3%A9o+Mendes.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/Agroneg%C3%B3cio+-+Leo+Mendes.png"
    },
    {
      id: "video2",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/C%C3%B3pia+de+Arquiteta+-+Fl%C3%A1via+Cristina.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/Arquiteta+-+Fl%C3%A1via+Cristina.png"

    },
    {
      id: "video3",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/C%C3%B3pia+de+Dicas+para+deixar+o+quarto+mais+aconchegante.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/Dicas+Arq+-+Fl%C3%A1via+Cristina.png"

    },
    {
      id: "video4",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/Depois+que+voce%CC%82+agendar+a+sua+aula+Finalizado.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/Krav+Maga+-+Rodrigo+Neri.png"
    },
    {
      id: "video5",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/C%C3%B3pia+de+Lan%C3%A7amento+de+curso+-+Mariana+Del+Monte.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/Psicologia+-+Mariana+Del+Monte.png"

    },
    {
      id: "video6",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/C%C3%B3pia+de+Publi+-+Petrobras.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/Publi+petrobras.png"
    },
  ]

  currentVideoMobile: ICurrentVideoMobile = {
    title: this.verticais[0].title,
    url: this.verticais[0].url,
    description: this.verticais[0].description,
    index: 0
  }

  videoPaused: string = "../../../assets/icons/pause.svg";
  videoPlayed: string = "../../../assets/icons/play.svg";

  videoHorizontalPaused: boolean = true;

  currentIcon: string = this.videoPlayed;

  initialTranslate: number = 400;
  screenCenter: number = window.innerWidth / 2;

  ngOnInit(): void {
    this.checkCardActive()
  }

  playOrPauseVideo() {
    const video = this.videoMobile.nativeElement as HTMLVideoElement
    if (video.paused) {
      this.videoMobile.nativeElement.play();
      this.currentIcon = this.videoPaused;
    }
    else {
      this.videoMobile.nativeElement.pause();
      this.currentIcon = this.videoPlayed;
    }
  }

  checkCardActive(){
    const event = {target: { id: "video3"}}
    // this.videoClicked(event)
  }

  videoClicked(event: any) {
    const elementId = event.target.id;

    const portfolioCards = document.querySelectorAll<HTMLElement>(".card-portfolio")
    const currentCard = Object.values(portfolioCards).filter(el => el.children[0].id == elementId)[0]

    const centerDistance = this.screenCenter - currentCard.getBoundingClientRect().x
    const elementWidth = 153
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

  hoverVideo(event:any){
    let video = document.getElementById(event.target.id)!

    if(video.hasAttribute("controls")) video.removeAttribute("controls")
    else video.setAttribute("controls", "controls")
  }

  outVideo(event: any){
    let video = document.getElementById(event.target.id)!
    if(video.hasAttribute("controls")) video.removeAttribute("controls")
  }

}
