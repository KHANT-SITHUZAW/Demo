import { Directive, OnInit,ElementRef,Renderer2,HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{
  @HostBinding('style.backgroundColor') bgColor!: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    
  }
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
  }
  @HostListener('mouseenter') mouseOver(eData:Event) {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
    this.bgColor = "yellow";
  }
  @HostListener('mouseleave') mouseOut(eData:Event) {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.bgColor = "transparent";
  }
}
