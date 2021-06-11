import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  htmlElement: ElementRef<HTMLElement>;
 // @Input() color: string = 'red';

  private _color: string = 'red';
  @Input() set color( valor: string ){
    this.htmlElement.nativeElement.style.color = valor;
    this._color = valor;
  };

  //@Input() mensaje: string = 'campo obligatorio';

  private _mensaje: string = 'campo obligatorio';
  @Input() set mensaje(valor: string){
    this.htmlElement.nativeElement.innerText = valor;
    this._mensaje = valor;
  }

  @Input() set valido(valor: boolean){
    if(valor){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else {
        this.htmlElement.nativeElement.classList.remove('hidden');
    }
  }

  constructor( private el: ElementRef<HTMLElement>) { 
    // console.log('constructor directive');
    // console.log(el);

    this.htmlElement = el;    

  }
  
  ngOnInit(): void {
    // console.log('NgOnInit directive');
    this.setColor();
    this.setMensaje();
  }

  ngOnChanges(changes: SimpleChanges): void {     

    // if( changes.mensaje ){
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }
    
    // if( changes.color ){
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

    // console.log(changes);

  }

  setColor(): void{
    this.htmlElement.nativeElement.style.color = this._color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
