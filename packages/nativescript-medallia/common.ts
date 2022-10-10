import { Observable } from '@nativescript/core';
import { BehaviorSubject } from 'rxjs';

export class Common extends Observable {

  private static medalliaState$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {
    super();
  }

  protected static onApiInitError(errorMessage: string): void {
    console.error('An error while initializing Medallia: ' + errorMessage);
    this.medalliaState$.error(errorMessage);
  }

  protected static onApiInitSuccess(): void {
    console.info('Medallia API initialized successfuly!');
    this.medalliaState$.next(true);
  }

  public static getMedalliaState(): BehaviorSubject<boolean> {
    return this.medalliaState$;
  }
}
