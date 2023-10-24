package com.github.triniwiz.essent

import android.annotation.SuppressLint
import android.content.Context
import android.graphics.drawable.Drawable
import android.util.Log
import com.iadvize.conversation.sdk.IAdvizeSDK
import com.iadvize.conversation.sdk.feature.authentication.AuthenticationOption
import com.iadvize.conversation.sdk.feature.chatbox.ChatboxConfiguration
import com.iadvize.conversation.sdk.feature.conversation.ConversationChannel
import com.iadvize.conversation.sdk.feature.conversation.ConversationListener
import com.iadvize.conversation.sdk.feature.conversation.IncomingMessageAvatar
import com.iadvize.conversation.sdk.feature.defaultfloatingbutton.DefaultFloatingButtonOption
import com.iadvize.conversation.sdk.feature.gdpr.GDPREnabledOption
import com.iadvize.conversation.sdk.feature.gdpr.GDPROption
import com.iadvize.conversation.sdk.feature.logger.Logger
import com.iadvize.conversation.sdk.feature.targeting.LanguageOption
import com.iadvize.conversation.sdk.feature.targeting.NavigationOption
import com.iadvize.conversation.sdk.feature.targeting.TargetingListener
import com.iadvize.conversation.sdk.feature.targeting.TargetingRule
import com.iadvize.conversation.sdk.type.Language
import org.json.JSONObject
import java.lang.Exception
import java.net.URI
import java.util.UUID

class AdvizeSDK {
  companion object {

    @JvmStatic
    var targetingListener: TargetingListener? = null
      set(value) {
        if (field != null){
          IAdvizeSDK.targetingController.listeners.remove(field)
        }

        if (value != null){
          IAdvizeSDK.targetingController.listeners.add(value)
        }
        field = value
      }

    @JvmStatic
    var DEBUG = false

    private fun buildGdprOption(legalUrl: String?): GDPROption {
      if(legalUrl == null){
        return GDPROption.Disabled
      }
      val uri = URI(legalUrl)
      val option = GDPREnabledOption.LegalUrl(uri)
      return GDPROption.Enabled(option)
    }

    private fun buildTargetingRule(targetingRuleUUID: String): TargetingRule {
      return TargetingRule(UUID.fromString(targetingRuleUUID), ConversationChannel.CHAT)
    }

    @JvmStatic
    @JvmOverloads
    fun activate(projectId: Int, authOption: String, userId: String, callback: IAdvizeSDK.Callback, legalUrl: String? = null){
      // TODO: consider "secured" option with JWEProvider
      // https://developers.iadvize.com/documentation/mobile-sdk
      val option = when(authOption){
        "simple" -> AuthenticationOption.Simple(userId)
        else -> AuthenticationOption.Anonymous
      }
      IAdvizeSDK.activate(projectId, option, buildGdprOption(legalUrl), callback)
    }

    @JvmStatic
    fun setLanguage() {
      IAdvizeSDK.targetingController.language = LanguageOption.Custom(Language.nl)
    }

    @JvmStatic
    fun activateTargetingRule(targetingRuleUUID: String) {
      IAdvizeSDK.targetingController.activateTargetingRule(buildTargetingRule(targetingRuleUUID))
    }

    @JvmStatic
    fun registerUserNavigation(targetingRuleUUID: String){
      IAdvizeSDK.targetingController.registerUserNavigation(NavigationOption.ActivateNewRule(
        buildTargetingRule((targetingRuleUUID))
      ))
    }

    @JvmStatic
    fun logout(){
      IAdvizeSDK.logout(object : IAdvizeSDK.Callback {
        override fun onFailure(error: Throwable) {
          if (DEBUG){
            Log.d("JS", "iAdvize[Android] logout failed ${error.localizedMessage}")
          }
        }

        override fun onSuccess() {
          if (DEBUG){
            Log.d("JS", "iAdvize[Android] logout success")
          }
        }
      })
    }

    @JvmStatic
    fun customize(context: Context, configuration: String){
      val config = JSONObject(configuration)

      val incomingMessageAvatar = config.opt("incomingMessageAvatar") as? String

      val chatboxConfiguration =  ChatboxConfiguration(
        config.getInt("mainColor"),
        toolbarBackgroundColor =  config.opt("navigationBarBackgroundColor") as? Int,
        toolbarMainColor = config.opt("navigationBarMainColor") as? Int,

        automaticMessage = config.opt("automaticMessage") as? String,
        toolbarTitle = config.opt("navigationBarTitle") as? String,
        fontPath = config.opt("font") as? String,
        incomingMessageAvatar = incomingMessageAvatar?.let {
          fromResource(context, it)?.let { it1 -> IncomingMessageAvatar.Image(it1) }
        }
      )


      IAdvizeSDK.chatboxController.setupChatbox(chatboxConfiguration)

    }

    @SuppressLint("UseCompatLoadingForDrawables")
    private fun fromResource(context: Context, name: String): Drawable? {
      val res = context.resources
      try {
        val identifier = res.getIdentifier(name, "drawable", context.packageName)
        if (0 < identifier) {
          return res.getDrawable(identifier)
        }

      }catch(_: Exception){}
      return null
    }

    @JvmStatic
    fun hideDefaultChatButton(){
      IAdvizeSDK.defaultFloatingButtonController.setupDefaultFloatingButton(
        DefaultFloatingButtonOption.Disabled
      )
    }

    @JvmStatic
    fun presentChat(context: Context){
      IAdvizeSDK.chatboxController.presentChatbox(context)
    }

    @JvmStatic
    fun dismissChat(){
      IAdvizeSDK.chatboxController.dismissChatbox()
    }

    @JvmStatic
    fun isChatPresented(): Boolean {
      return IAdvizeSDK.chatboxController.isChatboxPresented()
    }

    @JvmStatic
    fun setLogLevel(level: Int){
      IAdvizeSDK.logLevel = logLevelFrom(level)
    }

    @JvmStatic
    fun isActiveTargetingRuleAvailable(): Boolean {
      return IAdvizeSDK.targetingController.isActiveTargetingRuleAvailable()
    }


    @JvmStatic
    fun registerPushToken(token: String) {
      IAdvizeSDK.notificationController.registerPushToken(token)
    }

    @JvmStatic
    fun hasOngoingConversation(): Boolean {
      return IAdvizeSDK.conversationController.ongoingConversation()?.conversationId?.trim()?.isNotEmpty()
        ?: false
    }


    @JvmStatic
    fun registerConversationListener(listener: ConversationListener){
      IAdvizeSDK.conversationController.listeners.add(listener)
    }

    private fun logLevelFrom(logLevel: Int): Logger.Level {
      return when (logLevel) {
        0 -> Logger.Level.VERBOSE
          1 -> Logger.Level.INFO
          3 -> Logger.Level.ERROR
          else -> Logger.Level.WARNING
      }
    }
  }
}
