(ns cheffy
  (:require [cheffy.test :refer [PrintState PrintDbConsumer my-component-sui]]
            [hx.react :as hx :refer [defnc]]
            [hx.hooks :as hooks]
            [hx.hooks.alpha :as alpha]
            ["react-dom" :as rdom]
            ["react" :as react]
            [cheffy.state :refer [app-state state-reducer]]
            [cheffy.theme :refer [cheffy-theme]]
            [cheffy.db :refer [initial-app-db]]
            ["react-router-dom" :refer [Route Link] :rename {BrowserRouter Router}]
            ["@smooth-ui/core-sc" :refer [Normalize ThemeProvider Box Button]]))

(defnc App [{:keys [children]}]
       (let [[state dispatch] (hooks/useReducer state-reducer {:db initial-app-db})]
         [:provider {:context app-state
                     :value [state dispatch]}
          children]))

(defnc home [_]
       [:h2 "Home"])

(defnc about [_]
       [:h2 "About"])

(defnc topic [req]
       (let [match (js->clj (get-in req [:match])
                            :keywordize-keys true)
             {:keys [path url params]} match]
         [:h3 (str
               "Requested Param: " (:id params))]))

(defnc topics [req]
       (let [match (js->clj (get-in req [:match])
                            :keywordize-keys true)
             {:keys [path url params]} match]

         [:div
          (prn url)
          [:h2 "Topics"]
          [:ul
           [:li
            [Link {:to (str url "/components")}
             "Components"]]
           [:li
            [Link {:to (str url "/props-v-state")}
             "Props v. State"]]]
          [Route {:path (str path "/:id")
                  :component topic}]
          [Route {:exact true
                  :path path
                  :render #(hx/f
                            [:h3 "Please select a topic"])}]]))

(defnc Header [_]
       [:ul
        [:li
         [Link {:to "/"} "Home"]]
        [:li
         [Link {:to "/about"} "About"]]
        [:li
         [Link {:to "/topics"} "Topics"]]])

(defnc app-router [_]
       [Normalize]
       [Router
        [:div
         [Header]
         [Route {:exact true
                 :path "/"
                 :component home}]
         [Route {:path "/about"
                 :component about}]
         [Route {:path "/topics"
                 :component topics}]]])

(defn ^:dev/after-load start
  []
  (rdom/render
    (hx/f
     ;[app-router])
     [App
      [PrintState]
      [PrintDbConsumer]
      [my-component-sui]])
    (.getElementById js/document "app")))

(defn ^:export init
  []
  (start))
