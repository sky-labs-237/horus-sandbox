(ns cheffy.test
  (:require   [hx.react :as hx :refer [defnc]]
              [hx.hooks :as hooks]
              [hx.hooks.alpha :as alpha]
              [cheffy.state :refer [app-state state-reducer]]
              [cheffy.theme :refer [cheffy-theme]]
              [cheffy.db :refer [initial-app-db]]
              ["@material-ui/core/styles" :refer [createMuiTheme withStyles]]
              ["@smooth-ui/core-sc" :refer [Normalize ThemeProvider Box Button]]
              ["react-router-dom" :refer [Route Link] :rename {BrowserRouter Router}]))

(def styles #js {:root #js {:backgroundColor "red"}})

(defnc ComponentWithStyles [{:keys [classes]}]
       {:wrap [((withStyles styles))]}
       [:div {:class (.-root classes)} "testing a commosent with styles"])

(defnc my-component-mui [{:keys [classes]}]
       {:wrap [((withStyles styles))]}
       [:<>
        ;[Normalize]
        ;[ThemeProvider {:theme theme}
        ;[unstable_Box {:color "blue"} "This a blue box"]
        [:div {:class (.-root classes)} "kjkjjgjgjgg"
         [Button {:color "primary"} "primary"]]])
         ;[Button  "hello"]]])
(defnc my-component-sui [_]
       (let [[state dispatch] (hooks/useContext app-state)]
         [:<>
          [Normalize]
          [ThemeProvider {:theme cheffy-theme}
           [Button {:onClick #(dispatch [:foo/load])} "hello cheffy"]]]))

(defnc PrintState [_]
       (let [[state] (hooks/useContext app-state)]
         [:pre (prn-str (:foo state))]))

(defnc PrintDbConsumer [_]
       (let [[state dispatch] (hooks/useContext app-state)
             {:keys [foo db]} state]
         [:<>
          [:div "Initial state: " (prn-str state)]]))

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
