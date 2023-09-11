import { DemoSharedBase } from '../utils';
import { IAdvize, ChatConfiguration } from '@essent/nativescript-iadvize';

export class DemoSharedNativescriptIadvize extends DemoSharedBase {
  onLogin() {
    IAdvize.getInstance().activate(
      1111,
      'userId',
      '',
      () => {
        IAdvize.getInstance().activateTargetingRule('XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX');

        const configuration: ChatConfiguration = {
          automaticMessage: 'Any question? Say Hello to Smart and we will answer you as soon as possible! 😊',
          font: '',
          incomingMessageAvatar: 'lighthouse',
          mainColor: '#4103fc',
          navigationBarBackgroundColor: '#4103fc',
          navigationBarMainColor: '#ffffff',
          navigationBarTitle: 'Test Title',
        };
        IAdvize.getInstance().hideDefaultChatButton();
        IAdvize.getInstance().customize(configuration);
        IAdvize.getInstance().registerConversationListener(
          (url: string) => {
            console.log('Handle clicked url - ' + url);
            IAdvize.getInstance().dismissChat();
            return false;
          },
          (hasOngoingConversation: boolean) => {
            console.log('Ongoing conversation status changed - ' + hasOngoingConversation);
          },
          (content: string) => {
            console.log('New message received: ' + content);
          }
        );
      },
      () => {
        console.warn('Activation failed!');
      }
    );
  }

  onShowChat() {
    IAdvize.getInstance().presentChat();
  }

  onLogout() {
    IAdvize.getInstance().logout();
  }
}
