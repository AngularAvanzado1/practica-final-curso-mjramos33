import { Component ,EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { HistoryService } from './history.service';
import { SwUpdate,UpdateAvailableEvent, SwPush } from '@angular/service-worker';

@Component({
  selector: 'ab-world-app-root',
  templateUrl: './app.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class AppComponent {
  title = 'world-app';
  navegaciones=0;
  history=[];


  constructor(private historyService:HistoryService, private swUpdate:SwUpdate, private swPush:SwPush){
  
    //PWA: Service-Worker: subscripcion a servicio swUpdate para detectar actualizaciones en version de app
    this.checkVersionUpdate();
  
    //PWA: suscripcion a servidor de mensajería de terceros
    // this.subscribeTonotifications();

    //nos suscribimos a los cambios en el contador de navegaciones

    this.historyService.navCounter$.subscribe({
      next:counter=>{
        console.log("[AppComponent]navCounter-->DETECCION CAMBIOS ONPUSH");
        this.navegaciones=counter;
      }
    });//subscribe
    
    //nos suscribimos a los cambios en el historial
    this.historyService.history$.subscribe({
        next:h=>{
          console.log("[AppComponent]history-->DETECCION CAMBIOS ONPUSH");
          this.history=h;
        }
    });//subscribe


  }//constructor


  //PWA: Service-Worker: subscripcion a servicio swUpdate
  //para detectar actualizaciones en version de app
  private checkVersionUpdate(){

    if(this.swUpdate.isEnabled){
      this.swUpdate.checkForUpdate().then(data=>console.log(data));
      this.swUpdate.available.subscribe(
        (event:UpdateAvailableEvent)=>{
          const appData:any=event.current.appData;
          const msg= `Version ${appData.version} available.Do you want to update?`;
          if(confirm(msg)){
            window.location.reload();
          } //confirm
        }//function
      );//subscribe
   }//if swUpdate.isEnabled

  }//checkVersionUpdate

  //PWA: suscripcion a servidor de mensajería de terceros
  private subscribeTonotifications(){
    if(this.swPush.isEnabled){
      //suscripcion a servidor de mensajería..normalmente de pago
      //no tenemos esa clave publica del servidor por lo que no nos va a funcionar pero se haría aqui
      this.swPush.requestSubscription({ serverPublicKey: 'VAPID_PUBLIC_KEY' })
      .then(sub => {
            console.log('subscription to server', sub.toJSON());
            this.swPush.messages.subscribe(msg => console.log('Received: ', msg));
      })
      .catch(err => console.error('Could not subscribe', err));

    }//if
  }//subscribeTonotifications

}
