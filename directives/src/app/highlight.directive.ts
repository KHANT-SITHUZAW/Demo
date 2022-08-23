import {  Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = '';
  
  constructor(private el: ElementRef) {

    el.nativeElement.style.color = "white";
    el.nativeElement.style.background= "black";
  }

  highlight(value:string) {
    this.el.nativeElement.style.color = value;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight("white");
  }
}
