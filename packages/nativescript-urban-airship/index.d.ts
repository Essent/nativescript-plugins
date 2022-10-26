export * from './common';

import { UrbanAirshipSettings, CommonUrbanAirship } from './common';
export declare class NsUrbanAirship implements CommonUrbanAirship {
    static instance: NsUrbanAirship;
    constructor();
    static getInstance(): NsUrbanAirship;
    startUp(urbanAirshipSettings: UrbanAirshipSettings, _application: any): void;
    registerUser(userId: string): void;
    unRegisterUser(): void;
    notificationOptIn(): Promise<boolean>;
    notificationOptOut(): Promise<boolean>;
    private setOptIn;
    isOptIn(): boolean;
    getChannelID(): string;
    setNotificationDelegate(delegate: any): void;
    setDeepLinkDelegate(delegate: any): void;
    getRegistrationToken(): string;
    resetBadgeCount(): void;
    private pushIsValid;
    openPreferenceCenter(id: string): void;
}

