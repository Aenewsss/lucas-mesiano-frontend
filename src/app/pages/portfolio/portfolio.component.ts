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

  constructor() { }

  verticais: IVerticais[] = [
    {
      title: "Como é uma aula de Krav Maga",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/como-aula-krav-maga.mp4",
      description: DescriptionEnum.kravMaga
    },
    {
      title: "Lançamento | Curso Polícia Militar",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/concurso-policia.mp4",
      description:  DescriptionEnum.policia
    },
    {
      title: "Investimentos do Agronegócio",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/investimentos-agro-reels.mp4",
      description: DescriptionEnum.agro
    },
    {
      title: "Clínica de Psicologia",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/videos/versao-vertical.mp4",
      description: DescriptionEnum.clinica
    },
  ]

  horizontais: IHorizontais[] = [
    {
      titleBorder: "Consultoria",
      title: "Rafael Ferreira",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/RafaelFerreiraConsultoria.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/consultoria-rf.png"
    },
    {
      titleBorder: "Super",
      title: "Time",
      url: "https://lucasmesi.s3.sa-east-1.amazonaws.com/SuperTime.mp4",
      thumb: "https://lucasmesi.s3.sa-east-1.amazonaws.com/thumb/super-time.png"
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
  ngOnInit(): void {
  }

  prevVideo() {
    if ((this.currentVideoMobile.index - 1) < 0) {
      const length = this.verticais.length - 1
      this.currentVideoMobile.index = length;
      this.currentVideoMobile.title = this.verticais[length].title;
      this.currentVideoMobile.url = this.verticais[length].url;
      this.currentVideoMobile.description = this.verticais[length].description;
    } else {
      const newIndex = this.currentVideoMobile.index - 1;
      this.currentVideoMobile.index = newIndex;
      this.currentVideoMobile.title = this.verticais[newIndex].title;
      this.currentVideoMobile.url = this.verticais[newIndex].url;
      this.currentVideoMobile.description = this.verticais[newIndex].description;
    }

    this.videoMobile.nativeElement.pause();
    this.currentIcon = this.videoPlayed;
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

  nextVideo() {
    if ((this.currentVideoMobile.index + 1) > this.verticais.length - 1) {
      this.currentVideoMobile.index = 0;
      this.currentVideoMobile.title = this.verticais[0].title;
      this.currentVideoMobile.url = this.verticais[0].url;
      this.currentVideoMobile.description = this.verticais[0].description;
      
    } else {
      const newIndex = this.currentVideoMobile.index + 1;
      this.currentVideoMobile.index = newIndex;
      this.currentVideoMobile.title = this.verticais[newIndex].title;
      this.currentVideoMobile.url = this.verticais[newIndex].url;
      this.currentVideoMobile.description = this.verticais[newIndex].description;
      
    }
    this.videoMobile.nativeElement.pause();
    this.currentIcon = this.videoPlayed;
  }

  playOrPauseVideoDesktop(index: number) {
    const video = document.getElementById(`videoDesktop${index}`) as HTMLVideoElement;
    if (video.paused) {
      video.play();
      this.videoHorizontalPaused = false;
    }
    else {
      video.pause();
      this.videoHorizontalPaused = true;
    }
  }



}
