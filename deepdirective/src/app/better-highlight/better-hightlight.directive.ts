import { Directive, OnInit,ElementRef,Renderer2,HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{
  @Input() defaultColor = 'transparent';
  @Input('appBetterHightlight') highlightColor = 'cyan';
  @HostBinding('style.backgroundColor') bgColor: string = this.defaultColor;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    
  }
  ngOnInit(): void {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
  }
  @HostListener('mouseenter') mouseOver(eData:Event) {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','yellow');
    this.bgColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseOut(eData:Event) {
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
    this.bgColor = this.defaultColor;
  }
}
