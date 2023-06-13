import { Observable } from '@nativescript/core';
import { BehaviorSubject } from 'rxjs';
export interface ChatConfiguration {
  automaticMessage: string;
  font: string;
  fontSize: number;
  incomingMessageAvatar: string;
  mainColor: string;
  navigationBarBackgroundColor: string;
  navigationBarMainColor: string;
  navigationBarTitle: string;
}

export class IAdvizeCommon extends Observable {
  private static chatbotActivated$ = new BehaviorSubject<boolean>(false);

  constructor() {
    super();
  }

  protected static activateChatbot(): void {
    this.chatbotActivated$.next(true);
  }

  protected static deactivateChatbot(): void {
    this.chatbotActivated$.next(false);
  }

  protected static getChatbotActivated(): BehaviorSubject<boolean> {
    return this.chatbotActivated$;
  }
}
