import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  breakpoint = 3;
  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 400 ? 1 : 3;
  }

  onResize(event: any) {
    console.log(event)
    this.breakpoint = event.target.innerWidth <= 400 ? 1 : 3;
  }

pages =[
  "Home",
  "New",
  "Popular",
  "Trending",
  "Categories",
]

  news = [
    {
      title: 'Hydrogen VS Electric Cars',
      describe: 'Will hydrogen-fueled cars ever catch up to EVs?',
    },
    {
      title: 'The Downsides of AI Artistry',
      describe:
        'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      title: 'Is VC Funding Drying Up?',
      describe:
        'Private funding by VC firms is down 50% YOY. We take a look at what that means',
    },
  ];

  newsCard = [
    {
      title: 'Reviving Retro PCs',
      describe: 'What happens when old PCs are given modern upgrades?',
      src: 'assets/images/image-retro-pcs.jpg',
    },
    {
      title: 'Top 10 Laptops of 2022',
      describe: 'Our best picks for various needs and budgets.',
      src: 'assets/images/image-top-laptops.jpg',
    },
    {
      title: 'The Growth of Gaming',
      describe: 'How the pandemic has sparked fresh opportunities.',
      src: 'assets/images/image-gaming-growth.jpg',
    },
  ];
}
