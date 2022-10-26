import { DemoSharedBase } from '../utils';
import { NsUrbanAirship } from '@essent/nativescript-urban-airship';

export class DemoSharedNativescriptUrbanAirship extends DemoSharedBase {
  message: string = 'ED Push test';

  registerClicked() {
    NsUrbanAirship.getInstance().registerUser('MyTestNameUserID10');
  }

  registerClickedAnotherUser() {
    NsUrbanAirship.getInstance().registerUser('MyTestNameUserID11');
  }

  registerClickedAnotherUser13() {
    NsUrbanAirship.getInstance().registerUser('MyTestNameUserID13');
  }

  registerClickedAnotherUser14() {
    NsUrbanAirship.getInstance().registerUser('MyTestNameUserID14');
  }

  optIn() {
    NsUrbanAirship.getInstance().notificationOptIn();
  }

  optOut() {
    NsUrbanAirship.getInstance().notificationOptOut();
  }

  unregisterClicked() {
    NsUrbanAirship.getInstance().unRegisterUser();
    alert('user will no longer receive notifications');
  }

  notificationStatus() {
    const status = NsUrbanAirship.getInstance().isOptIn();
    alert(`user has opt in: ${status}`);
  }

  resetBadgeCount() {
    NsUrbanAirship.getInstance().resetBadgeCount();
    alert('Badge is reset');
  }

  channelID() {
    const channelID = NsUrbanAirship.getInstance().getChannelID();
    alert(`the current channelID: ${channelID}`);
  }
}
