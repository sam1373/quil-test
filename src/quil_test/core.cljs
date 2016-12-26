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
   :y 0
   :parts #{}

  }


  )


(defn timer [p]
  (update-in p [:time] #(- % 1))
)

(defn old?[p]
  (> 0 (:time p))
)

(defn update-state [state]
  ; Update sketch state by changing circle color and position.

{
   :color (mod (+ (:color state) 0.7) 255)


   :x (q/mouse-x)

   :y (q/mouse-y)



   :parts
    (remove old?
    (mapv
      timer

      (conj (:parts state)
          {:x (q/mouse-x) :y (q/mouse-y) :col (:color state) :time 15}
          )


     )
    )


}


)

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)







  (loop [ps (:parts state)]
    (let [f (first ps)
          x (:x f)
          y (:y f)
          col (:col f)]
    (if (empty? ps)
      :nothing
      (do

        (q/fill col 255 255)
        (q/ellipse x y 10 10)
        (recur (rest ps)))

    )
    )
  )

)


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
