import { Observable } from '@nativescript/core';
import { BehaviorSubject } from 'rxjs';
export interface ChatConfiguration {
  automaticMessage?: string;
  font?: string;
  fontSize?: number;
  incomingMessageAvatar?: string;
  mainColor: string;
  navigationBarBackgroundColor?: string;
  navigationBarMainColor?: string;
  navigationBarTitle?: string;
}

export enum IAdvizeAuthOption {
  anonymous = 'anonymous',
  simple = 'simple',
  secured = 'secured',
}

export type IAdvizeActivationParameters = {
  projectId: number;
  authOption: IAdvizeAuthOption;
  userId: string;
  legalUrl: string | undefined;
  jweToken: string | undefined;
  onSuccess: () => void;
  onFailure: () => void;
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
