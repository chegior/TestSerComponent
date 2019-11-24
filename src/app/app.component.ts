  import { Component } from '@angular/core';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    serverElements = [
      {type:'server',name:'TestServer1',content:'Just a Test'},
      {type:'blueprint',name:'Bp1',content:'Just a Test'},
      {type:'server',name:'TestServer2',content:'Just a Test'}];
  

      onServerAdded(serverData:{serverName:string, serverContent: string}) {
        this.serverElements.push({
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent,
          
        });
      }
     
      onBluePrintAdded(bluePrintData:{serverName:string, serverContent:string}) {
        this.serverElements.push({
          type: 'blueprint',
          name: bluePrintData.serverName,
          content: bluePrintData.serverContent
        });
      }
  }
