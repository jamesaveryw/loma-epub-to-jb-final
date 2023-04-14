/*! flip - v1.1.2 - 2016-10-20
 * https://github.com/nnattawat/flip  
 * Copyright (c) 2016 Nattawat Nonsung; Licensed MIT */
// setting,element,frontElement,backElement,isFlipped

! function (a) {
    var b = function () {
            var a, b = document.createElement("fakeelement"),
                c = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
            for (a in c)
                if (void 0 !== b.style[a]) return c[a]
        },
        c = function (b, c, d) {
            this.setting = {
                axis: "y",
                reverse: !1,
                trigger: "click" || "keypress",
                speed: 500,
                forceHeight: !1,
                forceWidth: !1,
                autoSize: !0,
                front: ".front",
                back: ".back"
            }, this.setting = a.extend(this.setting, c), "string" != typeof c.axis || "x" !== c.axis.toLowerCase() && "y" !== c.axis.toLowerCase() || (this.setting.axis = c.axis.toLowerCase()), "boolean" == typeof c.reverse && (this.setting.reverse = c.reverse), "string" == typeof c.trigger && (this.setting.trigger = c.trigger.toLowerCase());
            var e = parseInt(c.speed);
            isNaN(e) || (this.setting.speed = e), "boolean" == typeof c.forceHeight && (this.setting.forceHeight = c.forceHeight), "boolean" == typeof c.forceWidth && (this.setting.forceWidth = c.forceWidth), "boolean" == typeof c.autoSize && (this.setting.autoSize = c.autoSize), ("string" == typeof c.front || c.front instanceof a) && (this.setting.front = c.front), ("string" == typeof c.back || c.back instanceof a) && (this.setting.back = c.back), this.element = b, this.frontElement = this.getFrontElement(), this.backElement = this.getBackElement(), this.isFlipped = !1, this.init(d)
        };
    a.extend(c.prototype, {
        flipDone: function (a) {
            var c = this;
            c.element.one(b(), function () {
                c.element.trigger("flip:done"), "function" == typeof a && a.call(c.element)
            })
        },
        flip: function (a) {
            if (!this.isFlipped) {
                this.isFlipped = !0;
                var b = "rotate" + this.setting.axis;
                this.frontElement.css({
                    transform: b + (this.setting.reverse ? "(-180deg)" : "(180deg)"),
                    "z-index": "0"
                }), this.backElement.css({
                    transform: b + "(0deg)",
                    "z-index": "1"
                }), this.flipDone(a)
            }
        },
        unflip: function (a) {
            if (this.isFlipped) {
                this.isFlipped = !1;
                var b = "rotate" + this.setting.axis;
                this.frontElement.css({
                    transform: b + "(0deg)",
                    "z-index": "1"
                }), this.backElement.css({
                    transform: b + (this.setting.reverse ? "(180deg)" : "(-180deg)"),
                    "z-index": "0"
                }), this.flipDone(a)
            }
        },
        getFrontElement: function () {
            return this.setting.front instanceof a ? this.setting.front : this.element.find(this.setting.front)
        },
        getBackElement: function () {
            return this.setting.back instanceof a ? this.setting.back : this.element.find(this.setting.back)
        },
        init: function (a) {
            var b = this,
                c = b.frontElement.add(b.backElement),
                d = "rotate" + b.setting.axis,
                e = 2 * b.element["outer" + ("rotatex" === d ? "Height" : "Width")](),
                f = {
                    perspective: e,
                    position: "relative"
                },
                g = {
                    transform: d + "(" + (b.setting.reverse ? "180deg" : "-180deg") + ")",
                    "z-index": "0",
                    position: "relative"
                },
                h = {
                    "backface-visibility": "hidden",
                    "transform-style": "preserve-3d",
                    position: "absolute",
                    "z-index": "1"
                };
            b.setting.forceHeight ? c.outerHeight(b.element.height()) : b.setting.autoSize && (h.height = "100%"), b.setting.forceWidth ? c.outerWidth(b.element.width()) : b.setting.autoSize && (h.width = "100%"), (window.chrome || window.Intl && Intl.v8BreakIterator) && "CSS" in window && (f["-webkit-transform-style"] = "preserve-3d"), c.css(h).find("*").css({
                "backface-visibility": "hidden"
            }), b.element.css(f), b.backElement.css(g), setTimeout(function () {
                var d = b.setting.speed / 1e3 || .5;
                c.css({
                    transition: "all " + d + "s ease-out"
                }), "function" == typeof a && a.call(b.element)
            }, 20), b.attachEvents()
        },
        clickHandler: function (b) {
            b || (b = window.event), this.element.find(a(b.target).closest('button, a, input[type="submit"]')).length || (this.isFlipped ? this.unflip() : this.flip())
        },
        hoverHandler: function () {
            var b = this;
            b.element.off("mouseleave.flip"), b.flip(), setTimeout(function () {
                b.element.on("mouseleave.flip", a.proxy(b.unflip, b)), b.element.is(":hover") || b.unflip()
            }, b.setting.speed + 150)
        },
        attachEvents: function () {
            var b = this;

            console.log("b from jb_flip: " + Object.keys(b));

 /*
            "click" === b.setting.trigger ? b.element.on(a.fn.tap ? "tap.flip" : "click.flip", a.proxy(b.clickHandler, b)) : "hover" === b.setting.trigger && (b.element.on("mouseenter.flip", a.proxy(b.hoverHandler, b)), b.element.on("mouseleave.flip", a.proxy(b.unflip, b)))
        },
//===================  .flip-card:focus-within .flip-card-inner, .flip-card:active .flip-card-inner, .flip-card:focus .flip-card-inner
*/
        attachEvents: function () {
            var b = this;
            "keypress" === b.setting.trigger ? b.element.on(a.fn.tap ? "tap.flip" : "keypress.flip", a.proxy(b.clickHandler, b)) : "focus" === b.setting.trigger && (b.element.on("keydown.flip", a.proxy(b.hoverHandler, b)), b.element.on("keyup.flip", a.proxy(b.unflip, b)))
},

//===================
        flipChanged: function (a) {
            this.element.trigger("flip:change"), "function" == typeof a && a.call(this.element)
        },
        changeSettings: function (a, b) {
            var c = this,
                d = !1;
            if (void 0 !== a.axis && c.setting.axis !== a.axis.toLowerCase() && (c.setting.axis = a.axis.toLowerCase(), d = !0), void 0 !== a.reverse && c.setting.reverse !== a.reverse && (c.setting.reverse = a.reverse, d = !0), d) {
                var e = c.frontElement.add(c.backElement),
                    f = e.css(["transition-property", "transition-timing-function", "transition-duration", "transition-delay"]);
                e.css({
                    transition: "none"
                });
                var g = "rotate" + c.setting.axis;
                c.isFlipped ? c.frontElement.css({
                    transform: g + (c.setting.reverse ? "(-180deg)" : "(180deg)"),
                    "z-index": "0"
                }) : c.backElement.css({
                    transform: g + (c.setting.reverse ? "(180deg)" : "(-180deg)"),
                    "z-index": "0"
                }), setTimeout(function () {
                    e.css(f), c.flipChanged(b)
                }, 0)
            } else c.flipChanged(b)
        }
    }), a.fn.flip = function (b, d) {
        return "function" == typeof b && (d = b), "string" == typeof b || "boolean" == typeof b ? this.each(function () {
            var c = a(this).data("flip-model");
            "toggle" === b && (b = !c.isFlipped), b ? c.flip(d) : c.unflip(d)
        }) : this.each(function () {
            if (a(this).data("flip-model")) {
                var e = a(this).data("flip-model");
                !b || void 0 === b.axis && void 0 === b.reverse || e.changeSettings(b, d)
            } else a(this).data("flip-model", new c(a(this), b || {}, d))
        }), this
    }
}(jQuery);
//# sourceMappingURL=jquery.flip.min.js.map