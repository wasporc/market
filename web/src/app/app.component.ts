import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  token = {};

  constructor(){
  }

  onNavClick(event: any) {
    let target = event.target;
    // @ts-ignore
    document.querySelector('.topnav')
      .querySelectorAll('a').forEach(a=>{
        if (a.id === target.id) target.classList.add('active')
        else if (target.localName === 'a')a.classList.remove('active');
    })
  }

  ngOnInit(): void {
    let path = window.location.pathname.split('/'),
        endPoint = path[path.length-1];
    // @ts-ignore
    document.querySelector(`#${endPoint==="" ? 'home':endPoint}`)
      .classList.add('active');
  }
}
