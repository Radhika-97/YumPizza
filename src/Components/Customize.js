import React from 'react'
import Basil from "../Assets/Basil.png";
import BaseCheese from "../Assets/BaseCheese.png";
import Mushroom from "../Assets/Mushroom.png";
import Olive from "../Assets/Olive.png";
import Pineapple from "../Assets/Pineapple.png";
import logo from "../Assets/logo.png";
import Base from "../Assets/PizzaBase.png";

import Tomato from "../Assets/Tomato.png";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
export default function Customize({ ingredients, setIngredients }) {
    let history = useHistory();
    const onChange = (event, name) => {
         localStorage.clear();
        console.log(localStorage);
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem("ingredients",JSON.stringify(newIngredients));
    };
    return (
        <div style={{ display: "flex" }}>
            {/* {JSON.stringify(ingredients)} */}
            <div style={{ border: '4px solid black', flex: 1 }}>
                <div style={{ minHeight: "500", maxHeight: "500", position: "relative" }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["cheese"] ? 100 : -100,
                            opacity: ingredients["cheese"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="ingredients z8"
                    >
                        <img src={BaseCheese} alt="Pizza base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["mushroom"] ? 100 : -100,
                            opacity: ingredients["mushroom"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="ingredients z4"
                    >
                        <img src={Mushroom} alt="Pizza base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["olive"] ? 100 : -100,
                            opacity: ingredients["olive"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="ingredients z4"
                    >
                        <img src={Olive} alt="Pizza base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["pineapple"] ? 100 : -100,
                            opacity: ingredients["pineapple"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="ingredients z3"
                    >
                        <img src={Pineapple} alt="Pizza base" height="100%" width="100%" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["basil"] ? 100 : -100,
                            opacity: ingredients["basil"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="ingredients z4"
                    >
                        <img src={Basil} alt="Pizza base" height="100%" width="100%" />
                    </motion.div>
                    {/* <img src ={logo} alt="Pizza base" height="100%" width="100%" className="ingredients"/> */}
                    {/* <img src ={PizzaMan} alt="Pizza base" height="100%" width="100%" className="ingredients" /> */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            y: ingredients["tomato"] ? 100 : -100,
                            opacity: ingredients["tomato"] ? 1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="ingredients z1"
                    >
                        <img src={Tomato} alt="Pizza base" height="100%" width="100%" />
                    </motion.div>
                    <img src={Base} alt="Pizza base" height="100%" width="100%" />


                </div>
            </div>
            <div style={{ border: '2px solid black', flex: 1 }}>
                <label className="container-checkbox">
                    Pineapple
          <input
                        type="checkbox"
                        checked={ingredients["pineapple"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "pineapple")
                        }
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Basil
          <input
                        type="checkbox"
                        checked={ingredients["basil"]}
                        onChange={(event) => onChange(event.currentTarget.checked, "basil")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Olive
          <input
                        type="checkbox"
                        checked={ingredients["olive"]}
                        onChange={(event) => onChange(event.currentTarget.checked, "olive")}
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Tomato
          <input
                        type="checkbox"
                        checked={ingredients["tomato"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "tomato")
                        }
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Mushroom
          <input
                        type="checkbox"
                        checked={ingredients["mushroom"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "mushroom")
                        }
                    />
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Cheese
          <input
                        type="checkbox"
                        checked={ingredients["cheese"]}
                        onChange={(event) =>
                            onChange(event.currentTarget.checked, "cheese")
                        }
                    />
                    <span className="checkmark"></span>
                </label>
                <button className="proceedToCheckout" onClick={()=>history.push('/checkout')}>Proceed to checkout</button>
            </div>
            {/* {JSON.stringify(ingredients)} */}

        </div>
    )
}