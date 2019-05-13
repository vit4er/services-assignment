export class CounterService {

  ActiveInactiveCount: number = 0;
  InactiveActiveCount: number = 0;

  IncAICount() {
    this.ActiveInactiveCount++;
  }

  IncIACount() {
    this.InactiveActiveCount++;
  }
}
