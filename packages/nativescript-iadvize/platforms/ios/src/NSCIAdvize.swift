import UIKit
import IAdvizeConversationSDK

@objc(NSCIAdvize)
public class NSCIAdvize : NSObject {
    @objc public static func activate(id: Int, authOption: String, userId: String, legalUrl: String?, token: String?, callback: ((Bool) -> Void)?) {
        let option: AuthenticationOption
        switch (authOption) {
        case "anonymous":
            option = .anonymous
            break
        case "simple":
            option = .simple(userId: userId)
            break
        case "secured":
            let authProvider = AuthProvider(token: token)
            option = .secured(jweProvider: authProvider)
            break
        default:
            option = .anonymous
            break
        }
        var gdpr = GDPROption.disabled
        if (legalUrl != nil) {
            let gdprUrl = URL(string: legalUrl!)
            gdpr = GDPROption.enabled(option: GDPREnabledOption.legalInformation(url: gdprUrl!))
        }
        IAdvizeSDK.shared.activate(projectId: id, authenticationOption: option, gdprOption: gdpr, completion: callback)
    }
}

class AuthProvider: JWEProvider {
    var token: String
    init(token: String?) {
        if let unwrapped = token {
          self.token = unwrapped
        } else {
          self.token = ""
        }
    }

    func willRequestJWE(completion: @escaping (Result<IAdvizeConversationSDK.JWE, Error>) -> Void) {
        // TODO: Fetch JWE from your own secure auth process
        completion(.success(JWE(value: self.token)))
    }
}
