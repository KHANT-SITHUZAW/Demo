import { Directive,ElementRef,HostListener ,OnInit,Input} from '@angular/core';

@Directive({
  selector: '[appRedEl]'//must be same name
})
export class RedElDirective {
  //@Input() appRedEl = '';//must be same name with @Input
  constructor(private el: ElementRef) {

    el.nativeElement.style.color = "red";
  }
  
  @HostListener('mouseenter') onMouseEnter() {
     
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {

    this.highlight('');
  }
  
  private highlight(color: string) {

    this.el.nativeElement.style.backgroundColor = color;
  }
}
