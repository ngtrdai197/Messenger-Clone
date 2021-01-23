import { action, computed, makeAutoObservable, observable } from 'mobx';

export class DashboardStore {
  constructor() {
    makeAutoObservable(this, {
      name: observable,
      changeNameFnc: action,
    });
  }
  public name: string = 'Dashboard messenger';

  public changeNameFnc = () => {
    this.name = this.name + ' Updated';
    console.log('this.name :>> ', this.name);
  };
}
