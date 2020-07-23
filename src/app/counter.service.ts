export class CounterService {
  activeSettedCounter = 0;
  inactiveSettedCounter = 0;

  toActiveCount(){
    this.activeSettedCounter++;
  }

  toInactiveCount(){
    this.inactiveSettedCounter++;
  }
}
