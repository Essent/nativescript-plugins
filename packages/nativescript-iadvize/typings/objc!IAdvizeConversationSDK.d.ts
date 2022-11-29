declare class AuthenticationOption extends NSObject {
  static alloc(): AuthenticationOption; // inherited from NSObject

  static new(): AuthenticationOption; // inherited from NSObject

  constructor(o: { simple: string });

  initWithAnonymous(): void;

  initWithSimple(userId: string): this;
}

declare class ChatboxConfiguration extends NSObject {
  static alloc(): ChatboxConfiguration; // inherited from NSObject

  static new(): ChatboxConfiguration; // inherited from NSObject

  automaticMessage: string;

  font: UIFont;

  gdprMessage: string;

  incomingMessageAvatar: IncomingMessageAvatar;

  mainColor: UIColor;

  navigationBarBackgroundColor: UIColor;

  navigationBarMainColor: UIColor;

  navigationBarTitle: string;

  presentationStyle: UIModalPresentationStyle;

  presentingViewController: UIViewController;
}

declare class ChatboxController extends NSObject {
  static alloc(): ChatboxController; // inherited from NSObject

  static new(): ChatboxController; // inherited from NSObject

  useDefaultChatButton: boolean;

  setChatButtonPositionWithLeftMarginBottomMargin(leftMargin: number, bottomMargin: number): void;

  setupChatboxWithConfiguration(configuration: ChatboxConfiguration): void;
}

declare class ConversationController extends NSObject {
  static alloc(): ConversationController; // inherited from NSObject

  static new(): ConversationController; // inherited from NSObject

  delegate: ConversationControllerDelegate;

  readonly hasOngoingConversation: boolean;

  dismissChatboxWithAnimatedCompletion(animated: boolean, completion: () => void): void;

  isChatboxPresented(): boolean;

  presentChatboxWithAnimatedPresentingViewControllerCompletion(animated: boolean, presentingViewController: UIViewController, completion: () => void): void;
}

interface ConversationControllerDelegate {
  chatboxDidClose?(): void;

  conversationControllerShouldOpen?(controller: ConversationController, url: NSURL): boolean;

  didReceiveNewMessageWithContent?(content: string): void;

  ongoingConversationStatusDidChangeWithHasOngoingConversation(hasOngoingConversation: boolean): void;
}
declare var ConversationControllerDelegate: {
  prototype: ConversationControllerDelegate;
};

interface GDPRDelegate {
  didTapMoreInformation(): void;
}
declare var GDPRDelegate: {
  prototype: GDPRDelegate;
};

declare class GDPREnabledOption extends NSObject {
  static alloc(): GDPREnabledOption; // inherited from NSObject

  static new(): GDPREnabledOption; // inherited from NSObject

  constructor(o: { delegate: GDPRDelegate });

  constructor(o: { legalInformationURL: NSURL });

  initWithDelegate(delegate: GDPRDelegate): this;

  initWithLegalInformationURL(legalInformationURL: NSURL): this;
}

declare class GDPROption extends NSObject {
  static alloc(): GDPROption; // inherited from NSObject

  static disabled(): GDPROption;

  static new(): GDPROption; // inherited from NSObject

  constructor(o: { gdprEnabledOption: GDPREnabledOption });

  initWithGdprEnabledOption(gdprEnabledOption: GDPREnabledOption): this;
}

declare const enum GraphQLApplicationMode {
  Dev = 0,

  Prod = 1,

  __unknown = 2,
}

declare const enum GraphQLCurrency {
  Adp = 0,

  Aed = 1,

  Afa = 2,

  Afn = 3,

  All = 4,

  Amd = 5,

  Ang = 6,

  Aoa = 7,

  Ars = 8,

  Ats = 9,

  Aud = 10,

  Awg = 11,

  Aym = 12,

  Azm = 13,

  Azn = 14,

  Bam = 15,

  Bbd = 16,

  Bdt = 17,

  Bef = 18,

  Bgl = 19,

  Bgn = 20,

  Bhd = 21,

  Bif = 22,

  Bmd = 23,

  Bnd = 24,

  Bob = 25,

  Bov = 26,

  Brl = 27,

  Bsd = 28,

  Btn = 29,

  Bwp = 30,

  Byb = 31,

  Byn = 32,

  Byr = 33,

  Bzd = 34,

  Cad = 35,

  Cdf = 36,

  Che = 37,

  Chf = 38,

  Chw = 39,

  Clf = 40,

  Clp = 41,

  Cny = 42,

  Cop = 43,

  Cou = 44,

  Crc = 45,

  Csd = 46,

  Cuc = 47,

  Cup = 48,

  Cve = 49,

  Cyp = 50,

  Czk = 51,

  Dem = 52,

  Djf = 53,

  Dkk = 54,

  Dop = 55,

  Dzd = 56,

  Eek = 57,

  Egp = 58,

  Ern = 59,

  Esp = 60,

  Etb = 61,

  Eur = 62,

  Fim = 63,

  Fjd = 64,

  Fkp = 65,

  Frf = 66,

  Gbp = 67,

  Gel = 68,

  Ghc = 69,

  Ghs = 70,

  Gip = 71,

  Gmd = 72,

  Gnf = 73,

  Grd = 74,

  Gtq = 75,

  Gwp = 76,

  Gyd = 77,

  Hkd = 78,

  Hnl = 79,

  Hrk = 80,

  Htg = 81,

  Huf = 82,

  Idr = 83,

  Iep = 84,

  Ils = 85,

  Inr = 86,

  Iqd = 87,

  Irr = 88,

  Isk = 89,

  Itl = 90,

  Jmd = 91,

  Jod = 92,

  Jpy = 93,

  Kes = 94,

  Kgs = 95,

  Khr = 96,

  Kmf = 97,

  Kpw = 98,

  Krw = 99,

  Kwd = 100,

  Kyd = 101,

  Kzt = 102,

  Lak = 103,

  Lbp = 104,

  Lkr = 105,

  Lrd = 106,

  Lsl = 107,

  Ltl = 108,

  Luf = 109,

  Lvl = 110,

  Lyd = 111,

  Mad = 112,

  Mdl = 113,

  Mga = 114,

  Mgf = 115,

  Mkd = 116,

  Mmk = 117,

  Mnt = 118,

  Mop = 119,

  Mro = 120,

  Mru = 121,

  Mtl = 122,

  Mur = 123,

  Mvr = 124,

  Mwk = 125,

  Mxn = 126,

  Mxv = 127,

  Myr = 128,

  Mzm = 129,

  Mzn = 130,

  Nad = 131,

  Ngn = 132,

  Nio = 133,

  Nlg = 134,

  Nok = 135,

  Npr = 136,

  Nzd = 137,

  Omr = 138,

  Pab = 139,

  Pen = 140,

  Pgk = 141,

  Php = 142,

  Pkr = 143,

  Pln = 144,

  Pte = 145,

  Pyg = 146,

  Qar = 147,

  Rol = 148,

  Ron = 149,

  Rsd = 150,

  Rub = 151,

  Rur = 152,

  Rwf = 153,

  Sar = 154,

  Sbd = 155,

  Scr = 156,

  Sdd = 157,

  Sdg = 158,

  Sek = 159,

  Sgd = 160,

  Shp = 161,

  Sit = 162,

  Skk = 163,

  Sll = 164,

  Sos = 165,

  Srd = 166,

  Srg = 167,

  Ssp = 168,

  Std = 169,

  Stn = 170,

  Svc = 171,

  Syp = 172,

  Szl = 173,

  Thb = 174,

  Tjs = 175,

  Tmm = 176,

  Tmt = 177,

  Tnd = 178,

  Top = 179,

  Tpe = 180,

  Trl = 181,

  Try = 182,

  Ttd = 183,

  Twd = 184,

  Tzs = 185,

  Uah = 186,

  Ugx = 187,

  Usd = 188,

  Usn = 189,

  Uss = 190,

  Uyi = 191,

  Uyu = 192,

  Uzs = 193,

  Veb = 194,

  Vef = 195,

  Ves = 196,

  Vnd = 197,

  Vuv = 198,

  Wst = 199,

  Xaf = 200,

  Xag = 201,

  Xau = 202,

  Xba = 203,

  Xbb = 204,

  Xbc = 205,

  Xbd = 206,

  Xcd = 207,

  Xdr = 208,

  Xfo = 209,

  Xfu = 210,

  Xof = 211,

  Xpd = 212,

  Xpf = 213,

  Xpt = 214,

  Xsu = 215,

  Xts = 216,

  Xua = 217,

  Xxx = 218,

  Yer = 219,

  Yum = 220,

  Zar = 221,

  Zmk = 222,

  Zmw = 223,

  Zwd = 224,

  Zwl = 225,

  Zwn = 226,

  Zwr = 227,

  __unknown = 228,
}

declare const enum GraphQLLanguage {
  Aa = 0,

  Ab = 1,

  Ae = 2,

  Af = 3,

  Ak = 4,

  Am = 5,

  An = 6,

  Ar = 7,

  As = 8,

  Av = 9,

  Ay = 10,

  Az = 11,

  Ba = 12,

  Be = 13,

  Bg = 14,

  Bh = 15,

  Bi = 16,

  Bm = 17,

  Bn = 18,

  Bo = 19,

  Br = 20,

  Bs = 21,

  Ca = 22,

  Ce = 23,

  Ch = 24,

  Co = 25,

  Cr = 26,

  Cs = 27,

  Cu = 28,

  Cv = 29,

  Cy = 30,

  Da = 31,

  De = 32,

  Dv = 33,

  Dz = 34,

  Ee = 35,

  El = 36,

  En = 37,

  Eo = 38,

  Es = 39,

  Et = 40,

  Eu = 41,

  Fa = 42,

  Ff = 43,

  Fi = 44,

  Fj = 45,

  Fo = 46,

  Fr = 47,

  Fy = 48,

  Ga = 49,

  Gd = 50,

  Gl = 51,

  Gn = 52,

  Gu = 53,

  Gv = 54,

  Ha = 55,

  He = 56,

  Hi = 57,

  Ho = 58,

  Hr = 59,

  Ht = 60,

  Hu = 61,

  Hy = 62,

  Hz = 63,

  Ia = 64,

  Id = 65,

  Ie = 66,

  Ig = 67,

  Ii = 68,

  Ik = 69,

  In = 70,

  Io = 71,

  Is = 72,

  It = 73,

  Iu = 74,

  Iw = 75,

  Ja = 76,

  Ji = 77,

  Jv = 78,

  Ka = 79,

  Kg = 80,

  Ki = 81,

  Kj = 82,

  Kk = 83,

  Kl = 84,

  Km = 85,

  Kn = 86,

  Ko = 87,

  Kr = 88,

  Ks = 89,

  Ku = 90,

  Kv = 91,

  Kw = 92,

  Ky = 93,

  La = 94,

  Lb = 95,

  Lg = 96,

  Li = 97,

  Ln = 98,

  Lo = 99,

  Lt = 100,

  Lu = 101,

  Lv = 102,

  Mg = 103,

  Mh = 104,

  Mi = 105,

  Mk = 106,

  Ml = 107,

  Mn = 108,

  Mo = 109,

  Mr = 110,

  Ms = 111,

  Mt = 112,

  My = 113,

  Na = 114,

  Nb = 115,

  Nd = 116,

  Ne = 117,

  Ng = 118,

  Nl = 119,

  Nn = 120,

  No = 121,

  Nr = 122,

  Nv = 123,

  Ny = 124,

  Oc = 125,

  Oj = 126,

  Om = 127,

  Or = 128,

  Os = 129,

  Pa = 130,

  Pi = 131,

  Pl = 132,

  Ps = 133,

  Pt = 134,

  Qu = 135,

  Rm = 136,

  Rn = 137,

  Ro = 138,

  Ru = 139,

  Rw = 140,

  Sa = 141,

  Sc = 142,

  Sd = 143,

  Se = 144,

  Sg = 145,

  Si = 146,

  Sk = 147,

  Sl = 148,

  Sm = 149,

  Sn = 150,

  So = 151,

  Sq = 152,

  Sr = 153,

  Ss = 154,

  St = 155,

  Su = 156,

  Sv = 157,

  Sw = 158,

  Ta = 159,

  Te = 160,

  Tg = 161,

  Th = 162,

  Ti = 163,

  Tk = 164,

  Tl = 165,

  Tn = 166,

  To = 167,

  Tr = 168,

  Ts = 169,

  Tt = 170,

  Tw = 171,

  Ty = 172,

  Ug = 173,

  Uk = 174,

  Ur = 175,

  Uz = 176,

  Ve = 177,

  Vi = 178,

  Vo = 179,

  Wa = 180,

  Wo = 181,

  Xh = 182,

  Yi = 183,

  Yo = 184,

  Za = 185,

  Zh = 186,

  Zu = 187,

  __unknown = 188,
}

declare var IAdvizeConversationSDKVersionNumber: number;

declare var IAdvizeConversationSDKVersionString: interop.Reference<number>;

declare class IAdvizeSDK extends NSObject {
  static alloc(): IAdvizeSDK; // inherited from NSObject

  static new(): IAdvizeSDK; // inherited from NSObject

  readonly chatboxController: ChatboxController;

  readonly conversationController: ConversationController;

  readonly notificationController: NotificationController;

  readonly targetingController: TargetingController;

  readonly transactionController: TransactionController;

  readonly visitorController: VisitorController;

  static readonly shared: IAdvizeSDK;

  activateWithProjectIdAuthenticationOptionGdprOptionCompletion(projectId: number, authenticationOption: AuthenticationOption, gdprOption: GDPROption, completion: (p1: boolean) => void): void;

  getLogLevel(): LoggerLogLevel;

  logoutWithCompletion(completion: () => void): void;

  setLogLevel(logLevel: LoggerLogLevel): void;
}

declare class IncomingMessageAvatar extends NSObject {
  static alloc(): IncomingMessageAvatar; // inherited from NSObject

  static new(): IncomingMessageAvatar; // inherited from NSObject

  constructor(o: { image: UIImage });

  constructor(o: { url: NSURL });

  initWithImage(image: UIImage): this;

  initWithUrl(url: NSURL): this;
}

declare const enum LoggerLogLevel {
  Verbose = 0,

  Info = 1,

  Warning = 2,

  Error = 3,

  Success = 4,
}

declare class NavigationOption extends NSObject {
  static alloc(): NavigationOption; // inherited from NSObject

  static new(): NavigationOption; // inherited from NSObject

  constructor(o: { navigationOption: NavigationOption });

  constructor(o: { newTargetingRuleId: NSUUID });

  initWithClearActiveRule(): void;

  initWithKeepActiveRule(): void;

  initWithNavigationOption(navigationOption: NavigationOption): this;

  initWithNewTargetingRuleId(targetingRuleId: NSUUID): this;
}

declare class NotificationController extends NSObject {
  static alloc(): NotificationController; // inherited from NSObject

  static new(): NotificationController; // inherited from NSObject

  disablePushNotificationsWithCompletion(completion: (p1: boolean) => void): void;

  enablePushNotificationsWithCompletion(completion: (p1: boolean) => void): void;

  isIAdvizePushNotificationWith(userInfo: NSDictionary<any, any>): boolean;

  registerPushTokenApplicationMode(pushToken: string, applicationMode: GraphQLApplicationMode): void;
}

declare class SDKLanguageOption extends NSObject {
  static alloc(): SDKLanguageOption; // inherited from NSObject

  static customWithValue(value: GraphQLLanguage): SDKLanguageOption;

  static default(): SDKLanguageOption;

  static new(): SDKLanguageOption; // inherited from NSObject
}

declare class TargetingController extends NSObject {
  static alloc(): TargetingController; // inherited from NSObject

  static new(): TargetingController; // inherited from NSObject

  delegate: TargetingControllerDelegate;

  readonly isActiveTargetingRuleAvailable: boolean;

  activateTargetingRuleWithTargetingRuleId(targetingRuleId: NSUUID): void;

  getLanguage(): SDKLanguageOption;

  registerUserNavigationWithNavigationOption(navigationOption: NavigationOption): void;

  setLanguage(language: SDKLanguageOption): void;
}

interface TargetingControllerDelegate {
  activeTargetingRuleAvailabilityDidUpdateWithIsActiveTargetingRuleAvailable(isActiveTargetingRuleAvailable: boolean): void;
}
declare var TargetingControllerDelegate: {
  prototype: TargetingControllerDelegate;
};

declare class Transaction extends NSObject implements NSCoding {
  static alloc(): Transaction; // inherited from NSObject

  static new(): Transaction; // inherited from NSObject

  constructor(o: { coder: NSCoder }); // inherited from NSCoding

  constructor(o: { externalTransactionId: string; date: Date; amount: number; currency: GraphQLCurrency });

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;

  initWithExternalTransactionIdDateAmountCurrency(externalTransactionId: string, date: Date, amount: number, currency: GraphQLCurrency): this;
}

declare class TransactionController extends NSObject {
  static alloc(): TransactionController; // inherited from NSObject

  static new(): TransactionController; // inherited from NSObject

  registerTransaction(transaction: Transaction): void;
}

declare class VisitorController extends NSObject {
  static alloc(): VisitorController; // inherited from NSObject

  static new(): VisitorController; // inherited from NSObject
}

declare class VisitorCustomData extends NSObject {
  static alloc(): VisitorCustomData; // inherited from NSObject

  static new(): VisitorCustomData; // inherited from NSObject

  constructor(o: { boolean: boolean });

  constructor(o: { double: number });

  constructor(o: { int: number });

  constructor(o: { string: string });

  initWithBoolean(boolean: boolean): this;

  initWithDouble(double_: number): this;

  initWithInt(int_: number): this;

  initWithString(string: string): this;
}
