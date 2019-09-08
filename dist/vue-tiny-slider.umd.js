(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tiny-slider/src/tiny-slider')) :
	typeof define === 'function' && define.amd ? define(['exports', 'tiny-slider/src/tiny-slider'], factory) :
	(global = global || self, factory(global.VueTinySlider = {}, global.tinySlider));
}(this, function (exports, tinySlider) { 'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var script = {
		name: 'TinySlider',
		props: {
			options: {
				type: Object,
				default: function _default() {
					return {};
				}
			}
		},

		slider: {},

		mounted: function mounted() {
			this.create();
		},
		destroyed: function destroyed() {
			this.destroy();
		},

		methods: {
			slider: function slider() {
				return this.$options.slider;
			},
			create: function create() {
				var slider = tinySlider.tns(_extends({ container: this.$el }, this.options));
				slider.events.on('indexChanged', this.onIndexChanged);
				slider.events.on('transitionStart', this.onTransitionStart);
				slider.events.on('transitionEnd', this.onTransitionEnd);
				slider.events.on('newBreakpointStart', this.onNewBreakpointStart);
				slider.events.on('newBreakpointEnd', this.onNewBreakpointEnd);
				slider.events.on('touchStart', this.onTouchStart);
				slider.events.on('touchMove', this.onTouchMove);
				slider.events.on('touchEnd', this.onTouchEnd);
				slider.events.on('dragStart', this.onDragStart);
				slider.events.on('dragMove', this.onDragMove);
				slider.events.on('dragEnd', this.onDragEnd);
			},
			destroy: function destroy() {
				var slider = this.slider();
				slider.events.off('indexChanged', this.onIndexChanged);
				slider.events.off('transitionStart', this.onTransitionStart);
				slider.events.off('transitionEnd', this.onTransitionEnd);
				slider.events.off('newBreakpointStart', this.onNewBreakpointStart);
				slider.events.off('newBreakpointEnd', this.onNewBreakpointEnd);
				slider.events.off('touchStart', this.onTouchStart);
				slider.events.off('touchMove', this.onTouchMove);
				slider.events.off('touchEnd', this.onTouchEnd);
				slider.events.off('dragStart', this.onDragStart);
				slider.events.off('dragMove', this.onDragMove);
				slider.events.off('dragEnd', this.onDragEnd);
				slider.destroy();
			},
			reTinySlider: function reTinySlider() {
				this.destroy();
				this.slider().rebuild();
			},
			next: function next() {
				this.goTo('next');
			},
			prev: function prev() {
				this.goTo('prev');
			},
			pause: function pause() {
				this.slider().pause();
			},
			play: function play() {
				this.slider().play();
			},
			goTo: function goTo(index) {
				this.slider().goTo(index);
			},
			getInfo: function getInfo() {
				this.slider().getInfo();
			},
			currentSlide: function currentSlide() {
				return this.getInfo().displayIndex;
			},


			// Events
			onIndexChanged: function onIndexChanged(info) {
				this.$emit('indexChanged', info);
			},
			onTransitionStart: function onTransitionStart(info) {
				this.$emit('transitionStart', info);
			},
			onTransitionEnd: function onTransitionEnd(info) {
				this.$emit('transitionEnd', info);
			},
			onNewBreakpointStart: function onNewBreakpointStart(info) {
				this.$emit('newBreakpointStart', info);
			},
			onNewBreakpointEnd: function onNewBreakpointEnd(info) {
				this.$emit('newBreakpointEnd', info);
			},
			onTouchStart: function onTouchStart(info) {
				this.$emit('touchStart', info);
			},
			onTouchMove: function onTouchMove(info) {
				this.$emit('touchMove', info);
			},
			onTouchEnd: function onTouchEnd(info) {
				this.$emit('touchEnd', info);
			},
			onDragStart: function onDragStart(info) {
				this.$emit('dragStart', info);
			},
			onDragMove: function onDragMove(info) {
				this.$emit('dragMove', info);
			},
			onDragEnd: function onDragEnd(info) {
				this.$emit('dragEnd', info);
			}
		}
	};

	function styleInject(css, ref) {
	  if ( ref === void 0 ) ref = {};
	  var insertAt = ref.insertAt;

	  if (!css || typeof document === 'undefined') { return; }

	  var head = document.head || document.getElementsByTagName('head')[0];
	  var style = document.createElement('style');
	  style.type = 'text/css';

	  if (insertAt === 'top') {
	    if (head.firstChild) {
	      head.insertBefore(style, head.firstChild);
	    } else {
	      head.appendChild(style);
	    }
	  } else {
	    head.appendChild(style);
	  }

	  if (style.styleSheet) {
	    style.styleSheet.cssText = css;
	  } else {
	    style.appendChild(document.createTextNode(css));
	  }
	}

	var css = ".tns-outer{padding:0!important}.tns-outer [hidden]{display:none!important}.tns-outer [aria-controls],.tns-outer [data-action]{cursor:pointer}.tns-slider{-webkit-transition:all 0s;transition:all 0s}.tns-slider>.tns-item{-webkit-box-sizing:border-box;box-sizing:border-box}.tns-horizontal.tns-subpixel{white-space:nowrap}.tns-horizontal.tns-subpixel>.tns-item{display:inline-block;vertical-align:top;white-space:normal}.tns-horizontal.tns-no-subpixel:after{content:'';display:table;clear:both}.tns-horizontal.tns-no-subpixel>.tns-item{float:left}.tns-horizontal.tns-carousel.tns-no-subpixel>.tns-item{margin-right:-100%}.tns-no-calc{position:relative;left:0}.tns-gallery{position:relative;left:0;min-height:1px}.tns-gallery>.tns-item{position:absolute;left:-100%;-webkit-transition:transform 0s,opacity 0s;-webkit-transition:opacity 0s,-webkit-transform 0s;transition:opacity 0s,-webkit-transform 0s;transition:transform 0s,opacity 0s;transition:transform 0s,opacity 0s,-webkit-transform 0s}.tns-gallery>.tns-slide-active{position:relative;left:auto!important}.tns-gallery>.tns-moving{-webkit-transition:all .25s;transition:all .25s}.tns-autowidth{display:inline-block}.tns-lazy-img{-webkit-transition:opacity .6s;transition:opacity .6s;opacity:.6}.tns-lazy-img.tns-complete{opacity:1}.tns-ah{-webkit-transition:height 0s;transition:height 0s}.tns-ovh{overflow:hidden}.tns-visually-hidden{position:absolute;left:-10000em}.tns-transparent{opacity:0;visibility:hidden}.tns-fadeIn{opacity:1;filter:alpha(opacity=100);z-index:0}.tns-fadeOut,.tns-normal{opacity:0;filter:alpha(opacity=0);z-index:-1}.tns-vpfix{white-space:nowrap}.tns-vpfix>div,.tns-vpfix>li{display:inline-block}.tns-t-subp2{margin:0 auto;width:310px;position:relative;height:10px;overflow:hidden}.tns-t-ct{width:2333.3333333%;width:calc(100% * 70 / 3);position:absolute;right:0}.tns-t-ct:after{content:'';display:table;clear:both}.tns-t-ct>div{width:1.4285714%;width:calc(100% / 70);height:10px;float:left}";
	styleInject(css);

	function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
	/* server only */
	, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
	  if (typeof shadowMode !== 'boolean') {
	    createInjectorSSR = createInjector;
	    createInjector = shadowMode;
	    shadowMode = false;
	  } // Vue.extend constructor export interop.


	  var options = typeof script === 'function' ? script.options : script; // render functions

	  if (template && template.render) {
	    options.render = template.render;
	    options.staticRenderFns = template.staticRenderFns;
	    options._compiled = true; // functional template

	    if (isFunctionalTemplate) {
	      options.functional = true;
	    }
	  } // scopedId


	  if (scopeId) {
	    options._scopeId = scopeId;
	  }

	  var hook;

	  if (moduleIdentifier) {
	    // server build
	    hook = function hook(context) {
	      // 2.3 injection
	      context = context || // cached call
	      this.$vnode && this.$vnode.ssrContext || // stateful
	      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
	      // 2.2 with runInNewContext: true

	      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	        context = __VUE_SSR_CONTEXT__;
	      } // inject component styles


	      if (style) {
	        style.call(this, createInjectorSSR(context));
	      } // register component module identifier for async chunk inference


	      if (context && context._registeredComponents) {
	        context._registeredComponents.add(moduleIdentifier);
	      }
	    }; // used by ssr in case component is cached and beforeCreate
	    // never gets called


	    options._ssrRegister = hook;
	  } else if (style) {
	    hook = shadowMode ? function () {
	      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
	    } : function (context) {
	      style.call(this, createInjector(context));
	    };
	  }

	  if (hook) {
	    if (options.functional) {
	      // register for functional component in vue file
	      var originalRender = options.render;

	      options.render = function renderWithStyleInjection(h, context) {
	        hook.call(context);
	        return originalRender(h, context);
	      };
	    } else {
	      // inject component registration as beforeCreate hook
	      var existing = options.beforeCreate;
	      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
	    }
	  }

	  return script;
	}

	var normalizeComponent_1 = normalizeComponent;

	/* script */
	var __vue_script__ = script;
	/* template */
	var __vue_render__ = function __vue_render__() {
	  var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('div', [_vm._t("default")], 2);
	};
	var __vue_staticRenderFns__ = [];

	/* style */
	var __vue_inject_styles__ = undefined;
	/* scoped */
	var __vue_scope_id__ = undefined;
	/* module identifier */
	var __vue_module_identifier__ = undefined;
	/* functional template */
	var __vue_is_functional_template__ = false;
	/* style inject */

	/* style inject SSR */

	var TinySlider = normalizeComponent_1({ render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, undefined, undefined);

	// install function executed by Vue.use()
	function install(Vue) {
	  if (install.installed) return;
	  install.installed = true;
	  Vue.component(TinySlider.name, TinySlider);
	}

	// Create module definition for Vue.use()
	var plugin = {
	  install: install

	  // To auto-install when vue is found
	  /* global window global */
	};var GlobalVue = null;
	if (typeof window !== 'undefined') {
	  GlobalVue = window.Vue;
	} else if (typeof global !== 'undefined') {
	  GlobalVue = global.Vue;
	}
	if (GlobalVue) {
	  GlobalVue.use(plugin);
	}

	// Inject install function into component - allows component
	// to be registered via Vue.use() as well as Vue.component()
	TinySlider.install = install;

	// It's possible to expose named exports when writing components that can
	// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
	// export const RollupDemoDirective = component;

	exports.default = TinySlider;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
