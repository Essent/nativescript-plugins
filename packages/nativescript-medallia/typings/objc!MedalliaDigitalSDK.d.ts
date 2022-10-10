
declare const enum MDAppearanceMode {

	Light = 0,

	Dark = 1,

	Unknown = 2
}

interface MDCustomInterceptDelegate {

	targetEvaluationDidSuccessWithCustomInterceptDelegateData?(customInterceptDelegateData: MDCustomInterceptDelegateData): void;
}
declare var MDCustomInterceptDelegate: {

	prototype: MDCustomInterceptDelegate;
};

declare class MDCustomInterceptDelegateData extends NSObject {

	static alloc(): MDCustomInterceptDelegateData; // inherited from NSObject

	static new(): MDCustomInterceptDelegateData; // inherited from NSObject

	engagementId: string;

	engagementType: MDEngagementType;

	formPreloadTimestamp: number;

	payload: MDCustomInterceptPayload;

	targetingEvaluationTimestamp: number;
}

declare class MDCustomInterceptPayload extends NSObject {

	static alloc(): MDCustomInterceptPayload; // inherited from NSObject

	static new(): MDCustomInterceptPayload; // inherited from NSObject

	declineText: string;

	deferText: string;

	provideFeedbackText: string;

	subtitleText: string;

	titleText: string;
}

declare const enum MDEngagementType {

	Form = 0,

	AppRating = 1
}

declare class MDExternalError extends NSObject {

	static alloc(): MDExternalError; // inherited from NSObject

	static new(): MDExternalError; // inherited from NSObject

	message: string;

	statusCode: number;
}

interface MDFeedbackDelegate {

	feedbackDidSubmitWithFeedbackDelegateData?(feedbackDelegateData: MDFeedbackDelegateData): void;
}
declare var MDFeedbackDelegate: {

	prototype: MDFeedbackDelegate;
};

declare class MDFeedbackDelegateData extends NSObject {

	static alloc(): MDFeedbackDelegateData; // inherited from NSObject

	static new(): MDFeedbackDelegateData; // inherited from NSObject

	feedbackClientCorrelationId: string;

	payload: NSDictionary<string, any>;

	timestamp: number;
}

interface MDFormDelegate {

	formDidBlockExternalUrlWithFormDelegateData?(formDelegateData: MDFormDelegateData): void;

	formDidCloseWithFormDelegateData?(formDelegateData: MDFormDelegateData): void;

	formDidDismissWithFormDelegateData?(formDelegateData: MDFormDelegateData): void;

	formDidDisplayWithFormDelegateData?(formDelegateData: MDFormDelegateData): void;

	formDidLinkSelectWithFormDelegateData?(formDelegateData: MDFormDelegateData): void;

	formDidSubmitWithFormDelegateData?(formDelegateData: MDFormDelegateData): void;

	formDidThankYouPromptWithFormDelegateData?(formDelegateData: MDFormDelegateData): void;
}
declare var MDFormDelegate: {

	prototype: MDFormDelegate;
};

declare class MDFormDelegateData extends NSObject {

	static alloc(): MDFormDelegateData; // inherited from NSObject

	static new(): MDFormDelegateData; // inherited from NSObject

	engagementId: string;

	formHeaderAppearanceDisplay: MDAppearanceMode;

	formHeaderAppearanceSet: MDAppearanceMode;

	formLocaleDisplay: string;

	formLocaleSet: string;

	formTriggerType: MDFormTriggerType;

	isBlocked: boolean;

	timestamp: number;

	url: string;
}

declare const enum MDFormTriggerType {

	Code = 0,

	Invite = 1
}

declare const enum MDInterceptActionType {

	Accepted = 0,

	Declined = 1,

	Deferred = 2,

	Skipped = 3
}

interface MDInterceptDelegate {

	interceptDidAcceptWithInterceptDelegateData?(interceptDelegateData: MDInterceptDelegateData): void;

	interceptDidCloseWithInterceptDelegateData?(interceptDelegateData: MDInterceptDelegateData): void;

	interceptDidDeclineWithInterceptDelegateData?(interceptDelegateData: MDInterceptDelegateData): void;

	interceptDidDeferWithInterceptDelegateData?(interceptDelegateData: MDInterceptDelegateData): void;

	interceptDidDisplayWithInterceptDelegateData?(interceptDelegateData: MDInterceptDelegateData): void;

	interceptDidTriggerSKStoreReviewControllerWithInterceptDelegateData?(interceptDelegateData: MDInterceptDelegateData): void;
}
declare var MDInterceptDelegate: {

	prototype: MDInterceptDelegate;
};

declare class MDInterceptDelegateData extends NSObject {

	static alloc(): MDInterceptDelegateData; // inherited from NSObject

	static new(): MDInterceptDelegateData; // inherited from NSObject

	appearanceDisplay: MDAppearanceMode;

	appearanceSet: MDAppearanceMode;

	engagementId: string;

	engagementType: MDEngagementType;

	timestamp: number;
}

declare const enum MDLogLevel {

	Off = 0,

	Fatal = 1,

	Error = 2,

	Warn = 3,

	Info = 4,

	Debug = 5
}

declare const enum MDSDKFrameworkType {

	Native = 0,

	ReactNative = 1,

	Cordova = 2
}

declare class MedalliaDigital extends NSObject {

	static alloc(): MedalliaDigital; // inherited from NSObject

	static closeEngagementWithSuccessFailure(success: () => void, failure: (p1: MDExternalError) => void): void;

	static customInterceptTriggerWithEngagementIdActionTypeFailure(engagementId: string, actionType: MDInterceptActionType, failure: (p1: MDExternalError) => void): void;

	static disableIntercept(): void;

	static enableIntercept(): void;

	static handleNotificationSuccessFailure(formId: string, success: () => void, failure: (p1: MDExternalError) => void): void;

	static new(): MedalliaDigital; // inherited from NSObject

	static revertStopSDK(): void;

	static sdkInitWithTokenSuccessFailure(token: string, success: () => void, failure: (p1: MDExternalError) => void): void;

	static setCustomAppearance(appearanceMode: MDAppearanceMode): void;

	static setCustomInterceptDelegate(customInterceptDelegate: MDCustomInterceptDelegate): void;

	static setCustomParameterWithNameValue(name: string, value: any): void;

	static setCustomParameters(parameters: NSDictionary<string, any>): void;

	static setDebugForm(debug: boolean): void;

	static setFeedbackDelegate(feedbackDelegate: MDFeedbackDelegate): void;

	static setFormDelegate(formDelegate: MDFormDelegate): void;

	static setInterceptDelegate(interceptDelegate: MDInterceptDelegate): void;

	static setLogLevel(logLevel: MDLogLevel): void;

	static setSdkFramework(mdSdkFrameworkType: MDSDKFrameworkType): void;

	static showFormSuccessFailure(formId: string, success: () => void, failure: (p1: MDExternalError) => void): void;

	static stopSDKWithClearData(clearData: boolean): void;

	static updateCustomLocaleSuccessFailure(locale: string, success: (p1: string) => void, failure: (p1: MDExternalError) => void): void;
}
