import { Injectable } from '@angular/core';
import { EventHubConsumerClient } from "@azure/event-hubs";

@Injectable({
  providedIn: 'root'
})
export class IAmTheProblemService {
  private consumer: any;

  constructor() { 
    this.consumer = new EventHubConsumerClient("myeventhubconnstring", "myeventhubname");
  }

  doSomething() {
  }
}
