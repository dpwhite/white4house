import { Component, OnInit } from '@angular/core';

@Component(
{
    selector: 'my-positions', 
    templateUrl: './positions.component.html'
})

export class PositionsComponent implements OnInit {

        ngOnInit(): void {
            // tslint:disable-next-line:no-var-keyword
            var b = document.querySelector('body');
            b.setAttribute('background-image', 'url("./img/texas.png")');
        }
}