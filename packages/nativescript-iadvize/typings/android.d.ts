/// <reference path="android-declarations.d.ts"/>

declare module a {
  export abstract class a {
    public static class: java.lang.Class<a.a>;
    public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: string, param2: com.apollographql.apollo3.api.CustomScalarAdapters, param3: string, param4: string): java.lang.IllegalStateException;
  }
}

declare module b {
  export abstract class a {
    public static class: java.lang.Class<b.a>;
    public static a(param0: string): com.apollographql.apollo3.api.ObjectType;
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export class AuthenticateAnonymousVisitorMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public constructor(param0: number, param1: com.apollographql.apollo3.api.Optional);
          public b(): com.apollographql.apollo3.api.Optional;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public a(): number;
          public id(): string;
        }
        export module AuthenticateAnonymousVisitorMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.Data>;
            public a(): com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.VisitorAuthenticateAnonymously;
            public constructor(param0: com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.VisitorAuthenticateAnonymously);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class VisitorAuthenticateAnonymously {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.VisitorAuthenticateAnonymously>;
            public constructor(param0: com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.VisitorSessionToken);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.VisitorSessionToken;
            public toString(): string;
          }
          export class VisitorSessionToken {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.VisitorSessionToken>;
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
        export class AuthenticateSecuredVisitorMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation>;
          public name(): string;
          public constructor(param0: number, param1: string, param2: com.apollographql.apollo3.api.Optional);
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public c(): com.apollographql.apollo3.api.Optional;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public b(): number;
          public toString(): string;
          public a(): string;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module AuthenticateSecuredVisitorMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.Data>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.VisitorAuthenticateFromCredentials;
            public constructor(param0: com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.VisitorAuthenticateFromCredentials);
            public toString(): string;
          }
          export class VisitorAuthenticateFromCredentials {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.VisitorAuthenticateFromCredentials>;
            public a(): com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.VisitorSessionToken;
            public constructor(param0: com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.VisitorSessionToken);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class VisitorSessionToken {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.VisitorSessionToken>;
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
        export class AuthenticateSimpleVisitorMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation>;
          public name(): string;
          public constructor(param0: number, param1: string, param2: com.apollographql.apollo3.api.Optional);
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public c(): com.apollographql.apollo3.api.Optional;
          public a(): number;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public toString(): string;
          public b(): string;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module AuthenticateSimpleVisitorMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.Data>;
            public constructor(param0: com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.VisitorAuthenticateFromCustomerUserId);
            public a(): com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.VisitorAuthenticateFromCustomerUserId;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class VisitorAuthenticateFromCustomerUserId {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.VisitorAuthenticateFromCustomerUserId>;
            public constructor(param0: com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.VisitorSessionToken);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.VisitorSessionToken;
            public toString(): string;
          }
          export class VisitorSessionToken {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.VisitorSessionToken>;
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
        export class BuildConfig {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.BuildConfig>;
        }
      }
    }
  }
}

declare module com {
  export module iadvize {
    export module conversation {
      export module sdk {
        export class CreateChatConversationMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.CreateChatConversationMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateChatConversationMutation>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public b(): java.util.UUID;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public a(): com.iadvize.conversation.sdk.type.Language;
          public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language);
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module CreateChatConversationMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateChatConversationMutation.Companion>;
          }
          export class Conversation {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateChatConversationMutation.Conversation>;
            public a(): java.util.UUID;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.UUID);
            public toString(): string;
          }
          export class ConversationCreate {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateChatConversationMutation.ConversationCreate>;
            public constructor(param0: com.iadvize.conversation.sdk.CreateChatConversationMutation.Conversation);
            public a(): com.iadvize.conversation.sdk.CreateChatConversationMutation.Conversation;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateChatConversationMutation.Data>;
            public a(): com.iadvize.conversation.sdk.CreateChatConversationMutation.ConversationCreate;
            public constructor(param0: com.iadvize.conversation.sdk.CreateChatConversationMutation.ConversationCreate);
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
        export class CreateVideoConversationMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.CreateVideoConversationMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateVideoConversationMutation>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public b(): java.util.UUID;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public a(): com.iadvize.conversation.sdk.type.Language;
          public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language);
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module CreateVideoConversationMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateVideoConversationMutation.Companion>;
          }
          export class Conversation {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateVideoConversationMutation.Conversation>;
            public a(): java.util.UUID;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.UUID);
            public toString(): string;
          }
          export class ConversationCreate {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateVideoConversationMutation.ConversationCreate>;
            public constructor(param0: com.iadvize.conversation.sdk.CreateVideoConversationMutation.Conversation);
            public a(): com.iadvize.conversation.sdk.CreateVideoConversationMutation.Conversation;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateVideoConversationMutation.Data>;
            public b(): com.iadvize.conversation.sdk.CreateVideoConversationMutation.VisitorVideoToken;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.CreateVideoConversationMutation.ConversationCreate, param1: com.iadvize.conversation.sdk.CreateVideoConversationMutation.VisitorVideoToken);
            public a(): com.iadvize.conversation.sdk.CreateVideoConversationMutation.ConversationCreate;
            public toString(): string;
          }
          export class VisitorVideoToken {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.CreateVideoConversationMutation.VisitorVideoToken>;
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
        export class DisablePushTokenMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: string);
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public b(): string;
          public a(): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module DisablePushTokenMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data>;
            public constructor(param0: com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable);
            public a(): com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class SdkMobilePushTokenDisable {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable>;
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
        export class EnablePushTokenMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: string);
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public b(): string;
          public a(): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module EnablePushTokenMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data>;
            public a(): com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable);
            public toString(): string;
          }
          export class SdkMobilePushTokenEnable {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable>;
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
        export abstract class Environment {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.Environment>;
          public c(): string;
          public e(): string;
          public d(): string;
          public b(): string;
          public a(): string;
          public f(): string;
          public g(): number;
        }
        export module Environment {
          export class ProdHA extends com.iadvize.conversation.sdk.Environment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.Environment.ProdHA>;
            public static h: com.iadvize.conversation.sdk.Environment.ProdHA;
          }
          export class TrackMessaging extends com.iadvize.conversation.sdk.Environment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.Environment.TrackMessaging>;
          }
          export class UnitTest extends com.iadvize.conversation.sdk.Environment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.Environment.UnitTest>;
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
        export class GetChatboxTemplateQuery extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.GetChatboxTemplateQuery.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.GetChatboxTemplateQuery>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public a(): number;
          public id(): string;
          public constructor(param0: number);
        }
        export module GetChatboxTemplateQuery {
          export class ChatboxTemplate {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetChatboxTemplateQuery.ChatboxTemplate>;
            public constructor(param0: com.iadvize.conversation.sdk.GetChatboxTemplateQuery.TemplateAttributes);
            public a(): com.iadvize.conversation.sdk.GetChatboxTemplateQuery.TemplateAttributes;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetChatboxTemplateQuery.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetChatboxTemplateQuery.Data>;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.List<any>);
            public toString(): string;
          }
          export class TemplateAttributes {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetChatboxTemplateQuery.TemplateAttributes>;
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
        export class GetConversationQuery extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.GetConversationQuery.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module GetConversationQuery {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Companion>;
          }
          export class Conversation {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Conversation>;
            public a(): com.iadvize.conversation.sdk.GetConversationQuery.Messages;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.GetConversationQuery.Messages);
            public toString(): string;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Data>;
            public a(): com.iadvize.conversation.sdk.GetConversationQuery.Conversation;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.GetConversationQuery.Conversation);
            public toString(): string;
          }
          export class Messages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetConversationQuery.Messages>;
            public a(): com.iadvize.conversation.sdk.fragment.VisitorMessages;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.VisitorMessages);
            public b(): string;
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
        export class GetGDPRConsentQuery extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery>;
          public equals(param0: any): boolean;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public name(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public constructor();
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module GetGDPRConsentQuery {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data>;
            public constructor(param0: com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent);
            public a(): com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class SdkVisitorConsent {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent>;
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
        export class GetProjectSettingsQuery extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.GetProjectSettingsQuery.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.GetProjectSettingsQuery>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public a(): number;
          public id(): string;
          public constructor(param0: number);
        }
        export module GetProjectSettingsQuery {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetProjectSettingsQuery.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetProjectSettingsQuery.Data>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.GetProjectSettingsQuery.Project);
            public a(): com.iadvize.conversation.sdk.GetProjectSettingsQuery.Project;
            public toString(): string;
          }
          export class Project {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetProjectSettingsQuery.Project>;
            public constructor(param0: com.iadvize.conversation.sdk.GetProjectSettingsQuery.Settings);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.GetProjectSettingsQuery.Settings;
            public toString(): string;
          }
          export class Settings {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetProjectSettingsQuery.Settings>;
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
        export class GetUploadUrlsQuery extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: string);
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public a(): string;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module GetUploadUrlsQuery {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data>;
            public constructor(param0: com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls);
            public a(): com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class SdkUploadUrls {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls>;
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
        export class GetVideoConversationCredentialsMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation>;
          public equals(param0: any): boolean;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public name(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public constructor();
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module GetVideoConversationCredentialsMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation.Data>;
            public a(): com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation.VisitorVideoToken;
            public constructor(param0: com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation.VisitorVideoToken);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class VisitorVideoToken {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation.VisitorVideoToken>;
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
        export class IAdvizeSDK {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK>;
          public static INSTANCE: com.iadvize.conversation.sdk.IAdvizeSDK;
          public static initiate(param0: globalAndroid.app.Application): kotlinx.coroutines.Job;
          public getConversationControllerImpl$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl;
          public static setLogLevel(param0: com.iadvize.conversation.sdk.feature.logger.Logger.Level): void;
          public getEnvironment$sdk_clientRelease(): com.iadvize.conversation.sdk.Environment;
          public setEnvironment$sdk_clientRelease(param0: com.iadvize.conversation.sdk.Environment): void;
          public getNotificationController(): com.iadvize.conversation.sdk.feature.notification.NotificationController;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption, param2: com.iadvize.conversation.sdk.feature.gdpr.GDPROption, param3: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): kotlinx.coroutines.Job;
          public setJweProvider$sdk_clientRelease(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider): void;
          public getVisitorControllerImpl$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.visitor.VisitorControllerImpl;
          public getGraphQLApi$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.graphql.GraphQLApi;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption): kotlinx.coroutines.Job;
          public getChatboxControllerImpl$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.chatbox.ChatboxControllerImpl;
          public getTransactionControllerImpl$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.transaction.TransactionControllerImpl;
          public getVisitorController(): com.iadvize.conversation.sdk.feature.visitor.VisitorController;
          public getJweProvider$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider;
          public clear$sdk_clientRelease(): void;
          public uiSdkScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
          public getSdkScope$sdk_clientRelease(): com.iadvize.conversation.sdk.utility.CloseableCoroutineScope;
          public withActivatedSdk$sdk_clientRelease(param0: string, param1: any, param2: any): void;
          public static logout(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): kotlinx.coroutines.Job;
          public getTrackingApi$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.tracking.TrackingApi;
          public getTargetingController(): com.iadvize.conversation.sdk.feature.targeting.TargetingController;
          public static getLogLevel(): com.iadvize.conversation.sdk.feature.logger.Logger.Level;
          public static activate(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption, param2: com.iadvize.conversation.sdk.feature.gdpr.GDPROption): kotlinx.coroutines.Job;
          public getDefaultFloatingButtonController(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController;
          public eventBusScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
          public getNotificationControllerImpl$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.notification.NotificationControllerImpl;
          public ioSdkScope$sdk_clientRelease(param0: any): kotlinx.coroutines.Job;
          public getConversationController(): com.iadvize.conversation.sdk.feature.conversation.ConversationController;
          public getConversationChannel$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
          public getTransactionController(): com.iadvize.conversation.sdk.feature.transaction.TransactionController;
          public getActivationStatus(): com.iadvize.conversation.sdk.IAdvizeSDK.ActivationStatus;
          public getDefaultFloatingButtonControllerImpl$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonControllerImpl;
          public getChatboxController(): com.iadvize.conversation.sdk.feature.chatbox.ChatboxController;
          public getSatisfactionApi$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionApi;
          public getTargetingControllerImpl$sdk_clientRelease(): com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl;
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
            public constructor(implementation: { onSuccess(): void; onFailure(param0: java.lang.Throwable): void });
            public constructor();
            public onFailure(param0: java.lang.Throwable): void;
            public onSuccess(): void;
          }
          export class GraphQLApiException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.GraphQLApiException>;
            public constructor(param0: string);
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
          export class InvalidVisitorSubscription {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.InvalidVisitorSubscription>;
            public constructor();
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
          export class RestApiException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.RestApiException>;
            public constructor(param0: string);
          }
          export class SatisfactionException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.SatisfactionException>;
            public constructor();
          }
          export class UserAuthenticationException extends com.iadvize.conversation.sdk.IAdvizeSDK.ActivationException {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.UserAuthenticationException>;
            public constructor();
            public constructor(param0: string);
          }
          export class WhenMappings {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.IAdvizeSDK.WhenMappings>;
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
        export class OngoingConversationQuery extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.OngoingConversationQuery.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery>;
          public equals(param0: any): boolean;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public name(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public constructor();
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module OngoingConversationQuery {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.Companion>;
          }
          export class ConversationsVisitorMessages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages>;
            public a(): com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation);
            public toString(): string;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.Data>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages;
            public toString(): string;
            public constructor(param0: com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages);
          }
          export class OngoingConversation {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation>;
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
        export class RegisterConcludedTransactionMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public a(): com.iadvize.conversation.sdk.type.SDKTransactionInput;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
          public constructor(param0: com.iadvize.conversation.sdk.type.SDKTransactionInput);
        }
        export module RegisterConcludedTransactionMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data>;
            public constructor(param0: com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister);
            public a(): com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class SdkTransactionConcludedRegister {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister>;
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
        export class RegisterPushTokenMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation>;
          public name(): string;
          public c(): string;
          public b(): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public a(): com.apollographql.apollo3.api.Optional;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public toString(): string;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
          public constructor(param0: string, param1: com.apollographql.apollo3.api.Optional);
        }
        export module RegisterPushTokenMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister;
            public constructor(param0: com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister);
            public toString(): string;
          }
          export class SdkMobilePushTokenRegister {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister>;
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
        export class SendGDRPConsentMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public name(): string;
          public toString(): string;
          public constructor(param0: boolean);
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public a(): boolean;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module SendGDRPConsentMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data>;
            public a(): com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet);
            public toString(): string;
          }
          export class SdkVisitorConsentSet {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet>;
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
        export class SendVisitorCustomDataMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation>;
          public name(): string;
          public b(): java.util.List<any>;
          public e(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public d(): com.iadvize.conversation.sdk.type.Source;
          public c(): number;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public constructor(param0: string, param1: number, param2: java.util.UUID, param3: java.util.ArrayList<any>);
          public a(): java.util.UUID;
          public toString(): string;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module SendVisitorCustomDataMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.Companion>;
          }
          export class CustomDatum {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.CustomDatum>;
            public b(): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryFloat;
            public a(): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryBoolean;
            public c(): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryInt;
            public e(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public d(): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryString;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryInt, param2: com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryString, param3: com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryFloat, param4: com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryBoolean);
            public toString(): string;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.Data>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.VisitorConversationCustomDataSet);
            public a(): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.VisitorConversationCustomDataSet;
            public toString(): string;
          }
          export class OnVisitorConversationCustomDataEntryBoolean {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryBoolean>;
            public b(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): boolean;
            public toString(): string;
            public constructor(param0: string, param1: boolean);
          }
          export class OnVisitorConversationCustomDataEntryFloat {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryFloat>;
            public constructor(param0: string, param1: number);
            public b(): string;
            public a(): number;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class OnVisitorConversationCustomDataEntryInt {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryInt>;
            public constructor(param0: string, param1: number);
            public b(): string;
            public a(): number;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class OnVisitorConversationCustomDataEntryString {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryString>;
            public a(): string;
            public b(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: string);
            public toString(): string;
          }
          export class VisitorConversationCustomDataSet {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.VisitorConversationCustomDataSet>;
            public c(): java.util.UUID;
            public a(): java.util.UUID;
            public constructor(param0: java.util.UUID, param1: java.util.UUID, param2: java.util.List<any>);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public b(): java.util.List<any>;
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
        export class TriggerTargetingRuleMutation extends com.apollographql.apollo3.api.Mutation<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation>;
          public name(): string;
          public b(): com.iadvize.conversation.sdk.type.Language;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public constructor(param0: java.util.UUID, param1: java.util.UUID, param2: com.iadvize.conversation.sdk.type.Language, param3: com.iadvize.conversation.sdk.type.Channel);
          public a(): com.iadvize.conversation.sdk.type.Channel;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public toString(): string;
          public c(): java.util.UUID;
          public d(): java.util.UUID;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module TriggerTargetingRuleMutation {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Companion>;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data>;
            public a(): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger);
            public toString(): string;
          }
          export class TargetingRule {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule>;
            public a(): java.util.UUID;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.UUID);
            public toString(): string;
          }
          export class TargetingRuleTrigger {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger>;
            public constructor(param0: com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule);
            public a(): com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule;
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
        export class VisitorMessagesFromTargetingRuleQuery extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery>;
          public name(): string;
          public b(): com.iadvize.conversation.sdk.type.Language;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public a(): com.apollographql.apollo3.api.Optional;
          public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.Language, param2: number, param3: com.apollographql.apollo3.api.Optional);
          public c(): number;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public toString(): string;
          public d(): java.util.UUID;
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public hashCode(): number;
          public id(): string;
        }
        export module VisitorMessagesFromTargetingRuleQuery {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Companion>;
          }
          export class ConversationsVisitorMessages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public b(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages;
            public constructor(param0: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages, param1: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages);
            public a(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages;
            public toString(): string;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data>;
            public a(): com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages;
            public constructor(param0: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class Messages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages>;
            public a(): com.iadvize.conversation.sdk.fragment.VisitorMessages;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.VisitorMessages);
            public b(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class ProactiveBotMessages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages>;
            public a(): com.iadvize.conversation.sdk.fragment.VisitorMessages;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.VisitorMessages);
            public b(): string;
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
        export class VisitorMessagesQuery extends com.apollographql.apollo3.api.Query<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data> {
          public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery>;
          public document(): string;
          public serializeVariables(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters): void;
          public equals(param0: any): boolean;
          public b(): number;
          public name(): string;
          public toString(): string;
          public adapter(): com.apollographql.apollo3.api.Adapter;
          public constructor(param0: number, param1: com.apollographql.apollo3.api.Optional);
          public rootField(): com.apollographql.apollo3.api.CompiledField;
          public a(): com.apollographql.apollo3.api.Optional;
          public hashCode(): number;
          public id(): string;
        }
        export module VisitorMessagesQuery {
          export class Companion {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Companion>;
          }
          export class ConversationsVisitorMessages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages>;
            public constructor(param0: com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages);
            public a(): com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export class Data {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages);
            public a(): com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages;
            public toString(): string;
          }
          export class Messages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages>;
            public a(): com.iadvize.conversation.sdk.fragment.VisitorMessages;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.VisitorMessages);
            public b(): string;
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
        export module adapter {
          export class AuthenticateAnonymousVisitorMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateAnonymousVisitorMutation_ResponseAdapter>;
          }
          export module AuthenticateAnonymousVisitorMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateAnonymousVisitorMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateAnonymousVisitorMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorAuthenticateAnonymously extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.VisitorAuthenticateAnonymously> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateAnonymousVisitorMutation_ResponseAdapter.VisitorAuthenticateAnonymously>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateAnonymousVisitorMutation_ResponseAdapter.VisitorAuthenticateAnonymously;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorSessionToken extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation.VisitorSessionToken> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateAnonymousVisitorMutation_ResponseAdapter.VisitorSessionToken>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateAnonymousVisitorMutation_ResponseAdapter.VisitorSessionToken;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class AuthenticateAnonymousVisitorMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateAnonymousVisitorMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateAnonymousVisitorMutation_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class AuthenticateSecuredVisitorMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSecuredVisitorMutation_ResponseAdapter>;
          }
          export module AuthenticateSecuredVisitorMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSecuredVisitorMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateSecuredVisitorMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorAuthenticateFromCredentials extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.VisitorAuthenticateFromCredentials> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSecuredVisitorMutation_ResponseAdapter.VisitorAuthenticateFromCredentials>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateSecuredVisitorMutation_ResponseAdapter.VisitorAuthenticateFromCredentials;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorSessionToken extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation.VisitorSessionToken> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSecuredVisitorMutation_ResponseAdapter.VisitorSessionToken>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateSecuredVisitorMutation_ResponseAdapter.VisitorSessionToken;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class AuthenticateSecuredVisitorMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSecuredVisitorMutation_VariablesAdapter>;
            public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.AuthenticateSecuredVisitorMutation): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class AuthenticateSimpleVisitorMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSimpleVisitorMutation_ResponseAdapter>;
          }
          export module AuthenticateSimpleVisitorMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSimpleVisitorMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateSimpleVisitorMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorAuthenticateFromCustomerUserId extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.VisitorAuthenticateFromCustomerUserId> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSimpleVisitorMutation_ResponseAdapter.VisitorAuthenticateFromCustomerUserId>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateSimpleVisitorMutation_ResponseAdapter.VisitorAuthenticateFromCustomerUserId;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorSessionToken extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation.VisitorSessionToken> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSimpleVisitorMutation_ResponseAdapter.VisitorSessionToken>;
              public static a: com.iadvize.conversation.sdk.adapter.AuthenticateSimpleVisitorMutation_ResponseAdapter.VisitorSessionToken;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class AuthenticateSimpleVisitorMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.AuthenticateSimpleVisitorMutation_VariablesAdapter>;
            public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.AuthenticateSimpleVisitorMutation): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class CreateChatConversationMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateChatConversationMutation_ResponseAdapter>;
          }
          export module CreateChatConversationMutation_ResponseAdapter {
            export class Conversation extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateChatConversationMutation.Conversation> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateChatConversationMutation_ResponseAdapter.Conversation>;
              public static a: com.iadvize.conversation.sdk.adapter.CreateChatConversationMutation_ResponseAdapter.Conversation;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class ConversationCreate extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateChatConversationMutation.ConversationCreate> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateChatConversationMutation_ResponseAdapter.ConversationCreate>;
              public static a: com.iadvize.conversation.sdk.adapter.CreateChatConversationMutation_ResponseAdapter.ConversationCreate;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateChatConversationMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateChatConversationMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.CreateChatConversationMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class CreateChatConversationMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateChatConversationMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateChatConversationMutation_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class CreateVideoConversationMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter>;
          }
          export module CreateVideoConversationMutation_ResponseAdapter {
            export class Conversation extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateVideoConversationMutation.Conversation> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter.Conversation>;
              public static a: com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter.Conversation;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class ConversationCreate extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateVideoConversationMutation.ConversationCreate> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter.ConversationCreate>;
              public static a: com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter.ConversationCreate;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateVideoConversationMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorVideoToken extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateVideoConversationMutation.VisitorVideoToken> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter.VisitorVideoToken>;
              public static a: com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_ResponseAdapter.VisitorVideoToken;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class CreateVideoConversationMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.CreateVideoConversationMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.CreateVideoConversationMutation_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class DisablePushTokenMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.DisablePushTokenMutation_ResponseAdapter>;
          }
          export module DisablePushTokenMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.DisablePushTokenMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.DisablePushTokenMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.DisablePushTokenMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class SdkMobilePushTokenDisable extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.DisablePushTokenMutation.SdkMobilePushTokenDisable> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.DisablePushTokenMutation_ResponseAdapter.SdkMobilePushTokenDisable>;
              public static a: com.iadvize.conversation.sdk.adapter.DisablePushTokenMutation_ResponseAdapter.SdkMobilePushTokenDisable;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class DisablePushTokenMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.DisablePushTokenMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.DisablePushTokenMutation_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class EnablePushTokenMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.EnablePushTokenMutation_ResponseAdapter>;
          }
          export module EnablePushTokenMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.EnablePushTokenMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.EnablePushTokenMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.EnablePushTokenMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class SdkMobilePushTokenEnable extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.EnablePushTokenMutation.SdkMobilePushTokenEnable> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.EnablePushTokenMutation_ResponseAdapter.SdkMobilePushTokenEnable>;
              public static a: com.iadvize.conversation.sdk.adapter.EnablePushTokenMutation_ResponseAdapter.SdkMobilePushTokenEnable;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class EnablePushTokenMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.EnablePushTokenMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.EnablePushTokenMutation_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class GetChatboxTemplateQuery_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetChatboxTemplateQuery_ResponseAdapter>;
          }
          export module GetChatboxTemplateQuery_ResponseAdapter {
            export class ChatboxTemplate extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetChatboxTemplateQuery.ChatboxTemplate> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetChatboxTemplateQuery_ResponseAdapter.ChatboxTemplate>;
              public static a: com.iadvize.conversation.sdk.adapter.GetChatboxTemplateQuery_ResponseAdapter.ChatboxTemplate;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetChatboxTemplateQuery.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetChatboxTemplateQuery_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.GetChatboxTemplateQuery_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class TemplateAttributes extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetChatboxTemplateQuery.TemplateAttributes> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetChatboxTemplateQuery_ResponseAdapter.TemplateAttributes>;
              public static a: com.iadvize.conversation.sdk.adapter.GetChatboxTemplateQuery_ResponseAdapter.TemplateAttributes;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class GetChatboxTemplateQuery_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetChatboxTemplateQuery> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetChatboxTemplateQuery_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class GetConversationQuery_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetConversationQuery_ResponseAdapter>;
          }
          export module GetConversationQuery_ResponseAdapter {
            export class Conversation extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetConversationQuery.Conversation> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetConversationQuery_ResponseAdapter.Conversation>;
              public static a: com.iadvize.conversation.sdk.adapter.GetConversationQuery_ResponseAdapter.Conversation;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetConversationQuery.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetConversationQuery_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.GetConversationQuery_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Messages extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetConversationQuery.Messages> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetConversationQuery_ResponseAdapter.Messages>;
              public static a: com.iadvize.conversation.sdk.adapter.GetConversationQuery_ResponseAdapter.Messages;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class GetConversationQuery_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetConversationQuery> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetConversationQuery_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class GetGDPRConsentQuery_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetGDPRConsentQuery_ResponseAdapter>;
          }
          export module GetGDPRConsentQuery_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetGDPRConsentQuery.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetGDPRConsentQuery_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.GetGDPRConsentQuery_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class SdkVisitorConsent extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetGDPRConsentQuery.SdkVisitorConsent> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetGDPRConsentQuery_ResponseAdapter.SdkVisitorConsent>;
              public static a: com.iadvize.conversation.sdk.adapter.GetGDPRConsentQuery_ResponseAdapter.SdkVisitorConsent;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class GetProjectSettingsQuery_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetProjectSettingsQuery_ResponseAdapter>;
          }
          export module GetProjectSettingsQuery_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetProjectSettingsQuery.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetProjectSettingsQuery_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.GetProjectSettingsQuery_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Project extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetProjectSettingsQuery.Project> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetProjectSettingsQuery_ResponseAdapter.Project>;
              public static a: com.iadvize.conversation.sdk.adapter.GetProjectSettingsQuery_ResponseAdapter.Project;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Settings extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetProjectSettingsQuery.Settings> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetProjectSettingsQuery_ResponseAdapter.Settings>;
              public static a: com.iadvize.conversation.sdk.adapter.GetProjectSettingsQuery_ResponseAdapter.Settings;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class GetProjectSettingsQuery_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetProjectSettingsQuery> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetProjectSettingsQuery_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class GetUploadUrlsQuery_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetUploadUrlsQuery_ResponseAdapter>;
          }
          export module GetUploadUrlsQuery_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetUploadUrlsQuery.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetUploadUrlsQuery_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.GetUploadUrlsQuery_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class SdkUploadUrls extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetUploadUrlsQuery.SdkUploadUrls> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetUploadUrlsQuery_ResponseAdapter.SdkUploadUrls>;
              public static a: com.iadvize.conversation.sdk.adapter.GetUploadUrlsQuery_ResponseAdapter.SdkUploadUrls;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class GetUploadUrlsQuery_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetUploadUrlsQuery> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetUploadUrlsQuery_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class GetVideoConversationCredentialsMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetVideoConversationCredentialsMutation_ResponseAdapter>;
          }
          export module GetVideoConversationCredentialsMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetVideoConversationCredentialsMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.GetVideoConversationCredentialsMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorVideoToken extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.GetVideoConversationCredentialsMutation.VisitorVideoToken> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.GetVideoConversationCredentialsMutation_ResponseAdapter.VisitorVideoToken>;
              public static a: com.iadvize.conversation.sdk.adapter.GetVideoConversationCredentialsMutation_ResponseAdapter.VisitorVideoToken;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class OngoingConversationQuery_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.OngoingConversationQuery_ResponseAdapter>;
          }
          export module OngoingConversationQuery_ResponseAdapter {
            export class ConversationsVisitorMessages extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.OngoingConversationQuery.ConversationsVisitorMessages> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.OngoingConversationQuery_ResponseAdapter.ConversationsVisitorMessages>;
              public static a: com.iadvize.conversation.sdk.adapter.OngoingConversationQuery_ResponseAdapter.ConversationsVisitorMessages;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.OngoingConversationQuery.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.OngoingConversationQuery_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.OngoingConversationQuery_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class OngoingConversation extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.OngoingConversationQuery.OngoingConversation> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.OngoingConversationQuery_ResponseAdapter.OngoingConversation>;
              public static a: com.iadvize.conversation.sdk.adapter.OngoingConversationQuery_ResponseAdapter.OngoingConversation;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class RegisterConcludedTransactionMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.RegisterConcludedTransactionMutation_ResponseAdapter>;
          }
          export module RegisterConcludedTransactionMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.RegisterConcludedTransactionMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.RegisterConcludedTransactionMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class SdkTransactionConcludedRegister extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation.SdkTransactionConcludedRegister> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.RegisterConcludedTransactionMutation_ResponseAdapter.SdkTransactionConcludedRegister>;
              public static a: com.iadvize.conversation.sdk.adapter.RegisterConcludedTransactionMutation_ResponseAdapter.SdkTransactionConcludedRegister;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class RegisterConcludedTransactionMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.RegisterConcludedTransactionMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.RegisterConcludedTransactionMutation_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class RegisterPushTokenMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.RegisterPushTokenMutation_ResponseAdapter>;
          }
          export module RegisterPushTokenMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.RegisterPushTokenMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.RegisterPushTokenMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.RegisterPushTokenMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class SdkMobilePushTokenRegister extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.RegisterPushTokenMutation.SdkMobilePushTokenRegister> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.RegisterPushTokenMutation_ResponseAdapter.SdkMobilePushTokenRegister>;
              public static a: com.iadvize.conversation.sdk.adapter.RegisterPushTokenMutation_ResponseAdapter.SdkMobilePushTokenRegister;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class RegisterPushTokenMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.RegisterPushTokenMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.RegisterPushTokenMutation_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class SendGDRPConsentMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendGDRPConsentMutation_ResponseAdapter>;
          }
          export module SendGDRPConsentMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendGDRPConsentMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendGDRPConsentMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.SendGDRPConsentMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class SdkVisitorConsentSet extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendGDRPConsentMutation.SdkVisitorConsentSet> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendGDRPConsentMutation_ResponseAdapter.SdkVisitorConsentSet>;
              public static a: com.iadvize.conversation.sdk.adapter.SendGDRPConsentMutation_ResponseAdapter.SdkVisitorConsentSet;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class SendGDRPConsentMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendGDRPConsentMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendGDRPConsentMutation_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class SendVisitorCustomDataMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter>;
          }
          export module SendVisitorCustomDataMutation_ResponseAdapter {
            export class CustomDatum extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.CustomDatum> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.CustomDatum>;
              public static a: com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.CustomDatum;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class OnVisitorConversationCustomDataEntryBoolean extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryBoolean> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.OnVisitorConversationCustomDataEntryBoolean>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryBoolean;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class OnVisitorConversationCustomDataEntryFloat extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryFloat> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.OnVisitorConversationCustomDataEntryFloat>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryFloat;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class OnVisitorConversationCustomDataEntryInt extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryInt> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.OnVisitorConversationCustomDataEntryInt>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryInt;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class OnVisitorConversationCustomDataEntryString extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryString> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.OnVisitorConversationCustomDataEntryString>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.OnVisitorConversationCustomDataEntryString;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorConversationCustomDataSet extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation.VisitorConversationCustomDataSet> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.VisitorConversationCustomDataSet>;
              public static a: com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_ResponseAdapter.VisitorConversationCustomDataSet;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class SendVisitorCustomDataMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.SendVisitorCustomDataMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.SendVisitorCustomDataMutation_VariablesAdapter>;
            public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.SendVisitorCustomDataMutation): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class TriggerTargetingRuleMutation_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.TriggerTargetingRuleMutation_ResponseAdapter>;
          }
          export module TriggerTargetingRuleMutation_ResponseAdapter {
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.TriggerTargetingRuleMutation_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.TriggerTargetingRuleMutation_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class TargetingRule extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRule> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.TriggerTargetingRuleMutation_ResponseAdapter.TargetingRule>;
              public static a: com.iadvize.conversation.sdk.adapter.TriggerTargetingRuleMutation_ResponseAdapter.TargetingRule;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class TargetingRuleTrigger extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation.TargetingRuleTrigger> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.TriggerTargetingRuleMutation_ResponseAdapter.TargetingRuleTrigger>;
              public static a: com.iadvize.conversation.sdk.adapter.TriggerTargetingRuleMutation_ResponseAdapter.TargetingRuleTrigger;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class TriggerTargetingRuleMutation_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.TriggerTargetingRuleMutation> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.TriggerTargetingRuleMutation_VariablesAdapter>;
            public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.TriggerTargetingRuleMutation): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class VisitorMessagesFromTargetingRuleQuery_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter>;
          }
          export module VisitorMessagesFromTargetingRuleQuery_ResponseAdapter {
            export class ConversationsVisitorMessages extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ConversationsVisitorMessages> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter.ConversationsVisitorMessages>;
              public static a: com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter.ConversationsVisitorMessages;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Messages extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.Messages> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter.Messages>;
              public static a: com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter.Messages;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class ProactiveBotMessages extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery.ProactiveBotMessages> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter.ProactiveBotMessages>;
              public static a: com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_ResponseAdapter.ProactiveBotMessages;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class VisitorMessagesFromTargetingRuleQuery_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesFromTargetingRuleQuery_VariablesAdapter>;
            public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.VisitorMessagesFromTargetingRuleQuery): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module adapter {
          export class VisitorMessagesQuery_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesQuery_ResponseAdapter>;
          }
          export module VisitorMessagesQuery_ResponseAdapter {
            export class ConversationsVisitorMessages extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesQuery.ConversationsVisitorMessages> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesQuery_ResponseAdapter.ConversationsVisitorMessages>;
              public static a: com.iadvize.conversation.sdk.adapter.VisitorMessagesQuery_ResponseAdapter.ConversationsVisitorMessages;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Data extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesQuery.Data> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesQuery_ResponseAdapter.Data>;
              public static a: com.iadvize.conversation.sdk.adapter.VisitorMessagesQuery_ResponseAdapter.Data;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Messages extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesQuery.Messages> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesQuery_ResponseAdapter.Messages>;
              public static a: com.iadvize.conversation.sdk.adapter.VisitorMessagesQuery_ResponseAdapter.Messages;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module adapter {
          export class VisitorMessagesQuery_VariablesAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.VisitorMessagesQuery> {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.adapter.VisitorMessagesQuery_VariablesAdapter>;
            public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
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
        export module databinding {
          export class IadvizeConvuiComposeViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiComposeViewBinding>;
            public b: globalAndroid.widget.EditText;
            public c: androidx.constraintlayout.widget.ConstraintLayout;
            public d: globalAndroid.widget.ImageButton;
            public e: globalAndroid.widget.ImageButton;
            public f: globalAndroid.widget.ImageButton;
            public g: globalAndroid.widget.ImageButton;
            public getRoot(): globalAndroid.view.View;
            public static a(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeConvuiComposeViewBinding;
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
        export module databinding {
          export class IadvizeConvuiFeedbackViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiFeedbackViewBinding>;
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
        export module databinding {
          export class IadvizeConvuiGenericCardBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiGenericCardBinding>;
            public b: androidx.constraintlayout.widget.ConstraintLayout;
            public c: globalAndroid.widget.TextView;
            public d: com.google.android.material.imageview.ShapeableImageView;
            public e: globalAndroid.view.View;
            public f: globalAndroid.widget.LinearLayout;
            public g: globalAndroid.widget.TextView;
            public h: androidx.constraintlayout.widget.ConstraintLayout;
            public getRoot(): globalAndroid.view.View;
            public static a(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeConvuiGenericCardBinding;
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
        export module databinding {
          export class IadvizeConvuiGenericCardBundleItemBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiGenericCardBundleItemBinding>;
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
        export module databinding {
          export class IadvizeConvuiGenericCardLinkBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiGenericCardLinkBinding>;
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
        export module databinding {
          export class IadvizeConvuiGenericCardLinkDividerBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiGenericCardLinkDividerBinding>;
            public getRoot(): globalAndroid.view.View;
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
        export module databinding {
          export class IadvizeConvuiIntentPopupMenuBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiIntentPopupMenuBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageActionItemBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageActionItemBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageActionsViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageActionsViewBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageApplePayPaymentRequestBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageApplePayPaymentRequestBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageApplePayPaymentRequestItemBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageApplePayPaymentRequestItemBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageAvatarBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageAvatarBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageBundleBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageBundleBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageCardBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageCardBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageDateViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageDateViewBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageFileBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageFileBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageImageBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageImageBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageLinkSentBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageLinkSentBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageLoadPastConversationViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageLoadPastConversationViewBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessagePreviewLinkBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessagePreviewLinkBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageProductOfferBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageProductOfferBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageQuickReplyBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageQuickReplyBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageQuickReplyTextViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageQuickReplyTextViewBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageSenderNameViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageSenderNameViewBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageSnoozeBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageSnoozeBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageStateViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageStateViewBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageSystemBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageSystemBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageTextBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageTextBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageTransferBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageTransferBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageTranslatedBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageTranslatedBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageTypingIndicatorBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageTypingIndicatorBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageVideoEscalationBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageVideoEscalationBinding>;
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
        export module databinding {
          export class IadvizeConvuiMessageWaitingTimeBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiMessageWaitingTimeBinding>;
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
        export module databinding {
          export class IadvizeConvuiPreviewLinkBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiPreviewLinkBinding>;
            public b: androidx.constraintlayout.widget.ConstraintLayout;
            public c: androidx.constraintlayout.widget.Group;
            public d: globalAndroid.widget.TextView;
            public e: com.google.android.material.imageview.ShapeableImageView;
            public f: globalAndroid.widget.ProgressBar;
            public g: globalAndroid.widget.TextView;
            public getRoot(): globalAndroid.view.View;
            public static a(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeConvuiPreviewLinkBinding;
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
        export module databinding {
          export class IadvizeConvuiProductOfferBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiProductOfferBinding>;
            public b: androidx.constraintlayout.widget.ConstraintLayout;
            public c: globalAndroid.widget.TextView;
            public d: globalAndroid.widget.TextView;
            public e: com.google.android.material.imageview.ShapeableImageView;
            public f: globalAndroid.view.View;
            public g: globalAndroid.widget.LinearLayout;
            public h: globalAndroid.widget.TextView;
            public i: globalAndroid.widget.TextView;
            public j: globalAndroid.widget.TextView;
            public static a(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeConvuiProductOfferBinding;
            public getRoot(): globalAndroid.view.View;
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
        export module databinding {
          export class IadvizeConvuiProductOfferBundleItemBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiProductOfferBundleItemBinding>;
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
        export module databinding {
          export class IadvizeConvuiWaitingDotsViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeConvuiWaitingDotsViewBinding>;
            public b: globalAndroid.widget.ImageView;
            public c: globalAndroid.widget.ImageView;
            public d: globalAndroid.widget.ImageView;
            public e: globalAndroid.widget.LinearLayout;
            public getRoot(): globalAndroid.view.View;
            public static a(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeConvuiWaitingDotsViewBinding;
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
        export module databinding {
          export class IadvizeSdkAttachmentActivityBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkAttachmentActivityBinding>;
            public b: androidx.appcompat.widget.Toolbar;
            public getRoot(): globalAndroid.view.View;
            public a(): globalAndroid.widget.LinearLayout;
            public static a(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeSdkAttachmentActivityBinding;
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
        export module databinding {
          export class IadvizeSdkAttachmentFragmentBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkAttachmentFragmentBinding>;
            public b: com.ortiz.touchview.TouchImageView;
            public getRoot(): globalAndroid.view.View;
            public static a(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeSdkAttachmentFragmentBinding;
            public a(): com.ortiz.touchview.TouchImageView;
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
        export module databinding {
          export class IadvizeSdkChatboxActivityBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkChatboxActivityBinding>;
            public b: androidx.appcompat.widget.Toolbar;
            public getRoot(): globalAndroid.view.View;
            public a(): globalAndroid.widget.LinearLayout;
            public static a(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeSdkChatboxActivityBinding;
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
        export module databinding {
          export class IadvizeSdkChatboxErrorViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkChatboxErrorViewBinding>;
            public b: globalAndroid.widget.TextView;
            public c: globalAndroid.widget.TextView;
            public d: globalAndroid.widget.TextView;
            public getRoot(): globalAndroid.view.View;
            public static a(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeSdkChatboxErrorViewBinding;
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
        export module databinding {
          export class IadvizeSdkChatboxFragmentBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkChatboxFragmentBinding>;
            public b: com.iadvize.conversation.ui.views.ComposeView;
            public c: com.iadvize.conversation.sdk.feature.chatbox.ChatboxErrorView;
            public d: globalAndroid.widget.ProgressBar;
            public e: androidx.recyclerview.widget.RecyclerView;
            public getRoot(): globalAndroid.view.View;
            public a(): globalAndroid.widget.RelativeLayout;
            public static a(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeSdkChatboxFragmentBinding;
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
        export module databinding {
          export class IadvizeSdkDefaultFloatingButtonBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkDefaultFloatingButtonBinding>;
            public b: globalAndroid.view.View;
            public c: globalAndroid.view.View;
            public d: androidx.appcompat.widget.AppCompatImageView;
            public getRoot(): globalAndroid.view.View;
            public static a(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeSdkDefaultFloatingButtonBinding;
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
        export module databinding {
          export class IadvizeSdkThumbnailVideoViewBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkThumbnailVideoViewBinding>;
            public b: com.twilio.video.VideoTextureView;
            public c: com.twilio.video.VideoTextureView;
            public static a(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup): com.iadvize.conversation.sdk.databinding.IadvizeSdkThumbnailVideoViewBinding;
            public getRoot(): globalAndroid.view.View;
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
        export module databinding {
          export class IadvizeSdkVideoActivityBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkVideoActivityBinding>;
            public b: androidx.constraintlayout.widget.Group;
            public c: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public d: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public e: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public f: com.twilio.video.VideoTextureView;
            public g: androidx.appcompat.widget.AppCompatImageButton;
            public h: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public i: globalAndroid.widget.FrameLayout;
            public j: androidx.constraintlayout.widget.ConstraintLayout;
            public k: com.twilio.video.VideoTextureView;
            public l: androidx.constraintlayout.widget.ConstraintLayout;
            public m: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public n: androidx.constraintlayout.widget.ConstraintLayout;
            public o: globalAndroid.widget.ProgressBar;
            public p: androidx.appcompat.widget.AppCompatTextView;
            public getRoot(): globalAndroid.view.View;
            public static a(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeSdkVideoActivityBinding;
            public a(): androidx.constraintlayout.widget.ConstraintLayout;
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
        export module databinding {
          export class IadvizeSdkVideoLobbyActivityBinding {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.databinding.IadvizeSdkVideoLobbyActivityBinding>;
            public b: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public c: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public d: com.twilio.video.VideoView;
            public e: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public f: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public g: com.iadvize.conversation.sdk.feature.video.AlphaBackgroundOnPressedImageButton;
            public h: androidx.appcompat.widget.AppCompatTextView;
            public i: globalAndroid.widget.LinearLayout;
            public getRoot(): globalAndroid.view.View;
            public a(): androidx.constraintlayout.widget.ConstraintLayout;
            public static a(param0: globalAndroid.view.LayoutInflater): com.iadvize.conversation.sdk.databinding.IadvizeSdkVideoLobbyActivityBinding;
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
              public saveToPref$sdk_clientRelease(): void;
              public trackingApiValue$sdk_clientRelease(): string;
              public getOptionType$sdk_clientRelease(): number;
            }
            export module AuthenticationOption {
              export class Anonymous extends com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Anonymous>;
                public static INSTANCE: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Anonymous;
              }
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.Companion>;
                public static a(): com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption;
              }
              export class JWECallback {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback>;
                /**
                 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption$JWECallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onJWERetrieved(param0: string): void; onJWEFailure(param0: java.lang.Exception): void });
                public constructor();
                public onJWEFailure(param0: java.lang.Exception): void;
                public onJWERetrieved(param0: string): void;
              }
              export class JWEProvider {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWEProvider>;
                /**
                 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption$JWEProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { onJWERequested(param0: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption.JWECallback): void });
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
          export module authentication {
            export class JWT {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.JWT>;
              public a(): com.iadvize.conversation.sdk.feature.authentication.JWT.JWTPayload;
              public constructor(param0: string);
              public b(): string;
            }
            export module JWT {
              export class JWTHeader {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.JWT.JWTHeader>;
                public toString(): string;
                public equals(param0: any): boolean;
                public constructor();
                public constructor(param0: string);
                public hashCode(): number;
              }
              export class JWTPayload {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.authentication.JWT.JWTPayload>;
                public toString(): string;
                public b(): string;
                public a(): number;
                public equals(param0: any): boolean;
                public constructor();
                public c(): string;
                public constructor(param0: string, param1: string, param2: string, param3: string, param4: number, param5: number, param6: number);
                public hashCode(): number;
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
            export class ChatboxActivity extends com.iadvize.conversation.sdk.feature.chatbox.attachment.AttachmentActivity implements com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfigurationListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity>;
              public constructor();
              public a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity): void;
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public a(param0: com.iadvize.conversation.ui.models.MessageAttachment): void;
              public onDestroy(): void;
              public a(param0: com.iadvize.conversation.sdk.feature.chatbox.attachment.UploadFile): void;
              public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
            }
            export module ChatboxActivity {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.Companion>;
                public static a(param0: globalAndroid.content.Context): void;
              }
              export class DismissChatboxEvent {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxActivity.DismissChatboxEvent>;
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
            export class ChatboxConfiguration {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration>;
              public component11(): java.lang.Integer;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer);
              public getToolbarBackgroundColor(): java.lang.Integer;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer, param8: java.lang.Integer, param9: java.lang.Integer, param10: java.lang.Integer, param11: string, param12: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar);
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer);
              public setIncomingMessageStrokeColor(param0: java.lang.Integer): void;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer, param8: java.lang.Integer, param9: java.lang.Integer, param10: java.lang.Integer, param11: string, param12: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar, param13: string);
              public getGdprMessage(): string;
              public component8(): java.lang.Integer;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer);
              public component10(): java.lang.Integer;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer, param8: java.lang.Integer, param9: java.lang.Integer, param10: java.lang.Integer);
              public getToolbarMainColor(): java.lang.Integer;
              public setIncomingMessageBackgroundColor(param0: java.lang.Integer): void;
              public component7(): java.lang.Integer;
              public getOutgoingMessageTextColor(): java.lang.Integer;
              public getFontPath(): string;
              public setGdprMessage(param0: string): void;
              public component15(): string;
              public getOutgoingMessageStrokeColor(): java.lang.Integer;
              /** @deprecated */
              public setMainColor(param0: number): void;
              public setOutgoingMessageBackgroundColor(param0: java.lang.Integer): void;
              public copy(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer, param8: java.lang.Integer, param9: java.lang.Integer, param10: java.lang.Integer, param11: string, param12: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar, param13: string, param14: string): com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration;
              public constructor(param0: number);
              public setOutgoingMessageStrokeColor(param0: java.lang.Integer): void;
              public component14(): string;
              public component13(): com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar;
              public getIncomingMessageTextColor(): java.lang.Integer;
              public setToolbarMainColor(param0: java.lang.Integer): void;
              public equals(param0: any): boolean;
              public constructor(param0: number, param1: string);
              public getOutgoingMessageBackgroundColor(): java.lang.Integer;
              public component9(): java.lang.Integer;
              public hashCode(): number;
              /** @deprecated */
              public getMainColor(): number;
              public component5(): java.lang.Integer;
              public toString(): string;
              public setFontPath(param0: string): void;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer, param8: java.lang.Integer, param9: java.lang.Integer, param10: java.lang.Integer, param11: string);
              public setOutgoingMessageTextColor(param0: java.lang.Integer): void;
              public setToolbarBackgroundColor(param0: java.lang.Integer): void;
              public component12(): string;
              public component6(): java.lang.Integer;
              public getIncomingMessageStrokeColor(): java.lang.Integer;
              public setIncomingMessageAvatar(param0: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar): void;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer, param8: java.lang.Integer);
              public setToolbarTitle(param0: string): void;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer, param8: java.lang.Integer, param9: java.lang.Integer, param10: java.lang.Integer, param11: string, param12: com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar, param13: string, param14: string);
              public constructor();
              public component2(): string;
              public getIncomingMessageBackgroundColor(): java.lang.Integer;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer, param7: java.lang.Integer, param8: java.lang.Integer, param9: java.lang.Integer);
              public component3(): java.lang.Integer;
              public getAutomaticMessage(): string;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer, param4: java.lang.Integer, param5: java.lang.Integer, param6: java.lang.Integer);
              public getAccentColor(): java.lang.Integer;
              public constructor(param0: number, param1: string, param2: java.lang.Integer, param3: java.lang.Integer);
              public setAutomaticMessage(param0: string): void;
              public component1(): number;
              public getIncomingMessageAvatar(): com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar;
              public setAccentColor(param0: java.lang.Integer): void;
              public component4(): java.lang.Integer;
              public getToolbarTitle(): string;
              public setIncomingMessageTextColor(param0: java.lang.Integer): void;
              public constructor(param0: number, param1: string, param2: java.lang.Integer);
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
            export class ChatboxConfigurationListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfigurationListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfigurationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void });
              public constructor();
              public a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
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
              public constructor(implementation: { getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>; setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>): void; setupChatbox(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void; isChatboxPresented(): boolean; presentChatbox(param0: globalAndroid.content.Context): void; dismissChatbox(): void });
              public constructor();
              public isChatboxPresented(): boolean;
              public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>): void;
              public setupChatbox(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
              public presentChatbox(param0: globalAndroid.content.Context): void;
              public dismissChatbox(): void;
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
            export class ChatboxControllerImpl extends com.iadvize.conversation.sdk.feature.chatbox.ChatboxController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxControllerImpl>;
              public constructor();
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl): void;
              public c(): java.util.ArrayList<any>;
              public presentChatbox(param0: globalAndroid.content.Context): void;
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
              public a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
              public a(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController): void;
              public isChatboxPresented(): boolean;
              public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>): void;
              public a(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController;
              public b(): com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration;
              public setupChatbox(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration): void;
              public getListeners(): java.util.List<any>;
              public e(): com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl;
              public a(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl): void;
              public setListeners(param0: java.util.List<any>): void;
              public d(): com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl;
              public dismissChatbox(): void;
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
            export class ChatboxFragment implements com.iadvize.conversation.sdk.feature.chatbox.ChatboxFragmentCallback, com.iadvize.conversation.ui.viewholders.MessageListeners, com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener, com.iadvize.conversation.ui.views.ComposeView.TextChangedListener, com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener, com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener, com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxFragment>;
              public onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
              public onMessageSideActionClicked(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.MessageSideAction): void;
              public a(param0: java.lang.Throwable): void;
              public onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
              public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
              public a(param0: com.iadvize.conversation.sdk.IAdvizeSDK.RestApiException): void;
              public onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: string): void;
              public a(param0: boolean): void;
              public onImageButtonClicked(): void;
              public onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string): void;
              public c(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public onTextChanged(param0: string): void;
              public onAttach(param0: globalAndroid.content.Context): void;
              public onDestroyView(): void;
              public onMessageHighlightClicked(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<com.iadvize.conversation.ui.models.Highlight.Actions.Action>): void;
              public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
              public c(param0: java.lang.Throwable): void;
              public onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
              public onSendButtonClicked(param0: string): void;
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public b(): void;
              public onVideoEscalationClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string, param2: boolean): void;
              public constructor();
              public onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
              public a(): void;
              public onFileButtonClicked(): void;
              public onStop(): void;
              public onLoadPastConversationClicked(param0: com.iadvize.conversation.ui.models.Message): void;
              public onTextFocusChanged(param0: boolean): void;
              public a(param0: string): void;
              public onCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.Card, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
              public b(param0: java.lang.Throwable): void;
              public onMessageHighlightClicked(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<any>): void;
              public d(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public b(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public a(param0: boolean, param1: boolean): void;
              public onMessageLinkClicked(param0: com.iadvize.conversation.ui.models.Message, param1: globalAndroid.net.Uri): void;
              public onDetach(): void;
              public a(param0: com.iadvize.conversation.sdk.feature.chatbox.attachment.UploadFile): void;
            }
            export module ChatboxFragment {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxFragment.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxFragment.WhenMappings>;
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
            export class ChatboxFragmentCallback {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxFragmentCallback>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.chatbox.ChatboxFragmentCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { a(param0: boolean, param1: boolean): void; c(param0: java.lang.Throwable): void; b(param0: java.lang.Throwable): void; a(param0: java.lang.Throwable): void; a(param0: com.iadvize.conversation.sdk.IAdvizeSDK.RestApiException): void; a(param0: string): void; a(): void; b(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void; a(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void; c(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void; d(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void; a(param0: boolean): void; b(): void });
              public constructor();
              public a(): void;
              public a(param0: java.lang.Throwable): void;
              public a(param0: com.iadvize.conversation.sdk.IAdvizeSDK.RestApiException): void;
              public a(param0: string): void;
              public a(param0: boolean): void;
              public b(param0: java.lang.Throwable): void;
              public c(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public d(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public b(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public a(param0: boolean, param1: boolean): void;
              public c(param0: java.lang.Throwable): void;
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public b(): void;
            }
            export module ChatboxFragmentCallback {
              export class DefaultImpls {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxFragmentCallback.DefaultImpls>;
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
            export class ChatboxListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.chatbox.ChatboxListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onChatboxOpened(): void; onChatboxClosed(): void });
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
            export abstract class a {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.a>;
              public static a(param0: string): any;
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
              export abstract class AttachmentActivity {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.AttachmentActivity>;
                public a(param0: com.iadvize.conversation.ui.models.MessageAttachment): void;
                public a(param0: com.iadvize.conversation.sdk.feature.chatbox.attachment.UploadFile): void;
                public b(param0: boolean): void;
                public constructor();
                public onDestroy(): void;
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
              export class AttachmentFileDownloader {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.AttachmentFileDownloader>;
                public a(param0: globalAndroid.content.Context, param1: number): void;
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
              export class AttachmentFileUploader {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.AttachmentFileUploader>;
                public a(param0: string, param1: string, param2: androidNative.Array<number>, param3: any): any;
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
              export class AttachmentUrls {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.AttachmentUrls>;
                public a(): string;
                public toString(): string;
                public b(): string;
                public constructor(param0: string, param1: string);
                public equals(param0: any): boolean;
                public hashCode(): number;
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
                public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
                public constructor();
                public onCreate(param0: globalAndroid.os.Bundle): void;
                public static a(param0: com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity): void;
                public onDestroy(): void;
              }
              export module ImageAttachmentViewerActivity {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerActivity.Companion>;
                  public static a(param0: globalAndroid.app.Activity, param1: com.iadvize.conversation.ui.models.MessageAttachment.Image): void;
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
          export module chatbox {
            export module attachment {
              export class ImageAttachmentViewerFragment {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerFragment>;
                public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
                public constructor();
                public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
              }
              export module ImageAttachmentViewerFragment {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.ImageAttachmentViewerFragment.Companion>;
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
          export module chatbox {
            export module attachment {
              export class UploadFile {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.chatbox.attachment.UploadFile>;
                public constructor(param0: globalAndroid.net.Uri, param1: string, param2: string, param3: string, param4: number);
                public a(): string;
                public toString(): string;
                public b(): string;
                public c(): number;
                public equals(param0: any): boolean;
                public d(): globalAndroid.net.Uri;
                public hashCode(): number;
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
            export class Conversation {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.Conversation>;
              public constructor();
              public d(): void;
              public a(param0: string): com.iadvize.conversation.sdk.feature.conversation.SdkMessage;
              public a(param0: java.lang.Class<any>): boolean;
              public a(): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.conversation.Conversation, param1: java.util.List<any>): void;
              public b(): java.util.List<any>;
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public a(param0: java.util.List<any>): void;
              public c(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage;
              public e(): void;
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
              public static CHAT: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public static VIDEO: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.conversation.ConversationChannel;
              public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel>;
              public toApiChannel$sdk_clientRelease(): com.iadvize.conversation.sdk.type.Channel;
            }
            export module ConversationChannel {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel.Companion>;
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
              public constructor(implementation: { getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>; ongoingConversation(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation });
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
            export class ConversationControllerImpl implements com.iadvize.conversation.sdk.feature.conversation.ConversationController, com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.XmppConnectionController.Listener, com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.XmppConversationController.XmppListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl>;
              public n(): boolean;
              public m(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonControllerImpl;
              public a(param0: java.lang.Throwable): void;
              public b(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
              public a(param0: boolean): void;
              public a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxControllerImpl): void;
              public b(param0: any): any;
              public d(param0: string): void;
              public h(): void;
              public b(param0: string, param1: boolean): void;
              public a(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonControllerImpl): void;
              public b(): void;
              public e(): void;
              public a(param0: com.iadvize.conversation.sdk.Environment): void;
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
              public g(): void;
              public a(): void;
              public static b(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl): boolean;
              public a(param0: com.iadvize.conversation.ui.models.Message): void;
              public q(): com.iadvize.conversation.sdk.feature.conversation.PaginationInfo;
              public a(param0: com.iadvize.conversation.sdk.feature.gdpr.GDPROption): void;
              public b(param0: java.lang.Throwable): void;
              public a(param0: string, param1: boolean): void;
              public a(param0: org.jivesoftware.smackx.chatstates.ChatState): void;
              public a(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
              public static i(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl): void;
              public b(param0: boolean): void;
              public ongoingConversation(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
              public l(): com.iadvize.conversation.sdk.feature.conversation.Conversation;
              public static a(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl, param1: com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Visitor.UnsentAttachment): void;
              public b(param0: string): void;
              public c(): void;
              public a(param0: boolean, param1: boolean, param2: any): any;
              public b(param0: org.jivesoftware.smackx.chatstates.ChatState): void;
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>;
              public p(): com.iadvize.conversation.sdk.feature.conversation.OngoingConversation;
              public a(param0: com.iadvize.conversation.sdk.IAdvizeSDK.InvalidVisitorSubscription): void;
              public f(param0: string): void;
              public c(param0: java.lang.Throwable): void;
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl, param1: string, param2: string): void;
              public d(): void;
              public k(): java.util.ArrayList<any>;
              public s(): void;
              public j(): void;
              public constructor(param0: com.iadvize.conversation.sdk.feature.graphql.GraphQLApi, param1: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionApi, param2: com.iadvize.conversation.sdk.Environment);
              public static c(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl): boolean;
              public a(param0: string): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl, param1: java.util.List<any>, param2: any): any;
              public c(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
              public e(param0: string): void;
              public o(): com.iadvize.conversation.sdk.feature.gdpr.GDPROption;
              public getListeners(): java.util.List<any>;
              public a(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl): void;
              public i(): void;
              public a(param0: globalAndroid.content.Context, param1: com.iadvize.conversation.sdk.feature.chatbox.attachment.UploadFile): void;
            }
            export module ConversationControllerImpl {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl.Companion>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl.WhenMappings>;
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
            export class ConversationListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.ConversationListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.ConversationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void; onNewMessageReceived(param0: string): void; handleClickedUrl(param0: globalAndroid.net.Uri): boolean });
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
            export class LocalMessageProvider {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.LocalMessageProvider>;
              public d(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Automatic;
              public e(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.CSAT;
              public c(param0: com.iadvize.conversation.ui.models.Message): boolean;
              public a(param0: com.iadvize.conversation.ui.models.Message): boolean;
              public i(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.Outro;
              public g(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.Intro;
              public c(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.GDPR.Question;
              public a(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.GDPR.ConsentKO;
              public a(param0: string): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationAccepted;
              public b(param0: com.iadvize.conversation.ui.models.Message): boolean;
              public c(param0: string): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationDisabled;
              public f(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.Comment;
              public d(param0: com.iadvize.conversation.ui.models.Message): boolean;
              public static a(param0: globalAndroid.content.Context): void;
              public b(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.GDPR.ConsentOK;
              public h(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.NPS;
              public b(param0: string): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationEnded;
              public d(param0: string): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationEnabled;
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
            export abstract class MessageSender {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.MessageSender>;
            }
            export module MessageSender {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.MessageSender.Companion>;
              }
              export class Operator extends com.iadvize.conversation.ui.models.Sender {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.MessageSender.Operator>;
                public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
                public constructor(param0: string);
              }
              export class ProactiveBot extends com.iadvize.conversation.sdk.feature.conversation.MessageSender.Operator {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.MessageSender.ProactiveBot>;
                public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
                public constructor(param0: string);
              }
              export class System extends com.iadvize.conversation.ui.models.Sender {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.MessageSender.System>;
                public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
                public constructor();
              }
              export class Visitor extends com.iadvize.conversation.ui.models.Sender {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.MessageSender.Visitor>;
                public constructor(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.SenderAvatar, param3: com.iadvize.conversation.ui.models.SenderAlignment);
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
            export class PaginatedPastConversation {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.PaginatedPastConversation>;
              public a(): java.util.List<any>;
              public b(): com.iadvize.conversation.sdk.feature.conversation.PaginationInfo;
              public constructor(param0: java.util.List<any>, param1: com.iadvize.conversation.sdk.feature.conversation.PaginationInfo);
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
            export class PaginationInfo {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.PaginationInfo>;
              public constructor(param0: string, param1: boolean);
              public b(): boolean;
              public a(): string;
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
            export abstract class SdkMessage {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage>;
              public e(): com.iadvize.conversation.ui.models.Sender;
              public a(param0: com.iadvize.conversation.ui.models.MessageKind): void;
              public a(param0: java.util.Date): void;
              public d(): com.iadvize.conversation.ui.models.MessageState;
              public f(): java.util.Date;
              public a(param0: string): void;
              public a(param0: com.iadvize.conversation.ui.models.Sender): void;
              public c(): com.iadvize.conversation.ui.models.MessageKind;
              public b(): string;
              public a(param0: com.iadvize.conversation.ui.models.MessageState): void;
              public a(): boolean;
            }
            export module SdkMessage {
              export class Api extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Api>;
                public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind);
              }
              export abstract class Operator {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator>;
              }
              export module Operator {
                export class Automatic extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Automatic>;
                  public constructor(param0: string, param1: java.util.Date);
                }
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Companion>;
                }
                export abstract class Escalation {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation>;
                }
                export module Escalation {
                  export class InvitationAccepted extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationAccepted>;
                    public g(): string;
                    public constructor(param0: string, param1: string);
                  }
                  export class InvitationDisabled extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationDisabled>;
                    public g(): string;
                    public constructor(param0: string, param1: string);
                  }
                  export class InvitationEnabled extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationEnabled>;
                    public g(): androidNative.Array<string>;
                    public constructor(param0: string, param1: string, param2: androidNative.Array<string>);
                    public i(): string;
                    public h(): string;
                  }
                  export class InvitationEnded extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationEnded>;
                    public g(): string;
                    public constructor(param0: string, param1: string);
                  }
                }
                export abstract class GDPR {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.GDPR>;
                }
                export module GDPR {
                  export class ConsentKO extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.GDPR.ConsentKO>;
                    public constructor(param0: string, param1: java.util.Date);
                  }
                  export class ConsentOK extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.GDPR.ConsentOK>;
                    public constructor(param0: string, param1: java.util.Date);
                  }
                  export class Question extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.GDPR.Question>;
                    public constructor(param0: string, param1: androidNative.Array<string>);
                    public g(): androidNative.Array<string>;
                    public h(): string;
                  }
                }
                export abstract class Satisfaction {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction>;
                }
                export module Satisfaction {
                  export class CSAT extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.CSAT>;
                    public constructor(param0: string, param1: androidNative.Array<string>);
                    public g(): androidNative.Array<string>;
                    public h(): string;
                  }
                  export class Comment extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.Comment>;
                    public constructor(param0: string);
                  }
                  export class Intro extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.Intro>;
                    public constructor(param0: string);
                  }
                  export class NPS extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.NPS>;
                    public constructor(param0: string, param1: androidNative.Array<string>);
                    public g(): androidNative.Array<string>;
                    public h(): string;
                  }
                  export class Outro extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Satisfaction.Outro>;
                    public constructor(param0: string);
                  }
                }
                export class TypingIndicator extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.TypingIndicator>;
                  public constructor();
                }
              }
              export abstract class Visitor {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Visitor>;
              }
              export module Visitor {
                export class Attachment extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Visitor.Attachment>;
                  public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment);
                }
                export class Text extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Visitor.Text>;
                  public constructor(param0: string, param1: com.iadvize.conversation.ui.models.MessageState, param2: java.util.Date);
                }
                export class UnsentAttachment extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Visitor.UnsentAttachment>;
                  public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage, param1: androidNative.Array<number>);
                  public g(): androidNative.Array<number>;
                }
              }
              export class Xmpp extends com.iadvize.conversation.sdk.feature.conversation.SdkMessage {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Xmpp>;
                public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind);
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
              export module connection {
                export class ConnectionStatusObserver {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.ConnectionStatusObserver>;
                  public static a(param0: globalAndroid.content.Context): void;
                  public static c(): boolean;
                  public static d(): boolean;
                  public static b(): void;
                }
                export module ConnectionStatusObserver {
                  export class Status {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.ConnectionStatusObserver.Status>;
                    public static a: com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.ConnectionStatusObserver.Status;
                    public static b: com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.ConnectionStatusObserver.Status;
                    public static c: com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.ConnectionStatusObserver.Status;
                    public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.ConnectionStatusObserver.Status>;
                    public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.ConnectionStatusObserver.Status;
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
          export module conversation {
            export module xmpp {
              export module connection {
                export class NetworkConnectionStateUpdateEvent {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.NetworkConnectionStateUpdateEvent>;
                  public constructor();
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
              export module connection {
                export class NetworkUpdateReceiver {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.NetworkUpdateReceiver>;
                  public constructor();
                  public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
                }
                export module NetworkUpdateReceiver {
                  export class Companion {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.NetworkUpdateReceiver.Companion>;
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
          export module conversation {
            export module xmpp {
              export module connection {
                export class XmppConnectionController {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.XmppConnectionController>;
                  public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.XmppConnectionController.Listener, param1: com.iadvize.conversation.sdk.Environment);
                  public b(): boolean;
                  public authenticated(param0: org.jivesoftware.smack.XMPPConnection, param1: boolean): void;
                  public connectionClosed(): void;
                  public connectionClosedOnError(param0: java.lang.Exception): void;
                  public connected(param0: org.jivesoftware.smack.XMPPConnection): void;
                  public a(): void;
                  public reconnectingIn(param0: number): void;
                  public reconnectionFailed(param0: java.lang.Exception): void;
                  public a(param0: org.jxmpp.jid.Jid, param1: string): void;
                  public c(): boolean;
                }
                export module XmppConnectionController {
                  export class Companion {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.XmppConnectionController.Companion>;
                  }
                  export class Listener {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.XmppConnectionController.Listener>;
                    /**
                     * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.XmppConnectionController$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { b(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void; a(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void; a(param0: java.lang.Throwable): void; b(param0: java.lang.Throwable): void; c(): void; c(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void; c(param0: java.lang.Throwable): void });
                    public constructor();
                    public a(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
                    public b(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
                    public b(param0: java.lang.Throwable): void;
                    public c(): void;
                    public c(param0: org.jivesoftware.smack.tcp.XMPPTCPConnection): void;
                    public c(param0: java.lang.Throwable): void;
                    public a(param0: java.lang.Throwable): void;
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
          export module conversation {
            export module xmpp {
              export module connection {
                export module event {
                  export class ConnectionStatusUpdateEvent {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.event.ConnectionStatusUpdateEvent>;
                    public equals(param0: any): boolean;
                    public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.ConnectionStatusObserver.Status);
                    public hashCode(): number;
                    public toString(): string;
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
          export module conversation {
            export module xmpp {
              export module connection {
                export module event {
                  export class XmppConnectionStateUpdateEvent {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.connection.event.XmppConnectionStateUpdateEvent>;
                    public equals(param0: any): boolean;
                    public hashCode(): number;
                    public a(): boolean;
                    public toString(): string;
                    public b(): boolean;
                    public constructor(param0: boolean, param1: boolean);
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export class XmppConversationController implements com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtensionListener.MessageReceivedListener, com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQListener.SubscriptionsReceivedListener, com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.DirectMessageListener.DirectMessageReceivedListener {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.XmppConversationController>;
                  public c(): void;
                  public a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtension): void;
                  public constructor(param0: org.jivesoftware.smack.XMPPConnection, param1: com.iadvize.conversation.sdk.feature.authentication.JWT, param2: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.XmppConversationController.XmppListener);
                  public a(param0: string, param1: string): void;
                  public a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQ): void;
                  public a(param0: java.util.List<any>): void;
                  public a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.UnsubscribeExtension, param1: string): void;
                  public a(): void;
                  public a(param0: string, param1: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension): void;
                  public d(): void;
                  public b(): string;
                  public a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SubscribeExtension, param1: string): void;
                }
                export module XmppConversationController {
                  export class XmppListener {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.XmppConversationController.XmppListener>;
                    /**
                     * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.XmppConversationController$XmppListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                     */
                    public constructor(implementation: { b(): void; d(): void; a(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void; a(param0: org.jivesoftware.smackx.chatstates.ChatState): void; a(param0: boolean): void; a(param0: com.iadvize.conversation.sdk.IAdvizeSDK.InvalidVisitorSubscription): void; a(): void; a(param0: string): void; b(param0: string): void; e(): void });
                    public constructor();
                    public a(param0: com.iadvize.conversation.sdk.feature.conversation.SdkMessage): void;
                    public a(param0: com.iadvize.conversation.sdk.IAdvizeSDK.InvalidVisitorSubscription): void;
                    public a(param0: boolean): void;
                    public a(param0: string): void;
                    public e(): void;
                    public d(): void;
                    public a(): void;
                    public b(param0: string): void;
                    public a(param0: org.jivesoftware.smackx.chatstates.ChatState): void;
                    public b(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export class DirectMessageListener {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.DirectMessageListener>;
                    public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.DirectMessageListener.DirectMessageReceivedListener);
                    public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
                  }
                  export module DirectMessageListener {
                    export class DirectMessageReceivedListener {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.DirectMessageListener.DirectMessageReceivedListener>;
                      /**
                       * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.DirectMessageListener$DirectMessageReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                       */
                      public constructor(implementation: { a(): void });
                      public constructor();
                      public a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export class MucSubMessageExtension {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtension>;
                    public getElementName(): string;
                    public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                    public a(): string;
                    public getExtensions(): java.util.List<any>;
                    public toString(): string;
                    public getNamespace(): string;
                    public b(): string;
                    public constructor(param0: java.util.Map<any, any>, param1: java.util.List<any>);
                  }
                  export module MucSubMessageExtension {
                    export class Companion {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export class MucSubMessageExtensionListener {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtensionListener>;
                    public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtensionListener.MessageReceivedListener);
                    public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
                  }
                  export module MucSubMessageExtensionListener {
                    export class MessageReceivedListener {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtensionListener.MessageReceivedListener>;
                      /**
                       * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtensionListener$MessageReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                       */
                      public constructor(implementation: { a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtension): void; a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SubscribeExtension, param1: string): void; a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.UnsubscribeExtension, param1: string): void });
                      public constructor();
                      public a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.UnsubscribeExtension, param1: string): void;
                      public a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SubscribeExtension, param1: string): void;
                      public a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtension): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export class MucSubMessageExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtension> {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtensionProvider>;
                    public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                    public constructor();
                  }
                  export module MucSubMessageExtensionProvider {
                    export class Companion {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.MucSubMessageExtensionProvider.Companion>;
                      public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ActionExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionExtension>;
                      /**
                       * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                       */
                      public constructor(implementation: {});
                      public constructor();
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ActionsExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionsExtension>;
                      public constructor(param0: java.util.List<any>);
                      public getElementName(): string;
                      public a(): java.util.List<any>;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module ActionsExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionsExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ActionsExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionsExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionsExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module ActionsExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionsExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ArchivedExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ArchivedExtension>;
                      public getElementName(): string;
                      public constructor(param0: string, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module ArchivedExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ArchivedExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ArchivedExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ArchivedExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ArchivedExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module ArchivedExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ArchivedExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class AutomaticMessageEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.AutomaticMessageEventExtension>;
                      public a(): com.iadvize.conversation.ui.models.MessageKind.System;
                      public constructor(param0: string, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module AutomaticMessageEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.AutomaticMessageEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class AutomaticMessageEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.AutomaticMessageEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.AutomaticMessageEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module AutomaticMessageEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.AutomaticMessageEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardBundleSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardBundleSentEventExtension>;
                      public constructor(param0: string, param1: java.util.List<any>, param2: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
                      public a(): com.iadvize.conversation.ui.models.MessageKind;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module CardBundleSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardBundleSentEventExtension.Companion>;
                      }
                      export class WhenMappings {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardBundleSentEventExtension.WhenMappings>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardBundleSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardBundleSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardBundleSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module CardBundleSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardBundleSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardExtension>;
                      public constructor(param0: string, param1: string, param2: string, param3: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardImageExtension, param4: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardVideoExtension, param5: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionsExtension);
                      public a(): com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionsExtension;
                      public b(): com.iadvize.conversation.ui.models.MessageKind.Card;
                      public getElementName(): string;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module CardExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module CardExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardImageExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardImageExtension>;
                      public a(): string;
                      public getElementName(): string;
                      public b(): string;
                      public constructor(param0: string, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module CardImageExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardImageExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardImageExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardImageExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardImageExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module CardImageExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardImageExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardSentEventExtension>;
                      public a(): com.iadvize.conversation.ui.models.MessageKind;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardExtension);
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module CardSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module CardSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardVideoExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardVideoExtension>;
                      public getElementName(): string;
                      public constructor(param0: string, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module CardVideoExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardVideoExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class CardVideoExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardVideoExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardVideoExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module CardVideoExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardVideoExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ChoicesExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ChoicesExtension>;
                      public getElementName(): string;
                      public a(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public constructor(param0: java.util.ArrayList<any>);
                      public getNamespace(): string;
                    }
                    export module ChoicesExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ChoicesExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ChoicesExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ChoicesExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ChoicesExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module ChoicesExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ChoicesExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ConversationClosedEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ConversationClosedEventExtension>;
                      public a(): boolean;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public constructor(param0: boolean);
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module ConversationClosedEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ConversationClosedEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ConversationClosedEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ConversationClosedEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ConversationClosedEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module ConversationClosedEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ConversationClosedEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class EscalationAcceptedEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationAcceptedEventExtension>;
                      public a(): string;
                      public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module EscalationAcceptedEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationAcceptedEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class EscalationAcceptedEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationAcceptedEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationAcceptedEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module EscalationAcceptedEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationAcceptedEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class EscalationEndedEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationEndedEventExtension>;
                      public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string, param2: string);
                      public a(): string;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module EscalationEndedEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationEndedEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class EscalationEndedEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationEndedEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationEndedEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module EscalationEndedEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationEndedEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class EscalationInvitationSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationInvitationSentEventExtension>;
                      public a(): com.iadvize.conversation.sdk.feature.conversation.SdkMessage.Operator.Escalation.InvitationEnabled;
                      public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module EscalationInvitationSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationInvitationSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class EscalationInvitationSentEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationInvitationSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationInvitationSentEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module EscalationInvitationSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EscalationInvitationSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export abstract class EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension>;
                      public getElementName(): string;
                      public constructor();
                    }
                    export module EventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class FileBundleSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileBundleSentEventExtension>;
                      public constructor(param0: java.util.List<any>);
                      public a(): com.iadvize.conversation.ui.models.MessageKind;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module FileBundleSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileBundleSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class FileBundleSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileBundleSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileBundleSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module FileBundleSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileBundleSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class FileExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
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
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension.Companion>;
                      }
                      export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension> {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension.Creator>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class FileExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module FileExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class FileSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileSentEventExtension>;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileExtension);
                      public a(): com.iadvize.conversation.ui.models.MessageKind;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module FileSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class FileSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module FileSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.FileSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class HungUpEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.HungUpEventExtension>;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module HungUpEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.HungUpEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class HungUpEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.HungUpEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.HungUpEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module HungUpEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.HungUpEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class LinkActionExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkActionExtension>;
                      public a(): string;
                      public getElementName(): string;
                      public b(): string;
                      public constructor(param0: string, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module LinkActionExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkActionExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class LinkActionExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkActionExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkActionExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module LinkActionExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkActionExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class LinkExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkExtension>;
                      public getElementName(): string;
                      public constructor(param0: string, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public a(): com.iadvize.conversation.ui.models.MessageKind.LinkSent;
                      public getNamespace(): string;
                    }
                    export module LinkExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class LinkExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module LinkExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class LinkSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkSentEventExtension>;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkExtension);
                      public a(): com.iadvize.conversation.ui.models.MessageKind.LinkSent;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module LinkSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class LinkSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module LinkSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.LinkSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class OfferExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferExtension>;
                      public constructor(param0: string, param1: string, param2: string, param3: string);
                      public getElementName(): string;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public a(): com.iadvize.conversation.ui.models.MessageKind.Card;
                      public getNamespace(): string;
                    }
                    export module OfferExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class OfferExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module OfferExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class OfferSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferSentEventExtension>;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferExtension);
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public a(): com.iadvize.conversation.ui.models.MessageKind.Card;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module OfferSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class OfferSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module OfferSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.OfferSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class PickedUpEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.PickedUpEventExtension>;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module PickedUpEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.PickedUpEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class PickedUpEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.PickedUpEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.PickedUpEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module PickedUpEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.PickedUpEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ProductOfferBundleSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferBundleSentEventExtension>;
                      public constructor(param0: java.util.List<any>);
                      public a(): com.iadvize.conversation.ui.models.MessageKind;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module ProductOfferBundleSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferBundleSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ProductOfferBundleSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferBundleSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferBundleSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module ProductOfferBundleSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferBundleSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ProductOfferExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferExtension>;
                      public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.CardImageExtension, param6: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionsExtension);
                      public getElementName(): string;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public a(): com.iadvize.conversation.ui.models.MessageKind.ProductOffer;
                      public getNamespace(): string;
                    }
                    export module ProductOfferExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ProductOfferExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module ProductOfferExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ProductOfferSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferSentEventExtension>;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferExtension);
                      public a(): com.iadvize.conversation.ui.models.MessageKind;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module ProductOfferSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ProductOfferSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module ProductOfferSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProductOfferSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension>;
                      /**
                       * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                       */
                      public constructor(implementation: {});
                      public constructor();
                    }
                    export module ProtocolExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class QuickRepliesExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ProtocolExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesExtension>;
                      public constructor(param0: string, param1: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ChoicesExtension);
                      public getElementName(): string;
                      public a(): com.iadvize.conversation.ui.models.MessageKind.QuickReply;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module QuickRepliesExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class QuickRepliesExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module QuickRepliesExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class QuickRepliesSentEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesSentEventExtension>;
                      public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesExtension);
                      public a(): com.iadvize.conversation.ui.models.MessageKind;
                      public getExtensions(): java.util.List<any>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module QuickRepliesSentEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesSentEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class QuickRepliesSentEventExtensionProvider extends org.jivesoftware.smack.provider.EmbeddedExtensionProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesSentEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesSentEventExtensionProvider>;
                      public createReturnExtension(param0: string, param1: string, param2: java.util.Map<any, any>, param3: java.util.List<any>): org.jivesoftware.smack.packet.ExtensionElement;
                      public constructor();
                    }
                    export module QuickRepliesSentEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.QuickRepliesSentEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class SelectActionExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.ActionExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SelectActionExtension>;
                      public a(): string;
                      public getElementName(): string;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public constructor(param0: string);
                      public getNamespace(): string;
                    }
                    export module SelectActionExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SelectActionExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class SelectActionExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SelectActionExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SelectActionExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module SelectActionExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SelectActionExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class SubscribeExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SubscribeExtension>;
                      public getElementName(): string;
                      public b(): string;
                      public constructor(param0: string, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module SubscribeExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SubscribeExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class SubscribeExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SubscribeExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SubscribeExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module SubscribeExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.SubscribeExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class UnsubscribeExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.UnsubscribeExtension>;
                      public getElementName(): string;
                      public b(): string;
                      public constructor(param0: string, param1: string);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                    }
                    export module UnsubscribeExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.UnsubscribeExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class UnsubscribeExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.UnsubscribeExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.UnsubscribeExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module UnsubscribeExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.UnsubscribeExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class VisitorBlockedEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.VisitorBlockedEventExtension>;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module VisitorBlockedEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.VisitorBlockedEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class VisitorBlockedEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.VisitorBlockedEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.VisitorBlockedEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module VisitorBlockedEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.VisitorBlockedEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class WaitingTimeEstimatedEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeEstimatedEventExtension>;
                      public a(): com.iadvize.conversation.ui.models.MessageKind.WaitingTime;
                      public constructor(param0: string, param1: com.iadvize.conversation.ui.models.WaitingTimeReplyType, param2: com.iadvize.conversation.ui.models.WaitingTimeEstimationType);
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module WaitingTimeEstimatedEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeEstimatedEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class WaitingTimeEstimatedEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeEstimatedEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeEstimatedEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module WaitingTimeEstimatedEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeEstimatedEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class WaitingTimeExceededEventExtension extends com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.EventExtension {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeExceededEventExtension>;
                      public a(): com.iadvize.conversation.ui.models.MessageKind.WaitingTime;
                      public toXML(param0: org.jivesoftware.smack.packet.XmlEnvironment): string;
                      public constructor(param0: string, param1: com.iadvize.conversation.ui.models.WaitingTimeReplyType);
                      public getNamespace(): string;
                      public constructor();
                    }
                    export module WaitingTimeExceededEventExtension {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeExceededEventExtension.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module message {
                  export module extension {
                    export class WaitingTimeExceededEventExtensionProvider extends org.jivesoftware.smack.provider.ExtensionElementProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeExceededEventExtension> {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeExceededEventExtensionProvider>;
                      public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.Element;
                      public constructor();
                    }
                    export module WaitingTimeExceededEventExtensionProvider {
                      export class Companion {
                        public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.message.extension.WaitingTimeExceededEventExtensionProvider.Companion>;
                        public static a(): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module subscription {
                  export class Event {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.Event>;
                    public equals(param0: any): boolean;
                    public constructor(param0: string);
                    public hashCode(): number;
                    public a(): string;
                    public toString(): string;
                  }
                  export module Event {
                    export class Companion {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.Event.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module subscription {
                  export class Subscription {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.Subscription>;
                    public d(): string;
                    public equals(param0: any): boolean;
                    public c(): string;
                    public hashCode(): number;
                    public a(): boolean;
                    public b(): java.util.List<any>;
                    public toString(): string;
                    public constructor(param0: string, param1: string, param2: java.util.ArrayList<any>);
                  }
                  export module Subscription {
                    export class Companion {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.Subscription.Companion>;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module subscription {
                  export class SubscriptionsRequestIQ {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsRequestIQ>;
                    public constructor();
                    public getIQChildElementBuilder(param0: org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder): org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module subscription {
                  export class SubscriptionsResultIQ {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQ>;
                    public a(): java.util.List<any>;
                    public constructor(param0: java.util.ArrayList<any>);
                    public getIQChildElementBuilder(param0: org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder): org.jivesoftware.smack.packet.IQ.IQChildElementXmlStringBuilder;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module subscription {
                  export class SubscriptionsResultIQListener {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQListener>;
                    public accept(param0: org.jivesoftware.smack.packet.Stanza): boolean;
                    public constructor(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQListener.SubscriptionsReceivedListener);
                    public processStanza(param0: org.jivesoftware.smack.packet.Stanza): void;
                  }
                  export module SubscriptionsResultIQListener {
                    export class SubscriptionsReceivedListener {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQListener.SubscriptionsReceivedListener>;
                      /**
                       * Constructs a new instance of the com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQListener$SubscriptionsReceivedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                       */
                      public constructor(implementation: { a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQ): void });
                      public constructor();
                      public a(param0: com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQ): void;
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
          export module conversation {
            export module xmpp {
              export module conversation {
                export module subscription {
                  export class SubscriptionsResultIQProvider extends org.jivesoftware.smack.provider.IQProvider<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQ> {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQProvider>;
                    public parse(param0: org.jivesoftware.smack.xml.XmlPullParser, param1: number, param2: org.jivesoftware.smack.packet.XmlEnvironment): org.jivesoftware.smack.packet.IQ;
                    public constructor();
                  }
                  export module SubscriptionsResultIQProvider {
                    export class Companion {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQProvider.Companion>;
                      public static a(): void;
                    }
                    export class WhenMappings {
                      public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.conversation.xmpp.conversation.subscription.SubscriptionsResultIQProvider.WhenMappings>;
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
            export class ActivityLifecycleController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController>;
              public onActivityPaused(param0: globalAndroid.app.Activity): void;
              public constructor(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController.CurrentActivityUpdatedListener);
              public onActivityStarted(param0: globalAndroid.app.Activity): void;
              public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
              public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
              public b(): java.util.ArrayList<any>;
              public onActivityResumed(param0: globalAndroid.app.Activity): void;
              public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
              public a(): java.lang.ref.WeakReference<any>;
              public onActivityStopped(param0: globalAndroid.app.Activity): void;
            }
            export module ActivityLifecycleController {
              export class CurrentActivityUpdatedListener {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController.CurrentActivityUpdatedListener>;
                /**
                 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController$CurrentActivityUpdatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { a(): void });
                public constructor();
                public a(): void;
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
            export class DefaultFloatingButton {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButton>;
              public a(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration, param1: boolean, param2: com.iadvize.conversation.sdk.feature.conversation.ConversationChannel): void;
              public onDetachedFromWindow(): void;
              public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
              public onAttachedToWindow(): void;
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
              public constructor(param0: number, param1: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins, param2: number, param3: number, param4: java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, java.lang.Integer>);
              public constructor();
              public component2(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins;
              public getIconTint(): number;
              public hashCode(): number;
              public toString(): string;
              public getIconResIds(): java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, java.lang.Integer>;
              public getMargins(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins;
              public component1(): number;
              public copy(param0: number, param1: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonMargins, param2: number, param3: number, param4: java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, java.lang.Integer>): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonConfiguration;
              public component5(): java.util.Map<com.iadvize.conversation.sdk.feature.conversation.ConversationChannel, java.lang.Integer>;
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
              public constructor(implementation: { setupDefaultFloatingButton(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption): void });
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
            export class DefaultFloatingButtonControllerImpl extends com.iadvize.conversation.sdk.feature.conversation.NoOpConversationListener implements com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonController, com.iadvize.conversation.sdk.feature.targeting.TargetingListener, com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController.CurrentActivityUpdatedListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonControllerImpl>;
              public constructor();
              public onNewMessageReceived(param0: string): void;
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl): void;
              public a(): void;
              public setupDefaultFloatingButton(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption): void;
              public a(param0: com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption): void;
              public onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
              public e(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption;
              public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
              public f(): com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl;
              public a(param0: com.iadvize.conversation.sdk.feature.chatbox.ChatboxControllerImpl): void;
              public h(): void;
              public g(): boolean;
              public c(): com.iadvize.conversation.sdk.feature.chatbox.ChatboxControllerImpl;
              public onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void;
              public a(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl): void;
              public b(): com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController;
              public d(): com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl;
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
              public constructor(implementation: { didTapMoreInformation(): void });
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
          export module graphql {
            export abstract class ApiResponse<T> extends java.lang.Object {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.ApiResponse<any>>;
            }
            export module ApiResponse {
              export class EmptySuccess extends com.iadvize.conversation.sdk.feature.graphql.ApiResponse<any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.ApiResponse.EmptySuccess>;
                public static a: com.iadvize.conversation.sdk.feature.graphql.ApiResponse.EmptySuccess;
              }
              export class Error<T> extends com.iadvize.conversation.sdk.feature.graphql.ApiResponse<any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.ApiResponse.Error<any>>;
                public constructor(param0: java.lang.Exception);
                public a(): java.lang.Throwable;
              }
              export class Success<T> extends com.iadvize.conversation.sdk.feature.graphql.ApiResponse<any> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.ApiResponse.Success<any>>;
                public constructor(param0: any);
                public a(): any;
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
          export module graphql {
            export class GraphQLApi {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.GraphQLApi>;
              public a(param0: com.iadvize.conversation.sdk.Environment): void;
              public b(param0: string, param1: any): any;
              public a(param0: java.util.ArrayList<any>, param1: any): any;
              public a(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void;
              public a(param0: com.iadvize.conversation.ui.models.MessageAttachment, param1: any): any;
              public d(param0: any): any;
              public h(param0: any): any;
              public e(param0: any): any;
              public a(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction, param1: any): any;
              public c(param0: any): any;
              public a(param0: string, param1: string, param2: any): any;
              public a(param0: string, param1: any): any;
              public f(param0: any): any;
              public a(param0: boolean, param1: any): any;
              public a(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.feature.targeting.TargetingRule, param2: any): any;
              public constructor(param0: com.iadvize.conversation.sdk.Environment.ProdHA);
              public a(param0: number, param1: com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption, param2: string, param3: any): any;
              public a(param0: any): any;
              public b(param0: any): any;
              public a(param0: string, param1: string, param2: any): any;
              public g(param0: any): any;
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
          export module graphql {
            export module adapter {
              export class ApolloDateAdapter extends com.apollographql.apollo3.api.Adapter<java.util.Date> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.adapter.ApolloDateAdapter>;
                public a(param0: java.util.Date): string;
                public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
                public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
                public constructor();
              }
              export module ApolloDateAdapter {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.adapter.ApolloDateAdapter.Companion>;
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
          export module graphql {
            export module adapter {
              export class ApolloURLAdapter extends com.apollographql.apollo3.api.Adapter<string> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.adapter.ApolloURLAdapter>;
                public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
                public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module graphql {
            export module adapter {
              export class ApolloUUIDAdapter extends com.apollographql.apollo3.api.Adapter<java.util.UUID> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.adapter.ApolloUUIDAdapter>;
                public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
                public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module graphql {
            export module interceptor {
              export class AddPreviewInterceptor {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.interceptor.AddPreviewInterceptor>;
                public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
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
          export module graphql {
            export module interceptor {
              export class AddTokenInterceptor {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.interceptor.AddTokenInterceptor>;
                public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
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
          export module graphql {
            export module interceptor {
              export class AddVersionInterceptor {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.interceptor.AddVersionInterceptor>;
                public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
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
          export module graphql {
            export module interceptor {
              export class RefreshTokenInterceptor {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.interceptor.RefreshTokenInterceptor>;
                public intercept(param0: okhttp3.Interceptor.Chain): okhttp3.Response;
                public constructor();
              }
              export module RefreshTokenInterceptor {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.graphql.interceptor.RefreshTokenInterceptor.Companion>;
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
          export module logger {
            export class GraylogLogger {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.GraylogLogger>;
              public static b(param0: com.iadvize.conversation.sdk.feature.logger.Logger.Level, param1: string, param2: java.lang.StackTraceElement): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.logger.Logger.Level, param1: string, param2: java.lang.StackTraceElement): org.json.JSONObject;
              public static a(): string;
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
            export class GraylogWriter {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.GraylogWriter>;
              public static a(param0: org.json.JSONObject): any;
              public static b(param0: org.json.JSONObject): any;
              public static a(param0: globalAndroid.content.Context, param1: java.net.URL): void;
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
                public static NONE: com.iadvize.conversation.sdk.feature.logger.Logger.Level;
                public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.logger.Logger.Level;
                public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.logger.Logger.Level>;
              }
              export class WhenMappings {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.logger.Logger.WhenMappings>;
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
              public constructor(implementation: { registerPushToken(param0: string): void; enablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void; disablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void; isIAdvizePushNotification(param0: java.util.Map<string, string>): boolean });
              public constructor();
              public enablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
              public registerPushToken(param0: string): void;
              public isIAdvizePushNotification(param0: java.util.Map<string, string>): boolean;
              public disablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
            }
            export module NotificationController {
              export class DefaultImpls {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.notification.NotificationController.DefaultImpls>;
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
            export class NotificationControllerImpl extends com.iadvize.conversation.sdk.feature.notification.NotificationController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.notification.NotificationControllerImpl>;
              public constructor(param0: com.iadvize.conversation.sdk.feature.graphql.GraphQLApi);
              public enablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
              public isIAdvizePushNotification(param0: java.util.Map<any, any>): boolean;
              public registerPushToken(param0: string): void;
              public isIAdvizePushNotification(param0: java.util.Map<string, string>): boolean;
              public disablePushNotifications(param0: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
            }
            export module NotificationControllerImpl {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.notification.NotificationControllerImpl.Companion>;
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
          export module preference {
            export class PreferenceItem {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.preference.PreferenceItem>;
              public static d: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static e: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static f: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static g: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static h: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static i: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static j: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static k: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static l: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static m: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static n: com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.preference.PreferenceItem;
              public b(): boolean;
              public c(): string;
              public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.preference.PreferenceItem>;
              public a(): boolean;
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
          export module preference {
            export class PreferencesAccessor {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.preference.PreferencesAccessor>;
              public static a(param0: java.util.LinkedHashSet<any>): any;
              public static a(param0: globalAndroid.content.Context): void;
              public static a(param0: string, param1: java.io.Serializable, param2: boolean): any;
              public a(param0: string): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.preference.PreferenceItem, param1: any): any;
              public static b(param0: com.iadvize.conversation.sdk.feature.preference.PreferenceItem, param1: any): void;
              public a(param0: string, param1: any, param2: boolean): void;
              public a(param0: java.util.Set<any>): void;
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
            export class CSATChoice {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.CSATChoice>;
              public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.satisfaction.CSATChoice>;
              public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.satisfaction.CSATChoice;
              public a(param0: globalAndroid.content.res.Resources): string;
              public b(): number;
              public a(): string;
            }
            export module CSATChoice {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.CSATChoice.Companion>;
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
          export module satisfaction {
            export class SatisfactionApi {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionApi>;
              public a(param0: com.iadvize.conversation.sdk.Environment): void;
              public a(param0: string, param1: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionGrade, param2: any, param3: any): any;
              public constructor(param0: com.iadvize.conversation.sdk.Environment);
            }
            export module SatisfactionApi {
              export class SatisfactionRestApi {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionApi.SatisfactionRestApi>;
                /**
                 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionApi$SatisfactionRestApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { a(param0: okhttp3.RequestBody, param1: string, param2: any): any });
                public constructor();
                public a(param0: okhttp3.RequestBody, param1: string, param2: any): any;
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
          export module satisfaction {
            export class SatisfactionFlowStep {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep>;
              public static a: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep;
              public static b: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep;
              public static c: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep;
              public static d: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep;
              public static e: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep;
              public static f: com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep;
              public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep;
              public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.satisfaction.SatisfactionFlowStep>;
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
              public constructor(implementation: { getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>; setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>): void; getLanguage(): com.iadvize.conversation.sdk.feature.targeting.LanguageOption; setLanguage(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void; activateTargetingRule(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule): void; registerUserNavigation(param0: com.iadvize.conversation.sdk.feature.targeting.NavigationOption): void; isActiveTargetingRuleAvailable(): boolean; activeTargetingRule(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule });
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
            export module TargetingController {
              export class DefaultImpls {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingController.DefaultImpls>;
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
            export class TargetingControllerImpl extends com.iadvize.conversation.sdk.feature.conversation.NoOpConversationListener implements com.iadvize.conversation.sdk.feature.targeting.TargetingController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl>;
              public constructor();
              public isActiveTargetingRuleAvailable(): boolean;
              public onNewMessageReceived(param0: string): void;
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl): void;
              public activateTargetingRule(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingRule): void;
              public static d(param0: com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl): void;
              public setLanguage(param0: com.iadvize.conversation.sdk.feature.targeting.LanguageOption): void;
              public a(param0: java.util.UUID): void;
              public activeTargetingRule(): com.iadvize.conversation.sdk.feature.targeting.TargetingRule;
              public getListeners(): java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>;
              public d(): java.util.UUID;
              public c(): com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl;
              public e(): boolean;
              public onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
              public getLanguage(): com.iadvize.conversation.sdk.feature.targeting.LanguageOption;
              public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
              public constructor(param0: com.iadvize.conversation.sdk.feature.graphql.GraphQLApi);
              public registerUserNavigation(param0: com.iadvize.conversation.sdk.feature.targeting.NavigationOption): void;
              public getListeners(): java.util.List<any>;
              public b(): void;
              public setListeners(param0: java.util.List<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>): void;
              public setListeners(param0: java.util.List<any>): void;
            }
            export module TargetingControllerImpl {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingControllerImpl.Companion>;
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
            export class TargetingListener {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.sdk.feature.targeting.TargetingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onActiveTargetingRuleAvailabilityUpdated(param0: boolean): void });
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.targeting.TargetingRule> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.targeting.TargetingRule.Creator>;
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
          export module tracking {
            export abstract class TrackedEvent {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent>;
              public b(): java.util.Map<any, any>;
              public a(): string;
            }
            export module TrackedEvent {
              export abstract class Auth extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Auth>;
                public a(): string;
              }
              export module Auth {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Auth.Companion>;
                }
                export class SessionFinished extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Auth {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Auth.SessionFinished>;
                  public constructor(param0: java.lang.Throwable);
                }
                export class SessionStarted extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Auth {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Auth.SessionStarted>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Auth.SessionStarted;
                }
              }
              export abstract class Chatbox extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox>;
                public a(): string;
              }
              export module Chatbox {
                export class AttachFileClicked extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.AttachFileClicked>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.AttachFileClicked;
                }
                export class ChatboxClosed extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.ChatboxClosed>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.ChatboxClosed;
                }
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Companion>;
                }
                export class ConvNotRouted extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.ConvNotRouted>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.ConvNotRouted;
                }
                export class ConvRestored extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.ConvRestored>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.ConvRestored;
                }
                export class ConvStarted extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.ConvStarted>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.ConvStarted;
                }
                export class EmojiSent extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.EmojiSent>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.EmojiSent;
                }
                export class GdprAccepted extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.GdprAccepted>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.GdprAccepted;
                }
                export class GdprDisplayed extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.GdprDisplayed>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.GdprDisplayed;
                }
                export class GdprMoreInfoClicked extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.GdprMoreInfoClicked>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.GdprMoreInfoClicked;
                }
                export abstract class Video extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video>;
                  public a(): string;
                }
                export module Video {
                  export class AgentDisconnected extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.AgentDisconnected>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.AgentDisconnected;
                  }
                  export class CameraDetected extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraDetected>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraDetected;
                  }
                  export class CameraDisabled extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraDisabled>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraDisabled;
                  }
                  export class CameraEnabled extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraEnabled>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraEnabled;
                  }
                  export class CameraPermissionGranted extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraPermissionGranted>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraPermissionGranted;
                  }
                  export class CameraPermissionRefused extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraPermissionRefused>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.CameraPermissionRefused;
                  }
                  export class Companion {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.Companion>;
                  }
                  export class Displayed extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.Displayed>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.Displayed;
                  }
                  export class MicDetected extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicDetected>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicDetected;
                  }
                  export class MicDisabled extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicDisabled>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicDisabled;
                  }
                  export class MicEnabled extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicEnabled>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicEnabled;
                  }
                  export class MicPermissionGranted extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicPermissionGranted>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicPermissionGranted;
                  }
                  export class MicPermissionRefused extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicPermissionRefused>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.MicPermissionRefused;
                  }
                  export class Reduced extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.Reduced>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.Reduced;
                  }
                  export class VisitorHungUp extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video {
                    public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.VisitorHungUp>;
                    public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Chatbox.Video.VisitorHungUp;
                  }
                }
              }
              export abstract class Sdk extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Sdk>;
                public a(): string;
              }
              export module Sdk {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Sdk.Companion>;
                }
                export class Loaded extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Sdk {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Sdk.Loaded>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Sdk.Loaded;
                }
              }
              export abstract class Targeting extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Targeting>;
                public a(): string;
              }
              export module Targeting {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Targeting.Companion>;
                }
                export class RuleMissed extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Targeting {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Targeting.RuleMissed>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Targeting.RuleMissed;
                }
                export class RuleTriggered extends com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Targeting {
                  public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Targeting.RuleTriggered>;
                  public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent.Targeting.RuleTriggered;
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
          export module tracking {
            export class TrackedParam {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackedParam>;
              public static b: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static c: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static d: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static e: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static f: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static g: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static h: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static i: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static j: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static k: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static l: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static m: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static n: com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.tracking.TrackedParam>;
              public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.tracking.TrackedParam;
              public a(): string;
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
          export module tracking {
            export class TrackingApi {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackingApi>;
              public a(param0: com.iadvize.conversation.sdk.Environment): void;
              public a(param0: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent, param1: any): any;
              public constructor(param0: com.iadvize.conversation.sdk.Environment);
              public a(param0: com.iadvize.conversation.sdk.feature.tracking.TrackedEvent): void;
            }
            export module TrackingApi {
              export class TrackingRestApi {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.tracking.TrackingApi.TrackingRestApi>;
                /**
                 * Constructs a new instance of the com.iadvize.conversation.sdk.feature.tracking.TrackingApi$TrackingRestApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { a(param0: okhttp3.RequestBody, param1: any): any });
                public constructor();
                public a(param0: okhttp3.RequestBody, param1: any): any;
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
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.Transaction.Companion>;
                public static a(param0: string): com.iadvize.conversation.sdk.feature.transaction.Transaction;
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
              public constructor(implementation: { register(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction): void });
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
          export module transaction {
            export class TransactionControllerImpl implements com.iadvize.conversation.sdk.feature.defaultfloatingbutton.ActivityLifecycleController.CurrentActivityUpdatedListener, com.iadvize.conversation.sdk.feature.transaction.TransactionController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.TransactionControllerImpl>;
              public a(): void;
              public constructor(param0: com.iadvize.conversation.sdk.feature.graphql.GraphQLApi);
              public b(): void;
              public register(param0: com.iadvize.conversation.sdk.feature.transaction.Transaction): void;
            }
            export module TransactionControllerImpl {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.transaction.TransactionControllerImpl.Companion>;
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
            export class CameraCapturerCompat {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat>;
              public d(): void;
              public isScreencast(): boolean;
              public stopCapture(): void;
              public b(): com.twilio.video.VideoCapturer;
              public startCapture(param0: number, param1: number, param2: number): void;
              public dispose(): void;
              public a(): com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source;
              public initialize(param0: tvi.webrtc.SurfaceTextureHelper, param1: globalAndroid.content.Context, param2: tvi.webrtc.CapturerObserver): void;
              public constructor(param0: globalAndroid.content.Context);
            }
            export module CameraCapturerCompat {
              export class Source {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source>;
                public static a: com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source;
                public static b: com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source;
                public static valueOf(param0: string): com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source;
                public static values(): androidNative.Array<com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source>;
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
            export class ThumbnailVideoService {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService>;
              public constructor();
              public onCreate(): void;
              public onDestroy(): void;
              public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
              public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
            }
            export module ThumbnailVideoService {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoService.Companion>;
                public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials, param2: com.iadvize.conversation.sdk.feature.video.VideoSettings): void;
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
            export class ThumbnailVideoView {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoView>;
              public a(): void;
              public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.view.View.OnClickListener);
              public performClick(): boolean;
              public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
              public a(param0: com.iadvize.conversation.sdk.feature.video.VideoSettings): void;
            }
            export module ThumbnailVideoView {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.ThumbnailVideoView.Companion>;
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
              public constructor();
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: androidx.constraintlayout.widget.ConstraintSet): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean): void;
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public onDestroy(): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity, param1: boolean, param2: boolean, param3: number): void;
              public static f(param0: com.iadvize.conversation.sdk.feature.video.VideoActivity): void;
              public onResume(): void;
            }
            export module VideoActivity {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoActivity.Companion>;
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
            export class VideoController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoController>;
              public onVideoTrackUnpublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication): void;
              public onVideoTrackSubscriptionFailed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication, param2: com.twilio.video.TwilioException): void;
              public onParticipantDisconnected(param0: com.twilio.video.Room, param1: com.twilio.video.RemoteParticipant): void;
              public onAudioTrackPublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication): void;
              public onAudioTrackSubscriptionFailed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication, param2: com.twilio.video.TwilioException): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoController): void;
              public onReconnected(param0: com.twilio.video.Room): void;
              public onRecordingStopped(param0: com.twilio.video.Room): void;
              public onAudioTrackUnsubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication, param2: com.twilio.video.RemoteAudioTrack): void;
              public onAudioTrackSubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication, param2: com.twilio.video.RemoteAudioTrack): void;
              public onRecordingStarted(param0: com.twilio.video.Room): void;
              public onDataTrackPublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication): void;
              public onVideoTrackEnabled(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication): void;
              public onVideoTrackUnsubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication, param2: com.twilio.video.RemoteVideoTrack): void;
              public onDataTrackSubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication, param2: com.twilio.video.RemoteDataTrack): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoController, param1: com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source): void;
              public constructor(param0: globalAndroid.content.Context, param1: com.iadvize.conversation.sdk.feature.video.VideoCredentials);
              public onVideoTrackPublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication): void;
              public onAudioTrackEnabled(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication): void;
              public a(): void;
              public onDataTrackUnpublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication): void;
              public onVideoTrackDisabled(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication): void;
              public static m(param0: com.iadvize.conversation.sdk.feature.video.VideoController): void;
              public onParticipantConnected(param0: com.twilio.video.Room, param1: com.twilio.video.RemoteParticipant): void;
              public onAudioTrackDisabled(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication): void;
              public onDisconnected(param0: com.twilio.video.Room, param1: com.twilio.video.TwilioException): void;
              public static n(param0: com.iadvize.conversation.sdk.feature.video.VideoController): void;
              public static b(param0: com.iadvize.conversation.sdk.feature.video.VideoController): void;
              public onAudioTrackUnpublished(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteAudioTrackPublication): void;
              public onReconnecting(param0: com.twilio.video.Room, param1: com.twilio.video.TwilioException): void;
              public onDataTrackUnsubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication, param2: com.twilio.video.RemoteDataTrack): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.video.VideoController, param1: com.twilio.video.RemoteParticipant): void;
              public static c(param0: com.iadvize.conversation.sdk.feature.video.VideoController): void;
              public onConnectFailure(param0: com.twilio.video.Room, param1: com.twilio.video.TwilioException): void;
              public static o(param0: com.iadvize.conversation.sdk.feature.video.VideoController): void;
              public onConnected(param0: com.twilio.video.Room): void;
              public onDataTrackSubscriptionFailed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteDataTrackPublication, param2: com.twilio.video.TwilioException): void;
              public onVideoTrackSubscribed(param0: com.twilio.video.RemoteParticipant, param1: com.twilio.video.RemoteVideoTrackPublication, param2: com.twilio.video.RemoteVideoTrack): void;
            }
            export module VideoController {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoController.Companion>;
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
              public describeContents(): number;
              public constructor(param0: string, param1: string, param2: string);
              public c(): string;
              public b(): string;
              public a(): string;
            }
            export module VideoCredentials {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoCredentials> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoCredentials.Creator>;
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
            export class VideoEvent {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent>;
            }
            export module VideoEvent {
              export class AgentConnected {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.AgentConnected>;
                public constructor();
              }
              export class AgentDisconnected {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.AgentDisconnected>;
                public constructor();
              }
              export class CallEnded {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.CallEnded>;
                public a(): string;
                public constructor(param0: string);
              }
              export class ConversationCreated {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.ConversationCreated>;
                public constructor(param0: com.iadvize.conversation.sdk.feature.video.VideoCredentials);
                public a(): com.iadvize.conversation.sdk.feature.video.VideoCredentials;
              }
              export class ConversationCreationError {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.ConversationCreationError>;
                public constructor();
              }
              export class DisableCamera {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.DisableCamera>;
                public constructor();
              }
              export class DisableMic {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.DisableMic>;
                public constructor();
              }
              export class DisableRemoteCamera {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.DisableRemoteCamera>;
                public constructor();
              }
              export class DisableRemoteMic {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.DisableRemoteMic>;
                public constructor();
              }
              export class EnableCamera {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.EnableCamera>;
                public constructor();
              }
              export class EnableMic {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.EnableMic>;
                public constructor();
              }
              export class EnableRemoteCamera {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.EnableRemoteCamera>;
                public constructor();
              }
              export class EnableRemoteMic {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.EnableRemoteMic>;
                public constructor();
              }
              export class EscalationDeclined {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.EscalationDeclined>;
                public a(): string;
                public constructor(param0: string);
              }
              export class Load {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.Load>;
                public constructor(param0: com.twilio.video.VideoTextureView, param1: com.twilio.video.VideoTextureView, param2: com.iadvize.conversation.sdk.feature.video.VideoSettings);
                public b(): com.twilio.video.VideoTextureView;
                public c(): com.iadvize.conversation.sdk.feature.video.VideoSettings;
                public a(): com.twilio.video.VideoTextureView;
              }
              export class RemoveLocalTrack {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.RemoveLocalTrack>;
              }
              export class StartConversation {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.StartConversation>;
                public a(): string;
                public constructor(param0: string);
              }
              export class SubscribeVideoTrack {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.SubscribeVideoTrack>;
                public constructor();
              }
              export class SwitchCamera {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.SwitchCamera>;
                public constructor();
              }
              export class UnsubscribeVideoTrack {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.UnsubscribeVideoTrack>;
                public constructor();
              }
              export class VisitorConnected {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoEvent.VisitorConnected>;
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
          export module video {
            export class VideoLobbyActivity {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity>;
              public constructor();
              public onCreate(param0: globalAndroid.os.Bundle): void;
              public onDestroy(): void;
            }
            export module VideoLobbyActivity {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoLobbyActivity.Companion>;
                public static a(param0: globalAndroid.content.Context): void;
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
              public constructor();
              public onCreate(): void;
              public onDestroy(): void;
              public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
              public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
              public onTaskRemoved(param0: globalAndroid.content.Intent): void;
            }
            export module VideoService {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoService.Companion>;
                public static a(): boolean;
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
              public constructor(param0: boolean, param1: boolean, param2: com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public a(param0: com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source): void;
              public describeContents(): number;
              public c(): boolean;
              public b(): com.iadvize.conversation.sdk.feature.video.CameraCapturerCompat.Source;
              public b(param0: boolean): void;
              public a(param0: boolean): void;
              public a(): boolean;
            }
            export module VideoSettings {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.sdk.feature.video.VideoSettings> {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoSettings.Creator>;
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
            export class VideoState {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoState>;
              public c(param0: boolean): void;
              public d(param0: boolean): void;
              public c(): boolean;
              public d(): string;
              public constructor(param0: string, param1: boolean, param2: boolean, param3: boolean, param4: boolean);
              public b(): boolean;
              public b(param0: boolean): void;
              public a(param0: boolean): void;
              public a(): boolean;
            }
            export module VideoState {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.video.VideoState.Companion>;
                public static a(param0: string): com.iadvize.conversation.sdk.feature.video.VideoState;
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
            export class CustomData {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.CustomData>;
              public toInput$sdk_clientRelease(): com.iadvize.conversation.sdk.type.VisitorConversationCustomDataInput;
              public getValue$sdk_clientRelease(): any;
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
              public constructor(implementation: { registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void });
              public constructor();
              public registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
            }
            export module VisitorController {
              export class DefaultImpls {
                public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.VisitorController.DefaultImpls>;
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
            export class VisitorControllerImpl extends com.iadvize.conversation.sdk.feature.conversation.NoOpConversationListener implements com.iadvize.conversation.sdk.feature.visitor.VisitorController {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.feature.visitor.VisitorControllerImpl>;
              public constructor();
              public onNewMessageReceived(param0: string): void;
              public a(param0: com.iadvize.conversation.sdk.feature.conversation.ConversationControllerImpl): void;
              public c(): java.util.ArrayList<any>;
              public static a(param0: com.iadvize.conversation.sdk.feature.visitor.VisitorControllerImpl, param1: java.util.List<any>): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.visitor.VisitorControllerImpl): boolean;
              public onOngoingConversationUpdated(param0: com.iadvize.conversation.sdk.feature.conversation.OngoingConversation): void;
              public registerCustomData(param0: java.util.List<any>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
              public handleClickedUrl(param0: globalAndroid.net.Uri): boolean;
              public constructor(param0: com.iadvize.conversation.sdk.feature.graphql.GraphQLApi);
              public registerCustomData(param0: java.util.List<com.iadvize.conversation.sdk.feature.visitor.CustomData>, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
              public static a(param0: com.iadvize.conversation.sdk.feature.visitor.VisitorControllerImpl, param1: com.iadvize.conversation.sdk.IAdvizeSDK.Callback): void;
              public b(): void;
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
        export module fragment {
          export class Bot {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Bot>;
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
        export module fragment {
          export class BotImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.BotImpl_ResponseAdapter>;
          }
          export module BotImpl_ResponseAdapter {
            export class Bot extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.Bot> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.BotImpl_ResponseAdapter.Bot>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.Bot;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class CardAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment>;
            public d(): string;
            public f(): com.iadvize.conversation.sdk.fragment.CardAttachment.Video;
            public e(): string;
            public c(): string;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: com.iadvize.conversation.sdk.fragment.CardAttachment.Image, param1: string, param2: string, param3: string, param4: com.iadvize.conversation.sdk.fragment.CardAttachment.Video, param5: java.util.List<any>);
            public b(): com.iadvize.conversation.sdk.fragment.CardAttachment.Image;
            public toString(): string;
          }
          export module CardAttachment {
            export class Action {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Action>;
              public hashCode(): number;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentAction);
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
              public a(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentAction;
            }
            export class Image {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Image>;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink);
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
              public a(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink;
            }
            export class Video {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachment.Video>;
              public hashCode(): number;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.VideoAttachment);
              public toString(): string;
              public a(): com.iadvize.conversation.sdk.fragment.VideoAttachment;
              public equals(param0: any): boolean;
              public b(): string;
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
        export module fragment {
          export class CardAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachmentImpl_ResponseAdapter>;
          }
          export module CardAttachmentImpl_ResponseAdapter {
            export class Action extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.CardAttachment.Action> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachmentImpl_ResponseAdapter.Action>;
              public static a: com.iadvize.conversation.sdk.fragment.CardAttachmentImpl_ResponseAdapter.Action;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class CardAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.CardAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachmentImpl_ResponseAdapter.CardAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.CardAttachment): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.CardAttachment;
            }
            export class Image extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.CardAttachment.Image> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachmentImpl_ResponseAdapter.Image>;
              public static a: com.iadvize.conversation.sdk.fragment.CardAttachmentImpl_ResponseAdapter.Image;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Video extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.CardAttachment.Video> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardAttachmentImpl_ResponseAdapter.Video>;
              public static a: com.iadvize.conversation.sdk.fragment.CardAttachmentImpl_ResponseAdapter.Video;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class CardBundleAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachment>;
            public c(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.iadvize.conversation.sdk.type.CardBundleAttachmentActionType;
            public b(): java.util.List<any>;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.type.CardBundleAttachmentActionType, param2: java.util.List<any>);
            public toString(): string;
          }
          export module CardBundleAttachment {
            export class Card {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card>;
              public a(): com.iadvize.conversation.sdk.fragment.CardAttachment;
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.CardAttachment);
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
        export module fragment {
          export class CardBundleAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachmentImpl_ResponseAdapter>;
          }
          export module CardBundleAttachmentImpl_ResponseAdapter {
            export class Card extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.CardBundleAttachment.Card> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachmentImpl_ResponseAdapter.Card>;
              public static a: com.iadvize.conversation.sdk.fragment.CardBundleAttachmentImpl_ResponseAdapter.Card;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class CardBundleAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.CardBundleAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.CardBundleAttachmentImpl_ResponseAdapter.CardBundleAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.CardBundleAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class ConversationMessage {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessage>;
            public a(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage;
            public c(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage, param2: com.iadvize.conversation.sdk.fragment.SystemMessage);
            public toString(): string;
            public b(): com.iadvize.conversation.sdk.fragment.SystemMessage;
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
        export module fragment {
          export class ConversationMessageAttachmentAction {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentAction>;
            public b(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentSelectAction;
            public a(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction;
            public c(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction, param2: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentSelectAction);
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
        export module fragment {
          export class ConversationMessageAttachmentActionImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentActionImpl_ResponseAdapter>;
          }
          export module ConversationMessageAttachmentActionImpl_ResponseAdapter {
            export class ConversationMessageAttachmentAction extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentAction> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentActionImpl_ResponseAdapter.ConversationMessageAttachmentAction>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentAction;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentAction): void;
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
        export module fragment {
          export class ConversationMessageAttachmentImageLink {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink>;
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
        export module fragment {
          export class ConversationMessageAttachmentImageLinkImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLinkImpl_ResponseAdapter>;
          }
          export module ConversationMessageAttachmentImageLinkImpl_ResponseAdapter {
            export class ConversationMessageAttachmentImageLink extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLinkImpl_ResponseAdapter.ConversationMessageAttachmentImageLink>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink): void;
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
        export module fragment {
          export class ConversationMessageAttachmentLinkAction {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction>;
            public constructor(param0: string, param1: any);
            public a(): string;
            public b(): any;
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
        export module fragment {
          export class ConversationMessageAttachmentLinkActionImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkActionImpl_ResponseAdapter>;
          }
          export module ConversationMessageAttachmentLinkActionImpl_ResponseAdapter {
            export class ConversationMessageAttachmentLinkAction extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkActionImpl_ResponseAdapter.ConversationMessageAttachmentLinkAction>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentLinkAction;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class ConversationMessageAttachmentSelectAction {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentSelectAction>;
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
        export module fragment {
          export class ConversationMessageAttachmentSelectActionImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentSelectActionImpl_ResponseAdapter>;
          }
          export module ConversationMessageAttachmentSelectActionImpl_ResponseAdapter {
            export class ConversationMessageAttachmentSelectAction extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentSelectAction> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentSelectActionImpl_ResponseAdapter.ConversationMessageAttachmentSelectAction>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentSelectAction;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class ConversationMessageImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageImpl_ResponseAdapter>;
          }
          export module ConversationMessageImpl_ResponseAdapter {
            export class ConversationMessage extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ConversationMessage> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationMessageImpl_ResponseAdapter.ConversationMessage>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ConversationMessage;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class ConversationParticipant {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationParticipant>;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.Bot, param2: com.iadvize.conversation.sdk.fragment.Expert, param3: com.iadvize.conversation.sdk.fragment.IbbuManager, param4: com.iadvize.conversation.sdk.fragment.Professional, param5: com.iadvize.conversation.sdk.fragment.ThirdPartyAccount, param6: com.iadvize.conversation.sdk.fragment.Visitor);
            public f(): com.iadvize.conversation.sdk.fragment.Visitor;
            public g(): string;
            public c(): com.iadvize.conversation.sdk.fragment.IbbuManager;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public d(): com.iadvize.conversation.sdk.fragment.Professional;
            public e(): com.iadvize.conversation.sdk.fragment.ThirdPartyAccount;
            public a(): com.iadvize.conversation.sdk.fragment.Bot;
            public b(): com.iadvize.conversation.sdk.fragment.Expert;
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
        export module fragment {
          export class ConversationParticipantImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationParticipantImpl_ResponseAdapter>;
          }
          export module ConversationParticipantImpl_ResponseAdapter {
            export class ConversationParticipant extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ConversationParticipant> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ConversationParticipantImpl_ResponseAdapter.ConversationParticipant>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.ConversationParticipant): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ConversationParticipant;
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
        export module fragment {
          export class EscalationAcceptedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationAcceptedAttachment>;
            public a(): java.util.UUID;
            public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.EscalationType);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public b(): com.iadvize.conversation.sdk.type.EscalationType;
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
        export module fragment {
          export class EscalationAcceptedAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationAcceptedAttachmentImpl_ResponseAdapter>;
          }
          export module EscalationAcceptedAttachmentImpl_ResponseAdapter {
            export class EscalationAcceptedAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.EscalationAcceptedAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationAcceptedAttachmentImpl_ResponseAdapter.EscalationAcceptedAttachment>;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.EscalationAcceptedAttachment;
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
        export module fragment {
          export class EscalationEndedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationEndedAttachment>;
            public b(): com.iadvize.conversation.sdk.type.EscalationEndReason;
            public a(): java.util.UUID;
            public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.EscalationType, param2: com.iadvize.conversation.sdk.type.EscalationEndReason);
            public c(): com.iadvize.conversation.sdk.type.EscalationType;
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
        export module fragment {
          export class EscalationEndedAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationEndedAttachmentImpl_ResponseAdapter>;
          }
          export module EscalationEndedAttachmentImpl_ResponseAdapter {
            export class EscalationEndedAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.EscalationEndedAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationEndedAttachmentImpl_ResponseAdapter.EscalationEndedAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.EscalationEndedAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class EscalationInvitationSentAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationInvitationSentAttachment>;
            public a(): java.util.UUID;
            public constructor(param0: java.util.UUID, param1: com.iadvize.conversation.sdk.type.EscalationType);
            public hashCode(): number;
            public equals(param0: any): boolean;
            public b(): com.iadvize.conversation.sdk.type.EscalationType;
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
        export module fragment {
          export class EscalationInvitationSentAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationInvitationSentAttachmentImpl_ResponseAdapter>;
          }
          export module EscalationInvitationSentAttachmentImpl_ResponseAdapter {
            export class EscalationInvitationSentAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.EscalationInvitationSentAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.EscalationInvitationSentAttachmentImpl_ResponseAdapter.EscalationInvitationSentAttachment>;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.EscalationInvitationSentAttachment;
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
        export module fragment {
          export class Expert {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Expert>;
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
        export module fragment {
          export class ExpertImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ExpertImpl_ResponseAdapter>;
          }
          export module ExpertImpl_ResponseAdapter {
            export class Expert extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.Expert> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ExpertImpl_ResponseAdapter.Expert>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.Expert;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class FileAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileAttachment>;
            public a(): string;
            public b(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: string, param2: any);
            public toString(): string;
            public c(): any;
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
        export module fragment {
          export class FileAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileAttachmentImpl_ResponseAdapter>;
          }
          export module FileAttachmentImpl_ResponseAdapter {
            export class FileAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.FileAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileAttachmentImpl_ResponseAdapter.FileAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.FileAttachment;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.FileAttachment): void;
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
        export module fragment {
          export class FileBundleAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachment>;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.List<any>);
            public toString(): string;
          }
          export module FileBundleAttachment {
            export class Attachment {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment>;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.FileAttachment);
              public hashCode(): number;
              public a(): com.iadvize.conversation.sdk.fragment.FileAttachment;
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
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
        export module fragment {
          export class FileBundleAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachmentImpl_ResponseAdapter>;
          }
          export module FileBundleAttachmentImpl_ResponseAdapter {
            export class Attachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.FileBundleAttachment.Attachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachmentImpl_ResponseAdapter.Attachment>;
              public static a: com.iadvize.conversation.sdk.fragment.FileBundleAttachmentImpl_ResponseAdapter.Attachment;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class FileBundleAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.FileBundleAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.FileBundleAttachmentImpl_ResponseAdapter.FileBundleAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.FileBundleAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class IbbuManager {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.IbbuManager>;
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
        export module fragment {
          export class IbbuManagerImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.IbbuManagerImpl_ResponseAdapter>;
          }
          export module IbbuManagerImpl_ResponseAdapter {
            export class IbbuManager extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.IbbuManager> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.IbbuManagerImpl_ResponseAdapter.IbbuManager>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.IbbuManager;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class ImageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ImageAttachment>;
            public a(): string;
            public b(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: string, param2: any);
            public toString(): string;
            public c(): any;
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
        export module fragment {
          export class ImageAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ImageAttachmentImpl_ResponseAdapter>;
          }
          export module ImageAttachmentImpl_ResponseAdapter {
            export class ImageAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ImageAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ImageAttachmentImpl_ResponseAdapter.ImageAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ImageAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class LinkAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.LinkAttachment>;
            public constructor(param0: string, param1: any);
            public a(): string;
            public b(): any;
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
        export module fragment {
          export class LinkAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.LinkAttachmentImpl_ResponseAdapter>;
          }
          export module LinkAttachmentImpl_ResponseAdapter {
            export class LinkAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.LinkAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.LinkAttachmentImpl_ResponseAdapter.LinkAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.LinkAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class OfferAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.OfferAttachment>;
            public d(): any;
            public constructor(param0: string, param1: string, param2: any, param3: string);
            public b(): string;
            public a(): string;
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
        export module fragment {
          export class OfferAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.OfferAttachmentImpl_ResponseAdapter>;
          }
          export module OfferAttachmentImpl_ResponseAdapter {
            export class OfferAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.OfferAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.OfferAttachmentImpl_ResponseAdapter.OfferAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.OfferAttachment;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.OfferAttachment): void;
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
        export module fragment {
          export class ParticipantConversationMessage {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage>;
            public f(): string;
            public b(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author;
            public d(): string;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public e(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs;
            public constructor(param0: string, param1: string, param2: java.util.Date, param3: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author, param4: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs, param5: java.util.List<any>);
            public c(): java.util.Date;
            public toString(): string;
          }
          export module ParticipantConversationMessage {
            export class Attachment {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment>;
              public hashCode(): number;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment);
              public a(): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment;
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
            }
            export class Author {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author>;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationParticipant);
              public hashCode(): number;
              public a(): com.iadvize.conversation.sdk.fragment.ConversationParticipant;
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
            }
            export class SentAs {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs>;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationParticipant);
              public hashCode(): number;
              public a(): com.iadvize.conversation.sdk.fragment.ConversationParticipant;
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
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
        export module fragment {
          export class ParticipantConversationMessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment>;
            public constructor(
              param0: string,
              param1: com.iadvize.conversation.sdk.fragment.CardAttachment,
              param2: com.iadvize.conversation.sdk.fragment.CardBundleAttachment,
              param3: com.iadvize.conversation.sdk.fragment.EscalationAcceptedAttachment,
              param4: com.iadvize.conversation.sdk.fragment.EscalationEndedAttachment,
              param5: com.iadvize.conversation.sdk.fragment.EscalationInvitationSentAttachment,
              param6: com.iadvize.conversation.sdk.fragment.FileAttachment,
              param7: com.iadvize.conversation.sdk.fragment.FileBundleAttachment,
              param8: com.iadvize.conversation.sdk.fragment.ImageAttachment,
              param9: com.iadvize.conversation.sdk.fragment.LinkAttachment,
              param10: com.iadvize.conversation.sdk.fragment.OfferAttachment,
              param11: com.iadvize.conversation.sdk.fragment.ProductAttachment,
              param12: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment,
              param13: com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment,
              param14: com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment,
              param15: com.iadvize.conversation.sdk.fragment.UnsupportedAttachment
            );
            public d(): com.iadvize.conversation.sdk.fragment.EscalationEndedAttachment;
            public k(): com.iadvize.conversation.sdk.fragment.ProductAttachment;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public c(): com.iadvize.conversation.sdk.fragment.EscalationAcceptedAttachment;
            public e(): com.iadvize.conversation.sdk.fragment.EscalationInvitationSentAttachment;
            public l(): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment;
            public m(): com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment;
            public p(): string;
            public a(): com.iadvize.conversation.sdk.fragment.CardAttachment;
            public toString(): string;
            public h(): com.iadvize.conversation.sdk.fragment.ImageAttachment;
            public b(): com.iadvize.conversation.sdk.fragment.CardBundleAttachment;
            public i(): com.iadvize.conversation.sdk.fragment.LinkAttachment;
            public j(): com.iadvize.conversation.sdk.fragment.OfferAttachment;
            public g(): com.iadvize.conversation.sdk.fragment.FileBundleAttachment;
            public o(): com.iadvize.conversation.sdk.fragment.UnsupportedAttachment;
            public n(): com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment;
            public f(): com.iadvize.conversation.sdk.fragment.FileAttachment;
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
        export module fragment {
          export class ParticipantConversationMessageAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachmentImpl_ResponseAdapter>;
          }
          export module ParticipantConversationMessageAttachmentImpl_ResponseAdapter {
            export class ParticipantConversationMessageAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachmentImpl_ResponseAdapter.ParticipantConversationMessageAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageAttachment): void;
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
        export module fragment {
          export class ParticipantConversationMessageImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageImpl_ResponseAdapter>;
          }
          export module ParticipantConversationMessageImpl_ResponseAdapter {
            export class Attachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Attachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageImpl_ResponseAdapter.Attachment>;
              public static a: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageImpl_ResponseAdapter.Attachment;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Author extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.Author> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageImpl_ResponseAdapter.Author>;
              public static a: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageImpl_ResponseAdapter.Author;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class ParticipantConversationMessage extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageImpl_ResponseAdapter.ParticipantConversationMessage>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage;
            }
            export class SentAs extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessage.SentAs> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageImpl_ResponseAdapter.SentAs>;
              public static a: com.iadvize.conversation.sdk.fragment.ParticipantConversationMessageImpl_ResponseAdapter.SentAs;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class ProductAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductAttachment>;
            public a(): string;
            public b(): string;
            public d(): string;
            public e(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: any, param2: boolean, param3: string, param4: string, param5: string);
            public f(): boolean;
            public toString(): string;
            public c(): any;
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
        export module fragment {
          export class ProductAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductAttachmentImpl_ResponseAdapter>;
          }
          export module ProductAttachmentImpl_ResponseAdapter {
            export class ProductAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ProductAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductAttachmentImpl_ResponseAdapter.ProductAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.ProductAttachment): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ProductAttachment;
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
        export module fragment {
          export class ProductOfferAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment>;
            public f(): string;
            public g(): boolean;
            public b(): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image;
            public constructor(param0: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image, param1: string, param2: string, param3: string, param4: string, param5: boolean, param6: java.util.List<any>);
            public d(): string;
            public e(): string;
            public c(): string;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export module ProductOfferAttachment {
            export class Action {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action>;
              public hashCode(): number;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentAction);
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
              public a(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentAction;
            }
            export class Image {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image>;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink);
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
              public a(): com.iadvize.conversation.sdk.fragment.ConversationMessageAttachmentImageLink;
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
        export module fragment {
          export class ProductOfferAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachmentImpl_ResponseAdapter>;
          }
          export module ProductOfferAttachmentImpl_ResponseAdapter {
            export class Action extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Action> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachmentImpl_ResponseAdapter.Action>;
              public static a: com.iadvize.conversation.sdk.fragment.ProductOfferAttachmentImpl_ResponseAdapter.Action;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Image extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment.Image> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachmentImpl_ResponseAdapter.Image>;
              public static a: com.iadvize.conversation.sdk.fragment.ProductOfferAttachmentImpl_ResponseAdapter.Image;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class ProductOfferAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ProductOfferAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferAttachmentImpl_ResponseAdapter.ProductOfferAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment;
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
        export module fragment {
          export class ProductOfferBundleAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment>;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: java.util.List<any>);
            public toString(): string;
          }
          export module ProductOfferBundleAttachment {
            export class ProductOffer {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer>;
              public hashCode(): number;
              public a(): com.iadvize.conversation.sdk.fragment.ProductOfferAttachment;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ProductOfferAttachment);
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
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
        export module fragment {
          export class ProductOfferBundleAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachmentImpl_ResponseAdapter>;
          }
          export module ProductOfferBundleAttachmentImpl_ResponseAdapter {
            export class ProductOffer extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment.ProductOffer> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachmentImpl_ResponseAdapter.ProductOffer>;
              public static a: com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachmentImpl_ResponseAdapter.ProductOffer;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class ProductOfferBundleAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachmentImpl_ResponseAdapter.ProductOfferBundleAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ProductOfferBundleAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class Professional {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Professional>;
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
        export module fragment {
          export class ProfessionalImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProfessionalImpl_ResponseAdapter>;
          }
          export module ProfessionalImpl_ResponseAdapter {
            export class Professional extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.Professional> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ProfessionalImpl_ResponseAdapter.Professional>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.Professional;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class QuickReplyMenuAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment>;
            public b(): string;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: java.util.List<any>);
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
        export module fragment {
          export class QuickReplyMenuAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachmentImpl_ResponseAdapter>;
          }
          export module QuickReplyMenuAttachmentImpl_ResponseAdapter {
            export class QuickReplyMenuAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachmentImpl_ResponseAdapter.QuickReplyMenuAttachment>;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.QuickReplyMenuAttachment;
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
        export module fragment {
          export class SystemConversationMessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment>;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.WaitingTimeEstimatedSystemAttachment, param2: com.iadvize.conversation.sdk.fragment.WaitingTimeExceededSystemAttachment, param3: com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment);
            public c(): com.iadvize.conversation.sdk.fragment.WaitingTimeExceededSystemAttachment;
            public d(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public b(): com.iadvize.conversation.sdk.fragment.WaitingTimeEstimatedSystemAttachment;
            public toString(): string;
            public a(): com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment;
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
        export module fragment {
          export class SystemConversationMessageAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachmentImpl_ResponseAdapter>;
          }
          export module SystemConversationMessageAttachmentImpl_ResponseAdapter {
            export class SystemConversationMessageAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachmentImpl_ResponseAdapter.SystemConversationMessageAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class SystemMessage {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessage>;
            public c(): java.util.UUID;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public b(): java.util.Date;
            public constructor(param0: java.util.UUID, param1: java.util.Date, param2: java.util.List<any>);
            public toString(): string;
          }
          export module SystemMessage {
            export class Attachment {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment>;
              public a(): com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.SystemConversationMessageAttachment);
              public hashCode(): number;
              public toString(): string;
              public equals(param0: any): boolean;
              public b(): string;
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
        export module fragment {
          export class SystemMessageImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessageImpl_ResponseAdapter>;
          }
          export module SystemMessageImpl_ResponseAdapter {
            export class Attachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.SystemMessage.Attachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessageImpl_ResponseAdapter.Attachment>;
              public static a: com.iadvize.conversation.sdk.fragment.SystemMessageImpl_ResponseAdapter.Attachment;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class SystemMessage extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.SystemMessage> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.SystemMessageImpl_ResponseAdapter.SystemMessage>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.SystemMessage): void;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.SystemMessage;
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
        export module fragment {
          export class ThirdPartyAccount {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ThirdPartyAccount>;
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
        export module fragment {
          export class ThirdPartyAccountImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ThirdPartyAccountImpl_ResponseAdapter>;
          }
          export module ThirdPartyAccountImpl_ResponseAdapter {
            export class ThirdPartyAccount extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.ThirdPartyAccount> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.ThirdPartyAccountImpl_ResponseAdapter.ThirdPartyAccount>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.ThirdPartyAccount;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class UnsupportedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedAttachment>;
            public constructor(param0: java.lang.Boolean);
            public a(): java.lang.Boolean;
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
        export module fragment {
          export class UnsupportedAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedAttachmentImpl_ResponseAdapter>;
          }
          export module UnsupportedAttachmentImpl_ResponseAdapter {
            export class UnsupportedAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.UnsupportedAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedAttachmentImpl_ResponseAdapter.UnsupportedAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.UnsupportedAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class UnsupportedSystemMessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment>;
            public constructor(param0: java.lang.Boolean);
            public a(): java.lang.Boolean;
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
        export module fragment {
          export class UnsupportedSystemMessageAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachmentImpl_ResponseAdapter>;
          }
          export module UnsupportedSystemMessageAttachmentImpl_ResponseAdapter {
            export class UnsupportedSystemMessageAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachmentImpl_ResponseAdapter.UnsupportedSystemMessageAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.UnsupportedSystemMessageAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class VideoAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VideoAttachment>;
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
        export module fragment {
          export class VideoAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VideoAttachmentImpl_ResponseAdapter>;
          }
          export module VideoAttachmentImpl_ResponseAdapter {
            export class VideoAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.VideoAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VideoAttachmentImpl_ResponseAdapter.VideoAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.VideoAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class Visitor {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.Visitor>;
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
        export module fragment {
          export class VisitorImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorImpl_ResponseAdapter>;
          }
          export module VisitorImpl_ResponseAdapter {
            export class Visitor extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.Visitor> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorImpl_ResponseAdapter.Visitor>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.Visitor;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class VisitorMessages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages>;
            public b(): com.iadvize.conversation.sdk.fragment.VisitorMessages.PageInfo;
            public constructor(param0: string, param1: java.util.List<any>, param2: com.iadvize.conversation.sdk.fragment.VisitorMessages.PageInfo);
            public c(): string;
            public a(): java.util.List<any>;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public toString(): string;
          }
          export module VisitorMessages {
            export class Edge {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge>;
              public b(): com.iadvize.conversation.sdk.fragment.VisitorMessages.Node;
              public hashCode(): number;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.VisitorMessages.Node);
              public toString(): string;
              public equals(param0: any): boolean;
              public a(): string;
            }
            export class Node {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.Node>;
              public hashCode(): number;
              public a(): com.iadvize.conversation.sdk.fragment.ConversationMessage;
              public toString(): string;
              public constructor(param0: string, param1: com.iadvize.conversation.sdk.fragment.ConversationMessage);
              public equals(param0: any): boolean;
              public b(): string;
            }
            export class PageInfo {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessages.PageInfo>;
              public hashCode(): number;
              public constructor(param0: boolean, param1: boolean, param2: string, param3: string);
              public c(): boolean;
              public d(): string;
              public toString(): string;
              public b(): boolean;
              public equals(param0: any): boolean;
              public a(): string;
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
        export module fragment {
          export class VisitorMessagesImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessagesImpl_ResponseAdapter>;
          }
          export module VisitorMessagesImpl_ResponseAdapter {
            export class Edge extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.VisitorMessages.Edge> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessagesImpl_ResponseAdapter.Edge>;
              public static a: com.iadvize.conversation.sdk.fragment.VisitorMessagesImpl_ResponseAdapter.Edge;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class Node extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.VisitorMessages.Node> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessagesImpl_ResponseAdapter.Node>;
              public static a: com.iadvize.conversation.sdk.fragment.VisitorMessagesImpl_ResponseAdapter.Node;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class PageInfo extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.VisitorMessages.PageInfo> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessagesImpl_ResponseAdapter.PageInfo>;
              public static a: com.iadvize.conversation.sdk.fragment.VisitorMessagesImpl_ResponseAdapter.PageInfo;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
            }
            export class VisitorMessages extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.VisitorMessages> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.VisitorMessagesImpl_ResponseAdapter.VisitorMessages>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.VisitorMessages;
              public static a(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: com.iadvize.conversation.sdk.fragment.VisitorMessages): void;
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
        export module fragment {
          export class WaitingTimeEstimatedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.WaitingTimeEstimatedSystemAttachment>;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.type.WaitingTimeReplyType, param2: com.iadvize.conversation.sdk.type.WaitingTimeEstimationType);
            public c(): com.iadvize.conversation.sdk.type.WaitingTimeReplyType;
            public b(): string;
            public a(): com.iadvize.conversation.sdk.type.WaitingTimeEstimationType;
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
        export module fragment {
          export class WaitingTimeEstimatedSystemAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.WaitingTimeEstimatedSystemAttachmentImpl_ResponseAdapter>;
          }
          export module WaitingTimeEstimatedSystemAttachmentImpl_ResponseAdapter {
            export class WaitingTimeEstimatedSystemAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.WaitingTimeEstimatedSystemAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.WaitingTimeEstimatedSystemAttachmentImpl_ResponseAdapter.WaitingTimeEstimatedSystemAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.WaitingTimeEstimatedSystemAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export class WaitingTimeExceededSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.WaitingTimeExceededSystemAttachment>;
            public b(): com.iadvize.conversation.sdk.type.WaitingTimeReplyType;
            public a(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public constructor(param0: string, param1: com.iadvize.conversation.sdk.type.WaitingTimeReplyType);
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
        export module fragment {
          export class WaitingTimeExceededSystemAttachmentImpl_ResponseAdapter {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.WaitingTimeExceededSystemAttachmentImpl_ResponseAdapter>;
          }
          export module WaitingTimeExceededSystemAttachmentImpl_ResponseAdapter {
            export class WaitingTimeExceededSystemAttachment extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.fragment.WaitingTimeExceededSystemAttachment> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.WaitingTimeExceededSystemAttachmentImpl_ResponseAdapter.WaitingTimeExceededSystemAttachment>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.fragment.WaitingTimeExceededSystemAttachment;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module fragment {
          export module selections {
            export class BotSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.BotSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class CardAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.CardAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class CardBundleAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.CardBundleAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ConversationMessageAttachmentActionSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ConversationMessageAttachmentActionSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ConversationMessageAttachmentImageLinkSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ConversationMessageAttachmentImageLinkSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ConversationMessageAttachmentLinkActionSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ConversationMessageAttachmentLinkActionSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ConversationMessageAttachmentSelectActionSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ConversationMessageAttachmentSelectActionSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ConversationMessageSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ConversationMessageSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ConversationParticipantSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ConversationParticipantSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class EscalationAcceptedAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.EscalationAcceptedAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class EscalationEndedAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.EscalationEndedAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class EscalationInvitationSentAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.EscalationInvitationSentAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ExpertSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ExpertSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class FileAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.FileAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class FileBundleAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.FileBundleAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class IbbuManagerSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.IbbuManagerSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ImageAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ImageAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class LinkAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.LinkAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class OfferAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.OfferAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ParticipantConversationMessageAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ParticipantConversationMessageAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ParticipantConversationMessageSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ParticipantConversationMessageSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ProductAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ProductAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ProductOfferAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ProductOfferAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ProductOfferBundleAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ProductOfferBundleAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ProfessionalSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ProfessionalSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class QuickReplyMenuAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.QuickReplyMenuAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class SystemConversationMessageAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.SystemConversationMessageAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class SystemMessageSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.SystemMessageSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class ThirdPartyAccountSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.ThirdPartyAccountSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class UnsupportedAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.UnsupportedAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class UnsupportedSystemMessageAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.UnsupportedSystemMessageAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class VideoAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.VideoAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class VisitorMessagesSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.VisitorMessagesSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class VisitorSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.VisitorSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class WaitingTimeEstimatedSystemAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.WaitingTimeEstimatedSystemAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module fragment {
          export module selections {
            export class WaitingTimeExceededSystemAttachmentSelections {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.fragment.selections.WaitingTimeExceededSystemAttachmentSelections>;
              public static a(): java.util.List<any>;
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
        export module selections {
          export class AuthenticateAnonymousVisitorMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.AuthenticateAnonymousVisitorMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class AuthenticateSecuredVisitorMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.AuthenticateSecuredVisitorMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class AuthenticateSimpleVisitorMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.AuthenticateSimpleVisitorMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class CreateChatConversationMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.CreateChatConversationMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class CreateVideoConversationMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.CreateVideoConversationMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class DisablePushTokenMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.DisablePushTokenMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class EnablePushTokenMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.EnablePushTokenMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class GetChatboxTemplateQuerySelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.GetChatboxTemplateQuerySelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class GetConversationQuerySelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.GetConversationQuerySelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class GetGDPRConsentQuerySelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.GetGDPRConsentQuerySelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class GetProjectSettingsQuerySelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.GetProjectSettingsQuerySelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class GetUploadUrlsQuerySelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.GetUploadUrlsQuerySelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class GetVideoConversationCredentialsMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.GetVideoConversationCredentialsMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class OngoingConversationQuerySelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.OngoingConversationQuerySelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class RegisterConcludedTransactionMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.RegisterConcludedTransactionMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class RegisterPushTokenMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.RegisterPushTokenMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class SendGDRPConsentMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.SendGDRPConsentMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class SendVisitorCustomDataMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.SendVisitorCustomDataMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class TriggerTargetingRuleMutationSelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.TriggerTargetingRuleMutationSelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class VisitorMessagesFromTargetingRuleQuerySelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.VisitorMessagesFromTargetingRuleQuerySelections>;
            public static a(): java.util.List<any>;
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
        export module selections {
          export class VisitorMessagesQuerySelections {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.selections.VisitorMessagesQuerySelections>;
            public static a(): java.util.List<any>;
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
          export class AppleBusinessChatMessageExtensionAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.AppleBusinessChatMessageExtensionAttachment>;
          }
          export module AppleBusinessChatMessageExtensionAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.AppleBusinessChatMessageExtensionAttachment.Companion>;
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
          export class ApplePayPaymentRequestedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ApplePayPaymentRequestedAttachment>;
          }
          export module ApplePayPaymentRequestedAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ApplePayPaymentRequestedAttachment.Companion>;
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
          export class ApplicationMode {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ApplicationMode>;
            public static b: com.iadvize.conversation.sdk.type.ApplicationMode;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.ApplicationMode>;
            public a(): string;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.ApplicationMode;
          }
          export module ApplicationMode {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ApplicationMode.Companion>;
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
          export class AuthenticationRequestedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.AuthenticationRequestedAttachment>;
          }
          export module AuthenticationRequestedAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.AuthenticationRequestedAttachment.Companion>;
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
          export class AutomaticMessageSentSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.AutomaticMessageSentSystemAttachment>;
          }
          export module AutomaticMessageSentSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.AutomaticMessageSentSystemAttachment.Companion>;
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
          export class Bot {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Bot>;
          }
          export module Bot {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Bot.Companion>;
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
          export class CardAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.CardAttachment>;
          }
          export module CardAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.CardAttachment.Companion>;
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
          export class CardBundleAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.CardBundleAttachment>;
          }
          export module CardBundleAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.CardBundleAttachment.Companion>;
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
          export class CardBundleAttachmentActionType {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.CardBundleAttachmentActionType>;
            public static c: com.iadvize.conversation.sdk.type.CardBundleAttachmentActionType;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.CardBundleAttachmentActionType>;
            public b(): string;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.CardBundleAttachmentActionType;
          }
          export module CardBundleAttachmentActionType {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.CardBundleAttachmentActionType.Companion>;
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
          export class Channel {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Channel>;
            public static b: com.iadvize.conversation.sdk.type.Channel;
            public static c: com.iadvize.conversation.sdk.type.Channel;
            public static d: com.iadvize.conversation.sdk.type.Channel;
            public a(): string;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.Channel>;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.Channel;
          }
          export module Channel {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Channel.Companion>;
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
          export class ChatboxTemplate {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ChatboxTemplate>;
          }
          export module ChatboxTemplate {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ChatboxTemplate.Companion>;
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
          export class ChatboxTemplateAttributes {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ChatboxTemplateAttributes>;
          }
          export module ChatboxTemplateAttributes {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ChatboxTemplateAttributes.Companion>;
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
          export class ContextualInfosAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ContextualInfosAttachment>;
          }
          export module ContextualInfosAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ContextualInfosAttachment.Companion>;
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
          export class Conversation {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Conversation>;
          }
          export module Conversation {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Conversation.Companion>;
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
          export class ConversationBlockedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationBlockedAttachment>;
          }
          export module ConversationBlockedAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationBlockedAttachment.Companion>;
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
          export class ConversationClosedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationClosedSystemAttachment>;
          }
          export module ConversationClosedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationClosedSystemAttachment.Companion>;
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
          export class ConversationCreatePayload {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationCreatePayload>;
          }
          export module ConversationCreatePayload {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationCreatePayload.Companion>;
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
          export class ConversationMessage {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessage>;
          }
          export module ConversationMessage {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessage.Companion>;
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
          export class ConversationMessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachment>;
          }
          export module ConversationMessageAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachment.Companion>;
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
          export class ConversationMessageAttachmentAction {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachmentAction>;
          }
          export module ConversationMessageAttachmentAction {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachmentAction.Companion>;
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
          export class ConversationMessageAttachmentImageLink {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachmentImageLink>;
          }
          export module ConversationMessageAttachmentImageLink {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachmentImageLink.Companion>;
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
          export class ConversationMessageAttachmentLinkAction {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachmentLinkAction>;
          }
          export module ConversationMessageAttachmentLinkAction {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachmentLinkAction.Companion>;
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
          export class ConversationMessageAttachmentSelectAction {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachmentSelectAction>;
          }
          export module ConversationMessageAttachmentSelectAction {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageAttachmentSelectAction.Companion>;
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
          export class ConversationMessageConnection {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageConnection>;
          }
          export module ConversationMessageConnection {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageConnection.Companion>;
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
          export class ConversationMessageEdge {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageEdge>;
          }
          export module ConversationMessageEdge {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationMessageEdge.Companion>;
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
          export class ConversationParticipant {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationParticipant>;
          }
          export module ConversationParticipant {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationParticipant.Companion>;
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
          export class ConversationPushedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationPushedSystemAttachment>;
          }
          export module ConversationPushedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationPushedSystemAttachment.Companion>;
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
          export class ConversationReleasedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationReleasedSystemAttachment>;
          }
          export module ConversationReleasedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationReleasedSystemAttachment.Companion>;
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
          export class ConversationSnoozedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationSnoozedSystemAttachment>;
          }
          export module ConversationSnoozedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationSnoozedSystemAttachment.Companion>;
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
          export class ConversationsVisitorMessages {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationsVisitorMessages>;
          }
          export module ConversationsVisitorMessages {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ConversationsVisitorMessages.Companion>;
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
            public static SLE: com.iadvize.conversation.sdk.type.Currency;
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
            public static VED: com.iadvize.conversation.sdk.type.Currency;
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
          export class DateTime {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.DateTime>;
          }
          export module DateTime {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.DateTime.Companion>;
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
          export class EngagementRuleTriggeredSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EngagementRuleTriggeredSystemAttachment>;
          }
          export module EngagementRuleTriggeredSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EngagementRuleTriggeredSystemAttachment.Companion>;
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
          export class EscalationAcceptedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationAcceptedAttachment>;
          }
          export module EscalationAcceptedAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationAcceptedAttachment.Companion>;
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
          export class EscalationEndReason {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationEndReason>;
            public static c: com.iadvize.conversation.sdk.type.EscalationEndReason;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.EscalationEndReason>;
            public b(): string;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.EscalationEndReason;
          }
          export module EscalationEndReason {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationEndReason.Companion>;
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
          export class EscalationEndedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationEndedAttachment>;
          }
          export module EscalationEndedAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationEndedAttachment.Companion>;
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
          export class EscalationInvitationSentAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationInvitationSentAttachment>;
          }
          export module EscalationInvitationSentAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationInvitationSentAttachment.Companion>;
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
          export class EscalationType {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationType>;
            public static c: com.iadvize.conversation.sdk.type.EscalationType;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.EscalationType;
            public b(): string;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.EscalationType>;
          }
          export module EscalationType {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.EscalationType.Companion>;
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
          export class Expert {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Expert>;
          }
          export module Expert {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Expert.Companion>;
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
          export class FailedApplePayPaymentResponseAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.FailedApplePayPaymentResponseAttachment>;
          }
          export module FailedApplePayPaymentResponseAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.FailedApplePayPaymentResponseAttachment.Companion>;
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
          export class FailedAuthenticationResponseAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.FailedAuthenticationResponseAttachment>;
          }
          export module FailedAuthenticationResponseAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.FailedAuthenticationResponseAttachment.Companion>;
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
          export class FileAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.FileAttachment>;
          }
          export module FileAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.FileAttachment.Companion>;
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
          export class FileBundleAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.FileBundleAttachment>;
          }
          export module FileBundleAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.FileBundleAttachment.Companion>;
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
          export class GraphQLBoolean {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLBoolean>;
          }
          export module GraphQLBoolean {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLBoolean.Companion>;
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
          export class GraphQLFloat {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLFloat>;
          }
          export module GraphQLFloat {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLFloat.Companion>;
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
          export class GraphQLID {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLID>;
          }
          export module GraphQLID {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLID.Companion>;
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
          export class GraphQLInt {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLInt>;
          }
          export module GraphQLInt {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLInt.Companion>;
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
          export class GraphQLString {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLString>;
          }
          export module GraphQLString {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.GraphQLString.Companion>;
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
          export class HungUpAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.HungUpAttachment>;
          }
          export module HungUpAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.HungUpAttachment.Companion>;
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
          export class IbbuManager {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.IbbuManager>;
          }
          export module IbbuManager {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.IbbuManager.Companion>;
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
          export class ImageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ImageAttachment>;
          }
          export module ImageAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ImageAttachment.Companion>;
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
      export module sdk {
        export module type {
          export class LegacyId {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.LegacyId>;
          }
          export module LegacyId {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.LegacyId.Companion>;
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
          export class LinkAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.LinkAttachment>;
          }
          export module LinkAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.LinkAttachment.Companion>;
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
          export class ListPickerAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ListPickerAttachment>;
          }
          export module ListPickerAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ListPickerAttachment.Companion>;
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
          export class ListPickerResponseAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ListPickerResponseAttachment>;
          }
          export module ListPickerResponseAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ListPickerResponseAttachment.Companion>;
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
          export class LiveAgentRequestedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.LiveAgentRequestedAttachment>;
          }
          export module LiveAgentRequestedAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.LiveAgentRequestedAttachment.Companion>;
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
          export class MobileDevicePlatform {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.MobileDevicePlatform>;
            public static b: com.iadvize.conversation.sdk.type.MobileDevicePlatform;
            public static c: com.iadvize.conversation.sdk.type.MobileDevicePlatform;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.MobileDevicePlatform;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.MobileDevicePlatform>;
            public a(): string;
          }
          export module MobileDevicePlatform {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.MobileDevicePlatform.Companion>;
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
          export class MobilePushToken {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.MobilePushToken>;
          }
          export module MobilePushToken {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.MobilePushToken.Companion>;
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
          export class Mutation {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Mutation>;
          }
          export module Mutation {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Mutation.Companion>;
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
          export class NavigationChangedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.NavigationChangedSystemAttachment>;
          }
          export module NavigationChangedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.NavigationChangedSystemAttachment.Companion>;
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
          export class OfferAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.OfferAttachment>;
          }
          export module OfferAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.OfferAttachment.Companion>;
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
          export class OutboundMessageSentSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.OutboundMessageSentSystemAttachment>;
          }
          export module OutboundMessageSentSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.OutboundMessageSentSystemAttachment.Companion>;
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
          export class PageInfo {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.PageInfo>;
          }
          export module PageInfo {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.PageInfo.Companion>;
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
          export class ParticipantConversationMessage {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ParticipantConversationMessage>;
          }
          export module ParticipantConversationMessage {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ParticipantConversationMessage.Companion>;
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
          export class PickedUpAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.PickedUpAttachment>;
          }
          export module PickedUpAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.PickedUpAttachment.Companion>;
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
          export class ProductAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ProductAttachment>;
          }
          export module ProductAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ProductAttachment.Companion>;
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
          export class ProductOfferAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ProductOfferAttachment>;
          }
          export module ProductOfferAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ProductOfferAttachment.Companion>;
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
          export class ProductOfferBundleAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ProductOfferBundleAttachment>;
          }
          export module ProductOfferBundleAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ProductOfferBundleAttachment.Companion>;
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
          export class Professional {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Professional>;
          }
          export module Professional {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Professional.Companion>;
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
          export class Project {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Project>;
          }
          export module Project {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Project.Companion>;
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
          export class ProjectSettings {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ProjectSettings>;
          }
          export module ProjectSettings {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ProjectSettings.Companion>;
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
          export class Query {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Query>;
          }
          export module Query {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Query.Companion>;
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
          export class QuickReplyMenuAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.QuickReplyMenuAttachment>;
          }
          export module QuickReplyMenuAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.QuickReplyMenuAttachment.Companion>;
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
          export class ResumeMessageSentSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ResumeMessageSentSystemAttachment>;
          }
          export module ResumeMessageSentSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ResumeMessageSentSystemAttachment.Companion>;
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
          export class SDKRegisterTransactionConcluded {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKRegisterTransactionConcluded>;
          }
          export module SDKRegisterTransactionConcluded {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKRegisterTransactionConcluded.Companion>;
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
          export class SDKTransactionInput {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKTransactionInput>;
            public constructor(param0: string, param1: java.util.Date, param2: number, param3: com.iadvize.conversation.sdk.type.Currency);
            public a(): number;
            public b(): com.iadvize.conversation.sdk.type.Currency;
            public c(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public d(): java.util.Date;
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
          export class SDKUploadUrls {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKUploadUrls>;
          }
          export module SDKUploadUrls {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKUploadUrls.Companion>;
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
          export class SDKVisitorConsent {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKVisitorConsent>;
          }
          export module SDKVisitorConsent {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SDKVisitorConsent.Companion>;
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
          export class Source {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Source>;
            public static b: com.iadvize.conversation.sdk.type.Source;
            public static c: com.iadvize.conversation.sdk.type.Source;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.Source;
            public a(): string;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.Source>;
          }
          export module Source {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Source.Companion>;
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
          export class SuccessfulApplePayPaymentResponseAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SuccessfulApplePayPaymentResponseAttachment>;
          }
          export module SuccessfulApplePayPaymentResponseAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SuccessfulApplePayPaymentResponseAttachment.Companion>;
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
          export class SuccessfulAuthenticationResponseAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SuccessfulAuthenticationResponseAttachment>;
          }
          export module SuccessfulAuthenticationResponseAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SuccessfulAuthenticationResponseAttachment.Companion>;
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
          export class SupervisorCommentSentSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SupervisorCommentSentSystemAttachment>;
          }
          export module SupervisorCommentSentSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SupervisorCommentSentSystemAttachment.Companion>;
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
          export class SurveyMessageSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SurveyMessageSystemAttachment>;
          }
          export module SurveyMessageSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SurveyMessageSystemAttachment.Companion>;
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
          export class SurveyMultiChoiceQuestionSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SurveyMultiChoiceQuestionSystemAttachment>;
          }
          export module SurveyMultiChoiceQuestionSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SurveyMultiChoiceQuestionSystemAttachment.Companion>;
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
          export class SurveyQuestionSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SurveyQuestionSystemAttachment>;
          }
          export module SurveyQuestionSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SurveyQuestionSystemAttachment.Companion>;
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
          export class SystemConversationMessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SystemConversationMessageAttachment>;
          }
          export module SystemConversationMessageAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SystemConversationMessageAttachment.Companion>;
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
          export class SystemMessage {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SystemMessage>;
          }
          export module SystemMessage {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.SystemMessage.Companion>;
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
          export class TargetingRule {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TargetingRule>;
          }
          export module TargetingRule {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TargetingRule.Companion>;
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
          export class TargetingRuleTriggerPayload {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TargetingRuleTriggerPayload>;
          }
          export module TargetingRuleTriggerPayload {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TargetingRuleTriggerPayload.Companion>;
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
          export class ThirdPartyAccount {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ThirdPartyAccount>;
          }
          export module ThirdPartyAccount {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.ThirdPartyAccount.Companion>;
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
          export class TimePickerAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TimePickerAttachment>;
          }
          export module TimePickerAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TimePickerAttachment.Companion>;
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
          export class TimePickerResponseAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TimePickerResponseAttachment>;
          }
          export module TimePickerResponseAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TimePickerResponseAttachment.Companion>;
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
          export class TransferredToRoutingRuleSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TransferredToRoutingRuleSystemAttachment>;
          }
          export module TransferredToRoutingRuleSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TransferredToRoutingRuleSystemAttachment.Companion>;
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
          export class TransferredToUserSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TransferredToUserSystemAttachment>;
          }
          export module TransferredToUserSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.TransferredToUserSystemAttachment.Companion>;
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
          export class URI {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.URI>;
          }
          export module URI {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.URI.Companion>;
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
          export class URL {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.URL>;
          }
          export module URL {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.URL.Companion>;
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
          export class UUID {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.UUID>;
          }
          export module UUID {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.UUID.Companion>;
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
          export class UnsupportedAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.UnsupportedAttachment>;
          }
          export module UnsupportedAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.UnsupportedAttachment.Companion>;
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
          export class UnsupportedSystemMessageAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.UnsupportedSystemMessageAttachment>;
          }
          export module UnsupportedSystemMessageAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.UnsupportedSystemMessageAttachment.Companion>;
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
          export class User {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.User>;
          }
          export module User {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.User.Companion>;
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
          export class VideoAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VideoAttachment>;
          }
          export module VideoAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VideoAttachment.Companion>;
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
          export class Visitor {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Visitor>;
          }
          export module Visitor {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.Visitor.Companion>;
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
          export class VisitorAuthenticateAnonymouslyPayload {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorAuthenticateAnonymouslyPayload>;
          }
          export module VisitorAuthenticateAnonymouslyPayload {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorAuthenticateAnonymouslyPayload.Companion>;
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
          export class VisitorAuthenticateFromCredentialsPayload {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorAuthenticateFromCredentialsPayload>;
          }
          export module VisitorAuthenticateFromCredentialsPayload {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorAuthenticateFromCredentialsPayload.Companion>;
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
          export class VisitorAuthenticateFromCustomerUserIdPayload {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorAuthenticateFromCustomerUserIdPayload>;
          }
          export module VisitorAuthenticateFromCustomerUserIdPayload {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorAuthenticateFromCustomerUserIdPayload.Companion>;
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
          export class VisitorBlockedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorBlockedSystemAttachment>;
          }
          export module VisitorBlockedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorBlockedSystemAttachment.Companion>;
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
          export class VisitorConversationCustomData {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomData>;
          }
          export module VisitorConversationCustomData {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomData.Companion>;
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
          export class VisitorConversationCustomDataEntry {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntry>;
          }
          export module VisitorConversationCustomDataEntry {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntry.Companion>;
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
          export class VisitorConversationCustomDataEntryBoolean {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntryBoolean>;
          }
          export module VisitorConversationCustomDataEntryBoolean {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntryBoolean.Companion>;
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
          export class VisitorConversationCustomDataEntryFloat {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntryFloat>;
          }
          export module VisitorConversationCustomDataEntryFloat {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntryFloat.Companion>;
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
          export class VisitorConversationCustomDataEntryInt {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntryInt>;
          }
          export module VisitorConversationCustomDataEntryInt {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntryInt.Companion>;
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
          export class VisitorConversationCustomDataEntryString {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntryString>;
          }
          export module VisitorConversationCustomDataEntryString {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataEntryString.Companion>;
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
          export class VisitorConversationCustomDataInput {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataInput>;
            public c(): com.apollographql.apollo3.api.Optional;
            public e(): com.apollographql.apollo3.api.Optional;
            public b(): com.apollographql.apollo3.api.Optional;
            public d(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public a(): com.apollographql.apollo3.api.Optional;
            public constructor(param0: string, param1: com.apollographql.apollo3.api.Optional, param2: com.apollographql.apollo3.api.Optional, param3: com.apollographql.apollo3.api.Optional, param4: com.apollographql.apollo3.api.Optional);
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
          export class VisitorLeftSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorLeftSystemAttachment>;
          }
          export module VisitorLeftSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorLeftSystemAttachment.Companion>;
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
          export class VisitorNotificationSettingsConfirmedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorNotificationSettingsConfirmedSystemAttachment>;
          }
          export module VisitorNotificationSettingsConfirmedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorNotificationSettingsConfirmedSystemAttachment.Companion>;
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
          export class VisitorNotificationSettingsRequestedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorNotificationSettingsRequestedSystemAttachment>;
          }
          export module VisitorNotificationSettingsRequestedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorNotificationSettingsRequestedSystemAttachment.Companion>;
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
          export class VisitorNotificationSettingsSetSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorNotificationSettingsSetSystemAttachment>;
          }
          export module VisitorNotificationSettingsSetSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorNotificationSettingsSetSystemAttachment.Companion>;
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
          export class VisitorReturnedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorReturnedSystemAttachment>;
          }
          export module VisitorReturnedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorReturnedSystemAttachment.Companion>;
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
          export class VisitorSessionToken {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorSessionToken>;
          }
          export module VisitorSessionToken {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorSessionToken.Companion>;
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
          export class VisitorVideoTokenPayload {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorVideoTokenPayload>;
          }
          export module VisitorVideoTokenPayload {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.VisitorVideoTokenPayload.Companion>;
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
          export class WaitingTimeEstimatedSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.WaitingTimeEstimatedSystemAttachment>;
          }
          export module WaitingTimeEstimatedSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.WaitingTimeEstimatedSystemAttachment.Companion>;
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
          export class WaitingTimeEstimationType {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.WaitingTimeEstimationType>;
            public static c: com.iadvize.conversation.sdk.type.WaitingTimeEstimationType;
            public b(): string;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.WaitingTimeEstimationType;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.WaitingTimeEstimationType>;
          }
          export module WaitingTimeEstimationType {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.WaitingTimeEstimationType.Companion>;
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
          export class WaitingTimeExceededSystemAttachment {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.WaitingTimeExceededSystemAttachment>;
          }
          export module WaitingTimeExceededSystemAttachment {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.WaitingTimeExceededSystemAttachment.Companion>;
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
          export class WaitingTimeReplyType {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.type.WaitingTimeReplyType>;
            public static c: com.iadvize.conversation.sdk.type.WaitingTimeReplyType;
            public static valueOf(param0: string): com.iadvize.conversation.sdk.type.WaitingTimeReplyType;
            public b(): string;
            public static values(): androidNative.Array<com.iadvize.conversation.sdk.type.WaitingTimeReplyType>;
          }
          export module WaitingTimeReplyType {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.WaitingTimeReplyType.Companion>;
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
          export module adapter {
            export class ApplicationMode_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.ApplicationMode> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.ApplicationMode_ResponseAdapter>;
              public static a: com.iadvize.conversation.sdk.type.adapter.ApplicationMode_ResponseAdapter;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class CardBundleAttachmentActionType_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.CardBundleAttachmentActionType> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.CardBundleAttachmentActionType_ResponseAdapter>;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class Channel_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.Channel> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.Channel_ResponseAdapter>;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class Currency_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.Currency> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.Currency_ResponseAdapter>;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class EscalationEndReason_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.EscalationEndReason> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.EscalationEndReason_ResponseAdapter>;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class EscalationType_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.EscalationType> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.EscalationType_ResponseAdapter>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.type.EscalationType;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class Language_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.Language> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.Language_ResponseAdapter>;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class MobileDevicePlatform_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.MobileDevicePlatform> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.MobileDevicePlatform_ResponseAdapter>;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class SDKTransactionInput_InputAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.SDKTransactionInput> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.SDKTransactionInput_InputAdapter>;
              public static a: com.iadvize.conversation.sdk.type.adapter.SDKTransactionInput_InputAdapter;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class Source_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.Source> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.Source_ResponseAdapter>;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class VisitorConversationCustomDataInput_InputAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.VisitorConversationCustomDataInput> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.VisitorConversationCustomDataInput_InputAdapter>;
              public static a: com.iadvize.conversation.sdk.type.adapter.VisitorConversationCustomDataInput_InputAdapter;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class WaitingTimeEstimationType_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.WaitingTimeEstimationType> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.WaitingTimeEstimationType_ResponseAdapter>;
              public fromJson(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): any;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
          export module adapter {
            export class WaitingTimeReplyType_ResponseAdapter extends com.apollographql.apollo3.api.Adapter<com.iadvize.conversation.sdk.type.WaitingTimeReplyType> {
              public static class: java.lang.Class<com.iadvize.conversation.sdk.type.adapter.WaitingTimeReplyType_ResponseAdapter>;
              public static a(param0: com.apollographql.apollo3.api.json.JsonReader, param1: com.apollographql.apollo3.api.CustomScalarAdapters): com.iadvize.conversation.sdk.type.WaitingTimeReplyType;
              public toJson(param0: com.apollographql.apollo3.api.json.JsonWriter, param1: com.apollographql.apollo3.api.CustomScalarAdapters, param2: any): void;
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
        export module utility {
          export class CloseableCoroutineScope {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.utility.CloseableCoroutineScope>;
            public close(): void;
            public getCoroutineContext(): any;
            public constructor(param0: any);
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
        export module utility {
          export class EventBus {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.utility.EventBus>;
            public static a(param0: any, param1: any): any;
            public static b(): kotlinx.coroutines.flow.MutableSharedFlow;
            public static c(): com.iadvize.conversation.sdk.utility.CloseableCoroutineScope;
            public static a(): java.util.LinkedHashMap<any, any>;
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
        export module utility {
          export class SecurityProvider {
            public static class: java.lang.Class<com.iadvize.conversation.sdk.utility.SecurityProvider>;
            public static a: com.iadvize.conversation.sdk.utility.SecurityProvider;
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
          export class GenericCardBundleMessageAdapter implements com.iadvize.conversation.ui.views.GenericCardView.GenericCardClickListener {
            public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.GenericCardBundleMessageAdapter>;
            public constructor(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<any>, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: com.iadvize.conversation.ui.utils.Alignment, param4: com.iadvize.conversation.ui.utils.Position, param5: com.iadvize.conversation.ui.models.ConversationConfiguration);
            public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
            public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
            public getCount(): number;
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
          export class MessageDiffCallback {
            public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageDiffCallback>;
            public getNewListSize(): number;
            public constructor(param0: java.util.List<any>, param1: java.util.List<any>);
            public areItemsTheSame(param0: number, param1: number): boolean;
            public areContentsTheSame(param0: number, param1: number): boolean;
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
          export class MessageRecyclerViewAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<androidx.recyclerview.widget.RecyclerView.ViewHolder> {
            public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter>;
            public onViewRecycled(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder): void;
            public getItem(param0: number): com.iadvize.conversation.ui.models.Message;
            public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.Message>, param1: number, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: com.iadvize.conversation.ui.models.ConversationConfiguration);
            public getItemViewType(param0: number): number;
            public getMessages(): java.util.List<com.iadvize.conversation.ui.models.Message>;
            public getItemCount(): number;
            public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
            public getHighlight(): com.iadvize.conversation.ui.models.Highlight;
            public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
            public setMessages(param0: java.util.List<any>, param1: boolean): void;
            public setMessages(param0: java.util.List<com.iadvize.conversation.ui.models.Message>): void;
            public setHighlight(param0: com.iadvize.conversation.ui.models.Highlight): void;
          }
          export module MessageRecyclerViewAdapter {
            export class MessageItemType {
              public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
              public static TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static MARKDOWN_TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static PREVIEW_LINK_TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static PREVIEW_LINK_MARKDOWN_TEXT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
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
              public static APPLE_PAY_PAYMENT: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static WAITING_TIME: com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
              public static values(): androidNative.Array<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType>;
              public static valueOf(param0: string): com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.MessageItemType;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.MessageRecyclerViewAdapter.WhenMappings>;
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
          export class ProductOfferBundleMessageAdapter implements com.iadvize.conversation.ui.views.ProductOfferView.ProductOfferClickListener {
            public static class: java.lang.Class<com.iadvize.conversation.ui.adapters.ProductOfferBundleMessageAdapter>;
            public constructor(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<any>, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: com.iadvize.conversation.ui.utils.Alignment, param4: com.iadvize.conversation.ui.utils.Position, param5: com.iadvize.conversation.ui.models.ConversationConfiguration);
            public isViewFromObject(param0: globalAndroid.view.View, param1: any): boolean;
            public destroyItem(param0: globalAndroid.view.ViewGroup, param1: number, param2: any): void;
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
          export class ApplePayPayment {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.ApplePayPayment>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.ApplePayPayment>;
            public getLineItems(): java.util.List<com.iadvize.conversation.ui.models.LineItem>;
            public getTotal(): com.iadvize.conversation.ui.models.LineItem;
            public getShippingMethods(): java.util.List<com.iadvize.conversation.ui.models.ApplePayShippingMethod>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getCurrencyCode(): string;
            public getRequiredShippingContactFields(): java.util.List<string>;
            public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.ui.models.LineItem>, param2: com.iadvize.conversation.ui.models.LineItem, param3: java.util.List<string>, param4: java.util.List<string>, param5: java.util.List<com.iadvize.conversation.ui.models.ApplePayShippingMethod>);
            public getRequiredBillingContactFields(): java.util.List<string>;
          }
          export module ApplePayPayment {
            export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.ApplePayPayment> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.ApplePayPayment.Creator>;
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
          export class ApplePayShippingMethod {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.ApplePayShippingMethod>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.ApplePayShippingMethod>;
            public constructor(param0: string, param1: string, param2: string, param3: string);
            public describeContents(): number;
            public getLabel(): string;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getAmount(): string;
            public getIdentifier(): string;
            public getDetail(): string;
          }
          export module ApplePayShippingMethod {
            export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.ApplePayShippingMethod> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.ApplePayShippingMethod.Creator>;
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
          export class ConversationConfiguration {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.ConversationConfiguration>;
            public getIncomingMessageConfiguration(): com.iadvize.conversation.ui.models.MessageConfiguration;
            public getAccentColor(): number;
            public strokeColorFor(param0: com.iadvize.conversation.ui.models.Message): java.lang.Integer;
            public constructor(param0: string, param1: globalAndroid.graphics.Typeface, param2: com.iadvize.conversation.ui.models.MessageConfiguration, param3: com.iadvize.conversation.ui.models.MessageConfiguration, param4: number);
            public getTypeface(): globalAndroid.graphics.Typeface;
            public textColorFor(param0: com.iadvize.conversation.ui.models.Message): number;
            public getSenderId(): string;
            public getOutgoingMessageConfiguration(): com.iadvize.conversation.ui.models.MessageConfiguration;
            public backgroundColorFor(param0: globalAndroid.content.Context, param1: com.iadvize.conversation.ui.models.Message): number;
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
          export abstract class Highlight {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.Highlight>;
          }
          export module Highlight {
            export class Actions extends com.iadvize.conversation.ui.models.Highlight {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.Highlight.Actions>;
            }
            export module Actions {
              export class Action {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.Highlight.Actions.Action>;
                public toString(): string;
                public equals(param0: any): boolean;
                public hashCode(): number;
              }
            }
            export class Search extends com.iadvize.conversation.ui.models.Highlight {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.Highlight.Search>;
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
            export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Language> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.Language.Creator>;
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
            export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.LanguageSettings> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.LanguageSettings.Creator>;
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
          export class LineItem {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.LineItem>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.LineItem>;
            public describeContents(): number;
            public constructor(param0: string, param1: string, param2: string);
            public getType(): string;
            public getLabel(): string;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getAmount(): string;
          }
          export module LineItem {
            export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.LineItem> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.LineItem.Creator>;
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
          export class LoadPastConversationMessage extends com.iadvize.conversation.ui.models.Message {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.LoadPastConversationMessage>;
            public constructor();
            public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind, param4: com.iadvize.conversation.ui.models.MessageState, param5: boolean, param6: java.util.List<any>);
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
            public isRightAlignment(): boolean;
            public getMessageState(): com.iadvize.conversation.ui.models.MessageState;
            public constructor(param0: string, param1: com.iadvize.conversation.ui.models.Sender, param2: java.util.Date, param3: com.iadvize.conversation.ui.models.MessageKind, param4: com.iadvize.conversation.ui.models.MessageState, param5: boolean, param6: java.util.List<any>);
            public equals(param0: any): boolean;
            public hashCode(): number;
            public isLastMessageOfGroup(param0: com.iadvize.conversation.ui.models.Message): boolean;
            public isLeftAlignment(): boolean;
            public isAloneOnGroup(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message): boolean;
            public isSameDays(param0: com.iadvize.conversation.ui.models.Message): boolean;
            public getSender(): com.iadvize.conversation.ui.models.Sender;
            public getMessageKind(): com.iadvize.conversation.ui.models.MessageKind;
            public getForceAloneInGroup(): boolean;
            public getId(): string;
            public getMessageSideActions(): java.util.List<com.iadvize.conversation.ui.models.MessageSideAction>;
            public getVerticalPosition(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message): com.iadvize.conversation.ui.utils.Position;
            public getSentDate(): java.util.Date;
            public setForceAloneInGroup(param0: boolean): void;
            public isFirstMessageOfGroup(param0: com.iadvize.conversation.ui.models.Message): boolean;
          }
          export module Message {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.Message.Companion>;
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
            export class ApplePayPaymentFailed extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ApplePayPaymentFailed>;
              public static TYPE_NAME: string;
              public constructor(param0: string);
              public getCorrelationId(): string;
            }
            export module ApplePayPaymentFailed {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ApplePayPaymentFailed.Companion>;
              }
            }
            export class ApplePayPaymentRequested extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ApplePayPaymentRequested>;
              public static TYPE_NAME: string;
              public constructor(param0: string, param1: com.iadvize.conversation.ui.models.ApplePayPayment, param2: com.iadvize.conversation.ui.models.ReceivedMessage);
              public getReceivedMessage(): com.iadvize.conversation.ui.models.ReceivedMessage;
              public getCorrelationId(): string;
              public getPayment(): com.iadvize.conversation.ui.models.ApplePayPayment;
            }
            export module ApplePayPaymentRequested {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ApplePayPaymentRequested.Companion>;
              }
            }
            export class ApplePayPaymentSuccess extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ApplePayPaymentSuccess>;
              public static TYPE_NAME: string;
              public constructor(param0: string);
              public getCorrelationId(): string;
            }
            export module ApplePayPaymentSuccess {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ApplePayPaymentSuccess.Companion>;
              }
            }
            export class Card extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Card>;
              public static TYPE_NAME: string;
              public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.CardImage;
              public getText(): string;
              public getActions(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>;
              public getTitle(): string;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.CardImage, param1: string, param2: string, param3: androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Action>);
            }
            export module Card {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Card.Companion>;
              }
            }
            export class CardBundle extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardBundle>;
              public static TYPE_NAME: string;
              public getTitle(): string;
              public getCards(): java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.Card>;
              public getActionType(): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
              public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.Card>, param2: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
            }
            export module CardBundle {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardBundle.Companion>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.CardImage> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.CardImage.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Companion>;
              public parseFromXMPP(param0: string): com.iadvize.conversation.ui.models.MessageAttachment;
            }
            export abstract class Escalation extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation>;
              public getType(): com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
              public getCorrelationId(): string;
            }
            export module Escalation {
              export class Accept extends com.iadvize.conversation.ui.models.MessageAttachment.Escalation {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Accept>;
                public static TYPE_NAME: string;
                public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string);
              }
              export module Accept {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Accept.Companion>;
                }
              }
              export class Ended extends com.iadvize.conversation.ui.models.MessageAttachment.Escalation {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Ended>;
                public static TYPE_NAME: string;
                public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string, param2: string);
                public getReason(): string;
              }
              export module Ended {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Ended.Companion>;
                }
              }
              export class EscalationType {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType>;
                public static VOICE: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
                public static VIDEO: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
                public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
                public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType>;
              }
              export module EscalationType {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType.Companion>;
                  public static a(param0: string): com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType;
                }
              }
              export class Invitation extends com.iadvize.conversation.ui.models.MessageAttachment.Escalation {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Invitation>;
                public static TYPE_NAME: string;
                public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Escalation.EscalationType, param1: string);
              }
              export module Invitation {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Escalation.Invitation.Companion>;
                }
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.File> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.File.Creator>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.Image> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Image.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Link extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Link>;
              public static TYPE_NAME: string;
              public getUrl(): string;
              public constructor(param0: string, param1: string);
              public getName(): string;
            }
            export module Link {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Link.Companion>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.LinkAction.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class LiveAgentRequested extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.LiveAgentRequested>;
              public static TYPE_NAME: string;
              public constructor();
            }
            export module LiveAgentRequested {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.LiveAgentRequested.Companion>;
              }
            }
            export class Offer extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Offer>;
              public static TYPE_NAME: string;
              public getUrl(): string;
              public constructor(param0: string, param1: string);
              public getDescription(): string;
            }
            export module Offer {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Offer.Companion>;
              }
            }
            export class Product extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Product>;
              public static TYPE_NAME: string;
              public getProductUrl(): string;
              public constructor(param0: string, param1: string);
              public getTitle(): string;
            }
            export module Product {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Product.Companion>;
              }
            }
            export class ProductOffer extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>;
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
                export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability> {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Availability.Creator>;
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
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer.Companion>;
              }
            }
            export class ProductOfferBundle extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOfferBundle>;
              public static TYPE_NAME: string;
              public constructor(param0: java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>);
              public getProductOffers(): java.util.List<com.iadvize.conversation.ui.models.MessageAttachment.ProductOffer>;
            }
            export module ProductOfferBundle {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.ProductOfferBundle.Companion>;
              }
            }
            export class QuickReplyMenu extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.QuickReplyMenu>;
              public static TYPE_NAME: string;
              public constructor(param0: string, param1: androidNative.Array<string>);
              public getMessage(): string;
              public getChoices(): androidNative.Array<string>;
            }
            export module QuickReplyMenu {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.QuickReplyMenu.Companion>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.SelectAction.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Unsupported extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Unsupported>;
              public constructor();
            }
            export abstract class Video extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video>;
              public getCorrelationId(): string;
            }
            export module Video {
              export class HungUp extends com.iadvize.conversation.ui.models.MessageAttachment.Video {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video.HungUp>;
                public static TYPE_NAME: string;
                public constructor(param0: string);
              }
              export module HungUp {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video.HungUp.Companion>;
                }
              }
              export class PickedUp extends com.iadvize.conversation.ui.models.MessageAttachment.Video {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video.PickedUp>;
                public static TYPE_NAME: string;
                public constructor(param0: string);
              }
              export module PickedUp {
                export class Companion {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.Video.PickedUp.Companion>;
                }
              }
            }
            export class WaitingTimeEstimated extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.WaitingTimeEstimated>;
              public static TYPE_NAME: string;
              public getContent(): string;
              public constructor(param0: string, param1: com.iadvize.conversation.ui.models.WaitingTimeReplyType, param2: com.iadvize.conversation.ui.models.WaitingTimeEstimationType);
              public getEstimationType(): com.iadvize.conversation.ui.models.WaitingTimeEstimationType;
              public getReplyType(): com.iadvize.conversation.ui.models.WaitingTimeReplyType;
            }
            export module WaitingTimeEstimated {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.WaitingTimeEstimated.Companion>;
              }
            }
            export class WaitingTimeExceeded extends com.iadvize.conversation.ui.models.MessageAttachment {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.WaitingTimeExceeded>;
              public static TYPE_NAME: string;
              public getContent(): string;
              public constructor(param0: string, param1: com.iadvize.conversation.ui.models.WaitingTimeReplyType);
              public getReplyType(): com.iadvize.conversation.ui.models.WaitingTimeReplyType;
            }
            export module WaitingTimeExceeded {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageAttachment.WaitingTimeExceeded.Companion>;
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
          export class MessageConfiguration {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageConfiguration>;
            public getStrokeColor(): java.lang.Integer;
            public getBackgroundColor(): java.lang.Integer;
            public constructor(param0: java.lang.Integer, param1: number, param2: java.lang.Integer);
            public getTextColor(): number;
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
            export abstract class ApplePayPayment extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment>;
            }
            export module ApplePayPayment {
              export class Failed extends com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Failed>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Failed>;
                public describeContents(): number;
                public getText(): string;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public constructor(param0: string);
              }
              export module Failed {
                export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Failed> {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Failed.Creator>;
                  public newArray(param0: number): androidNative.Array<any>;
                  public constructor();
                  public createFromParcel(param0: globalAndroid.os.Parcel): any;
                }
              }
              export class Request extends com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Request>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Request>;
                public describeContents(): number;
                public constructor(param0: string, param1: java.util.List<any>);
                public getTitle(): string;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public getItems(): java.util.List<any>;
              }
              export module Request {
                export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Request> {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Request.Creator>;
                  public newArray(param0: number): androidNative.Array<any>;
                  public constructor();
                  public createFromParcel(param0: globalAndroid.os.Parcel): any;
                }
              }
              export class Succeeded extends com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Succeeded>;
                public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Succeeded>;
                public describeContents(): number;
                public getText(): string;
                public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
                public constructor(param0: string);
              }
              export module Succeeded {
                export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Succeeded> {
                  public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ApplePayPayment.Succeeded.Creator>;
                  public newArray(param0: number): androidNative.Array<any>;
                  public constructor();
                  public createFromParcel(param0: globalAndroid.os.Parcel): any;
                }
              }
            }
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Card> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Card.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class CardBundle extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.CardBundle>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.CardBundle>;
              public constructor(param0: string, param1: java.util.List<com.iadvize.conversation.ui.models.MessageKind.Card>, param2: com.iadvize.conversation.ui.models.MessageAttachment.ActionType);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public getTitle(): string;
              public getCards(): java.util.List<com.iadvize.conversation.ui.models.MessageKind.Card>;
              public getActionType(): com.iadvize.conversation.ui.models.MessageAttachment.ActionType;
            }
            export module CardBundle {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.CardBundle> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.CardBundle.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class File extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.File>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.File>;
              public getFile(): com.iadvize.conversation.ui.models.MessageAttachment.File;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.File);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
            export module File {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.File> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.File.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Image extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Image>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Image>;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.File);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageAttachment.Image);
              public getImage(): com.iadvize.conversation.ui.models.MessageAttachment.Image;
            }
            export module Image {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Image> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Image.Creator>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LinkSent> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LinkSent.Creator>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.LoadPastConversation.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class MarkdownText extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.MarkdownText>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.MarkdownText>;
              public getContent(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string);
              public describeContents(): number;
            }
            export module MarkdownText {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.MarkdownText> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.MarkdownText.Creator>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOffer> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOffer.Creator>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.ProductOfferBundle.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class QuickReply extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.QuickReply>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.QuickReply>;
              public constructor(param0: string, param1: androidNative.Array<string>, param2: boolean);
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
              public getClickable(): boolean;
              public getMessage(): string;
              public getChoices(): androidNative.Array<string>;
            }
            export module QuickReply {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.QuickReply> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.QuickReply.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Snooze extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Snooze>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Snooze>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string);
              public describeContents(): number;
              public getFromName(): string;
            }
            export module Snooze {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Snooze> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Snooze.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class System extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.System>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.System>;
              public getContent(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string);
              public describeContents(): number;
            }
            export module System {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.System> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.System.Creator>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Text> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Text.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Transfer extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Transfer>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Transfer>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string, param1: string);
              public describeContents(): number;
              public getFromName(): string;
              public getReason(): string;
            }
            export module Transfer {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Transfer> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Transfer.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class Translated extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Translated>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Translated>;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public getTranslation(): com.iadvize.conversation.ui.models.Translation;
              public describeContents(): number;
              public constructor(param0: com.iadvize.conversation.ui.models.Translation);
            }
            export module Translated {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.Translated> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.Translated.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class TypingIndicator extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TypingIndicator>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TypingIndicator>;
              public constructor(param0: string, param1: boolean);
              public isComposing(): boolean;
              public getContent(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public describeContents(): number;
            }
            export module TypingIndicator {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.TypingIndicator> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.TypingIndicator.Creator>;
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
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.VideoEscalation.Creator>;
                public createFromParcel(param0: globalAndroid.os.Parcel): any;
                public constructor();
                public newArray(param0: number): androidNative.Array<any>;
              }
            }
            export class WaitingTime extends com.iadvize.conversation.ui.models.MessageKind {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.WaitingTime>;
              public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.WaitingTime>;
              public getContent(): string;
              public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
              public constructor(param0: string, param1: com.iadvize.conversation.ui.models.WaitingTimeReplyType, param2: com.iadvize.conversation.ui.models.WaitingTimeEstimationType);
              public describeContents(): number;
              public getEstimationType(): com.iadvize.conversation.ui.models.WaitingTimeEstimationType;
              public getReplyType(): com.iadvize.conversation.ui.models.WaitingTimeReplyType;
            }
            export module WaitingTime {
              export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.MessageKind.WaitingTime> {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageKind.WaitingTime.Creator>;
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
          export abstract class MessageSideAction {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageSideAction>;
          }
          export module MessageSideAction {
            export class BottomAction extends com.iadvize.conversation.ui.models.MessageSideAction {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageSideAction.BottomAction>;
              public getIcon(): globalAndroid.graphics.drawable.Drawable;
              public getLabel(): string;
              public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: string, param2: number);
              public getActionId(): number;
            }
            export class FeedbackLoop extends com.iadvize.conversation.ui.models.MessageSideAction {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop>;
              public constructor();
              public setFeedback(param0: com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback): void;
              public getFeedback(): com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback;
              public constructor(param0: com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback);
            }
            export module FeedbackLoop {
              export class Feedback {
                public static class: java.lang.Class<com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback>;
                public static POSITIVE: com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback;
                public static NEGATIVE: com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback;
                public static UNDETERMINED: com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback;
                public static valueOf(param0: string): com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback;
                public static values(): androidNative.Array<com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback>;
                public getThumbUpRes(): number;
                public getThumbDownRes(): number;
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
            public constructor(param0: string, param1: string, param2: java.lang.Exception);
            public component2(): string;
            public getError(): java.lang.Exception;
            public component1(): string;
            public hashCode(): number;
            public equals(param0: any): boolean;
            public getUrl(): string;
            public component3(): java.lang.Exception;
            public copy(param0: string, param1: string, param2: java.lang.Exception): com.iadvize.conversation.ui.models.PreviewLinkError;
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
          export class ReceivedMessage {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.ReceivedMessage>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.ReceivedMessage>;
            public describeContents(): number;
            public constructor(param0: string, param1: com.iadvize.conversation.ui.models.ReceivedMessageData);
            public getType(): string;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public getData(): com.iadvize.conversation.ui.models.ReceivedMessageData;
          }
          export module ReceivedMessage {
            export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.ReceivedMessage> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.ReceivedMessage.Creator>;
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
          export class ReceivedMessageData {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.ReceivedMessageData>;
            public static CREATOR: globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.ReceivedMessageData>;
            public describeContents(): number;
            public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
            public constructor(param0: string, param1: string);
            public getText(): string;
            public getTitle(): string;
          }
          export module ReceivedMessageData {
            export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.ReceivedMessageData> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.ReceivedMessageData.Creator>;
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
            public getChannelIcon(): globalAndroid.graphics.drawable.Drawable;
          }
          export module SenderAvatar {
            export class Image extends com.iadvize.conversation.ui.models.SenderAvatar {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar.Image>;
              public getValue(): globalAndroid.graphics.drawable.Drawable;
              public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Boolean, param2: globalAndroid.graphics.drawable.Drawable);
            }
            export class NoAvatar extends com.iadvize.conversation.ui.models.SenderAvatar {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar.NoAvatar>;
              public static INSTANCE: com.iadvize.conversation.ui.models.SenderAvatar.NoAvatar;
            }
            export class Url extends com.iadvize.conversation.ui.models.SenderAvatar {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.SenderAvatar.Url>;
              public constructor(param0: java.net.URL, param1: java.lang.Boolean, param2: globalAndroid.graphics.drawable.Drawable);
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
            export class Creator extends globalAndroid.os.Parcelable.Creator<com.iadvize.conversation.ui.models.Translation> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.Translation.Creator>;
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
          export class WaitingTimeEstimationType {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.WaitingTimeEstimationType>;
            public static DATE: com.iadvize.conversation.ui.models.WaitingTimeEstimationType;
            public static DELAY: com.iadvize.conversation.ui.models.WaitingTimeEstimationType;
            public static EXCEEDED: com.iadvize.conversation.ui.models.WaitingTimeEstimationType;
            public static NOT_DETERMINED: com.iadvize.conversation.ui.models.WaitingTimeEstimationType;
            public static values(): androidNative.Array<com.iadvize.conversation.ui.models.WaitingTimeEstimationType>;
            public static valueOf(param0: string): com.iadvize.conversation.ui.models.WaitingTimeEstimationType;
          }
          export module WaitingTimeEstimationType {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.WaitingTimeEstimationType.Companion>;
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
          export class WaitingTimeReplyType {
            public static class: java.lang.Class<com.iadvize.conversation.ui.models.WaitingTimeReplyType>;
            public static FIRST_REPLY: com.iadvize.conversation.ui.models.WaitingTimeReplyType;
            public static REPLY: com.iadvize.conversation.ui.models.WaitingTimeReplyType;
            public static values(): androidNative.Array<com.iadvize.conversation.ui.models.WaitingTimeReplyType>;
            public static valueOf(param0: string): com.iadvize.conversation.ui.models.WaitingTimeReplyType;
          }
          export module WaitingTimeReplyType {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.models.WaitingTimeReplyType.Companion>;
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
        export module utils {
          export class Alignment {
            public static class: java.lang.Class<com.iadvize.conversation.ui.utils.Alignment>;
            public static a: com.iadvize.conversation.ui.utils.Alignment;
            public static b: com.iadvize.conversation.ui.utils.Alignment;
            public static valueOf(param0: string): com.iadvize.conversation.ui.utils.Alignment;
            public static values(): androidNative.Array<com.iadvize.conversation.ui.utils.Alignment>;
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
        export module utils {
          export class ConvUiTableTheme {
            public static class: java.lang.Class<com.iadvize.conversation.ui.utils.ConvUiTableTheme>;
            public constructor(param0: globalAndroid.content.Context);
            public tableCellPadding(): number;
            public applyTableOddRowStyle(param0: globalAndroid.graphics.Paint): void;
            public applyTableHeaderRowStyle(param0: globalAndroid.graphics.Paint): void;
            public applyTableEvenRowStyle(param0: globalAndroid.graphics.Paint): void;
            public tableBorderWidth(param0: globalAndroid.graphics.Paint): number;
            public applyTableBorderStyle(param0: globalAndroid.graphics.Paint): void;
          }
          export module ConvUiTableTheme {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.utils.ConvUiTableTheme.Companion>;
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
        export module utils {
          export class Position {
            public static class: java.lang.Class<com.iadvize.conversation.ui.utils.Position>;
            public static a: com.iadvize.conversation.ui.utils.Position;
            public static b: com.iadvize.conversation.ui.utils.Position;
            public static c: com.iadvize.conversation.ui.utils.Position;
            public static d: com.iadvize.conversation.ui.utils.Position;
            public static valueOf(param0: string): com.iadvize.conversation.ui.utils.Position;
            public static values(): androidNative.Array<com.iadvize.conversation.ui.utils.Position>;
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
        export module utils {
          export class Radius {
            public static class: java.lang.Class<com.iadvize.conversation.ui.utils.Radius>;
            public d(): number;
            public c(): number;
            public a(): number;
            public b(): number;
            public constructor(param0: number, param1: number, param2: number, param3: number);
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
        export module utils {
          export class RoundedTransformation {
            public static class: java.lang.Class<com.iadvize.conversation.ui.utils.RoundedTransformation>;
            public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
            public updateDiskCacheKey(param0: java.security.MessageDigest): void;
            public constructor(param0: number);
            public equals(param0: any): boolean;
            public hashCode(): number;
          }
          export module RoundedTransformation {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.utils.RoundedTransformation.Companion>;
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
        export module utils {
          export class StringUtils {
            public static class: java.lang.Class<com.iadvize.conversation.ui.utils.StringUtils>;
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
          export class ApplePayPaymentMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.ApplePayPaymentMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
          }
          export module ApplePayPaymentMessageViewHolder {
            export class PaymentItemsAdapter extends androidx.recyclerview.widget.RecyclerView.Adapter<com.iadvize.conversation.ui.viewholders.ApplePayPaymentMessageViewHolder.PaymentItemsAdapter.ViewHolder> {
              public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.ApplePayPaymentMessageViewHolder.PaymentItemsAdapter>;
              public onBindViewHolder(param0: androidx.recyclerview.widget.RecyclerView.ViewHolder, param1: number): void;
              public getItemCount(): number;
              public onCreateViewHolder(param0: globalAndroid.view.ViewGroup, param1: number): androidx.recyclerview.widget.RecyclerView.ViewHolder;
              public constructor(param0: globalAndroid.content.Context, param1: java.util.List<any>, param2: number, param3: number, param4: globalAndroid.graphics.Typeface);
            }
            export module PaymentItemsAdapter {
              export class ViewHolder {
                public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.ApplePayPaymentMessageViewHolder.PaymentItemsAdapter.ViewHolder>;
                public constructor(param0: com.iadvize.conversation.ui.viewholders.ApplePayPaymentMessageViewHolder.PaymentItemsAdapter, param1: globalAndroid.view.View);
                public a(param0: string, param1: string): void;
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
        export module viewholders {
          export class BundleMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.BundleMessageViewHolder>;
            public constructor(param0: globalAndroid.view.View, param1: number, param2: com.iadvize.conversation.ui.viewholders.MessageListeners, param3: com.iadvize.conversation.ui.models.ConversationConfiguration);
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
          }
          export module BundleMessageViewHolder {
            export class WhenMappings {
              public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.BundleMessageViewHolder.WhenMappings>;
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
          export class FileMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.FileMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class GenericCardMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.GenericCardMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class ImageMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.ImageMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class LinkSentMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.LinkSentMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
          }
          export module LinkSentMessageViewHolder {
            export class WhenMappings {
              public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.LinkSentMessageViewHolder.WhenMappings>;
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
          export class LoadPastConversationMessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.LoadPastConversationMessageViewHolder>;
            public a(param0: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
              onMessageHighlightClicked(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<com.iadvize.conversation.ui.models.Highlight.Actions.Action>): void;
              onMessageSideActionClicked(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.MessageSideAction): void;
            });
            public constructor();
            public onMessagePreviewLinkClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: string): void;
            public onMessageClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
            public onMessageSideActionClicked(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.MessageSideAction): void;
            public onMessageQuickReplyChoiceClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string): void;
            public onMessageAvatarClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
            public onProductOfferActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            public onMessageLinkClicked(param0: com.iadvize.conversation.ui.models.Message, param1: globalAndroid.net.Uri): void;
            public onMessageLongClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message): void;
            public onCardActionClicked(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.MessageKind.Card, param3: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            public onLoadPastConversationClicked(param0: com.iadvize.conversation.ui.models.Message): void;
            public onVideoEscalationClicked(param0: com.iadvize.conversation.ui.models.Message, param1: string, param2: boolean): void;
            public onMessageHighlightClicked(param0: com.iadvize.conversation.ui.models.Message, param1: java.util.List<com.iadvize.conversation.ui.models.Highlight.Actions.Action>): void;
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
          export abstract class MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.MessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
            public c(): com.iadvize.conversation.ui.viewholders.MessageListeners;
          }
          export module MessageViewHolder {
            export class WhenMappings {
              public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.MessageViewHolder.WhenMappings>;
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
          export class PreviewLinkMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.PreviewLinkMessageViewHolder>;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration, param3: io.noties.markwon.Markwon);
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
          }
          export module PreviewLinkMessageViewHolder {
            export class WhenMappings {
              public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.PreviewLinkMessageViewHolder.WhenMappings>;
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
          export class ProductOfferMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.ProductOfferMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class QuickReplyMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.QuickReplyMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class SnoozeMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.SnoozeMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class SystemMessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.SystemMessageViewHolder>;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class TextMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.TextMessageViewHolder>;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration, param3: io.noties.markwon.Markwon);
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
          }
          export module TextMessageViewHolder {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.TextMessageViewHolder.Companion>;
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
          export class TransferMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.TransferMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class TranslatedMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.TranslatedMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class TypingIndicatorMessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.TypingIndicatorMessageViewHolder>;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.ConversationConfiguration);
            public a(): void;
            public a(param0: com.iadvize.conversation.ui.models.Message): void;
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
          export class VideoEscalationMessageViewHolder extends com.iadvize.conversation.ui.viewholders.MessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.VideoEscalationMessageViewHolder>;
            public a(): com.iadvize.conversation.ui.models.ConversationConfiguration;
            public a(param0: com.iadvize.conversation.ui.models.Highlight.Search): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Highlight.Actions): void;
            public b(): androidx.constraintlayout.widget.ConstraintLayout;
            public a(param0: com.iadvize.conversation.ui.models.SenderAlignment): void;
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public b(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.Message, param2: com.iadvize.conversation.ui.models.Message): void;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.viewholders.MessageListeners, param2: com.iadvize.conversation.ui.models.ConversationConfiguration);
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
          export class WaitingTimeMessageViewHolder {
            public static class: java.lang.Class<com.iadvize.conversation.ui.viewholders.WaitingTimeMessageViewHolder>;
            public constructor(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.ConversationConfiguration, param2: io.noties.markwon.Markwon);
            public a(param0: com.iadvize.conversation.ui.models.Message): void;
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
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.Companion>;
            }
            export class FileButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.FileButtonClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$FileButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onFileButtonClicked(): void });
              public constructor();
              public onFileButtonClicked(): void;
            }
            export class ImageButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.ImageButtonClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$ImageButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onImageButtonClicked(): void });
              public constructor();
              public onImageButtonClicked(): void;
            }
            export class SendButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.SendButtonClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$SendButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onSendButtonClicked(param0: string): void });
              public constructor();
              public onSendButtonClicked(param0: string): void;
            }
            export class TextChangedListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TextChangedListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TextChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onTextChanged(param0: string): void });
              public constructor();
              public onTextChanged(param0: string): void;
            }
            export class TextFocusChangedListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TextFocusChangedListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TextFocusChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onTextFocusChanged(param0: boolean): void });
              public constructor();
              public onTextFocusChanged(param0: boolean): void;
            }
            export class TranslateButtonClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ComposeView.TranslateButtonClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ComposeView$TranslateButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { onTranslateButtonClicked(param0: string): void });
              public constructor();
              public onTranslateButtonClicked(param0: string): void;
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
          export class FeedbackLoopView {
            public static class: java.lang.Class<com.iadvize.conversation.ui.views.FeedbackLoopView>;
            public constructor(param0: globalAndroid.content.Context);
            public a(param0: com.iadvize.conversation.ui.models.Message, param1: com.iadvize.conversation.ui.models.MessageSideAction.FeedbackLoop.Feedback, param2: com.iadvize.conversation.ui.viewholders.MessageListeners): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
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
            public a(param0: com.iadvize.conversation.ui.views.GenericCardView.GenericCardClickListener): void;
            public a(param0: com.iadvize.conversation.ui.models.MessageKind.Card, param1: com.iadvize.conversation.ui.models.ConversationConfiguration, param2: com.iadvize.conversation.ui.utils.Alignment, param3: com.iadvize.conversation.ui.utils.Position, param4: com.iadvize.conversation.ui.utils.Position): void;
            public constructor(param0: globalAndroid.content.Context);
            public a(param0: com.iadvize.conversation.ui.models.MessageKind.Card, param1: com.iadvize.conversation.ui.models.ConversationConfiguration): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public a(param0: com.iadvize.conversation.ui.utils.Alignment, param1: com.iadvize.conversation.ui.utils.Position, param2: com.iadvize.conversation.ui.utils.Position): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
          }
          export module GenericCardView {
            export class GenericCardClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.GenericCardView.GenericCardClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.GenericCardView$GenericCardClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void });
              public constructor();
              public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.Card, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.GenericCardView.WhenMappings>;
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
            public a(param0: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param1: com.iadvize.conversation.ui.models.ConversationConfiguration): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
            public a(param0: com.iadvize.conversation.ui.views.ProductOfferView.ProductOfferClickListener): void;
            public a(param0: com.iadvize.conversation.ui.utils.Alignment, param1: com.iadvize.conversation.ui.utils.Position, param2: com.iadvize.conversation.ui.utils.Position): void;
            public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
            public a(param0: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param1: com.iadvize.conversation.ui.models.ConversationConfiguration, param2: com.iadvize.conversation.ui.utils.Alignment, param3: com.iadvize.conversation.ui.utils.Position, param4: com.iadvize.conversation.ui.utils.Position): void;
          }
          export module ProductOfferView {
            export class ProductOfferClickListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ProductOfferView.ProductOfferClickListener>;
              /**
               * Constructs a new instance of the com.iadvize.conversation.ui.views.ProductOfferView$ProductOfferClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
               */
              public constructor(implementation: { a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void });
              public constructor();
              public a(param0: globalAndroid.view.View, param1: com.iadvize.conversation.ui.models.MessageKind.ProductOffer, param2: com.iadvize.conversation.ui.models.MessageAttachment.Action): void;
            }
            export class WhenMappings {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.ProductOfferView.WhenMappings>;
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
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.Companion>;
            }
            export abstract class Repeater {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.Repeater>;
              public a(): void;
              public constructor(param0: java.lang.Runnable);
              public c(): void;
              public d(): boolean;
              public b(): void;
            }
            export class TextAdder extends com.iadvize.conversation.ui.views.TypewriterView.Repeater {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.TextAdder>;
              public constructor(param0: com.iadvize.conversation.ui.views.TypewriterView, param1: string, param2: java.lang.Runnable);
              public constructor(param0: java.lang.Runnable);
              public run(): void;
            }
            export class TextRemover extends com.iadvize.conversation.ui.views.TypewriterView.Repeater {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.TextRemover>;
              public run(): void;
            }
            export class TypeRunnable extends com.iadvize.conversation.ui.views.TypewriterView.Repeater {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.TypewriterView.TypeRunnable>;
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
            public a(param0: number): void;
          }
          export module WaitingDotsView {
            export class Companion {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.WaitingDotsView.Companion>;
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
            export class PreviewLinkRepository {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository>;
              public static c(param0: com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository, param1: org.jsoup.nodes.Document): string;
              public a(): void;
              public a(param0: string, param1: string): void;
              public static a(param0: com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository, param1: org.jsoup.nodes.Document): string;
              public constructor(param0: com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository.PreviewLinkRepositoryListener);
              public static b(param0: com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository, param1: org.jsoup.nodes.Document): string;
            }
            export module PreviewLinkRepository {
              export class Companion {
                public static class: java.lang.Class<com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository.Companion>;
              }
              export class PreviewLinkRepositoryListener {
                public static class: java.lang.Class<com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository.PreviewLinkRepositoryListener>;
                /**
                 * Constructs a new instance of the com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository$PreviewLinkRepositoryListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
                 */
                public constructor(implementation: { a(param0: com.iadvize.conversation.ui.models.PreviewLinkResult): void });
                public constructor();
                public a(param0: com.iadvize.conversation.ui.models.PreviewLinkResult): void;
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
        export module views {
          export module previewlink {
            export class PreviewLinkStore {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.previewlink.PreviewLinkStore>;
              public static a(param0: string): com.iadvize.conversation.ui.models.PreviewLinkResult;
              public static a(param0: string, param1: com.iadvize.conversation.ui.models.PreviewLinkResult): void;
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
          export module previewlink {
            export class PreviewLinkView implements com.iadvize.conversation.ui.views.previewlink.PreviewLinkRepository.PreviewLinkRepositoryListener {
              public static class: java.lang.Class<com.iadvize.conversation.ui.views.previewlink.PreviewLinkView>;
              public a(param0: string, param1: string, param2: com.iadvize.conversation.ui.models.ConversationConfiguration): void;
              public a(param0: com.iadvize.conversation.ui.models.PreviewLinkResult): void;
              public a(param0: number): void;
              public onDetachedFromWindow(): void;
              public static a(param0: com.iadvize.conversation.ui.views.previewlink.PreviewLinkView, param1: com.iadvize.conversation.ui.utils.Alignment, param2: com.iadvize.conversation.ui.utils.Position): void;
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

//Generics information:
//com.iadvize.conversation.sdk.feature.graphql.ApiResponse:1
//com.iadvize.conversation.sdk.feature.graphql.ApiResponse.Error:1
//com.iadvize.conversation.sdk.feature.graphql.ApiResponse.Success:1
