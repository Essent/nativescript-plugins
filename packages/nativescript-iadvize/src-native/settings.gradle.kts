pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
      maven { url = uri("https://jitpack.io") }
      maven { url = uri("https://raw.github.com/iadvize/iadvize-android-sdk/master") }
    }
}

rootProject.name = "IadvizeDemo"
include(":app")
include(":essent")
