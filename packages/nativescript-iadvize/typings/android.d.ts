
declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class IAdvizeSDK {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK>;
					public static INSTANCE: com.iadvize.conversation.sdk.IAdvizeSDK;
					public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption): void;
					public static setLogLevel(param0: com.iadvize.conversation.sdk.feature.logger.Logger.Level): void;
					public getSdkScope$sdk_clientRelease(): E.b;
					public getNotificationController(): com.iadvize.conversation.sdk.feature.notification.NotificationController;
					public getEnvironment$sdk_clientRelease(): com.iadvize.conversation.sdk.h;
					public getDefaultFloatingButtonControllerImpl$sdk_clientRelease(): m.c;
					public getTransactionControllerImpl$sdk_clientRelease(): w.a;
					public getGraphQLApi$sdk_clientRelease(): n.a;
					public setJweProvider$sdk_clientRelease(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider): void;
					public setEnvironment$sdk_clientRelease(param0: com.iadvize.conversation.sdk.h): void;
					public getVisitorController(): com.iadvize.conversation.sdk.feature.visitor.VisitorController;
					public getJweProvider$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider;
					public getConversationControllerImpl$sdk_clientRelease(): f.g;
					public clear$sdk_clientRelease(): void;
					public uiSdkScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
					public withActivatedSdk$sdk_clientRelease(param0: string, param1: any, param2: any): void;
					public getVisitorControllerImpl$sdk_clientRelease(): y.a;
					public static logout(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
					public getNotificationControllerImpl$sdk_clientRelease(): r.a;
					public getTargetingController(): com.iadvize.conversation.sdk.feature.targeting.TargetingController;
					public static getLogLevel(): com.iadvize.conversation.sdk.feature.logger.Logger.Level;
					public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption, param2: com.iadvize.conversation.sdk.feature.gdpr.GDPROption): void;
					public getDefaultFloatingButtonController(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController;
					public eventBusScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
					public getSatisfactionApi$sdk_clientRelease(): t.b;
					public static initiate(param0: globalAndroid.app.Application): void;
					public getTrackingApi$sdk_clientRelease(): v.c;
					public getTargetingControllerImpl$sdk_clientRelease(): u.a;
					public ioSdkScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
					public getConversationController(): com.iadvize.conversation.sdk.feature.conversation.ConversationController;
					public getConversationChannel$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
					public getTransactionController(): com.iadvize.conversation.sdk.feature.transaction.TransactionController;
					public getActivationStatus(): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
					public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption, param2: com.iadvize.conversation.sdk.feature.gdpr.GDPROption, param3: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
					public getChatboxController(): com.iadvize.conversation.sdk.feature.chatbox.ChatboxController;
					public getChatboxControllerImpl$sdk_clientRelease(): d.b;
					public setActivationStatus$sdk_clientRelease(param0: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus): void;
				}
				export module IAdvizeSDK {
					export class ActivationException {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException>;
						public constructor();
						public getDescription(): string;
						public constructor(param0: string);
					}
					export class ActivationStatus {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus>;
						public static OFF: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
						public static INITIALIZED: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
						public static ACTIVATING: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
						public static ACTIVATED: com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus>;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
					}
					export class Callback {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.Callback>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation.sdk.IAdvizeSDK$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(): void;
							onFailure(param0: java.lang.Throwable): void;
						});
						public constructor();
						public onFailure(param0: java.lang.Throwable): void;
						public onSuccess(): void;
					}
					export class InvalidConversationException {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidConversationException>;
						public constructor(param0: string);
					}
					export class InvalidJwtException {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidJwtException>;
						public constructor();
					}
					export class InvalidProjectIdException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidProjectIdException>;
						public constructor();
						public constructor(param0: string);
					}
					export class InvalidUserIdException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidUserIdException>;
						public constructor();
						public constructor(param0: string);
					}
					export class NotActivatedException {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.NotActivatedException>;
						public constructor();
					}
					export class NotInitiatedException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.NotInitiatedException>;
						public constructor();
						public constructor(param0: string);
					}
					export class UserAuthenticationException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.UserAuthenticationException>;
						public constructor();
						public constructor(param0: string);
					}
					export class a extends com.iadvize.conversation.sdk.feature.targeting.TargetingListener {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.a>;
						public onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.b>;
						public constructor();
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.c>;
						public constructor(param0: string);
					}
					export class d {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.d>;
						public constructor();
					}
					export class e {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.e>;
					}
					export class f extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.f>;
						public create(param0: any, param1: any): any;
						public invoke(param0: any, param1: any): any;
						public invokeSuspend(param0: any): any;
					}
					export module f {
						export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.f.a>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
						export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.f.b<any>>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
					export class g extends com.iadvize.conversation.sdk.IAdvizeSDK.Callback {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.g>;
						public onFailure(param0: java.lang.Throwable): void;
						public onSuccess(): void;
					}
					export class h {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.h>;
						public constructor(param0: kotlinx.coroutines.CoroutineExceptionHandler.Key);
						public handleException(param0: any, param1: java.lang.Throwable): void;
					}
					export class i extends java.lang.Object implements any  {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.i>;
						public static a: com.iadvize.conversation.sdk.IAdvizeSDK.i;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class a extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.a.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.a>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public constructor(param0: number, param1: com.apollographql.apollo3.api.Optional<string>);
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.a.a>;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public b(): com.apollographql.apollo3.api.Optional<string>;
					public hashCode(): number;
					public a(): number;
					public id(): string;
				}
				export module a {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.a.a>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.a.b);
						public a(): com.iadvize.conversation.sdk.a.b;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.a.b>;
						public constructor(param0: com.iadvize.conversation.sdk.a.c);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): com.iadvize.conversation.sdk.a.c;
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.a.c>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class b extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.b.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.b>;
					public name(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.b.a>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public b(): number;
					public toString(): string;
					public constructor(param0: number, param1: string, param2: com.apollographql.apollo3.api.Optional<string>);
					public a(): string;
					public c(): com.apollographql.apollo3.api.Optional<string>;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module b {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.b.a>;
						public constructor(param0: com.iadvize.conversation.sdk.b.b);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): com.iadvize.conversation.sdk.b.b;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.b.b>;
						public constructor(param0: com.iadvize.conversation.sdk.b.c);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): com.iadvize.conversation.sdk.b.c;
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.b.c>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class c extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.c.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.c>;
					public name(): string;
					public a(): number;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public toString(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.c.a>;
					public b(): string;
					public constructor(param0: number, param1: string, param2: com.apollographql.apollo3.api.Optional<string>);
					public c(): com.apollographql.apollo3.api.Optional<string>;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module c {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.c.a>;
						public a(): com.iadvize.conversation.sdk.c.b;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.c.b);
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.c.b>;
						public a(): com.iadvize.conversation.sdk.c.c;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.c.c);
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.c.c>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class d extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.d.c> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.d>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public b(): java.util.UUID;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.d.c>;
					public a(): com.iadvize.conversation.sdk.type.Language;
					public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language);
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module d {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.d.a>;
						public a(): java.util.UUID;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.UUID);
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.d.b>;
						public a(): com.iadvize.conversation.sdk.d.a;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.d.a);
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.d.c>;
						public a(): com.iadvize.conversation.sdk.d.b;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: com.iadvize.conversation.sdk.d.b);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class e extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.e.c> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.e>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public b(): java.util.UUID;
					public a(): com.iadvize.conversation.sdk.type.Language;
					public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language);
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.e.c>;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module e {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.e.a>;
						public a(): java.util.UUID;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.UUID);
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.e.b>;
						public a(): com.iadvize.conversation.sdk.e.a;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.e.a);
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.e.c>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.e.b, param1: com.iadvize.conversation.sdk.e.d);
						public a(): com.iadvize.conversation.sdk.e.b;
						public toString(): string;
						public b(): com.iadvize.conversation.sdk.e.d;
					}
					export class d {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.e.d>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class f extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.f.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.f>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public constructor(param0: string);
					public b(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.f.a>;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public a(): C.Q;
					public id(): string;
				}
				export module f {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.f.a>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.f.b<any>);
						public toString(): string;
						public a(): com.iadvize.conversation.sdk.f.b<any>;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.f.b<any>>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module authentication {
						export abstract class AuthenticationOption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption>;
							public static Companion: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.a;
							public saveToPref$sdk_clientRelease(): void;
							public trackingApiValue$sdk_clientRelease(): string;
							public getOptionType$sdk_clientRelease(): number;
						}
						export module AuthenticationOption {
							export class Anonymous extends com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Anonymous>;
								public static INSTANCE: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Anonymous;
							}
							export class JWECallback {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback>;
								/**
								 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption$JWECallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onJWERetrieved(param0: string): void;
									onJWEFailure(param0: java.lang.Exception): void;
								});
								public constructor();
								public onJWEFailure(param0: java.lang.Exception): void;
								public onJWERetrieved(param0: string): void;
							}
							export class JWEProvider {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider>;
								/**
								 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption$JWEProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onJWERequested(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback): void;
								});
								public constructor();
								public onJWERequested(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback): void;
							}
							export class Secured extends com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Secured>;
								public constructor(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider);
								public getJweProvider(): com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider;
							}
							export class Simple extends com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Simple>;
								public getUserId(): string;
								public constructor(param0: string);
							}
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.a>;
								public a(): com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module chatbox {
						export class ChatboxActivity extends e.a implements d.a {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity>;
							public static l: com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.a;
							public constructor();
							public a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public a(param0: e.h): void;
							public a(param0: com.iadvize.conversation.ui.models.MessageAttachment): void;
							public onDestroy(): void;
							public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
						}
						export module ChatboxActivity {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.a>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module chatbox {
						export class ChatboxConfiguration {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration>;
							public copy(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar): com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration;
							public hashCode(): number;
							public getToolbarBackgroundColor(): java.lang.Integer;
							public setMainColor(param0: number): void;
							public getGdprMessage(): string;
							public toString(): string;
							public setFontPath(param0: string): void;
							public component3(): string;
							public setToolbarBackgroundColor(param0: java.lang.Integer): void;
							public constructor(param0: number, param1: string, param2: string);
							public constructor(param0: number, param1: string, param2: string, param3: string);
							public component6(): java.lang.Integer;
							public component8(): com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar;
							public getToolbarMainColor(): java.lang.Integer;
							public setIncomingMessageAvatar(param0: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar): void;
							public setToolbarTitle(param0: string): void;
							public component7(): java.lang.Integer;
							public getFontPath(): string;
							public setGdprMessage(param0: string): void;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer);
							public constructor();
							public component2(): string;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer, param7: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar);
							public getAutomaticMessage(): string;
							public component5(): string;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: string);
							public constructor(param0: number);
							public getMainColor(): number;
							public setAutomaticMessage(param0: string): void;
							public component1(): number;
							public getIncomingMessageAvatar(): com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar;
							public setToolbarMainColor(param0: java.lang.Integer): void;
							public component4(): string;
							public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: java.lang.Integer, param6: java.lang.Integer);
							public getToolbarTitle(): string;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: string);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module chatbox {
						export class ChatboxController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.chatbox.ChatboxController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
								setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>): void;
								setupChatbox(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
								isChatboxPresented(): boolean;
								presentChatbox(param0: globalAndroid.content.Context): void;
							});
							public constructor();
							public isChatboxPresented(): boolean;
							public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>): void;
							public setupChatbox(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
							public presentChatbox(param0: globalAndroid.content.Context): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module chatbox {
						export class ChatboxErrorView {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxErrorView>;
							public a(param0: globalAndroid.view.View.OnClickListener): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public a(param0: string): void;
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module chatbox {
						export class ChatboxListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onChatboxOpened(): void;
								onChatboxClosed(): void;
							});
							public constructor();
							public onChatboxClosed(): void;
							public onChatboxOpened(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module chatbox {
						export module attachment {
							export class ConversationFileProvider {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ConversationFileProvider>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module chatbox {
						export module attachment {
							export class ImageAttachmentViewerActivity {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity>;
								public static b: com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.a;
								public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
								public constructor();
								public onCreate(param0: globalAndroid.os.Bundle): void;
							}
							export module ImageAttachmentViewerActivity {
								export class a {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.a>;
									public a(param0: globalAndroid.app.Activity, param1: com.iadvize.conversation.ui.models.MessageAttachment.Image): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module conversation {
						export class ConversationChannel {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel>;
							public static Companion: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel.a;
							public static CHAT: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
							public static VIDEO: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
							public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
							public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel>;
							public toApiChannel$sdk_clientRelease(): C.h;
						}
						export module ConversationChannel {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel.a>;
								public a(param0: string): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module conversation {
						export class ConversationController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.ConversationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>;
								ongoingConversation(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
							});
							public constructor();
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>;
							public ongoingConversation(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module conversation {
						export class ConversationListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.ConversationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
								onNewMessageReceived(param0: string): void;
								handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
							});
							public constructor();
							public onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
							public onNewMessageReceived(param0: string): void;
							public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module conversation {
						export abstract class IncomingMessageAvatar {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar>;
							public toSenderAvatar$sdk_clientRelease(): com.iadvize.conversation.ui.models.SenderAvatar;
						}
						export module IncomingMessageAvatar {
							export class Image extends com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar.Image>;
								public constructor(param0: globalAndroid.graphics.drawable.Drawable);
								public getValue(): globalAndroid.graphics.drawable.Drawable;
							}
							export class Url extends com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar.Url>;
								public getValue(): java.net.URL;
								public constructor(param0: java.net.URL);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module conversation {
						export class NoOpConversationListener extends com.iadvize.conversation.sdk.feature.conversation.ConversationListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.NoOpConversationListener>;
							public constructor();
							public onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
							public onNewMessageReceived(param0: string): void;
							public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module conversation {
						export class OngoingConversation {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.OngoingConversation>;
							public constructor();
							public getConversationId(): string;
							public component1(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
							public component2(): string;
							public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, param1: string);
							public hashCode(): number;
							public getConversationChannel(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
							public copy(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, param1: string): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
							public toString(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module conversation {
						export module xmpp {
							export module connection {
								export class NetworkUpdateReceiver {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.NetworkUpdateReceiver>;
									public constructor();
									public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module conversation {
						export module xmpp {
							export module conversation {
								export module message {
									export module extension {
										export class FileExtension {
											public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension>;
											public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension>;
											public b(): com.iadvize.conversation.ui.models.MessageKind;
											public a(): string;
											public getElementName(): string;
											public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
											public describeContents(): number;
											public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
											public constructor(param0: string, param1: string, param2: string);
											public getNamespace(): string;
											public constructor();
										}
										export module FileExtension {
											export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension> {
												public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension.a>;
												public createFromParcel(param0: globalAndroid.os.Parcel): any;
												public constructor();
												public newArray(param0: number): androidNative.Array<any>;
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module defaultfloatingbutton {
						export class DefaultFloatingButtonConfiguration {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration>;
							public constructor(param0: number, param1: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins, param2: number, param3: number, param4: java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel,java.lang.Integer>);
							public constructor();
							public component2(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins;
							public getIconTint(): number;
							public hashCode(): number;
							public toString(): string;
							public getIconResIds(): java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel,java.lang.Integer>;
							public getMargins(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins;
							public component1(): number;
							public copy(param0: number, param1: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins, param2: number, param3: number, param4: java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel,java.lang.Integer>): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration;
							public component5(): java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel,java.lang.Integer>;
							public component4(): number;
							public getBackgroundTint(): number;
							public component3(): number;
							public equals(param0: any): boolean;
							public getAnchor(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module defaultfloatingbutton {
						export class DefaultFloatingButtonController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								setupDefaultFloatingButton(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption): void;
							});
							public constructor();
							public setupDefaultFloatingButton(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module defaultfloatingbutton {
						export class DefaultFloatingButtonMargins {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins>;
							public constructor();
							public hashCode(): number;
							public component2(): number;
							public getEnd(): number;
							public getTop(): number;
							public toString(): string;
							public component1(): number;
							public getStart(): number;
							public getBottom(): number;
							public component4(): number;
							public component3(): number;
							public copy(param0: number, param1: number, param2: number, param3: number): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module defaultfloatingbutton {
						export abstract class DefaultFloatingButtonOption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption>;
							public getConfiguration(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration;
						}
						export module DefaultFloatingButtonOption {
							export class Disabled extends com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption.Disabled>;
								public static INSTANCE: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption.Disabled;
							}
							export class Enabled extends com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption.Enabled>;
								public constructor(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration);
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module gdpr {
						export abstract class GDPREnabledOption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption>;
						}
						export module GDPREnabledOption {
							export class LegalUrl extends com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption.LegalUrl>;
								public getLegalInformationURI(): java.net.URI;
								public constructor(param0: java.net.URI);
							}
							export class Listener extends com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption.Listener>;
								public constructor(param0: com.iadvize.conversation.sdk.feature.gdpr.GDPRListener);
								public getListener(): com.iadvize.conversation.sdk.feature.gdpr.GDPRListener;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module gdpr {
						export class GDPRListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPRListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.gdpr.GDPRListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								didTapMoreInformation(): void;
							});
							public constructor();
							public didTapMoreInformation(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module gdpr {
						export abstract class GDPROption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPROption>;
						}
						export module GDPROption {
							export class Disabled extends com.iadvize.conversation.sdk.feature.gdpr.GDPROption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPROption.Disabled>;
								public static INSTANCE: com.iadvize.conversation.sdk.feature.gdpr.GDPROption.Disabled;
							}
							export class Enabled extends com.iadvize.conversation.sdk.feature.gdpr.GDPROption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.gdpr.GDPROption.Enabled>;
								public getOption(): com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption;
								public constructor(param0: com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module logger {
						export class Logger {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.Logger>;
							public static INSTANCE: com.iadvize.conversation.sdk.feature.logger.Logger;
							public log$sdk_clientRelease(param0: com.iadvize.conversation.sdk.feature.logger.Logger.Level, param1: string, param2: string, param3: java.lang.Throwable): void;
						}
						export module Logger {
							export class Level {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.Logger.Level>;
								public static VERBOSE: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
								public static INFO: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
								public static WARNING: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
								public static ERROR: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
								public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.logger.Logger.Level;
								public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.logger.Logger.Level>;
							}
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.Logger.a>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module notification {
						export class NotificationController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.notification.NotificationController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.notification.NotificationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerPushToken(param0: string): void;
								enablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
								disablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
								isIAdvizePushNotification(param0: java.util.Map<string,string>): boolean;
							});
							public constructor();
							public enablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
							public registerPushToken(param0: string): void;
							public isIAdvizePushNotification(param0: java.util.Map<string,string>): boolean;
							public disablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module satisfaction {
						export class SatisfactionGrade {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade>;
							public static CSAT: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
							public static NPS: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
							public static COMMENT: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
							public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade>;
							public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module satisfaction {
						export class SatisfactionPayload {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionPayload>;
							public getConversationId(): string;
							public getValue(): any;
							public component4(): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
							public component2(): string;
							public component5(): any;
							public hashCode(): number;
							public getId(): string;
							public toString(): string;
							public copy(param0: string, param1: string, param2: string, param3: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade, param4: any): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionPayload;
							public component3(): string;
							public component1(): string;
							public constructor(param0: string, param1: string, param2: string, param3: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade, param4: any);
							public getVuid(): string;
							public getGrade(): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module targeting {
						export abstract class LanguageOption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.LanguageOption>;
						}
						export module LanguageOption {
							export class Custom extends com.iadvize.conversation.sdk.feature.targeting.LanguageOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.LanguageOption.Custom>;
								public constructor(param0: com.iadvize.conversation.sdk.type.Language);
								public getValue(): com.iadvize.conversation.sdk.type.Language;
							}
							export class Default extends com.iadvize.conversation.sdk.feature.targeting.LanguageOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.LanguageOption.Default>;
								public static INSTANCE: com.iadvize.conversation.sdk.feature.targeting.LanguageOption.Default;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module targeting {
						export abstract class NavigationOption {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.NavigationOption>;
						}
						export module NavigationOption {
							export class ActivateNewRule extends com.iadvize.conversation.sdk.feature.targeting.NavigationOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.NavigationOption.ActivateNewRule>;
								public constructor(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule);
								public getTargetingRule$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
							}
							export class ClearActiveRule extends com.iadvize.conversation.sdk.feature.targeting.NavigationOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.NavigationOption.ClearActiveRule>;
								public static INSTANCE: com.iadvize.conversation.sdk.feature.targeting.NavigationOption.ClearActiveRule;
							}
							export class KeepActiveRule extends com.iadvize.conversation.sdk.feature.targeting.NavigationOption {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.NavigationOption.KeepActiveRule>;
								public static INSTANCE: com.iadvize.conversation.sdk.feature.targeting.NavigationOption.KeepActiveRule;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module targeting {
						export class TargetingController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.targeting.TargetingController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>;
								setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>): void;
								getLanguage(): com.iadvize.conversation.sdk.feature.targeting.LanguageOption;
								setLanguage(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void;
								activateTargetingRule(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule): void;
								registerUserNavigation(param0: com.iadvize.conversation.sdk.feature.targeting.NavigationOption): void;
								isActiveTargetingRuleAvailable(): boolean;
								activeTargetingRule(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
							});
							public constructor();
							public isActiveTargetingRuleAvailable(): boolean;
							public getLanguage(): com.iadvize.conversation.sdk.feature.targeting.LanguageOption;
							public activateTargetingRule(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule): void;
							public registerUserNavigation(param0: com.iadvize.conversation.sdk.feature.targeting.NavigationOption): void;
							public setLanguage(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void;
							public activeTargetingRule(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
							public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>): void;
							public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module targeting {
						export class TargetingListener {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.targeting.TargetingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
							});
							public constructor();
							public onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module targeting {
						export class TargetingRule {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingRule>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.targeting.TargetingRule>;
							public component2(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public hashCode(): number;
							public getId(): string;
							public component1(): java.util.UUID;
							public copy(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
							public describeContents(): number;
							public getUuid(): java.util.UUID;
							public getConversationChannel(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
							public toString(): string;
							public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel);
							public equals(param0: any): boolean;
						}
						export module TargetingRule {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.targeting.TargetingRule> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingRule.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module transaction {
						export class Transaction {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.Transaction>;
							public static Companion: com.iadvize.conversation.sdk.feature.transaction.Transaction.a;
							public hashCode(): number;
							public getId(): string;
							public getAmount(): number;
							public toPrefString$sdk_clientRelease(): string;
							public setAmount(param0: number): void;
							public setId(param0: string): void;
							public toString(): string;
							public component4(): com.iadvize.conversation.sdk.type.Currency;
							public component1(): string;
							public copy(param0: string, param1: java.util.Date, param2: number, param3: com.iadvize.conversation.sdk.type.Currency): com.iadvize.conversation.sdk.feature.transaction.Transaction;
							public setDate(param0: java.util.Date): void;
							public setCurrency(param0: com.iadvize.conversation.sdk.type.Currency): void;
							public component3(): number;
							public constructor(param0: string, param1: java.util.Date, param2: number, param3: com.iadvize.conversation.sdk.type.Currency);
							public component2(): java.util.Date;
							public equals(param0: any): boolean;
							public getCurrency(): com.iadvize.conversation.sdk.type.Currency;
							public getDate(): java.util.Date;
						}
						export module Transaction {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.Transaction.a>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module transaction {
						export class TransactionController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.TransactionController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.transaction.TransactionController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								register(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction): void;
							});
							public constructor();
							public register(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class AlphaBackgroundOnPressedImageButton {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton>;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class ThumbnailVideoService {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService>;
							public static d: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.a;
							public constructor();
							public onCreate(): void;
							public onDestroy(): void;
							public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
							public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
						}
						export module ThumbnailVideoService {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.a>;
							}
							export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b>;
								public create(param0: any, param1: any): any;
								public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService);
								public invoke(param0: any, param1: any): any;
								public invokeSuspend(param0: any): any;
							}
							export module b {
								export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.a<any>>;
									public constructor(param0: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService);
									public emit(param0: any, param1: any): any;
								}
							}
							export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c>;
								public create(param0: any, param1: any): any;
								public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService);
								public invoke(param0: any, param1: any): any;
								public invokeSuspend(param0: any): any;
							}
							export module c {
								export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.a<any>>;
									public constructor(param0: com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService);
									public emit(param0: any, param1: any): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class VideoActivity {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoActivity>;
							public static e: com.iadvize.conversation.sdk.feature.video.VideoActivity.a;
							public constructor();
							public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean, param2: boolean, param3: number): kotlinx.coroutines.Job;
							public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: androidx.constraintlayout.widget.ConstraintSet): void;
							public static b(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean): kotlinx.coroutines.Job;
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onDestroy(): void;
							public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean): kotlinx.coroutines.Job;
							public onBackPressed(): void;
							public onResume(): void;
						}
						export module VideoActivity {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoActivity.a>;
								public a(param0: globalAndroid.content.Context, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials, param2: com.iadvize.conversation.sdk.feature.video.VideoSettings, param3: boolean): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class VideoCredentials {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoCredentials>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoCredentials>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string);
							public describeContents(): number;
							public b(): string;
							public a(): string;
						}
						export module VideoCredentials {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoCredentials> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoCredentials.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class VideoLobbyActivity {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity>;
							public static g: com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity.a;
							public constructor();
							public onCreate(param0: globalAndroid.os.Bundle): void;
							public onDestroy(): void;
						}
						export module VideoLobbyActivity {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity.a>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class VideoService {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService>;
							public static b: com.iadvize.conversation.sdk.feature.video.VideoService.a;
							public constructor();
							public onCreate(): void;
							public onDestroy(): void;
							public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
							public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
							public onTaskRemoved(param0: globalAndroid.content.Intent): void;
						}
						export module VideoService {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.a>;
							}
							export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.b>;
								public create(param0: any, param1: any): any;
								public invoke(param0: any, param1: any): any;
								public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoService);
								public invokeSuspend(param0: any): any;
							}
							export module b {
								export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.b.a<any>>;
									public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoService);
									public emit(param0: any, param1: any): any;
								}
							}
							export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.c>;
								public create(param0: any, param1: any): any;
								public invoke(param0: any, param1: any): any;
								public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoService);
								public invokeSuspend(param0: any): any;
							}
							export module c {
								export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
									public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.c.a<any>>;
									public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoService);
									public emit(param0: any, param1: any): any;
								}
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class VideoSettings {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoSettings>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoSettings>;
							public b(): x.a.a;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: boolean, param1: boolean, param2: x.a.a);
							public describeContents(): number;
							public c(): boolean;
							public a(param0: x.a.a): void;
							public b(param0: boolean): void;
							public a(param0: boolean): void;
							public a(): boolean;
						}
						export module VideoSettings {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoSettings> {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoSettings.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.a>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.b>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
							public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
						}
						export module b {
							export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.b.a<any>>;
								public emit(param0: any, param1: any): any;
								public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.c>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
							public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
						}
						export module c {
							export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.c.a<any>>;
								public emit(param0: any, param1: any): any;
								public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class d extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.d>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
							public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
						}
						export module d {
							export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.d.a<any>>;
								public emit(param0: any, param1: any): any;
								public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class e extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.e>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class f extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.f>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class g extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.g>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class h extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.h>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class i extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.i>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class j extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.j>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class k extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.k>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class l extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.l>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module video {
						export class m extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.m>;
							public invokeSuspend(param0: any): any;
							public invoke(param0: any, param1: any): any;
							public create(param0: any, param1: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module visitor {
						export class CustomData {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.CustomData>;
							public getValue$sdk_clientRelease(): any;
							public toInput$sdk_clientRelease(): C.H0;
							public getKey$sdk_clientRelease(): string;
						}
						export module CustomData {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.CustomData.Companion>;
								public fromBoolean(param0: string, param1: boolean): com.iadvize.conversation.sdk.feature.visitor.CustomData;
								public fromInt(param0: string, param1: number): com.iadvize.conversation.sdk.feature.visitor.CustomData;
								public fromString(param0: string, param1: string): com.iadvize.conversation.sdk.feature.visitor.CustomData;
								public fromDouble(param0: string, param1: number): com.iadvize.conversation.sdk.feature.visitor.CustomData;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module feature {
					export module visitor {
						export class VisitorController {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.VisitorController>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.visitor.VisitorController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
							});
							public constructor();
							public registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class g extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.g.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.g>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public constructor(param0: string);
					public b(): string;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public a(): C.Q;
					public id(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.g.a>;
				}
				export module g {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.g.a>;
						public constructor(param0: com.iadvize.conversation.sdk.g.b<any>);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public a(): com.iadvize.conversation.sdk.g.b<any>;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.g.b<any>>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export abstract class h {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.h>;
					public c(): string;
					public d(): string;
					public e(): string;
					public b(): string;
					public a(): string;
					public f(): string;
					public g(): number;
				}
				export module h {
					export class a extends com.iadvize.conversation.sdk.h {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.h.a>;
						public static h: com.iadvize.conversation.sdk.h.a;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class i extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.i.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.i>;
					public equals(param0: any): boolean;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.i.a>;
					public name(): string;
					public constructor();
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module i {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.i.a>;
						public constructor(param0: com.iadvize.conversation.sdk.i.b);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): com.iadvize.conversation.sdk.i.b;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.i.b>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: boolean);
						public a(): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class j extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.j.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.j>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public a(): number;
					public id(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.j.a>;
					public constructor(param0: number);
				}
				export module j {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.j.a>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.j.b);
						public a(): com.iadvize.conversation.sdk.j.b;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.j.b>;
						public constructor(param0: com.iadvize.conversation.sdk.j.c);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): com.iadvize.conversation.sdk.j.c;
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.j.c>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: boolean);
						public a(): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class k extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.k.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.k>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public constructor(param0: string);
					public a(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.k.a>;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module k {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.k.a>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.k.b);
						public a(): com.iadvize.conversation.sdk.k.b;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.k.b>;
						public b(): string;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class l extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.l.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.l>;
					public equals(param0: any): boolean;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public name(): string;
					public constructor();
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.l.a>;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module l {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.l.a>;
						public constructor(param0: com.iadvize.conversation.sdk.l.b);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): com.iadvize.conversation.sdk.l.b;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.l.b>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class m extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.m.b> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.m>;
					public equals(param0: any): boolean;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public name(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.m.b>;
					public constructor();
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module m {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.m.a>;
						public constructor(param0: com.iadvize.conversation.sdk.m.c);
						public a(): com.iadvize.conversation.sdk.m.c;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.m.b>;
						public constructor(param0: com.iadvize.conversation.sdk.m.a);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): com.iadvize.conversation.sdk.m.a;
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.m.c>;
						public b(): java.util.UUID;
						public a(): string;
						public c(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: java.util.UUID, param2: string);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class n extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.n.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.n>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.n.a>;
					public toString(): string;
					public a(): C.g0;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public constructor(param0: C.g0);
					public hashCode(): number;
					public id(): string;
				}
				export module n {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.n.a>;
						public a(): com.iadvize.conversation.sdk.n.b;
						public constructor(param0: com.iadvize.conversation.sdk.n.b);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.n.b>;
						public a(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class o extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.o.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.o>;
					public name(): string;
					public c(): string;
					public a(): com.apollographql.apollo3.api.Optional<C.c>;
					public constructor(param0: string, param1: C.Q, param2: com.apollographql.apollo3.api.Optional<any>);
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public toString(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.o.a>;
					public b(): C.Q;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module o {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.o.a>;
						public a(): com.iadvize.conversation.sdk.o.b;
						public constructor(param0: com.iadvize.conversation.sdk.o.b);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.o.b>;
						public constructor(param0: string, param1: string, param2: string);
						public a(): string;
						public b(): string;
						public c(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class p extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.p.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.p>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public constructor(param0: boolean);
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.p.a>;
					public a(): boolean;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module p {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.p.a>;
						public a(): com.iadvize.conversation.sdk.p.b;
						public constructor(param0: com.iadvize.conversation.sdk.p.b);
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.p.b>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: boolean);
						public a(): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class q extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.q.b> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.q>;
					public b(): java.util.List<C.H0>;
					public name(): string;
					public e(): string;
					public constructor(param0: string, param1: number, param2: C.j0, param3: java.util.UUID, param4: java.util.List<C.H0>);
					public c(): number;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public a(): java.util.UUID;
					public toString(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.q.b>;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
					public d(): C.j0;
				}
				export module q {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.q.a>;
						public d(): com.iadvize.conversation.sdk.q.f;
						public a(): com.iadvize.conversation.sdk.q.c;
						public c(): com.iadvize.conversation.sdk.q.e;
						public e(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: com.iadvize.conversation.sdk.q.e, param2: com.iadvize.conversation.sdk.q.f, param3: com.iadvize.conversation.sdk.q.d, param4: com.iadvize.conversation.sdk.q.c);
						public b(): com.iadvize.conversation.sdk.q.d;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.q.b>;
						public constructor(param0: com.iadvize.conversation.sdk.q.g);
						public a(): com.iadvize.conversation.sdk.q.g;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.q.c>;
						public b(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public a(): boolean;
						public toString(): string;
						public constructor(param0: string, param1: boolean);
					}
					export class d {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.q.d>;
						public constructor(param0: string, param1: number);
						public b(): string;
						public a(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class e {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.q.e>;
						public constructor(param0: string, param1: number);
						public b(): string;
						public a(): number;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class f {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.q.f>;
						public a(): string;
						public b(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: string);
						public toString(): string;
					}
					export class g {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.q.g>;
						public c(): java.util.UUID;
						public a(): java.util.UUID;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.UUID, param1: java.util.UUID, param2: java.util.List<com.iadvize.conversation.sdk.q.a>);
						public b(): java.util.List<com.iadvize.conversation.sdk.q.a>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class r extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.r.a> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.r>;
					public name(): string;
					public b(): com.iadvize.conversation.sdk.type.Language;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public toString(): string;
					public c(): java.util.UUID;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.r.a>;
					public constructor(param0: java.util.UUID, param1: java.util.UUID, param2: com.iadvize.conversation.sdk.type.Language, param3: C.h);
					public d(): java.util.UUID;
					public a(): C.h;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module r {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.r.a>;
						public constructor(param0: com.iadvize.conversation.sdk.r.c);
						public a(): com.iadvize.conversation.sdk.r.c;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.r.b>;
						public a(): java.util.UUID;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: java.util.UUID);
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.r.c>;
						public constructor(param0: com.iadvize.conversation.sdk.r.b);
						public a(): com.iadvize.conversation.sdk.r.b;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class s extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.s.b> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.s>;
					public name(): string;
					public b(): com.iadvize.conversation.sdk.type.Language;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.s.b>;
					public c(): number;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public a(): com.apollographql.apollo3.api.Optional<string>;
					public toString(): string;
					public d(): java.util.UUID;
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
					public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language, param2: number, param3: com.apollographql.apollo3.api.Optional<string>);
				}
				export module s {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.s.a>;
						public constructor(param0: com.iadvize.conversation.sdk.s.c, param1: com.iadvize.conversation.sdk.s.d);
						public b(): com.iadvize.conversation.sdk.s.d;
						public a(): com.iadvize.conversation.sdk.s.c;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.s.b>;
						public constructor(param0: com.iadvize.conversation.sdk.s.a);
						public a(): com.iadvize.conversation.sdk.s.a;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.s.c>;
						public constructor(param0: string, param1: z.m0);
						public b(): string;
						public a(): z.m0;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
					export class d {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.s.d>;
						public constructor(param0: string, param1: z.m0);
						public b(): string;
						public a(): z.m0;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export class t extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.t.b> {
					public static class: java.lang.Class<com.iadvize.conversation.sdk.t>;
					public document(): string;
					public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
					public equals(param0: any): boolean;
					public b(): number;
					public name(): string;
					public adapter(): com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.t.b>;
					public a(): com.apollographql.apollo3.api.Optional<string>;
					public toString(): string;
					public constructor(param0: number, param1: com.apollographql.apollo3.api.Optional<string>);
					public rootField(): com.apollographql.apollo3.api.CompiledField;
					public hashCode(): number;
					public id(): string;
				}
				export module t {
					export class a {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.t.a>;
						public a(): com.iadvize.conversation.sdk.t.c;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: com.iadvize.conversation.sdk.t.c);
						public toString(): string;
					}
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.t.b>;
						public a(): com.iadvize.conversation.sdk.t.a;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public constructor(param0: com.iadvize.conversation.sdk.t.a);
					}
					export class c {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.t.c>;
						public constructor(param0: string, param1: z.m0);
						public b(): string;
						public a(): z.m0;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class Currency {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Currency>;
						public static ADP: com.iadvize.conversation.sdk.type.Currency;
						public static AED: com.iadvize.conversation.sdk.type.Currency;
						public static AFA: com.iadvize.conversation.sdk.type.Currency;
						public static AFN: com.iadvize.conversation.sdk.type.Currency;
						public static ALL: com.iadvize.conversation.sdk.type.Currency;
						public static AMD: com.iadvize.conversation.sdk.type.Currency;
						public static ANG: com.iadvize.conversation.sdk.type.Currency;
						public static AOA: com.iadvize.conversation.sdk.type.Currency;
						public static ARS: com.iadvize.conversation.sdk.type.Currency;
						public static ATS: com.iadvize.conversation.sdk.type.Currency;
						public static AUD: com.iadvize.conversation.sdk.type.Currency;
						public static AWG: com.iadvize.conversation.sdk.type.Currency;
						public static AYM: com.iadvize.conversation.sdk.type.Currency;
						public static AZM: com.iadvize.conversation.sdk.type.Currency;
						public static AZN: com.iadvize.conversation.sdk.type.Currency;
						public static BAM: com.iadvize.conversation.sdk.type.Currency;
						public static BBD: com.iadvize.conversation.sdk.type.Currency;
						public static BDT: com.iadvize.conversation.sdk.type.Currency;
						public static BEF: com.iadvize.conversation.sdk.type.Currency;
						public static BGL: com.iadvize.conversation.sdk.type.Currency;
						public static BGN: com.iadvize.conversation.sdk.type.Currency;
						public static BHD: com.iadvize.conversation.sdk.type.Currency;
						public static BIF: com.iadvize.conversation.sdk.type.Currency;
						public static BMD: com.iadvize.conversation.sdk.type.Currency;
						public static BND: com.iadvize.conversation.sdk.type.Currency;
						public static BOB: com.iadvize.conversation.sdk.type.Currency;
						public static BOV: com.iadvize.conversation.sdk.type.Currency;
						public static BRL: com.iadvize.conversation.sdk.type.Currency;
						public static BSD: com.iadvize.conversation.sdk.type.Currency;
						public static BTN: com.iadvize.conversation.sdk.type.Currency;
						public static BWP: com.iadvize.conversation.sdk.type.Currency;
						public static BYB: com.iadvize.conversation.sdk.type.Currency;
						public static BYN: com.iadvize.conversation.sdk.type.Currency;
						public static BYR: com.iadvize.conversation.sdk.type.Currency;
						public static BZD: com.iadvize.conversation.sdk.type.Currency;
						public static CAD: com.iadvize.conversation.sdk.type.Currency;
						public static CDF: com.iadvize.conversation.sdk.type.Currency;
						public static CHE: com.iadvize.conversation.sdk.type.Currency;
						public static CHF: com.iadvize.conversation.sdk.type.Currency;
						public static CHW: com.iadvize.conversation.sdk.type.Currency;
						public static CLF: com.iadvize.conversation.sdk.type.Currency;
						public static CLP: com.iadvize.conversation.sdk.type.Currency;
						public static CNY: com.iadvize.conversation.sdk.type.Currency;
						public static COP: com.iadvize.conversation.sdk.type.Currency;
						public static COU: com.iadvize.conversation.sdk.type.Currency;
						public static CRC: com.iadvize.conversation.sdk.type.Currency;
						public static CSD: com.iadvize.conversation.sdk.type.Currency;
						public static CUC: com.iadvize.conversation.sdk.type.Currency;
						public static CUP: com.iadvize.conversation.sdk.type.Currency;
						public static CVE: com.iadvize.conversation.sdk.type.Currency;
						public static CYP: com.iadvize.conversation.sdk.type.Currency;
						public static CZK: com.iadvize.conversation.sdk.type.Currency;
						public static DEM: com.iadvize.conversation.sdk.type.Currency;
						public static DJF: com.iadvize.conversation.sdk.type.Currency;
						public static DKK: com.iadvize.conversation.sdk.type.Currency;
						public static DOP: com.iadvize.conversation.sdk.type.Currency;
						public static DZD: com.iadvize.conversation.sdk.type.Currency;
						public static EEK: com.iadvize.conversation.sdk.type.Currency;
						public static EGP: com.iadvize.conversation.sdk.type.Currency;
						public static ERN: com.iadvize.conversation.sdk.type.Currency;
						public static ESP: com.iadvize.conversation.sdk.type.Currency;
						public static ETB: com.iadvize.conversation.sdk.type.Currency;
						public static EUR: com.iadvize.conversation.sdk.type.Currency;
						public static FIM: com.iadvize.conversation.sdk.type.Currency;
						public static FJD: com.iadvize.conversation.sdk.type.Currency;
						public static FKP: com.iadvize.conversation.sdk.type.Currency;
						public static FRF: com.iadvize.conversation.sdk.type.Currency;
						public static GBP: com.iadvize.conversation.sdk.type.Currency;
						public static GEL: com.iadvize.conversation.sdk.type.Currency;
						public static GHC: com.iadvize.conversation.sdk.type.Currency;
						public static GHS: com.iadvize.conversation.sdk.type.Currency;
						public static GIP: com.iadvize.conversation.sdk.type.Currency;
						public static GMD: com.iadvize.conversation.sdk.type.Currency;
						public static GNF: com.iadvize.conversation.sdk.type.Currency;
						public static GRD: com.iadvize.conversation.sdk.type.Currency;
						public static GTQ: com.iadvize.conversation.sdk.type.Currency;
						public static GWP: com.iadvize.conversation.sdk.type.Currency;
						public static GYD: com.iadvize.conversation.sdk.type.Currency;
						public static HKD: com.iadvize.conversation.sdk.type.Currency;
						public static HNL: com.iadvize.conversation.sdk.type.Currency;
						public static HRK: com.iadvize.conversation.sdk.type.Currency;
						public static HTG: com.iadvize.conversation.sdk.type.Currency;
						public static HUF: com.iadvize.conversation.sdk.type.Currency;
						public static IDR: com.iadvize.conversation.sdk.type.Currency;
						public static IEP: com.iadvize.conversation.sdk.type.Currency;
						public static ILS: com.iadvize.conversation.sdk.type.Currency;
						public static INR: com.iadvize.conversation.sdk.type.Currency;
						public static IQD: com.iadvize.conversation.sdk.type.Currency;
						public static IRR: com.iadvize.conversation.sdk.type.Currency;
						public static ISK: com.iadvize.conversation.sdk.type.Currency;
						public static ITL: com.iadvize.conversation.sdk.type.Currency;
						public static JMD: com.iadvize.conversation.sdk.type.Currency;
						public static JOD: com.iadvize.conversation.sdk.type.Currency;
						public static JPY: com.iadvize.conversation.sdk.type.Currency;
						public static KES: com.iadvize.conversation.sdk.type.Currency;
						public static KGS: com.iadvize.conversation.sdk.type.Currency;
						public static KHR: com.iadvize.conversation.sdk.type.Currency;
						public static KMF: com.iadvize.conversation.sdk.type.Currency;
						public static KPW: com.iadvize.conversation.sdk.type.Currency;
						public static KRW: com.iadvize.conversation.sdk.type.Currency;
						public static KWD: com.iadvize.conversation.sdk.type.Currency;
						public static KYD: com.iadvize.conversation.sdk.type.Currency;
						public static KZT: com.iadvize.conversation.sdk.type.Currency;
						public static LAK: com.iadvize.conversation.sdk.type.Currency;
						public static LBP: com.iadvize.conversation.sdk.type.Currency;
						public static LKR: com.iadvize.conversation.sdk.type.Currency;
						public static LRD: com.iadvize.conversation.sdk.type.Currency;
						public static LSL: com.iadvize.conversation.sdk.type.Currency;
						public static LTL: com.iadvize.conversation.sdk.type.Currency;
						public static LUF: com.iadvize.conversation.sdk.type.Currency;
						public static LVL: com.iadvize.conversation.sdk.type.Currency;
						public static LYD: com.iadvize.conversation.sdk.type.Currency;
						public static MAD: com.iadvize.conversation.sdk.type.Currency;
						public static MDL: com.iadvize.conversation.sdk.type.Currency;
						public static MGA: com.iadvize.conversation.sdk.type.Currency;
						public static MGF: com.iadvize.conversation.sdk.type.Currency;
						public static MKD: com.iadvize.conversation.sdk.type.Currency;
						public static MMK: com.iadvize.conversation.sdk.type.Currency;
						public static MNT: com.iadvize.conversation.sdk.type.Currency;
						public static MOP: com.iadvize.conversation.sdk.type.Currency;
						public static MRO: com.iadvize.conversation.sdk.type.Currency;
						public static MRU: com.iadvize.conversation.sdk.type.Currency;
						public static MTL: com.iadvize.conversation.sdk.type.Currency;
						public static MUR: com.iadvize.conversation.sdk.type.Currency;
						public static MVR: com.iadvize.conversation.sdk.type.Currency;
						public static MWK: com.iadvize.conversation.sdk.type.Currency;
						public static MXN: com.iadvize.conversation.sdk.type.Currency;
						public static MXV: com.iadvize.conversation.sdk.type.Currency;
						public static MYR: com.iadvize.conversation.sdk.type.Currency;
						public static MZM: com.iadvize.conversation.sdk.type.Currency;
						public static MZN: com.iadvize.conversation.sdk.type.Currency;
						public static NAD: com.iadvize.conversation.sdk.type.Currency;
						public static NGN: com.iadvize.conversation.sdk.type.Currency;
						public static NIO: com.iadvize.conversation.sdk.type.Currency;
						public static NLG: com.iadvize.conversation.sdk.type.Currency;
						public static NOK: com.iadvize.conversation.sdk.type.Currency;
						public static NPR: com.iadvize.conversation.sdk.type.Currency;
						public static NZD: com.iadvize.conversation.sdk.type.Currency;
						public static OMR: com.iadvize.conversation.sdk.type.Currency;
						public static PAB: com.iadvize.conversation.sdk.type.Currency;
						public static PEN: com.iadvize.conversation.sdk.type.Currency;
						public static PGK: com.iadvize.conversation.sdk.type.Currency;
						public static PHP: com.iadvize.conversation.sdk.type.Currency;
						public static PKR: com.iadvize.conversation.sdk.type.Currency;
						public static PLN: com.iadvize.conversation.sdk.type.Currency;
						public static PTE: com.iadvize.conversation.sdk.type.Currency;
						public static PYG: com.iadvize.conversation.sdk.type.Currency;
						public static QAR: com.iadvize.conversation.sdk.type.Currency;
						public static ROL: com.iadvize.conversation.sdk.type.Currency;
						public static RON: com.iadvize.conversation.sdk.type.Currency;
						public static RSD: com.iadvize.conversation.sdk.type.Currency;
						public static RUB: com.iadvize.conversation.sdk.type.Currency;
						public static RUR: com.iadvize.conversation.sdk.type.Currency;
						public static RWF: com.iadvize.conversation.sdk.type.Currency;
						public static SAR: com.iadvize.conversation.sdk.type.Currency;
						public static SBD: com.iadvize.conversation.sdk.type.Currency;
						public static SCR: com.iadvize.conversation.sdk.type.Currency;
						public static SDD: com.iadvize.conversation.sdk.type.Currency;
						public static SDG: com.iadvize.conversation.sdk.type.Currency;
						public static SEK: com.iadvize.conversation.sdk.type.Currency;
						public static SGD: com.iadvize.conversation.sdk.type.Currency;
						public static SHP: com.iadvize.conversation.sdk.type.Currency;
						public static SIT: com.iadvize.conversation.sdk.type.Currency;
						public static SKK: com.iadvize.conversation.sdk.type.Currency;
						public static SLL: com.iadvize.conversation.sdk.type.Currency;
						public static SOS: com.iadvize.conversation.sdk.type.Currency;
						public static SRD: com.iadvize.conversation.sdk.type.Currency;
						public static SRG: com.iadvize.conversation.sdk.type.Currency;
						public static SSP: com.iadvize.conversation.sdk.type.Currency;
						public static STD: com.iadvize.conversation.sdk.type.Currency;
						public static STN: com.iadvize.conversation.sdk.type.Currency;
						public static SVC: com.iadvize.conversation.sdk.type.Currency;
						public static SYP: com.iadvize.conversation.sdk.type.Currency;
						public static SZL: com.iadvize.conversation.sdk.type.Currency;
						public static THB: com.iadvize.conversation.sdk.type.Currency;
						public static TJS: com.iadvize.conversation.sdk.type.Currency;
						public static TMM: com.iadvize.conversation.sdk.type.Currency;
						public static TMT: com.iadvize.conversation.sdk.type.Currency;
						public static TND: com.iadvize.conversation.sdk.type.Currency;
						public static TOP: com.iadvize.conversation.sdk.type.Currency;
						public static TPE: com.iadvize.conversation.sdk.type.Currency;
						public static TRL: com.iadvize.conversation.sdk.type.Currency;
						public static TRY: com.iadvize.conversation.sdk.type.Currency;
						public static TTD: com.iadvize.conversation.sdk.type.Currency;
						public static TWD: com.iadvize.conversation.sdk.type.Currency;
						public static TZS: com.iadvize.conversation.sdk.type.Currency;
						public static UAH: com.iadvize.conversation.sdk.type.Currency;
						public static UGX: com.iadvize.conversation.sdk.type.Currency;
						public static USD: com.iadvize.conversation.sdk.type.Currency;
						public static USN: com.iadvize.conversation.sdk.type.Currency;
						public static USS: com.iadvize.conversation.sdk.type.Currency;
						public static UYI: com.iadvize.conversation.sdk.type.Currency;
						public static UYU: com.iadvize.conversation.sdk.type.Currency;
						public static UZS: com.iadvize.conversation.sdk.type.Currency;
						public static VEB: com.iadvize.conversation.sdk.type.Currency;
						public static VEF: com.iadvize.conversation.sdk.type.Currency;
						public static VES: com.iadvize.conversation.sdk.type.Currency;
						public static VND: com.iadvize.conversation.sdk.type.Currency;
						public static VUV: com.iadvize.conversation.sdk.type.Currency;
						public static WST: com.iadvize.conversation.sdk.type.Currency;
						public static XAF: com.iadvize.conversation.sdk.type.Currency;
						public static XAG: com.iadvize.conversation.sdk.type.Currency;
						public static XAU: com.iadvize.conversation.sdk.type.Currency;
						public static XBA: com.iadvize.conversation.sdk.type.Currency;
						public static XBB: com.iadvize.conversation.sdk.type.Currency;
						public static XBC: com.iadvize.conversation.sdk.type.Currency;
						public static XBD: com.iadvize.conversation.sdk.type.Currency;
						public static XCD: com.iadvize.conversation.sdk.type.Currency;
						public static XDR: com.iadvize.conversation.sdk.type.Currency;
						public static XFO: com.iadvize.conversation.sdk.type.Currency;
						public static XFU: com.iadvize.conversation.sdk.type.Currency;
						public static XOF: com.iadvize.conversation.sdk.type.Currency;
						public static XPD: com.iadvize.conversation.sdk.type.Currency;
						public static XPF: com.iadvize.conversation.sdk.type.Currency;
						public static XPT: com.iadvize.conversation.sdk.type.Currency;
						public static XSU: com.iadvize.conversation.sdk.type.Currency;
						public static XTS: com.iadvize.conversation.sdk.type.Currency;
						public static XUA: com.iadvize.conversation.sdk.type.Currency;
						public static XXX: com.iadvize.conversation.sdk.type.Currency;
						public static YER: com.iadvize.conversation.sdk.type.Currency;
						public static YUM: com.iadvize.conversation.sdk.type.Currency;
						public static ZAR: com.iadvize.conversation.sdk.type.Currency;
						public static ZMK: com.iadvize.conversation.sdk.type.Currency;
						public static ZMW: com.iadvize.conversation.sdk.type.Currency;
						public static ZWD: com.iadvize.conversation.sdk.type.Currency;
						public static ZWL: com.iadvize.conversation.sdk.type.Currency;
						public static ZWN: com.iadvize.conversation.sdk.type.Currency;
						public static ZWR: com.iadvize.conversation.sdk.type.Currency;
						public static UNKNOWN__: com.iadvize.conversation.sdk.type.Currency;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.Currency>;
						public getRawValue(): string;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.type.Currency;
					}
					export module Currency {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Currency.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module sdk {
				export module type {
					export class Language {
						public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Language>;
						public static aa: com.iadvize.conversation.sdk.type.Language;
						public static ab: com.iadvize.conversation.sdk.type.Language;
						public static ae: com.iadvize.conversation.sdk.type.Language;
						public static af: com.iadvize.conversation.sdk.type.Language;
						public static ak: com.iadvize.conversation.sdk.type.Language;
						public static am: com.iadvize.conversation.sdk.type.Language;
						public static an: com.iadvize.conversation.sdk.type.Language;
						public static ar: com.iadvize.conversation.sdk.type.Language;
						public static as: com.iadvize.conversation.sdk.type.Language;
						public static av: com.iadvize.conversation.sdk.type.Language;
						public static ay: com.iadvize.conversation.sdk.type.Language;
						public static az: com.iadvize.conversation.sdk.type.Language;
						public static ba: com.iadvize.conversation.sdk.type.Language;
						public static be: com.iadvize.conversation.sdk.type.Language;
						public static bg: com.iadvize.conversation.sdk.type.Language;
						public static bh: com.iadvize.conversation.sdk.type.Language;
						public static bi: com.iadvize.conversation.sdk.type.Language;
						public static bm: com.iadvize.conversation.sdk.type.Language;
						public static bn: com.iadvize.conversation.sdk.type.Language;
						public static bo: com.iadvize.conversation.sdk.type.Language;
						public static br: com.iadvize.conversation.sdk.type.Language;
						public static bs: com.iadvize.conversation.sdk.type.Language;
						public static ca: com.iadvize.conversation.sdk.type.Language;
						public static ce: com.iadvize.conversation.sdk.type.Language;
						public static ch: com.iadvize.conversation.sdk.type.Language;
						public static co: com.iadvize.conversation.sdk.type.Language;
						public static cr: com.iadvize.conversation.sdk.type.Language;
						public static cs: com.iadvize.conversation.sdk.type.Language;
						public static cu: com.iadvize.conversation.sdk.type.Language;
						public static cv: com.iadvize.conversation.sdk.type.Language;
						public static cy: com.iadvize.conversation.sdk.type.Language;
						public static da: com.iadvize.conversation.sdk.type.Language;
						public static de: com.iadvize.conversation.sdk.type.Language;
						public static dv: com.iadvize.conversation.sdk.type.Language;
						public static dz: com.iadvize.conversation.sdk.type.Language;
						public static ee: com.iadvize.conversation.sdk.type.Language;
						public static el: com.iadvize.conversation.sdk.type.Language;
						public static en: com.iadvize.conversation.sdk.type.Language;
						public static eo: com.iadvize.conversation.sdk.type.Language;
						public static es: com.iadvize.conversation.sdk.type.Language;
						public static et: com.iadvize.conversation.sdk.type.Language;
						public static eu: com.iadvize.conversation.sdk.type.Language;
						public static fa: com.iadvize.conversation.sdk.type.Language;
						public static ff: com.iadvize.conversation.sdk.type.Language;
						public static fi: com.iadvize.conversation.sdk.type.Language;
						public static fj: com.iadvize.conversation.sdk.type.Language;
						public static fo: com.iadvize.conversation.sdk.type.Language;
						public static fr: com.iadvize.conversation.sdk.type.Language;
						public static fy: com.iadvize.conversation.sdk.type.Language;
						public static ga: com.iadvize.conversation.sdk.type.Language;
						public static gd: com.iadvize.conversation.sdk.type.Language;
						public static gl: com.iadvize.conversation.sdk.type.Language;
						public static gn: com.iadvize.conversation.sdk.type.Language;
						public static gu: com.iadvize.conversation.sdk.type.Language;
						public static gv: com.iadvize.conversation.sdk.type.Language;
						public static ha: com.iadvize.conversation.sdk.type.Language;
						public static he: com.iadvize.conversation.sdk.type.Language;
						public static hi: com.iadvize.conversation.sdk.type.Language;
						public static ho: com.iadvize.conversation.sdk.type.Language;
						public static hr: com.iadvize.conversation.sdk.type.Language;
						public static ht: com.iadvize.conversation.sdk.type.Language;
						public static hu: com.iadvize.conversation.sdk.type.Language;
						public static hy: com.iadvize.conversation.sdk.type.Language;
						public static hz: com.iadvize.conversation.sdk.type.Language;
						public static ia: com.iadvize.conversation.sdk.type.Language;
						public static id: com.iadvize.conversation.sdk.type.Language;
						public static ie: com.iadvize.conversation.sdk.type.Language;
						public static ig: com.iadvize.conversation.sdk.type.Language;
						public static ii: com.iadvize.conversation.sdk.type.Language;
						public static ik: com.iadvize.conversation.sdk.type.Language;
						public static in: com.iadvize.conversation.sdk.type.Language;
						public static io: com.iadvize.conversation.sdk.type.Language;
						public static is: com.iadvize.conversation.sdk.type.Language;
						public static it: com.iadvize.conversation.sdk.type.Language;
						public static iu: com.iadvize.conversation.sdk.type.Language;
						public static iw: com.iadvize.conversation.sdk.type.Language;
						public static ja: com.iadvize.conversation.sdk.type.Language;
						public static ji: com.iadvize.conversation.sdk.type.Language;
						public static jv: com.iadvize.conversation.sdk.type.Language;
						public static ka: com.iadvize.conversation.sdk.type.Language;
						public static kg: com.iadvize.conversation.sdk.type.Language;
						public static ki: com.iadvize.conversation.sdk.type.Language;
						public static kj: com.iadvize.conversation.sdk.type.Language;
						public static kk: com.iadvize.conversation.sdk.type.Language;
						public static kl: com.iadvize.conversation.sdk.type.Language;
						public static km: com.iadvize.conversation.sdk.type.Language;
						public static kn: com.iadvize.conversation.sdk.type.Language;
						public static ko: com.iadvize.conversation.sdk.type.Language;
						public static kr: com.iadvize.conversation.sdk.type.Language;
						public static ks: com.iadvize.conversation.sdk.type.Language;
						public static ku: com.iadvize.conversation.sdk.type.Language;
						public static kv: com.iadvize.conversation.sdk.type.Language;
						public static kw: com.iadvize.conversation.sdk.type.Language;
						public static ky: com.iadvize.conversation.sdk.type.Language;
						public static la: com.iadvize.conversation.sdk.type.Language;
						public static lb: com.iadvize.conversation.sdk.type.Language;
						public static lg: com.iadvize.conversation.sdk.type.Language;
						public static li: com.iadvize.conversation.sdk.type.Language;
						public static ln: com.iadvize.conversation.sdk.type.Language;
						public static lo: com.iadvize.conversation.sdk.type.Language;
						public static lt: com.iadvize.conversation.sdk.type.Language;
						public static lu: com.iadvize.conversation.sdk.type.Language;
						public static lv: com.iadvize.conversation.sdk.type.Language;
						public static mg: com.iadvize.conversation.sdk.type.Language;
						public static mh: com.iadvize.conversation.sdk.type.Language;
						public static mi: com.iadvize.conversation.sdk.type.Language;
						public static mk: com.iadvize.conversation.sdk.type.Language;
						public static ml: com.iadvize.conversation.sdk.type.Language;
						public static mn: com.iadvize.conversation.sdk.type.Language;
						public static mo: com.iadvize.conversation.sdk.type.Language;
						public static mr: com.iadvize.conversation.sdk.type.Language;
						public static ms: com.iadvize.conversation.sdk.type.Language;
						public static mt: com.iadvize.conversation.sdk.type.Language;
						public static my: com.iadvize.conversation.sdk.type.Language;
						public static na: com.iadvize.conversation.sdk.type.Language;
						public static nb: com.iadvize.conversation.sdk.type.Language;
						public static nd: com.iadvize.conversation.sdk.type.Language;
						public static ne: com.iadvize.conversation.sdk.type.Language;
						public static ng: com.iadvize.conversation.sdk.type.Language;
						public static nl: com.iadvize.conversation.sdk.type.Language;
						public static nn: com.iadvize.conversation.sdk.type.Language;
						public static no: com.iadvize.conversation.sdk.type.Language;
						public static nr: com.iadvize.conversation.sdk.type.Language;
						public static nv: com.iadvize.conversation.sdk.type.Language;
						public static ny: com.iadvize.conversation.sdk.type.Language;
						public static oc: com.iadvize.conversation.sdk.type.Language;
						public static oj: com.iadvize.conversation.sdk.type.Language;
						public static om: com.iadvize.conversation.sdk.type.Language;
						public static or: com.iadvize.conversation.sdk.type.Language;
						public static os: com.iadvize.conversation.sdk.type.Language;
						public static pa: com.iadvize.conversation.sdk.type.Language;
						public static pi: com.iadvize.conversation.sdk.type.Language;
						public static pl: com.iadvize.conversation.sdk.type.Language;
						public static ps: com.iadvize.conversation.sdk.type.Language;
						public static pt: com.iadvize.conversation.sdk.type.Language;
						public static qu: com.iadvize.conversation.sdk.type.Language;
						public static rm: com.iadvize.conversation.sdk.type.Language;
						public static rn: com.iadvize.conversation.sdk.type.Language;
						public static ro: com.iadvize.conversation.sdk.type.Language;
						public static ru: com.iadvize.conversation.sdk.type.Language;
						public static rw: com.iadvize.conversation.sdk.type.Language;
						public static sa: com.iadvize.conversation.sdk.type.Language;
						public static sc: com.iadvize.conversation.sdk.type.Language;
						public static sd: com.iadvize.conversation.sdk.type.Language;
						public static se: com.iadvize.conversation.sdk.type.Language;
						public static sg: com.iadvize.conversation.sdk.type.Language;
						public static si: com.iadvize.conversation.sdk.type.Language;
						public static sk: com.iadvize.conversation.sdk.type.Language;
						public static sl: com.iadvize.conversation.sdk.type.Language;
						public static sm: com.iadvize.conversation.sdk.type.Language;
						public static sn: com.iadvize.conversation.sdk.type.Language;
						public static so: com.iadvize.conversation.sdk.type.Language;
						public static sq: com.iadvize.conversation.sdk.type.Language;
						public static sr: com.iadvize.conversation.sdk.type.Language;
						public static ss: com.iadvize.conversation.sdk.type.Language;
						public static st: com.iadvize.conversation.sdk.type.Language;
						public static su: com.iadvize.conversation.sdk.type.Language;
						public static sv: com.iadvize.conversation.sdk.type.Language;
						public static sw: com.iadvize.conversation.sdk.type.Language;
						public static ta: com.iadvize.conversation.sdk.type.Language;
						public static te: com.iadvize.conversation.sdk.type.Language;
						public static tg: com.iadvize.conversation.sdk.type.Language;
						public static th: com.iadvize.conversation.sdk.type.Language;
						public static ti: com.iadvize.conversation.sdk.type.Language;
						public static tk: com.iadvize.conversation.sdk.type.Language;
						public static tl: com.iadvize.conversation.sdk.type.Language;
						public static tn: com.iadvize.conversation.sdk.type.Language;
						public static to: com.iadvize.conversation.sdk.type.Language;
						public static tr: com.iadvize.conversation.sdk.type.Language;
						public static ts: com.iadvize.conversation.sdk.type.Language;
						public static tt: com.iadvize.conversation.sdk.type.Language;
						public static tw: com.iadvize.conversation.sdk.type.Language;
						public static ty: com.iadvize.conversation.sdk.type.Language;
						public static ug: com.iadvize.conversation.sdk.type.Language;
						public static uk: com.iadvize.conversation.sdk.type.Language;
						public static ur: com.iadvize.conversation.sdk.type.Language;
						public static uz: com.iadvize.conversation.sdk.type.Language;
						public static ve: com.iadvize.conversation.sdk.type.Language;
						public static vi: com.iadvize.conversation.sdk.type.Language;
						public static vo: com.iadvize.conversation.sdk.type.Language;
						public static wa: com.iadvize.conversation.sdk.type.Language;
						public static wo: com.iadvize.conversation.sdk.type.Language;
						public static xh: com.iadvize.conversation.sdk.type.Language;
						public static yi: com.iadvize.conversation.sdk.type.Language;
						public static yo: com.iadvize.conversation.sdk.type.Language;
						public static za: com.iadvize.conversation.sdk.type.Language;
						public static zh: com.iadvize.conversation.sdk.type.Language;
						public static zu: com.iadvize.conversation.sdk.type.Language;
						public static UNKNOWN__: com.iadvize.conversation.sdk.type.Language;
						public static valueOf(param0: string): com.iadvize.conversation.sdk.type.Language;
						public getRawValue(): string;
						public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.Language>;
					}
					export module Language {
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Language.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module adapters {
					export class MessageRecyclerViewAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
						public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter>;
						public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
						public getItem(param0: number): com.iadvize.conversation.ui.models.Message;
						public getItemViewType(param0: number): number;
						public getMessages(): java.util.List<com.iadvize.conversation.ui.models.Message>;
						public getItemCount(): number;
						public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
						public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.Message>, param1: number, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: com.iadvize.conversation.ui.models.MessagesConfiguration);
						public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
						public setMessages(param0: java.util.List<any>, param1: boolean): void;
						public setMessages(param0: java.util.List<com.iadvize.conversation.ui.models.Message>): void;
					}
					export module MessageRecyclerViewAdapter {
						export class MessageItemType {
							public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
							public static TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static PREVIEW_LINK: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static LINK_SENT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static IMAGE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static FILE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static QUICK_REPLY: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static TRANSLATED: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static GENERIC_CARD: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static GENERIC_CARD_BUNDLE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static PRODUCT_OFFER: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static PRODUCT_OFFER_BUNDLE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static SNOOZE: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static TRANSFER: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static TYPING_INDICATOR: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static SYSTEM: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static LOAD_PAST_CONVERSATION: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static VIDEO_ESCALATION: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
							public static values(): androidNative.Array<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
							public static valueOf(param0: string): com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module adapters {
					export class a implements com.iadvize.conversation.ui.views.GenericCardView.a {
						public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.a>;
						public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
						public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
						public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
						public getCount(): number;
						public constructor(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<com.iadvize.conversation.ui.models.MessageKind.Card>, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: G.a, param4: G.c);
						public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module adapters {
					export class b {
						public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.b>;
						public getNewListSize(): number;
						public areItemsTheSame(param0: number, param1: number): boolean;
						public areContentsTheSame(param0: number, param1: number): boolean;
						public constructor(param0: java.util.List<any>, param1: java.util.List<any>);
						public getOldListSize(): number;
						public getChangePayload(param0: number, param1: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module adapters {
					export class c implements com.iadvize.conversation.ui.views.ProductOfferView.a {
						public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.c>;
						public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
						public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
						public constructor(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: G.a, param4: G.c);
						public getCount(): number;
						public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
						public instantiateItem(param0: globalAndroid.view.ViewGroup, param1: number): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class Language {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.Language>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Language>;
						public component3(): boolean;
						public describeContents(): number;
						public isSelected(): boolean;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: string, param2: boolean);
						public toString(): string;
						public getDisplayValue(): string;
						public component2(): string;
						public setSelected(param0: boolean): void;
						public copy(param0: string, param1: string, param2: boolean): com.iadvize.conversation.ui.models.Language;
						public getCode(): string;
					}
					export module Language {
						export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Language> {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.Language.a>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class LanguageSettings {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.LanguageSettings>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.LanguageSettings>;
						public setSourceLanguage(param0: com.iadvize.conversation.ui.models.Language): void;
						public getSourceLanguage(): com.iadvize.conversation.ui.models.Language;
						public describeContents(): number;
						public setTargetLanguage(param0: com.iadvize.conversation.ui.models.Language): void;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getTargetLanguage(): com.iadvize.conversation.ui.models.Language;
						public getAutomaticTranslation(): boolean;
						public constructor(param0: com.iadvize.conversation.ui.models.Language, param1: com.iadvize.conversation.ui.models.Language, param2: boolean);
						public setAutomaticTranslation(param0: boolean): void;
					}
					export module LanguageSettings {
						export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.LanguageSettings> {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.LanguageSettings.a>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class LanguageType {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.LanguageType>;
						public static SOURCE: com.iadvize.conversation.ui.models.LanguageType;
						public static TARGET: com.iadvize.conversation.ui.models.LanguageType;
						public static values(): androidNative.Array<com.iadvize.conversation.ui.models.LanguageType>;
						public static valueOf(param0: string): com.iadvize.conversation.ui.models.LanguageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class LoadPastConversationMessage extends com.iadvize.conversation.ui.models.Message {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.LoadPastConversationMessage>;
						public constructor();
						public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind, param4: com.iadvize.conversation.ui.models.MessageState, param5: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class Message {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.Message>;
						public static Companion: com.iadvize.conversation.ui.models.Message.a;
						public isRightAlignment(): boolean;
						public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind, param4: com.iadvize.conversation.ui.models.MessageState, param5: boolean);
						public getForceToBeAloneOnItsGroup(): boolean;
						public getMessageState(): com.iadvize.conversation.ui.models.MessageState;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public isLastMessageOfGroup(param0: com.iadvize.conversation.ui.models.Message): boolean;
						public isLeftAlignment(): boolean;
						public isAloneOnGroup(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message): boolean;
						public setForceToBeAloneOnItsGroup(param0: boolean): void;
						public isSameDays(param0: com.iadvize.conversation.ui.models.Message): boolean;
						public getVerticalPosition(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message): G.c;
						public getSender(): com.iadvize.conversation.ui.models.Sender;
						public getMessageKind(): com.iadvize.conversation.ui.models.MessageKind;
						public getId(): string;
						public getSentDate(): java.util.Date;
						public isFirstMessageOfGroup(param0: com.iadvize.conversation.ui.models.Message): boolean;
					}
					export module Message {
						export class a {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.Message.a>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export abstract class MessageAttachment {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment>;
					}
					export module MessageAttachment {
						export abstract class Action {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
							public constructor();
							public getType(): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
						}
						export class ActionType {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ActionType>;
							public static LINK: com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
							public static SELECT: com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
							public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.ActionType>;
							public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
						}
						export class Card extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Card>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Card.a;
							public static TYPE_NAME: string;
							public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
							public getText(): string;
							public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
							public getTitle(): string;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
						}
						export module Card {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Card.a>;
							}
						}
						export class CardBundle extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardBundle>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.CardBundle.a;
							public static TYPE_NAME: string;
							public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.Card>, param1: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
							public getCards(): java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.Card>;
							public getActionType(): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
						}
						export module CardBundle {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardBundle.a>;
							}
						}
						export class CardImage {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardImage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.CardImage>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getUrl(): string;
							public constructor(param0: string, param1: string);
							public describeContents(): number;
							public getDescription(): string;
						}
						export module CardImage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.CardImage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardImage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class Companion {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Companion>;
							public parseFromXMPP(param0: string): com.iadvize.conversation.ui.models.MessageAttachment;
						}
						export class EscalationAccept extends com.iadvize.conversation.ui.models.MessageAttachment.EscalationAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.EscalationAccept>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.EscalationAccept.a;
							public static TYPE_NAME: string;
							public constructor(param0: string, param1: string);
						}
						export module EscalationAccept {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.EscalationAccept.a>;
							}
						}
						export abstract class EscalationAttachment extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.EscalationAttachment>;
							public constructor(param0: string, param1: string);
							public getType(): string;
							public getCorrelationId(): string;
						}
						export class EscalationEnded extends com.iadvize.conversation.ui.models.MessageAttachment.EscalationAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.EscalationEnded>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.EscalationEnded.a;
							public static TYPE_NAME: string;
							public constructor(param0: string, param1: string);
							public constructor(param0: string, param1: string, param2: string);
							public getReason(): string;
						}
						export module EscalationEnded {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.EscalationEnded.a>;
							}
						}
						export class EscalationInvitation extends com.iadvize.conversation.ui.models.MessageAttachment.EscalationAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.EscalationInvitation>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.EscalationInvitation.a;
							public static TYPE_NAME: string;
							public constructor(param0: string, param1: string);
						}
						export module EscalationInvitation {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.EscalationInvitation.a>;
							}
						}
						export class File extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.File>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.File>;
							public static TYPE_NAME: string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getMimeType(): string;
							public getUrl(): string;
							public describeContents(): number;
							public constructor(param0: string, param1: string, param2: string);
							public getFileName(): string;
							public toImage(): com.iadvize.conversation.ui.models.MessageAttachment.Image;
							public isImage(): boolean;
						}
						export module File {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.File.Companion>;
								public parseFromXMPP(param0: org.json.JSONObject): com.iadvize.conversation.ui.models.MessageAttachment.File;
							}
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.File> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.File.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class Image extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Image>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.Image>;
							public static TYPE_NAME: string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getMimeType(): string;
							public getUrl(): string;
							public describeContents(): number;
							public constructor(param0: string, param1: string, param2: string);
							public getFileName(): string;
						}
						export module Image {
							export class Companion {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Image.Companion>;
								public parseFromXMPP(param0: org.json.JSONObject): com.iadvize.conversation.ui.models.MessageAttachment.Image;
							}
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.Image> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Image.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class Link extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Link>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Link.a;
							public static TYPE_NAME: string;
							public getUrl(): string;
							public constructor(param0: string, param1: string);
							public getName(): string;
						}
						export module Link {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Link.a>;
							}
						}
						export class LinkAction extends com.iadvize.conversation.ui.models.MessageAttachment.Action {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
							public getUrl(): string;
							public constructor(param0: string, param1: string);
							public describeContents(): number;
							public getTitle(): string;
						}
						export module LinkAction {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class Offer extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Offer>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Offer.a;
							public static TYPE_NAME: string;
							public getUrl(): string;
							public constructor(param0: string, param1: string);
							public getDescription(): string;
						}
						export module Offer {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Offer.a>;
							}
						}
						export class Product extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Product>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.Product.a;
							public static TYPE_NAME: string;
							public getProductUrl(): string;
							public constructor(param0: string, param1: string);
							public getTitle(): string;
						}
						export module Product {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Product.a>;
							}
						}
						export class ProductOffer extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.a;
							public static TYPE_NAME: string;
							public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
							public getAvailability(): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability;
							public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
							public getPrice(): string;
							public getName(): string;
							public getOfferPrice(): string;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: string, param4: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability, param5: string, param6: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
							public getDescription(): string;
						}
						export module ProductOffer {
							export class Availability {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability>;
								public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability>;
								public describeContents(): number;
								public getStatus(): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
								public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
								public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus);
							}
							export module Availability {
								export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability> {
									public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability.a>;
									public newArray(param0: number): androidNative.Array<any>;
									public constructor();
									public createFromParcel(param0: globalAndroid.os.Parcel): any;
								}
							}
							export class AvailabilityStatus {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus>;
								public static AVAILABLE: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
								public static UNAVAILABLE: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
								public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus;
								public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.AvailabilityStatus>;
							}
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.a>;
							}
						}
						export class ProductOfferBundle extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOfferBundle>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.ProductOfferBundle.a;
							public static TYPE_NAME: string;
							public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>);
							public getProductOffers(): java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>;
						}
						export module ProductOfferBundle {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOfferBundle.a>;
							}
						}
						export class QuickReplyMenu extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.QuickReplyMenu>;
							public static Companion: com.iadvize.conversation.ui.models.MessageAttachment.QuickReplyMenu.a;
							public static TYPE_NAME: string;
							public constructor(param0: string, param1: androidNative.Array<string>);
							public getMessage(): string;
							public getChoices(): androidNative.Array<string>;
						}
						export module QuickReplyMenu {
							export class a {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.QuickReplyMenu.a>;
							}
						}
						export class SelectAction extends com.iadvize.conversation.ui.models.MessageAttachment.Action {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
							public constructor(param0: string);
							public describeContents(): number;
							public getTitle(): string;
						}
						export module SelectAction {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class Unsupported extends com.iadvize.conversation.ui.models.MessageAttachment {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Unsupported>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export abstract class MessageKind {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind>;
					}
					export module MessageKind {
						export class Card extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Card>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Card>;
							public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
							public getText(): string;
							public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public getTitle(): string;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
						}
						export module Card {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Card> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Card.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class CardBundle extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.CardBundle>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.CardBundle>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.MessageKind.Card>, param1: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
							public getCards(): java.util.List<com.iadvize.conversation.ui.models.MessageKind.Card>;
							public getActionType(): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
						}
						export module CardBundle {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.CardBundle> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.CardBundle.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class FileMessage extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.FileMessage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.FileMessage>;
							public getFile(): com.iadvize.conversation.ui.models.MessageAttachment.File;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.File);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
						}
						export module FileMessage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.FileMessage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.FileMessage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class ImageMessage extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ImageMessage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ImageMessage>;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.File);
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Image);
							public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.Image;
						}
						export module ImageMessage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ImageMessage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ImageMessage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class LinkSent extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LinkSent>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LinkSent>;
							public getText(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string);
							public describeContents(): number;
							public getLink(): string;
						}
						export module LinkSent {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LinkSent> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LinkSent.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class LoadPastConversation extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation>;
							public constructor();
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
						}
						export module LoadPastConversation {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class ProductOffer extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>;
							public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
							public getAvailability(): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability;
							public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getPrice(): string;
							public getName(): string;
							public describeContents(): number;
							public getOfferPrice(): string;
							public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: string, param4: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability, param5: string, param6: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
							public getDescription(): string;
						}
						export module ProductOffer {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOffer> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOffer.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class ProductOfferBundle extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
							public getProductOffers(): java.util.List<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>;
							public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.MessageKind.ProductOffer>);
						}
						export module ProductOfferBundle {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class QuickReplyMessage extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: androidNative.Array<string>);
							public describeContents(): number;
							public getMessage(): string;
							public getChoices(): androidNative.Array<string>;
						}
						export module QuickReplyMessage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class SnoozeMessage extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.SnoozeMessage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.SnoozeMessage>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string);
							public describeContents(): number;
							public getFromName(): string;
						}
						export module SnoozeMessage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.SnoozeMessage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.SnoozeMessage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class SystemMessage extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.SystemMessage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.SystemMessage>;
							public getContent(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string);
							public describeContents(): number;
						}
						export module SystemMessage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.SystemMessage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.SystemMessage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class Text extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Text>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Text>;
							public getContent(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string);
							public describeContents(): number;
						}
						export module Text {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Text> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Text.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class TransferMessage extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TransferMessage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TransferMessage>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string);
							public describeContents(): number;
							public getFromName(): string;
							public getReason(): string;
						}
						export module TransferMessage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TransferMessage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TransferMessage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class TranslatedMessage extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TranslatedMessage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TranslatedMessage>;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public getTranslation(): com.iadvize.conversation.ui.models.Translation;
							public describeContents(): number;
							public constructor(param0: com.iadvize.conversation.ui.models.Translation);
						}
						export module TranslatedMessage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TranslatedMessage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TranslatedMessage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class TypingIndicatorMessage extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TypingIndicatorMessage>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TypingIndicatorMessage>;
							public constructor(param0: string, param1: boolean);
							public isComposing(): boolean;
							public getContent(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public describeContents(): number;
						}
						export module TypingIndicatorMessage {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TypingIndicatorMessage> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TypingIndicatorMessage.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
						export class VideoEscalation extends com.iadvize.conversation.ui.models.MessageKind {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation>;
							public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation>;
							public getText(): string;
							public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
							public constructor(param0: string, param1: string, param2: boolean);
							public describeContents(): number;
							public getWithOptions(): boolean;
							public getCorrelationId(): string;
						}
						export module VideoEscalation {
							export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation> {
								public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation.a>;
								public createFromParcel(param0: globalAndroid.os.Parcel): any;
								public constructor();
								public newArray(param0: number): androidNative.Array<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class MessageState {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageState>;
						public static SENDING: com.iadvize.conversation.ui.models.MessageState;
						public static RECEIVED: com.iadvize.conversation.ui.models.MessageState;
						public static FAILURE: com.iadvize.conversation.ui.models.MessageState;
						public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageState>;
						public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageState;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class MessagesConfiguration {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessagesConfiguration>;
						public getMySenderId(): string;
						public constructor(param0: string, param1: globalAndroid.graphics.Typeface, param2: java.lang.Integer);
						public getTypeface(): globalAndroid.graphics.Typeface;
						public getRightMessageBackgroundColor(): java.lang.Integer;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class PreviewLink extends com.iadvize.conversation.ui.models.PreviewLinkResult {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.PreviewLink>;
						public component3(): string;
						public copy(param0: string, param1: string, param2: string, param3: string): com.iadvize.conversation.ui.models.PreviewLink;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public toString(): string;
						public getTitle(): string;
						public constructor(param0: string, param1: string, param2: string, param3: string);
						public component4(): string;
						public component2(): string;
						public getDescription(): string;
						public getImageUrl(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class PreviewLinkError extends com.iadvize.conversation.ui.models.PreviewLinkResult {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.PreviewLinkError>;
						public getError(): java.io.IOException;
						public component2(): string;
						public constructor(param0: string, param1: string, param2: java.io.IOException);
						public component3(): java.io.IOException;
						public copy(param0: string, param1: string, param2: java.io.IOException): com.iadvize.conversation.ui.models.PreviewLinkError;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUrl(): string;
						public toString(): string;
						public getTitle(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export abstract class PreviewLinkResult {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.PreviewLinkResult>;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class Sender {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.Sender>;
						public getDisplayName(): string;
						public getAlignment(): com.iadvize.conversation.ui.models.SenderAlignment;
						public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
						public getId(): string;
						public getAvatar(): com.iadvize.conversation.ui.models.SenderAvatar;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class SenderAlignment {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAlignment>;
						public static LEFT: com.iadvize.conversation.ui.models.SenderAlignment;
						public static RIGHT: com.iadvize.conversation.ui.models.SenderAlignment;
						public static values(): androidNative.Array<com.iadvize.conversation.ui.models.SenderAlignment>;
						public static valueOf(param0: string): com.iadvize.conversation.ui.models.SenderAlignment;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export abstract class SenderAvatar {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar>;
						public isPresent(): java.lang.Boolean;
					}
					export module SenderAvatar {
						export class Image extends com.iadvize.conversation.ui.models.SenderAvatar {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar.Image>;
							public getValue(): globalAndroid.graphics.drawable.Drawable;
							public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Boolean);
						}
						export class Url extends com.iadvize.conversation.ui.models.SenderAvatar {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar.Url>;
							public constructor(param0: java.net.URL, param1: java.lang.Boolean);
							public getValue(): java.net.URL;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module models {
					export class Translation {
						public static class: java.lang.Class<com.iadvize.conversation.ui.models.Translation>;
						public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Translation>;
						public describeContents(): number;
						public component3(): com.iadvize.conversation.ui.models.Language;
						public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
						public getTargetLanguage(): com.iadvize.conversation.ui.models.Language;
						public component1(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.Language, param3: com.iadvize.conversation.ui.models.Language);
						public component4(): com.iadvize.conversation.ui.models.Language;
						public getTranslatedText(): string;
						public toString(): string;
						public copy(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.Language, param3: com.iadvize.conversation.ui.models.Language): com.iadvize.conversation.ui.models.Translation;
						public getOriginalText(): string;
						public getSourceLanguage(): com.iadvize.conversation.ui.models.Language;
						public component2(): string;
					}
					export module Translation {
						export class a extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Translation> {
							public static class: java.lang.Class<com.iadvize.conversation.ui.models.Translation.a>;
							public constructor();
							public createFromParcel(param0: globalAndroid.os.Parcel): any;
							public newArray(param0: number): androidNative.Array<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module viewholders {
					export class MessageListeners {
						public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.MessageListeners>;
						/**
						 * Constructs a new instance of the com.iadvize.conversation.ui.viewholders.MessageListeners interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
							onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
							onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
							onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string): void;
							onCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.Card, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
							onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
							onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: string): void;
							onMessageLinkClicked(param0: com.iadvize.conversation.ui.models.Message, param1: globalAndroid.net.Uri): void;
							onLoadPastConversationClicked(param0: com.iadvize.conversation.ui.models.Message): void;
							onVideoEscalationClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string, param2: boolean): void;
						});
						public constructor();
						public onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: string): void;
						public onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
						public onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string): void;
						public onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
						public onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
						public onMessageLinkClicked(param0: com.iadvize.conversation.ui.models.Message, param1: globalAndroid.net.Uri): void;
						public onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
						public onCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.Card, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
						public onLoadPastConversationClicked(param0: com.iadvize.conversation.ui.models.Message): void;
						public onVideoEscalationClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string, param2: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module views {
					export class ComposeView {
						public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView>;
						public static Companion: com.iadvize.conversation.ui.views.ComposeView.a;
						public setSendButtonEnabled(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context);
						public setTranslationActivated(param0: boolean): void;
						public setImageButtonClickListener(param0: com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener): void;
						public onAttachedToWindow(): void;
						public setTypeFace(param0: globalAndroid.graphics.Typeface): void;
						public setSendButtonColor(param0: number): void;
						public setTextFocusChangedListener(param0: com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener): void;
						public setFileButtonClickListener(param0: com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener): void;
						public getText(): string;
						public isTranslationActivated(): boolean;
						public hasTextFocus(): boolean;
						public setTextChangedListener(param0: com.iadvize.conversation.ui.views.ComposeView.TextChangedListener): void;
						public setSendButtonClickListener(param0: com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener): void;
						public dispatchSaveInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
						public getTextChangedListener(): com.iadvize.conversation.ui.views.ComposeView.TextChangedListener;
						public setFileButtonVisible(param0: boolean): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public getSendButtonClickListener(): com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener;
						public isImageButtonVisible(): boolean;
						public getTranslateButtonClickListener(): com.iadvize.conversation.ui.views.ComposeView.TranslateButtonClickListener;
						public dispatchRestoreInstanceState(param0: globalAndroid.util.SparseArray<globalAndroid.os.Parcelable>): void;
						public onDetachedFromWindow(): void;
						public clearText(): void;
						public getFileButtonClickListener(): com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener;
						public getTextFocusChangedListener(): com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener;
						public getImageButtonClickListener(): com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener;
						public isSendButtonEnabled(): boolean;
						public setSelection(param0: number): void;
						public setTranslateButtonClickListener(param0: com.iadvize.conversation.ui.views.ComposeView.TranslateButtonClickListener): void;
						public setText(param0: string): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public onSaveInstanceState(): globalAndroid.os.Parcelable;
						public onRestoreInstanceState(param0: globalAndroid.os.Parcelable): void;
						public setImageButtonVisible(param0: boolean): void;
						public isFileButtonVisible(): boolean;
					}
					export module ComposeView {
						export class FileButtonClickListener {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$FileButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onFileButtonClicked(): void;
							});
							public constructor();
							public onFileButtonClicked(): void;
						}
						export class ImageButtonClickListener {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$ImageButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onImageButtonClicked(): void;
							});
							public constructor();
							public onImageButtonClicked(): void;
						}
						export class SendButtonClickListener {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$SendButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onSendButtonClicked(param0: string): void;
							});
							public constructor();
							public onSendButtonClicked(param0: string): void;
						}
						export class TextChangedListener {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TextChangedListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTextChanged(param0: string): void;
							});
							public constructor();
							public onTextChanged(param0: string): void;
						}
						export class TextFocusChangedListener {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TextFocusChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTextFocusChanged(param0: boolean): void;
							});
							public constructor();
							public onTextFocusChanged(param0: boolean): void;
						}
						export class TranslateButtonClickListener {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TranslateButtonClickListener>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TranslateButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onTranslateButtonClicked(param0: string): void;
							});
							public constructor();
							public onTranslateButtonClicked(param0: string): void;
						}
						export class a {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.a>;
						}
						export class b {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.b>;
							public afterTextChanged(param0: globalAndroid.text.Editable): void;
							public constructor(param0: com.iadvize.conversation.ui.views.ComposeView);
							public onTextChanged(param0: string, param1: number, param2: number, param3: number): void;
							public beforeTextChanged(param0: string, param1: number, param2: number, param3: number): void;
						}
						export class c {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.c>;
							public onTransitionEnd(param0: androidx.transition.Transition): void;
							public onTransitionCancel(param0: androidx.transition.Transition): void;
							public onTransitionStart(param0: androidx.transition.Transition): void;
							public onTransitionPause(param0: androidx.transition.Transition): void;
							public onTransitionResume(param0: androidx.transition.Transition): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module views {
					export class GenericCardView {
						public static class: java.lang.Class<com.iadvize.conversation.ui.views.GenericCardView>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public a(param0: com.iadvize.conversation.ui.models.MessageKind.Card): void;
						public a(param0: G.a, param1: G.c, param2: G.c): void;
						public a(param0: com.iadvize.conversation.ui.views.GenericCardView.a): void;
					}
					export module GenericCardView {
						export class a {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.GenericCardView.a>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.ui.views.GenericCardView$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
							});
							public constructor();
							public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
						}
						export class b {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.GenericCardView.b>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module views {
					export class ProductOfferView {
						public static class: java.lang.Class<com.iadvize.conversation.ui.views.ProductOfferView>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public a(param0: com.iadvize.conversation.ui.views.ProductOfferView.a): void;
						public a(param0: com.iadvize.conversation.ui.models.MessageKind.ProductOffer): void;
						public a(param0: G.a, param1: G.c, param2: G.c): void;
					}
					export module ProductOfferView {
						export class a {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ProductOfferView.a>;
							/**
							 * Constructs a new instance of the com.iadvize.conversation.ui.views.ProductOfferView$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
							});
							public constructor();
							public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
						}
						export class b {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.ProductOfferView.b>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module views {
					export class TypewriterView {
						public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView>;
						public a(): void;
						public a(param0: string): com.iadvize.conversation.ui.views.TypewriterView;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					}
					export module TypewriterView {
						export abstract class a {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.a>;
							public a(): void;
							public constructor(param0: java.lang.Runnable);
							public c(): void;
							public d(): boolean;
							public b(): void;
						}
						export class b extends com.iadvize.conversation.ui.views.TypewriterView.a {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.b>;
							public constructor(param0: java.lang.Runnable);
							public constructor(param0: string, param1: number, param2: java.lang.Runnable);
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module views {
					export class WaitingDotsView {
						public static class: java.lang.Class<com.iadvize.conversation.ui.views.WaitingDotsView>;
						public constructor(param0: globalAndroid.content.Context);
						public c(): void;
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public a(): boolean;
						public b(): void;
					}
					export module WaitingDotsView {
						export class a {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.WaitingDotsView.a>;
							public onAnimationEnd(param0: globalAndroid.animation.Animator): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module views {
					export class WrapContentViewPager {
						public static class: java.lang.Class<com.iadvize.conversation.ui.views.WrapContentViewPager>;
						public constructor(param0: globalAndroid.content.Context);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public onMeasure(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module iadvize {
		export module conversation {
			export module ui {
				export module views {
					export module previewlink {
						export class PreviewLinkView implements I.a.a {
							public static class: java.lang.Class<com.iadvize.conversation.ui.views.previewlink.PreviewLinkView>;
							public a(param0: com.iadvize.conversation.ui.models.PreviewLinkResult): void;
							public a(param0: number): void;
							public onDetachedFromWindow(): void;
							public static a(param0: com.iadvize.conversation.ui.views.previewlink.PreviewLinkView, param1: G.a, param2: G.c): void;
							public a(param0: string, param1: string): void;
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
							public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module d {
	export class a {
		public static class: java.lang.Class<d.a>;
		/**
		 * Constructs a new instance of the d.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
		});
		public constructor();
		public a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
	}
}

declare module d {
	export class b extends com.iadvize.conversation.sdk.feature.chatbox.ChatboxController {
		public static class: java.lang.Class<d.b>;
		public constructor();
		public a(): com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration;
		public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>): void;
		public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
		public isChatboxPresented(): boolean;
		public b(): java.util.List<d.a>;
		public presentChatbox(param0: globalAndroid.content.Context): void;
		public a(param0: m.c): void;
		public setupChatbox(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
	}
}

declare module d {
	export class c implements d.d, com.iadvize.conversation.ui.viewholders.MessageListeners, com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener, com.iadvize.conversation.ui.views.ComposeView.TextChangedListener, com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener, com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener, com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener {
		public static class: java.lang.Class<d.c>;
		public onDetach(): void;
		public onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
		public a(param0: f.x): void;
		public c(param0: java.lang.Throwable): void;
		public onTextChanged(param0: string): void;
		public d(param0: f.x): void;
		public onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
		public onImageButtonClicked(): void;
		public onStop(): void;
		public onDestroyView(): void;
		public a(param0: boolean): void;
		public a(param0: java.lang.Throwable): void;
		public onVideoEscalationClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string, param2: boolean): void;
		public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
		public onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
		public onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: string): void;
		public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
		public constructor();
		public b(param0: f.x): void;
		public onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
		public onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string): void;
		public onMessageLinkClicked(param0: com.iadvize.conversation.ui.models.Message, param1: globalAndroid.net.Uri): void;
		public a(param0: boolean, param1: boolean): void;
		public a(): void;
		public a(param0: e.h): void;
		public b(param0: java.lang.Throwable): void;
		public onTextFocusChanged(param0: boolean): void;
		public onCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.Card, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
		public c(param0: f.x): void;
		public onLoadPastConversationClicked(param0: com.iadvize.conversation.ui.models.Message): void;
		public onSendButtonClicked(param0: string): void;
		public onAttach(param0: globalAndroid.content.Context): void;
		public onFileButtonClicked(): void;
	}
	export module c {
		export class a {
			public static class: java.lang.Class<d.c.a>;
		}
		export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<d.c.b>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<d.c.c>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module c {
			export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<d.c.c.a>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
		}
		export class d extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<d.c.d>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module d {
			export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<d.c.d.a>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
		}
	}
}

declare module d {
	export class d {
		public static class: java.lang.Class<d.d>;
		/**
		 * Constructs a new instance of the d.d interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
			a(param0: boolean, param1: boolean): void;
			c(param0: java.lang.Throwable): void;
			b(param0: java.lang.Throwable): void;
			a(param0: java.lang.Throwable): void;
			c(param0: f.x): void;
			a(param0: f.x): void;
			b(param0: f.x): void;
			d(param0: f.x): void;
			a(param0: boolean): void;
			a(): void;
		});
		public constructor();
		public b(param0: f.x): void;
		public d(param0: f.x): void;
		public b(param0: java.lang.Throwable): void;
		public c(param0: f.x): void;
		public a(param0: f.x): void;
		public a(param0: boolean): void;
		public a(param0: boolean, param1: boolean): void;
		public a(param0: java.lang.Throwable): void;
		public c(param0: java.lang.Throwable): void;
		public a(): void;
	}
	export module d {
		export class a {
			public static class: java.lang.Class<d.d.a>;
		}
	}
}

declare module e {
	export abstract class a {
		public static class: java.lang.Class<e.a>;
		public constructor();
		public onDestroy(): void;
		public a(param0: com.iadvize.conversation.ui.models.MessageAttachment): void;
		public b(param0: boolean): void;
		public a(param0: e.h): void;
	}
	export module a {
		export class a {
			public static class: java.lang.Class<e.a.a>;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
		}
	}
}

declare module e {
	export class b {
		public static class: java.lang.Class<e.b>;
		public constructor();
		public a(param0: globalAndroid.content.Context, param1: number): void;
	}
}

declare module e {
	export class c {
		public static class: java.lang.Class<e.c>;
		public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
		public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
	}
}

declare module e {
	export class d {
		public static class: java.lang.Class<e.d>;
		public constructor();
		public a(param0: string, param1: string, param2: androidNative.Array<number>, param3: any): any;
	}
	export module d {
		export class a {
			public static class: java.lang.Class<e.d.a>;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module e {
	export class e {
		public static class: java.lang.Class<e.e>;
		public a(): string;
		public b(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module e {
	export class f {
		public static class: java.lang.Class<e.f>;
		public static c: e.f.a;
		public constructor();
		public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
		public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
	}
	export module f {
		export class a {
			public static class: java.lang.Class<e.f.a>;
		}
	}
}

declare module e {
	export class g extends com.bumptech.glide.request.target.ImageViewTarget<globalAndroid.graphics.Bitmap> {
		public static class: java.lang.Class<e.g>;
		public setResource(param0: any): void;
	}
}

declare module e {
	export class h {
		public static class: java.lang.Class<e.h>;
		public a(): string;
		public d(): globalAndroid.net.Uri;
		public b(): string;
		public equals(param0: any): boolean;
		public constructor(param0: globalAndroid.net.Uri, param1: string, param2: string, param3: string, param4: number);
		public c(): number;
		public hashCode(): number;
		public toString(): string;
	}
}

declare module f {
	export class A extends f.x {
		public static class: java.lang.Class<f.A>;
		public constructor(param0: string, param1: java.util.Date);
	}
}

declare module f {
	export class B extends f.x {
		public static class: java.lang.Class<f.B>;
		public constructor(param0: string, param1: androidNative.Array<string>);
	}
}

declare module f {
	export class C extends f.x {
		public static class: java.lang.Class<f.C>;
		public g(): androidNative.Array<string>;
		public h(): string;
		public constructor(param0: string, param1: androidNative.Array<string>);
	}
}

declare module f {
	export class D extends f.x {
		public static class: java.lang.Class<f.D>;
		public g(): string;
		public constructor(param0: string);
	}
}

declare module f {
	export class E extends f.x {
		public static class: java.lang.Class<f.E>;
		public g(): string;
		public constructor(param0: string);
	}
}

declare module f {
	export class F extends f.x {
		public static class: java.lang.Class<f.F>;
		public g(): androidNative.Array<string>;
		public h(): string;
		public constructor(param0: string, param1: androidNative.Array<string>);
	}
}

declare module f {
	export class G extends f.x {
		public static class: java.lang.Class<f.G>;
		public g(): string;
		public constructor(param0: string);
	}
}

declare module f {
	export class H extends f.x {
		public static class: java.lang.Class<f.H>;
		public constructor();
	}
}

declare module f {
	export class I extends f.x {
		public static class: java.lang.Class<f.I>;
		public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment);
	}
}

declare module f {
	export class J extends f.x {
		public static class: java.lang.Class<f.J>;
		public constructor(param0: string, param1: com.iadvize.conversation.ui.models.MessageState, param2: java.util.Date);
	}
}

declare module f {
	export class K extends f.x {
		public static class: java.lang.Class<f.K>;
		public g(): androidNative.Array<number>;
		public constructor(param0: f.x, param1: androidNative.Array<number>);
	}
}

declare module f {
	export class a {
		public static class: java.lang.Class<f.a>;
		public constructor();
		public a(param0: java.lang.Class<any>): boolean;
		public d(param0: java.lang.Class<any>): void;
		public c(): f.x;
		public static a(param0: f.a, param1: java.util.List<any>): void;
		public a(param0: java.util.List<any>): void;
		public a(param0: f.x): void;
		public a(param0: string): f.x;
		public b(): java.util.List<f.x>;
		public a(): void;
		public e(param0: java.lang.Class<any>): void;
	}
	export module a {
		export class a<T>  extends java.util.Comparator<any> {
			public static class: java.lang.Class<f.a.a<any>>;
			public compare(param0: any, param1: any): number;
			public constructor();
		}
		export class b<T>  extends java.util.Comparator<any> {
			public static class: java.lang.Class<f.a.b<any>>;
			public compare(param0: any, param1: any): number;
			public constructor();
		}
	}
}

declare module f {
	export class b<T>  extends java.util.Comparator<any> {
		public static class: java.lang.Class<f.b<any>>;
		public constructor();
		public compare(param0: any, param1: any): number;
	}
}

declare module f {
	export class c<T>  extends java.util.Comparator<any> {
		public static class: java.lang.Class<f.c<any>>;
		public constructor();
		public compare(param0: any, param1: any): number;
	}
}

declare module f {
	export class d extends java.lang.Object implements any<f.x,java.lang.Boolean>  {
		public static class: java.lang.Class<f.d>;
		public invoke(param0: any): any;
	}
}

declare module f {
	export class e<T>  extends java.util.Comparator<any> {
		public static class: java.lang.Class<f.e<any>>;
		public constructor();
		public compare(param0: any, param1: any): number;
	}
}

declare module f {
	export class f extends java.lang.Object implements any<f.x,java.lang.Boolean>  {
		public static class: java.lang.Class<f.f>;
		public invoke(param0: any): any;
	}
}

declare module f {
	export class g implements com.iadvize.conversation.sdk.feature.conversation.ConversationController, g.e.a, i.a.a {
		public static class: java.lang.Class<f.g>;
		public static b(param0: f.g, param1: f.x): void;
		public ongoingConversation(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
		public c(param0: string): void;
		public m(): boolean;
		public v(): any;
		public h(): void;
		public t(): void;
		public a(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
		public a(param0: java.lang.Throwable): void;
		public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>;
		public constructor(param0: n.a, param1: t.b, param2: com.iadvize.conversation.sdk.h);
		public a(param0: boolean, param1: boolean, param2: any): any;
		public b(param0: string): void;
		public d(): void;
		public a(param0: com.iadvize.conversation.sdk.feature.gdpr.GDPROption): void;
		public e(): void;
		public a(param0: org.jivesoftware.smack.XMPPConnection): void;
		public a(param0: u.a): void;
		public r(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
		public s(): f.w;
		public b(param0: any): any;
		public static i(param0: f.g): void;
		public a(param0: com.iadvize.conversation.ui.models.Message): void;
		public c(): void;
		public a(param0: f.x): void;
		public l(): f.a;
		public a(param0: com.iadvize.conversation.sdk.h): void;
		public c(param0: java.lang.Throwable): void;
		public g(): kotlinx.coroutines.Job;
		public static c(param0: f.g): boolean;
		public a(param0: org.jivesoftware.smackx.chatstates.ChatState): void;
		public p(): com.iadvize.conversation.sdk.feature.gdpr.GDPROption;
		public d(param0: java.lang.Throwable): void;
		public static a(param0: f.g, param1: java.util.List<any>, param2: any): any;
		public o(): m.c;
		public a(param0: m.c): void;
		public d(param0: string): void;
		public k(): java.util.List<d.d>;
		public a(param0: boolean, param1: string): void;
		public j(): kotlinx.coroutines.Job;
		public a(): void;
		public a(param0: globalAndroid.content.Context, param1: e.h): void;
		public b(param0: java.lang.Throwable): void;
		public b(): void;
		public b(param0: org.jivesoftware.smackx.chatstates.ChatState): void;
		public a(param0: d.b): void;
		public b(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
		public q(): f.q;
		public a(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
		public static a(param0: f.g, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials): void;
	}
	export module g {
		export class A extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.A>;
			public invoke(param0: any): any;
		}
		export class B extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.B>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class C {
			public static class: java.lang.Class<f.g.C>;
			public invokeSuspend(param0: any): any;
		}
		export class D extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.D>;
			public invoke(param0: any): any;
		}
		export class E extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.E>;
			public invoke(param0: any): any;
		}
		export class F extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.F>;
			public static a: f.g.F;
			public invoke(param0: any): any;
		}
		export class G extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.G>;
			public invoke(param0: any): any;
		}
		export class H extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.H>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class I extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.I>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: f.g);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module I {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<f.g.I.a<any>>;
				public constructor(param0: f.g);
				public emit(param0: any, param1: any): any;
			}
		}
		export class J extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.J>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: f.g);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module J {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<f.g.J.a<any>>;
				public constructor(param0: f.g);
				public emit(param0: any, param1: any): any;
			}
		}
		export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.b<any>>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.c<any>>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module c {
			export class a extends java.lang.Object implements any<d.d,any>  {
				public static class: java.lang.Class<f.g.c.a>;
				public static a: f.g.c.a;
				public invoke(param0: any): any;
			}
		}
		export class d extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.d>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class e {
			public static class: java.lang.Class<f.g.e>;
			public invokeSuspend(param0: any): any;
		}
		export class f extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.f>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module f {
			export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<f.g.f.a>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
		}
		export class g extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.g>;
			public invoke(param0: any): any;
		}
		export class h extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.h>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module h {
			export class a extends java.lang.Object implements any<d.d,any>  {
				public static class: java.lang.Class<f.g.h.a>;
				public invoke(param0: any): any;
			}
		}
		export class i extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.i>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module i {
			export class a extends java.lang.Object implements any<d.d,any>  {
				public static class: java.lang.Class<f.g.i.a>;
				public invoke(param0: any): any;
			}
			export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<f.g.i.b>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
			export class c extends java.lang.Object implements any<d.d,any>  {
				public static class: java.lang.Class<f.g.i.c>;
				public invoke(param0: any): any;
			}
		}
		export class j extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.j>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module j {
			export class a extends java.lang.Object implements any<d.d,any>  {
				public static class: java.lang.Class<f.g.j.a>;
				public invoke(param0: any): any;
			}
		}
		export class k extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.k>;
			public static a: f.g.k;
			public invoke(param0: any): any;
		}
		export class l extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.l>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class m extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.m>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module m {
			export class a extends java.lang.Object implements any<d.d,any>  {
				public static class: java.lang.Class<f.g.m.a>;
				public invoke(param0: any): any;
			}
			export class b {
				public static class: java.lang.Class<f.g.m.b>;
			}
		}
		export class n extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.n>;
			public invoke(param0: any): any;
		}
		export class o extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.o>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class p extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.p>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class q extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.q>;
			public static a: f.g.q;
			public invoke(param0: any): any;
		}
		export class r extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.r>;
			public invoke(param0: any): any;
		}
		export class s extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.s>;
			public invoke(param0: any): any;
		}
		export class t extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.t>;
			public static a: f.g.t;
			public invoke(param0: any): any;
		}
		export class u extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.u>;
			public invoke(param0: any): any;
		}
		export class v extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.v>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class w extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.w>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class x extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.g.x>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class y {
			public static class: java.lang.Class<f.g.y>;
			public invokeSuspend(param0: any): any;
		}
		export class z extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.g.z>;
			public invoke(param0: any): any;
		}
	}
}

declare module f {
	export class h extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<f.h>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
	export module h {
		export class a extends java.lang.Object implements any<d.d,any>  {
			public static class: java.lang.Class<f.h.a>;
			public invoke(param0: any): any;
		}
	}
}

declare module f {
	export class i {
		public static class: java.lang.Class<f.i>;
		public invokeSuspend(param0: any): any;
	}
}

declare module f {
	export class j extends java.lang.Object implements any<d.d,any>  {
		public static class: java.lang.Class<f.j>;
		public static a: f.j;
		public invoke(param0: any): any;
	}
}

declare module f {
	export class k extends java.lang.Object implements any<d.d,any>  {
		public static class: java.lang.Class<f.k>;
		public static a: f.k;
		public invoke(param0: any): any;
	}
}

declare module f {
	export class l extends java.lang.Object implements any<d.d,any>  {
		public static class: java.lang.Class<f.l>;
		public static a: f.l;
		public invoke(param0: any): any;
	}
}

declare module f {
	export class m<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<f.m<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module m {
		export class a {
			public static class: java.lang.Class<f.m.a>;
			public constructor(param0: f.m<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module f {
	export class n<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<f.n<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module n {
		export class a {
			public static class: java.lang.Class<f.n.a>;
			public constructor(param0: f.n<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module f {
	export class o extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<f.o>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
	export module o {
		export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.o.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.o.b>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<f.o.c>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module f {
	export class p extends java.lang.Object implements any<d.d,any>  {
		public static class: java.lang.Class<f.p>;
		public invoke(param0: any): any;
	}
}

declare module f {
	export class q {
		public static class: java.lang.Class<f.q>;
		public constructor();
		public e(): f.C;
		public a(param0: f.G): void;
		public a(param0: f.F): void;
		public a(param0: f.x): void;
		public a(param0: f.E): void;
		public g(): f.E;
		public d(): f.x;
		public a(param0: f.D): void;
		public f(): f.D;
		public a(param0: f.B): void;
		public a(param0: f.z): void;
		public a(param0: f.C): void;
		public i(): f.G;
		public h(): f.F;
		public c(): f.B;
		public b(): f.A;
		public a(): f.z;
		public a(param0: f.A): void;
		public j(): void;
	}
}

declare module f {
	export class r {
		public static class: java.lang.Class<f.r>;
		public static a(param0: com.iadvize.conversation.ui.models.MessageAttachment.Offer): com.iadvize.conversation.ui.models.MessageKind.Text;
		public static a(param0: z.c.b): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
		public static a(param0: z.k): com.iadvize.conversation.ui.models.MessageAttachment.Action;
		public static a(param0: z.T): com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer;
		public static a(param0: com.iadvize.conversation.ui.models.MessageAttachment): string;
		public static a(param0: z.m0): f.v;
		public static a(param0: com.iadvize.conversation.ui.models.MessageKind): java.util.List<com.iadvize.conversation.ui.models.MessageAttachment>;
		public static a(param0: com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer): com.iadvize.conversation.ui.models.MessageKind.ProductOffer;
		public static a(param0: f.x): string;
		public static a(param0: com.iadvize.conversation.ui.models.MessageAttachment.Product): com.iadvize.conversation.ui.models.MessageKind.Text;
	}
}

declare module f {
	export class s extends com.iadvize.conversation.ui.models.Sender {
		public static class: java.lang.Class<f.s>;
		public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
		public constructor(param0: string);
	}
}

declare module f {
	export class t extends f.s {
		public static class: java.lang.Class<f.t>;
		public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
		public constructor(param0: string);
	}
}

declare module f {
	export class u extends com.iadvize.conversation.ui.models.Sender {
		public static class: java.lang.Class<f.u>;
		public constructor();
		public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
	}
}

declare module f {
	export class v {
		public static class: java.lang.Class<f.v>;
		public constructor(param0: java.util.List<any>, param1: f.w);
		public b(): f.w;
		public a(): java.util.List<f.x>;
	}
}

declare module f {
	export class w {
		public static class: java.lang.Class<f.w>;
		public a(): string;
		public constructor(param0: boolean, param1: string);
		public b(): boolean;
	}
}

declare module f {
	export abstract class x {
		public static class: java.lang.Class<f.x>;
		public a(): boolean;
		public b(): string;
		public a(param0: com.iadvize.conversation.ui.models.Sender): void;
		public a(param0: com.iadvize.conversation.ui.models.MessageKind): void;
		public c(): com.iadvize.conversation.ui.models.MessageKind;
		public a(param0: com.iadvize.conversation.ui.models.MessageState): void;
		public f(): java.util.Date;
		public d(): com.iadvize.conversation.ui.models.MessageState;
		public e(): com.iadvize.conversation.ui.models.Sender;
		public a(param0: java.util.Date): void;
	}
	export module x {
		export class a extends f.x {
			public static class: java.lang.Class<f.x.a>;
			public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind);
		}
		export class b extends f.x {
			public static class: java.lang.Class<f.x.b<any>>;
			public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind);
		}
	}
}

declare module f {
	export class y extends f.x {
		public static class: java.lang.Class<f.y>;
		public constructor(param0: string, param1: java.util.Date);
	}
}

declare module f {
	export class z extends f.x {
		public static class: java.lang.Class<f.z>;
		public constructor(param0: string, param1: java.util.Date);
	}
}

declare module g {
	export class a {
		public static class: java.lang.Class<g.a>;
		public static b(): void;
		public d(): boolean;
		public c(): boolean;
		public a(param0: globalAndroid.content.Context): void;
	}
	export module a {
		export class a {
			public static class: java.lang.Class<g.a.a>;
			public static a: g.a.a;
			public static b: g.a.a;
			public static c: g.a.a;
			public static values(): androidNative.Array<g.a.a>;
			public static valueOf(param0: string): g.a.a;
		}
		export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<g.a.b>;
			public constructor(param0: any);
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module b {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<g.a.b.a<any>>;
				public emit(param0: any, param1: any): any;
				public constructor();
			}
		}
		export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<g.a.c>;
			public constructor(param0: any);
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module c {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<g.a.c.a<any>>;
				public emit(param0: any, param1: any): any;
				public constructor();
			}
		}
	}
}

declare module g {
	export class b<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<g.b<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module b {
		export class a {
			public static class: java.lang.Class<g.b.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: g.b<any>, param1: any);
		}
	}
}

declare module g {
	export class c<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<g.c<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module c {
		export class a {
			public static class: java.lang.Class<g.c.a>;
			public constructor(param0: g.c<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module g {
	export class d {
		public static class: java.lang.Class<g.d>;
		public constructor();
	}
}

declare module g {
	export class e {
		public static class: java.lang.Class<g.e>;
		public reconnectionFailed(param0: java.lang.Exception): void;
		public connectionClosed(): void;
		public connectionClosedOnError(param0: java.lang.Exception): void;
		public a(param0: org.jxmpp.jid.Jid, param1: string): void;
		public authenticated(param0: org.jivesoftware.smack.XMPPConnection, param1: boolean): void;
		public connected(param0: org.jivesoftware.smack.XMPPConnection): void;
		public a(): void;
		public constructor(param0: g.e.a, param1: com.iadvize.conversation.sdk.h);
		public b(): boolean;
		public c(): boolean;
		public reconnectingIn(param0: number): void;
	}
	export module e {
		export class a {
			public static class: java.lang.Class<g.e.a>;
			/**
			 * Constructs a new instance of the g.e$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				a(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
				b(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
				b(param0: java.lang.Throwable): void;
				c(param0: java.lang.Throwable): void;
				d(): void;
				a(param0: org.jivesoftware.smack.XMPPConnection): void;
				d(param0: java.lang.Throwable): void;
			});
			public constructor();
			public b(param0: java.lang.Throwable): void;
			public d(): void;
			public c(param0: java.lang.Throwable): void;
			public a(param0: org.jivesoftware.smack.XMPPConnection): void;
			public a(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
			public b(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
			public d(param0: java.lang.Throwable): void;
		}
		export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<g.e.b>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module b {
			export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<g.e.b.a>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
		}
		export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<g.e.c>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module h {
	export class a {
		public static class: java.lang.Class<h.a>;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public constructor(param0: g.a.a);
		public toString(): string;
	}
}

declare module h {
	export class b {
		public static class: java.lang.Class<h.b>;
		public a(): boolean;
		public equals(param0: any): boolean;
		public constructor(param0: boolean, param1: boolean);
		public hashCode(): number;
		public toString(): string;
		public b(): boolean;
	}
}

declare module i {
	export class a implements j.c.a, l.e.a, j.a.a {
		public static class: java.lang.Class<i.a>;
		public b(): string;
		public a(param0: k.c0, param1: string): void;
		public constructor(param0: org.jivesoftware.smack.XMPPConnection, param1: c.a, param2: i.a.a);
		public c(): void;
		public a(param0: java.util.List<any>): void;
		public a(param0: j.b): void;
		public a(param0: string, param1: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension): void;
		public d(): void;
		public a(): void;
		public a(param0: k.e0, param1: string): void;
		public a(param0: l.d): void;
		public a(param0: string, param1: string): void;
	}
	export module a {
		export class a {
			public static class: java.lang.Class<i.a.a>;
			/**
			 * Constructs a new instance of the i.a$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				b(): void;
				c(): void;
				a(param0: f.x): void;
				a(param0: org.jivesoftware.smackx.chatstates.ChatState): void;
				e(): void;
				a(param0: java.lang.Throwable): void;
				a(): void;
			});
			public constructor();
			public a(): void;
			public a(param0: f.x): void;
			public a(param0: java.lang.Throwable): void;
			public e(): void;
			public b(): void;
			public c(): void;
			public a(param0: org.jivesoftware.smackx.chatstates.ChatState): void;
		}
	}
}

declare module j {
	export class a {
		public static class: java.lang.Class<j.a>;
		public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
		public constructor(param0: j.a.a);
	}
	export module a {
		export class a {
			public static class: java.lang.Class<j.a.a>;
			/**
			 * Constructs a new instance of the j.a$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				a(): void;
			});
			public constructor();
			public a(): void;
		}
	}
}

declare module j {
	export class b {
		public static class: java.lang.Class<j.b>;
		public a(): string;
		public b(): string;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
		public toString(): string;
		public constructor(param0: java.util.Map<string,string>, param1: java.util.List<any>);
	}
	export module b {
		export class a extends java.lang.Object implements any<org.jivesoftware.smack.packet.ExtensionElement,string>  {
			public static class: java.lang.Class<j.b.a>;
			public static a: j.b.a;
			public invoke(param0: any): any;
		}
	}
}

declare module j {
	export class c {
		public static class: java.lang.Class<j.c>;
		public constructor(param0: j.c.a);
		public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
	}
	export module c {
		export class a {
			public static class: java.lang.Class<j.c.a>;
			/**
			 * Constructs a new instance of the j.c$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				a(param0: j.b): void;
				a(param0: k.c0, param1: string): void;
				a(param0: k.e0, param1: string): void;
			});
			public constructor();
			public a(param0: j.b): void;
			public a(param0: k.e0, param1: string): void;
			public a(param0: k.c0, param1: string): void;
		}
	}
}

declare module j {
	export class d extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<j.b> {
		public static class: java.lang.Class<j.d>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module d {
		export class a {
			public static class: java.lang.Class<j.d.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class A extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.z> {
		public static class: java.lang.Class<k.A>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module A {
		export class a {
			public static class: java.lang.Class<k.A.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class B extends k.v {
		public static class: java.lang.Class<k.B>;
		public constructor();
		public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel);
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getNamespace(): string;
	}
}

declare module k {
	export class C extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.B> {
		public static class: java.lang.Class<k.C>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module C {
		export class a {
			public static class: java.lang.Class<k.C.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class D extends k.a {
		public static class: java.lang.Class<k.D>;
		public constructor();
		public a(): string;
		public b(): string;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module k {
	export class E extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.D> {
		public static class: java.lang.Class<k.E>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module E {
		export class a {
			public static class: java.lang.Class<k.E.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class F {
		public static class: java.lang.Class<k.F>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind.LinkSent;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module k {
	export class G extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.F> {
		public static class: java.lang.Class<k.G>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module G {
		export class a {
			public static class: java.lang.Class<k.G.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class H extends k.v {
		public static class: java.lang.Class<k.H>;
		public constructor();
		public constructor(param0: k.F);
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind.LinkSent;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
	}
}

declare module k {
	export class I extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.H> {
		public static class: java.lang.Class<k.I>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module I {
		export class a {
			public static class: java.lang.Class<k.I.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class J {
		public static class: java.lang.Class<k.J>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string, param2: string, param3: string);
		public a(): com.iadvize.conversation.ui.models.MessageKind.Card;
	}
}

declare module k {
	export class K extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.J> {
		public static class: java.lang.Class<k.K>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module K {
		export class a {
			public static class: java.lang.Class<k.K.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class L extends k.v {
		public static class: java.lang.Class<k.L>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind.Card;
		public constructor(param0: k.J);
	}
}

declare module k {
	export class M extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.L> {
		public static class: java.lang.Class<k.M>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module M {
		export class a {
			public static class: java.lang.Class<k.M.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class N extends k.v {
		public static class: java.lang.Class<k.N>;
		public constructor();
		public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel);
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getNamespace(): string;
	}
}

declare module k {
	export class O extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.N> {
		public static class: java.lang.Class<k.O>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module O {
		export class a {
			public static class: java.lang.Class<k.O.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class P extends k.v {
		public static class: java.lang.Class<k.P>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind;
		public constructor(param0: java.util.List<k.S>);
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
	}
}

declare module k {
	export class Q extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.P> {
		public static class: java.lang.Class<k.Q>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module Q {
		export class a {
			public static class: java.lang.Class<k.Q.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class S {
		public static class: java.lang.Class<k.S>;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind.ProductOffer;
		public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: k.l, param6: k.b);
	}
}

declare module k {
	export class T extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.S> {
		public static class: java.lang.Class<k.T>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module T {
		export class a {
			public static class: java.lang.Class<k.T.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class U extends k.v {
		public static class: java.lang.Class<k.U>;
		public constructor();
		public constructor(param0: k.S);
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
	}
}

declare module k {
	export class V extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.U> {
		public static class: java.lang.Class<k.V>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module V {
		export class a {
			public static class: java.lang.Class<k.V.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class W {
		public static class: java.lang.Class<k.W>;
		public a(): com.iadvize.conversation.ui.models.MessageKind.QuickReplyMessage;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
		public constructor(param0: string, param1: k.r);
	}
}

declare module k {
	export class X extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.W> {
		public static class: java.lang.Class<k.X>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module X {
		export class a {
			public static class: java.lang.Class<k.X.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class Y extends k.v {
		public static class: java.lang.Class<k.Y>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
		public constructor(param0: k.W);
	}
}

declare module k {
	export class Z extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.Y> {
		public static class: java.lang.Class<k.Z>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module Z {
		export class a {
			public static class: java.lang.Class<k.Z.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class a {
		public static class: java.lang.Class<k.a>;
		/**
		 * Constructs a new instance of the k.a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
		 */
		public constructor(implementation: {
		});
		public constructor();
	}
}

declare module k {
	export class a0 extends k.a {
		public static class: java.lang.Class<k.a0>;
		public constructor();
		public a(): string;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string);
	}
}

declare module k {
	export class b {
		public static class: java.lang.Class<k.b>;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
		public constructor(param0: java.util.List<k.a>);
		public a(): java.util.List<k.a>;
	}
}

declare module k {
	export class b0 extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.a0> {
		public static class: java.lang.Class<k.b0>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module b0 {
		export class a {
			public static class: java.lang.Class<k.b0.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class c extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.b> {
		public static class: java.lang.Class<k.c>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module c {
		export class a {
			public static class: java.lang.Class<k.c.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class c0 {
		public static class: java.lang.Class<k.c0>;
		public static c: k.c0.a;
		public b(): string;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string);
	}
	export module c0 {
		export class a {
			public static class: java.lang.Class<k.c0.a>;
		}
	}
}

declare module k {
	export class d {
		public static class: java.lang.Class<k.d>;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module k {
	export class d0 extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.c0> {
		public static class: java.lang.Class<k.d0>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module d0 {
		export class a {
			public static class: java.lang.Class<k.d0.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class e extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.d> {
		public static class: java.lang.Class<k.e>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module e {
		export class a {
			public static class: java.lang.Class<k.e.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class e0 {
		public static class: java.lang.Class<k.e0>;
		public static c: k.e0.a;
		public b(): string;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string);
	}
	export module e0 {
		export class a {
			public static class: java.lang.Class<k.e0.a>;
		}
	}
}

declare module k {
	export class f extends k.v {
		public static class: java.lang.Class<k.f>;
		public constructor();
		public a(): com.iadvize.conversation.ui.models.MessageKind.SystemMessage;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module k {
	export class f0 extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.e0> {
		public static class: java.lang.Class<k.f0>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module f0 {
		export class a {
			public static class: java.lang.Class<k.f0.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class g extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.f> {
		public static class: java.lang.Class<k.g>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module g {
		export class a {
			public static class: java.lang.Class<k.g.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class h extends k.v {
		public static class: java.lang.Class<k.h>;
		public constructor();
		public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.ActionType, param1: java.util.List<k.j>);
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
	}
	export module h {
		export class a {
			public static class: java.lang.Class<k.h.a>;
		}
	}
}

declare module k {
	export class i extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.h> {
		public static class: java.lang.Class<k.i>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module i {
		export class a {
			public static class: java.lang.Class<k.i.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class j {
		public static class: java.lang.Class<k.j>;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getExtensions(): java.util.List<any>;
		public constructor(param0: string, param1: string, param2: string, param3: k.l, param4: k.p, param5: k.b);
		public b(): com.iadvize.conversation.ui.models.MessageKind.Card;
		public getNamespace(): string;
		public a(): k.b;
	}
}

declare module k {
	export class k extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.j> {
		public static class: java.lang.Class<k.k>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module k {
		export class a {
			public static class: java.lang.Class<k.k.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class l {
		public static class: java.lang.Class<k.l>;
		public constructor();
		public a(): string;
		public b(): string;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module k {
	export class m extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.l> {
		public static class: java.lang.Class<k.m>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module m {
		export class a {
			public static class: java.lang.Class<k.m.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class n extends k.v {
		public static class: java.lang.Class<k.n>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
		public constructor(param0: k.j);
	}
}

declare module k {
	export class o extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.n> {
		public static class: java.lang.Class<k.o>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module o {
		export class a {
			public static class: java.lang.Class<k.o.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class p {
		public static class: java.lang.Class<k.p>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getElementName(): string;
		public getNamespace(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module k {
	export class q extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.p> {
		public static class: java.lang.Class<k.q>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module q {
		export class a {
			public static class: java.lang.Class<k.q.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class r {
		public static class: java.lang.Class<k.r>;
		public a(): java.util.List<string>;
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public constructor(param0: java.util.List<string>);
		public getElementName(): string;
		public getNamespace(): string;
	}
}

declare module k {
	export class s extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.r> {
		public static class: java.lang.Class<k.s>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module s {
		export class a {
			public static class: java.lang.Class<k.s.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class t extends k.v {
		public static class: java.lang.Class<k.t>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public getNamespace(): string;
	}
}

declare module k {
	export class u extends org.jivesoftware.smack.provider.ExtensionElementProvider<k.t> {
		public static class: java.lang.Class<k.u>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module u {
		export class a {
			public static class: java.lang.Class<k.u.a>;
			public a(): void;
		}
	}
}

declare module k {
	export abstract class v {
		public static class: java.lang.Class<k.v>;
		public constructor();
		public getElementName(): string;
	}
}

declare module k {
	export class w extends k.v {
		public static class: java.lang.Class<k.w>;
		public constructor();
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
		public constructor(param0: java.util.List<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension>);
	}
}

declare module k {
	export class x extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<k.w> {
		public static class: java.lang.Class<k.x>;
		public constructor();
		public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any,any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
	}
	export module x {
		export class a {
			public static class: java.lang.Class<k.x.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class y extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension> {
		public static class: java.lang.Class<k.y>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
	}
	export module y {
		export class a {
			public static class: java.lang.Class<k.y.a>;
			public a(): void;
		}
	}
}

declare module k {
	export class z extends k.v {
		public static class: java.lang.Class<k.z>;
		public constructor();
		public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension);
		public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
		public a(): com.iadvize.conversation.ui.models.MessageKind;
		public getExtensions(): java.util.List<any>;
		public getNamespace(): string;
	}
}

declare module l {
	export class a {
		public static class: java.lang.Class<l.a>;
		public a(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string);
	}
}

declare module l {
	export class b {
		public static class: java.lang.Class<l.b>;
		public a(): boolean;
		public constructor(param0: string, param1: string, param2: java.util.List<l.a>);
		public equals(param0: any): boolean;
		public hashCode(): number;
		public d(): string;
		public c(): string;
		public toString(): string;
		public b(): java.util.List<l.a>;
	}
}

declare module l {
	export class c {
		public static class: java.lang.Class<l.c>;
		public constructor();
		public getIQChildElementBuilder(param0: org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder): org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder;
	}
}

declare module l {
	export class d {
		public static class: java.lang.Class<l.d>;
		public constructor(param0: java.util.List<l.b>);
		public getIQChildElementBuilder(param0: org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder): org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder;
		public a(): java.util.List<l.b>;
	}
}

declare module l {
	export class e {
		public static class: java.lang.Class<l.e>;
		public accept(param0: org.jivesoftware.smack.packet.Stanza): boolean;
		public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
		public constructor(param0: l.e.a);
	}
	export module e {
		export class a {
			public static class: java.lang.Class<l.e.a>;
			/**
			 * Constructs a new instance of the l.e$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				a(param0: l.d): void;
			});
			public constructor();
			public a(param0: l.d): void;
		}
	}
}

declare module l {
	export class f extends org.jivesoftware.smack.provider.IQProvider<l.d> {
		public static class: java.lang.Class<l.f>;
		public constructor();
		public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.IQ;
	}
	export module f {
		export class a {
			public static class: java.lang.Class<l.f.a>;
			public a(): void;
		}
		export class b {
			public static class: java.lang.Class<l.f.b<any>>;
		}
	}
}

declare module m {
	export class a {
		public static class: java.lang.Class<m.a>;
		public onActivityResumed(param0: globalAndroid.app.Activity): void;
		public a(param0: java.lang.ref.WeakReference<globalAndroid.app.Activity>): void;
		public a(): java.lang.ref.WeakReference<globalAndroid.app.Activity>;
		public b(): java.util.List<m.a.a>;
		public onActivityStopped(param0: globalAndroid.app.Activity): void;
		public constructor(param0: m.a.a);
		public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
		public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
		public onActivityStarted(param0: globalAndroid.app.Activity): void;
		public onActivityPaused(param0: globalAndroid.app.Activity): void;
		public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
	}
	export module a {
		export class a {
			public static class: java.lang.Class<m.a.a>;
			/**
			 * Constructs a new instance of the m.a$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				a(): void;
			});
			public constructor();
			public a(): void;
		}
	}
}

declare module m {
	export class b {
		public static class: java.lang.Class<m.b>;
		public onAttachedToWindow(): void;
		public a(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration, param1: boolean, param2: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel): void;
		public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
		public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
		public onDetachedFromWindow(): void;
	}
}

declare module m {
	export class c implements com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController, m.a.a {
		public static class: java.lang.Class<m.c>;
		public constructor();
		public a(param0: u.a): void;
		public c(): void;
		public b(): m.a;
		public a(param0: d.b): void;
		public setupDefaultFloatingButton(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption): void;
		public a(): void;
		public a(param0: f.g): void;
	}
}

declare module m {
	export class d {
		public static class: java.lang.Class<m.d>;
		public static a(param0: globalAndroid.app.Activity, param1: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration, param2: boolean, param3: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, param4: globalAndroid.view.View.OnClickListener): void;
		public static a(param0: globalAndroid.app.Activity): m.b;
	}
}

declare module n {
	export class a {
		public static class: java.lang.Class<n.a>;
		public a(param0: string, param1: number, param2: string, param3: any): any;
		public a(param0: any): any;
		public a(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.feature.targeting.TargetingRule, param2: any): any;
		public g(param0: any): any;
		public e(param0: any): any;
		public c(param0: string, param1: any): any;
		public a(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: any): any;
		public a(param0: com.iadvize.conversation.sdk.h): void;
		public a(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void;
		public a(param0: string, param1: any): any;
		public d(param0: any): any;
		public constructor(param0: com.iadvize.conversation.sdk.h);
		public c(param0: any): any;
		public a(param0: boolean, param1: any): any;
		public b(param0: string, param1: any): any;
		public b(param0: any): any;
		public a(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption, param2: string, param3: any): any;
		public f(param0: any): any;
		public a(param0: com.iadvize.conversation.ui.models.MessageAttachment, param1: any): any;
		public a(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction, param1: any): any;
	}
	export module a {
		export class a {
			public static class: java.lang.Class<n.a.a>;
			public invokeSuspend(param0: any): any;
		}
		export class b {
			public static class: java.lang.Class<n.a.b>;
			public invokeSuspend(param0: any): any;
		}
		export class c extends com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback {
			public static class: java.lang.Class<n.a.c>;
			public onJWERetrieved(param0: string): void;
			public onJWEFailure(param0: java.lang.Exception): void;
		}
		export class d {
			public static class: java.lang.Class<n.a.d>;
			public invokeSuspend(param0: any): any;
		}
		export class e {
			public static class: java.lang.Class<n.a.e>;
			public invokeSuspend(param0: any): any;
		}
		export class f {
			public static class: java.lang.Class<n.a.f>;
			public invokeSuspend(param0: any): any;
		}
		export class g {
			public static class: java.lang.Class<n.a.g>;
			public invokeSuspend(param0: any): any;
		}
		export class h {
			public static class: java.lang.Class<n.a.h>;
			public invokeSuspend(param0: any): any;
		}
		export class i {
			public static class: java.lang.Class<n.a.i>;
			public invokeSuspend(param0: any): any;
		}
		export class j {
			public static class: java.lang.Class<n.a.j>;
			public invokeSuspend(param0: any): any;
		}
		export class k {
			public static class: java.lang.Class<n.a.k>;
			public invokeSuspend(param0: any): any;
		}
		export class l {
			public static class: java.lang.Class<n.a.l>;
			public invokeSuspend(param0: any): any;
		}
		export class m {
			public static class: java.lang.Class<n.a.m>;
			public invokeSuspend(param0: any): any;
		}
		export class n {
			public static class: java.lang.Class<n.a.n>;
			public invokeSuspend(param0: any): any;
		}
		export class o {
			public static class: java.lang.Class<n.a.o>;
			public invokeSuspend(param0: any): any;
		}
		export class p {
			public static class: java.lang.Class<n.a.p>;
			public invokeSuspend(param0: any): any;
		}
		export class q {
			public static class: java.lang.Class<n.a.q>;
			public invokeSuspend(param0: any): any;
		}
		export class r {
			public static class: java.lang.Class<n.a.r>;
			public invokeSuspend(param0: any): any;
		}
		export class s {
			public static class: java.lang.Class<n.a.s>;
			public invokeSuspend(param0: any): any;
		}
		export class t {
			public static class: java.lang.Class<n.a.t>;
			public invokeSuspend(param0: any): any;
		}
		export class u {
			public static class: java.lang.Class<n.a.u>;
			public invokeSuspend(param0: any): any;
		}
		export class v {
			public static class: java.lang.Class<n.a.v>;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module o {
	export class a extends com.apollographql.apollo3.api.Adapter<java.util.Date> {
		public static class: java.lang.Class<o.a>;
		public constructor();
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public a(param0: java.util.Date): string;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module o {
	export class b extends com.apollographql.apollo3.api.Adapter<string> {
		public static class: java.lang.Class<o.b>;
		public constructor();
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module o {
	export class c extends com.apollographql.apollo3.api.Adapter<java.util.UUID> {
		public static class: java.lang.Class<o.c>;
		public constructor();
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module p {
	export class a {
		public static class: java.lang.Class<p.a>;
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
}

declare module p {
	export class b {
		public static class: java.lang.Class<p.b>;
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
}

declare module p {
	export class c {
		public static class: java.lang.Class<p.c>;
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
}

declare module p {
	export class d {
		public static class: java.lang.Class<p.d>;
		public constructor();
		public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
	}
	export module d {
		export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<p.d.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module q {
	export class a {
		public static class: java.lang.Class<q.a>;
		public a(param0: com.iadvize.conversation.sdk.feature.logger.Logger.Level, param1: string, param2: java.lang.StackTraceElement): org.json.JSONObject;
		public a(): string;
	}
}

declare module q {
	export class b {
		public static class: java.lang.Class<q.b>;
		public b(param0: org.json.JSONObject): any;
		public a(param0: org.json.JSONObject): any;
		public a(param0: globalAndroid.content.Context, param1: java.net.URL): void;
	}
	export module b {
		export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<q.b.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module a {
			export class a {
				public static class: java.lang.Class<q.b.a.a>;
				public onResponse(param0: okhttp3.Call, param1: okhttp3.Response): void;
				public onFailure(param0: okhttp3.Call, param1: java.io.IOException): void;
			}
		}
	}
}

declare module q {
	export class c {
		public static class: java.lang.Class<q.c>;
		public static a(param0: any, param1: com.iadvize.conversation.sdk.feature.logger.Logger.Level, param2: string, param3: java.lang.Throwable): void;
	}
}

declare module r {
	export class a extends com.iadvize.conversation.sdk.feature.notification.NotificationController {
		public static class: java.lang.Class<r.a>;
		public isIAdvizePushNotification(param0: java.util.Map<string,string>): boolean;
		public disablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
		public constructor(param0: n.a);
		public enablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
		public registerPushToken(param0: string): void;
	}
	export module a {
		export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<r.a.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module a {
			export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<r.a.a.a>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
			export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<r.a.a.b>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
		}
		export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<r.a.b>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module b {
			export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<r.a.b.a>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
			export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<r.a.b.b>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
		}
		export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<r.a.c>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module s {
	export class a {
		public static class: java.lang.Class<s.a>;
		public static d: s.a;
		public static e: s.a;
		public static f: s.a;
		public static g: s.a;
		public static h: s.a;
		public static i: s.a;
		public static j: s.a;
		public static k: s.a;
		public static l: s.a;
		public static m: s.a;
		public static n: s.a;
		public a(): boolean;
		public static valueOf(param0: string): s.a;
		public c(): string;
		public static values(): androidNative.Array<s.a>;
		public b(): boolean;
	}
}

declare module s {
	export class b {
		public static class: java.lang.Class<s.b>;
		public a(param0: string, param1: any, param2: boolean): any;
		public b(param0: string, param1: any, param2: boolean): void;
		public a(param0: s.a): void;
		public static b(param0: s.a, param1: any): void;
		public a(param0: string): void;
		public static a(param0: s.a, param1: any): any;
		public a(param0: globalAndroid.content.Context): void;
	}
}

declare module t {
	export class a {
		public static class: java.lang.Class<t.a>;
		public static d: t.a.a;
		public a(): string;
		public static values(): androidNative.Array<t.a>;
		public static valueOf(param0: string): t.a;
		public b(): number;
		public a(param0: globalAndroid.content.res.Resources): string;
	}
	export module a {
		export class a {
			public static class: java.lang.Class<t.a.a>;
		}
	}
}

declare module t {
	export class b {
		public static class: java.lang.Class<t.b>;
		public constructor(param0: com.iadvize.conversation.sdk.h);
		public a(param0: string, param1: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade, param2: any, param3: any): any;
		public a(param0: com.iadvize.conversation.sdk.h): void;
	}
	export module b {
		export class a {
			public static class: java.lang.Class<t.b.a>;
			/**
			 * Constructs a new instance of the t.b$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				a(param0: okhttp3.RequestBody, param1: string, param2: any): any;
			});
			public constructor();
			public a(param0: okhttp3.RequestBody, param1: string, param2: any): any;
		}
		export class b {
			public static class: java.lang.Class<t.b.b>;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module t {
	export class c {
		public static class: java.lang.Class<t.c>;
		public static a: t.c;
		public static b: t.c;
		public static c: t.c;
		public static d: t.c;
		public static e: t.c;
		public static f: t.c;
		public static values(): androidNative.Array<t.c>;
		public static valueOf(param0: string): t.c;
	}
}

declare module u {
	export class a extends com.iadvize.conversation.sdk.feature.targeting.TargetingController {
		public static class: java.lang.Class<u.a>;
		public setLanguage(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void;
		public registerUserNavigation(param0: com.iadvize.conversation.sdk.feature.targeting.NavigationOption): void;
		public constructor(param0: n.a);
		public d(): void;
		public a(): void;
		public b(): java.util.UUID;
		public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>): void;
		public isActiveTargetingRuleAvailable(): boolean;
		public a(param0: f.g): void;
		public activeTargetingRule(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
		public a(param0: boolean): void;
		public getLanguage(): com.iadvize.conversation.sdk.feature.targeting.LanguageOption;
		public activateTargetingRule(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule): void;
		public c(): boolean;
		public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>;
	}
	export module a {
		export class a extends java.lang.Object  {
			public static class: java.lang.Class<u.a.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class b {
			public static class: java.lang.Class<u.a.b>;
			public constructor(param0: kotlinx.coroutines.CoroutineExceptionHandler.Key, param1: u.a);
			public handleException(param0: any, param1: java.lang.Throwable): void;
		}
		export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<u.a.c>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module u {
	export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<u.b>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
	export module b {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<u.b.a<any>>;
			public a(param0: boolean, param1: any): any;
		}
	}
}

declare module v {
	export abstract class a {
		public static class: java.lang.Class<v.a>;
		public a(): string;
		public b(): java.util.Map<v.b,string>;
	}
	export module a {
		export abstract class a extends v.a {
			public static class: java.lang.Class<v.a.a>;
			public a(): string;
		}
		export module a {
			export class a extends v.a.a {
				public static class: java.lang.Class<v.a.a.a>;
				public constructor(param0: java.lang.Throwable);
			}
			export class b extends v.a.a {
				public static class: java.lang.Class<v.a.a.b>;
				public static d: v.a.a.b;
			}
		}
		export abstract class b extends v.a {
			public static class: java.lang.Class<v.a.b>;
			public a(): string;
		}
		export module b {
			export class a extends v.a.b {
				public static class: java.lang.Class<v.a.b.a>;
				public static d: v.a.b.a;
			}
			export class b extends v.a.b {
				public static class: java.lang.Class<v.a.b.b>;
				public static d: v.a.b.b;
			}
			export class c extends v.a.b {
				public static class: java.lang.Class<v.a.b.c>;
				public static d: v.a.b.c;
			}
			export class d extends v.a.b {
				public static class: java.lang.Class<v.a.b.d>;
				public static d: v.a.b.d;
			}
			export class e extends v.a.b {
				public static class: java.lang.Class<v.a.b.e>;
				public static d: v.a.b.e;
			}
			export class f extends v.a.b {
				public static class: java.lang.Class<v.a.b.f>;
				public static d: v.a.b.f;
			}
			export class g extends v.a.b {
				public static class: java.lang.Class<v.a.b.g>;
				public static d: v.a.b.g;
			}
			export class h extends v.a.b {
				public static class: java.lang.Class<v.a.b.h>;
				public static d: v.a.b.h;
			}
			export class i extends v.a.b {
				public static class: java.lang.Class<v.a.b.i>;
				public static d: v.a.b.i;
			}
			export abstract class j extends v.a.b {
				public static class: java.lang.Class<v.a.b.j>;
				public a(): string;
			}
			export module j {
				export class a extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.a>;
					public static e: v.a.b.j.a;
				}
				export class b extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.b>;
					public static e: v.a.b.j.b;
				}
				export class c extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.c>;
					public static e: v.a.b.j.c;
				}
				export class d extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.d>;
					public static e: v.a.b.j.d;
				}
				export class e extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.e>;
					public static e: v.a.b.j.e;
				}
				export class f extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.f>;
					public static e: v.a.b.j.f;
				}
				export class g extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.g>;
					public static e: v.a.b.j.g;
				}
				export class h extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.h>;
					public static e: v.a.b.j.h;
				}
				export class i extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.i>;
					public static e: v.a.b.j.i;
				}
				export class j extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.j>;
					public static e: v.a.b.j.j;
				}
				export class k extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.k>;
					public static e: v.a.b.j.k;
				}
				export class l extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.l>;
					public static e: v.a.b.j.l;
				}
				export class m extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.m>;
					public static e: v.a.b.j.m;
				}
				export class n extends v.a.b.j {
					public static class: java.lang.Class<v.a.b.j.n>;
					public static e: v.a.b.j.n;
				}
			}
		}
		export abstract class c extends v.a {
			public static class: java.lang.Class<v.a.c>;
			public a(): string;
		}
		export module c {
			export class a extends v.a.c {
				public static class: java.lang.Class<v.a.c.a>;
				public static d: v.a.c.a;
			}
		}
		export abstract class d extends v.a {
			public static class: java.lang.Class<v.a.d>;
			public a(): string;
		}
		export module d {
			export class a extends v.a.d {
				public static class: java.lang.Class<v.a.d.a>;
				public static d: v.a.d.a;
			}
			export class b extends v.a.d {
				public static class: java.lang.Class<v.a.d.b>;
				public static d: v.a.d.b;
			}
		}
	}
}

declare module v {
	export class b {
		public static class: java.lang.Class<v.b>;
		public static b: v.b;
		public static c: v.b;
		public static d: v.b;
		public static e: v.b;
		public static f: v.b;
		public static g: v.b;
		public static h: v.b;
		public static i: v.b;
		public static j: v.b;
		public static k: v.b;
		public static l: v.b;
		public static m: v.b;
		public static n: v.b;
		public a(): string;
		public static valueOf(param0: string): v.b;
		public static values(): androidNative.Array<v.b>;
	}
}

declare module v {
	export class c {
		public static class: java.lang.Class<v.c>;
		public constructor(param0: com.iadvize.conversation.sdk.h);
		public a(param0: v.a): void;
		public a(param0: com.iadvize.conversation.sdk.h): void;
		public a(param0: v.a, param1: any): any;
	}
	export module c {
		export class a {
			public static class: java.lang.Class<v.c.a>;
			/**
			 * Constructs a new instance of the v.c$a interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				a(param0: okhttp3.RequestBody, param1: any): any;
			});
			public constructor();
			public a(param0: okhttp3.RequestBody, param1: any): any;
		}
		export class b {
			public static class: java.lang.Class<v.c.b>;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module v {
	export class d {
		public static class: java.lang.Class<v.d>;
		public static a(param0: v.a): kotlinx.coroutines.Job;
	}
	export module d {
		export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<v.d.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module w {
	export class a implements m.a.a, com.iadvize.conversation.sdk.feature.transaction.TransactionController {
		public static class: java.lang.Class<w.a>;
		public b(): void;
		public register(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction): void;
		public constructor(param0: n.a);
		public a(): void;
	}
	export module a {
		export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<w.a.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module x {
	export class A extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.A>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class B extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.B>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class C extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.C>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class D<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.D<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module D {
		export class a {
			public static class: java.lang.Class<x.D.a>;
			public constructor(param0: x.D<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module x {
	export class E<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.E<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module E {
		export class a {
			public static class: java.lang.Class<x.E.a>;
			public constructor(param0: x.E<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module x {
	export class F<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.F<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module F {
		export class a {
			public static class: java.lang.Class<x.F.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.F<any>, param1: any);
		}
	}
}

declare module x {
	export class G<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.G<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module G {
		export class a {
			public static class: java.lang.Class<x.G.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.G<any>, param1: any);
		}
	}
}

declare module x {
	export class H<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.H<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module H {
		export class a {
			public static class: java.lang.Class<x.H.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.H<any>, param1: any);
		}
	}
}

declare module x {
	export class I<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.I<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module I {
		export class a {
			public static class: java.lang.Class<x.I.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.I<any>, param1: any);
		}
	}
}

declare module x {
	export class J<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.J<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module J {
		export class a {
			public static class: java.lang.Class<x.J.a>;
			public constructor(param0: x.J<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module x {
	export class K extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.K>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class L {
		public static class: java.lang.Class<x.L>;
		public constructor();
	}
}

declare module x {
	export class M {
		public static class: java.lang.Class<x.M>;
		public constructor();
	}
}

declare module x {
	export class N {
		public static class: java.lang.Class<x.N>;
		public constructor();
	}
}

declare module x {
	export class O {
		public static class: java.lang.Class<x.O>;
		public a(): com.iadvize.conversation.sdk.feature.video.VideoCredentials;
		public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoCredentials);
	}
}

declare module x {
	export class P {
		public static class: java.lang.Class<x.P>;
		public constructor();
	}
}

declare module x {
	export class Q {
		public static class: java.lang.Class<x.Q>;
		public constructor();
	}
}

declare module x {
	export class S {
		public static class: java.lang.Class<x.S>;
		public constructor();
	}
}

declare module x {
	export class T {
		public static class: java.lang.Class<x.T>;
		public constructor();
	}
}

declare module x {
	export class U {
		public static class: java.lang.Class<x.U>;
		public constructor();
	}
}

declare module x {
	export class V {
		public static class: java.lang.Class<x.V>;
		public constructor();
	}
}

declare module x {
	export class W {
		public static class: java.lang.Class<x.W>;
		public constructor();
	}
}

declare module x {
	export class X {
		public static class: java.lang.Class<x.X>;
		public constructor();
	}
}

declare module x {
	export class Y {
		public static class: java.lang.Class<x.Y>;
		public constructor();
	}
}

declare module x {
	export class Z {
		public static class: java.lang.Class<x.Z>;
		public a(): com.twilio.video.VideoTextureView;
		public constructor(param0: com.twilio.video.VideoTextureView, param1: com.twilio.video.VideoTextureView, param2: com.iadvize.conversation.sdk.feature.video.VideoSettings);
		public c(): com.iadvize.conversation.sdk.feature.video.VideoSettings;
		public b(): com.twilio.video.VideoTextureView;
	}
}

declare module x {
	export class a {
		public static class: java.lang.Class<x.a>;
		public stopCapture(): void;
		public b(): com.twilio.video.VideoCapturer;
		public initialize(param0: tvi.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: tvi.webrtc.CapturerObserver): void;
		public constructor(param0: globalAndroid.content.Context);
		public dispose(): void;
		public d(): void;
		public a(): x.a.a;
		public startCapture(param0: number, param1: number, param2: number): void;
		public isScreencast(): boolean;
	}
	export module a {
		export class a {
			public static class: java.lang.Class<x.a.a>;
			public static a: x.a.a;
			public static b: x.a.a;
			public static values(): androidNative.Array<x.a.a>;
			public static valueOf(param0: string): x.a.a;
		}
	}
}

declare module x {
	export class a0 {
		public static class: java.lang.Class<x.a0>;
		public constructor();
	}
}

declare module x {
	export class b<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.b<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module b {
		export class a {
			public static class: java.lang.Class<x.b.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.b<any>, param1: any);
		}
	}
}

declare module x {
	export class b0 {
		public static class: java.lang.Class<x.b0>;
		public constructor();
	}
}

declare module x {
	export class c<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.c<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module c {
		export class a {
			public static class: java.lang.Class<x.c.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.c<any>, param1: any);
		}
	}
}

declare module x {
	export class c0 {
		public static class: java.lang.Class<x.c0>;
		public constructor();
	}
}

declare module x {
	export class d {
		public static class: java.lang.Class<x.d>;
		public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
		public a(param0: com.iadvize.conversation.sdk.feature.video.VideoSettings): void;
		public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View.OnClickListener);
		public a(): void;
		public performClick(): boolean;
	}
}

declare module x {
	export class d0 {
		public static class: java.lang.Class<x.d0>;
		public constructor();
	}
}

declare module x {
	export class e<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.e<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module e {
		export class a {
			public static class: java.lang.Class<x.e.a>;
			public constructor(param0: x.e<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module x {
	export class e0 {
		public static class: java.lang.Class<x.e0>;
		public constructor();
	}
}

declare module x {
	export class f extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.f>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		public create(param0: any, param1: any): any;
	}
	export module f {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<x.f.a<any>>;
			public emit(param0: any, param1: any): any;
			public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		}
	}
}

declare module x {
	export class f0 {
		public static class: java.lang.Class<x.f0>;
		public constructor();
	}
}

declare module x {
	export class g<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.g<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module g {
		export class a {
			public static class: java.lang.Class<x.g.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.g<any>, param1: any);
		}
	}
}

declare module x {
	export class g0<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.g0<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module g0 {
		export class a {
			public static class: java.lang.Class<x.g0.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.g0<any>, param1: any);
		}
	}
}

declare module x {
	export class h extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.h>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		public create(param0: any, param1: any): any;
	}
	export module h {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<x.h.a<any>>;
			public emit(param0: any, param1: any): any;
			public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		}
	}
}

declare module x {
	export class h0 extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.h0>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity);
		public create(param0: any, param1: any): any;
	}
	export module h0 {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<x.h0.a<any>>;
			public emit(param0: any, param1: any): any;
			public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity);
		}
	}
}

declare module x {
	export class i<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.i<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module i {
		export class a {
			public static class: java.lang.Class<x.i.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.i<any>, param1: any);
		}
	}
}

declare module x {
	export class i0<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.i0<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module i0 {
		export class a {
			public static class: java.lang.Class<x.i0.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.i0<any>, param1: any);
		}
	}
}

declare module x {
	export class j extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.j>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		public create(param0: any, param1: any): any;
	}
	export module j {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<x.j.a<any>>;
			public emit(param0: any, param1: any): any;
			public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		}
	}
}

declare module x {
	export class j0 extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.j0>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity);
		public create(param0: any, param1: any): any;
	}
	export module j0 {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<x.j0.a<any>>;
			public emit(param0: any, param1: any): any;
			public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity);
		}
	}
}

declare module x {
	export class k<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.k<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module k {
		export class a {
			public static class: java.lang.Class<x.k.a>;
			public constructor(param0: x.k<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module x {
	export class k0 extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.k0>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class l extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.l>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		public create(param0: any, param1: any): any;
	}
	export module l {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<x.l.a<any>>;
			public emit(param0: any, param1: any): any;
			public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		}
	}
}

declare module x {
	export class l0<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.l0<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module l0 {
		export class a {
			public static class: java.lang.Class<x.l0.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.l0<any>, param1: any);
		}
	}
}

declare module x {
	export class m<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.m<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module m {
		export class a {
			public static class: java.lang.Class<x.m.a>;
			public constructor(param0: x.m<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module x {
	export class m0<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.m0<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module m0 {
		export class a {
			public static class: java.lang.Class<x.m0.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.m0<any>, param1: any);
		}
	}
}

declare module x {
	export class n<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.n<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module n {
		export class a {
			public static class: java.lang.Class<x.n.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.n<any>, param1: any);
		}
	}
}

declare module x {
	export class n0 {
		public static class: java.lang.Class<x.n0>;
		public a(): boolean;
		public a(param0: boolean): void;
		public d(): string;
		public constructor(param0: string, param1: boolean, param2: boolean, param3: boolean, param4: boolean);
		public c(param0: boolean): void;
		public b(param0: boolean): void;
		public b(): boolean;
		public c(): boolean;
		public d(param0: boolean): void;
	}
}

declare module x {
	export class o<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.o<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module o {
		export class a {
			public static class: java.lang.Class<x.o.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.o<any>, param1: any);
		}
	}
}

declare module x {
	export class p<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.p<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module p {
		export class a {
			public static class: java.lang.Class<x.p.a>;
			public invokeSuspend(param0: any): any;
			public constructor(param0: x.p<any>, param1: any);
		}
	}
}

declare module x {
	export class q extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.q>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		public create(param0: any, param1: any): any;
	}
	export module q {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<x.q.a<any>>;
			public emit(param0: any, param1: any): any;
			public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		}
	}
}

declare module x {
	export class r<T>  extends kotlinx.coroutines.flow.FlowCollector {
		public static class: java.lang.Class<x.r<any>>;
		public emit(param0: any, param1: any): any;
		public constructor(param0: kotlinx.coroutines.flow.FlowCollector);
	}
	export module r {
		export class a {
			public static class: java.lang.Class<x.r.a>;
			public constructor(param0: x.r<any>, param1: any);
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module x {
	export class s extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.s>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public constructor(param0: any, param1: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		public create(param0: any, param1: any): any;
	}
	export module s {
		export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
			public static class: java.lang.Class<x.s.a<any>>;
			public emit(param0: any, param1: any): any;
			public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity);
		}
	}
}

declare module x {
	export class t extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.t>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class u {
		public static class: java.lang.Class<x.u>;
		public static l(param0: x.u): any;
		public onVideoTrackEnabled(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication): void;
		public onDataTrackUnpublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication): void;
		public onDataTrackSubscriptionFailed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication, param2: com.twilio.video.TwilioException): void;
		public onVideoTrackSubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication, param2: com.twilio.video.RemoteVideoTrack): void;
		public onParticipantConnected(param0: com.twilio.video.Room, param1: com.twilio.video.RemoteParticipant): void;
		public onAudioTrackSubscriptionFailed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication, param2: com.twilio.video.TwilioException): void;
		public static a(param0: x.u): void;
		public onDataTrackUnsubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication, param2: com.twilio.video.RemoteDataTrack): void;
		public onRecordingStarted(param0: com.twilio.video.Room): void;
		public onAudioTrackEnabled(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication): void;
		public onVideoTrackSubscriptionFailed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication, param2: com.twilio.video.TwilioException): void;
		public onDisconnected(param0: com.twilio.video.Room, param1: com.twilio.video.TwilioException): void;
		public static m(param0: x.u): any;
		public onAudioTrackUnsubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication, param2: com.twilio.video.RemoteAudioTrack): void;
		public onVideoTrackUnsubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication, param2: com.twilio.video.RemoteVideoTrack): void;
		public onReconnected(param0: com.twilio.video.Room): void;
		public static a(param0: x.u, param1: boolean): kotlinx.coroutines.Job;
		public onAudioTrackDisabled(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication): void;
		public onAudioTrackSubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication, param2: com.twilio.video.RemoteAudioTrack): void;
		public onAudioTrackUnpublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication): void;
		public onAudioTrackPublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication): void;
		public onConnected(param0: com.twilio.video.Room): void;
		public onParticipantDisconnected(param0: com.twilio.video.Room, param1: com.twilio.video.RemoteParticipant): void;
		public a(): void;
		public onReconnecting(param0: com.twilio.video.Room, param1: com.twilio.video.TwilioException): void;
		public onConnectFailure(param0: com.twilio.video.Room, param1: com.twilio.video.TwilioException): void;
		public static k(param0: x.u): void;
		public onVideoTrackDisabled(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication): void;
		public onVideoTrackPublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication): void;
		public static a(param0: x.u, param1: x.a.a): void;
		public onVideoTrackUnpublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication): void;
		public static b(param0: x.u, param1: boolean): kotlinx.coroutines.Job;
		public constructor(param0: globalAndroid.content.Context, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials);
		public onDataTrackSubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication, param2: com.twilio.video.RemoteDataTrack): void;
		public onRecordingStopped(param0: com.twilio.video.Room): void;
		public onDataTrackPublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication): void;
	}
	export module u {
		export class a extends java.lang.Object implements com.twilio.audioswitch.AudioDevice  {
			public static class: java.lang.Class<x.u.a>;
			public a(param0: java.util.List<any>, param1: com.twilio.audioswitch.AudioDevice): void;
		}
		export module a {
			export class a extends java.lang.Object implements any<com.twilio.audioswitch.AudioDevice,string>  {
				public static class: java.lang.Class<x.u.a.a>;
				public static a: x.u.a.a;
				public invoke(param0: any): any;
			}
		}
		export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.b>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.c>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module c {
			export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
				public static class: java.lang.Class<x.u.c.a>;
				public create(param0: any, param1: any): any;
				public invoke(param0: any, param1: any): any;
				public invokeSuspend(param0: any): any;
			}
		}
		export class d extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.d>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: x.u);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module d {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<x.u.d.a<any>>;
				public constructor(param0: x.u);
				public emit(param0: any, param1: any): any;
			}
		}
		export class e extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.e>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: x.u);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module e {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<x.u.e.a<any>>;
				public constructor(param0: x.u);
				public emit(param0: any, param1: any): any;
			}
		}
		export class f extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.f>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: x.u);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module f {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<x.u.f.a<any>>;
				public constructor(param0: x.u);
				public emit(param0: any, param1: any): any;
			}
		}
		export class g extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.g>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: x.u);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module g {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<x.u.g.a<any>>;
				public constructor(param0: x.u);
				public emit(param0: any, param1: any): any;
			}
		}
		export class h extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.h>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: x.u);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module h {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<x.u.h.a<any>>;
				public constructor(param0: x.u);
				public emit(param0: any, param1: any): any;
			}
		}
		export class i extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.i>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: x.u);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module i {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<x.u.i.a<any>>;
				public constructor(param0: x.u);
				public emit(param0: any, param1: any): any;
			}
		}
		export class j extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<x.u.j>;
			public invoke(param0: any, param1: any): any;
			public constructor(param0: any, param1: x.u);
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export module j {
			export class a<T>  extends kotlinx.coroutines.flow.FlowCollector {
				public static class: java.lang.Class<x.u.j.a<any>>;
				public constructor(param0: x.u);
				public emit(param0: any, param1: any): any;
			}
		}
	}
}

declare module x {
	export class v extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.v>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class w extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.w>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class x extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.x>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class y extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.y>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module x {
	export class z extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<x.z>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
}

declare module y {
	export class a extends com.iadvize.conversation.sdk.feature.conversation.NoOpConversationListener implements com.iadvize.conversation.sdk.feature.visitor.VisitorController {
		public static class: java.lang.Class<y.a>;
		public constructor();
		public registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
		public onNewMessageReceived(param0: string): void;
		public b(): java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>;
		public constructor(param0: n.a);
		public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
		public a(): void;
		public onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
		public a(param0: f.g): void;
	}
	export module a {
		export class a extends com.iadvize.conversation.sdk.IAdvizeSDK.Callback {
			public static class: java.lang.Class<y.a.a>;
			public onSuccess(): void;
			public onFailure(param0: java.lang.Throwable): void;
		}
	}
}

declare module y {
	export class b extends java.lang.Object implements any<com.iadvize.conversation.sdk.feature.visitor.CustomData,java.lang.Boolean>  {
		public static class: java.lang.Class<y.b>;
		public invoke(param0: any): any;
	}
}

declare module y {
	export class c extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
		public static class: java.lang.Class<y.c>;
		public invokeSuspend(param0: any): any;
		public invoke(param0: any, param1: any): any;
		public create(param0: any, param1: any): any;
	}
	export module c {
		export class a extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<y.c.a>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
		export class b extends java.lang.Object implements any<kotlinx.coroutines.CoroutineScope,any,any>  {
			public static class: java.lang.Class<y.c.b>;
			public invoke(param0: any, param1: any): any;
			public create(param0: any, param1: any): any;
			public invokeSuspend(param0: any): any;
		}
	}
}

declare module z {
	export class A extends com.apollographql.apollo3.api.Adapter<z.y> {
		public static class: java.lang.Class<z.A>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.y;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.y): void;
	}
}

declare module z {
	export class B {
		public static class: java.lang.Class<z.B>;
		public a(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string);
	}
}

declare module z {
	export class C extends com.apollographql.apollo3.api.Adapter<z.B> {
		public static class: java.lang.Class<z.C>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.B): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.B;
	}
}

declare module z {
	export class D {
		public static class: java.lang.Class<z.D>;
		public a(): string;
		public b(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public c(): any;
		public toString(): string;
		public constructor(param0: string, param1: string, param2: any);
	}
}

declare module z {
	export class E extends com.apollographql.apollo3.api.Adapter<z.D> {
		public static class: java.lang.Class<z.E>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.D): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.D;
	}
}

declare module z {
	export class F {
		public static class: java.lang.Class<z.F>;
		public a(): string;
		public constructor(param0: any, param1: string);
		public equals(param0: any): boolean;
		public b(): any;
		public hashCode(): number;
		public toString(): string;
	}
}

declare module z {
	export class G extends com.apollographql.apollo3.api.Adapter<z.F> {
		public static class: java.lang.Class<z.G>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.F;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.F): void;
	}
}

declare module z {
	export class H {
		public static class: java.lang.Class<z.H>;
		public a(): string;
		public b(): string;
		public equals(param0: any): boolean;
		public d(): any;
		public constructor(param0: string, param1: string, param2: any, param3: string);
		public hashCode(): number;
		public c(): string;
		public toString(): string;
	}
}

declare module z {
	export class I extends com.apollographql.apollo3.api.Adapter<z.H> {
		public static class: java.lang.Class<z.I>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.H): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.H;
	}
}

declare module z {
	export class J {
		public static class: java.lang.Class<z.J>;
		public constructor(param0: string, param1: string, param2: java.util.Date, param3: z.J.b, param4: z.J.c, param5: java.util.List<z.J.a>);
		public c(): java.util.Date;
		public equals(param0: any): boolean;
		public f(): string;
		public a(): java.util.List<z.J.a>;
		public b(): z.J.b;
		public e(): z.J.c;
		public hashCode(): number;
		public d(): string;
		public toString(): string;
	}
	export module J {
		export class a {
			public static class: java.lang.Class<z.J.a>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.K;
			public constructor(param0: string, param1: z.K);
			public hashCode(): number;
		}
		export class b {
			public static class: java.lang.Class<z.J.b>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.s;
			public constructor(param0: string, param1: z.s);
			public hashCode(): number;
		}
		export class c {
			public static class: java.lang.Class<z.J.c>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.s;
			public constructor(param0: string, param1: z.s);
			public hashCode(): number;
		}
	}
}

declare module z {
	export class K {
		public static class: java.lang.Class<z.K>;
		public constructor(param0: string, param1: z.c, param2: z.h, param3: z.w, param4: z.y, param5: z.D, param6: z.F, param7: z.H, param8: z.Q, param9: z.T, param10: z.X, param11: z.c0, param12: z.g0);
		public l(): z.g0;
		public equals(param0: any): boolean;
		public i(): z.T;
		public j(): z.X;
		public b(): z.h;
		public k(): z.c0;
		public toString(): string;
		public m(): string;
		public a(): z.c;
		public d(): z.y;
		public hashCode(): number;
		public g(): z.H;
		public h(): z.Q;
		public f(): z.F;
		public c(): z.w;
		public e(): z.D;
	}
}

declare module z {
	export class L extends com.apollographql.apollo3.api.Adapter<z.K> {
		public static class: java.lang.Class<z.L>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.K;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.K): void;
	}
}

declare module z {
	export class M extends com.apollographql.apollo3.api.Adapter<z.J.a> {
		public static class: java.lang.Class<z.M>;
		public static a: z.M;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class N extends com.apollographql.apollo3.api.Adapter<z.J.b> {
		public static class: java.lang.Class<z.N>;
		public static a: z.N;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class O extends com.apollographql.apollo3.api.Adapter<z.J> {
		public static class: java.lang.Class<z.O>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.J;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.J): void;
	}
}

declare module z {
	export class P extends com.apollographql.apollo3.api.Adapter<z.J.c> {
		public static class: java.lang.Class<z.P>;
		public static a: z.P;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class Q {
		public static class: java.lang.Class<z.Q>;
		public a(): string;
		public b(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public d(): string;
		public c(): any;
		public e(): string;
		public toString(): string;
		public constructor(param0: string, param1: any, param2: boolean, param3: string, param4: string, param5: string);
		public f(): boolean;
	}
}

declare module z {
	export class S extends com.apollographql.apollo3.api.Adapter<z.Q> {
		public static class: java.lang.Class<z.S>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.Q): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.Q;
	}
}

declare module z {
	export class T {
		public static class: java.lang.Class<z.T>;
		public b(): z.T.b;
		public equals(param0: any): boolean;
		public f(): string;
		public hashCode(): number;
		public d(): string;
		public e(): string;
		public a(): java.util.List<z.T.a>;
		public c(): string;
		public toString(): string;
		public constructor(param0: z.T.b, param1: string, param2: string, param3: string, param4: string, param5: boolean, param6: java.util.List<z.T.a>);
		public g(): boolean;
	}
	export module T {
		export class a {
			public static class: java.lang.Class<z.T.a>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.k;
			public constructor(param0: string, param1: z.k);
			public hashCode(): number;
		}
		export class b {
			public static class: java.lang.Class<z.T.b>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.m;
			public constructor(param0: string, param1: z.m);
			public hashCode(): number;
		}
	}
}

declare module z {
	export class U extends com.apollographql.apollo3.api.Adapter<z.T.a> {
		public static class: java.lang.Class<z.U>;
		public static a: z.U;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class V extends com.apollographql.apollo3.api.Adapter<z.T.b> {
		public static class: java.lang.Class<z.V>;
		public static a: z.V;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class W extends com.apollographql.apollo3.api.Adapter<z.T> {
		public static class: java.lang.Class<z.W>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.T): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.T;
	}
}

declare module z {
	export class X {
		public static class: java.lang.Class<z.X>;
		public equals(param0: any): boolean;
		public a(): java.util.List<z.X.a>;
		public hashCode(): number;
		public constructor(param0: java.util.List<z.X.a>);
		public toString(): string;
	}
	export module X {
		export class a {
			public static class: java.lang.Class<z.X.a>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: string, param1: z.T);
			public a(): z.T;
			public hashCode(): number;
		}
	}
}

declare module z {
	export class Y extends com.apollographql.apollo3.api.Adapter<z.X.a> {
		public static class: java.lang.Class<z.Y>;
		public static a: z.Y;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class Z extends com.apollographql.apollo3.api.Adapter<z.X> {
		public static class: java.lang.Class<z.Z>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.X;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.X): void;
	}
}

declare module z {
	export class a {
		public static class: java.lang.Class<z.a>;
		public a(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string);
	}
}

declare module z {
	export class a0 {
		public static class: java.lang.Class<z.a0>;
		public a(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string);
	}
}

declare module z {
	export class b extends com.apollographql.apollo3.api.Adapter<z.a> {
		public static class: java.lang.Class<z.b>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.a): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.a;
	}
}

declare module z {
	export class b0 extends com.apollographql.apollo3.api.Adapter<z.a0> {
		public static class: java.lang.Class<z.b0>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.a0;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.a0): void;
	}
}

declare module z {
	export class c {
		public static class: java.lang.Class<z.c>;
		public equals(param0: any): boolean;
		public b(): z.c.b;
		public hashCode(): number;
		public d(): string;
		public constructor(param0: z.c.b, param1: string, param2: string, param3: string, param4: z.c.c, param5: java.util.List<z.c.a>);
		public e(): string;
		public c(): string;
		public toString(): string;
		public a(): java.util.List<z.c.a>;
		public f(): z.c.c;
	}
	export module c {
		export class a {
			public static class: java.lang.Class<z.c.a>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.k;
			public constructor(param0: string, param1: z.k);
			public hashCode(): number;
		}
		export class b {
			public static class: java.lang.Class<z.c.b>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.m;
			public constructor(param0: string, param1: z.m);
			public hashCode(): number;
		}
		export class c {
			public static class: java.lang.Class<z.c.c>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: string, param1: z.i0);
			public a(): z.i0;
			public hashCode(): number;
		}
	}
}

declare module z {
	export class c0 {
		public static class: java.lang.Class<z.c0>;
		public constructor(param0: string, param1: java.util.List<string>);
		public b(): string;
		public equals(param0: any): boolean;
		public a(): java.util.List<string>;
		public hashCode(): number;
		public toString(): string;
	}
}

declare module z {
	export class d extends com.apollographql.apollo3.api.Adapter<z.c.a> {
		public static class: java.lang.Class<z.d>;
		public static a: z.d;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class d0 extends com.apollographql.apollo3.api.Adapter<z.c0> {
		public static class: java.lang.Class<z.d0>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.c0;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.c0): void;
	}
}

declare module z {
	export class e extends com.apollographql.apollo3.api.Adapter<z.c> {
		public static class: java.lang.Class<z.e>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.c): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.c;
	}
}

declare module z {
	export class e0 {
		public static class: java.lang.Class<z.e0>;
		public a(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string);
	}
}

declare module z {
	export class f extends com.apollographql.apollo3.api.Adapter<z.c.b> {
		public static class: java.lang.Class<z.f>;
		public static a: z.f;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class f0 extends com.apollographql.apollo3.api.Adapter<z.e0> {
		public static class: java.lang.Class<z.f0>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.e0): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.e0;
	}
}

declare module z {
	export class g extends com.apollographql.apollo3.api.Adapter<z.c.c> {
		public static class: java.lang.Class<z.g>;
		public static a: z.g;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class g0 {
		public static class: java.lang.Class<z.g0>;
		public constructor(param0: java.lang.Boolean);
		public equals(param0: any): boolean;
		public a(): java.lang.Boolean;
		public hashCode(): number;
		public toString(): string;
	}
}

declare module z {
	export class h {
		public static class: java.lang.Class<z.h>;
		public equals(param0: any): boolean;
		public a(): java.util.List<z.h.a>;
		public hashCode(): number;
		public constructor(param0: java.util.List<z.h.a>);
		public toString(): string;
	}
	export module h {
		export class a {
			public static class: java.lang.Class<z.h.a>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.c;
			public constructor(param0: string, param1: z.c);
			public hashCode(): number;
		}
	}
}

declare module z {
	export class h0 extends com.apollographql.apollo3.api.Adapter<z.g0> {
		public static class: java.lang.Class<z.h0>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.g0;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.g0): void;
	}
}

declare module z {
	export class i extends com.apollographql.apollo3.api.Adapter<z.h.a> {
		public static class: java.lang.Class<z.i>;
		public static a: z.i;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class i0 {
		public static class: java.lang.Class<z.i0>;
		public a(): string;
		public b(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module z {
	export class j extends com.apollographql.apollo3.api.Adapter<z.h> {
		public static class: java.lang.Class<z.j>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.h): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.h;
	}
}

declare module z {
	export class j0 extends com.apollographql.apollo3.api.Adapter<z.i0> {
		public static class: java.lang.Class<z.j0>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.i0;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.i0): void;
	}
}

declare module z {
	export class k {
		public static class: java.lang.Class<z.k>;
		public b(): z.q;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public constructor(param0: string, param1: z.o, param2: z.q);
		public c(): string;
		public toString(): string;
		public a(): z.o;
	}
}

declare module z {
	export class k0 {
		public static class: java.lang.Class<z.k0>;
		public a(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string);
	}
}

declare module z {
	export class l extends com.apollographql.apollo3.api.Adapter<z.k> {
		public static class: java.lang.Class<z.l>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.k;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.k): void;
	}
}

declare module z {
	export class l0 extends com.apollographql.apollo3.api.Adapter<z.k0> {
		public static class: java.lang.Class<z.l0>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.k0): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.k0;
	}
}

declare module z {
	export class m {
		public static class: java.lang.Class<z.m>;
		public a(): string;
		public b(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string, param1: string);
	}
}

declare module z {
	export class m0 {
		public static class: java.lang.Class<z.m0>;
		public equals(param0: any): boolean;
		public constructor(param0: string, param1: java.util.List<z.m0.a>, param2: z.m0.c);
		public hashCode(): number;
		public c(): string;
		public toString(): string;
		public a(): java.util.List<z.m0.a>;
		public b(): z.m0.c;
	}
	export module m0 {
		export class a {
			public static class: java.lang.Class<z.m0.a>;
			public constructor(param0: z.m0.b);
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.m0.b;
			public hashCode(): number;
		}
		export class b {
			public static class: java.lang.Class<z.m0.b>;
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public constructor(param0: string, param1: z.J);
			public a(): z.J;
			public hashCode(): number;
		}
		export class c {
			public static class: java.lang.Class<z.m0.c>;
			public equals(param0: any): boolean;
			public toString(): string;
			public b(): boolean;
			public a(): string;
			public constructor(param0: boolean, param1: string);
			public hashCode(): number;
		}
	}
}

declare module z {
	export class n extends com.apollographql.apollo3.api.Adapter<z.m> {
		public static class: java.lang.Class<z.n>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.m;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.m): void;
	}
}

declare module z {
	export class n0 extends com.apollographql.apollo3.api.Adapter<z.m0.a> {
		public static class: java.lang.Class<z.n0>;
		public static a: z.n0;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class o {
		public static class: java.lang.Class<z.o>;
		public a(): string;
		public constructor(param0: any, param1: string);
		public equals(param0: any): boolean;
		public b(): any;
		public hashCode(): number;
		public toString(): string;
	}
}

declare module z {
	export class o0 extends com.apollographql.apollo3.api.Adapter<z.m0.b> {
		public static class: java.lang.Class<z.o0>;
		public static a: z.o0;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class p extends com.apollographql.apollo3.api.Adapter<z.o> {
		public static class: java.lang.Class<z.p>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.o): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.o;
	}
}

declare module z {
	export class p0 extends com.apollographql.apollo3.api.Adapter<z.m0.c> {
		public static class: java.lang.Class<z.p0>;
		public static a: z.p0;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

declare module z {
	export class q {
		public static class: java.lang.Class<z.q>;
		public a(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string);
	}
}

declare module z {
	export class q0 extends com.apollographql.apollo3.api.Adapter<z.m0> {
		public static class: java.lang.Class<z.q0>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.m0;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.m0): void;
	}
}

declare module z {
	export class r extends com.apollographql.apollo3.api.Adapter<z.q> {
		public static class: java.lang.Class<z.r>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.q): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.q;
	}
}

declare module z {
	export class s {
		public static class: java.lang.Class<z.s>;
		public g(): string;
		public d(): z.a0;
		public a(): z.a;
		public equals(param0: any): boolean;
		public constructor(param0: string, param1: z.a, param2: z.u, param3: z.B, param4: z.a0, param5: z.e0, param6: z.k0);
		public c(): z.B;
		public hashCode(): number;
		public e(): z.e0;
		public f(): z.k0;
		public toString(): string;
		public b(): z.u;
	}
}

declare module z {
	export class t extends com.apollographql.apollo3.api.Adapter<z.s> {
		public static class: java.lang.Class<z.t>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.s;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.s): void;
	}
}

declare module z {
	export class u {
		public static class: java.lang.Class<z.u>;
		public a(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public toString(): string;
		public constructor(param0: string);
	}
}

declare module z {
	export class v extends com.apollographql.apollo3.api.Adapter<z.u> {
		public static class: java.lang.Class<z.v>;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.u;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.u): void;
	}
}

declare module z {
	export class w {
		public static class: java.lang.Class<z.w>;
		public a(): string;
		public b(): string;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public c(): any;
		public toString(): string;
		public constructor(param0: string, param1: string, param2: any);
	}
}

declare module z {
	export class x extends com.apollographql.apollo3.api.Adapter<z.w> {
		public static class: java.lang.Class<z.x>;
		public a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: z.w): void;
		public a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): z.w;
	}
}

declare module z {
	export class y {
		public static class: java.lang.Class<z.y>;
		public equals(param0: any): boolean;
		public hashCode(): number;
		public constructor(param0: java.util.List<z.y.a>);
		public a(): java.util.List<z.y.a>;
		public toString(): string;
	}
	export module y {
		export class a {
			public static class: java.lang.Class<z.y.a>;
			public constructor(param0: string, param1: z.w);
			public b(): string;
			public equals(param0: any): boolean;
			public toString(): string;
			public a(): z.w;
			public hashCode(): number;
		}
	}
}

declare module z {
	export class z extends com.apollographql.apollo3.api.Adapter<z.y.a> {
		public static class: java.lang.Class<z.z>;
		public static a: z.z;
		public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
		public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
	}
}

//Generics information:
//com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.b.a:1
//com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.c.a:1
//com.iadvize.conversation.sdk.feature.video.VideoService.b.a:1
//com.iadvize.conversation.sdk.feature.video.VideoService.c.a:1
//com.iadvize.conversation.sdk.feature.video.b.a:1
//com.iadvize.conversation.sdk.feature.video.c.a:1
//com.iadvize.conversation.sdk.feature.video.d.a:1
//f.a.a:1
//f.a.b:1
//f.b:1
//f.c:1
//f.e:1
//f.g.I.a:1
//f.g.J.a:1
//f.m:1
//f.n:1
//g.a.b.a:1
//g.a.c.a:1
//g.b:1
//g.c:1
//u.b.a:1
//x.D:1
//x.E:1
//x.F:1
//x.G:1
//x.H:1
//x.I:1
//x.J:1
//x.b:1
//x.c:1
//x.e:1
//x.f.a:1
//x.g:1
//x.g0:1
//x.h.a:1
//x.h0.a:1
//x.i:1
//x.i0:1
//x.j.a:1
//x.j0.a:1
//x.k:1
//x.l.a:1
//x.l0:1
//x.m:1
//x.m0:1
//x.n:1
//x.o:1
//x.p:1
//x.q.a:1
//x.r:1
//x.s.a:1
//x.u.d.a:1
//x.u.e.a:1
//x.u.f.a:1
//x.u.g.a:1
//x.u.h.a:1
//x.u.i.a:1
//x.u.j.a:1

