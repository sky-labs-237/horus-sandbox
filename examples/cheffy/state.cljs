(ns cheffy.state
  (:require [hx.react :as hx :refer [defnc]]
            [hx.hooks :as hooks]
            [hx.hooks.alpha :as alpha]
            ["react-dom" :as rdom]
            ["react" :as react]))

;;
;; Using React Context + Hooks for global state management
;;

(def app-state (react/createContext))

(defn state-reducer [state [type & args]]
  (case type
    :foo/load (assoc state :foo "bar")
    (do (js/console.warn "Unknown action type" type)
        state)))
