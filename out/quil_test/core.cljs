(ns quil-test.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  ; circle color and position.

  {:color 0
   :x 0
   :y 100
   :parts #{}

  }
  )

(defn update-state [state]
  ; Update sketch state by changing circle color and position.

{
   :color (mod (+ (:color state) 0.7) 255)


   :x (q/mouse-x)

   :y (q/mouse-y)

   :parts (:parts state)

}


)

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  ; Set circle color.
  (q/fill (:color state) 255 255)
  ; Calculate x and y coordinates of the circle.
  (let [mult 1
        x (* mult (:x state))
        y (* mult (:y state))]

      ; Draw the circle.
      (q/ellipse x y 10 10)))

(q/defsketch quil-test
  :host "quil-test"
  :size [500 500]
  ; setup function called only once, during sketch initialization.
  :setup setup
  ; update-state is called on each iteration before draw-state.
  :update update-state
  :draw draw-state
  ; This sketch uses functional-mode middleware.
  ; Check quil wiki for more info about middlewares and particularly
  ; fun-mode.
  :middleware [m/fun-mode])
