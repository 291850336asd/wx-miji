import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "html": {
        "height": "100%",
        "fontSize": "62.5%",
        "WebkitTapHighlightColor": "transparent"
    },
    "body": {
        "height": "100%",
        "fontSize": "62.5%",
        "WebkitTapHighlightColor": "transparent",
        "fontFamily": "microsoft yahei",
        "background": "#fff",
        "position": "relative"
    },
    "ul": {
        "listStyle": "none"
    },
    "li": {
        "listStyle": "none"
    },
    "a": {
        "textDecoration": "none",
        "outLine": "none",
        "color": "#333333"
    },
    "swiper-container": {
        "width": "100%",
        "maxWidth": 640,
        "height": "100%",
        "backgroundColor": "#000"
    },
    "swiper-slide-v1": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/1.jpg) center no-repeat",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "swiper-slide-v2": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/2.jpg) center no-repeat",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "swiper-slide-v3": {
        "width": "100%",
        "height": "100%",
        "background": "url(../images/3/bg.jpg) center no-repeat",
        "backgroundSize": "100% 100%",
        "overflow": "hidden"
    },
    "img": {
        "display": "block"
    },
    "swiper-pagination-bullet": {
        "width": 6,
        "height": 6,
        "background": "#fff",
        "opacity": 0.4
    },
    "swiper-pagination-bullet-active": {
        "opacity": 1
    },
    "arrow-box": {
        "position": "absolute",
        "bottom": -26,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "50%",
        "height": 90,
        "zIndex": 20
    },
    "array": {
        "zIndex": 99,
        "WebkitAnimation": "start 1.5s infinite ease-in-out",
        "display": "block",
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 32,
        "height": 30
    },
    "top-box": {
        "position": "absolute",
        "top": -45,
        "left": 0,
        "right": 0,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": "50%",
        "height": 90,
        "zIndex": 900,
        "transform": "rotate(180deg)",
        "MsTransform": "rotate(180deg)",
        "MozTransform": "rotate(180deg)",
        "WebkitTransform": "rotate(180deg)",
        "OTransform": "rotate(180deg)"
    },
    "arraytop": {
        "zIndex": 999,
        "WebkitAnimation": "start 1.5s infinite ease-in-out",
        "display": "block",
        "marginTop": 15,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "width": 20,
        "height": 15
    },
    "hide": {
        "display": "none"
    },
    "hideOpacity": {
        "opacity": 0
    },
    "showOpacity": {
        "opacity": 1
    },
    "loading": {
        "WebkitAnimationName": "loading",
        "animationName": "loading"
    },
    "poster_wrapload": {
        "height": "100%",
        "zIndex": 100,
        "backgroundSize": "100%"
    },
    "poster_wrap": {
        "WebkitTransform": "translate3d(0,0,0)",
        "WebkitTransition": "-webkit-transform .3s linear,opacity .3s linear"
    },
    "p_loading": {
        "position": "absolute",
        "top": -40,
        "left": 0,
        "right": 0,
        "bottom": 0,
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": "100%",
        "height": 150
    },
    "p_loading_logo": {
        "display": "block",
        "width": 100,
        "height": 100,
        "background": "url(../images/zp_loading_new.png) center top no-repeat",
        "backgroundSize": "100%",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "WebkitAnimation": "loading 3s linear infinite",
        "animation": "loading 3s linear infinite"
    },
    "p_loading_tip": {
        "color": "#ccc",
        "fontSize": 15,
        "textAlign": "center",
        "lineHeight": 25,
        "marginTop": 25,
        "textShadow": "1px 1px 1px rgba(0,0,0,.1)"
    },
    "pageContainer": {
        "width": "100%",
        "height": "100%",
        "position": "relative"
    }
});