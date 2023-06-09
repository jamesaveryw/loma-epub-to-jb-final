/* New flip card code 01/24/2020 Jcc */ ! function (e) {
    var t = function (t, i, n) {
        this.setting = {
            axis: "y",
            reverse: !1,
            trigger: "click",
            speed: 500,
            forceHeight: !1,
            forceWidth: !1,
            autoSize: !0,
            front: ".front",
            back: ".back"
        }, this.setting = e.extend(this.setting, i), "string" != typeof i.axis || "x" !== i.axis.toLowerCase() && "y" !== i.axis.toLowerCase() || (this.setting.axis = i.axis.toLowerCase()), "boolean" == typeof i.reverse && (this.setting.reverse = i.reverse), "string" == typeof i.trigger && (this.setting.trigger = i.trigger.toLowerCase());
        var s = parseInt(i.speed);
        isNaN(s) || (this.setting.speed = s), "boolean" == typeof i.forceHeight && (this.setting.forceHeight = i.forceHeight), "boolean" == typeof i.forceWidth && (this.setting.forceWidth = i.forceWidth), "boolean" == typeof i.autoSize && (this.setting.autoSize = i.autoSize), ("string" == typeof i.front || i.front instanceof e) && (this.setting.front = i.front), ("string" == typeof i.back || i.back instanceof e) && (this.setting.back = i.back), this.element = t, this.frontElement = this.getFrontElement(), this.backElement = this.getBackElement(), this.isFlipped = !1, this.init(n)
    };
    e.extend(t.prototype, {
        flipDone: function (e) {
            var t = this;
            t.element.one(function () {
                var e, t = document.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in i)
                    if (void 0 !== t.style[e]) return i[e]
            }(), function () {
                t.element.trigger("flip:done"), "function" == typeof e && e.call(t.element)
            })
        },
        flip: function (e) {
            if ("block" !== document.getElementById("keyModal").style.display && !this.isFlipped) {
                this.isFlipped = !0;
                var t = "rotate" + this.setting.axis;
                this.frontElement.css({
                    transform: t + (this.setting.reverse ? "(-180deg)" : "(180deg)"),
                    "z-index": "0"
                }), this.backElement.css({
                    transform: t + "(0deg)",
                    "z-index": "1"
                }), this.flipDone(e)
            }
        },
        unflip: function (e) {
            if ("block" !== document.getElementById("keyModal").style.display && this.isFlipped) {
                this.isFlipped = !1;
                var t = "rotate" + this.setting.axis;
                this.frontElement.css({
                    transform: t + "(0deg)",
                    "z-index": "1"
                }), this.backElement.css({
                    transform: t + (this.setting.reverse ? "(180deg)" : "(-180deg)"),
                    "z-index": "0"
                }), this.flipDone(e)
            }
        },
        getFrontElement: function () {
            return this.setting.front instanceof e ? this.setting.front : this.element.find(this.setting.front)
        },
        getBackElement: function () {
            return this.setting.back instanceof e ? this.setting.back : this.element.find(this.setting.back)
        },
        init: function (e) {
            var t = this,
                i = t.frontElement.add(t.backElement),
                n = "rotate" + t.setting.axis,
                s = {
                    perspective: 2 * t.element["outer" + ("rotatex" === n ? "Height" : "Width")](),
                    position: "relative"
                },
                o = {
                    transform: n + "(" + (t.setting.reverse ? "180deg" : "-180deg") + ")",
                    "z-index": "0",
                    position: "relative"
                },
                r = {
                    "backface-visibility": "hidden",
                    "transform-style": "preserve-3d",
                    position: "absolute",
                    "z-index": "1"
                };
            t.setting.forceHeight ? i.outerHeight(t.element.height()) : t.setting.autoSize && (r.height = "100%"), t.setting.forceWidth ? i.outerWidth(t.element.width()) : t.setting.autoSize && (r.width = "100%"), (window.chrome || window.Intl && Intl.v8BreakIterator) && "CSS" in window && (s["-webkit-transform-style"] = "preserve-3d"), i.css(r).find("*").css({
                "backface-visibility": "hidden"
            }), t.element.css(s), t.backElement.css(o), setTimeout(function () {
                var n = t.setting.speed / 1e3 || .5;
                i.css({
                    transition: "all " + n + "s ease-out"
                }), "function" == typeof e && e.call(t.element)
            }, 20), t.attachEvents()
        },
        clickHandler: function (t) {
            t || (t = window.event), this.element.find(e(t.target).closest('button, a, input[type="submit"]')).length || (this.isFlipped ? this.unflip() : this.flip())
        },
        hoverHandler: function () {
            var t = this;
            t.element.off("mouseleave.flip"), t.flip(), setTimeout(function () {
                t.element.on("mouseleave.flip", e.proxy(t.unflip, t)), t.element.is(":hover") || t.unflip()
            }, t.setting.speed + 150)
        },
        attachEvents: function () {
            var t = this;
            "click" === t.setting.trigger ? t.element.on(e.fn.tap ? "tap.flip" : "click.flip", e.proxy(t.clickHandler, t)) : "hover" === t.setting.trigger && (t.element.on("mouseenter.flip", e.proxy(t.hoverHandler, t)), t.element.on("mouseleave.flip", e.proxy(t.unflip, t)))
        },
        flipChanged: function (e) {
            this.element.trigger("flip:change"), "function" == typeof e && e.call(this.element)
        },
        changeSettings: function (e, t) {
            var i = this,
                n = !1;
            if (void 0 !== e.axis && i.setting.axis !== e.axis.toLowerCase() && (i.setting.axis = e.axis.toLowerCase(), n = !0), void 0 !== e.reverse && i.setting.reverse !== e.reverse && (i.setting.reverse = e.reverse, n = !0), n) {
                var s = i.frontElement.add(i.backElement),
                    o = s.css(["transition-property", "transition-timing-function", "transition-duration", "transition-delay"]);
                s.css({
                    transition: "none"
                });
                var r = "rotate" + i.setting.axis;
                i.isFlipped ? i.frontElement.css({
                    transform: r + (i.setting.reverse ? "(-180deg)" : "(180deg)"),
                    "z-index": "0"
                }) : i.backElement.css({
                    transform: r + (i.setting.reverse ? "(180deg)" : "(-180deg)"),
                    "z-index": "0"
                }), setTimeout(function () {
                    s.css(o), i.flipChanged(t)
                }, 0)
            } else i.flipChanged(t)
        }
    }), e.fn.flip = function (i, n) {
        return "function" == typeof i && (n = i), "string" == typeof i || "boolean" == typeof i ? this.each(function () {
            var t = e(this).data("flip-model");
            "toggle" === i && (i = !t.isFlipped), i ? t.flip(n) : t.unflip(n)
        }) : this.each(function () {
            if (e(this).data("flip-model")) {
                var s = e(this).data("flip-model");
                !i || void 0 === i.axis && void 0 === i.reverse || s.changeSettings(i, n)
            } else e(this).data("flip-model", new t(e(this), i || {}, n))
        }), this
    }
}(jQuery);
