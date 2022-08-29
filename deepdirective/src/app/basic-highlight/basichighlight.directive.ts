import { Directive ,ElementRef,OnInit} from '@angular/core';

@Directive({
  selector: '[appBasichighlight]'
})
export class BasichighlightDirective implements OnInit{

  constructor(private el: ElementRef) { 
    
  }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = "pink";
  }

}
