/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/js/options.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/js/options.js":
/*!*********************************!*\
  !*** ./src/pages/js/options.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ajax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ajax.js */ \"./src/pages/js/utils/ajax.js\");\n__webpack_require__(/*! ../sass/options.css */ \"./src/pages/sass/options.css\"); //xhr\n\n\n\nvar bindFn = {\n  btn: function btn(use) {\n    Object(_utils_ajax_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      url: '/api/set_use',\n      data: {\n        use: use\n      },\n      dataType: 'json',\n      success: function success(res) {\n        if (res.code == 200) {\n          alert('成功选择：集成方式' + use);\n          window.location.href = '/pages/params.html';\n        }\n      },\n      error: function error(msg) {}\n    });\n  }\n};\nvar switchUse;\ndocument.body.addEventListener('click', function (e) {\n  var evt = e || window.event;\n  var target = evt.target || evt.srcElement;\n\n  while (target && target != document) {\n    var className = target.className;\n    var id = target.id;\n\n    if (className === 'item') {\n      switchUse = target.dataset.use;\n      document.querySelectorAll('.on').forEach(function (item) {\n        var classNameArr = item.className.split(' ');\n        console.log(classNameArr);\n        var index = classNameArr.indexOf('on');\n        classNameArr.splice(index, 1);\n        item.className = classNameArr.join(' ');\n      });\n      target.className = target.className ? target.className + ' on' : 'on'; // bindFn.item( type );\n    } else if (id === 'next') {\n      if (!switchUse) {\n        alert('请填写相关配置参数');\n        return;\n      }\n\n      bindFn.btn(switchUse);\n    }\n\n    target = target.parentNode;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvanMvb3B0aW9ucy5qcz8wOGE0Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJiaW5kRm4iLCJidG4iLCJ1c2UiLCJhamF4IiwidXJsIiwiZGF0YSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJhbGVydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImVycm9yIiwibXNnIiwic3dpdGNoVXNlIiwiZG9jdW1lbnQiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJldnQiLCJldmVudCIsInRhcmdldCIsInNyY0VsZW1lbnQiLCJjbGFzc05hbWUiLCJpZCIsImRhdGFzZXQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJjbGFzc05hbWVBcnIiLCJzcGxpdCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJqb2luIiwicGFyZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUFBO0FBQUFBO0FBQUFBLG1CQUFPLENBQUMseURBQUQsQ0FBUCxDLENBQ0E7OztBQUNBO0FBR0EsSUFBTUMsTUFBTSxHQUFHO0FBQ1hDLEtBQUcsRUFBRSxhQUFBQyxHQUFHLEVBQUc7QUFDUEMsa0VBQUksQ0FBQztBQUNIQyxTQUFHLEVBQUUsY0FERjtBQUVIQyxVQUFJLEVBQUU7QUFDRkgsV0FBRyxFQUFFQTtBQURILE9BRkg7QUFLSEksY0FBUSxFQUFFLE1BTFA7QUFNSEMsYUFBTyxFQUFFLGlCQUFDQyxHQUFELEVBQVM7QUFDYixZQUFJQSxHQUFHLENBQUNDLElBQUosSUFBWSxHQUFoQixFQUFxQjtBQUNoQkMsZUFBSyxDQUFFLGNBQWNSLEdBQWhCLENBQUw7QUFDQVMsZ0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsb0JBQXZCO0FBQ0o7QUFDTCxPQVhFO0FBWUhDLFdBQUssRUFBRSxlQUFDQyxHQUFELEVBQVMsQ0FBRTtBQVpmLEtBQUQsQ0FBSjtBQWNIO0FBaEJVLENBQWY7QUFtQkEsSUFBSUMsU0FBSjtBQUNBQyxRQUFRLENBQUNDLElBQVQsQ0FBY0MsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBdUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzlDLE1BQU1DLEdBQUcsR0FBR0QsQ0FBQyxJQUFJVCxNQUFNLENBQUNXLEtBQXhCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHRixHQUFHLENBQUNFLE1BQUosSUFBY0YsR0FBRyxDQUFDRyxVQUEvQjs7QUFDQSxTQUFPRCxNQUFNLElBQUlBLE1BQU0sSUFBSU4sUUFBM0IsRUFBcUM7QUFDakMsUUFBTVEsU0FBUyxHQUFHRixNQUFNLENBQUNFLFNBQXpCO0FBQ0EsUUFBTUMsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQWxCOztBQUNBLFFBQUlELFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN0QlQsZUFBUyxHQUFHTyxNQUFNLENBQUNJLE9BQVAsQ0FBZXpCLEdBQTNCO0FBQ0FlLGNBQVEsQ0FBQ1csZ0JBQVQsQ0FBMkIsS0FBM0IsRUFBbUNDLE9BQW5DLENBQTJDLFVBQUFDLElBQUksRUFBRTtBQUM3QyxZQUFNQyxZQUFZLEdBQUdELElBQUksQ0FBQ0wsU0FBTCxDQUFlTyxLQUFmLENBQXFCLEdBQXJCLENBQXJCO0FBQ0FDLGVBQU8sQ0FBQ0MsR0FBUixDQUFhSCxZQUFiO0FBQ0EsWUFBTUksS0FBSyxHQUFHSixZQUFZLENBQUNLLE9BQWIsQ0FBc0IsSUFBdEIsQ0FBZDtBQUNBTCxvQkFBWSxDQUFDTSxNQUFiLENBQXFCRixLQUFyQixFQUE0QixDQUE1QjtBQUNBTCxZQUFJLENBQUNMLFNBQUwsR0FBaUJNLFlBQVksQ0FBQ08sSUFBYixDQUFrQixHQUFsQixDQUFqQjtBQUNILE9BTkQ7QUFPQWYsWUFBTSxDQUFDRSxTQUFQLEdBQW1CRixNQUFNLENBQUNFLFNBQVAsR0FBbUJGLE1BQU0sQ0FBQ0UsU0FBUCxHQUFtQixLQUF0QyxHQUE4QyxJQUFqRSxDQVRzQixDQVd0QjtBQUNILEtBWkQsTUFZTyxJQUFJQyxFQUFFLEtBQUssTUFBWCxFQUFtQjtBQUN0QixVQUFJLENBQUNWLFNBQUwsRUFBZ0I7QUFDWk4sYUFBSyxDQUFFLFdBQUYsQ0FBTDtBQUNBO0FBQ0g7O0FBQ0RWLFlBQU0sQ0FBQ0MsR0FBUCxDQUFZZSxTQUFaO0FBQ0g7O0FBQ0RPLFVBQU0sR0FBR0EsTUFBTSxDQUFDZ0IsVUFBaEI7QUFDSDtBQUNILENBM0JGIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2pzL29wdGlvbnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKCcuLi9zYXNzL29wdGlvbnMuY3NzJyk7XG4vL3hoclxuaW1wb3J0IGFqYXggZnJvbSAnLi91dGlscy9hamF4LmpzJ1xuIFxuXG5jb25zdCBiaW5kRm4gPSB7XG4gICAgYnRuOiB1c2UgPT57XG4gICAgICAgIGFqYXgoe1xuICAgICAgICAgIHVybDogJy9hcGkvc2V0X3VzZScsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICB1c2U6IHVzZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICBpZiggcmVzLmNvZGUgPT0gMjAwICl7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCAn5oiQ5Yqf6YCJ5oup77ya6ZuG5oiQ5pa55byPJyArIHVzZSApO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvcGFnZXMvcGFyYW1zLmh0bWwnO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZXJyb3I6IChtc2cpID0+IHt9XG4gICAgICB9KTtcbiAgICB9XG59XG5cbmxldCBzd2l0Y2hVc2U7XG5kb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihlKXtcbiAgICBjb25zdCBldnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcbiAgICBsZXQgdGFyZ2V0ID0gZXZ0LnRhcmdldCB8fCBldnQuc3JjRWxlbWVudDtcbiAgICB3aGlsZSggdGFyZ2V0ICYmIHRhcmdldCAhPSBkb2N1bWVudCApe1xuICAgICAgICBjb25zdCBjbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lO1xuICAgICAgICBjb25zdCBpZCA9IHRhcmdldC5pZDtcbiAgICAgICAgaWYoIGNsYXNzTmFtZSA9PT0gJ2l0ZW0nICl7XG4gICAgICAgICAgICBzd2l0Y2hVc2UgPSB0YXJnZXQuZGF0YXNldC51c2U7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCAnLm9uJyApLmZvckVhY2goaXRlbT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZUFyciA9IGl0ZW0uY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIGNsYXNzTmFtZUFyciApXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjbGFzc05hbWVBcnIuaW5kZXhPZiggJ29uJyApO1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZUFyci5zcGxpY2UoIGluZGV4LCAxICk7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc05hbWUgPSBjbGFzc05hbWVBcnIuam9pbignICcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZSA/IHRhcmdldC5jbGFzc05hbWUgKyAnIG9uJyA6ICdvbic7XG4gICAgXG4gICAgICAgICAgICAvLyBiaW5kRm4uaXRlbSggdHlwZSApO1xuICAgICAgICB9IGVsc2UgaWYoIGlkID09PSAnbmV4dCcgKXtcbiAgICAgICAgICAgIGlmKCAhc3dpdGNoVXNlICl7XG4gICAgICAgICAgICAgICAgYWxlcnQoICfor7floavlhpnnm7jlhbPphY3nva7lj4LmlbAnICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmluZEZuLmJ0biggc3dpdGNoVXNlICk7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgfVxuIH0pOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/js/options.js\n");

/***/ }),

/***/ "./src/pages/js/utils/ajax.js":
/*!************************************!*\
  !*** ./src/pages/js/utils/ajax.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//创建ajax函数\nvar ajax = function ajax(_options) {\n  var options = _options || {};\n  options.type = (options.type || 'GET').toUpperCase();\n  options.dataType = options.dataType || 'javascript'; //格式化参数\n\n  var formatParams = function formatParams(data) {\n    var arr = [];\n\n    for (var name in data) {\n      arr.push(encodeURIComponent(name) + '=' + encodeURIComponent(data[name]));\n    } //arr.push(('v=' + Math.random()).replace('.',''));\n\n\n    return arr.join('&');\n  };\n\n  var params = options.data ? formatParams(options.data) : ''; //创建-第一步\n\n  var xhr;\n\n  if (window.XMLHttpRequest) {\n    xhr = new XMLHttpRequest();\n  } else {\n    xhr = ActiveXObject('Microsoft.XMLHTTP');\n  } //在响应成功前设置一个定时器（响应超时提示）\n\n\n  var timer = setTimeout(function () {\n    //让后续的函数停止执行\n    xhr.onreadystatechange = null;\n    console.log('timeout:' + options.url);\n    options.error && options.error(status);\n  }, options.timeout || 8000); //接收-第三步\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState == 4) {\n      clearTimeout(timer);\n      var _status = xhr.status;\n\n      if (_status === 200 || _status === 304) {\n        var resData = options.dataType === 'json' ? JSON.parse(xhr.responseText) : xhr.responseText;\n        options.success && options.success(resData, xhr.responseXML);\n      } else {\n        options.error && options.error(_status);\n      }\n    }\n  };\n\n  xhr.withCredentials = true; //连接和发送-第二步\n\n  if (options.type == 'GET') {\n    xhr.open('GET', options.url + '?' + params, true); //xhr.setRequestHeader(\"Accept-Encoding\", \"gzip\");\n\n    xhr.send(null);\n  } else if (options.type == 'POST') {\n    xhr.open('POST', options.url, true); //设置表单提交时的内容类型\n\n    xhr.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n    xhr.send(params);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ajax); // module.exports = ajax;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvanMvdXRpbHMvYWpheC5qcz81MGRmIl0sIm5hbWVzIjpbImFqYXgiLCJfb3B0aW9ucyIsIm9wdGlvbnMiLCJ0eXBlIiwidG9VcHBlckNhc2UiLCJkYXRhVHlwZSIsImZvcm1hdFBhcmFtcyIsImRhdGEiLCJhcnIiLCJuYW1lIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJwYXJhbXMiLCJ4aHIiLCJ3aW5kb3ciLCJYTUxIdHRwUmVxdWVzdCIsIkFjdGl2ZVhPYmplY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiZXJyb3IiLCJzdGF0dXMiLCJ0aW1lb3V0IiwicmVhZHlTdGF0ZSIsImNsZWFyVGltZW91dCIsInJlc0RhdGEiLCJKU09OIiwicGFyc2UiLCJyZXNwb25zZVRleHQiLCJzdWNjZXNzIiwicmVzcG9uc2VYTUwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJvcGVuIiwic2VuZCIsInNldFJlcXVlc3RIZWFkZXIiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFDQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFVQyxRQUFWLEVBQW9CO0FBQzVCLE1BQU1DLE9BQU8sR0FBR0QsUUFBUSxJQUFJLEVBQTVCO0FBQ0FDLFNBQU8sQ0FBQ0MsSUFBUixHQUFlLENBQUNELE9BQU8sQ0FBQ0MsSUFBUixJQUFnQixLQUFqQixFQUF3QkMsV0FBeEIsRUFBZjtBQUNBRixTQUFPLENBQUNHLFFBQVIsR0FBbUJILE9BQU8sQ0FBQ0csUUFBUixJQUFvQixZQUF2QyxDQUg0QixDQUs1Qjs7QUFDQSxNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFVQyxJQUFWLEVBQWdCO0FBQ2pDLFFBQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLFNBQUssSUFBSUMsSUFBVCxJQUFpQkYsSUFBakIsRUFBdUI7QUFDbkJDLFNBQUcsQ0FBQ0UsSUFBSixDQUFTQyxrQkFBa0IsQ0FBQ0YsSUFBRCxDQUFsQixHQUEyQixHQUEzQixHQUFpQ0Usa0JBQWtCLENBQUNKLElBQUksQ0FBQ0UsSUFBRCxDQUFMLENBQTVEO0FBQ0gsS0FKZ0MsQ0FLakM7OztBQUNBLFdBQU9ELEdBQUcsQ0FBQ0ksSUFBSixDQUFTLEdBQVQsQ0FBUDtBQUNILEdBUEQ7O0FBU0EsTUFBTUMsTUFBTSxHQUFHWCxPQUFPLENBQUNLLElBQVIsR0FBZUQsWUFBWSxDQUFDSixPQUFPLENBQUNLLElBQVQsQ0FBM0IsR0FBNEMsRUFBM0QsQ0FmNEIsQ0FrQjVCOztBQUNBLE1BQUlPLEdBQUo7O0FBQ0EsTUFBSUMsTUFBTSxDQUFDQyxjQUFYLEVBQTJCO0FBQ3ZCRixPQUFHLEdBQUcsSUFBSUUsY0FBSixFQUFOO0FBQ0gsR0FGRCxNQUVPO0FBQ0hGLE9BQUcsR0FBR0csYUFBYSxDQUFDLG1CQUFELENBQW5CO0FBQ0gsR0F4QjJCLENBMEI1Qjs7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBWTtBQUNqQztBQUNBTCxPQUFHLENBQUNNLGtCQUFKLEdBQXlCLElBQXpCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQWFwQixPQUFPLENBQUNxQixHQUFqQztBQUNBckIsV0FBTyxDQUFDc0IsS0FBUixJQUFpQnRCLE9BQU8sQ0FBQ3NCLEtBQVIsQ0FBY0MsTUFBZCxDQUFqQjtBQUNILEdBTHVCLEVBS3JCdkIsT0FBTyxDQUFDd0IsT0FBUixJQUFtQixJQUxFLENBQXhCLENBM0I0QixDQW1DNUI7O0FBQ0FaLEtBQUcsQ0FBQ00sa0JBQUosR0FBeUIsWUFBWTtBQUNqQyxRQUFJTixHQUFHLENBQUNhLFVBQUosSUFBa0IsQ0FBdEIsRUFBeUI7QUFDckJDLGtCQUFZLENBQUNWLEtBQUQsQ0FBWjtBQUNBLFVBQU1PLE9BQU0sR0FBR1gsR0FBRyxDQUFDVyxNQUFuQjs7QUFDQSxVQUFJQSxPQUFNLEtBQUssR0FBWCxJQUFrQkEsT0FBTSxLQUFLLEdBQWpDLEVBQXNDO0FBQ2xDLFlBQU1JLE9BQU8sR0FBRzNCLE9BQU8sQ0FBQ0csUUFBUixLQUFxQixNQUFyQixHQUE4QnlCLElBQUksQ0FBQ0MsS0FBTCxDQUFXakIsR0FBRyxDQUFDa0IsWUFBZixDQUE5QixHQUE2RGxCLEdBQUcsQ0FBQ2tCLFlBQWpGO0FBQ0E5QixlQUFPLENBQUMrQixPQUFSLElBQW1CL0IsT0FBTyxDQUFDK0IsT0FBUixDQUFnQkosT0FBaEIsRUFBeUJmLEdBQUcsQ0FBQ29CLFdBQTdCLENBQW5CO0FBQ0gsT0FIRCxNQUdPO0FBQ0hoQyxlQUFPLENBQUNzQixLQUFSLElBQWlCdEIsT0FBTyxDQUFDc0IsS0FBUixDQUFjQyxPQUFkLENBQWpCO0FBQ0g7QUFDSjtBQUNKLEdBWEQ7O0FBWUFYLEtBQUcsQ0FBQ3FCLGVBQUosR0FBc0IsSUFBdEIsQ0FoRDRCLENBaUQ1Qjs7QUFDQSxNQUFJakMsT0FBTyxDQUFDQyxJQUFSLElBQWdCLEtBQXBCLEVBQTJCO0FBQ3ZCVyxPQUFHLENBQUNzQixJQUFKLENBQVMsS0FBVCxFQUFnQmxDLE9BQU8sQ0FBQ3FCLEdBQVIsR0FBYyxHQUFkLEdBQW9CVixNQUFwQyxFQUE0QyxJQUE1QyxFQUR1QixDQUV2Qjs7QUFDQUMsT0FBRyxDQUFDdUIsSUFBSixDQUFTLElBQVQ7QUFDSCxHQUpELE1BSU8sSUFBSW5DLE9BQU8sQ0FBQ0MsSUFBUixJQUFnQixNQUFwQixFQUE0QjtBQUMvQlcsT0FBRyxDQUFDc0IsSUFBSixDQUFTLE1BQVQsRUFBaUJsQyxPQUFPLENBQUNxQixHQUF6QixFQUE4QixJQUE5QixFQUQrQixDQUUvQjs7QUFDQVQsT0FBRyxDQUFDd0IsZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsbUNBQXJDO0FBQ0F4QixPQUFHLENBQUN1QixJQUFKLENBQVN4QixNQUFUO0FBQ0g7QUFDSixDQTVERjs7QUE4RGdCYixtRUFBZixFLENBRUQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvanMvdXRpbHMvYWpheC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy/liJvlu7phamF45Ye95pWwXG5jb25zdCBhamF4ID0gZnVuY3Rpb24gKF9vcHRpb25zKSB7XG4gICAgIGNvbnN0IG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fTtcbiAgICAgb3B0aW9ucy50eXBlID0gKG9wdGlvbnMudHlwZSB8fCAnR0VUJykudG9VcHBlckNhc2UoKTtcbiAgICAgb3B0aW9ucy5kYXRhVHlwZSA9IG9wdGlvbnMuZGF0YVR5cGUgfHwgJ2phdmFzY3JpcHQnO1xuIFxuICAgICAvL+agvOW8j+WMluWPguaVsFxuICAgICBjb25zdCBmb3JtYXRQYXJhbXMgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgYXJyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFbbmFtZV0pKTtcbiAgICAgICAgIH1cbiAgICAgICAgIC8vYXJyLnB1c2goKCd2PScgKyBNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKCcuJywnJykpO1xuICAgICAgICAgcmV0dXJuIGFyci5qb2luKCcmJyk7XG4gICAgIH1cbiBcbiAgICAgY29uc3QgcGFyYW1zID0gb3B0aW9ucy5kYXRhID8gZm9ybWF0UGFyYW1zKG9wdGlvbnMuZGF0YSkgOiAnJztcbiBcbiBcbiAgICAgLy/liJvlu7ot56ys5LiA5q2lXG4gICAgIGxldCB4aHI7XG4gICAgIGlmICh3aW5kb3cuWE1MSHR0cFJlcXVlc3QpIHtcbiAgICAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICB9IGVsc2Uge1xuICAgICAgICAgeGhyID0gQWN0aXZlWE9iamVjdCgnTWljcm9zb2Z0LlhNTEhUVFAnKTtcbiAgICAgfVxuIFxuICAgICAvL+WcqOWTjeW6lOaIkOWKn+WJjeiuvue9ruS4gOS4quWumuaXtuWZqO+8iOWTjeW6lOi2heaXtuaPkOekuu+8iVxuICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgLy/orqnlkI7nu63nmoTlh73mlbDlgZzmraLmiafooYxcbiAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xuICAgICAgICAgY29uc29sZS5sb2coJ3RpbWVvdXQ6JyArIG9wdGlvbnMudXJsKTtcbiAgICAgICAgIG9wdGlvbnMuZXJyb3IgJiYgb3B0aW9ucy5lcnJvcihzdGF0dXMpO1xuICAgICB9LCBvcHRpb25zLnRpbWVvdXQgfHwgODAwMCk7XG4gXG4gXG4gICAgIC8v5o6l5pS2LeesrOS4ieatpVxuICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQpIHtcbiAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwIHx8IHN0YXR1cyA9PT0gMzA0KSB7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHJlc0RhdGEgPSBvcHRpb25zLmRhdGFUeXBlID09PSAnanNvbicgPyBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpIDogeGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzICYmIG9wdGlvbnMuc3VjY2VzcyhyZXNEYXRhLCB4aHIucmVzcG9uc2VYTUwpO1xuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgIG9wdGlvbnMuZXJyb3IgJiYgb3B0aW9ucy5lcnJvcihzdGF0dXMpO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgIH1cbiAgICAgfVxuICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgLy/ov57mjqXlkozlj5HpgIEt56ys5LqM5q2lXG4gICAgIGlmIChvcHRpb25zLnR5cGUgPT0gJ0dFVCcpIHtcbiAgICAgICAgIHhoci5vcGVuKCdHRVQnLCBvcHRpb25zLnVybCArICc/JyArIHBhcmFtcywgdHJ1ZSk7XG4gICAgICAgICAvL3hoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kaW5nXCIsIFwiZ3ppcFwiKTtcbiAgICAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgICB9IGVsc2UgaWYgKG9wdGlvbnMudHlwZSA9PSAnUE9TVCcpIHtcbiAgICAgICAgIHhoci5vcGVuKCdQT1NUJywgb3B0aW9ucy51cmwsIHRydWUpO1xuICAgICAgICAgLy/orr7nva7ooajljZXmj5DkuqTml7bnmoTlhoXlrrnnsbvlnotcbiAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpO1xuICAgICAgICAgeGhyLnNlbmQocGFyYW1zKTtcbiAgICAgfVxuIH1cbiBcbiBleHBvcnQgZGVmYXVsdCBhamF4O1xuXG4vLyBtb2R1bGUuZXhwb3J0cyA9IGFqYXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/js/utils/ajax.js\n");

/***/ }),

/***/ "./src/pages/sass/options.css":
/*!************************************!*\
  !*** ./src/pages/sass/options.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc2Fzcy9vcHRpb25zLmNzcz8wZjhhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Nhc3Mvb3B0aW9ucy5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/sass/options.css\n");

/***/ })

/******/ });