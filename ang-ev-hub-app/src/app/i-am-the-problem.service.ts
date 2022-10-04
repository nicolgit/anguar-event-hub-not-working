import { Injectable } from '@angular/core';
import { EventHubConsumerClient } from "@azure/event-hubs";

@Injectable({
  providedIn: 'root'
})
export class IAmTheProblemService {
  private consumer: any;

  constructor() { 
  }

  doSomething() {
  }

  doSomethingElse() {
    this.consumer = new EventHubConsumerClient("myeventhubconnstring", "myeventhubname");
  }
}
