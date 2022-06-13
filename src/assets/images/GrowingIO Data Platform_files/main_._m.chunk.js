(window["webpackJsonp_gio-data-frontend"] = window["webpackJsonp_gio-data-frontend"] || []).push([["main~._m"],{

/***/ "./node_modules/@apollo/client/cache/core/cache.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/cache.js ***!
  \*********************************************************/
/*! exports provided: ApolloCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return ApolloCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");




var ApolloCache = function () {
  function ApolloCache() {
    this.getFragmentDoc = Object(optimism__WEBPACK_IMPORTED_MODULE_1__["wrap"])(_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentQueryDocument"]);
  }

  ApolloCache.prototype.batch = function (options) {
    var optimisticId = typeof options.optimistic === "string" ? options.optimistic : options.optimistic === false ? null : void 0;
    this.performTransaction(options.update, optimisticId);
  };

  ApolloCache.prototype.recordOptimisticTransaction = function (transaction, optimisticId) {
    this.performTransaction(transaction, optimisticId);
  };

  ApolloCache.prototype.transformDocument = function (document) {
    return document;
  };

  ApolloCache.prototype.identify = function (object) {
    return;
  };

  ApolloCache.prototype.gc = function () {
    return [];
  };

  ApolloCache.prototype.modify = function (options) {
    return false;
  };

  ApolloCache.prototype.transformForLink = function (document) {
    return document;
  };

  ApolloCache.prototype.readQuery = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }

    return this.read(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      rootId: options.id || 'ROOT_QUERY',
      optimistic: optimistic
    }));
  };

  ApolloCache.prototype.readFragment = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = !!options.optimistic;
    }

    return this.read(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      query: this.getFragmentDoc(options.fragment, options.fragmentName),
      rootId: options.id,
      optimistic: optimistic
    }));
  };

  ApolloCache.prototype.writeQuery = function (_a) {
    var id = _a.id,
        data = _a.data,
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["id", "data"]);

    return this.write(Object.assign(options, {
      dataId: id || 'ROOT_QUERY',
      result: data
    }));
  };

  ApolloCache.prototype.writeFragment = function (_a) {
    var id = _a.id,
        data = _a.data,
        fragment = _a.fragment,
        fragmentName = _a.fragmentName,
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["id", "data", "fragment", "fragmentName"]);

    return this.write(Object.assign(options, {
      query: this.getFragmentDoc(fragment, fragmentName),
      dataId: id,
      result: data
    }));
  };

  return ApolloCache;
}();



/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/types/Cache.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/types/Cache.js ***!
  \***************************************************************/
/*! exports provided: Cache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return Cache; });
var Cache;

(function (Cache) {})(Cache || (Cache = {}));

/***/ }),

/***/ "./node_modules/@apollo/client/cache/core/types/common.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/core/types/common.js ***!
  \****************************************************************/
/*! exports provided: MissingFieldError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return MissingFieldError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");


var MissingFieldError = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MissingFieldError, _super);

  function MissingFieldError(message, path, query, variables) {
    var _this = _super.call(this, message) || this;

    _this.message = message;
    _this.path = path;
    _this.query = query;
    _this.variables = variables;
    _this.__proto__ = MissingFieldError.prototype;
    return _this;
  }

  return MissingFieldError;
}(Error);



/***/ }),

/***/ "./node_modules/@apollo/client/cache/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@apollo/client/cache/index.js ***!
  \****************************************************/
/*! exports provided: ApolloCache, Cache, MissingFieldError, isReference, makeReference, EntityStore, fieldNameFromStoreName, defaultDataIdFromObject, InMemoryCache, makeVar, cacheSlot, Policies, canonicalStringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _core_cache_js__WEBPACK_IMPORTED_MODULE_1__["ApolloCache"]; });

/* harmony import */ var _core_types_Cache_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/types/Cache.js */ "./node_modules/@apollo/client/cache/core/types/Cache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _core_types_Cache_js__WEBPACK_IMPORTED_MODULE_2__["Cache"]; });

/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _core_types_common_js__WEBPACK_IMPORTED_MODULE_3__["MissingFieldError"]; });

/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["makeReference"]; });

/* harmony import */ var _inmemory_entityStore_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inmemory/entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EntityStore", function() { return _inmemory_entityStore_js__WEBPACK_IMPORTED_MODULE_5__["EntityStore"]; });

/* harmony import */ var _inmemory_helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inmemory/helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fieldNameFromStoreName", function() { return _inmemory_helpers_js__WEBPACK_IMPORTED_MODULE_6__["fieldNameFromStoreName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _inmemory_helpers_js__WEBPACK_IMPORTED_MODULE_6__["defaultDataIdFromObject"]; });

/* harmony import */ var _inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./inmemory/inMemoryCache.js */ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _inmemory_inMemoryCache_js__WEBPACK_IMPORTED_MODULE_7__["InMemoryCache"]; });

/* harmony import */ var _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./inmemory/reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_8__["makeVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheSlot", function() { return _inmemory_reactiveVars_js__WEBPACK_IMPORTED_MODULE_8__["cacheSlot"]; });

/* harmony import */ var _inmemory_policies_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inmemory/policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Policies", function() { return _inmemory_policies_js__WEBPACK_IMPORTED_MODULE_9__["Policies"]; });

/* harmony import */ var _inmemory_object_canon_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./inmemory/object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canonicalStringify", function() { return _inmemory_object_canon_js__WEBPACK_IMPORTED_MODULE_10__["canonicalStringify"]; });

/* harmony import */ var _inmemory_types_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inmemory/types.js */ "./node_modules/@apollo/client/cache/inmemory/types.js");
/* empty/unused harmony star reexport */












/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/entityStore.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/entityStore.js ***!
  \*******************************************************************/
/*! exports provided: EntityStore, maybeDependOnExistenceOfEntity, supportsResultCaching */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntityStore", function() { return EntityStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDependOnExistenceOfEntity", function() { return maybeDependOnExistenceOfEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsResultCaching", function() { return supportsResultCaching; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");







var DELETE = Object.create(null);

var delModifier = function () {
  return DELETE;
};

var INVALIDATE = Object.create(null);

var EntityStore = function () {
  function EntityStore(policies, group) {
    var _this = this;

    this.policies = policies;
    this.group = group;
    this.data = Object.create(null);
    this.rootIds = Object.create(null);
    this.refs = Object.create(null);

    this.getFieldValue = function (objectOrReference, storeFieldName) {
      return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["maybeDeepFreeze"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isReference"])(objectOrReference) ? _this.get(objectOrReference.__ref, storeFieldName) : objectOrReference && objectOrReference[storeFieldName]);
    };

    this.canRead = function (objOrRef) {
      return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isReference"])(objOrRef) ? _this.has(objOrRef.__ref) : typeof objOrRef === "object";
    };

    this.toReference = function (objOrIdOrRef, mergeIntoStore) {
      if (typeof objOrIdOrRef === "string") {
        return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["makeReference"])(objOrIdOrRef);
      }

      if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isReference"])(objOrIdOrRef)) {
        return objOrIdOrRef;
      }

      var id = _this.policies.identify(objOrIdOrRef)[0];

      if (id) {
        var ref = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["makeReference"])(id);

        if (mergeIntoStore) {
          _this.merge(id, objOrIdOrRef);
        }

        return ref;
      }
    };
  }

  EntityStore.prototype.toObject = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.data);
  };

  EntityStore.prototype.has = function (dataId) {
    return this.lookup(dataId, true) !== void 0;
  };

  EntityStore.prototype.get = function (dataId, fieldName) {
    this.group.depend(dataId, fieldName);

    if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(this.data, dataId)) {
      var storeObject = this.data[dataId];

      if (storeObject && _helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(storeObject, fieldName)) {
        return storeObject[fieldName];
      }
    }

    if (fieldName === "__typename" && _helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(this.policies.rootTypenamesById, dataId)) {
      return this.policies.rootTypenamesById[dataId];
    }

    if (this instanceof Layer) {
      return this.parent.get(dataId, fieldName);
    }
  };

  EntityStore.prototype.lookup = function (dataId, dependOnExistence) {
    if (dependOnExistence) this.group.depend(dataId, "__exists");

    if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(this.data, dataId)) {
      return this.data[dataId];
    }

    if (this instanceof Layer) {
      return this.parent.lookup(dataId, dependOnExistence);
    }

    if (this.policies.rootTypenamesById[dataId]) {
      return Object.create(null);
    }
  };

  EntityStore.prototype.merge = function (older, newer) {
    var _this = this;

    var dataId;
    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isReference"])(older)) older = older.__ref;
    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isReference"])(newer)) newer = newer.__ref;
    var existing = typeof older === "string" ? this.lookup(dataId = older) : older;
    var incoming = typeof newer === "string" ? this.lookup(dataId = newer) : newer;
    if (!incoming) return;
    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(typeof dataId === "string", "store.merge expects a string ID") : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(typeof dataId === "string", 1);
    var merged = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["DeepMerger"](storeObjectReconciler).merge(existing, incoming);
    this.data[dataId] = merged;

    if (merged !== existing) {
      delete this.refs[dataId];

      if (this.group.caching) {
        var fieldsToDirty_1 = Object.create(null);
        if (!existing) fieldsToDirty_1.__exists = 1;
        Object.keys(incoming).forEach(function (storeFieldName) {
          if (!existing || existing[storeFieldName] !== merged[storeFieldName]) {
            fieldsToDirty_1[storeFieldName] = 1;
            var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_6__["fieldNameFromStoreName"])(storeFieldName);

            if (fieldName !== storeFieldName && !_this.policies.hasKeyArgs(merged.__typename, fieldName)) {
              fieldsToDirty_1[fieldName] = 1;
            }

            if (merged[storeFieldName] === void 0 && !(_this instanceof Layer)) {
              delete merged[storeFieldName];
            }
          }
        });

        if (fieldsToDirty_1.__typename && !(existing && existing.__typename) && this.policies.rootTypenamesById[dataId] === merged.__typename) {
          delete fieldsToDirty_1.__typename;
        }

        Object.keys(fieldsToDirty_1).forEach(function (fieldName) {
          return _this.group.dirty(dataId, fieldName);
        });
      }
    }
  };

  EntityStore.prototype.modify = function (dataId, fields) {
    var _this = this;

    var storeObject = this.lookup(dataId);

    if (storeObject) {
      var changedFields_1 = Object.create(null);
      var needToMerge_1 = false;
      var allDeleted_1 = true;
      var sharedDetails_1 = {
        DELETE: DELETE,
        INVALIDATE: INVALIDATE,
        isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isReference"],
        toReference: this.toReference,
        canRead: this.canRead,
        readField: function (fieldNameOrOptions, from) {
          return _this.policies.readField(typeof fieldNameOrOptions === "string" ? {
            fieldName: fieldNameOrOptions,
            from: from || Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["makeReference"])(dataId)
          } : fieldNameOrOptions, {
            store: _this
          });
        }
      };
      Object.keys(storeObject).forEach(function (storeFieldName) {
        var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_6__["fieldNameFromStoreName"])(storeFieldName);
        var fieldValue = storeObject[storeFieldName];
        if (fieldValue === void 0) return;
        var modify = typeof fields === "function" ? fields : fields[storeFieldName] || fields[fieldName];

        if (modify) {
          var newValue = modify === delModifier ? DELETE : modify(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["maybeDeepFreeze"])(fieldValue), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, sharedDetails_1), {
            fieldName: fieldName,
            storeFieldName: storeFieldName,
            storage: _this.getStorage(dataId, storeFieldName)
          }));

          if (newValue === INVALIDATE) {
            _this.group.dirty(dataId, storeFieldName);
          } else {
            if (newValue === DELETE) newValue = void 0;

            if (newValue !== fieldValue) {
              changedFields_1[storeFieldName] = newValue;
              needToMerge_1 = true;
              fieldValue = newValue;
            }
          }
        }

        if (fieldValue !== void 0) {
          allDeleted_1 = false;
        }
      });

      if (needToMerge_1) {
        this.merge(dataId, changedFields_1);

        if (allDeleted_1) {
          if (this instanceof Layer) {
            this.data[dataId] = void 0;
          } else {
            delete this.data[dataId];
          }

          this.group.dirty(dataId, "__exists");
        }

        return true;
      }
    }

    return false;
  };

  EntityStore.prototype.delete = function (dataId, fieldName, args) {
    var _a;

    var storeObject = this.lookup(dataId);

    if (storeObject) {
      var typename = this.getFieldValue(storeObject, "__typename");
      var storeFieldName = fieldName && args ? this.policies.getStoreFieldName({
        typename: typename,
        fieldName: fieldName,
        args: args
      }) : fieldName;
      return this.modify(dataId, storeFieldName ? (_a = {}, _a[storeFieldName] = delModifier, _a) : delModifier);
    }

    return false;
  };

  EntityStore.prototype.evict = function (options, limit) {
    var evicted = false;

    if (options.id) {
      if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(this.data, options.id)) {
        evicted = this.delete(options.id, options.fieldName, options.args);
      }

      if (this instanceof Layer && this !== limit) {
        evicted = this.parent.evict(options, limit) || evicted;
      }

      if (options.fieldName || evicted) {
        this.group.dirty(options.id, options.fieldName || "__exists");
      }
    }

    return evicted;
  };

  EntityStore.prototype.clear = function () {
    this.replace(null);
  };

  EntityStore.prototype.extract = function () {
    var _this = this;

    var obj = this.toObject();
    var extraRootIds = [];
    this.getRootIdSet().forEach(function (id) {
      if (!_helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(_this.policies.rootTypenamesById, id)) {
        extraRootIds.push(id);
      }
    });

    if (extraRootIds.length) {
      obj.__META = {
        extraRootIds: extraRootIds.sort()
      };
    }

    return obj;
  };

  EntityStore.prototype.replace = function (newData) {
    var _this = this;

    Object.keys(this.data).forEach(function (dataId) {
      if (!(newData && _helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(newData, dataId))) {
        _this.delete(dataId);
      }
    });

    if (newData) {
      var __META = newData.__META,
          rest_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(newData, ["__META"]);

      Object.keys(rest_1).forEach(function (dataId) {
        _this.merge(dataId, rest_1[dataId]);
      });

      if (__META) {
        __META.extraRootIds.forEach(this.retain, this);
      }
    }
  };

  EntityStore.prototype.retain = function (rootId) {
    return this.rootIds[rootId] = (this.rootIds[rootId] || 0) + 1;
  };

  EntityStore.prototype.release = function (rootId) {
    if (this.rootIds[rootId] > 0) {
      var count = --this.rootIds[rootId];
      if (!count) delete this.rootIds[rootId];
      return count;
    }

    return 0;
  };

  EntityStore.prototype.getRootIdSet = function (ids) {
    if (ids === void 0) {
      ids = new Set();
    }

    Object.keys(this.rootIds).forEach(ids.add, ids);

    if (this instanceof Layer) {
      this.parent.getRootIdSet(ids);
    } else {
      Object.keys(this.policies.rootTypenamesById).forEach(ids.add, ids);
    }

    return ids;
  };

  EntityStore.prototype.gc = function () {
    var _this = this;

    var ids = this.getRootIdSet();
    var snapshot = this.toObject();
    ids.forEach(function (id) {
      if (_helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(snapshot, id)) {
        Object.keys(_this.findChildRefIds(id)).forEach(ids.add, ids);
        delete snapshot[id];
      }
    });
    var idsToRemove = Object.keys(snapshot);

    if (idsToRemove.length) {
      var root_1 = this;

      while (root_1 instanceof Layer) root_1 = root_1.parent;

      idsToRemove.forEach(function (id) {
        return root_1.delete(id);
      });
    }

    return idsToRemove;
  };

  EntityStore.prototype.findChildRefIds = function (dataId) {
    if (!_helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(this.refs, dataId)) {
      var found_1 = this.refs[dataId] = Object.create(null);
      var root = this.data[dataId];
      if (!root) return found_1;
      var workSet_1 = new Set([root]);
      workSet_1.forEach(function (obj) {
        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isReference"])(obj)) {
          found_1[obj.__ref] = true;
        }

        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isNonNullObject"])(obj)) {
          Object.keys(obj).forEach(function (key) {
            var child = obj[key];

            if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isNonNullObject"])(child)) {
              workSet_1.add(child);
            }
          });
        }
      });
    }

    return this.refs[dataId];
  };

  EntityStore.prototype.makeCacheKey = function () {
    return this.group.keyMaker.lookupArray(arguments);
  };

  return EntityStore;
}();



var CacheGroup = function () {
  function CacheGroup(caching, parent) {
    if (parent === void 0) {
      parent = null;
    }

    this.caching = caching;
    this.parent = parent;
    this.d = null;
    this.resetCaching();
  }

  CacheGroup.prototype.resetCaching = function () {
    this.d = this.caching ? Object(optimism__WEBPACK_IMPORTED_MODULE_2__["dep"])() : null;
    this.keyMaker = new _wry_trie__WEBPACK_IMPORTED_MODULE_4__["Trie"](_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["canUseWeakMap"]);
  };

  CacheGroup.prototype.depend = function (dataId, storeFieldName) {
    if (this.d) {
      this.d(makeDepKey(dataId, storeFieldName));
      var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_6__["fieldNameFromStoreName"])(storeFieldName);

      if (fieldName !== storeFieldName) {
        this.d(makeDepKey(dataId, fieldName));
      }

      if (this.parent) {
        this.parent.depend(dataId, storeFieldName);
      }
    }
  };

  CacheGroup.prototype.dirty = function (dataId, storeFieldName) {
    if (this.d) {
      this.d.dirty(makeDepKey(dataId, storeFieldName), storeFieldName === "__exists" ? "forget" : "setDirty");
    }
  };

  return CacheGroup;
}();

function makeDepKey(dataId, storeFieldName) {
  return storeFieldName + '#' + dataId;
}

function maybeDependOnExistenceOfEntity(store, entityId) {
  if (supportsResultCaching(store)) {
    store.group.depend(entityId, "__exists");
  }
}

(function (EntityStore) {
  var Root = function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Root, _super);

    function Root(_a) {
      var policies = _a.policies,
          _b = _a.resultCaching,
          resultCaching = _b === void 0 ? true : _b,
          seed = _a.seed;

      var _this = _super.call(this, policies, new CacheGroup(resultCaching)) || this;

      _this.stump = new Stump(_this);
      _this.storageTrie = new _wry_trie__WEBPACK_IMPORTED_MODULE_4__["Trie"](_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["canUseWeakMap"]);
      if (seed) _this.replace(seed);
      return _this;
    }

    Root.prototype.addLayer = function (layerId, replay) {
      return this.stump.addLayer(layerId, replay);
    };

    Root.prototype.removeLayer = function () {
      return this;
    };

    Root.prototype.getStorage = function () {
      return this.storageTrie.lookupArray(arguments);
    };

    return Root;
  }(EntityStore);

  EntityStore.Root = Root;
})(EntityStore || (EntityStore = {}));

var Layer = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Layer, _super);

  function Layer(id, parent, replay, group) {
    var _this = _super.call(this, parent.policies, group) || this;

    _this.id = id;
    _this.parent = parent;
    _this.replay = replay;
    _this.group = group;
    replay(_this);
    return _this;
  }

  Layer.prototype.addLayer = function (layerId, replay) {
    return new Layer(layerId, this, replay, this.group);
  };

  Layer.prototype.removeLayer = function (layerId) {
    var _this = this;

    var parent = this.parent.removeLayer(layerId);

    if (layerId === this.id) {
      if (this.group.caching) {
        Object.keys(this.data).forEach(function (dataId) {
          var ownStoreObject = _this.data[dataId];
          var parentStoreObject = parent["lookup"](dataId);

          if (!parentStoreObject) {
            _this.delete(dataId);
          } else if (!ownStoreObject) {
            _this.group.dirty(dataId, "__exists");

            Object.keys(parentStoreObject).forEach(function (storeFieldName) {
              _this.group.dirty(dataId, storeFieldName);
            });
          } else if (ownStoreObject !== parentStoreObject) {
            Object.keys(ownStoreObject).forEach(function (storeFieldName) {
              if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_3__["equal"])(ownStoreObject[storeFieldName], parentStoreObject[storeFieldName])) {
                _this.group.dirty(dataId, storeFieldName);
              }
            });
          }
        });
      }

      return parent;
    }

    if (parent === this.parent) return this;
    return parent.addLayer(this.id, this.replay);
  };

  Layer.prototype.toObject = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.parent.toObject()), this.data);
  };

  Layer.prototype.findChildRefIds = function (dataId) {
    var fromParent = this.parent.findChildRefIds(dataId);
    return _helpers_js__WEBPACK_IMPORTED_MODULE_6__["hasOwn"].call(this.data, dataId) ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fromParent), _super.prototype.findChildRefIds.call(this, dataId)) : fromParent;
  };

  Layer.prototype.getStorage = function () {
    var p = this.parent;

    while (p.parent) p = p.parent;

    return p.getStorage.apply(p, arguments);
  };

  return Layer;
}(EntityStore);

var Stump = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Stump, _super);

  function Stump(root) {
    return _super.call(this, "EntityStore.Stump", root, function () {}, new CacheGroup(root.group.caching, root.group)) || this;
  }

  Stump.prototype.removeLayer = function () {
    return this;
  };

  Stump.prototype.merge = function () {
    return this.parent.merge.apply(this.parent, arguments);
  };

  return Stump;
}(Layer);

function storeObjectReconciler(existingObject, incomingObject, property) {
  var existingValue = existingObject[property];
  var incomingValue = incomingObject[property];
  return Object(_wry_equality__WEBPACK_IMPORTED_MODULE_3__["equal"])(existingValue, incomingValue) ? existingValue : incomingValue;
}

function supportsResultCaching(store) {
  return !!(store instanceof EntityStore && store.group.caching);
}

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/fixPolyfills.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/fixPolyfills.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/helpers.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/helpers.js ***!
  \***************************************************************/
/*! exports provided: hasOwn, defaultDataIdFromObject, normalizeConfig, shouldCanonizeResults, getTypenameFromStoreObject, TypeOrFieldNameRegExp, fieldNameFromStoreName, selectionSetMatchesResult, storeValueIsStoreObject, makeProcessedFieldsMerger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return defaultDataIdFromObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeConfig", function() { return normalizeConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldCanonizeResults", function() { return shouldCanonizeResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypenameFromStoreObject", function() { return getTypenameFromStoreObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeOrFieldNameRegExp", function() { return TypeOrFieldNameRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldNameFromStoreName", function() { return fieldNameFromStoreName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectionSetMatchesResult", function() { return selectionSetMatchesResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeValueIsStoreObject", function() { return storeValueIsStoreObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeProcessedFieldsMerger", function() { return makeProcessedFieldsMerger; });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");

var hasOwn = Object.prototype.hasOwnProperty;
function defaultDataIdFromObject(_a, context) {
  var __typename = _a.__typename,
      id = _a.id,
      _id = _a._id;

  if (typeof __typename === "string") {
    if (context) {
      context.keyObject = id !== void 0 ? {
        id: id
      } : _id !== void 0 ? {
        _id: _id
      } : void 0;
    }

    if (id === void 0) id = _id;

    if (id !== void 0) {
      return __typename + ":" + (typeof id === "number" || typeof id === "string" ? id : JSON.stringify(id));
    }
  }
}
var defaultConfig = {
  dataIdFromObject: defaultDataIdFromObject,
  addTypename: true,
  resultCaching: true,
  canonizeResults: false
};
function normalizeConfig(config) {
  return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["compact"])(defaultConfig, config);
}
function shouldCanonizeResults(config) {
  var value = config.canonizeResults;
  return value === void 0 ? defaultConfig.canonizeResults : value;
}
function getTypenameFromStoreObject(store, objectOrReference) {
  return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["isReference"])(objectOrReference) ? store.get(objectOrReference.__ref, "__typename") : objectOrReference && objectOrReference.__typename;
}
var TypeOrFieldNameRegExp = /^[_a-z][_0-9a-z]*/i;
function fieldNameFromStoreName(storeFieldName) {
  var match = storeFieldName.match(TypeOrFieldNameRegExp);
  return match ? match[0] : storeFieldName;
}
function selectionSetMatchesResult(selectionSet, result, variables) {
  if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["isNonNullObject"])(result)) {
    return Array.isArray(result) ? result.every(function (item) {
      return selectionSetMatchesResult(selectionSet, item, variables);
    }) : selectionSet.selections.every(function (field) {
      if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["isField"])(field) && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["shouldInclude"])(field, variables)) {
        var key = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["resultKeyNameFromField"])(field);
        return hasOwn.call(result, key) && (!field.selectionSet || selectionSetMatchesResult(field.selectionSet, result[key], variables));
      }

      return true;
    });
  }

  return false;
}
function storeValueIsStoreObject(value) {
  return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["isNonNullObject"])(value) && !Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["isReference"])(value) && !Array.isArray(value);
}
function makeProcessedFieldsMerger() {
  return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["DeepMerger"]();
}

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/inMemoryCache.js ***!
  \*********************************************************************/
/*! exports provided: InMemoryCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return InMemoryCache; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _fixPolyfills_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fixPolyfills.js */ "./node_modules/@apollo/client/cache/inmemory/fixPolyfills.js");
/* harmony import */ var _fixPolyfills_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fixPolyfills_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _core_cache_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/cache.js */ "./node_modules/@apollo/client/cache/core/cache.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _readFromStore_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./readFromStore.js */ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js");
/* harmony import */ var _writeToStore_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./writeToStore.js */ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _policies_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./policies.js */ "./node_modules/@apollo/client/cache/inmemory/policies.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");















var InMemoryCache = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InMemoryCache, _super);

  function InMemoryCache(config) {
    if (config === void 0) {
      config = {};
    }

    var _this = _super.call(this) || this;

    _this.watches = new Set();
    _this.typenameDocumentCache = new Map();
    _this.makeVar = _reactiveVars_js__WEBPACK_IMPORTED_MODULE_10__["makeVar"];
    _this.txCount = 0;
    _this.config = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_12__["normalizeConfig"])(config);
    _this.addTypename = !!_this.config.addTypename;
    _this.policies = new _policies_js__WEBPACK_IMPORTED_MODULE_11__["Policies"]({
      cache: _this,
      dataIdFromObject: _this.config.dataIdFromObject,
      possibleTypes: _this.config.possibleTypes,
      typePolicies: _this.config.typePolicies
    });

    _this.init();

    return _this;
  }

  InMemoryCache.prototype.init = function () {
    var rootStore = this.data = new _entityStore_js__WEBPACK_IMPORTED_MODULE_9__["EntityStore"].Root({
      policies: this.policies,
      resultCaching: this.config.resultCaching
    });
    this.optimisticData = rootStore.stump;
    this.resetResultCache();
  };

  InMemoryCache.prototype.resetResultCache = function (resetResultIdentities) {
    var _this = this;

    var previousReader = this.storeReader;
    this.storeWriter = new _writeToStore_js__WEBPACK_IMPORTED_MODULE_8__["StoreWriter"](this, this.storeReader = new _readFromStore_js__WEBPACK_IMPORTED_MODULE_7__["StoreReader"]({
      cache: this,
      addTypename: this.addTypename,
      resultCacheMaxSize: this.config.resultCacheMaxSize,
      canonizeResults: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_12__["shouldCanonizeResults"])(this.config),
      canon: resetResultIdentities ? void 0 : previousReader && previousReader.canon
    }));
    this.maybeBroadcastWatch = Object(optimism__WEBPACK_IMPORTED_MODULE_2__["wrap"])(function (c, options) {
      return _this.broadcastWatch(c, options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function (c) {
        var store = c.optimistic ? _this.optimisticData : _this.data;

        if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_9__["supportsResultCaching"])(store)) {
          var optimistic = c.optimistic,
              rootId = c.rootId,
              variables = c.variables;
          return store.makeCacheKey(c.query, c.callback, Object(_object_canon_js__WEBPACK_IMPORTED_MODULE_13__["canonicalStringify"])({
            optimistic: optimistic,
            rootId: rootId,
            variables: variables
          }));
        }
      }
    });
    new Set([this.data.group, this.optimisticData.group]).forEach(function (group) {
      return group.resetCaching();
    });
  };

  InMemoryCache.prototype.restore = function (data) {
    this.init();
    if (data) this.data.replace(data);
    return this;
  };

  InMemoryCache.prototype.extract = function (optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return (optimistic ? this.optimisticData : this.data).extract();
  };

  InMemoryCache.prototype.read = function (options) {
    var _a = options.returnPartialData,
        returnPartialData = _a === void 0 ? false : _a;

    try {
      return this.storeReader.diffQueryAgainstStore(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        store: options.optimistic ? this.optimisticData : this.data,
        config: this.config,
        returnPartialData: returnPartialData
      })).result || null;
    } catch (e) {
      if (e instanceof _core_types_common_js__WEBPACK_IMPORTED_MODULE_5__["MissingFieldError"]) {
        return null;
      }

      throw e;
    }
  };

  InMemoryCache.prototype.write = function (options) {
    try {
      ++this.txCount;
      return this.storeWriter.writeToStore(this.data, options);
    } finally {
      if (! --this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };

  InMemoryCache.prototype.modify = function (options) {
    if (_helpers_js__WEBPACK_IMPORTED_MODULE_12__["hasOwn"].call(options, "id") && !options.id) {
      return false;
    }

    var store = options.optimistic ? this.optimisticData : this.data;

    try {
      ++this.txCount;
      return store.modify(options.id || "ROOT_QUERY", options.fields);
    } finally {
      if (! --this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };

  InMemoryCache.prototype.diff = function (options) {
    return this.storeReader.diffQueryAgainstStore(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      store: options.optimistic ? this.optimisticData : this.data,
      rootId: options.id || "ROOT_QUERY",
      config: this.config
    }));
  };

  InMemoryCache.prototype.watch = function (watch) {
    var _this = this;

    if (!this.watches.size) {
      Object(_reactiveVars_js__WEBPACK_IMPORTED_MODULE_10__["recallCache"])(this);
    }

    this.watches.add(watch);

    if (watch.immediate) {
      this.maybeBroadcastWatch(watch);
    }

    return function () {
      if (_this.watches.delete(watch) && !_this.watches.size) {
        Object(_reactiveVars_js__WEBPACK_IMPORTED_MODULE_10__["forgetCache"])(_this);
      }

      _this.maybeBroadcastWatch.forget(watch);
    };
  };

  InMemoryCache.prototype.gc = function (options) {
    _object_canon_js__WEBPACK_IMPORTED_MODULE_13__["canonicalStringify"].reset();
    var ids = this.optimisticData.gc();

    if (options && !this.txCount) {
      if (options.resetResultCache) {
        this.resetResultCache(options.resetResultIdentities);
      } else if (options.resetResultIdentities) {
        this.storeReader.resetCanon();
      }
    }

    return ids;
  };

  InMemoryCache.prototype.retain = function (rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).retain(rootId);
  };

  InMemoryCache.prototype.release = function (rootId, optimistic) {
    return (optimistic ? this.optimisticData : this.data).release(rootId);
  };

  InMemoryCache.prototype.identify = function (object) {
    return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__["isReference"])(object) ? object.__ref : this.policies.identify(object)[0];
  };

  InMemoryCache.prototype.evict = function (options) {
    if (!options.id) {
      if (_helpers_js__WEBPACK_IMPORTED_MODULE_12__["hasOwn"].call(options, "id")) {
        return false;
      }

      options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        id: "ROOT_QUERY"
      });
    }

    try {
      ++this.txCount;
      return this.optimisticData.evict(options, this.data);
    } finally {
      if (! --this.txCount && options.broadcast !== false) {
        this.broadcastWatches();
      }
    }
  };

  InMemoryCache.prototype.reset = function (options) {
    var _this = this;

    this.init();
    _object_canon_js__WEBPACK_IMPORTED_MODULE_13__["canonicalStringify"].reset();

    if (options && options.discardWatches) {
      this.watches.forEach(function (watch) {
        return _this.maybeBroadcastWatch.forget(watch);
      });
      this.watches.clear();
      Object(_reactiveVars_js__WEBPACK_IMPORTED_MODULE_10__["forgetCache"])(this);
    } else {
      this.broadcastWatches();
    }

    return Promise.resolve();
  };

  InMemoryCache.prototype.removeOptimistic = function (idToRemove) {
    var newOptimisticData = this.optimisticData.removeLayer(idToRemove);

    if (newOptimisticData !== this.optimisticData) {
      this.optimisticData = newOptimisticData;
      this.broadcastWatches();
    }
  };

  InMemoryCache.prototype.batch = function (options) {
    var _this = this;

    var update = options.update,
        _a = options.optimistic,
        optimistic = _a === void 0 ? true : _a,
        removeOptimistic = options.removeOptimistic,
        onWatchUpdated = options.onWatchUpdated;

    var perform = function (layer) {
      var _a = _this,
          data = _a.data,
          optimisticData = _a.optimisticData;
      ++_this.txCount;

      if (layer) {
        _this.data = _this.optimisticData = layer;
      }

      try {
        update(_this);
      } finally {
        --_this.txCount;
        _this.data = data;
        _this.optimisticData = optimisticData;
      }
    };

    var alreadyDirty = new Set();

    if (onWatchUpdated && !this.txCount) {
      this.broadcastWatches(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        onWatchUpdated: function (watch) {
          alreadyDirty.add(watch);
          return false;
        }
      }));
    }

    if (typeof optimistic === 'string') {
      this.optimisticData = this.optimisticData.addLayer(optimistic, perform);
    } else if (optimistic === false) {
      perform(this.data);
    } else {
      perform();
    }

    if (typeof removeOptimistic === "string") {
      this.optimisticData = this.optimisticData.removeLayer(removeOptimistic);
    }

    if (onWatchUpdated && alreadyDirty.size) {
      this.broadcastWatches(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        onWatchUpdated: function (watch, diff) {
          var result = onWatchUpdated.call(this, watch, diff);

          if (result !== false) {
            alreadyDirty.delete(watch);
          }

          return result;
        }
      }));

      if (alreadyDirty.size) {
        alreadyDirty.forEach(function (watch) {
          return _this.maybeBroadcastWatch.dirty(watch);
        });
      }
    } else {
      this.broadcastWatches(options);
    }
  };

  InMemoryCache.prototype.performTransaction = function (update, optimisticId) {
    return this.batch({
      update: update,
      optimistic: optimisticId || optimisticId !== null
    });
  };

  InMemoryCache.prototype.transformDocument = function (document) {
    if (this.addTypename) {
      var result = this.typenameDocumentCache.get(document);

      if (!result) {
        result = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_6__["addTypenameToDocument"])(document);
        this.typenameDocumentCache.set(document, result);
        this.typenameDocumentCache.set(result, result);
      }

      return result;
    }

    return document;
  };

  InMemoryCache.prototype.broadcastWatches = function (options) {
    var _this = this;

    if (!this.txCount) {
      this.watches.forEach(function (c) {
        return _this.maybeBroadcastWatch(c, options);
      });
    }
  };

  InMemoryCache.prototype.broadcastWatch = function (c, options) {
    var lastDiff = c.lastDiff;
    var diff = this.diff(c);

    if (options) {
      if (c.optimistic && typeof options.optimistic === "string") {
        diff.fromOptimisticTransaction = true;
      }

      if (options.onWatchUpdated && options.onWatchUpdated.call(this, c, diff, lastDiff) === false) {
        return;
      }
    }

    if (!lastDiff || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_3__["equal"])(lastDiff.result, diff.result)) {
      c.callback(c.lastDiff = diff, lastDiff);
    }
  };

  return InMemoryCache;
}(_core_cache_js__WEBPACK_IMPORTED_MODULE_4__["ApolloCache"]);



/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/object-canon.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/object-canon.js ***!
  \********************************************************************/
/*! exports provided: ObjectCanon, canonicalStringify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectCanon", function() { return ObjectCanon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canonicalStringify", function() { return canonicalStringify; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");





function shallowCopy(value) {
  if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(value)) {
    return Array.isArray(value) ? value.slice(0) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      __proto__: Object.getPrototypeOf(value)
    }, value);
  }

  return value;
}

var ObjectCanon = function () {
  function ObjectCanon() {
    this.known = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakSet"] ? WeakSet : Set)();
    this.pool = new _wry_trie__WEBPACK_IMPORTED_MODULE_2__["Trie"](_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakMap"]);
    this.passes = new WeakMap();
    this.keysByJSON = new Map();
    this.empty = this.admit({});
  }

  ObjectCanon.prototype.isKnown = function (value) {
    return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(value) && this.known.has(value);
  };

  ObjectCanon.prototype.pass = function (value) {
    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(value)) {
      var copy = shallowCopy(value);
      this.passes.set(copy, value);
      return copy;
    }

    return value;
  };

  ObjectCanon.prototype.admit = function (value) {
    var _this = this;

    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(value)) {
      var original = this.passes.get(value);
      if (original) return original;
      var proto = Object.getPrototypeOf(value);

      switch (proto) {
        case Array.prototype:
          {
            if (this.known.has(value)) return value;
            var array = value.map(this.admit, this);
            var node = this.pool.lookupArray(array);

            if (!node.array) {
              this.known.add(node.array = array);

              if (__DEV__) {
                Object.freeze(array);
              }
            }

            return node.array;
          }

        case null:
        case Object.prototype:
          {
            if (this.known.has(value)) return value;
            var proto_1 = Object.getPrototypeOf(value);
            var array_1 = [proto_1];
            var keys = this.sortedKeys(value);
            array_1.push(keys.json);
            var firstValueIndex_1 = array_1.length;
            keys.sorted.forEach(function (key) {
              array_1.push(_this.admit(value[key]));
            });
            var node = this.pool.lookupArray(array_1);

            if (!node.object) {
              var obj_1 = node.object = Object.create(proto_1);
              this.known.add(obj_1);
              keys.sorted.forEach(function (key, i) {
                obj_1[key] = array_1[firstValueIndex_1 + i];
              });

              if (__DEV__) {
                Object.freeze(obj_1);
              }
            }

            return node.object;
          }
      }
    }

    return value;
  };

  ObjectCanon.prototype.sortedKeys = function (obj) {
    var keys = Object.keys(obj);
    var node = this.pool.lookupArray(keys);

    if (!node.keys) {
      keys.sort();
      var json = JSON.stringify(keys);

      if (!(node.keys = this.keysByJSON.get(json))) {
        this.keysByJSON.set(json, node.keys = {
          sorted: keys,
          json: json
        });
      }
    }

    return node.keys;
  };

  return ObjectCanon;
}();


var canonicalStringify = Object.assign(function (value) {
  if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(value)) {
    if (stringifyCanon === void 0) {
      resetCanonicalStringify();
    }

    var canonical = stringifyCanon.admit(value);
    var json = stringifyCache.get(canonical);

    if (json === void 0) {
      stringifyCache.set(canonical, json = JSON.stringify(canonical));
    }

    return json;
  }

  return JSON.stringify(value);
}, {
  reset: resetCanonicalStringify
});
var stringifyCanon;
var stringifyCache;

function resetCanonicalStringify() {
  stringifyCanon = new ObjectCanon();
  stringifyCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakMap"] ? WeakMap : Map)();
}

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/policies.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/policies.js ***!
  \****************************************************************/
/*! exports provided: Policies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Policies", function() { return Policies; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_trie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/trie */ "./node_modules/@wry/trie/lib/trie.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _reactiveVars_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactiveVars.js */ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");







_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getStoreKeyName"].setStringify(_object_canon_js__WEBPACK_IMPORTED_MODULE_6__["canonicalStringify"]);

function argsFromFieldSpecifier(spec) {
  return spec.args !== void 0 ? spec.args : spec.field ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["argumentsObjectFromField"])(spec.field, spec.variables) : null;
}

var nullKeyFieldsFn = function () {
  return void 0;
};

var simpleKeyArgsFn = function (_args, context) {
  return context.fieldName;
};

var mergeTrueFn = function (existing, incoming, _a) {
  var mergeObjects = _a.mergeObjects;
  return mergeObjects(existing, incoming);
};

var mergeFalseFn = function (_, incoming) {
  return incoming;
};

var Policies = function () {
  function Policies(config) {
    this.config = config;
    this.typePolicies = Object.create(null);
    this.toBeAdded = Object.create(null);
    this.supertypeMap = new Map();
    this.fuzzySubtypes = new Map();
    this.rootIdsByTypename = Object.create(null);
    this.rootTypenamesById = Object.create(null);
    this.usingPossibleTypes = false;
    this.config = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      dataIdFromObject: _helpers_js__WEBPACK_IMPORTED_MODULE_4__["defaultDataIdFromObject"]
    }, config);
    this.cache = this.config.cache;
    this.setRootTypename("Query");
    this.setRootTypename("Mutation");
    this.setRootTypename("Subscription");

    if (config.possibleTypes) {
      this.addPossibleTypes(config.possibleTypes);
    }

    if (config.typePolicies) {
      this.addTypePolicies(config.typePolicies);
    }
  }

  Policies.prototype.identify = function (object, selectionSet, fragmentMap) {
    var typename = selectionSet && fragmentMap ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getTypenameFromResult"])(object, selectionSet, fragmentMap) : object.__typename;

    if (typename === this.rootTypenamesById.ROOT_QUERY) {
      return ["ROOT_QUERY"];
    }

    var context = {
      typename: typename,
      selectionSet: selectionSet,
      fragmentMap: fragmentMap
    };
    var id;
    var policy = typename && this.getTypePolicy(typename);
    var keyFn = policy && policy.keyFn || this.config.dataIdFromObject;

    while (keyFn) {
      var specifierOrId = keyFn(object, context);

      if (Array.isArray(specifierOrId)) {
        keyFn = keyFieldsFnFromSpecifier(specifierOrId);
      } else {
        id = specifierOrId;
        break;
      }
    }

    id = id ? String(id) : void 0;
    return context.keyObject ? [id, context.keyObject] : [id];
  };

  Policies.prototype.addTypePolicies = function (typePolicies) {
    var _this = this;

    Object.keys(typePolicies).forEach(function (typename) {
      var _a = typePolicies[typename],
          queryType = _a.queryType,
          mutationType = _a.mutationType,
          subscriptionType = _a.subscriptionType,
          incoming = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["queryType", "mutationType", "subscriptionType"]);

      if (queryType) _this.setRootTypename("Query", typename);
      if (mutationType) _this.setRootTypename("Mutation", typename);
      if (subscriptionType) _this.setRootTypename("Subscription", typename);

      if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(_this.toBeAdded, typename)) {
        _this.toBeAdded[typename].push(incoming);
      } else {
        _this.toBeAdded[typename] = [incoming];
      }
    });
  };

  Policies.prototype.updateTypePolicy = function (typename, incoming) {
    var _this = this;

    var existing = this.getTypePolicy(typename);
    var keyFields = incoming.keyFields,
        fields = incoming.fields;

    function setMerge(existing, merge) {
      existing.merge = typeof merge === "function" ? merge : merge === true ? mergeTrueFn : merge === false ? mergeFalseFn : existing.merge;
    }

    setMerge(existing, incoming.merge);
    existing.keyFn = keyFields === false ? nullKeyFieldsFn : Array.isArray(keyFields) ? keyFieldsFnFromSpecifier(keyFields) : typeof keyFields === "function" ? keyFields : existing.keyFn;

    if (fields) {
      Object.keys(fields).forEach(function (fieldName) {
        var existing = _this.getFieldPolicy(typename, fieldName, true);

        var incoming = fields[fieldName];

        if (typeof incoming === "function") {
          existing.read = incoming;
        } else {
          var keyArgs = incoming.keyArgs,
              read = incoming.read,
              merge = incoming.merge;
          existing.keyFn = keyArgs === false ? simpleKeyArgsFn : Array.isArray(keyArgs) ? keyArgsFnFromSpecifier(keyArgs) : typeof keyArgs === "function" ? keyArgs : existing.keyFn;

          if (typeof read === "function") {
            existing.read = read;
          }

          setMerge(existing, merge);
        }

        if (existing.read && existing.merge) {
          existing.keyFn = existing.keyFn || simpleKeyArgsFn;
        }
      });
    }
  };

  Policies.prototype.setRootTypename = function (which, typename) {
    if (typename === void 0) {
      typename = which;
    }

    var rootId = "ROOT_" + which.toUpperCase();
    var old = this.rootTypenamesById[rootId];

    if (typename !== old) {
      __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!old || old === which, "Cannot change root " + which + " __typename more than once") : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!old || old === which, 2);
      if (old) delete this.rootIdsByTypename[old];
      this.rootIdsByTypename[typename] = rootId;
      this.rootTypenamesById[rootId] = typename;
    }
  };

  Policies.prototype.addPossibleTypes = function (possibleTypes) {
    var _this = this;

    this.usingPossibleTypes = true;
    Object.keys(possibleTypes).forEach(function (supertype) {
      _this.getSupertypeSet(supertype, true);

      possibleTypes[supertype].forEach(function (subtype) {
        _this.getSupertypeSet(subtype, true).add(supertype);

        var match = subtype.match(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["TypeOrFieldNameRegExp"]);

        if (!match || match[0] !== subtype) {
          _this.fuzzySubtypes.set(subtype, new RegExp(subtype));
        }
      });
    });
  };

  Policies.prototype.getTypePolicy = function (typename) {
    var _this = this;

    if (!_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(this.typePolicies, typename)) {
      var policy_1 = this.typePolicies[typename] = Object.create(null);
      policy_1.fields = Object.create(null);
      var supertypes = this.supertypeMap.get(typename);

      if (supertypes && supertypes.size) {
        supertypes.forEach(function (supertype) {
          var _a = _this.getTypePolicy(supertype),
              fields = _a.fields,
              rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["fields"]);

          Object.assign(policy_1, rest);
          Object.assign(policy_1.fields, fields);
        });
      }
    }

    var inbox = this.toBeAdded[typename];

    if (inbox && inbox.length) {
      inbox.splice(0).forEach(function (policy) {
        _this.updateTypePolicy(typename, policy);
      });
    }

    return this.typePolicies[typename];
  };

  Policies.prototype.getFieldPolicy = function (typename, fieldName, createIfMissing) {
    if (typename) {
      var fieldPolicies = this.getTypePolicy(typename).fields;
      return fieldPolicies[fieldName] || createIfMissing && (fieldPolicies[fieldName] = Object.create(null));
    }
  };

  Policies.prototype.getSupertypeSet = function (subtype, createIfMissing) {
    var supertypeSet = this.supertypeMap.get(subtype);

    if (!supertypeSet && createIfMissing) {
      this.supertypeMap.set(subtype, supertypeSet = new Set());
    }

    return supertypeSet;
  };

  Policies.prototype.fragmentMatches = function (fragment, typename, result, variables) {
    var _this = this;

    if (!fragment.typeCondition) return true;
    if (!typename) return false;
    var supertype = fragment.typeCondition.name.value;
    if (typename === supertype) return true;

    if (this.usingPossibleTypes && this.supertypeMap.has(supertype)) {
      var typenameSupertypeSet = this.getSupertypeSet(typename, true);
      var workQueue_1 = [typenameSupertypeSet];

      var maybeEnqueue_1 = function (subtype) {
        var supertypeSet = _this.getSupertypeSet(subtype, false);

        if (supertypeSet && supertypeSet.size && workQueue_1.indexOf(supertypeSet) < 0) {
          workQueue_1.push(supertypeSet);
        }
      };

      var needToCheckFuzzySubtypes = !!(result && this.fuzzySubtypes.size);
      var checkingFuzzySubtypes = false;

      for (var i = 0; i < workQueue_1.length; ++i) {
        var supertypeSet = workQueue_1[i];

        if (supertypeSet.has(supertype)) {
          if (!typenameSupertypeSet.has(supertype)) {
            if (checkingFuzzySubtypes) {
              __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Inferring subtype " + typename + " of supertype " + supertype);
            }

            typenameSupertypeSet.add(supertype);
          }

          return true;
        }

        supertypeSet.forEach(maybeEnqueue_1);

        if (needToCheckFuzzySubtypes && i === workQueue_1.length - 1 && Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["selectionSetMatchesResult"])(fragment.selectionSet, result, variables)) {
          needToCheckFuzzySubtypes = false;
          checkingFuzzySubtypes = true;
          this.fuzzySubtypes.forEach(function (regExp, fuzzyString) {
            var match = typename.match(regExp);

            if (match && match[0] === typename) {
              maybeEnqueue_1(fuzzyString);
            }
          });
        }
      }
    }

    return false;
  };

  Policies.prototype.hasKeyArgs = function (typename, fieldName) {
    var policy = this.getFieldPolicy(typename, fieldName, false);
    return !!(policy && policy.keyFn);
  };

  Policies.prototype.getStoreFieldName = function (fieldSpec) {
    var typename = fieldSpec.typename,
        fieldName = fieldSpec.fieldName;
    var policy = this.getFieldPolicy(typename, fieldName, false);
    var storeFieldName;
    var keyFn = policy && policy.keyFn;

    if (keyFn && typename) {
      var context = {
        typename: typename,
        fieldName: fieldName,
        field: fieldSpec.field || null,
        variables: fieldSpec.variables
      };
      var args = argsFromFieldSpecifier(fieldSpec);

      while (keyFn) {
        var specifierOrString = keyFn(args, context);

        if (Array.isArray(specifierOrString)) {
          keyFn = keyArgsFnFromSpecifier(specifierOrString);
        } else {
          storeFieldName = specifierOrString || fieldName;
          break;
        }
      }
    }

    if (storeFieldName === void 0) {
      storeFieldName = fieldSpec.field ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["storeKeyNameFromField"])(fieldSpec.field, fieldSpec.variables) : Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getStoreKeyName"])(fieldName, argsFromFieldSpecifier(fieldSpec));
    }

    if (storeFieldName === false) {
      return fieldName;
    }

    return fieldName === Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName) ? storeFieldName : fieldName + ":" + storeFieldName;
  };

  Policies.prototype.readField = function (options, context) {
    var objectOrReference = options.from;
    if (!objectOrReference) return;
    var nameOrField = options.field || options.fieldName;
    if (!nameOrField) return;

    if (options.typename === void 0) {
      var typename = context.store.getFieldValue(objectOrReference, "__typename");
      if (typename) options.typename = typename;
    }

    var storeFieldName = this.getStoreFieldName(options);
    var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
    var existing = context.store.getFieldValue(objectOrReference, storeFieldName);
    var policy = this.getFieldPolicy(options.typename, fieldName, false);
    var read = policy && policy.read;

    if (read) {
      var readOptions = makeFieldFunctionOptions(this, objectOrReference, options, context, context.store.getStorage(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference) ? objectOrReference.__ref : objectOrReference, storeFieldName));
      return _reactiveVars_js__WEBPACK_IMPORTED_MODULE_5__["cacheSlot"].withValue(this.cache, read, [existing, readOptions]);
    }

    return existing;
  };

  Policies.prototype.getMergeFunction = function (parentTypename, fieldName, childTypename) {
    var policy = this.getFieldPolicy(parentTypename, fieldName, false);
    var merge = policy && policy.merge;

    if (!merge && childTypename) {
      policy = this.getTypePolicy(childTypename);
      merge = policy && policy.merge;
    }

    return merge;
  };

  Policies.prototype.runMergeFunction = function (existing, incoming, _a, context, storage) {
    var field = _a.field,
        typename = _a.typename,
        merge = _a.merge;

    if (merge === mergeTrueFn) {
      return makeMergeObjectsFunction(context.store)(existing, incoming);
    }

    if (merge === mergeFalseFn) {
      return incoming;
    }

    if (context.overwrite) {
      existing = void 0;
    }

    return merge(existing, incoming, makeFieldFunctionOptions(this, void 0, {
      typename: typename,
      fieldName: field.name.value,
      field: field,
      variables: context.variables
    }, context, storage || Object.create(null)));
  };

  return Policies;
}();



function makeFieldFunctionOptions(policies, objectOrReference, fieldSpec, context, storage) {
  var storeFieldName = policies.getStoreFieldName(fieldSpec);
  var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
  var variables = fieldSpec.variables || context.variables;
  var _a = context.store,
      toReference = _a.toReference,
      canRead = _a.canRead;
  return {
    args: argsFromFieldSpecifier(fieldSpec),
    field: fieldSpec.field || null,
    fieldName: fieldName,
    storeFieldName: storeFieldName,
    variables: variables,
    isReference: _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"],
    toReference: toReference,
    storage: storage,
    cache: policies.cache,
    canRead: canRead,
    readField: function (fieldNameOrOptions, from) {
      var options;

      if (typeof fieldNameOrOptions === "string") {
        options = {
          fieldName: fieldNameOrOptions,
          from: arguments.length > 1 ? from : objectOrReference
        };
      } else if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(fieldNameOrOptions)) {
        options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fieldNameOrOptions);

        if (!_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(fieldNameOrOptions, "from")) {
          options.from = objectOrReference;
        }
      } else {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Unexpected readField arguments: " + Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["stringifyForDisplay"])(Array.from(arguments)));
        return;
      }

      if (__DEV__ && options.from === void 0) {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Undefined 'from' passed to readField with arguments " + Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["stringifyForDisplay"])(Array.from(arguments)));
      }

      if (void 0 === options.variables) {
        options.variables = variables;
      }

      return policies.readField(options, context);
    },
    mergeObjects: makeMergeObjectsFunction(context.store)
  };
}

function makeMergeObjectsFunction(store) {
  return function mergeObjects(existing, incoming) {
    if (Array.isArray(existing) || Array.isArray(incoming)) {
      throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Cannot automatically merge arrays") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](3);
    }

    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(existing) && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(incoming)) {
      var eType = store.getFieldValue(existing, "__typename");
      var iType = store.getFieldValue(incoming, "__typename");
      var typesDiffer = eType && iType && eType !== iType;

      if (typesDiffer) {
        return incoming;
      }

      if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(existing) && Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["storeValueIsStoreObject"])(incoming)) {
        store.merge(existing.__ref, incoming);
        return existing;
      }

      if (Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["storeValueIsStoreObject"])(existing) && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(incoming)) {
        store.merge(existing, incoming.__ref);
        return incoming;
      }

      if (Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["storeValueIsStoreObject"])(existing) && Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["storeValueIsStoreObject"])(incoming)) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, existing), incoming);
      }
    }

    return incoming;
  };
}

function keyArgsFnFromSpecifier(specifier) {
  return function (args, context) {
    return args ? context.fieldName + ":" + JSON.stringify(computeKeyObject(args, specifier, false)) : context.fieldName;
  };
}

function keyFieldsFnFromSpecifier(specifier) {
  var trie = new _wry_trie__WEBPACK_IMPORTED_MODULE_2__["Trie"](_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakMap"]);
  return function (object, context) {
    var aliasMap;

    if (context.selectionSet && context.fragmentMap) {
      var info = trie.lookupArray([context.selectionSet, context.fragmentMap]);
      aliasMap = info.aliasMap || (info.aliasMap = makeAliasMap(context.selectionSet, context.fragmentMap));
    }

    var keyObject = context.keyObject = computeKeyObject(object, specifier, true, aliasMap);
    return context.typename + ":" + JSON.stringify(keyObject);
  };
}

function makeAliasMap(selectionSet, fragmentMap) {
  var map = Object.create(null);
  var workQueue = new Set([selectionSet]);
  workQueue.forEach(function (selectionSet) {
    selectionSet.selections.forEach(function (selection) {
      if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
        if (selection.alias) {
          var responseKey = selection.alias.value;
          var storeKey = selection.name.value;

          if (storeKey !== responseKey) {
            var aliases = map.aliases || (map.aliases = Object.create(null));
            aliases[storeKey] = responseKey;
          }
        }

        if (selection.selectionSet) {
          var subsets = map.subsets || (map.subsets = Object.create(null));
          subsets[selection.name.value] = makeAliasMap(selection.selectionSet, fragmentMap);
        }
      } else {
        var fragment = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentFromSelection"])(selection, fragmentMap);

        if (fragment) {
          workQueue.add(fragment.selectionSet);
        }
      }
    });
  });
  return map;
}

function computeKeyObject(response, specifier, strict, aliasMap) {
  var keyObj = Object.create(null);
  var lastResponseKey;
  var lastActualKey;
  specifier.forEach(function (s) {
    if (Array.isArray(s)) {
      if (typeof lastActualKey === "string" && typeof lastResponseKey === "string") {
        var subsets = aliasMap && aliasMap.subsets;
        var subset = subsets && subsets[lastActualKey];
        keyObj[lastActualKey] = computeKeyObject(response[lastResponseKey], s, strict, subset);
      }
    } else {
      var aliases = aliasMap && aliasMap.aliases;
      var responseName = aliases && aliases[s] || s;

      if (_helpers_js__WEBPACK_IMPORTED_MODULE_4__["hasOwn"].call(response, responseName)) {
        keyObj[lastActualKey = s] = response[lastResponseKey = responseName];
      } else {
        __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!strict, "Missing field '" + responseName + "' while computing key fields") : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!strict, 4);
        lastResponseKey = lastActualKey = void 0;
      }
    }
  });
  return keyObj;
}

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/reactiveVars.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/reactiveVars.js ***!
  \********************************************************************/
/*! exports provided: cacheSlot, forgetCache, recallCache, makeVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheSlot", function() { return cacheSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgetCache", function() { return forgetCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recallCache", function() { return recallCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return makeVar; });
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _wry_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/context */ "./node_modules/@wry/context/lib/context.esm.js");


var cacheSlot = new _wry_context__WEBPACK_IMPORTED_MODULE_1__["Slot"]();
var cacheInfoMap = new WeakMap();

function getCacheInfo(cache) {
  var info = cacheInfoMap.get(cache);

  if (!info) {
    cacheInfoMap.set(cache, info = {
      vars: new Set(),
      dep: Object(optimism__WEBPACK_IMPORTED_MODULE_0__["dep"])()
    });
  }

  return info;
}

function forgetCache(cache) {
  getCacheInfo(cache).vars.forEach(function (rv) {
    return rv.forgetCache(cache);
  });
}
function recallCache(cache) {
  getCacheInfo(cache).vars.forEach(function (rv) {
    return rv.attachCache(cache);
  });
}
function makeVar(value) {
  var caches = new Set();
  var listeners = new Set();

  var rv = function (newValue) {
    if (arguments.length > 0) {
      if (value !== newValue) {
        value = newValue;
        caches.forEach(function (cache) {
          getCacheInfo(cache).dep.dirty(rv);
          broadcast(cache);
        });
        var oldListeners = Array.from(listeners);
        listeners.clear();
        oldListeners.forEach(function (listener) {
          return listener(value);
        });
      }
    } else {
      var cache = cacheSlot.getValue();

      if (cache) {
        attach(cache);
        getCacheInfo(cache).dep(rv);
      }
    }

    return value;
  };

  rv.onNextChange = function (listener) {
    listeners.add(listener);
    return function () {
      listeners.delete(listener);
    };
  };

  var attach = rv.attachCache = function (cache) {
    caches.add(cache);
    getCacheInfo(cache).vars.add(rv);
    return rv;
  };

  rv.forgetCache = function (cache) {
    return caches.delete(cache);
  };

  return rv;
}

function broadcast(cache) {
  if (cache.broadcastWatches) {
    cache.broadcastWatches();
  }
}

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/readFromStore.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/readFromStore.js ***!
  \*********************************************************************/
/*! exports provided: StoreReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreReader", function() { return StoreReader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var optimism__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! optimism */ "./node_modules/optimism/lib/bundle.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _entityStore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entityStore.js */ "./node_modules/@apollo/client/cache/inmemory/entityStore.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _core_types_common_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/types/common.js */ "./node_modules/@apollo/client/cache/core/types/common.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");








;

function missingFromInvariant(err, context) {
  return new _core_types_common_js__WEBPACK_IMPORTED_MODULE_6__["MissingFieldError"](err.message, context.path.slice(), context.query, context.variables);
}

function execSelectionSetKeyArgs(options) {
  return [options.selectionSet, options.objectOrReference, options.context, options.context.canonizeResults];
}

var StoreReader = function () {
  function StoreReader(config) {
    var _this = this;

    this.knownResults = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["canUseWeakMap"] ? WeakMap : Map)();
    this.config = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["compact"])(config, {
      addTypename: config.addTypename !== false,
      canonizeResults: Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["shouldCanonizeResults"])(config)
    });
    this.canon = config.canon || new _object_canon_js__WEBPACK_IMPORTED_MODULE_7__["ObjectCanon"]();
    this.executeSelectionSet = Object(optimism__WEBPACK_IMPORTED_MODULE_2__["wrap"])(function (options) {
      var _a;

      var canonizeResults = options.context.canonizeResults;
      var peekArgs = execSelectionSetKeyArgs(options);
      peekArgs[3] = !canonizeResults;

      var other = (_a = _this.executeSelectionSet).peek.apply(_a, peekArgs);

      if (other) {
        if (canonizeResults) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, other), {
            result: _this.canon.admit(other.result)
          });
        }

        return other;
      }

      Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_4__["maybeDependOnExistenceOfEntity"])(options.context.store, options.enclosingRef.__ref);
      return _this.execSelectionSetImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      keyArgs: execSelectionSetKeyArgs,
      makeCacheKey: function (selectionSet, parent, context, canonizeResults) {
        if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_4__["supportsResultCaching"])(context.store)) {
          return context.store.makeCacheKey(selectionSet, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(parent) ? parent.__ref : parent, context.varString, canonizeResults);
        }
      }
    });
    this.executeSubSelectedArray = Object(optimism__WEBPACK_IMPORTED_MODULE_2__["wrap"])(function (options) {
      Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_4__["maybeDependOnExistenceOfEntity"])(options.context.store, options.enclosingRef.__ref);
      return _this.execSubSelectedArrayImpl(options);
    }, {
      max: this.config.resultCacheMaxSize,
      makeCacheKey: function (_a) {
        var field = _a.field,
            array = _a.array,
            context = _a.context;

        if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_4__["supportsResultCaching"])(context.store)) {
          return context.store.makeCacheKey(field, array, context.varString);
        }
      }
    });
  }

  StoreReader.prototype.resetCanon = function () {
    this.canon = new _object_canon_js__WEBPACK_IMPORTED_MODULE_7__["ObjectCanon"]();
  };

  StoreReader.prototype.diffQueryAgainstStore = function (_a) {
    var store = _a.store,
        query = _a.query,
        _b = _a.rootId,
        rootId = _b === void 0 ? 'ROOT_QUERY' : _b,
        variables = _a.variables,
        _c = _a.returnPartialData,
        returnPartialData = _c === void 0 ? true : _c,
        _d = _a.canonizeResults,
        canonizeResults = _d === void 0 ? this.config.canonizeResults : _d;
    var policies = this.config.cache.policies;
    variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getQueryDefinition"])(query))), variables);
    var rootRef = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(rootId);
    var execResult = this.executeSelectionSet({
      selectionSet: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getMainDefinition"])(query).selectionSet,
      objectOrReference: rootRef,
      enclosingRef: rootRef,
      context: {
        store: store,
        query: query,
        policies: policies,
        variables: variables,
        varString: Object(_object_canon_js__WEBPACK_IMPORTED_MODULE_7__["canonicalStringify"])(variables),
        canonizeResults: canonizeResults,
        fragmentMap: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["createFragmentMap"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"])(query)),
        path: []
      }
    });
    var hasMissingFields = execResult.missing && execResult.missing.length > 0;

    if (hasMissingFields && !returnPartialData) {
      throw execResult.missing[0];
    }

    return {
      result: execResult.result,
      missing: execResult.missing,
      complete: !hasMissingFields
    };
  };

  StoreReader.prototype.isFresh = function (result, parent, selectionSet, context) {
    if (Object(_entityStore_js__WEBPACK_IMPORTED_MODULE_4__["supportsResultCaching"])(context.store) && this.knownResults.get(result) === selectionSet) {
      var latest = this.executeSelectionSet.peek(selectionSet, parent, context, this.canon.isKnown(result));

      if (latest && result === latest.result) {
        return true;
      }
    }

    return false;
  };

  StoreReader.prototype.execSelectionSetImpl = function (_a) {
    var _this = this;

    var selectionSet = _a.selectionSet,
        objectOrReference = _a.objectOrReference,
        enclosingRef = _a.enclosingRef,
        context = _a.context;

    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference) && !context.policies.rootTypenamesById[objectOrReference.__ref] && !context.store.has(objectOrReference.__ref)) {
      return {
        result: this.canon.empty,
        missing: [missingFromInvariant(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Dangling reference to missing " + objectOrReference.__ref + " object") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](5), context)]
      };
    }

    var variables = context.variables,
        policies = context.policies,
        store = context.store;
    var objectsToMerge = [];
    var finalResult = {
      result: null
    };
    var typename = store.getFieldValue(objectOrReference, "__typename");

    if (this.config.addTypename && typeof typename === "string" && !policies.rootIdsByTypename[typename]) {
      objectsToMerge.push({
        __typename: typename
      });
    }

    function getMissing() {
      return finalResult.missing || (finalResult.missing = []);
    }

    function handleMissing(result) {
      var _a;

      if (result.missing) (_a = getMissing()).push.apply(_a, result.missing);
      return result.result;
    }

    var workSet = new Set(selectionSet.selections);
    workSet.forEach(function (selection) {
      var _a;

      if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["shouldInclude"])(selection, variables)) return;

      if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
        var fieldValue = policies.readField({
          fieldName: selection.name.value,
          field: selection,
          variables: context.variables,
          from: objectOrReference
        }, context);
        var resultName = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection);
        context.path.push(resultName);

        if (fieldValue === void 0) {
          if (!_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["addTypenameToDocument"].added(selection)) {
            getMissing().push(missingFromInvariant(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Can't find field '" + selection.name.value + "' on " + (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(objectOrReference) ? objectOrReference.__ref + " object" : "object " + JSON.stringify(objectOrReference, null, 2))) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](6), context));
          }
        } else if (Array.isArray(fieldValue)) {
          fieldValue = handleMissing(_this.executeSubSelectedArray({
            field: selection,
            array: fieldValue,
            enclosingRef: enclosingRef,
            context: context
          }));
        } else if (!selection.selectionSet) {
          if (context.canonizeResults) {
            fieldValue = _this.canon.pass(fieldValue);
          }
        } else if (fieldValue != null) {
          fieldValue = handleMissing(_this.executeSelectionSet({
            selectionSet: selection.selectionSet,
            objectOrReference: fieldValue,
            enclosingRef: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(fieldValue) ? fieldValue : enclosingRef,
            context: context
          }));
        }

        if (fieldValue !== void 0) {
          objectsToMerge.push((_a = {}, _a[resultName] = fieldValue, _a));
        }

        Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.path.pop() === resultName);
      } else {
        var fragment = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentFromSelection"])(selection, context.fragmentMap);

        if (fragment && policies.fragmentMatches(fragment, typename)) {
          fragment.selectionSet.selections.forEach(workSet.add, workSet);
        }
      }
    });
    var merged = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["mergeDeepArray"])(objectsToMerge);
    finalResult.result = context.canonizeResults ? this.canon.admit(merged) : Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["maybeDeepFreeze"])(merged);
    this.knownResults.set(finalResult.result, selectionSet);
    return finalResult;
  };

  StoreReader.prototype.execSubSelectedArrayImpl = function (_a) {
    var _this = this;

    var field = _a.field,
        array = _a.array,
        enclosingRef = _a.enclosingRef,
        context = _a.context;
    var missing;

    function handleMissing(childResult, i) {
      if (childResult.missing) {
        missing = missing || [];
        missing.push.apply(missing, childResult.missing);
      }

      Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.path.pop() === i);
      return childResult.result;
    }

    if (field.selectionSet) {
      array = array.filter(context.store.canRead);
    }

    array = array.map(function (item, i) {
      if (item === null) {
        return null;
      }

      context.path.push(i);

      if (Array.isArray(item)) {
        return handleMissing(_this.executeSubSelectedArray({
          field: field,
          array: item,
          enclosingRef: enclosingRef,
          context: context
        }), i);
      }

      if (field.selectionSet) {
        return handleMissing(_this.executeSelectionSet({
          selectionSet: field.selectionSet,
          objectOrReference: item,
          enclosingRef: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(item) ? item : enclosingRef,
          context: context
        }), i);
      }

      if (__DEV__) {
        assertSelectionSetForIdValue(context.store, field, item);
      }

      Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(context.path.pop() === i);
      return item;
    });
    return {
      result: context.canonizeResults ? this.canon.admit(array) : array,
      missing: missing
    };
  };

  return StoreReader;
}();



function assertSelectionSetForIdValue(store, field, fieldValue) {
  if (!field.selectionSet) {
    var workSet_1 = new Set([fieldValue]);
    workSet_1.forEach(function (value) {
      if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isNonNullObject"])(value)) {
        __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(value), "Missing selection set for object of type " + Object(_helpers_js__WEBPACK_IMPORTED_MODULE_5__["getTypenameFromStoreObject"])(store, value) + " returned for query field " + field.name.value) : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(value), 7);
        Object.values(value).forEach(workSet_1.add, workSet_1);
      }
    });
  }
}

/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/types.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;
;


/***/ }),

/***/ "./node_modules/@apollo/client/cache/inmemory/writeToStore.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/cache/inmemory/writeToStore.js ***!
  \********************************************************************/
/*! exports provided: StoreWriter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreWriter", function() { return StoreWriter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "./node_modules/@apollo/client/cache/inmemory/helpers.js");
/* harmony import */ var _object_canon_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object-canon.js */ "./node_modules/@apollo/client/cache/inmemory/object-canon.js");






;

var StoreWriter = function () {
  function StoreWriter(cache, reader) {
    this.cache = cache;
    this.reader = reader;
  }

  StoreWriter.prototype.writeToStore = function (store, _a) {
    var _this = this;

    var query = _a.query,
        result = _a.result,
        dataId = _a.dataId,
        variables = _a.variables,
        overwrite = _a.overwrite;
    var operationDefinition = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getOperationDefinition"])(query);
    var merger = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["makeProcessedFieldsMerger"])();
    variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"])(operationDefinition)), variables);
    var context = {
      store: store,
      written: Object.create(null),
      merge: function (existing, incoming) {
        return merger.merge(existing, incoming);
      },
      variables: variables,
      varString: Object(_object_canon_js__WEBPACK_IMPORTED_MODULE_5__["canonicalStringify"])(variables),
      fragmentMap: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["createFragmentMap"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"])(query)),
      overwrite: !!overwrite,
      incomingById: new Map(),
      clientOnly: false
    };
    var ref = this.processSelectionSet({
      result: result || Object.create(null),
      dataId: dataId,
      selectionSet: operationDefinition.selectionSet,
      mergeTree: {
        map: new Map()
      },
      context: context
    });

    if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(ref)) {
      throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Could not identify object " + JSON.stringify(result)) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](8);
    }

    context.incomingById.forEach(function (_a, dataId) {
      var fields = _a.fields,
          mergeTree = _a.mergeTree,
          selections = _a.selections;
      var entityRef = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId);

      if (mergeTree && mergeTree.map.size) {
        var applied = _this.applyMerges(mergeTree, entityRef, fields, context);

        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(applied)) {
          return;
        }

        fields = applied;
      }

      if (__DEV__ && !context.overwrite) {
        var hasSelectionSet_1 = function (storeFieldName) {
          return fieldsWithSelectionSets_1.has(Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName));
        };

        var fieldsWithSelectionSets_1 = new Set();
        selections.forEach(function (selection) {
          if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection) && selection.selectionSet) {
            fieldsWithSelectionSets_1.add(selection.name.value);
          }
        });

        var hasMergeFunction_1 = function (storeFieldName) {
          var childTree = mergeTree && mergeTree.map.get(storeFieldName);
          return Boolean(childTree && childTree.info && childTree.info.merge);
        };

        Object.keys(fields).forEach(function (storeFieldName) {
          if (hasSelectionSet_1(storeFieldName) && !hasMergeFunction_1(storeFieldName)) {
            warnAboutDataLoss(entityRef, fields, storeFieldName, context.store);
          }
        });
      }

      store.merge(dataId, fields);
    });
    store.retain(ref.__ref);
    return ref;
  };

  StoreWriter.prototype.processSelectionSet = function (_a) {
    var _this = this;

    var dataId = _a.dataId,
        result = _a.result,
        selectionSet = _a.selectionSet,
        context = _a.context,
        mergeTree = _a.mergeTree;
    var policies = this.cache.policies;

    var _b = policies.identify(result, selectionSet, context.fragmentMap),
        id = _b[0],
        keyObject = _b[1];

    dataId = dataId || id;

    if ("string" === typeof dataId) {
      var sets = context.written[dataId] || (context.written[dataId] = []);
      var ref = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId);
      if (sets.indexOf(selectionSet) >= 0) return ref;
      sets.push(selectionSet);

      if (this.reader && this.reader.isFresh(result, ref, selectionSet, context)) {
        return ref;
      }
    }

    var incomingFields = Object.create(null);

    if (keyObject) {
      incomingFields = context.merge(incomingFields, keyObject);
    }

    var typename = dataId && policies.rootTypenamesById[dataId] || Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getTypenameFromResult"])(result, selectionSet, context.fragmentMap) || dataId && context.store.get(dataId, "__typename");

    if ("string" === typeof typename) {
      incomingFields.__typename = typename;
    }

    var selections = new Set(selectionSet.selections);
    selections.forEach(function (selection) {
      var _a;

      if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["shouldInclude"])(selection, context.variables)) return;

      if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
        var resultFieldKey = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection);
        var value = result[resultFieldKey];
        var wasClientOnly = context.clientOnly;
        context.clientOnly = wasClientOnly || !!(selection.directives && selection.directives.some(function (d) {
          return d.name.value === "client";
        }));

        if (value !== void 0) {
          var storeFieldName = policies.getStoreFieldName({
            typename: typename,
            fieldName: selection.name.value,
            field: selection,
            variables: context.variables
          });
          var childTree = getChildMergeTree(mergeTree, storeFieldName);

          var incomingValue = _this.processFieldValue(value, selection, context, childTree);

          var childTypename = void 0;

          if (selection.selectionSet) {
            childTypename = context.store.getFieldValue(incomingValue, "__typename");

            if (!childTypename && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(incomingValue)) {
              var info = context.incomingById.get(incomingValue.__ref);
              childTypename = info && info.fields.__typename;
            }
          }

          var merge = policies.getMergeFunction(typename, selection.name.value, childTypename);

          if (merge) {
            childTree.info = {
              field: selection,
              typename: typename,
              merge: merge
            };
          } else {
            maybeRecycleChildMergeTree(mergeTree, storeFieldName);
          }

          incomingFields = context.merge(incomingFields, (_a = {}, _a[storeFieldName] = incomingValue, _a));
        } else if (!context.clientOnly && !_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["addTypenameToDocument"].added(selection)) {
          __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].error(("Missing field '" + Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection) + "' while writing result " + JSON.stringify(result, null, 2)).substring(0, 1000));
        }

        context.clientOnly = wasClientOnly;
      } else {
        var fragment = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentFromSelection"])(selection, context.fragmentMap);

        if (fragment && policies.fragmentMatches(fragment, typename, result, context.variables)) {
          fragment.selectionSet.selections.forEach(selections.add, selections);
        }
      }
    });

    if ("string" === typeof dataId) {
      var previous = context.incomingById.get(dataId);

      if (previous) {
        previous.fields = context.merge(previous.fields, incomingFields);
        previous.mergeTree = mergeMergeTrees(previous.mergeTree, mergeTree);
        previous.selections.forEach(selections.add, selections);
        previous.selections = selections;
      } else {
        context.incomingById.set(dataId, {
          fields: incomingFields,
          mergeTree: mergeTreeIsEmpty(mergeTree) ? void 0 : mergeTree,
          selections: selections
        });
      }

      return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["makeReference"])(dataId);
    }

    return incomingFields;
  };

  StoreWriter.prototype.processFieldValue = function (value, field, context, mergeTree) {
    var _this = this;

    if (!field.selectionSet || value === null) {
      return __DEV__ ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(value) : value;
    }

    if (Array.isArray(value)) {
      return value.map(function (item, i) {
        var value = _this.processFieldValue(item, field, context, getChildMergeTree(mergeTree, i));

        maybeRecycleChildMergeTree(mergeTree, i);
        return value;
      });
    }

    return this.processSelectionSet({
      result: value,
      selectionSet: field.selectionSet,
      context: context,
      mergeTree: mergeTree
    });
  };

  StoreWriter.prototype.applyMerges = function (mergeTree, existing, incoming, context, getStorageArgs) {
    var _a;

    var _this = this;

    if (mergeTree.map.size && !Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(incoming)) {
      var e_1 = !Array.isArray(incoming) && (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(existing) || Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["storeValueIsStoreObject"])(existing)) ? existing : void 0;
      var i_1 = incoming;

      if (e_1 && !getStorageArgs) {
        getStorageArgs = [Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(e_1) ? e_1.__ref : e_1];
      }

      var changedFields_1;

      var getValue_1 = function (from, name) {
        return Array.isArray(from) ? typeof name === "number" ? from[name] : void 0 : context.store.getFieldValue(from, String(name));
      };

      mergeTree.map.forEach(function (childTree, storeFieldName) {
        var eVal = getValue_1(e_1, storeFieldName);
        var iVal = getValue_1(i_1, storeFieldName);
        if (void 0 === iVal) return;

        if (getStorageArgs) {
          getStorageArgs.push(storeFieldName);
        }

        var aVal = _this.applyMerges(childTree, eVal, iVal, context, getStorageArgs);

        if (aVal !== iVal) {
          changedFields_1 = changedFields_1 || new Map();
          changedFields_1.set(storeFieldName, aVal);
        }

        if (getStorageArgs) {
          Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(getStorageArgs.pop() === storeFieldName);
        }
      });

      if (changedFields_1) {
        incoming = Array.isArray(i_1) ? i_1.slice(0) : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, i_1);
        changedFields_1.forEach(function (value, name) {
          incoming[name] = value;
        });
      }
    }

    if (mergeTree.info) {
      return this.cache.policies.runMergeFunction(existing, incoming, mergeTree.info, context, getStorageArgs && (_a = context.store).getStorage.apply(_a, getStorageArgs));
    }

    return incoming;
  };

  return StoreWriter;
}();


var emptyMergeTreePool = [];

function getChildMergeTree(_a, name) {
  var map = _a.map;

  if (!map.has(name)) {
    map.set(name, emptyMergeTreePool.pop() || {
      map: new Map()
    });
  }

  return map.get(name);
}

function mergeMergeTrees(left, right) {
  if (left === right || !right || mergeTreeIsEmpty(right)) return left;
  if (!left || mergeTreeIsEmpty(left)) return right;
  var info = left.info && right.info ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, left.info), right.info) : left.info || right.info;
  var needToMergeMaps = left.map.size && right.map.size;
  var map = needToMergeMaps ? new Map() : left.map.size ? left.map : right.map;
  var merged = {
    info: info,
    map: map
  };

  if (needToMergeMaps) {
    var remainingRightKeys_1 = new Set(right.map.keys());
    left.map.forEach(function (leftTree, key) {
      merged.map.set(key, mergeMergeTrees(leftTree, right.map.get(key)));
      remainingRightKeys_1.delete(key);
    });
    remainingRightKeys_1.forEach(function (key) {
      merged.map.set(key, mergeMergeTrees(right.map.get(key), left.map.get(key)));
    });
  }

  return merged;
}

function mergeTreeIsEmpty(tree) {
  return !tree || !(tree.info || tree.map.size);
}

function maybeRecycleChildMergeTree(_a, name) {
  var map = _a.map;
  var childTree = map.get(name);

  if (childTree && mergeTreeIsEmpty(childTree)) {
    emptyMergeTreePool.push(childTree);
    map.delete(name);
  }
}

var warnings = new Set();

function warnAboutDataLoss(existingRef, incomingObj, storeFieldName, store) {
  var getChild = function (objOrRef) {
    var child = store.getFieldValue(objOrRef, storeFieldName);
    return typeof child === "object" && child;
  };

  var existing = getChild(existingRef);
  if (!existing) return;
  var incoming = getChild(incomingObj);
  if (!incoming) return;
  if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isReference"])(existing)) return;
  if (Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(existing, incoming)) return;

  if (Object.keys(existing).every(function (key) {
    return store.getFieldValue(incoming, key) !== void 0;
  })) {
    return;
  }

  var parentType = store.getFieldValue(existingRef, "__typename") || store.getFieldValue(incomingObj, "__typename");
  var fieldName = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_4__["fieldNameFromStoreName"])(storeFieldName);
  var typeDotName = parentType + "." + fieldName;
  if (warnings.has(typeDotName)) return;
  warnings.add(typeDotName);
  var childTypenames = [];

  if (!Array.isArray(existing) && !Array.isArray(incoming)) {
    [existing, incoming].forEach(function (child) {
      var typename = store.getFieldValue(child, "__typename");

      if (typeof typename === "string" && !childTypenames.includes(typename)) {
        childTypenames.push(typename);
      }
    });
  }

  __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Cache data may be lost when replacing the " + fieldName + " field of a " + parentType + " object.\n\nTo address this problem (which is not a bug in Apollo Client), " + (childTypenames.length ? "either ensure all objects of type " + childTypenames.join(" and ") + " have an ID or a custom merge function, or " : "") + "define a custom merge function for the " + typeDotName + " field, so InMemoryCache can safely merge these objects:\n\n  existing: " + JSON.stringify(existing).slice(0, 1000) + "\n  incoming: " + JSON.stringify(incoming).slice(0, 1000) + "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n");
}

/***/ }),

/***/ "./node_modules/@apollo/client/core/ApolloClient.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/ApolloClient.js ***!
  \**********************************************************/
/*! exports provided: mergeOptions, ApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return mergeOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return ApolloClient; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../version.js */ "./node_modules/@apollo/client/version.js");
/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../link/http/index.js */ "./node_modules/@apollo/client/link/http/index.js");
/* harmony import */ var _QueryManager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./QueryManager.js */ "./node_modules/@apollo/client/core/QueryManager.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");








var hasSuggestedDevtools = false;
function mergeOptions(defaults, options) {
  return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["compact"])(defaults, options, options.variables && {
    variables: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, defaults.variables), options.variables)
  });
}

var ApolloClient = function () {
  function ApolloClient(options) {
    var _this = this;

    this.defaultOptions = {};
    this.resetStoreCallbacks = [];
    this.clearStoreCallbacks = [];
    var uri = options.uri,
        credentials = options.credentials,
        headers = options.headers,
        cache = options.cache,
        _a = options.ssrMode,
        ssrMode = _a === void 0 ? false : _a,
        _b = options.ssrForceFetchDelay,
        ssrForceFetchDelay = _b === void 0 ? 0 : _b,
        _c = options.connectToDevTools,
        connectToDevTools = _c === void 0 ? typeof window === 'object' && !window.__APOLLO_CLIENT__ && __DEV__ : _c,
        _d = options.queryDeduplication,
        queryDeduplication = _d === void 0 ? true : _d,
        defaultOptions = options.defaultOptions,
        _e = options.assumeImmutableResults,
        assumeImmutableResults = _e === void 0 ? false : _e,
        resolvers = options.resolvers,
        typeDefs = options.typeDefs,
        fragmentMatcher = options.fragmentMatcher,
        clientAwarenessName = options.name,
        clientAwarenessVersion = options.version;
    var link = options.link;

    if (!link) {
      link = uri ? new _link_http_index_js__WEBPACK_IMPORTED_MODULE_5__["HttpLink"]({
        uri: uri,
        credentials: credentials,
        headers: headers
      }) : _link_core_index_js__WEBPACK_IMPORTED_MODULE_2__["ApolloLink"].empty();
    }

    if (!cache) {
      throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("To initialize Apollo Client, you must specify a 'cache' property " + "in the options object. \n" + "For more information, please visit: https://go.apollo.dev/c/docs") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](9);
    }

    this.link = link;
    this.cache = cache;
    this.disableNetworkFetches = ssrMode || ssrForceFetchDelay > 0;
    this.queryDeduplication = queryDeduplication;
    this.defaultOptions = defaultOptions || {};
    this.typeDefs = typeDefs;

    if (ssrForceFetchDelay) {
      setTimeout(function () {
        return _this.disableNetworkFetches = false;
      }, ssrForceFetchDelay);
    }

    this.watchQuery = this.watchQuery.bind(this);
    this.query = this.query.bind(this);
    this.mutate = this.mutate.bind(this);
    this.resetStore = this.resetStore.bind(this);
    this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);

    if (connectToDevTools && typeof window === 'object') {
      window.__APOLLO_CLIENT__ = this;
    }

    if (!hasSuggestedDevtools && __DEV__) {
      hasSuggestedDevtools = true;

      if (typeof window !== 'undefined' && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
        var nav = window.navigator;
        var ua = nav && nav.userAgent;
        var url = void 0;

        if (typeof ua === "string") {
          if (ua.indexOf("Chrome/") > -1) {
            url = "https://chrome.google.com/webstore/detail/" + "apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm";
          } else if (ua.indexOf("Firefox/") > -1) {
            url = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/";
          }
        }

        if (url) {
          __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].log("Download the Apollo DevTools for a better development " + "experience: " + url);
        }
      }
    }

    this.version = _version_js__WEBPACK_IMPORTED_MODULE_4__["version"];
    this.localState = new _LocalState_js__WEBPACK_IMPORTED_MODULE_7__["LocalState"]({
      cache: cache,
      client: this,
      resolvers: resolvers,
      fragmentMatcher: fragmentMatcher
    });
    this.queryManager = new _QueryManager_js__WEBPACK_IMPORTED_MODULE_6__["QueryManager"]({
      cache: this.cache,
      link: this.link,
      queryDeduplication: queryDeduplication,
      ssrMode: ssrMode,
      clientAwareness: {
        name: clientAwarenessName,
        version: clientAwarenessVersion
      },
      localState: this.localState,
      assumeImmutableResults: assumeImmutableResults,
      onBroadcast: connectToDevTools ? function () {
        if (_this.devToolsHookCb) {
          _this.devToolsHookCb({
            action: {},
            state: {
              queries: _this.queryManager.getQueryStore(),
              mutations: _this.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: _this.cache.extract(true)
          });
        }
      } : void 0
    });
  }

  ApolloClient.prototype.stop = function () {
    this.queryManager.stop();
  };

  ApolloClient.prototype.watchQuery = function (options) {
    if (this.defaultOptions.watchQuery) {
      options = mergeOptions(this.defaultOptions.watchQuery, options);
    }

    if (this.disableNetworkFetches && (options.fetchPolicy === 'network-only' || options.fetchPolicy === 'cache-and-network')) {
      options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        fetchPolicy: 'cache-first'
      });
    }

    return this.queryManager.watchQuery(options);
  };

  ApolloClient.prototype.query = function (options) {
    if (this.defaultOptions.query) {
      options = mergeOptions(this.defaultOptions.query, options);
    }

    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.fetchPolicy !== 'cache-and-network', 'The cache-and-network fetchPolicy does not work with client.query, because ' + 'client.query can only return a single result. Please use client.watchQuery ' + 'to receive multiple results from the cache and the network, or consider ' + 'using a different fetchPolicy, such as cache-first or network-only.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.fetchPolicy !== 'cache-and-network', 10);

    if (this.disableNetworkFetches && options.fetchPolicy === 'network-only') {
      options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
        fetchPolicy: 'cache-first'
      });
    }

    return this.queryManager.query(options);
  };

  ApolloClient.prototype.mutate = function (options) {
    if (this.defaultOptions.mutate) {
      options = mergeOptions(this.defaultOptions.mutate, options);
    }

    return this.queryManager.mutate(options);
  };

  ApolloClient.prototype.subscribe = function (options) {
    return this.queryManager.startGraphQLSubscription(options);
  };

  ApolloClient.prototype.readQuery = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return this.cache.readQuery(options, optimistic);
  };

  ApolloClient.prototype.readFragment = function (options, optimistic) {
    if (optimistic === void 0) {
      optimistic = false;
    }

    return this.cache.readFragment(options, optimistic);
  };

  ApolloClient.prototype.writeQuery = function (options) {
    this.cache.writeQuery(options);
    this.queryManager.broadcastQueries();
  };

  ApolloClient.prototype.writeFragment = function (options) {
    this.cache.writeFragment(options);
    this.queryManager.broadcastQueries();
  };

  ApolloClient.prototype.__actionHookForDevTools = function (cb) {
    this.devToolsHookCb = cb;
  };

  ApolloClient.prototype.__requestRaw = function (payload) {
    return Object(_link_core_index_js__WEBPACK_IMPORTED_MODULE_2__["execute"])(this.link, payload);
  };

  ApolloClient.prototype.resetStore = function () {
    var _this = this;

    return Promise.resolve().then(function () {
      return _this.queryManager.clearStore({
        discardWatches: false
      });
    }).then(function () {
      return Promise.all(_this.resetStoreCallbacks.map(function (fn) {
        return fn();
      }));
    }).then(function () {
      return _this.reFetchObservableQueries();
    });
  };

  ApolloClient.prototype.clearStore = function () {
    var _this = this;

    return Promise.resolve().then(function () {
      return _this.queryManager.clearStore({
        discardWatches: true
      });
    }).then(function () {
      return Promise.all(_this.clearStoreCallbacks.map(function (fn) {
        return fn();
      }));
    });
  };

  ApolloClient.prototype.onResetStore = function (cb) {
    var _this = this;

    this.resetStoreCallbacks.push(cb);
    return function () {
      _this.resetStoreCallbacks = _this.resetStoreCallbacks.filter(function (c) {
        return c !== cb;
      });
    };
  };

  ApolloClient.prototype.onClearStore = function (cb) {
    var _this = this;

    this.clearStoreCallbacks.push(cb);
    return function () {
      _this.clearStoreCallbacks = _this.clearStoreCallbacks.filter(function (c) {
        return c !== cb;
      });
    };
  };

  ApolloClient.prototype.reFetchObservableQueries = function (includeStandby) {
    return this.queryManager.reFetchObservableQueries(includeStandby);
  };

  ApolloClient.prototype.refetchQueries = function (options) {
    var map = this.queryManager.refetchQueries(options);
    var queries = [];
    var results = [];
    map.forEach(function (result, obsQuery) {
      queries.push(obsQuery);
      results.push(result);
    });
    var result = Promise.all(results);
    result.queries = queries;
    result.results = results;
    result.catch(function (error) {
      __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].debug("In client.refetchQueries, Promise.all promise rejected with error " + error);
    });
    return result;
  };

  ApolloClient.prototype.getObservableQueries = function (include) {
    if (include === void 0) {
      include = "active";
    }

    return this.queryManager.getObservableQueries(include);
  };

  ApolloClient.prototype.extract = function (optimistic) {
    return this.cache.extract(optimistic);
  };

  ApolloClient.prototype.restore = function (serializedState) {
    return this.cache.restore(serializedState);
  };

  ApolloClient.prototype.addResolvers = function (resolvers) {
    this.localState.addResolvers(resolvers);
  };

  ApolloClient.prototype.setResolvers = function (resolvers) {
    this.localState.setResolvers(resolvers);
  };

  ApolloClient.prototype.getResolvers = function () {
    return this.localState.getResolvers();
  };

  ApolloClient.prototype.setLocalStateFragmentMatcher = function (fragmentMatcher) {
    this.localState.setFragmentMatcher(fragmentMatcher);
  };

  ApolloClient.prototype.setLink = function (newLink) {
    this.link = this.queryManager.link = newLink;
  };

  return ApolloClient;
}();



/***/ }),

/***/ "./node_modules/@apollo/client/core/LocalState.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/core/LocalState.js ***!
  \********************************************************/
/*! exports provided: LocalState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalState", function() { return LocalState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/index.js");






var LocalState = function () {
  function LocalState(_a) {
    var cache = _a.cache,
        client = _a.client,
        resolvers = _a.resolvers,
        fragmentMatcher = _a.fragmentMatcher;
    this.cache = cache;

    if (client) {
      this.client = client;
    }

    if (resolvers) {
      this.addResolvers(resolvers);
    }

    if (fragmentMatcher) {
      this.setFragmentMatcher(fragmentMatcher);
    }
  }

  LocalState.prototype.addResolvers = function (resolvers) {
    var _this = this;

    this.resolvers = this.resolvers || {};

    if (Array.isArray(resolvers)) {
      resolvers.forEach(function (resolverGroup) {
        _this.resolvers = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["mergeDeep"])(_this.resolvers, resolverGroup);
      });
    } else {
      this.resolvers = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["mergeDeep"])(this.resolvers, resolvers);
    }
  };

  LocalState.prototype.setResolvers = function (resolvers) {
    this.resolvers = {};
    this.addResolvers(resolvers);
  };

  LocalState.prototype.getResolvers = function () {
    return this.resolvers || {};
  };

  LocalState.prototype.runResolvers = function (_a) {
    var document = _a.document,
        remoteResult = _a.remoteResult,
        context = _a.context,
        variables = _a.variables,
        _b = _a.onlyRunForcedResolvers,
        onlyRunForcedResolvers = _b === void 0 ? false : _b;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_c) {
        if (document) {
          return [2, this.resolveDocument(document, remoteResult.data, context, variables, this.fragmentMatcher, onlyRunForcedResolvers).then(function (localResult) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, remoteResult), {
              data: localResult.result
            });
          })];
        }

        return [2, remoteResult];
      });
    });
  };

  LocalState.prototype.setFragmentMatcher = function (fragmentMatcher) {
    this.fragmentMatcher = fragmentMatcher;
  };

  LocalState.prototype.getFragmentMatcher = function () {
    return this.fragmentMatcher;
  };

  LocalState.prototype.clientQuery = function (document) {
    if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["hasDirectives"])(['client'], document)) {
      if (this.resolvers) {
        return document;
      }
    }

    return null;
  };

  LocalState.prototype.serverQuery = function (document) {
    return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["removeClientSetsFromDocument"])(document);
  };

  LocalState.prototype.prepareContext = function (context) {
    var cache = this.cache;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), {
      cache: cache,
      getCacheKey: function (obj) {
        return cache.identify(obj);
      }
    });
  };

  LocalState.prototype.addExportedVariables = function (document, variables, context) {
    if (variables === void 0) {
      variables = {};
    }

    if (context === void 0) {
      context = {};
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        if (document) {
          return [2, this.resolveDocument(document, this.buildRootValueFromCache(document, variables) || {}, this.prepareContext(context), variables).then(function (data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables), data.exportedVariables);
          })];
        }

        return [2, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, variables)];
      });
    });
  };

  LocalState.prototype.shouldForceResolvers = function (document) {
    var forceResolvers = false;
    Object(graphql__WEBPACK_IMPORTED_MODULE_2__["visit"])(document, {
      Directive: {
        enter: function (node) {
          if (node.name.value === 'client' && node.arguments) {
            forceResolvers = node.arguments.some(function (arg) {
              return arg.name.value === 'always' && arg.value.kind === 'BooleanValue' && arg.value.value === true;
            });

            if (forceResolvers) {
              return graphql__WEBPACK_IMPORTED_MODULE_2__["BREAK"];
            }
          }
        }
      }
    });
    return forceResolvers;
  };

  LocalState.prototype.buildRootValueFromCache = function (document, variables) {
    return this.cache.diff({
      query: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["buildQueryFromSelectionSet"])(document),
      variables: variables,
      returnPartialData: true,
      optimistic: false
    }).result;
  };

  LocalState.prototype.resolveDocument = function (document, rootValue, context, variables, fragmentMatcher, onlyRunForcedResolvers) {
    if (context === void 0) {
      context = {};
    }

    if (variables === void 0) {
      variables = {};
    }

    if (fragmentMatcher === void 0) {
      fragmentMatcher = function () {
        return true;
      };
    }

    if (onlyRunForcedResolvers === void 0) {
      onlyRunForcedResolvers = false;
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var mainDefinition, fragments, fragmentMap, definitionOperation, defaultOperationType, _a, cache, client, execContext;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
        mainDefinition = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getMainDefinition"])(document);
        fragments = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"])(document);
        fragmentMap = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["createFragmentMap"])(fragments);
        definitionOperation = mainDefinition.operation;
        defaultOperationType = definitionOperation ? definitionOperation.charAt(0).toUpperCase() + definitionOperation.slice(1) : 'Query';
        _a = this, cache = _a.cache, client = _a.client;
        execContext = {
          fragmentMap: fragmentMap,
          context: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), {
            cache: cache,
            client: client
          }),
          variables: variables,
          fragmentMatcher: fragmentMatcher,
          defaultOperationType: defaultOperationType,
          exportedVariables: {},
          onlyRunForcedResolvers: onlyRunForcedResolvers
        };
        return [2, this.resolveSelectionSet(mainDefinition.selectionSet, rootValue, execContext).then(function (result) {
          return {
            result: result,
            exportedVariables: execContext.exportedVariables
          };
        })];
      });
    });
  };

  LocalState.prototype.resolveSelectionSet = function (selectionSet, rootValue, execContext) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var fragmentMap, context, variables, resultsToMerge, execute;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        fragmentMap = execContext.fragmentMap, context = execContext.context, variables = execContext.variables;
        resultsToMerge = [rootValue];

        execute = function (selection) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            var fragment, typeCondition;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
              if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["shouldInclude"])(selection, variables)) {
                return [2];
              }

              if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isField"])(selection)) {
                return [2, this.resolveField(selection, rootValue, execContext).then(function (fieldResult) {
                  var _a;

                  if (typeof fieldResult !== 'undefined') {
                    resultsToMerge.push((_a = {}, _a[Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(selection)] = fieldResult, _a));
                  }
                })];
              }

              if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["isInlineFragment"])(selection)) {
                fragment = selection;
              } else {
                fragment = fragmentMap[selection.name.value];
                __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragment, "No fragment named " + selection.name.value) : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragment, 11);
              }

              if (fragment && fragment.typeCondition) {
                typeCondition = fragment.typeCondition.name.value;

                if (execContext.fragmentMatcher(rootValue, typeCondition, context)) {
                  return [2, this.resolveSelectionSet(fragment.selectionSet, rootValue, execContext).then(function (fragmentResult) {
                    resultsToMerge.push(fragmentResult);
                  })];
                }
              }

              return [2];
            });
          });
        };

        return [2, Promise.all(selectionSet.selections.map(execute)).then(function () {
          return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["mergeDeepArray"])(resultsToMerge);
        })];
      });
    });
  };

  LocalState.prototype.resolveField = function (field, rootValue, execContext) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var variables, fieldName, aliasedFieldName, aliasUsed, defaultResult, resultPromise, resolverType, resolverMap, resolve;

      var _this = this;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        variables = execContext.variables;
        fieldName = field.name.value;
        aliasedFieldName = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["resultKeyNameFromField"])(field);
        aliasUsed = fieldName !== aliasedFieldName;
        defaultResult = rootValue[aliasedFieldName] || rootValue[fieldName];
        resultPromise = Promise.resolve(defaultResult);

        if (!execContext.onlyRunForcedResolvers || this.shouldForceResolvers(field)) {
          resolverType = rootValue.__typename || execContext.defaultOperationType;
          resolverMap = this.resolvers && this.resolvers[resolverType];

          if (resolverMap) {
            resolve = resolverMap[aliasUsed ? fieldName : aliasedFieldName];

            if (resolve) {
              resultPromise = Promise.resolve(_cache_index_js__WEBPACK_IMPORTED_MODULE_4__["cacheSlot"].withValue(this.cache, resolve, [rootValue, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_3__["argumentsObjectFromField"])(field, variables), execContext.context, {
                field: field,
                fragmentMap: execContext.fragmentMap
              }]));
            }
          }
        }

        return [2, resultPromise.then(function (result) {
          if (result === void 0) {
            result = defaultResult;
          }

          if (field.directives) {
            field.directives.forEach(function (directive) {
              if (directive.name.value === 'export' && directive.arguments) {
                directive.arguments.forEach(function (arg) {
                  if (arg.name.value === 'as' && arg.value.kind === 'StringValue') {
                    execContext.exportedVariables[arg.value.value] = result;
                  }
                });
              }
            });
          }

          if (!field.selectionSet) {
            return result;
          }

          if (result == null) {
            return result;
          }

          if (Array.isArray(result)) {
            return _this.resolveSubSelectedArray(field, result, execContext);
          }

          if (field.selectionSet) {
            return _this.resolveSelectionSet(field.selectionSet, result, execContext);
          }
        })];
      });
    });
  };

  LocalState.prototype.resolveSubSelectedArray = function (field, result, execContext) {
    var _this = this;

    return Promise.all(result.map(function (item) {
      if (item === null) {
        return null;
      }

      if (Array.isArray(item)) {
        return _this.resolveSubSelectedArray(field, item, execContext);
      }

      if (field.selectionSet) {
        return _this.resolveSelectionSet(field.selectionSet, item, execContext);
      }
    }));
  };

  return LocalState;
}();



/***/ }),

/***/ "./node_modules/@apollo/client/core/ObservableQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/core/ObservableQuery.js ***!
  \*************************************************************/
/*! exports provided: ObservableQuery, logMissingFieldErrors, applyNextFetchPolicy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return ObservableQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logMissingFieldErrors", function() { return logMissingFieldErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyNextFetchPolicy", function() { return applyNextFetchPolicy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");





var assign = Object.assign,
    hasOwnProperty = Object.hasOwnProperty;
var warnedAboutUpdateQuery = false;

var ObservableQuery = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ObservableQuery, _super);

  function ObservableQuery(_a) {
    var queryManager = _a.queryManager,
        queryInfo = _a.queryInfo,
        options = _a.options;

    var _this = _super.call(this, function (observer) {
      try {
        var subObserver = observer._subscription._observer;

        if (subObserver && !subObserver.error) {
          subObserver.error = defaultSubscriptionObserverErrorCallback;
        }
      } catch (_a) {}

      var first = !_this.observers.size;

      _this.observers.add(observer);

      var last = _this.last;

      if (last && last.error) {
        observer.error && observer.error(last.error);
      } else if (last && last.result) {
        observer.next && observer.next(last.result);
      }

      if (first) {
        _this.reobserve().catch(function () {});
      }

      return function () {
        if (_this.observers.delete(observer) && !_this.observers.size) {
          _this.tearDownQuery();
        }
      };
    }) || this;

    _this.observers = new Set();
    _this.subscriptions = new Set();
    _this.isTornDown = false;
    _this.options = options;
    _this.queryId = queryInfo.queryId || queryManager.generateQueryId();
    var opDef = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["getOperationDefinition"])(options.query);
    _this.queryName = opDef && opDef.name && opDef.name.value;
    _this.initialFetchPolicy = options.fetchPolicy || "cache-first";
    _this.queryManager = queryManager;
    _this.queryInfo = queryInfo;
    return _this;
  }

  Object.defineProperty(ObservableQuery.prototype, "variables", {
    get: function () {
      return this.options.variables;
    },
    enumerable: false,
    configurable: true
  });

  ObservableQuery.prototype.result = function () {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var observer = {
        next: function (result) {
          resolve(result);

          _this.observers.delete(observer);

          if (!_this.observers.size) {
            _this.queryManager.removeQuery(_this.queryId);
          }

          setTimeout(function () {
            subscription.unsubscribe();
          }, 0);
        },
        error: reject
      };

      var subscription = _this.subscribe(observer);
    });
  };

  ObservableQuery.prototype.getCurrentResult = function (saveAsLastResult) {
    if (saveAsLastResult === void 0) {
      saveAsLastResult = true;
    }

    var lastResult = this.getLastResult(true);
    var networkStatus = this.queryInfo.networkStatus || lastResult && lastResult.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready;

    var result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, lastResult), {
      loading: Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["isNetworkRequestInFlight"])(networkStatus),
      networkStatus: networkStatus
    });

    var _a = this.options.fetchPolicy,
        fetchPolicy = _a === void 0 ? "cache-first" : _a;
    var shouldReturnCachedData = lastResult || fetchPolicy !== 'network-only' && fetchPolicy !== 'no-cache' && fetchPolicy !== 'standby';

    if (shouldReturnCachedData && !this.queryManager.transform(this.options.query).hasForcedResolvers) {
      var diff = this.queryInfo.getDiff();

      if (diff.complete || this.options.returnPartialData) {
        result.data = diff.result;
      }

      if (Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(result.data, {})) {
        result.data = void 0;
      }

      if (diff.complete) {
        if (result.networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading && (fetchPolicy === 'cache-first' || fetchPolicy === 'cache-only')) {
          result.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready;
          result.loading = false;
        }

        delete result.partial;
      } else if (fetchPolicy !== "no-cache") {
        result.partial = true;
      }

      if (__DEV__ && !diff.complete && !this.options.partialRefetch && !result.loading && !result.data && !result.error) {
        logMissingFieldErrors(diff.missing);
      }
    }

    if (saveAsLastResult) {
      this.updateLastResult(result);
    }

    return result;
  };

  ObservableQuery.prototype.isDifferentFromLastResult = function (newResult) {
    return !this.last || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(this.last.result, newResult);
  };

  ObservableQuery.prototype.getLast = function (key, variablesMustMatch) {
    var last = this.last;

    if (last && last[key] && (!variablesMustMatch || Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(last.variables, this.variables))) {
      return last[key];
    }
  };

  ObservableQuery.prototype.getLastResult = function (variablesMustMatch) {
    return this.getLast("result", variablesMustMatch);
  };

  ObservableQuery.prototype.getLastError = function (variablesMustMatch) {
    return this.getLast("error", variablesMustMatch);
  };

  ObservableQuery.prototype.resetLastResults = function () {
    delete this.last;
    this.isTornDown = false;
  };

  ObservableQuery.prototype.resetQueryStoreErrors = function () {
    this.queryManager.resetErrors(this.queryId);
  };

  ObservableQuery.prototype.refetch = function (variables) {
    var _a;

    var reobserveOptions = {
      pollInterval: 0
    };
    var fetchPolicy = this.options.fetchPolicy;

    if (fetchPolicy === 'no-cache') {
      reobserveOptions.fetchPolicy = 'no-cache';
    } else if (fetchPolicy !== 'cache-and-network') {
      reobserveOptions.fetchPolicy = 'network-only';
    }

    if (__DEV__ && variables && hasOwnProperty.call(variables, "variables")) {
      var queryDef = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["getQueryDefinition"])(this.options.query);
      var vars = queryDef.variableDefinitions;

      if (!vars || !vars.some(function (v) {
        return v.variable.name.value === "variables";
      })) {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Called refetch(" + JSON.stringify(variables) + ") for query " + (((_a = queryDef.name) === null || _a === void 0 ? void 0 : _a.value) || JSON.stringify(queryDef)) + ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?");
      }
    }

    if (variables && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(this.options.variables, variables)) {
      reobserveOptions.variables = this.options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), variables);
    }

    this.queryInfo.resetLastWrite();
    return this.reobserve(reobserveOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].refetch);
  };

  ObservableQuery.prototype.fetchMore = function (fetchMoreOptions) {
    var _this = this;

    var combinedOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fetchMoreOptions.query ? fetchMoreOptions : Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options), fetchMoreOptions), {
      variables: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.options.variables), fetchMoreOptions.variables)
    })), {
      fetchPolicy: "no-cache"
    });

    var qid = this.queryManager.generateQueryId();

    if (combinedOptions.notifyOnNetworkStatusChange) {
      this.queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].fetchMore;
      this.observe();
    }

    return this.queryManager.fetchQuery(qid, combinedOptions, _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].fetchMore).then(function (fetchMoreResult) {
      var data = fetchMoreResult.data;
      var updateQuery = fetchMoreOptions.updateQuery;

      if (updateQuery) {
        if (__DEV__ && !warnedAboutUpdateQuery) {
          __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("The updateQuery callback for fetchMore is deprecated, and will be removed\nin the next major version of Apollo Client.\n\nPlease convert updateQuery functions to field policies with appropriate\nread and merge functions, or use/adapt a helper function (such as\nconcatPagination, offsetLimitPagination, or relayStylePagination) from\n@apollo/client/utilities.\n\nThe field policy system handles pagination more effectively than a\nhand-written updateQuery function, and you only need to define the policy\nonce, rather than every time you call fetchMore.");
          warnedAboutUpdateQuery = true;
        }

        _this.updateQuery(function (previous) {
          return updateQuery(previous, {
            fetchMoreResult: data,
            variables: combinedOptions.variables
          });
        });
      } else {
        _this.queryManager.cache.writeQuery({
          query: combinedOptions.query,
          variables: combinedOptions.variables,
          data: data
        });
      }

      return fetchMoreResult;
    }).finally(function () {
      _this.queryManager.stopQuery(qid);

      _this.reobserve();
    });
  };

  ObservableQuery.prototype.subscribeToMore = function (options) {
    var _this = this;

    var subscription = this.queryManager.startGraphQLSubscription({
      query: options.document,
      variables: options.variables,
      context: options.context
    }).subscribe({
      next: function (subscriptionData) {
        var updateQuery = options.updateQuery;

        if (updateQuery) {
          _this.updateQuery(function (previous, _a) {
            var variables = _a.variables;
            return updateQuery(previous, {
              subscriptionData: subscriptionData,
              variables: variables
            });
          });
        }
      },
      error: function (err) {
        if (options.onError) {
          options.onError(err);
          return;
        }

        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].error('Unhandled GraphQL subscription error', err);
      }
    });
    this.subscriptions.add(subscription);
    return function () {
      if (_this.subscriptions.delete(subscription)) {
        subscription.unsubscribe();
      }
    };
  };

  ObservableQuery.prototype.setOptions = function (newOptions) {
    return this.reobserve(newOptions);
  };

  ObservableQuery.prototype.setVariables = function (variables) {
    if (Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(this.variables, variables)) {
      return this.observers.size ? this.result() : Promise.resolve();
    }

    this.options.variables = variables;

    if (!this.observers.size) {
      return Promise.resolve();
    }

    return this.reobserve({
      fetchPolicy: this.initialFetchPolicy,
      variables: variables
    }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].setVariables);
  };

  ObservableQuery.prototype.updateQuery = function (mapFn) {
    var queryManager = this.queryManager;
    var result = queryManager.cache.diff({
      query: this.options.query,
      variables: this.variables,
      returnPartialData: true,
      optimistic: false
    }).result;
    var newResult = mapFn(result, {
      variables: this.variables
    });

    if (newResult) {
      queryManager.cache.writeQuery({
        query: this.options.query,
        data: newResult,
        variables: this.variables
      });
      queryManager.broadcastQueries();
    }
  };

  ObservableQuery.prototype.startPolling = function (pollInterval) {
    this.options.pollInterval = pollInterval;
    this.updatePolling();
  };

  ObservableQuery.prototype.stopPolling = function () {
    this.options.pollInterval = 0;
    this.updatePolling();
  };

  ObservableQuery.prototype.fetch = function (options, newNetworkStatus) {
    this.queryManager.setObservableQuery(this);
    return this.queryManager.fetchQueryObservable(this.queryId, options, newNetworkStatus);
  };

  ObservableQuery.prototype.updatePolling = function () {
    var _this = this;

    if (this.queryManager.ssrMode) {
      return;
    }

    var _a = this,
        pollingInfo = _a.pollingInfo,
        pollInterval = _a.options.pollInterval;

    if (!pollInterval) {
      if (pollingInfo) {
        clearTimeout(pollingInfo.timeout);
        delete this.pollingInfo;
      }

      return;
    }

    if (pollingInfo && pollingInfo.interval === pollInterval) {
      return;
    }

    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(pollInterval, 'Attempted to start a polling query without a polling interval.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(pollInterval, 12);
    var info = pollingInfo || (this.pollingInfo = {});
    info.interval = pollInterval;

    var maybeFetch = function () {
      if (_this.pollingInfo) {
        if (!Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["isNetworkRequestInFlight"])(_this.queryInfo.networkStatus)) {
          _this.reobserve({
            fetchPolicy: "network-only"
          }, _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].poll).then(poll, poll);
        } else {
          poll();
        }
      }

      ;
    };

    var poll = function () {
      var info = _this.pollingInfo;

      if (info) {
        clearTimeout(info.timeout);
        info.timeout = setTimeout(maybeFetch, info.interval);
      }
    };

    poll();
  };

  ObservableQuery.prototype.updateLastResult = function (newResult, variables) {
    if (variables === void 0) {
      variables = this.variables;
    }

    this.last = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.last), {
      result: this.queryManager.assumeImmutableResults ? newResult : Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(newResult),
      variables: variables
    });

    if (!Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(newResult.errors)) {
      delete this.last.error;
    }

    return this.last;
  };

  ObservableQuery.prototype.reobserve = function (newOptions, newNetworkStatus) {
    var _this = this;

    this.isTornDown = false;
    var useDisposableConcast = newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].refetch || newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].fetchMore || newNetworkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].poll;
    var oldVariables = this.options.variables;
    var options = useDisposableConcast ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["compact"])(this.options, newOptions) : assign(this.options, Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["compact"])(newOptions));

    if (!useDisposableConcast) {
      this.updatePolling();

      if (newOptions && newOptions.variables && !newOptions.fetchPolicy && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(newOptions.variables, oldVariables)) {
        options.fetchPolicy = this.initialFetchPolicy;

        if (newNetworkStatus === void 0) {
          newNetworkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].setVariables;
        }
      }
    }

    var variables = options.variables && Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.variables);

    var concast = this.fetch(options, newNetworkStatus);
    var observer = {
      next: function (result) {
        _this.reportResult(result, variables);
      },
      error: function (error) {
        _this.reportError(error, variables);
      }
    };

    if (!useDisposableConcast) {
      if (this.concast && this.observer) {
        this.concast.removeObserver(this.observer, true);
      }

      this.concast = concast;
      this.observer = observer;
    }

    concast.addObserver(observer);
    return concast.promise;
  };

  ObservableQuery.prototype.observe = function () {
    this.reportResult(this.getCurrentResult(false), this.variables);
  };

  ObservableQuery.prototype.reportResult = function (result, variables) {
    if (this.getLastError() || this.isDifferentFromLastResult(result)) {
      this.updateLastResult(result, variables);
      Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["iterateObserversSafely"])(this.observers, 'next', result);
    }
  };

  ObservableQuery.prototype.reportError = function (error, variables) {
    var errorResult = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.getLastResult()), {
      error: error,
      errors: error.graphQLErrors,
      networkStatus: _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].error,
      loading: false
    });

    this.updateLastResult(errorResult, variables);
    Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["iterateObserversSafely"])(this.observers, 'error', this.last.error = error);
  };

  ObservableQuery.prototype.hasObservers = function () {
    return this.observers.size > 0;
  };

  ObservableQuery.prototype.tearDownQuery = function () {
    if (this.isTornDown) return;

    if (this.concast && this.observer) {
      this.concast.removeObserver(this.observer);
      delete this.concast;
      delete this.observer;
    }

    this.stopPolling();
    this.subscriptions.forEach(function (sub) {
      return sub.unsubscribe();
    });
    this.subscriptions.clear();
    this.queryManager.stopQuery(this.queryId);
    this.observers.clear();
    this.isTornDown = true;
  };

  return ObservableQuery;
}(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Observable"]);


Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["fixObservableSubclass"])(ObservableQuery);

function defaultSubscriptionObserverErrorCallback(error) {
  __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].error('Unhandled error', error.message, error.stack);
}

function logMissingFieldErrors(missing) {
  if (__DEV__ && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["isNonEmptyArray"])(missing)) {
    __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].debug("Missing cache result fields: " + missing.map(function (m) {
      return m.path.join('.');
    }).join(', '), missing);
  }
}
function applyNextFetchPolicy(options) {
  var _a = options.fetchPolicy,
      fetchPolicy = _a === void 0 ? "cache-first" : _a,
      nextFetchPolicy = options.nextFetchPolicy;

  if (nextFetchPolicy) {
    options.fetchPolicy = typeof nextFetchPolicy === "function" ? nextFetchPolicy.call(options, fetchPolicy) : nextFetchPolicy;
  }
}

/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryInfo.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryInfo.js ***!
  \*******************************************************/
/*! exports provided: QueryInfo, shouldWriteResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryInfo", function() { return QueryInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldWriteResult", function() { return shouldWriteResult; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");




;
var destructiveMethodCounts = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["canUseWeakMap"] ? WeakMap : Map)();

function wrapDestructiveCacheMethod(cache, methodName) {
  var original = cache[methodName];

  if (typeof original === "function") {
    cache[methodName] = function () {
      destructiveMethodCounts.set(cache, (destructiveMethodCounts.get(cache) + 1) % 1e15);
      return original.apply(this, arguments);
    };
  }
}

function cancelNotifyTimeout(info) {
  if (info["notifyTimeout"]) {
    clearTimeout(info["notifyTimeout"]);
    info["notifyTimeout"] = void 0;
  }
}

var QueryInfo = function () {
  function QueryInfo(queryManager, queryId) {
    if (queryId === void 0) {
      queryId = queryManager.generateQueryId();
    }

    this.queryId = queryId;
    this.listeners = new Set();
    this.document = null;
    this.lastRequestId = 1;
    this.subscriptions = new Set();
    this.stopped = false;
    this.dirty = false;
    this.observableQuery = null;
    var cache = this.cache = queryManager.cache;

    if (!destructiveMethodCounts.has(cache)) {
      destructiveMethodCounts.set(cache, 0);
      wrapDestructiveCacheMethod(cache, "evict");
      wrapDestructiveCacheMethod(cache, "modify");
      wrapDestructiveCacheMethod(cache, "reset");
    }
  }

  QueryInfo.prototype.init = function (query) {
    var networkStatus = query.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading;

    if (this.variables && this.networkStatus !== _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.variables, query.variables)) {
      networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].setVariables;
    }

    if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(query.variables, this.variables)) {
      this.lastDiff = void 0;
    }

    Object.assign(this, {
      document: query.document,
      variables: query.variables,
      networkError: null,
      graphQLErrors: this.graphQLErrors || [],
      networkStatus: networkStatus
    });

    if (query.observableQuery) {
      this.setObservableQuery(query.observableQuery);
    }

    if (query.lastRequestId) {
      this.lastRequestId = query.lastRequestId;
    }

    return this;
  };

  QueryInfo.prototype.reset = function () {
    cancelNotifyTimeout(this);
    this.lastDiff = void 0;
    this.dirty = false;
  };

  QueryInfo.prototype.getDiff = function (variables) {
    if (variables === void 0) {
      variables = this.variables;
    }

    var options = this.getDiffOptions(variables);

    if (this.lastDiff && Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(options, this.lastDiff.options)) {
      return this.lastDiff.diff;
    }

    this.updateWatch(this.variables = variables);
    var oq = this.observableQuery;

    if (oq && oq.options.fetchPolicy === "no-cache") {
      return {
        complete: false
      };
    }

    var diff = this.cache.diff(options);
    this.updateLastDiff(diff, options);
    return diff;
  };

  QueryInfo.prototype.updateLastDiff = function (diff, options) {
    this.lastDiff = diff ? {
      diff: diff,
      options: options || this.getDiffOptions()
    } : void 0;
  };

  QueryInfo.prototype.getDiffOptions = function (variables) {
    var _a;

    if (variables === void 0) {
      variables = this.variables;
    }

    return {
      query: this.document,
      variables: variables,
      returnPartialData: true,
      optimistic: true,
      canonizeResults: (_a = this.observableQuery) === null || _a === void 0 ? void 0 : _a.options.canonizeResults
    };
  };

  QueryInfo.prototype.setDiff = function (diff) {
    var _this = this;

    var oldDiff = this.lastDiff && this.lastDiff.diff;
    this.updateLastDiff(diff);

    if (!this.dirty && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(oldDiff && oldDiff.result, diff && diff.result)) {
      this.dirty = true;

      if (!this.notifyTimeout) {
        this.notifyTimeout = setTimeout(function () {
          return _this.notify();
        }, 0);
      }
    }
  };

  QueryInfo.prototype.setObservableQuery = function (oq) {
    var _this = this;

    if (oq === this.observableQuery) return;

    if (this.oqListener) {
      this.listeners.delete(this.oqListener);
    }

    this.observableQuery = oq;

    if (oq) {
      oq["queryInfo"] = this;
      this.listeners.add(this.oqListener = function () {
        if (_this.getDiff().fromOptimisticTransaction) {
          oq["observe"]();
        } else {
          oq.reobserve();
        }
      });
    } else {
      delete this.oqListener;
    }
  };

  QueryInfo.prototype.notify = function () {
    var _this = this;

    cancelNotifyTimeout(this);

    if (this.shouldNotify()) {
      this.listeners.forEach(function (listener) {
        return listener(_this);
      });
    }

    this.dirty = false;
  };

  QueryInfo.prototype.shouldNotify = function () {
    if (!this.dirty || !this.listeners.size) {
      return false;
    }

    if (Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["isNetworkRequestInFlight"])(this.networkStatus) && this.observableQuery) {
      var fetchPolicy = this.observableQuery.options.fetchPolicy;

      if (fetchPolicy !== "cache-only" && fetchPolicy !== "cache-and-network") {
        return false;
      }
    }

    return true;
  };

  QueryInfo.prototype.stop = function () {
    if (!this.stopped) {
      this.stopped = true;
      this.reset();
      this.cancel();
      this.cancel = QueryInfo.prototype.cancel;
      this.subscriptions.forEach(function (sub) {
        return sub.unsubscribe();
      });
      var oq = this.observableQuery;
      if (oq) oq.stopPolling();
    }
  };

  QueryInfo.prototype.cancel = function () {};

  QueryInfo.prototype.updateWatch = function (variables) {
    var _this = this;

    if (variables === void 0) {
      variables = this.variables;
    }

    var oq = this.observableQuery;

    if (oq && oq.options.fetchPolicy === "no-cache") {
      return;
    }

    var watchOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.getDiffOptions(variables)), {
      watcher: this,
      callback: function (diff) {
        return _this.setDiff(diff);
      }
    });

    if (!this.lastWatch || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(watchOptions, this.lastWatch)) {
      this.cancel();
      this.cancel = this.cache.watch(this.lastWatch = watchOptions);
    }
  };

  QueryInfo.prototype.resetLastWrite = function () {
    this.lastWrite = void 0;
  };

  QueryInfo.prototype.shouldWrite = function (result, variables) {
    var lastWrite = this.lastWrite;
    return !(lastWrite && lastWrite.dmCount === destructiveMethodCounts.get(this.cache) && Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(variables, lastWrite.variables) && Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(result.data, lastWrite.result.data));
  };

  QueryInfo.prototype.markResult = function (result, options, cacheWriteBehavior) {
    var _this = this;

    this.graphQLErrors = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["isNonEmptyArray"])(result.errors) ? result.errors : [];
    this.reset();

    if (options.fetchPolicy === 'no-cache') {
      this.updateLastDiff({
        result: result.data,
        complete: true
      }, this.getDiffOptions(options.variables));
    } else if (cacheWriteBehavior !== 0) {
      if (shouldWriteResult(result, options.errorPolicy)) {
        this.cache.performTransaction(function (cache) {
          if (_this.shouldWrite(result, options.variables)) {
            cache.writeQuery({
              query: _this.document,
              data: result.data,
              variables: options.variables,
              overwrite: cacheWriteBehavior === 1
            });
            _this.lastWrite = {
              result: result,
              variables: options.variables,
              dmCount: destructiveMethodCounts.get(_this.cache)
            };
          } else {
            if (_this.lastDiff && _this.lastDiff.diff.complete) {
              result.data = _this.lastDiff.diff.result;
              return;
            }
          }

          var diffOptions = _this.getDiffOptions(options.variables);

          var diff = cache.diff(diffOptions);

          if (!_this.stopped) {
            _this.updateWatch(options.variables);
          }

          _this.updateLastDiff(diff, diffOptions);

          if (diff.complete) {
            result.data = diff.result;
          }
        });
      } else {
        this.lastWrite = void 0;
      }
    }
  };

  QueryInfo.prototype.markReady = function () {
    this.networkError = null;
    return this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready;
  };

  QueryInfo.prototype.markError = function (error) {
    this.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].error;
    this.lastWrite = void 0;
    this.reset();

    if (error.graphQLErrors) {
      this.graphQLErrors = error.graphQLErrors;
    }

    if (error.networkError) {
      this.networkError = error.networkError;
    }

    return error;
  };

  return QueryInfo;
}();


function shouldWriteResult(result, errorPolicy) {
  if (errorPolicy === void 0) {
    errorPolicy = "none";
  }

  var ignoreErrors = errorPolicy === "ignore" || errorPolicy === "all";
  var writeWithErrors = !Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["graphQLResultHasError"])(result);

  if (!writeWithErrors && ignoreErrors && result.data) {
    writeWithErrors = true;
  }

  return writeWithErrors;
}

/***/ }),

/***/ "./node_modules/@apollo/client/core/QueryManager.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/core/QueryManager.js ***!
  \**********************************************************/
/*! exports provided: QueryManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryManager", function() { return QueryManager; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony import */ var _LocalState_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LocalState.js */ "./node_modules/@apollo/client/core/LocalState.js");
/* harmony import */ var _QueryInfo_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./QueryInfo.js */ "./node_modules/@apollo/client/core/QueryInfo.js");











var hasOwnProperty = Object.prototype.hasOwnProperty;

var QueryManager = function () {
  function QueryManager(_a) {
    var cache = _a.cache,
        link = _a.link,
        _b = _a.queryDeduplication,
        queryDeduplication = _b === void 0 ? false : _b,
        onBroadcast = _a.onBroadcast,
        _c = _a.ssrMode,
        ssrMode = _c === void 0 ? false : _c,
        _d = _a.clientAwareness,
        clientAwareness = _d === void 0 ? {} : _d,
        localState = _a.localState,
        assumeImmutableResults = _a.assumeImmutableResults;
    this.clientAwareness = {};
    this.queries = new Map();
    this.fetchCancelFns = new Map();
    this.transformCache = new (_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["canUseWeakMap"] ? WeakMap : Map)();
    this.queryIdCounter = 1;
    this.requestIdCounter = 1;
    this.mutationIdCounter = 1;
    this.inFlightLinkObservables = new Map();
    this.cache = cache;
    this.link = link;
    this.queryDeduplication = queryDeduplication;
    this.clientAwareness = clientAwareness;
    this.localState = localState || new _LocalState_js__WEBPACK_IMPORTED_MODULE_9__["LocalState"]({
      cache: cache
    });
    this.ssrMode = ssrMode;
    this.assumeImmutableResults = !!assumeImmutableResults;

    if (this.onBroadcast = onBroadcast) {
      this.mutationStore = Object.create(null);
    }
  }

  QueryManager.prototype.stop = function () {
    var _this = this;

    this.queries.forEach(function (_info, queryId) {
      _this.stopQueryNoBroadcast(queryId);
    });
    this.cancelPendingFetches(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('QueryManager stopped while query was in flight') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](13));
  };

  QueryManager.prototype.cancelPendingFetches = function (error) {
    this.fetchCancelFns.forEach(function (cancel) {
      return cancel(error);
    });
    this.fetchCancelFns.clear();
  };

  QueryManager.prototype.mutate = function (_a) {
    var mutation = _a.mutation,
        variables = _a.variables,
        optimisticResponse = _a.optimisticResponse,
        updateQueries = _a.updateQueries,
        _b = _a.refetchQueries,
        refetchQueries = _b === void 0 ? [] : _b,
        _c = _a.awaitRefetchQueries,
        awaitRefetchQueries = _c === void 0 ? false : _c,
        updateWithProxyFn = _a.update,
        onQueryUpdated = _a.onQueryUpdated,
        _d = _a.errorPolicy,
        errorPolicy = _d === void 0 ? 'none' : _d,
        _e = _a.fetchPolicy,
        fetchPolicy = _e === void 0 ? 'network-only' : _e,
        keepRootFields = _a.keepRootFields,
        context = _a.context;
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
      var mutationId, mutationStoreValue, self;
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_f) {
        switch (_f.label) {
          case 0:
            __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(mutation, 'mutation option is required. You must specify your GraphQL document in the mutation option.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(mutation, 14);
            __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fetchPolicy === 'network-only' || fetchPolicy === 'no-cache', "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fetchPolicy === 'network-only' || fetchPolicy === 'no-cache', 15);
            mutationId = this.generateMutationId();
            mutation = this.transform(mutation).document;
            variables = this.getVariables(mutation, variables);
            if (!this.transform(mutation).hasClientExports) return [3, 2];
            return [4, this.localState.addExportedVariables(mutation, variables, context)];

          case 1:
            variables = _f.sent();
            _f.label = 2;

          case 2:
            mutationStoreValue = this.mutationStore && (this.mutationStore[mutationId] = {
              mutation: mutation,
              variables: variables,
              loading: true,
              error: null
            });

            if (optimisticResponse) {
              this.markMutationOptimistic(optimisticResponse, {
                mutationId: mutationId,
                document: mutation,
                variables: variables,
                fetchPolicy: fetchPolicy,
                errorPolicy: errorPolicy,
                context: context,
                updateQueries: updateQueries,
                update: updateWithProxyFn,
                keepRootFields: keepRootFields
              });
            }

            this.broadcastQueries();
            self = this;
            return [2, new Promise(function (resolve, reject) {
              return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["asyncMap"])(self.getObservableFromLink(mutation, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), {
                optimisticResponse: optimisticResponse
              }), variables, false), function (result) {
                if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["graphQLResultHasError"])(result) && errorPolicy === 'none') {
                  throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_6__["ApolloError"]({
                    graphQLErrors: result.errors
                  });
                }

                if (mutationStoreValue) {
                  mutationStoreValue.loading = false;
                  mutationStoreValue.error = null;
                }

                var storeResult = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result);

                if (typeof refetchQueries === "function") {
                  refetchQueries = refetchQueries(storeResult);
                }

                if (errorPolicy === 'ignore' && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["graphQLResultHasError"])(storeResult)) {
                  delete storeResult.errors;
                }

                return self.markMutationResult({
                  mutationId: mutationId,
                  result: storeResult,
                  document: mutation,
                  variables: variables,
                  fetchPolicy: fetchPolicy,
                  errorPolicy: errorPolicy,
                  context: context,
                  update: updateWithProxyFn,
                  updateQueries: updateQueries,
                  awaitRefetchQueries: awaitRefetchQueries,
                  refetchQueries: refetchQueries,
                  removeOptimistic: optimisticResponse ? mutationId : void 0,
                  onQueryUpdated: onQueryUpdated,
                  keepRootFields: keepRootFields
                });
              }).subscribe({
                next: function (storeResult) {
                  self.broadcastQueries();
                  resolve(storeResult);
                },
                error: function (err) {
                  if (mutationStoreValue) {
                    mutationStoreValue.loading = false;
                    mutationStoreValue.error = err;
                  }

                  if (optimisticResponse) {
                    self.cache.removeOptimistic(mutationId);
                  }

                  self.broadcastQueries();
                  reject(err instanceof _errors_index_js__WEBPACK_IMPORTED_MODULE_6__["ApolloError"] ? err : new _errors_index_js__WEBPACK_IMPORTED_MODULE_6__["ApolloError"]({
                    networkError: err
                  }));
                }
              });
            })];
        }
      });
    });
  };

  QueryManager.prototype.markMutationResult = function (mutation, cache) {
    var _this = this;

    if (cache === void 0) {
      cache = this.cache;
    }

    var result = mutation.result;
    var cacheWrites = [];
    var skipCache = mutation.fetchPolicy === "no-cache";

    if (!skipCache && Object(_QueryInfo_js__WEBPACK_IMPORTED_MODULE_10__["shouldWriteResult"])(result, mutation.errorPolicy)) {
      cacheWrites.push({
        result: result.data,
        dataId: 'ROOT_MUTATION',
        query: mutation.document,
        variables: mutation.variables
      });
      var updateQueries_1 = mutation.updateQueries;

      if (updateQueries_1) {
        this.queries.forEach(function (_a, queryId) {
          var observableQuery = _a.observableQuery;
          var queryName = observableQuery && observableQuery.queryName;

          if (!queryName || !hasOwnProperty.call(updateQueries_1, queryName)) {
            return;
          }

          var updater = updateQueries_1[queryName];

          var _b = _this.queries.get(queryId),
              document = _b.document,
              variables = _b.variables;

          var _c = cache.diff({
            query: document,
            variables: variables,
            returnPartialData: true,
            optimistic: false
          }),
              currentQueryResult = _c.result,
              complete = _c.complete;

          if (complete && currentQueryResult) {
            var nextQueryResult = updater(currentQueryResult, {
              mutationResult: result,
              queryName: document && Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["getOperationName"])(document) || void 0,
              queryVariables: variables
            });

            if (nextQueryResult) {
              cacheWrites.push({
                result: nextQueryResult,
                dataId: 'ROOT_QUERY',
                query: document,
                variables: variables
              });
            }
          }
        });
      }
    }

    if (cacheWrites.length > 0 || mutation.refetchQueries || mutation.update || mutation.onQueryUpdated || mutation.removeOptimistic) {
      var results_1 = [];
      this.refetchQueries({
        updateCache: function (cache) {
          if (!skipCache) {
            cacheWrites.forEach(function (write) {
              return cache.write(write);
            });
          }

          var update = mutation.update;

          if (update) {
            if (!skipCache) {
              var diff = cache.diff({
                id: "ROOT_MUTATION",
                query: _this.transform(mutation.document).asQuery,
                variables: mutation.variables,
                optimistic: false,
                returnPartialData: true
              });

              if (diff.complete) {
                result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), {
                  data: diff.result
                });
              }
            }

            update(cache, result, {
              context: mutation.context,
              variables: mutation.variables
            });
          }

          if (!skipCache && !mutation.keepRootFields) {
            cache.modify({
              id: 'ROOT_MUTATION',
              fields: function (value, _a) {
                var fieldName = _a.fieldName,
                    DELETE = _a.DELETE;
                return fieldName === "__typename" ? value : DELETE;
              }
            });
          }
        },
        include: mutation.refetchQueries,
        optimistic: false,
        removeOptimistic: mutation.removeOptimistic,
        onQueryUpdated: mutation.onQueryUpdated || null
      }).forEach(function (result) {
        return results_1.push(result);
      });

      if (mutation.awaitRefetchQueries || mutation.onQueryUpdated) {
        return Promise.all(results_1).then(function () {
          return result;
        });
      }
    }

    return Promise.resolve(result);
  };

  QueryManager.prototype.markMutationOptimistic = function (optimisticResponse, mutation) {
    var _this = this;

    var data = typeof optimisticResponse === "function" ? optimisticResponse(mutation.variables) : optimisticResponse;
    return this.cache.recordOptimisticTransaction(function (cache) {
      try {
        _this.markMutationResult(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mutation), {
          result: {
            data: data
          }
        }), cache);
      } catch (error) {
        __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].error(error);
      }
    }, mutation.mutationId);
  };

  QueryManager.prototype.fetchQuery = function (queryId, options, networkStatus) {
    return this.fetchQueryObservable(queryId, options, networkStatus).promise;
  };

  QueryManager.prototype.getQueryStore = function () {
    var store = Object.create(null);
    this.queries.forEach(function (info, queryId) {
      store[queryId] = {
        variables: info.variables,
        networkStatus: info.networkStatus,
        networkError: info.networkError,
        graphQLErrors: info.graphQLErrors
      };
    });
    return store;
  };

  QueryManager.prototype.resetErrors = function (queryId) {
    var queryInfo = this.queries.get(queryId);

    if (queryInfo) {
      queryInfo.networkError = undefined;
      queryInfo.graphQLErrors = [];
    }
  };

  QueryManager.prototype.transform = function (document) {
    var transformCache = this.transformCache;

    if (!transformCache.has(document)) {
      var transformed = this.cache.transformDocument(document);
      var forLink = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["removeConnectionDirectiveFromDocument"])(this.cache.transformForLink(transformed));
      var clientQuery = this.localState.clientQuery(transformed);
      var serverQuery = forLink && this.localState.serverQuery(forLink);
      var cacheEntry_1 = {
        document: transformed,
        hasClientExports: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["hasClientExports"])(transformed),
        hasForcedResolvers: this.localState.shouldForceResolvers(transformed),
        clientQuery: clientQuery,
        serverQuery: serverQuery,
        defaultVars: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["getDefaultValues"])(Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["getOperationDefinition"])(transformed)),
        asQuery: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, transformed), {
          definitions: transformed.definitions.map(function (def) {
            if (def.kind === "OperationDefinition" && def.operation !== "query") {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, def), {
                operation: "query"
              });
            }

            return def;
          })
        })
      };

      var add = function (doc) {
        if (doc && !transformCache.has(doc)) {
          transformCache.set(doc, cacheEntry_1);
        }
      };

      add(document);
      add(transformed);
      add(clientQuery);
      add(serverQuery);
    }

    return transformCache.get(document);
  };

  QueryManager.prototype.getVariables = function (document, variables) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.transform(document).defaultVars), variables);
  };

  QueryManager.prototype.watchQuery = function (options) {
    options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      variables: this.getVariables(options.query, options.variables)
    });

    if (typeof options.notifyOnNetworkStatusChange === 'undefined') {
      options.notifyOnNetworkStatusChange = false;
    }

    var queryInfo = new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_10__["QueryInfo"](this);
    var observable = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__["ObservableQuery"]({
      queryManager: this,
      queryInfo: queryInfo,
      options: options
    });
    this.queries.set(observable.queryId, queryInfo);
    queryInfo.init({
      document: options.query,
      observableQuery: observable,
      variables: options.variables
    });
    return observable;
  };

  QueryManager.prototype.query = function (options, queryId) {
    var _this = this;

    if (queryId === void 0) {
      queryId = this.generateQueryId();
    }

    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.query, 'query option is required. You must specify your GraphQL document ' + 'in the query option.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.query, 16);
    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.query.kind === 'Document', 'You must wrap the query string in a "gql" tag.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(options.query.kind === 'Document', 17);
    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!options.returnPartialData, 'returnPartialData option only supported on watchQuery.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!options.returnPartialData, 18);
    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!options.pollInterval, 'pollInterval option only supported on watchQuery.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(!options.pollInterval, 19);
    return this.fetchQuery(queryId, options).finally(function () {
      return _this.stopQuery(queryId);
    });
  };

  QueryManager.prototype.generateQueryId = function () {
    return String(this.queryIdCounter++);
  };

  QueryManager.prototype.generateRequestId = function () {
    return this.requestIdCounter++;
  };

  QueryManager.prototype.generateMutationId = function () {
    return String(this.mutationIdCounter++);
  };

  QueryManager.prototype.stopQueryInStore = function (queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.broadcastQueries();
  };

  QueryManager.prototype.stopQueryInStoreNoBroadcast = function (queryId) {
    var queryInfo = this.queries.get(queryId);
    if (queryInfo) queryInfo.stop();
  };

  QueryManager.prototype.clearStore = function (options) {
    if (options === void 0) {
      options = {
        discardWatches: true
      };
    }

    this.cancelPendingFetches(__DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('Store reset while query was in flight (not completed in link chain)') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](20));
    this.queries.forEach(function (queryInfo) {
      if (queryInfo.observableQuery) {
        queryInfo.networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__["NetworkStatus"].loading;
      } else {
        queryInfo.stop();
      }
    });

    if (this.mutationStore) {
      this.mutationStore = Object.create(null);
    }

    return this.cache.reset(options);
  };

  QueryManager.prototype.getObservableQueries = function (include) {
    var _this = this;

    if (include === void 0) {
      include = "active";
    }

    var queries = new Map();
    var queryNamesAndDocs = new Map();
    var legacyQueryOptions = new Set();

    if (Array.isArray(include)) {
      include.forEach(function (desc) {
        if (typeof desc === "string") {
          queryNamesAndDocs.set(desc, false);
        } else if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isDocumentNode"])(desc)) {
          queryNamesAndDocs.set(_this.transform(desc).document, false);
        } else if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isNonNullObject"])(desc) && desc.query) {
          legacyQueryOptions.add(desc);
        }
      });
    }

    this.queries.forEach(function (_a, queryId) {
      var oq = _a.observableQuery,
          document = _a.document;

      if (oq) {
        if (include === "all") {
          queries.set(queryId, oq);
          return;
        }

        var queryName = oq.queryName,
            fetchPolicy = oq.options.fetchPolicy;

        if (fetchPolicy === "standby" || include === "active" && !oq.hasObservers()) {
          return;
        }

        if (include === "active" || queryName && queryNamesAndDocs.has(queryName) || document && queryNamesAndDocs.has(document)) {
          queries.set(queryId, oq);
          if (queryName) queryNamesAndDocs.set(queryName, true);
          if (document) queryNamesAndDocs.set(document, true);
        }
      }
    });

    if (legacyQueryOptions.size) {
      legacyQueryOptions.forEach(function (options) {
        var queryId = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["makeUniqueId"])("legacyOneTimeQuery");

        var queryInfo = _this.getQuery(queryId).init({
          document: options.query,
          variables: options.variables
        });

        var oq = new _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__["ObservableQuery"]({
          queryManager: _this,
          queryInfo: queryInfo,
          options: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
            fetchPolicy: "network-only"
          })
        });
        Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(oq.queryId === queryId);
        queryInfo.setObservableQuery(oq);
        queries.set(queryId, oq);
      });
    }

    if (__DEV__ && queryNamesAndDocs.size) {
      queryNamesAndDocs.forEach(function (included, nameOrDoc) {
        if (!included) {
          __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Unknown query " + (typeof nameOrDoc === "string" ? "named " : "") + JSON.stringify(nameOrDoc, null, 2) + " requested in refetchQueries options.include array");
        }
      });
    }

    return queries;
  };

  QueryManager.prototype.reFetchObservableQueries = function (includeStandby) {
    var _this = this;

    if (includeStandby === void 0) {
      includeStandby = false;
    }

    var observableQueryPromises = [];
    this.getObservableQueries(includeStandby ? "all" : "active").forEach(function (observableQuery, queryId) {
      var fetchPolicy = observableQuery.options.fetchPolicy;
      observableQuery.resetLastResults();

      if (includeStandby || fetchPolicy !== "standby" && fetchPolicy !== "cache-only") {
        observableQueryPromises.push(observableQuery.refetch());
      }

      _this.getQuery(queryId).setDiff(null);
    });
    this.broadcastQueries();
    return Promise.all(observableQueryPromises);
  };

  QueryManager.prototype.setObservableQuery = function (observableQuery) {
    this.getQuery(observableQuery.queryId).setObservableQuery(observableQuery);
  };

  QueryManager.prototype.startGraphQLSubscription = function (_a) {
    var _this = this;

    var query = _a.query,
        fetchPolicy = _a.fetchPolicy,
        errorPolicy = _a.errorPolicy,
        variables = _a.variables,
        _b = _a.context,
        context = _b === void 0 ? {} : _b;
    query = this.transform(query).document;
    variables = this.getVariables(query, variables);

    var makeObservable = function (variables) {
      return _this.getObservableFromLink(query, context, variables).map(function (result) {
        if (fetchPolicy !== 'no-cache') {
          if (Object(_QueryInfo_js__WEBPACK_IMPORTED_MODULE_10__["shouldWriteResult"])(result, errorPolicy)) {
            _this.cache.write({
              query: query,
              result: result.data,
              dataId: 'ROOT_SUBSCRIPTION',
              variables: variables
            });
          }

          _this.broadcastQueries();
        }

        if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["graphQLResultHasError"])(result)) {
          throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_6__["ApolloError"]({
            graphQLErrors: result.errors
          });
        }

        return result;
      });
    };

    if (this.transform(query).hasClientExports) {
      var observablePromise_1 = this.localState.addExportedVariables(query, variables, context).then(makeObservable);
      return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
        var sub = null;
        observablePromise_1.then(function (observable) {
          return sub = observable.subscribe(observer);
        }, observer.error);
        return function () {
          return sub && sub.unsubscribe();
        };
      });
    }

    return makeObservable(variables);
  };

  QueryManager.prototype.stopQuery = function (queryId) {
    this.stopQueryNoBroadcast(queryId);
    this.broadcastQueries();
  };

  QueryManager.prototype.stopQueryNoBroadcast = function (queryId) {
    this.stopQueryInStoreNoBroadcast(queryId);
    this.removeQuery(queryId);
  };

  QueryManager.prototype.removeQuery = function (queryId) {
    this.fetchCancelFns.delete(queryId);
    this.getQuery(queryId).stop();
    this.queries.delete(queryId);
  };

  QueryManager.prototype.broadcastQueries = function () {
    if (this.onBroadcast) this.onBroadcast();
    this.queries.forEach(function (info) {
      return info.notify();
    });
  };

  QueryManager.prototype.getLocalState = function () {
    return this.localState;
  };

  QueryManager.prototype.getObservableFromLink = function (query, context, variables, deduplication) {
    var _this = this;

    var _a;

    if (deduplication === void 0) {
      deduplication = (_a = context === null || context === void 0 ? void 0 : context.queryDeduplication) !== null && _a !== void 0 ? _a : this.queryDeduplication;
    }

    var observable;
    var serverQuery = this.transform(query).serverQuery;

    if (serverQuery) {
      var _b = this,
          inFlightLinkObservables_1 = _b.inFlightLinkObservables,
          link = _b.link;

      var operation = {
        query: serverQuery,
        variables: variables,
        operationName: Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["getOperationName"])(serverQuery) || void 0,
        context: this.prepareContext(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), {
          forceFetch: !deduplication
        }))
      };
      context = operation.context;

      if (deduplication) {
        var byVariables_1 = inFlightLinkObservables_1.get(serverQuery) || new Map();
        inFlightLinkObservables_1.set(serverQuery, byVariables_1);
        var varJson_1 = Object(_cache_index_js__WEBPACK_IMPORTED_MODULE_4__["canonicalStringify"])(variables);
        observable = byVariables_1.get(varJson_1);

        if (!observable) {
          var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["Concast"]([Object(_link_core_index_js__WEBPACK_IMPORTED_MODULE_3__["execute"])(link, operation)]);
          byVariables_1.set(varJson_1, observable = concast);
          concast.cleanup(function () {
            if (byVariables_1.delete(varJson_1) && byVariables_1.size < 1) {
              inFlightLinkObservables_1.delete(serverQuery);
            }
          });
        }
      } else {
        observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["Concast"]([Object(_link_core_index_js__WEBPACK_IMPORTED_MODULE_3__["execute"])(link, operation)]);
      }
    } else {
      observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["Concast"]([_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["Observable"].of({
        data: {}
      })]);
      context = this.prepareContext(context);
    }

    var clientQuery = this.transform(query).clientQuery;

    if (clientQuery) {
      observable = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["asyncMap"])(observable, function (result) {
        return _this.localState.runResolvers({
          document: clientQuery,
          remoteResult: result,
          context: context,
          variables: variables
        });
      });
    }

    return observable;
  };

  QueryManager.prototype.getResultsFromLink = function (queryInfo, cacheWriteBehavior, options) {
    var requestId = queryInfo.lastRequestId = this.generateRequestId();
    return Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["asyncMap"])(this.getObservableFromLink(queryInfo.document, options.context, options.variables), function (result) {
      var hasErrors = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["isNonEmptyArray"])(result.errors);

      if (requestId >= queryInfo.lastRequestId) {
        if (hasErrors && options.errorPolicy === "none") {
          throw queryInfo.markError(new _errors_index_js__WEBPACK_IMPORTED_MODULE_6__["ApolloError"]({
            graphQLErrors: result.errors
          }));
        }

        queryInfo.markResult(result, options, cacheWriteBehavior);
        queryInfo.markReady();
      }

      var aqr = {
        data: result.data,
        loading: false,
        networkStatus: queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__["NetworkStatus"].ready
      };

      if (hasErrors && options.errorPolicy !== "ignore") {
        aqr.errors = result.errors;
      }

      return aqr;
    }, function (networkError) {
      var error = Object(_errors_index_js__WEBPACK_IMPORTED_MODULE_6__["isApolloError"])(networkError) ? networkError : new _errors_index_js__WEBPACK_IMPORTED_MODULE_6__["ApolloError"]({
        networkError: networkError
      });

      if (requestId >= queryInfo.lastRequestId) {
        queryInfo.markError(error);
      }

      throw error;
    });
  };

  QueryManager.prototype.fetchQueryObservable = function (queryId, options, networkStatus) {
    var _this = this;

    if (networkStatus === void 0) {
      networkStatus = _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__["NetworkStatus"].loading;
    }

    var query = this.transform(options.query).document;
    var variables = this.getVariables(query, options.variables);
    var queryInfo = this.getQuery(queryId);
    var _a = options.fetchPolicy,
        fetchPolicy = _a === void 0 ? "cache-first" : _a,
        _b = options.errorPolicy,
        errorPolicy = _b === void 0 ? "none" : _b,
        _c = options.returnPartialData,
        returnPartialData = _c === void 0 ? false : _c,
        _d = options.notifyOnNetworkStatusChange,
        notifyOnNetworkStatusChange = _d === void 0 ? false : _d,
        _e = options.context,
        context = _e === void 0 ? {} : _e;
    var normalized = Object.assign({}, options, {
      query: query,
      variables: variables,
      fetchPolicy: fetchPolicy,
      errorPolicy: errorPolicy,
      returnPartialData: returnPartialData,
      notifyOnNetworkStatusChange: notifyOnNetworkStatusChange,
      context: context
    });

    var fromVariables = function (variables) {
      normalized.variables = variables;
      return _this.fetchQueryByPolicy(queryInfo, normalized, networkStatus);
    };

    this.fetchCancelFns.set(queryId, function (reason) {
      setTimeout(function () {
        return concast.cancel(reason);
      });
    });
    var concast = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["Concast"](this.transform(normalized.query).hasClientExports ? this.localState.addExportedVariables(normalized.query, normalized.variables, normalized.context).then(fromVariables) : fromVariables(normalized.variables));
    concast.cleanup(function () {
      _this.fetchCancelFns.delete(queryId);

      Object(_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__["applyNextFetchPolicy"])(options);
    });
    return concast;
  };

  QueryManager.prototype.refetchQueries = function (_a) {
    var _this = this;

    var updateCache = _a.updateCache,
        include = _a.include,
        _b = _a.optimistic,
        optimistic = _b === void 0 ? false : _b,
        _c = _a.removeOptimistic,
        removeOptimistic = _c === void 0 ? optimistic ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["makeUniqueId"])("refetchQueries") : void 0 : _c,
        onQueryUpdated = _a.onQueryUpdated;
    var includedQueriesById = new Map();

    if (include) {
      this.getObservableQueries(include).forEach(function (oq, queryId) {
        includedQueriesById.set(queryId, {
          oq: oq,
          lastDiff: _this.getQuery(queryId).getDiff()
        });
      });
    }

    var results = new Map();

    if (updateCache) {
      this.cache.batch({
        update: updateCache,
        optimistic: optimistic && removeOptimistic || false,
        removeOptimistic: removeOptimistic,
        onWatchUpdated: function (watch, diff, lastDiff) {
          var oq = watch.watcher instanceof _QueryInfo_js__WEBPACK_IMPORTED_MODULE_10__["QueryInfo"] && watch.watcher.observableQuery;

          if (oq) {
            if (onQueryUpdated) {
              includedQueriesById.delete(oq.queryId);
              var result = onQueryUpdated(oq, diff, lastDiff);

              if (result === true) {
                result = oq.refetch();
              }

              if (result !== false) {
                results.set(oq, result);
              }

              return false;
            }

            if (onQueryUpdated !== null) {
              includedQueriesById.set(oq.queryId, {
                oq: oq,
                lastDiff: lastDiff,
                diff: diff
              });
            }
          }
        }
      });
    }

    if (includedQueriesById.size) {
      includedQueriesById.forEach(function (_a, queryId) {
        var oq = _a.oq,
            lastDiff = _a.lastDiff,
            diff = _a.diff;
        var result;

        if (onQueryUpdated) {
          if (!diff) {
            var info = oq["queryInfo"];
            info.reset();
            diff = info.getDiff();
          }

          result = onQueryUpdated(oq, diff, lastDiff);
        }

        if (!onQueryUpdated || result === true) {
          result = oq.refetch();
        }

        if (result !== false) {
          results.set(oq, result);
        }

        if (queryId.indexOf("legacyOneTimeQuery") >= 0) {
          _this.stopQueryNoBroadcast(queryId);
        }
      });
    }

    if (removeOptimistic) {
      this.cache.removeOptimistic(removeOptimistic);
    }

    return results;
  };

  QueryManager.prototype.fetchQueryByPolicy = function (queryInfo, _a, networkStatus) {
    var _this = this;

    var query = _a.query,
        variables = _a.variables,
        fetchPolicy = _a.fetchPolicy,
        refetchWritePolicy = _a.refetchWritePolicy,
        errorPolicy = _a.errorPolicy,
        returnPartialData = _a.returnPartialData,
        context = _a.context,
        notifyOnNetworkStatusChange = _a.notifyOnNetworkStatusChange;
    var oldNetworkStatus = queryInfo.networkStatus;
    queryInfo.init({
      document: query,
      variables: variables,
      networkStatus: networkStatus
    });

    var readCache = function () {
      return queryInfo.getDiff(variables);
    };

    var resultsFromCache = function (diff, networkStatus) {
      if (networkStatus === void 0) {
        networkStatus = queryInfo.networkStatus || _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__["NetworkStatus"].loading;
      }

      var data = diff.result;

      if (__DEV__ && !returnPartialData && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_2__["equal"])(data, {})) {
        Object(_ObservableQuery_js__WEBPACK_IMPORTED_MODULE_7__["logMissingFieldErrors"])(diff.missing);
      }

      var fromData = function (data) {
        return _utilities_index_js__WEBPACK_IMPORTED_MODULE_5__["Observable"].of(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          data: data,
          loading: Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_8__["isNetworkRequestInFlight"])(networkStatus),
          networkStatus: networkStatus
        }, diff.complete ? null : {
          partial: true
        }));
      };

      if (data && _this.transform(query).hasForcedResolvers) {
        return _this.localState.runResolvers({
          document: query,
          remoteResult: {
            data: data
          },
          context: context,
          variables: variables,
          onlyRunForcedResolvers: true
        }).then(function (resolved) {
          return fromData(resolved.data || void 0);
        });
      }

      return fromData(data);
    };

    var cacheWriteBehavior = fetchPolicy === "no-cache" ? 0 : networkStatus === _networkStatus_js__WEBPACK_IMPORTED_MODULE_8__["NetworkStatus"].refetch && refetchWritePolicy !== "merge" ? 1 : 2;

    var resultsFromLink = function () {
      return _this.getResultsFromLink(queryInfo, cacheWriteBehavior, {
        variables: variables,
        context: context,
        fetchPolicy: fetchPolicy,
        errorPolicy: errorPolicy
      });
    };

    var shouldNotify = notifyOnNetworkStatusChange && typeof oldNetworkStatus === "number" && oldNetworkStatus !== networkStatus && Object(_networkStatus_js__WEBPACK_IMPORTED_MODULE_8__["isNetworkRequestInFlight"])(networkStatus);

    switch (fetchPolicy) {
      default:
      case "cache-first":
        {
          var diff = readCache();

          if (diff.complete) {
            return [resultsFromCache(diff, queryInfo.markReady())];
          }

          if (returnPartialData || shouldNotify) {
            return [resultsFromCache(diff), resultsFromLink()];
          }

          return [resultsFromLink()];
        }

      case "cache-and-network":
        {
          var diff = readCache();

          if (diff.complete || returnPartialData || shouldNotify) {
            return [resultsFromCache(diff), resultsFromLink()];
          }

          return [resultsFromLink()];
        }

      case "cache-only":
        return [resultsFromCache(readCache(), queryInfo.markReady())];

      case "network-only":
        if (shouldNotify) {
          return [resultsFromCache(readCache()), resultsFromLink()];
        }

        return [resultsFromLink()];

      case "no-cache":
        if (shouldNotify) {
          return [resultsFromCache(queryInfo.getDiff()), resultsFromLink()];
        }

        return [resultsFromLink()];

      case "standby":
        return [];
    }
  };

  QueryManager.prototype.getQuery = function (queryId) {
    if (queryId && !this.queries.has(queryId)) {
      this.queries.set(queryId, new _QueryInfo_js__WEBPACK_IMPORTED_MODULE_10__["QueryInfo"](this, queryId));
    }

    return this.queries.get(queryId);
  };

  QueryManager.prototype.prepareContext = function (context) {
    if (context === void 0) {
      context = {};
    }

    var newContext = this.localState.prepareContext(context);
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, newContext), {
      clientAwareness: this.clientAwareness
    });
  };

  return QueryManager;
}();



/***/ }),

/***/ "./node_modules/@apollo/client/core/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/index.js ***!
  \***************************************************/
/*! exports provided: ApolloClient, mergeOptions, ObservableQuery, applyNextFetchPolicy, NetworkStatus, isApolloError, ApolloError, Cache, ApolloCache, InMemoryCache, MissingFieldError, defaultDataIdFromObject, makeVar, empty, from, split, concat, execute, ApolloLink, parseAndCheckHttpResponse, serializeFetchParameter, fallbackHttpConfig, selectHttpOptionsAndBody, checkFetcher, createSignalIfSupported, selectURI, createHttpLink, HttpLink, rewriteURIForGET, fromError, toPromise, fromPromise, throwServerError, Observable, isReference, makeReference, setLogVerbosity, gql, resetCaches, disableFragmentWarnings, enableExperimentalFragmentVariables, disableExperimentalFragmentVariables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _ApolloClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApolloClient.js */ "./node_modules/@apollo/client/core/ApolloClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return _ApolloClient_js__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _ApolloClient_js__WEBPACK_IMPORTED_MODULE_1__["mergeOptions"]; });

/* harmony import */ var _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ObservableQuery.js */ "./node_modules/@apollo/client/core/ObservableQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_2__["ObservableQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyNextFetchPolicy", function() { return _ObservableQuery_js__WEBPACK_IMPORTED_MODULE_2__["applyNextFetchPolicy"]; });

/* harmony import */ var _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./networkStatus.js */ "./node_modules/@apollo/client/core/networkStatus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return _networkStatus_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types.js */ "./node_modules/@apollo/client/core/types.js");
/* empty/unused harmony star reexport *//* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return _errors_index_js__WEBPACK_IMPORTED_MODULE_5__["isApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return _errors_index_js__WEBPACK_IMPORTED_MODULE_5__["ApolloError"]; });

/* harmony import */ var _cache_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cache/index.js */ "./node_modules/@apollo/client/cache/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_6__["Cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_6__["ApolloCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_6__["InMemoryCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_6__["MissingFieldError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_6__["defaultDataIdFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _cache_index_js__WEBPACK_IMPORTED_MODULE_6__["makeVar"]; });

/* harmony import */ var _cache_inmemory_types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cache/inmemory/types.js */ "./node_modules/@apollo/client/cache/inmemory/types.js");
/* empty/unused harmony star reexport *//* harmony import */ var _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../link/core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__["from"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _link_core_index_js__WEBPACK_IMPORTED_MODULE_8__["ApolloLink"]; });

/* harmony import */ var _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../link/http/index.js */ "./node_modules/@apollo/client/link/http/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["parseAndCheckHttpResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["serializeFetchParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["selectHttpOptionsAndBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["checkFetcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["createSignalIfSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["selectURI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["createHttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["HttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _link_http_index_js__WEBPACK_IMPORTED_MODULE_9__["rewriteURIForGET"]; });

/* harmony import */ var _link_utils_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../link/utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _link_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["fromError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _link_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _link_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _link_utils_index_js__WEBPACK_IMPORTED_MODULE_10__["throwServerError"]; });

/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _utilities_index_js__WEBPACK_IMPORTED_MODULE_11__["makeReference"]; });

/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogVerbosity", function() { return ts_invariant__WEBPACK_IMPORTED_MODULE_12__["setVerbosity"]; });

/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_13__["gql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCaches", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_13__["resetCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableFragmentWarnings", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_13__["disableFragmentWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableExperimentalFragmentVariables", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_13__["enableExperimentalFragmentVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableExperimentalFragmentVariables", function() { return graphql_tag__WEBPACK_IMPORTED_MODULE_13__["disableExperimentalFragmentVariables"]; });















Object(ts_invariant__WEBPACK_IMPORTED_MODULE_12__["setVerbosity"])(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["DEV"] ? "log" : "silent");


/***/ }),

/***/ "./node_modules/@apollo/client/core/networkStatus.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/core/networkStatus.js ***!
  \***********************************************************/
/*! exports provided: NetworkStatus, isNetworkRequestInFlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return NetworkStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNetworkRequestInFlight", function() { return isNetworkRequestInFlight; });
var NetworkStatus;

(function (NetworkStatus) {
  NetworkStatus[NetworkStatus["loading"] = 1] = "loading";
  NetworkStatus[NetworkStatus["setVariables"] = 2] = "setVariables";
  NetworkStatus[NetworkStatus["fetchMore"] = 3] = "fetchMore";
  NetworkStatus[NetworkStatus["refetch"] = 4] = "refetch";
  NetworkStatus[NetworkStatus["poll"] = 6] = "poll";
  NetworkStatus[NetworkStatus["ready"] = 7] = "ready";
  NetworkStatus[NetworkStatus["error"] = 8] = "error";
})(NetworkStatus || (NetworkStatus = {}));

function isNetworkRequestInFlight(networkStatus) {
  return networkStatus ? networkStatus < 7 : false;
}

/***/ }),

/***/ "./node_modules/@apollo/client/core/types.js":
/*!***************************************************!*\
  !*** ./node_modules/@apollo/client/core/types.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@apollo/client/errors/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@apollo/client/errors/index.js ***!
  \*****************************************************/
/*! exports provided: isApolloError, ApolloError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return isApolloError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return ApolloError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");



function isApolloError(err) {
  return err.hasOwnProperty('graphQLErrors');
}

var generateErrorMessage = function (err) {
  var message = '';

  if (Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["isNonEmptyArray"])(err.graphQLErrors) || Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["isNonEmptyArray"])(err.clientErrors)) {
    var errors = (err.graphQLErrors || []).concat(err.clientErrors || []);
    errors.forEach(function (error) {
      var errorMessage = error ? error.message : 'Error message not found.';
      message += errorMessage + "\n";
    });
  }

  if (err.networkError) {
    message += err.networkError.message + "\n";
  }

  message = message.replace(/\n$/, '');
  return message;
};

var ApolloError = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ApolloError, _super);

  function ApolloError(_a) {
    var graphQLErrors = _a.graphQLErrors,
        clientErrors = _a.clientErrors,
        networkError = _a.networkError,
        errorMessage = _a.errorMessage,
        extraInfo = _a.extraInfo;

    var _this = _super.call(this, errorMessage) || this;

    _this.graphQLErrors = graphQLErrors || [];
    _this.clientErrors = clientErrors || [];
    _this.networkError = networkError || null;
    _this.message = errorMessage || generateErrorMessage(_this);
    _this.extraInfo = extraInfo;
    _this.__proto__ = ApolloError.prototype;
    return _this;
  }

  return ApolloError;
}(Error);



/***/ }),

/***/ "./node_modules/@apollo/client/index.js":
/*!**********************************************!*\
  !*** ./node_modules/@apollo/client/index.js ***!
  \**********************************************/
/*! exports provided: ApolloClient, mergeOptions, ObservableQuery, applyNextFetchPolicy, NetworkStatus, isApolloError, ApolloError, Cache, ApolloCache, InMemoryCache, MissingFieldError, defaultDataIdFromObject, makeVar, empty, from, split, concat, execute, ApolloLink, parseAndCheckHttpResponse, serializeFetchParameter, fallbackHttpConfig, selectHttpOptionsAndBody, checkFetcher, createSignalIfSupported, selectURI, createHttpLink, HttpLink, rewriteURIForGET, fromError, toPromise, fromPromise, throwServerError, Observable, isReference, makeReference, setLogVerbosity, gql, resetCaches, disableFragmentWarnings, enableExperimentalFragmentVariables, disableExperimentalFragmentVariables, ApolloProvider, ApolloConsumer, getApolloContext, resetApolloContext, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription, useReactiveVar, DocumentType, operationName, parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/index.js */ "./node_modules/@apollo/client/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloClient", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["mergeOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableQuery", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ObservableQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyNextFetchPolicy", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["applyNextFetchPolicy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NetworkStatus", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["NetworkStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isApolloError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["isApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ApolloError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cache", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["Cache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloCache", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ApolloCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InMemoryCache", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MissingFieldError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["MissingFieldError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultDataIdFromObject", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["defaultDataIdFromObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeVar", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["makeVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["from"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["split"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["execute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["parseAndCheckHttpResponse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["selectHttpOptionsAndBody"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["checkFetcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["createSignalIfSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["selectURI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["createHttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["HttpLink"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["rewriteURIForGET"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["fromError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["toPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["fromPromise"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["throwServerError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["makeReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setLogVerbosity", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["setLogVerbosity"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gql", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["gql"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetCaches", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["resetCaches"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableFragmentWarnings", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["disableFragmentWarnings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "enableExperimentalFragmentVariables", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["enableExperimentalFragmentVariables"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disableExperimentalFragmentVariables", function() { return _core_index_js__WEBPACK_IMPORTED_MODULE_0__["disableExperimentalFragmentVariables"]; });

/* harmony import */ var _react_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react/index.js */ "./node_modules/@apollo/client/react/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["resetApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReactiveVar", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["useReactiveVar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["DocumentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["operationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _react_index_js__WEBPACK_IMPORTED_MODULE_1__["parser"]; });




/***/ }),

/***/ "./node_modules/@apollo/client/link/batch-http/batchHttpLink.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/batch-http/batchHttpLink.js ***!
  \**********************************************************************/
/*! exports provided: BatchHttpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchHttpLink", function() { return BatchHttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");
/* harmony import */ var _http_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http/index.js */ "./node_modules/@apollo/client/link/http/index.js");
/* harmony import */ var _batch_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../batch/index.js */ "./node_modules/@apollo/client/link/batch/index.js");







var BatchHttpLink = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BatchHttpLink, _super);

  function BatchHttpLink(fetchParams) {
    var _this = _super.call(this) || this;

    var _a = fetchParams || {},
        _b = _a.uri,
        uri = _b === void 0 ? '/graphql' : _b,
        fetcher = _a.fetch,
        includeExtensions = _a.includeExtensions,
        batchInterval = _a.batchInterval,
        batchDebounce = _a.batchDebounce,
        batchMax = _a.batchMax,
        batchKey = _a.batchKey,
        requestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["uri", "fetch", "includeExtensions", "batchInterval", "batchDebounce", "batchMax", "batchKey"]);

    Object(_http_index_js__WEBPACK_IMPORTED_MODULE_4__["checkFetcher"])(fetcher);

    if (!fetcher) {
      fetcher = fetch;
    }

    var linkConfig = {
      http: {
        includeExtensions: includeExtensions
      },
      options: requestOptions.fetchOptions,
      credentials: requestOptions.credentials,
      headers: requestOptions.headers
    };
    _this.batchDebounce = batchDebounce;
    _this.batchInterval = batchInterval || 10;
    _this.batchMax = batchMax || 10;

    var batchHandler = function (operations) {
      var chosenURI = Object(_http_index_js__WEBPACK_IMPORTED_MODULE_4__["selectURI"])(operations[0], uri);
      var context = operations[0].getContext();
      var clientAwarenessHeaders = {};

      if (context.clientAwareness) {
        var _a = context.clientAwareness,
            name_1 = _a.name,
            version = _a.version;

        if (name_1) {
          clientAwarenessHeaders['apollographql-client-name'] = name_1;
        }

        if (version) {
          clientAwarenessHeaders['apollographql-client-version'] = version;
        }
      }

      var contextConfig = {
        http: context.http,
        options: context.fetchOptions,
        credentials: context.credentials,
        headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, clientAwarenessHeaders), context.headers)
      };
      var optsAndBody = operations.map(function (operation) {
        return Object(_http_index_js__WEBPACK_IMPORTED_MODULE_4__["selectHttpOptionsAndBody"])(operation, _http_index_js__WEBPACK_IMPORTED_MODULE_4__["fallbackHttpConfig"], linkConfig, contextConfig);
      });
      var loadedBody = optsAndBody.map(function (_a) {
        var body = _a.body;
        return body;
      });
      var options = optsAndBody[0].options;

      if (options.method === 'GET') {
        return Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_3__["fromError"])(new Error('apollo-link-batch-http does not support GET requests'));
      }

      try {
        options.body = Object(_http_index_js__WEBPACK_IMPORTED_MODULE_4__["serializeFetchParameter"])(loadedBody, 'Payload');
      } catch (parseError) {
        return Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_3__["fromError"])(parseError);
      }

      var controller;

      if (!options.signal) {
        var _b = Object(_http_index_js__WEBPACK_IMPORTED_MODULE_4__["createSignalIfSupported"])(),
            _controller = _b.controller,
            signal = _b.signal;

        controller = _controller;
        if (controller) options.signal = signal;
      }

      return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
        fetcher(chosenURI, options).then(function (response) {
          operations.forEach(function (operation) {
            return operation.setContext({
              response: response
            });
          });
          return response;
        }).then(Object(_http_index_js__WEBPACK_IMPORTED_MODULE_4__["parseAndCheckHttpResponse"])(operations)).then(function (result) {
          observer.next(result);
          observer.complete();
          return result;
        }).catch(function (err) {
          if (err.name === 'AbortError') return;

          if (err.result && err.result.errors && err.result.data) {
            observer.next(err.result);
          }

          observer.error(err);
        });
        return function () {
          if (controller) controller.abort();
        };
      });
    };

    batchKey = batchKey || function (operation) {
      var context = operation.getContext();
      var contextConfig = {
        http: context.http,
        options: context.fetchOptions,
        credentials: context.credentials,
        headers: context.headers
      };
      return Object(_http_index_js__WEBPACK_IMPORTED_MODULE_4__["selectURI"])(operation, uri) + JSON.stringify(contextConfig);
    };

    _this.batcher = new _batch_index_js__WEBPACK_IMPORTED_MODULE_5__["BatchLink"]({
      batchDebounce: _this.batchDebounce,
      batchInterval: _this.batchInterval,
      batchMax: _this.batchMax,
      batchKey: batchKey,
      batchHandler: batchHandler
    });
    return _this;
  }

  BatchHttpLink.prototype.request = function (operation) {
    return this.batcher.request(operation);
  };

  return BatchHttpLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]);



/***/ }),

/***/ "./node_modules/@apollo/client/link/batch-http/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@apollo/client/link/batch-http/index.js ***!
  \**************************************************************/
/*! exports provided: BatchHttpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _batchHttpLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batchHttpLink.js */ "./node_modules/@apollo/client/link/batch-http/batchHttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchHttpLink", function() { return _batchHttpLink_js__WEBPACK_IMPORTED_MODULE_0__["BatchHttpLink"]; });



/***/ }),

/***/ "./node_modules/@apollo/client/link/batch/batchLink.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/batch/batchLink.js ***!
  \*************************************************************/
/*! exports provided: OperationBatcher, BatchLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchLink", function() { return BatchLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _batching_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./batching.js */ "./node_modules/@apollo/client/link/batch/batching.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationBatcher", function() { return _batching_js__WEBPACK_IMPORTED_MODULE_2__["OperationBatcher"]; });






var BatchLink = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(BatchLink, _super);

  function BatchLink(fetchParams) {
    var _this = _super.call(this) || this;

    var _a = fetchParams || {},
        batchDebounce = _a.batchDebounce,
        _b = _a.batchInterval,
        batchInterval = _b === void 0 ? 10 : _b,
        _c = _a.batchMax,
        batchMax = _c === void 0 ? 0 : _c,
        _d = _a.batchHandler,
        batchHandler = _d === void 0 ? function () {
      return null;
    } : _d,
        _e = _a.batchKey,
        batchKey = _e === void 0 ? function () {
      return '';
    } : _e;

    _this.batcher = new _batching_js__WEBPACK_IMPORTED_MODULE_2__["OperationBatcher"]({
      batchDebounce: batchDebounce,
      batchInterval: batchInterval,
      batchMax: batchMax,
      batchHandler: batchHandler,
      batchKey: batchKey
    });

    if (fetchParams.batchHandler.length <= 1) {
      _this.request = function (operation) {
        return _this.batcher.enqueueRequest({
          operation: operation
        });
      };
    }

    return _this;
  }

  BatchLink.prototype.request = function (operation, forward) {
    return this.batcher.enqueueRequest({
      operation: operation,
      forward: forward
    });
  };

  return BatchLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]);



/***/ }),

/***/ "./node_modules/@apollo/client/link/batch/batching.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/link/batch/batching.js ***!
  \************************************************************/
/*! exports provided: OperationBatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationBatcher", function() { return OperationBatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");



var OperationBatcher = function () {
  function OperationBatcher(_a) {
    var batchDebounce = _a.batchDebounce,
        batchInterval = _a.batchInterval,
        batchMax = _a.batchMax,
        batchHandler = _a.batchHandler,
        batchKey = _a.batchKey;
    this.queuedRequests = new Map();
    this.batchDebounce = batchDebounce;
    this.batchInterval = batchInterval;
    this.batchMax = batchMax || 0;
    this.batchHandler = batchHandler;

    this.batchKey = batchKey || function () {
      return '';
    };
  }

  OperationBatcher.prototype.enqueueRequest = function (request) {
    var _this = this;

    var requestCopy = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, request);

    var queued = false;
    var key = this.batchKey(request.operation);

    if (!requestCopy.observable) {
      requestCopy.observable = new _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
        if (!_this.queuedRequests.has(key)) {
          _this.queuedRequests.set(key, []);
        }

        if (!queued) {
          _this.queuedRequests.get(key).push(requestCopy);

          queued = true;
        }

        requestCopy.next = requestCopy.next || [];
        if (observer.next) requestCopy.next.push(observer.next.bind(observer));
        requestCopy.error = requestCopy.error || [];
        if (observer.error) requestCopy.error.push(observer.error.bind(observer));
        requestCopy.complete = requestCopy.complete || [];
        if (observer.complete) requestCopy.complete.push(observer.complete.bind(observer));

        if (_this.queuedRequests.get(key).length === 1) {
          _this.scheduleQueueConsumption(key);
        } else if (_this.batchDebounce) {
          clearTimeout(_this.scheduledBatchTimer);

          _this.scheduleQueueConsumption(key);
        }

        if (_this.queuedRequests.get(key).length === _this.batchMax) {
          _this.consumeQueue(key);
        }
      });
    }

    return requestCopy.observable;
  };

  OperationBatcher.prototype.consumeQueue = function (key) {
    var requestKey = key || '';
    var queuedRequests = this.queuedRequests.get(requestKey);

    if (!queuedRequests) {
      return;
    }

    this.queuedRequests.delete(requestKey);
    var requests = queuedRequests.map(function (queuedRequest) {
      return queuedRequest.operation;
    });
    var forwards = queuedRequests.map(function (queuedRequest) {
      return queuedRequest.forward;
    });
    var observables = [];
    var nexts = [];
    var errors = [];
    var completes = [];
    queuedRequests.forEach(function (batchableRequest, index) {
      observables.push(batchableRequest.observable);
      nexts.push(batchableRequest.next);
      errors.push(batchableRequest.error);
      completes.push(batchableRequest.complete);
    });
    var batchedObservable = this.batchHandler(requests, forwards) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["Observable"].of();

    var onError = function (error) {
      errors.forEach(function (rejecters) {
        if (rejecters) {
          rejecters.forEach(function (e) {
            return e(error);
          });
        }
      });
    };

    batchedObservable.subscribe({
      next: function (results) {
        if (!Array.isArray(results)) {
          results = [results];
        }

        if (nexts.length !== results.length) {
          var error = new Error("server returned results with length " + results.length + ", expected length of " + nexts.length);
          error.result = results;
          return onError(error);
        }

        results.forEach(function (result, index) {
          if (nexts[index]) {
            nexts[index].forEach(function (next) {
              return next(result);
            });
          }
        });
      },
      error: onError,
      complete: function () {
        completes.forEach(function (complete) {
          if (complete) {
            complete.forEach(function (c) {
              return c();
            });
          }
        });
      }
    });
    return observables;
  };

  OperationBatcher.prototype.scheduleQueueConsumption = function (key) {
    var _this = this;

    var requestKey = key || '';
    this.scheduledBatchTimer = setTimeout(function () {
      if (_this.queuedRequests.get(requestKey) && _this.queuedRequests.get(requestKey).length) {
        _this.consumeQueue(requestKey);
      }
    }, this.batchInterval);
  };

  return OperationBatcher;
}();



/***/ }),

/***/ "./node_modules/@apollo/client/link/batch/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/link/batch/index.js ***!
  \*********************************************************/
/*! exports provided: OperationBatcher, BatchLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _batchLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./batchLink.js */ "./node_modules/@apollo/client/link/batch/batchLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationBatcher", function() { return _batchLink_js__WEBPACK_IMPORTED_MODULE_0__["OperationBatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BatchLink", function() { return _batchLink_js__WEBPACK_IMPORTED_MODULE_0__["BatchLink"]; });



/***/ }),

/***/ "./node_modules/@apollo/client/link/core/ApolloLink.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/ApolloLink.js ***!
  \*************************************************************/
/*! exports provided: ApolloLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");





function passthrough(op, forward) {
  return forward ? forward(op) : _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
}

function toLink(handler) {
  return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}

function isTerminating(link) {
  return link.request.length <= 1;
}

var LinkError = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LinkError, _super);

  function LinkError(message, link) {
    var _this = _super.call(this, message) || this;

    _this.link = link;
    return _this;
  }

  return LinkError;
}(Error);

var ApolloLink = function () {
  function ApolloLink(request) {
    if (request) this.request = request;
  }

  ApolloLink.empty = function () {
    return new ApolloLink(function () {
      return _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
    });
  };

  ApolloLink.from = function (links) {
    if (links.length === 0) return ApolloLink.empty();
    return links.map(toLink).reduce(function (x, y) {
      return x.concat(y);
    });
  };

  ApolloLink.split = function (test, left, right) {
    var leftLink = toLink(left);
    var rightLink = toLink(right || new ApolloLink(passthrough));

    if (isTerminating(leftLink) && isTerminating(rightLink)) {
      return new ApolloLink(function (operation) {
        return test(operation) ? leftLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of() : rightLink.request(operation) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
      });
    } else {
      return new ApolloLink(function (operation, forward) {
        return test(operation) ? leftLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of() : rightLink.request(operation, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
      });
    }
  };

  ApolloLink.execute = function (link, operation) {
    return link.request(Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_3__["createOperation"])(operation.context, Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_3__["transformOperation"])(Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_3__["validateOperation"])(operation)))) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
  };

  ApolloLink.concat = function (first, second) {
    var firstLink = toLink(first);

    if (isTerminating(firstLink)) {
      __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
      return firstLink;
    }

    var nextLink = toLink(second);

    if (isTerminating(nextLink)) {
      return new ApolloLink(function (operation) {
        return firstLink.request(operation, function (op) {
          return nextLink.request(op) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
        }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
      });
    } else {
      return new ApolloLink(function (operation, forward) {
        return firstLink.request(operation, function (op) {
          return nextLink.request(op, forward) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
        }) || _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"].of();
      });
    }
  };

  ApolloLink.prototype.split = function (test, left, right) {
    return this.concat(ApolloLink.split(test, left, right || new ApolloLink(passthrough)));
  };

  ApolloLink.prototype.concat = function (next) {
    return ApolloLink.concat(this, next);
  };

  ApolloLink.prototype.request = function (operation, forward) {
    throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented') : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](21);
  };

  ApolloLink.prototype.onError = function (error, observer) {
    if (observer && observer.error) {
      observer.error(error);
      return false;
    }

    throw error;
  };

  ApolloLink.prototype.setOnError = function (fn) {
    this.onError = fn;
    return this;
  };

  return ApolloLink;
}();



/***/ }),

/***/ "./node_modules/@apollo/client/link/core/concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/concat.js ***!
  \*********************************************************/
/*! exports provided: concat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var concat = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].concat;

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/empty.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/empty.js ***!
  \********************************************************/
/*! exports provided: empty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var empty = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].empty;

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/execute.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/execute.js ***!
  \**********************************************************/
/*! exports provided: execute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var execute = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].execute;

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/from.js ***!
  \*******************************************************/
/*! exports provided: from */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var from = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].from;

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/index.js ***!
  \********************************************************/
/*! exports provided: empty, from, split, concat, execute, ApolloLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _empty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empty.js */ "./node_modules/@apollo/client/link/core/empty.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _empty_js__WEBPACK_IMPORTED_MODULE_1__["empty"]; });

/* harmony import */ var _from_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./from.js */ "./node_modules/@apollo/client/link/core/from.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "from", function() { return _from_js__WEBPACK_IMPORTED_MODULE_2__["from"]; });

/* harmony import */ var _split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./split.js */ "./node_modules/@apollo/client/link/core/split.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "split", function() { return _split_js__WEBPACK_IMPORTED_MODULE_3__["split"]; });

/* harmony import */ var _concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./concat.js */ "./node_modules/@apollo/client/link/core/concat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _concat_js__WEBPACK_IMPORTED_MODULE_4__["concat"]; });

/* harmony import */ var _execute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./execute.js */ "./node_modules/@apollo/client/link/core/execute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return _execute_js__WEBPACK_IMPORTED_MODULE_5__["execute"]; });

/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return _ApolloLink_js__WEBPACK_IMPORTED_MODULE_6__["ApolloLink"]; });

/* harmony import */ var _types_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types.js */ "./node_modules/@apollo/client/link/core/types.js");
/* empty/unused harmony star reexport */








/***/ }),

/***/ "./node_modules/@apollo/client/link/core/split.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/split.js ***!
  \********************************************************/
/*! exports provided: split */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony import */ var _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApolloLink.js */ "./node_modules/@apollo/client/link/core/ApolloLink.js");

var split = _ApolloLink_js__WEBPACK_IMPORTED_MODULE_0__["ApolloLink"].split;

/***/ }),

/***/ "./node_modules/@apollo/client/link/core/types.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/core/types.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
;


/***/ }),

/***/ "./node_modules/@apollo/client/link/error/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/link/error/index.js ***!
  \*********************************************************/
/*! exports provided: onError, ErrorLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onError", function() { return onError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLink", function() { return ErrorLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");



function onError(errorHandler) {
  return new _core_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"](function (operation, forward) {
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
      var sub;
      var retriedSub;
      var retriedResult;

      try {
        sub = forward(operation).subscribe({
          next: function (result) {
            if (result.errors) {
              retriedResult = errorHandler({
                graphQLErrors: result.errors,
                response: result,
                operation: operation,
                forward: forward
              });

              if (retriedResult) {
                retriedSub = retriedResult.subscribe({
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer)
                });
                return;
              }
            }

            observer.next(result);
          },
          error: function (networkError) {
            retriedResult = errorHandler({
              operation: operation,
              networkError: networkError,
              graphQLErrors: networkError && networkError.result && networkError.result.errors,
              forward: forward
            });

            if (retriedResult) {
              retriedSub = retriedResult.subscribe({
                next: observer.next.bind(observer),
                error: observer.error.bind(observer),
                complete: observer.complete.bind(observer)
              });
              return;
            }

            observer.error(networkError);
          },
          complete: function () {
            if (!retriedResult) {
              observer.complete.bind(observer)();
            }
          }
        });
      } catch (e) {
        errorHandler({
          networkError: e,
          operation: operation,
          forward: forward
        });
        observer.error(e);
      }

      return function () {
        if (sub) sub.unsubscribe();
        if (retriedSub) sub.unsubscribe();
      };
    });
  });
}

var ErrorLink = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ErrorLink, _super);

  function ErrorLink(errorHandler) {
    var _this = _super.call(this) || this;

    _this.link = onError(errorHandler);
    return _this;
  }

  ErrorLink.prototype.request = function (operation, forward) {
    return this.link.request(operation, forward);
  };

  return ErrorLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]);



/***/ }),

/***/ "./node_modules/@apollo/client/link/http/HttpLink.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/HttpLink.js ***!
  \***********************************************************/
/*! exports provided: HttpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return HttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");




var HttpLink = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(HttpLink, _super);

  function HttpLink(options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this, Object(_createHttpLink_js__WEBPACK_IMPORTED_MODULE_2__["createHttpLink"])(options).request) || this;

    _this.options = options;
    return _this;
  }

  return HttpLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]);



/***/ }),

/***/ "./node_modules/@apollo/client/link/http/checkFetcher.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/checkFetcher.js ***!
  \***************************************************************/
/*! exports provided: checkFetcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return checkFetcher; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var checkFetcher = function (fetcher) {
  if (!fetcher && typeof fetch === 'undefined') {
    throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"](22);
  }
};

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createHttpLink.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createHttpLink.js ***!
  \*****************************************************************/
/*! exports provided: createHttpLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return createHttpLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");














var backupFetch = Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["maybe"])(function () {
  return fetch;
});
var createHttpLink = function (linkOptions) {
  if (linkOptions === void 0) {
    linkOptions = {};
  }

  var _a = linkOptions.uri,
      uri = _a === void 0 ? '/graphql' : _a,
      preferredFetch = linkOptions.fetch,
      includeExtensions = linkOptions.includeExtensions,
      useGETForQueries = linkOptions.useGETForQueries,
      _b = linkOptions.includeUnusedVariables,
      includeUnusedVariables = _b === void 0 ? false : _b,
      requestOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(linkOptions, ["uri", "fetch", "includeExtensions", "useGETForQueries", "includeUnusedVariables"]);

  if (__DEV__) {
    Object(_checkFetcher_js__WEBPACK_IMPORTED_MODULE_8__["checkFetcher"])(preferredFetch || backupFetch);
  }

  var linkConfig = {
    http: {
      includeExtensions: includeExtensions
    },
    options: requestOptions.fetchOptions,
    credentials: requestOptions.credentials,
    headers: requestOptions.headers
  };
  return new _core_index_js__WEBPACK_IMPORTED_MODULE_3__["ApolloLink"](function (operation) {
    var chosenURI = Object(_selectURI_js__WEBPACK_IMPORTED_MODULE_6__["selectURI"])(operation, uri);
    var context = operation.getContext();
    var clientAwarenessHeaders = {};

    if (context.clientAwareness) {
      var _a = context.clientAwareness,
          name_1 = _a.name,
          version = _a.version;

      if (name_1) {
        clientAwarenessHeaders['apollographql-client-name'] = name_1;
      }

      if (version) {
        clientAwarenessHeaders['apollographql-client-version'] = version;
      }
    }

    var contextHeaders = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, clientAwarenessHeaders), context.headers);

    var contextConfig = {
      http: context.http,
      options: context.fetchOptions,
      credentials: context.credentials,
      headers: contextHeaders
    };

    var _b = Object(_selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_9__["selectHttpOptionsAndBody"])(operation, _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_9__["fallbackHttpConfig"], linkConfig, contextConfig),
        options = _b.options,
        body = _b.body;

    if (body.variables && !includeUnusedVariables) {
      var unusedNames_1 = new Set(Object.keys(body.variables));
      Object(graphql__WEBPACK_IMPORTED_MODULE_2__["visit"])(operation.query, {
        Variable: function (node, _key, parent) {
          if (parent && parent.kind !== 'VariableDefinition') {
            unusedNames_1.delete(node.name.value);
          }
        }
      });

      if (unusedNames_1.size) {
        body.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, body.variables);
        unusedNames_1.forEach(function (name) {
          delete body.variables[name];
        });
      }
    }

    var controller;

    if (!options.signal) {
      var _c = Object(_createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_10__["createSignalIfSupported"])(),
          _controller = _c.controller,
          signal = _c.signal;

      controller = _controller;
      if (controller) options.signal = signal;
    }

    var definitionIsMutation = function (d) {
      return d.kind === 'OperationDefinition' && d.operation === 'mutation';
    };

    if (useGETForQueries && !operation.query.definitions.some(definitionIsMutation)) {
      options.method = 'GET';
    }

    if (options.method === 'GET') {
      var _d = Object(_rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_11__["rewriteURIForGET"])(chosenURI, body),
          newURI = _d.newURI,
          parseError = _d.parseError;

      if (parseError) {
        return Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["fromError"])(parseError);
      }

      chosenURI = newURI;
    } else {
      try {
        options.body = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_5__["serializeFetchParameter"])(body, 'Payload');
      } catch (parseError) {
        return Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_12__["fromError"])(parseError);
      }
    }

    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
      var currentFetch = preferredFetch || Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_4__["maybe"])(function () {
        return fetch;
      }) || backupFetch;
      currentFetch(chosenURI, options).then(function (response) {
        operation.setContext({
          response: response
        });
        return response;
      }).then(Object(_parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_7__["parseAndCheckHttpResponse"])(operation)).then(function (result) {
        observer.next(result);
        observer.complete();
        return result;
      }).catch(function (err) {
        if (err.name === 'AbortError') return;

        if (err.result && err.result.errors && err.result.data) {
          observer.next(err.result);
        }

        observer.error(err);
      });
      return function () {
        if (controller) controller.abort();
      };
    });
  });
};

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/createSignalIfSupported.js ***!
  \**************************************************************************/
/*! exports provided: createSignalIfSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return createSignalIfSupported; });
var createSignalIfSupported = function () {
  if (typeof AbortController === 'undefined') return {
    controller: false,
    signal: false
  };
  var controller = new AbortController();
  var signal = controller.signal;
  return {
    controller: controller,
    signal: signal
  };
};

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/index.js ***!
  \********************************************************/
/*! exports provided: parseAndCheckHttpResponse, serializeFetchParameter, fallbackHttpConfig, selectHttpOptionsAndBody, checkFetcher, createSignalIfSupported, selectURI, createHttpLink, HttpLink, rewriteURIForGET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseAndCheckHttpResponse.js */ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return _parseAndCheckHttpResponse_js__WEBPACK_IMPORTED_MODULE_1__["parseAndCheckHttpResponse"]; });

/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_2__["serializeFetchParameter"]; });

/* harmony import */ var _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectHttpOptionsAndBody.js */ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_3__["fallbackHttpConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return _selectHttpOptionsAndBody_js__WEBPACK_IMPORTED_MODULE_3__["selectHttpOptionsAndBody"]; });

/* harmony import */ var _checkFetcher_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./checkFetcher.js */ "./node_modules/@apollo/client/link/http/checkFetcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkFetcher", function() { return _checkFetcher_js__WEBPACK_IMPORTED_MODULE_4__["checkFetcher"]; });

/* harmony import */ var _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createSignalIfSupported.js */ "./node_modules/@apollo/client/link/http/createSignalIfSupported.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSignalIfSupported", function() { return _createSignalIfSupported_js__WEBPACK_IMPORTED_MODULE_5__["createSignalIfSupported"]; });

/* harmony import */ var _selectURI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectURI.js */ "./node_modules/@apollo/client/link/http/selectURI.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return _selectURI_js__WEBPACK_IMPORTED_MODULE_6__["selectURI"]; });

/* harmony import */ var _createHttpLink_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createHttpLink.js */ "./node_modules/@apollo/client/link/http/createHttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createHttpLink", function() { return _createHttpLink_js__WEBPACK_IMPORTED_MODULE_7__["createHttpLink"]; });

/* harmony import */ var _HttpLink_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HttpLink.js */ "./node_modules/@apollo/client/link/http/HttpLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLink", function() { return _HttpLink_js__WEBPACK_IMPORTED_MODULE_8__["HttpLink"]; });

/* harmony import */ var _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rewriteURIForGET.js */ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return _rewriteURIForGET_js__WEBPACK_IMPORTED_MODULE_9__["rewriteURIForGET"]; });












/***/ }),

/***/ "./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/parseAndCheckHttpResponse.js ***!
  \****************************************************************************/
/*! exports provided: parseAndCheckHttpResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseAndCheckHttpResponse", function() { return parseAndCheckHttpResponse; });
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.js */ "./node_modules/@apollo/client/link/utils/index.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
function parseAndCheckHttpResponse(operations) {
  return function (response) {
    return response.text().then(function (bodyText) {
      try {
        return JSON.parse(bodyText);
      } catch (err) {
        var parseError = err;
        parseError.name = 'ServerParseError';
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
      }
    }).then(function (result) {
      if (response.status >= 300) {
        Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["throwServerError"])(response, result, "Response not successful: Received status code " + response.status);
      }

      if (!Array.isArray(result) && !hasOwnProperty.call(result, 'data') && !hasOwnProperty.call(result, 'errors')) {
        Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_0__["throwServerError"])(response, result, "Server response was missing for query '" + (Array.isArray(operations) ? operations.map(function (op) {
          return op.operationName;
        }) : operations.operationName) + "'.");
      }

      return result;
    });
  };
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/rewriteURIForGET.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/rewriteURIForGET.js ***!
  \*******************************************************************/
/*! exports provided: rewriteURIForGET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rewriteURIForGET", function() { return rewriteURIForGET; });
/* harmony import */ var _serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./serializeFetchParameter.js */ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js");

function rewriteURIForGET(chosenURI, body) {
  var queryParams = [];

  var addQueryParam = function (key, value) {
    queryParams.push(key + "=" + encodeURIComponent(value));
  };

  if ('query' in body) {
    addQueryParam('query', body.query);
  }

  if (body.operationName) {
    addQueryParam('operationName', body.operationName);
  }

  if (body.variables) {
    var serializedVariables = void 0;

    try {
      serializedVariables = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"])(body.variables, 'Variables map');
    } catch (parseError) {
      return {
        parseError: parseError
      };
    }

    addQueryParam('variables', serializedVariables);
  }

  if (body.extensions) {
    var serializedExtensions = void 0;

    try {
      serializedExtensions = Object(_serializeFetchParameter_js__WEBPACK_IMPORTED_MODULE_0__["serializeFetchParameter"])(body.extensions, 'Extensions map');
    } catch (parseError) {
      return {
        parseError: parseError
      };
    }

    addQueryParam('extensions', serializedExtensions);
  }

  var fragment = '',
      preFragment = chosenURI;
  var fragmentStart = chosenURI.indexOf('#');

  if (fragmentStart !== -1) {
    fragment = chosenURI.substr(fragmentStart);
    preFragment = chosenURI.substr(0, fragmentStart);
  }

  var queryParamsPrefix = preFragment.indexOf('?') === -1 ? '?' : '&';
  var newURI = preFragment + queryParamsPrefix + queryParams.join('&') + fragment;
  return {
    newURI: newURI
  };
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectHttpOptionsAndBody.js ***!
  \***************************************************************************/
/*! exports provided: fallbackHttpConfig, selectHttpOptionsAndBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallbackHttpConfig", function() { return fallbackHttpConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectHttpOptionsAndBody", function() { return selectHttpOptionsAndBody; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");


var defaultHttpOptions = {
  includeQuery: true,
  includeExtensions: false
};
var defaultHeaders = {
  accept: '*/*',
  'content-type': 'application/json'
};
var defaultOptions = {
  method: 'POST'
};
var fallbackHttpConfig = {
  http: defaultHttpOptions,
  headers: defaultHeaders,
  options: defaultOptions
};
var selectHttpOptionsAndBody = function (operation, fallbackConfig) {
  var configs = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    configs[_i - 2] = arguments[_i];
  }

  var options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, fallbackConfig.options), {
    headers: fallbackConfig.headers,
    credentials: fallbackConfig.credentials
  });

  var http = fallbackConfig.http || {};
  configs.forEach(function (config) {
    options = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), config.options), {
      headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.headers), headersToLowerCase(config.headers))
    });
    if (config.credentials) options.credentials = config.credentials;
    http = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, http), config.http);
  });
  var operationName = operation.operationName,
      extensions = operation.extensions,
      variables = operation.variables,
      query = operation.query;
  var body = {
    operationName: operationName,
    variables: variables
  };
  if (http.includeExtensions) body.extensions = extensions;
  if (http.includeQuery) body.query = Object(graphql__WEBPACK_IMPORTED_MODULE_1__["print"])(query);
  return {
    options: options,
    body: body
  };
};

function headersToLowerCase(headers) {
  if (headers) {
    var normalized_1 = Object.create(null);
    Object.keys(Object(headers)).forEach(function (name) {
      normalized_1[name.toLowerCase()] = headers[name];
    });
    return normalized_1;
  }

  return headers;
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/selectURI.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/selectURI.js ***!
  \************************************************************/
/*! exports provided: selectURI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectURI", function() { return selectURI; });
var selectURI = function (operation, fallbackURI) {
  var context = operation.getContext();
  var contextURI = context.uri;

  if (contextURI) {
    return contextURI;
  } else if (typeof fallbackURI === 'function') {
    return fallbackURI(operation);
  } else {
    return fallbackURI || '/graphql';
  }
};

/***/ }),

/***/ "./node_modules/@apollo/client/link/http/serializeFetchParameter.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/link/http/serializeFetchParameter.js ***!
  \**************************************************************************/
/*! exports provided: serializeFetchParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeFetchParameter", function() { return serializeFetchParameter; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var serializeFetchParameter = function (p, label) {
  var serialized;

  try {
    serialized = JSON.stringify(p);
  } catch (e) {
    var parseError = __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("Network request failed. " + label + " is not serializable: " + e.message) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"](23);
    parseError.parseError = e;
    throw parseError;
  }

  return serialized;
};

/***/ }),

/***/ "./node_modules/@apollo/client/link/retry/delayFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/link/retry/delayFunction.js ***!
  \*****************************************************************/
/*! exports provided: buildDelayFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildDelayFunction", function() { return buildDelayFunction; });
function buildDelayFunction(delayOptions) {
  var _a = delayOptions || {},
      _b = _a.initial,
      initial = _b === void 0 ? 300 : _b,
      _c = _a.jitter,
      jitter = _c === void 0 ? true : _c,
      _d = _a.max,
      max = _d === void 0 ? Infinity : _d;

  var baseDelay = jitter ? initial : initial / 2;
  return function delayFunction(count) {
    var delay = Math.min(max, baseDelay * Math.pow(2, count));

    if (jitter) {
      delay = Math.random() * delay;
    }

    return delay;
  };
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/retry/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/link/retry/index.js ***!
  \*********************************************************/
/*! exports provided: RetryLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _retryLink_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retryLink.js */ "./node_modules/@apollo/client/link/retry/retryLink.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RetryLink", function() { return _retryLink_js__WEBPACK_IMPORTED_MODULE_0__["RetryLink"]; });



/***/ }),

/***/ "./node_modules/@apollo/client/link/retry/retryFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/link/retry/retryFunction.js ***!
  \*****************************************************************/
/*! exports provided: buildRetryFunction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildRetryFunction", function() { return buildRetryFunction; });
function buildRetryFunction(retryOptions) {
  var _a = retryOptions || {},
      retryIf = _a.retryIf,
      _b = _a.max,
      max = _b === void 0 ? 5 : _b;

  return function retryFunction(count, operation, error) {
    if (count >= max) return false;
    return retryIf ? retryIf(error, operation) : !!error;
  };
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/retry/retryLink.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/retry/retryLink.js ***!
  \*************************************************************/
/*! exports provided: RetryLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetryLink", function() { return RetryLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/index.js */ "./node_modules/@apollo/client/link/core/index.js");
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");
/* harmony import */ var _delayFunction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delayFunction.js */ "./node_modules/@apollo/client/link/retry/delayFunction.js");
/* harmony import */ var _retryFunction_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retryFunction.js */ "./node_modules/@apollo/client/link/retry/retryFunction.js");






var RetryableOperation = function () {
  function RetryableOperation(operation, nextLink, delayFor, retryIf) {
    var _this = this;

    this.operation = operation;
    this.nextLink = nextLink;
    this.delayFor = delayFor;
    this.retryIf = retryIf;
    this.retryCount = 0;
    this.values = [];
    this.complete = false;
    this.canceled = false;
    this.observers = [];
    this.currentSubscription = null;

    this.onNext = function (value) {
      _this.values.push(value);

      for (var _i = 0, _a = _this.observers; _i < _a.length; _i++) {
        var observer = _a[_i];
        if (!observer) continue;
        observer.next(value);
      }
    };

    this.onComplete = function () {
      _this.complete = true;

      for (var _i = 0, _a = _this.observers; _i < _a.length; _i++) {
        var observer = _a[_i];
        if (!observer) continue;
        observer.complete();
      }
    };

    this.onError = function (error) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
        var shouldRetry, _i, _a, observer;

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
          switch (_b.label) {
            case 0:
              this.retryCount += 1;
              return [4, this.retryIf(this.retryCount, this.operation, error)];

            case 1:
              shouldRetry = _b.sent();

              if (shouldRetry) {
                this.scheduleRetry(this.delayFor(this.retryCount, this.operation, error));
                return [2];
              }

              this.error = error;

              for (_i = 0, _a = this.observers; _i < _a.length; _i++) {
                observer = _a[_i];
                if (!observer) continue;
                observer.error(error);
              }

              return [2];
          }
        });
      });
    };
  }

  RetryableOperation.prototype.subscribe = function (observer) {
    if (this.canceled) {
      throw new Error("Subscribing to a retryable link that was canceled is not supported");
    }

    this.observers.push(observer);

    for (var _i = 0, _a = this.values; _i < _a.length; _i++) {
      var value = _a[_i];
      observer.next(value);
    }

    if (this.complete) {
      observer.complete();
    } else if (this.error) {
      observer.error(this.error);
    }
  };

  RetryableOperation.prototype.unsubscribe = function (observer) {
    var index = this.observers.indexOf(observer);

    if (index < 0) {
      throw new Error("RetryLink BUG! Attempting to unsubscribe unknown observer!");
    }

    this.observers[index] = null;

    if (this.observers.every(function (o) {
      return o === null;
    })) {
      this.cancel();
    }
  };

  RetryableOperation.prototype.start = function () {
    if (this.currentSubscription) return;
    this.try();
  };

  RetryableOperation.prototype.cancel = function () {
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
    }

    clearTimeout(this.timerId);
    this.timerId = undefined;
    this.currentSubscription = null;
    this.canceled = true;
  };

  RetryableOperation.prototype.try = function () {
    this.currentSubscription = this.nextLink(this.operation).subscribe({
      next: this.onNext,
      error: this.onError,
      complete: this.onComplete
    });
  };

  RetryableOperation.prototype.scheduleRetry = function (delay) {
    var _this = this;

    if (this.timerId) {
      throw new Error("RetryLink BUG! Encountered overlapping retries");
    }

    this.timerId = setTimeout(function () {
      _this.timerId = undefined;

      _this.try();
    }, delay);
  };

  return RetryableOperation;
}();

var RetryLink = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(RetryLink, _super);

  function RetryLink(options) {
    var _this = _super.call(this) || this;

    var _a = options || {},
        attempts = _a.attempts,
        delay = _a.delay;

    _this.delayFor = typeof delay === 'function' ? delay : Object(_delayFunction_js__WEBPACK_IMPORTED_MODULE_3__["buildDelayFunction"])(delay);
    _this.retryIf = typeof attempts === 'function' ? attempts : Object(_retryFunction_js__WEBPACK_IMPORTED_MODULE_4__["buildRetryFunction"])(attempts);
    return _this;
  }

  RetryLink.prototype.request = function (operation, nextLink) {
    var retryable = new RetryableOperation(operation, nextLink, this.delayFor, this.retryIf);
    retryable.start();
    return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
      retryable.subscribe(observer);
      return function () {
        retryable.unsubscribe(observer);
      };
    });
  };

  return RetryLink;
}(_core_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"]);



/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/createOperation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/createOperation.js ***!
  \*******************************************************************/
/*! exports provided: createOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function createOperation(starting, operation) {
  var context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, starting);

  var setContext = function (next) {
    if (typeof next === 'function') {
      context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), next(context));
    } else {
      context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context), next);
    }
  };

  var getContext = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, context);
  };

  Object.defineProperty(operation, 'setContext', {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, 'getContext', {
    enumerable: false,
    value: getContext
  });
  return operation;
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/fromError.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/fromError.js ***!
  \*************************************************************/
/*! exports provided: fromError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");

function fromError(errorValue) {
  return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
    observer.error(errorValue);
  });
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/fromPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/fromPromise.js ***!
  \***************************************************************/
/*! exports provided: fromPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");

function fromPromise(promise) {
  return new _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
    promise.then(function (value) {
      observer.next(value);
      observer.complete();
    }).catch(observer.error.bind(observer));
  });
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/index.js ***!
  \*********************************************************/
/*! exports provided: fromError, toPromise, fromPromise, throwServerError, validateOperation, createOperation, transformOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _fromError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fromError.js */ "./node_modules/@apollo/client/link/utils/fromError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return _fromError_js__WEBPACK_IMPORTED_MODULE_1__["fromError"]; });

/* harmony import */ var _toPromise_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toPromise.js */ "./node_modules/@apollo/client/link/utils/toPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return _toPromise_js__WEBPACK_IMPORTED_MODULE_2__["toPromise"]; });

/* harmony import */ var _fromPromise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fromPromise.js */ "./node_modules/@apollo/client/link/utils/fromPromise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return _fromPromise_js__WEBPACK_IMPORTED_MODULE_3__["fromPromise"]; });

/* harmony import */ var _throwServerError_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./throwServerError.js */ "./node_modules/@apollo/client/link/utils/throwServerError.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return _throwServerError_js__WEBPACK_IMPORTED_MODULE_4__["throwServerError"]; });

/* harmony import */ var _validateOperation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validateOperation.js */ "./node_modules/@apollo/client/link/utils/validateOperation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateOperation", function() { return _validateOperation_js__WEBPACK_IMPORTED_MODULE_5__["validateOperation"]; });

/* harmony import */ var _createOperation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createOperation.js */ "./node_modules/@apollo/client/link/utils/createOperation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return _createOperation_js__WEBPACK_IMPORTED_MODULE_6__["createOperation"]; });

/* harmony import */ var _transformOperation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transformOperation.js */ "./node_modules/@apollo/client/link/utils/transformOperation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transformOperation", function() { return _transformOperation_js__WEBPACK_IMPORTED_MODULE_7__["transformOperation"]; });










/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/throwServerError.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/throwServerError.js ***!
  \********************************************************************/
/*! exports provided: throwServerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwServerError", function() { return throwServerError; });
var throwServerError = function (response, result, message) {
  var error = new Error(message);
  error.name = 'ServerError';
  error.response = response;
  error.statusCode = response.status;
  error.result = result;
  throw error;
};

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/toPromise.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/toPromise.js ***!
  \*************************************************************/
/*! exports provided: toPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

function toPromise(observable) {
  var completed = false;
  return new Promise(function (resolve, reject) {
    observable.subscribe({
      next: function (data) {
        if (completed) {
          __DEV__ && _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
        } else {
          completed = true;
          resolve(data);
        }
      },
      error: reject
    });
  });
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/transformOperation.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/transformOperation.js ***!
  \**********************************************************************/
/*! exports provided: transformOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformOperation", function() { return transformOperation; });
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");

function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };

  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== 'string' ? Object(_utilities_index_js__WEBPACK_IMPORTED_MODULE_0__["getOperationName"])(transformedOperation.query) || undefined : '';
  }

  return transformedOperation;
}

/***/ }),

/***/ "./node_modules/@apollo/client/link/utils/validateOperation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/link/utils/validateOperation.js ***!
  \*********************************************************************/
/*! exports provided: validateOperation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateOperation", function() { return validateOperation; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

function validateOperation(operation) {
  var OPERATION_FIELDS = ['query', 'operationName', 'variables', 'extensions', 'context'];

  for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
    var key = _a[_i];

    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw __DEV__ ? new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("illegal argument: " + key) : new _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"](26);
    }
  }

  return operation;
}

/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/symbol-observable/es/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/symbol-observable/es/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/@apollo/client/node_modules/symbol-observable/es/ponyfill.js");
/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/symbol-observable/es/ponyfill.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/symbol-observable/es/ponyfill.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
  var result;
  var Symbol = root.Symbol;

  if (typeof Symbol === 'function') {
    if (Symbol.observable) {
      result = Symbol.observable;
    } else {
      if (typeof Symbol.for === 'function') {
        // This just needs to be something that won't trample other user's Symbol.for use
        // It also will guide people to the source of their issues, if this is problematic.
        // META: It's a resource locator!
        result = Symbol.for('https://github.com/benlesh/symbol-observable');
      } else {
        // Symbol.for didn't exist! The best we can do at this point is a totally 
        // unique symbol. Note that the string argument here is a descriptor, not
        // an identifier. This symbol is unique.
        result = Symbol('https://github.com/benlesh/symbol-observable');
      }

      try {
        Symbol.observable = result;
      } catch (err) {// Do nothing. In some environments, users have frozen `Symbol` for security reasons,
        // if it is frozen assigning to it will throw. In this case, we don't care, because
        // they will need to use the returned value from the ponyfill.
      }
    }
  } else {
    result = '@@observable';
  }

  return result;
}
;

/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js ***!
  \************************************************************************************/
/*! exports provided: InvariantError, default, invariant, setVerbosity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return InvariantError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invariant$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return invariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setVerbosity", function() { return setVerbosity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var genericMessage = "Invariant Violation";
var _a = Object.setPrototypeOf,
    setPrototypeOf = _a === void 0 ? function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
} : _a;

var InvariantError =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(InvariantError, _super);

  function InvariantError(message) {
    if (message === void 0) {
      message = genericMessage;
    }

    var _this = _super.call(this, typeof message === "number" ? genericMessage + ": " + message + " (see https://github.com/apollographql/invariant-packages)" : message) || this;

    _this.framesToPop = 1;
    _this.name = genericMessage;
    setPrototypeOf(_this, InvariantError.prototype);
    return _this;
  }

  return InvariantError;
}(Error);

function invariant(condition, message) {
  if (!condition) {
    throw new InvariantError(message);
  }
}

var verbosityLevels = ["debug", "log", "warn", "error", "silent"];
var verbosityLevel = verbosityLevels.indexOf("log");

function wrapConsoleMethod(name) {
  return function () {
    if (verbosityLevels.indexOf(name) >= verbosityLevel) {
      // Default to console.log if this host environment happens not to provide
      // all the console.* methods we need.
      var method = console[name] || console.log;
      return method.apply(console, arguments);
    }
  };
}

(function (invariant) {
  invariant.debug = wrapConsoleMethod("debug");
  invariant.log = wrapConsoleMethod("log");
  invariant.warn = wrapConsoleMethod("warn");
  invariant.error = wrapConsoleMethod("error");
})(invariant || (invariant = {}));

function setVerbosity(level) {
  var old = verbosityLevels[verbosityLevel];
  verbosityLevel = Math.max(0, verbosityLevels.indexOf(level));
  return old;
}

var invariant$1 = invariant;


/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/ts-invariant/process/index.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/ts-invariant/process/index.js ***!
  \********************************************************************************/
/*! exports provided: install, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
function maybe(thunk) {
  try {
    return thunk();
  } catch (_) {}
}

var safeGlobal = maybe(function () {
  return globalThis;
}) || maybe(function () {
  return window;
}) || maybe(function () {
  return self;
}) || maybe(function () {
  return global;
}) || maybe(function () {
  return Function("return this")();
});
var needToRemove = false;
function install() {
  if (safeGlobal && !maybe(function () {
    return "development";
  }) && !maybe(function () {
    return process;
  })) {
    Object.defineProperty(safeGlobal, "process", {
      value: {
        env: {
          // This default needs to be "production" instead of "development", to
          // avoid the problem https://github.com/graphql/graphql-js/pull/2894
          // will eventually solve, once merged and released.
          NODE_ENV: "production"
        }
      },
      // Let anyone else change global.process as they see fit, but hide it from
      // Object.keys(global) enumeration.
      configurable: true,
      enumerable: false,
      writable: true
    });
    needToRemove = true;
  }
} // Call install() at least once, when this module is imported.

install();
function remove() {
  if (needToRemove) {
    delete safeGlobal.process;
    needToRemove = false;
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@apollo/client/node_modules/zen-observable-ts/module.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@apollo/client/node_modules/zen-observable-ts/module.js ***!
  \******************************************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return Observable; });
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
} // === Symbol Support ===


var hasSymbols = function () {
  return typeof Symbol === 'function';
};

var hasSymbol = function (name) {
  return hasSymbols() && Boolean(Symbol[name]);
};

var getSymbol = function (name) {
  return hasSymbol(name) ? Symbol[name] : '@@' + name;
};

if (hasSymbols() && !hasSymbol('observable')) {
  Symbol.observable = Symbol('observable');
}

var SymbolIterator = getSymbol('iterator');
var SymbolObservable = getSymbol('observable');
var SymbolSpecies = getSymbol('species'); // === Abstract Operations ===

function getMethod(obj, key) {
  var value = obj[key];
  if (value == null) return undefined;
  if (typeof value !== 'function') throw new TypeError(value + ' is not a function');
  return value;
}

function getSpecies(obj) {
  var ctor = obj.constructor;

  if (ctor !== undefined) {
    ctor = ctor[SymbolSpecies];

    if (ctor === null) {
      ctor = undefined;
    }
  }

  return ctor !== undefined ? ctor : Observable;
}

function isObservable(x) {
  return x instanceof Observable; // SPEC: Brand check
}

function hostReportError(e) {
  if (hostReportError.log) {
    hostReportError.log(e);
  } else {
    setTimeout(function () {
      throw e;
    });
  }
}

function enqueue(fn) {
  Promise.resolve().then(function () {
    try {
      fn();
    } catch (e) {
      hostReportError(e);
    }
  });
}

function cleanupSubscription(subscription) {
  var cleanup = subscription._cleanup;
  if (cleanup === undefined) return;
  subscription._cleanup = undefined;

  if (!cleanup) {
    return;
  }

  try {
    if (typeof cleanup === 'function') {
      cleanup();
    } else {
      var unsubscribe = getMethod(cleanup, 'unsubscribe');

      if (unsubscribe) {
        unsubscribe.call(cleanup);
      }
    }
  } catch (e) {
    hostReportError(e);
  }
}

function closeSubscription(subscription) {
  subscription._observer = undefined;
  subscription._queue = undefined;
  subscription._state = 'closed';
}

function flushSubscription(subscription) {
  var queue = subscription._queue;

  if (!queue) {
    return;
  }

  subscription._queue = undefined;
  subscription._state = 'ready';

  for (var i = 0; i < queue.length; ++i) {
    notifySubscription(subscription, queue[i].type, queue[i].value);
    if (subscription._state === 'closed') break;
  }
}

function notifySubscription(subscription, type, value) {
  subscription._state = 'running';
  var observer = subscription._observer;

  try {
    var m = getMethod(observer, type);

    switch (type) {
      case 'next':
        if (m) m.call(observer, value);
        break;

      case 'error':
        closeSubscription(subscription);
        if (m) m.call(observer, value);else throw value;
        break;

      case 'complete':
        closeSubscription(subscription);
        if (m) m.call(observer);
        break;
    }
  } catch (e) {
    hostReportError(e);
  }

  if (subscription._state === 'closed') cleanupSubscription(subscription);else if (subscription._state === 'running') subscription._state = 'ready';
}

function onNotify(subscription, type, value) {
  if (subscription._state === 'closed') return;

  if (subscription._state === 'buffering') {
    subscription._queue.push({
      type: type,
      value: value
    });

    return;
  }

  if (subscription._state !== 'ready') {
    subscription._state = 'buffering';
    subscription._queue = [{
      type: type,
      value: value
    }];
    enqueue(function () {
      return flushSubscription(subscription);
    });
    return;
  }

  notifySubscription(subscription, type, value);
}

var Subscription = /*#__PURE__*/function () {
  function Subscription(observer, subscriber) {
    // ASSERT: observer is an object
    // ASSERT: subscriber is callable
    this._cleanup = undefined;
    this._observer = observer;
    this._queue = undefined;
    this._state = 'initializing';
    var subscriptionObserver = new SubscriptionObserver(this);

    try {
      this._cleanup = subscriber.call(undefined, subscriptionObserver);
    } catch (e) {
      subscriptionObserver.error(e);
    }

    if (this._state === 'initializing') this._state = 'ready';
  }

  var _proto = Subscription.prototype;

  _proto.unsubscribe = function unsubscribe() {
    if (this._state !== 'closed') {
      closeSubscription(this);
      cleanupSubscription(this);
    }
  };

  _createClass(Subscription, [{
    key: "closed",
    get: function () {
      return this._state === 'closed';
    }
  }]);

  return Subscription;
}();

var SubscriptionObserver = /*#__PURE__*/function () {
  function SubscriptionObserver(subscription) {
    this._subscription = subscription;
  }

  var _proto2 = SubscriptionObserver.prototype;

  _proto2.next = function next(value) {
    onNotify(this._subscription, 'next', value);
  };

  _proto2.error = function error(value) {
    onNotify(this._subscription, 'error', value);
  };

  _proto2.complete = function complete() {
    onNotify(this._subscription, 'complete');
  };

  _createClass(SubscriptionObserver, [{
    key: "closed",
    get: function () {
      return this._subscription._state === 'closed';
    }
  }]);

  return SubscriptionObserver;
}();

var Observable = /*#__PURE__*/function () {
  function Observable(subscriber) {
    if (!(this instanceof Observable)) throw new TypeError('Observable cannot be called as a function');
    if (typeof subscriber !== 'function') throw new TypeError('Observable initializer must be a function');
    this._subscriber = subscriber;
  }

  var _proto3 = Observable.prototype;

  _proto3.subscribe = function subscribe(observer) {
    if (typeof observer !== 'object' || observer === null) {
      observer = {
        next: observer,
        error: arguments[1],
        complete: arguments[2]
      };
    }

    return new Subscription(observer, this._subscriber);
  };

  _proto3.forEach = function forEach(fn) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      if (typeof fn !== 'function') {
        reject(new TypeError(fn + ' is not a function'));
        return;
      }

      function done() {
        subscription.unsubscribe();
        resolve();
      }

      var subscription = _this.subscribe({
        next: function (value) {
          try {
            fn(value, done);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  };

  _proto3.map = function map(fn) {
    var _this2 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this2.subscribe({
        next: function (value) {
          try {
            value = fn(value);
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.filter = function filter(fn) {
    var _this3 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      return _this3.subscribe({
        next: function (value) {
          try {
            if (!fn(value)) return;
          } catch (e) {
            return observer.error(e);
          }

          observer.next(value);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          observer.complete();
        }
      });
    });
  };

  _proto3.reduce = function reduce(fn) {
    var _this4 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    var hasSeed = arguments.length > 1;
    var hasValue = false;
    var seed = arguments[1];
    var acc = seed;
    return new C(function (observer) {
      return _this4.subscribe({
        next: function (value) {
          var first = !hasValue;
          hasValue = true;

          if (!first || hasSeed) {
            try {
              acc = fn(acc, value);
            } catch (e) {
              return observer.error(e);
            }
          } else {
            acc = value;
          }
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          if (!hasValue && !hasSeed) return observer.error(new TypeError('Cannot reduce an empty sequence'));
          observer.next(acc);
          observer.complete();
        }
      });
    });
  };

  _proto3.concat = function concat() {
    var _this5 = this;

    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    var C = getSpecies(this);
    return new C(function (observer) {
      var subscription;
      var index = 0;

      function startNext(next) {
        subscription = next.subscribe({
          next: function (v) {
            observer.next(v);
          },
          error: function (e) {
            observer.error(e);
          },
          complete: function () {
            if (index === sources.length) {
              subscription = undefined;
              observer.complete();
            } else {
              startNext(C.from(sources[index++]));
            }
          }
        });
      }

      startNext(_this5);
      return function () {
        if (subscription) {
          subscription.unsubscribe();
          subscription = undefined;
        }
      };
    });
  };

  _proto3.flatMap = function flatMap(fn) {
    var _this6 = this;

    if (typeof fn !== 'function') throw new TypeError(fn + ' is not a function');
    var C = getSpecies(this);
    return new C(function (observer) {
      var subscriptions = [];

      var outer = _this6.subscribe({
        next: function (value) {
          if (fn) {
            try {
              value = fn(value);
            } catch (e) {
              return observer.error(e);
            }
          }

          var inner = C.from(value).subscribe({
            next: function (value) {
              observer.next(value);
            },
            error: function (e) {
              observer.error(e);
            },
            complete: function () {
              var i = subscriptions.indexOf(inner);
              if (i >= 0) subscriptions.splice(i, 1);
              completeIfDone();
            }
          });
          subscriptions.push(inner);
        },
        error: function (e) {
          observer.error(e);
        },
        complete: function () {
          completeIfDone();
        }
      });

      function completeIfDone() {
        if (outer.closed && subscriptions.length === 0) observer.complete();
      }

      return function () {
        subscriptions.forEach(function (s) {
          return s.unsubscribe();
        });
        outer.unsubscribe();
      };
    });
  };

  _proto3[SymbolObservable] = function () {
    return this;
  };

  Observable.from = function from(x) {
    var C = typeof this === 'function' ? this : Observable;
    if (x == null) throw new TypeError(x + ' is not an object');
    var method = getMethod(x, SymbolObservable);

    if (method) {
      var observable = method.call(x);
      if (Object(observable) !== observable) throw new TypeError(observable + ' is not an object');
      if (isObservable(observable) && observable.constructor === C) return observable;
      return new C(function (observer) {
        return observable.subscribe(observer);
      });
    }

    if (hasSymbol('iterator')) {
      method = getMethod(x, SymbolIterator);

      if (method) {
        return new C(function (observer) {
          enqueue(function () {
            if (observer.closed) return;

            for (var _iterator = _createForOfIteratorHelperLoose(method.call(x)), _step; !(_step = _iterator()).done;) {
              var item = _step.value;
              observer.next(item);
              if (observer.closed) return;
            }

            observer.complete();
          });
        });
      }
    }

    if (Array.isArray(x)) {
      return new C(function (observer) {
        enqueue(function () {
          if (observer.closed) return;

          for (var i = 0; i < x.length; ++i) {
            observer.next(x[i]);
            if (observer.closed) return;
          }

          observer.complete();
        });
      });
    }

    throw new TypeError(x + ' is not observable');
  };

  Observable.of = function of() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    var C = typeof this === 'function' ? this : Observable;
    return new C(function (observer) {
      enqueue(function () {
        if (observer.closed) return;

        for (var i = 0; i < items.length; ++i) {
          observer.next(items[i]);
          if (observer.closed) return;
        }

        observer.complete();
      });
    });
  };

  _createClass(Observable, null, [{
    key: SymbolSpecies,
    get: function () {
      return this;
    }
  }]);

  return Observable;
}();

if (hasSymbols()) {
  Object.defineProperty(Observable, Symbol('extensions'), {
    value: {
      symbol: SymbolObservable,
      hostReportError: hostReportError
    },
    configurable: true
  });
}



/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloConsumer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloConsumer.js ***!
  \*********************************************************************/
/*! exports provided: ApolloConsumer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return ApolloConsumer; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");



var ApolloConsumer = function (props) {
  var ApolloContext = Object(_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ApolloContext.Consumer, null, function (context) {
    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(context && context.client, 'Could not find "client" in the context of ApolloConsumer. ' + 'Wrap the root component in an <ApolloProvider>.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(context && context.client, 27);
    return props.children(context.client);
  });
};

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloContext.js ***!
  \********************************************************************/
/*! exports provided: getApolloContext, resetApolloContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return getApolloContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return getApolloContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/index.js */ "./node_modules/@apollo/client/utilities/index.js");


var contextKey = _utilities_index_js__WEBPACK_IMPORTED_MODULE_1__["canUseSymbol"] ? Symbol.for('__APOLLO_CONTEXT__') : '__APOLLO_CONTEXT__';
function getApolloContext() {
  var context = react__WEBPACK_IMPORTED_MODULE_0__["createContext"][contextKey];

  if (!context) {
    Object.defineProperty(react__WEBPACK_IMPORTED_MODULE_0__["createContext"], contextKey, {
      value: context = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({}),
      enumerable: false,
      writable: false,
      configurable: true
    });
    context.displayName = 'ApolloContext';
  }

  return context;
}


/***/ }),

/***/ "./node_modules/@apollo/client/react/context/ApolloProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/ApolloProvider.js ***!
  \*********************************************************************/
/*! exports provided: ApolloProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return ApolloProvider; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");



var ApolloProvider = function (_a) {
  var client = _a.client,
      children = _a.children;
  var ApolloContext = Object(_ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])();
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ApolloContext.Consumer, null, function (context) {
    if (context === void 0) {
      context = {};
    }

    if (client && context.client !== client) {
      context = Object.assign({}, context, {
        client: client
      });
    }

    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(context.client, 'ApolloProvider was not passed a client instance. Make ' + 'sure you pass in your client via the "client" prop.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(context.client, 28);
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](ApolloContext.Provider, {
      value: context
    }, children);
  });
};

/***/ }),

/***/ "./node_modules/@apollo/client/react/context/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@apollo/client/react/context/index.js ***!
  \************************************************************/
/*! exports provided: ApolloConsumer, getApolloContext, resetApolloContext, ApolloProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _ApolloConsumer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApolloConsumer.js */ "./node_modules/@apollo/client/react/context/ApolloConsumer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _ApolloConsumer_js__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"]; });

/* harmony import */ var _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApolloContext.js */ "./node_modules/@apollo/client/react/context/ApolloContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _ApolloContext_js__WEBPACK_IMPORTED_MODULE_2__["resetApolloContext"]; });

/* harmony import */ var _ApolloProvider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ApolloProvider.js */ "./node_modules/@apollo/client/react/context/ApolloProvider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _ApolloProvider_js__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"]; });






/***/ }),

/***/ "./node_modules/@apollo/client/react/data/MutationData.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/MutationData.js ***!
  \****************************************************************/
/*! exports provided: MutationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationData", function() { return MutationData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/index.js */ "./node_modules/@apollo/client/core/index.js");







var MutationData = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MutationData, _super);

  function MutationData(_a) {
    var options = _a.options,
        context = _a.context,
        result = _a.result,
        setResult = _a.setResult;

    var _this = _super.call(this, options, context) || this;

    _this.runMutation = function (mutationFunctionOptions) {
      if (mutationFunctionOptions === void 0) {
        mutationFunctionOptions = {};
      }

      _this.onMutationStart();

      var mutationId = _this.generateNewMutationId();

      return _this.mutate(mutationFunctionOptions).then(function (response) {
        _this.onMutationCompleted(response, mutationId);

        return response;
      }).catch(function (error) {
        var onError = _this.getOptions().onError;

        _this.onMutationError(error, mutationId);

        if (onError) {
          onError(error);
          return {
            data: undefined,
            errors: error
          };
        } else {
          throw error;
        }
      });
    };

    _this.verifyDocumentType(options.mutation, _parser_index_js__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].Mutation);

    _this.result = result;
    _this.setResult = setResult;
    _this.mostRecentMutationId = 0;
    return _this;
  }

  MutationData.prototype.execute = function (result) {
    this.isMounted = true;
    this.verifyDocumentType(this.getOptions().mutation, _parser_index_js__WEBPACK_IMPORTED_MODULE_2__["DocumentType"].Mutation);
    return [this.runMutation, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), {
      client: this.refreshClient().client
    })];
  };

  MutationData.prototype.afterExecute = function () {
    this.isMounted = true;
    return this.unmount.bind(this);
  };

  MutationData.prototype.cleanup = function () {};

  MutationData.prototype.mutate = function (options) {
    return this.refreshClient().client.mutate(Object(_core_index_js__WEBPACK_IMPORTED_MODULE_5__["mergeOptions"])(this.getOptions(), options));
  };

  MutationData.prototype.onMutationStart = function () {
    if (!this.result.loading && !this.getOptions().ignoreResults) {
      this.updateResult({
        loading: true,
        error: undefined,
        data: undefined,
        called: true
      });
    }
  };

  MutationData.prototype.onMutationCompleted = function (response, mutationId) {
    var _a = this.getOptions(),
        onCompleted = _a.onCompleted,
        ignoreResults = _a.ignoreResults;

    var data = response.data,
        errors = response.errors;
    var error = errors && errors.length > 0 ? new _errors_index_js__WEBPACK_IMPORTED_MODULE_3__["ApolloError"]({
      graphQLErrors: errors
    }) : undefined;

    var callOncomplete = function () {
      return onCompleted ? onCompleted(data) : null;
    };

    if (this.isMostRecentMutation(mutationId) && !ignoreResults) {
      this.updateResult({
        called: true,
        loading: false,
        data: data,
        error: error
      });
    }

    callOncomplete();
  };

  MutationData.prototype.onMutationError = function (error, mutationId) {
    if (this.isMostRecentMutation(mutationId)) {
      this.updateResult({
        loading: false,
        error: error,
        data: undefined,
        called: true
      });
    }
  };

  MutationData.prototype.generateNewMutationId = function () {
    return ++this.mostRecentMutationId;
  };

  MutationData.prototype.isMostRecentMutation = function (mutationId) {
    return this.mostRecentMutationId === mutationId;
  };

  MutationData.prototype.updateResult = function (result) {
    if (this.isMounted && (!this.previousResult || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.previousResult, result))) {
      this.setResult(result);
      this.previousResult = result;
      return result;
    }
  };

  return MutationData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_4__["OperationData"]);



/***/ }),

/***/ "./node_modules/@apollo/client/react/data/OperationData.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/OperationData.js ***!
  \*****************************************************************/
/*! exports provided: OperationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationData", function() { return OperationData; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");




var OperationData = function () {
  function OperationData(options, context) {
    this.isMounted = false;
    this.previousOptions = {};
    this.context = {};
    this.options = {};
    this.options = options || {};
    this.context = context || {};
  }

  OperationData.prototype.getOptions = function () {
    return this.options;
  };

  OperationData.prototype.setOptions = function (newOptions, storePrevious) {
    if (storePrevious === void 0) {
      storePrevious = false;
    }

    if (storePrevious && !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.options, newOptions)) {
      this.previousOptions = this.options;
    }

    this.options = newOptions;
  };

  OperationData.prototype.unmount = function () {
    this.isMounted = false;
  };

  OperationData.prototype.refreshClient = function () {
    var client = this.options && this.options.client || this.context && this.context.client;
    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!!client, 'Could not find "client" in the context or passed in as an option. ' + 'Wrap the root component in an <ApolloProvider>, or pass an ' + 'ApolloClient instance in via options.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!!client, 29);
    var isNew = false;

    if (client !== this.client) {
      isNew = true;
      this.client = client;
      this.cleanup();
    }

    return {
      client: this.client,
      isNew: isNew
    };
  };

  OperationData.prototype.verifyDocumentType = function (document, type) {
    var operation = Object(_parser_index_js__WEBPACK_IMPORTED_MODULE_2__["parser"])(document);
    var requiredOperationName = Object(_parser_index_js__WEBPACK_IMPORTED_MODULE_2__["operationName"])(type);
    var usedOperationName = Object(_parser_index_js__WEBPACK_IMPORTED_MODULE_2__["operationName"])(operation.type);
    __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(operation.type === type, "Running a " + requiredOperationName + " requires a graphql " + (requiredOperationName + ", but a " + usedOperationName + " was used instead.")) : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(operation.type === type, 30);
  };

  return OperationData;
}();



/***/ }),

/***/ "./node_modules/@apollo/client/react/data/QueryData.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/QueryData.js ***!
  \*************************************************************/
/*! exports provided: QueryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryData", function() { return QueryData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@apollo/client/errors/index.js");
/* harmony import */ var _core_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/index.js */ "./node_modules/@apollo/client/core/index.js");
/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");







var QueryData = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(QueryData, _super);

  function QueryData(_a) {
    var options = _a.options,
        context = _a.context,
        onNewData = _a.onNewData;

    var _this = _super.call(this, options, context) || this;

    _this.runLazy = false;
    _this.previous = Object.create(null);

    _this.runLazyQuery = function (options) {
      _this.cleanup();

      _this.runLazy = true;
      _this.lazyOptions = options;

      _this.onNewData();
    };

    _this.obsRefetch = function (variables) {
      var _a;

      return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.refetch(variables);
    };

    _this.obsFetchMore = function (fetchMoreOptions) {
      var _a;

      return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.fetchMore(fetchMoreOptions);
    };

    _this.obsUpdateQuery = function (mapFn) {
      var _a;

      return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.updateQuery(mapFn);
    };

    _this.obsStartPolling = function (pollInterval) {
      var _a;

      (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.startPolling(pollInterval);
    };

    _this.obsStopPolling = function () {
      var _a;

      (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.stopPolling();
    };

    _this.obsSubscribeToMore = function (options) {
      var _a;

      return (_a = _this.currentObservable) === null || _a === void 0 ? void 0 : _a.subscribeToMore(options);
    };

    _this.onNewData = onNewData;
    return _this;
  }

  QueryData.prototype.execute = function () {
    this.refreshClient();

    var _a = this.getOptions(),
        skip = _a.skip,
        query = _a.query;

    if (skip || query !== this.previous.query) {
      this.removeQuerySubscription();
      this.removeObservable(!skip);
      this.previous.query = query;
    }

    this.updateObservableQuery();
    return this.getExecuteSsrResult() || this.getExecuteResult();
  };

  QueryData.prototype.executeLazy = function () {
    return !this.runLazy ? [this.runLazyQuery, {
      loading: false,
      networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready,
      called: false,
      data: undefined
    }] : [this.runLazyQuery, this.execute()];
  };

  QueryData.prototype.fetchData = function () {
    var _this = this;

    var options = this.getOptions();
    if (options.skip || options.ssr === false) return false;
    return new Promise(function (resolve) {
      return _this.startQuerySubscription(resolve);
    });
  };

  QueryData.prototype.afterExecute = function (_a) {
    var _b = _a === void 0 ? {} : _a,
        _c = _b.lazy,
        lazy = _c === void 0 ? false : _c;

    this.isMounted = true;
    var options = this.getOptions();

    if (this.currentObservable && !this.ssrInitiated()) {
      this.startQuerySubscription();
    }

    if (!lazy || this.runLazy) {
      this.handleErrorOrCompleted();
    }

    this.previousOptions = options;
    return this.unmount.bind(this);
  };

  QueryData.prototype.cleanup = function () {
    this.removeQuerySubscription();
    this.removeObservable(true);
    delete this.previous.result;
  };

  QueryData.prototype.getOptions = function () {
    var options = _super.prototype.getOptions.call(this);

    if (this.lazyOptions) {
      options.variables = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.variables), this.lazyOptions.variables);
      options.context = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options.context), this.lazyOptions.context);
    }

    if (this.runLazy) {
      delete options.skip;
    }

    return options;
  };

  QueryData.prototype.ssrInitiated = function () {
    return this.context && this.context.renderPromises;
  };

  QueryData.prototype.getExecuteSsrResult = function () {
    var _a = this.getOptions(),
        ssr = _a.ssr,
        skip = _a.skip;

    var ssrDisabled = ssr === false;
    var fetchDisabled = this.refreshClient().client.disableNetworkFetches;

    var ssrLoading = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      loading: true,
      networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading,
      called: true,
      data: undefined,
      stale: false,
      client: this.client
    }, this.observableQueryFields());

    if (ssrDisabled && (this.ssrInitiated() || fetchDisabled)) {
      this.previous.result = ssrLoading;
      return ssrLoading;
    }

    if (this.ssrInitiated()) {
      var result = this.getExecuteResult() || ssrLoading;

      if (result.loading && !skip) {
        this.context.renderPromises.addQueryPromise(this, function () {
          return null;
        });
      }

      return result;
    }
  };

  QueryData.prototype.prepareObservableQueryOptions = function () {
    var options = this.getOptions();
    this.verifyDocumentType(options.query, _parser_index_js__WEBPACK_IMPORTED_MODULE_4__["DocumentType"].Query);
    var displayName = options.displayName || 'Query';

    if (this.ssrInitiated() && (options.fetchPolicy === 'network-only' || options.fetchPolicy === 'cache-and-network')) {
      options.fetchPolicy = 'cache-first';
    }

    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
      displayName: displayName,
      context: options.context
    });
  };

  QueryData.prototype.initializeObservableQuery = function () {
    if (this.ssrInitiated()) {
      this.currentObservable = this.context.renderPromises.getSSRObservable(this.getOptions());
    }

    if (!this.currentObservable) {
      var observableQueryOptions = this.prepareObservableQueryOptions();
      this.previous.observableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observableQueryOptions), {
        children: void 0
      });
      this.currentObservable = this.refreshClient().client.watchQuery(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, observableQueryOptions));

      if (this.ssrInitiated()) {
        this.context.renderPromises.registerSSRObservable(this.currentObservable, observableQueryOptions);
      }
    }
  };

  QueryData.prototype.updateObservableQuery = function () {
    if (!this.currentObservable) {
      this.initializeObservableQuery();
      return;
    }

    var newObservableQueryOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.prepareObservableQueryOptions()), {
      children: void 0
    });

    if (this.getOptions().skip) {
      this.previous.observableQueryOptions = newObservableQueryOptions;
      return;
    }

    if (!Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(newObservableQueryOptions, this.previous.observableQueryOptions)) {
      this.previous.observableQueryOptions = newObservableQueryOptions;
      this.currentObservable.setOptions(newObservableQueryOptions).catch(function () {});
    }
  };

  QueryData.prototype.startQuerySubscription = function (onNewData) {
    var _this = this;

    if (onNewData === void 0) {
      onNewData = this.onNewData;
    }

    if (this.currentSubscription || this.getOptions().skip) return;
    this.currentSubscription = this.currentObservable.subscribe({
      next: function (_a) {
        var loading = _a.loading,
            networkStatus = _a.networkStatus,
            data = _a.data;
        var previousResult = _this.previous.result;

        if (previousResult && previousResult.loading === loading && previousResult.networkStatus === networkStatus && Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(previousResult.data, data)) {
          return;
        }

        onNewData();
      },
      error: function (error) {
        _this.resubscribeToQuery();

        if (!error.hasOwnProperty('graphQLErrors')) throw error;
        var previousResult = _this.previous.result;

        if (previousResult && previousResult.loading || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(error, _this.previous.error)) {
          _this.previous.error = error;
          onNewData();
        }
      }
    });
  };

  QueryData.prototype.resubscribeToQuery = function () {
    this.removeQuerySubscription();
    var currentObservable = this.currentObservable;

    if (currentObservable) {
      var last = currentObservable["last"];

      try {
        currentObservable.resetLastResults();
        this.startQuerySubscription();
      } finally {
        currentObservable["last"] = last;
      }
    }
  };

  QueryData.prototype.getExecuteResult = function () {
    var result = this.observableQueryFields();
    var options = this.getOptions();

    if (options.skip) {
      result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), {
        data: undefined,
        error: undefined,
        loading: false,
        networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].ready,
        called: true
      });
    } else if (this.currentObservable) {
      var currentResult = this.currentObservable.getCurrentResult();
      var data = currentResult.data,
          loading = currentResult.loading,
          partial = currentResult.partial,
          networkStatus = currentResult.networkStatus,
          errors = currentResult.errors;
      var error = currentResult.error;

      if (errors && errors.length > 0) {
        error = new _errors_index_js__WEBPACK_IMPORTED_MODULE_2__["ApolloError"]({
          graphQLErrors: errors
        });
      }

      result = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), {
        data: data,
        loading: loading,
        networkStatus: networkStatus,
        error: error,
        called: true
      });

      if (loading) {} else if (error) {
        Object.assign(result, {
          data: (this.currentObservable.getLastResult() || {}).data
        });
      } else {
        var fetchPolicy = this.currentObservable.options.fetchPolicy;
        var partialRefetch = options.partialRefetch;

        if (partialRefetch && partial && (!data || Object.keys(data).length === 0) && fetchPolicy !== 'cache-only') {
          Object.assign(result, {
            loading: true,
            networkStatus: _core_index_js__WEBPACK_IMPORTED_MODULE_3__["NetworkStatus"].loading
          });
          result.refetch();
          return result;
        }
      }
    }

    result.client = this.client;
    this.setOptions(options, true);
    var previousResult = this.previous.result;
    this.previous.loading = previousResult && previousResult.loading || false;
    result.previousData = previousResult && (previousResult.data || previousResult.previousData);
    this.previous.result = result;
    this.currentObservable && this.currentObservable.resetQueryStoreErrors();
    return result;
  };

  QueryData.prototype.handleErrorOrCompleted = function () {
    if (!this.currentObservable || !this.previous.result) return;
    var _a = this.previous.result,
        data = _a.data,
        loading = _a.loading,
        error = _a.error;

    if (!loading) {
      var _b = this.getOptions(),
          query = _b.query,
          variables = _b.variables,
          onCompleted = _b.onCompleted,
          onError = _b.onError,
          skip = _b.skip;

      if (this.previousOptions && !this.previous.loading && Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.previousOptions.query, query) && Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.previousOptions.variables, variables)) {
        return;
      }

      if (onCompleted && !error && !skip) {
        onCompleted(data);
      } else if (onError && error) {
        onError(error);
      }
    }
  };

  QueryData.prototype.removeQuerySubscription = function () {
    if (this.currentSubscription) {
      this.currentSubscription.unsubscribe();
      delete this.currentSubscription;
    }
  };

  QueryData.prototype.removeObservable = function (andDelete) {
    if (this.currentObservable) {
      this.currentObservable["tearDownQuery"]();

      if (andDelete) {
        delete this.currentObservable;
      }
    }
  };

  QueryData.prototype.observableQueryFields = function () {
    var _a;

    return {
      variables: (_a = this.currentObservable) === null || _a === void 0 ? void 0 : _a.variables,
      refetch: this.obsRefetch,
      fetchMore: this.obsFetchMore,
      updateQuery: this.obsUpdateQuery,
      startPolling: this.obsStartPolling,
      stopPolling: this.obsStopPolling,
      subscribeToMore: this.obsSubscribeToMore
    };
  };

  return QueryData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_5__["OperationData"]);



/***/ }),

/***/ "./node_modules/@apollo/client/react/data/SubscriptionData.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/SubscriptionData.js ***!
  \********************************************************************/
/*! exports provided: SubscriptionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionData", function() { return SubscriptionData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");
/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");




var SubscriptionData = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SubscriptionData, _super);

  function SubscriptionData(_a) {
    var options = _a.options,
        context = _a.context,
        setResult = _a.setResult;

    var _this = _super.call(this, options, context) || this;

    _this.currentObservable = {};
    _this.setResult = setResult;

    _this.initialize(options);

    return _this;
  }

  SubscriptionData.prototype.execute = function (result) {
    if (this.getOptions().skip === true) {
      this.cleanup();
      return {
        loading: false,
        error: undefined,
        data: undefined,
        variables: this.getOptions().variables
      };
    }

    var currentResult = result;

    if (this.refreshClient().isNew) {
      currentResult = this.getLoadingResult();
    }

    var shouldResubscribe = this.getOptions().shouldResubscribe;

    if (typeof shouldResubscribe === 'function') {
      shouldResubscribe = !!shouldResubscribe(this.getOptions());
    }

    if (shouldResubscribe !== false && this.previousOptions && Object.keys(this.previousOptions).length > 0 && (this.previousOptions.subscription !== this.getOptions().subscription || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(this.previousOptions.variables, this.getOptions().variables) || this.previousOptions.skip !== this.getOptions().skip)) {
      this.cleanup();
      currentResult = this.getLoadingResult();
    }

    this.initialize(this.getOptions());
    this.startSubscription();
    this.previousOptions = this.getOptions();
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, currentResult), {
      variables: this.getOptions().variables
    });
  };

  SubscriptionData.prototype.afterExecute = function () {
    this.isMounted = true;
  };

  SubscriptionData.prototype.cleanup = function () {
    this.endSubscription();
    delete this.currentObservable.query;
  };

  SubscriptionData.prototype.initialize = function (options) {
    if (this.currentObservable.query || this.getOptions().skip === true) return;
    this.currentObservable.query = this.refreshClient().client.subscribe({
      query: options.subscription,
      variables: options.variables,
      fetchPolicy: options.fetchPolicy,
      context: options.context
    });
  };

  SubscriptionData.prototype.startSubscription = function () {
    if (this.currentObservable.subscription) return;
    this.currentObservable.subscription = this.currentObservable.query.subscribe({
      next: this.updateCurrentData.bind(this),
      error: this.updateError.bind(this),
      complete: this.completeSubscription.bind(this)
    });
  };

  SubscriptionData.prototype.getLoadingResult = function () {
    return {
      loading: true,
      error: undefined,
      data: undefined
    };
  };

  SubscriptionData.prototype.updateResult = function (result) {
    if (this.isMounted) {
      this.setResult(result);
    }
  };

  SubscriptionData.prototype.updateCurrentData = function (result) {
    var onSubscriptionData = this.getOptions().onSubscriptionData;
    this.updateResult({
      data: result.data,
      loading: false,
      error: undefined
    });

    if (onSubscriptionData) {
      onSubscriptionData({
        client: this.refreshClient().client,
        subscriptionData: result
      });
    }
  };

  SubscriptionData.prototype.updateError = function (error) {
    this.updateResult({
      error: error,
      loading: false
    });
  };

  SubscriptionData.prototype.completeSubscription = function () {
    var _this = this;

    Promise.resolve().then(function () {
      var onSubscriptionComplete = _this.getOptions().onSubscriptionComplete;

      if (onSubscriptionComplete) onSubscriptionComplete();

      _this.endSubscription();
    });
  };

  SubscriptionData.prototype.endSubscription = function () {
    if (this.currentObservable.subscription) {
      this.currentObservable.subscription.unsubscribe();
      delete this.currentObservable.subscription;
    }
  };

  return SubscriptionData;
}(_OperationData_js__WEBPACK_IMPORTED_MODULE_2__["OperationData"]);



/***/ }),

/***/ "./node_modules/@apollo/client/react/data/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@apollo/client/react/data/index.js ***!
  \*********************************************************/
/*! exports provided: SubscriptionData, OperationData, MutationData, QueryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _SubscriptionData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriptionData.js */ "./node_modules/@apollo/client/react/data/SubscriptionData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionData", function() { return _SubscriptionData_js__WEBPACK_IMPORTED_MODULE_1__["SubscriptionData"]; });

/* harmony import */ var _OperationData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OperationData.js */ "./node_modules/@apollo/client/react/data/OperationData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OperationData", function() { return _OperationData_js__WEBPACK_IMPORTED_MODULE_2__["OperationData"]; });

/* harmony import */ var _MutationData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MutationData.js */ "./node_modules/@apollo/client/react/data/MutationData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutationData", function() { return _MutationData_js__WEBPACK_IMPORTED_MODULE_3__["MutationData"]; });

/* harmony import */ var _QueryData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueryData.js */ "./node_modules/@apollo/client/react/data/QueryData.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryData", function() { return _QueryData_js__WEBPACK_IMPORTED_MODULE_4__["QueryData"]; });







/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/index.js ***!
  \**********************************************************/
/*! exports provided: useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription, useReactiveVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _useApolloClient_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useApolloClient.js */ "./node_modules/@apollo/client/react/hooks/useApolloClient.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _useApolloClient_js__WEBPACK_IMPORTED_MODULE_1__["useApolloClient"]; });

/* harmony import */ var _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useLazyQuery.js */ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _useLazyQuery_js__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"]; });

/* harmony import */ var _useMutation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useMutation.js */ "./node_modules/@apollo/client/react/hooks/useMutation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _useMutation_js__WEBPACK_IMPORTED_MODULE_3__["useMutation"]; });

/* harmony import */ var _useQuery_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useQuery.js */ "./node_modules/@apollo/client/react/hooks/useQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _useQuery_js__WEBPACK_IMPORTED_MODULE_4__["useQuery"]; });

/* harmony import */ var _useSubscription_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useSubscription.js */ "./node_modules/@apollo/client/react/hooks/useSubscription.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _useSubscription_js__WEBPACK_IMPORTED_MODULE_5__["useSubscription"]; });

/* harmony import */ var _useReactiveVar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useReactiveVar.js */ "./node_modules/@apollo/client/react/hooks/useReactiveVar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReactiveVar", function() { return _useReactiveVar_js__WEBPACK_IMPORTED_MODULE_6__["useReactiveVar"]; });









/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useApolloClient.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useApolloClient.js ***!
  \********************************************************************/
/*! exports provided: useApolloClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return useApolloClient; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");



function useApolloClient() {
  var client = react__WEBPACK_IMPORTED_MODULE_1__["useContext"](Object(_context_index_js__WEBPACK_IMPORTED_MODULE_2__["getApolloContext"])()).client;
  __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(client, 'No Apollo Client instance can be found. Please ensure that you ' + 'have called `ApolloProvider` higher up in your tree.') : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(client, 33);
  return client;
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useLazyQuery.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useLazyQuery.js ***!
  \*****************************************************************/
/*! exports provided: useLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return useLazyQuery; });
/* harmony import */ var _utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/useBaseQuery.js */ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js");

function useLazyQuery(query, options) {
  return Object(_utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__["useBaseQuery"])(query, options, true);
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useMutation.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useMutation.js ***!
  \****************************************************************/
/*! exports provided: useMutation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return useMutation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/index.js */ "./node_modules/@apollo/client/react/data/index.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");




function useMutation(mutation, options) {
  var context = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(Object(_context_index_js__WEBPACK_IMPORTED_MODULE_3__["getApolloContext"])());

  var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    called: false,
    loading: false
  }),
      result = _a[0],
      setResult = _a[1];

  var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    mutation: mutation
  }) : {
    mutation: mutation
  };
  var mutationDataRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  function getMutationDataRef() {
    if (!mutationDataRef.current) {
      mutationDataRef.current = new _data_index_js__WEBPACK_IMPORTED_MODULE_2__["MutationData"]({
        options: updatedOptions,
        context: context,
        result: result,
        setResult: setResult
      });
    }

    return mutationDataRef.current;
  }

  var mutationData = getMutationDataRef();
  mutationData.setOptions(updatedOptions);
  mutationData.context = context;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return mutationData.afterExecute();
  });
  return mutationData.execute(result);
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useQuery.js":
/*!*************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useQuery.js ***!
  \*************************************************************/
/*! exports provided: useQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return useQuery; });
/* harmony import */ var _utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/useBaseQuery.js */ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js");

function useQuery(query, options) {
  return Object(_utils_useBaseQuery_js__WEBPACK_IMPORTED_MODULE_0__["useBaseQuery"])(query, options, false);
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useReactiveVar.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useReactiveVar.js ***!
  \*******************************************************************/
/*! exports provided: useReactiveVar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReactiveVar", function() { return useReactiveVar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useReactiveVar(rv) {
  var value = rv();
  var setValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value)[1];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var probablySameValue = rv();

    if (value !== probablySameValue) {
      setValue(probablySameValue);
    } else {
      return rv.onNextChange(setValue);
    }
  }, [value]);
  return value;
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/useSubscription.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/useSubscription.js ***!
  \********************************************************************/
/*! exports provided: useSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return useSubscription; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/index.js */ "./node_modules/@apollo/client/react/data/index.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _utils_useAfterFastRefresh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/useAfterFastRefresh.js */ "./node_modules/@apollo/client/react/hooks/utils/useAfterFastRefresh.js");






function useSubscription(subscription, options) {
  var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (x) {
    return x + 1;
  }, 0),
      forceUpdate = _a[1];

  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_context_index_js__WEBPACK_IMPORTED_MODULE_4__["getApolloContext"])());
  var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    subscription: subscription
  }) : {
    subscription: subscription
  };

  var _b = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    loading: !updatedOptions.skip,
    error: void 0,
    data: void 0
  }),
      result = _b[0],
      setResult = _b[1];

  var subscriptionDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  function getSubscriptionDataRef() {
    if (!subscriptionDataRef.current) {
      subscriptionDataRef.current = new _data_index_js__WEBPACK_IMPORTED_MODULE_3__["SubscriptionData"]({
        options: updatedOptions,
        context: context,
        setResult: setResult
      });
    }

    return subscriptionDataRef.current;
  }

  var subscriptionData = getSubscriptionDataRef();
  subscriptionData.setOptions(updatedOptions, true);
  subscriptionData.context = context;

  if (__DEV__) {
    Object(_utils_useAfterFastRefresh_js__WEBPACK_IMPORTED_MODULE_5__["useAfterFastRefresh"])(forceUpdate);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return subscriptionData.afterExecute();
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return function () {
      subscriptionData.cleanup();
      subscriptionDataRef.current = void 0;
    };
  }, []);
  return subscriptionData.execute(result);
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/utils/useAfterFastRefresh.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/utils/useAfterFastRefresh.js ***!
  \******************************************************************************/
/*! exports provided: useAfterFastRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAfterFastRefresh", function() { return useAfterFastRefresh; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useAfterFastRefresh(effectFn) {
  if (__DEV__) {
    var didRefresh_1 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        didRefresh_1.current = true;
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      if (didRefresh_1.current === true) {
        didRefresh_1.current = false;
        effectFn();
      }
    }, []);
  }
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/utils/useBaseQuery.js ***!
  \***********************************************************************/
/*! exports provided: useBaseQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useBaseQuery", function() { return useBaseQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/index.js */ "./node_modules/@apollo/client/react/data/index.js");
/* harmony import */ var _useDeepMemo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useDeepMemo.js */ "./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony import */ var _useAfterFastRefresh_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useAfterFastRefresh.js */ "./node_modules/@apollo/client/react/hooks/utils/useAfterFastRefresh.js");







function useBaseQuery(query, options, lazy) {
  if (lazy === void 0) {
    lazy = false;
  }

  var context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(Object(_context_index_js__WEBPACK_IMPORTED_MODULE_5__["getApolloContext"])());

  var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(function (x) {
    return x + 1;
  }, 0),
      tick = _a[0],
      forceUpdate = _a[1];

  var updatedOptions = options ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, options), {
    query: query
  }) : {
    query: query
  };
  var queryDataRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var queryData = queryDataRef.current || (queryDataRef.current = new _data_index_js__WEBPACK_IMPORTED_MODULE_3__["QueryData"]({
    options: updatedOptions,
    context: context,
    onNewData: function () {
      if (!queryData.ssrInitiated()) {
        Promise.resolve().then(function () {
          return queryDataRef.current && queryDataRef.current.isMounted && forceUpdate();
        });
      } else {
        forceUpdate();
      }
    }
  }));
  queryData.setOptions(updatedOptions);
  queryData.context = context;
  var memo = {
    options: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, updatedOptions), {
      onError: void 0,
      onCompleted: void 0
    }),
    context: context,
    tick: tick
  };
  var result = Object(_useDeepMemo_js__WEBPACK_IMPORTED_MODULE_4__["useDeepMemo"])(function () {
    return lazy ? queryData.executeLazy() : queryData.execute();
  }, memo);
  var queryResult = lazy ? result[1] : result;

  if (__DEV__) {
    Object(_useAfterFastRefresh_js__WEBPACK_IMPORTED_MODULE_6__["useAfterFastRefresh"])(forceUpdate);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return function () {
      queryData.cleanup();
      queryDataRef.current = void 0;
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return queryData.afterExecute({
      lazy: lazy
    });
  }, [queryResult.loading, queryResult.networkStatus, queryResult.error, queryResult.data, queryData.currentObservable]);
  return result;
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/react/hooks/utils/useDeepMemo.js ***!
  \**********************************************************************/
/*! exports provided: useDeepMemo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeepMemo", function() { return useDeepMemo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wry/equality */ "./node_modules/@wry/equality/lib/equality.esm.js");


function useDeepMemo(memoFn, key) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  if (!ref.current || !Object(_wry_equality__WEBPACK_IMPORTED_MODULE_1__["equal"])(key, ref.current.key)) {
    ref.current = {
      key: key,
      value: memoFn()
    };
  }

  return ref.current.value;
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@apollo/client/react/index.js ***!
  \****************************************************/
/*! exports provided: ApolloProvider, ApolloConsumer, getApolloContext, resetApolloContext, useApolloClient, useLazyQuery, useMutation, useQuery, useSubscription, useReactiveVar, DocumentType, operationName, parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _context_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/index.js */ "./node_modules/@apollo/client/react/context/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloProvider", function() { return _context_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApolloConsumer", function() { return _context_index_js__WEBPACK_IMPORTED_MODULE_1__["ApolloConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApolloContext", function() { return _context_index_js__WEBPACK_IMPORTED_MODULE_1__["getApolloContext"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resetApolloContext", function() { return _context_index_js__WEBPACK_IMPORTED_MODULE_1__["resetApolloContext"]; });

/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/index.js */ "./node_modules/@apollo/client/react/hooks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useApolloClient", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useApolloClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLazyQuery", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useLazyQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMutation", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useMutation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useQuery", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSubscription", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReactiveVar", function() { return _hooks_index_js__WEBPACK_IMPORTED_MODULE_2__["useReactiveVar"]; });

/* harmony import */ var _parser_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parser/index.js */ "./node_modules/@apollo/client/react/parser/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return _parser_index_js__WEBPACK_IMPORTED_MODULE_3__["DocumentType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return _parser_index_js__WEBPACK_IMPORTED_MODULE_3__["operationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _parser_index_js__WEBPACK_IMPORTED_MODULE_3__["parser"]; });

/* harmony import */ var _types_types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/types.js */ "./node_modules/@apollo/client/react/types/types.js");
/* empty/unused harmony star reexport */





/***/ }),

/***/ "./node_modules/@apollo/client/react/parser/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@apollo/client/react/parser/index.js ***!
  \***********************************************************/
/*! exports provided: DocumentType, operationName, parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentType", function() { return DocumentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "operationName", function() { return operationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony import */ var _utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utilities/globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");

var DocumentType;

(function (DocumentType) {
  DocumentType[DocumentType["Query"] = 0] = "Query";
  DocumentType[DocumentType["Mutation"] = 1] = "Mutation";
  DocumentType[DocumentType["Subscription"] = 2] = "Subscription";
})(DocumentType || (DocumentType = {}));

var cache = new Map();
function operationName(type) {
  var name;

  switch (type) {
    case DocumentType.Query:
      name = 'Query';
      break;

    case DocumentType.Mutation:
      name = 'Mutation';
      break;

    case DocumentType.Subscription:
      name = 'Subscription';
      break;
  }

  return name;
}
function parser(document) {
  var cached = cache.get(document);
  if (cached) return cached;
  var variables, type, name;
  __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!!document && !!document.kind, "Argument of " + document + " passed to parser was not a valid GraphQL " + "DocumentNode. You may need to use 'graphql-tag' or another method " + "to convert your operation into a document") : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!!document && !!document.kind, 34);
  var fragments = document.definitions.filter(function (x) {
    return x.kind === 'FragmentDefinition';
  });
  var queries = document.definitions.filter(function (x) {
    return x.kind === 'OperationDefinition' && x.operation === 'query';
  });
  var mutations = document.definitions.filter(function (x) {
    return x.kind === 'OperationDefinition' && x.operation === 'mutation';
  });
  var subscriptions = document.definitions.filter(function (x) {
    return x.kind === 'OperationDefinition' && x.operation === 'subscription';
  });
  __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!fragments.length || queries.length || mutations.length || subscriptions.length, "Passing only a fragment to 'graphql' is not yet supported. " + "You must include a query, subscription or mutation as well") : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!fragments.length || queries.length || mutations.length || subscriptions.length, 35);
  __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(queries.length + mutations.length + subscriptions.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + (document + " had " + queries.length + " queries, " + subscriptions.length + " ") + ("subscriptions and " + mutations.length + " mutations. ") + "You can use 'compose' to join multiple operation types to a component") : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(queries.length + mutations.length + subscriptions.length <= 1, 36);
  type = queries.length ? DocumentType.Query : DocumentType.Mutation;
  if (!queries.length && !mutations.length) type = DocumentType.Subscription;
  var definitions = queries.length ? queries : mutations.length ? mutations : subscriptions;
  __DEV__ ? Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(definitions.length === 1, "react-apollo only supports one definition per HOC. " + document + " had " + (definitions.length + " definitions. ") + "You can use 'compose' to join multiple operation types to a component") : Object(_utilities_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(definitions.length === 1, 37);
  var definition = definitions[0];
  variables = definition.variableDefinitions || [];

  if (definition.name && definition.name.kind === 'Name') {
    name = definition.name.value;
  } else {
    name = 'data';
  }

  var payload = {
    name: name,
    type: type,
    variables: variables
  };
  cache.set(document, payload);
  return payload;
}

/***/ }),

/***/ "./node_modules/@apollo/client/react/types/types.js":
/*!**********************************************************!*\
  !*** ./node_modules/@apollo/client/react/types/types.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/arrays.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/arrays.js ***!
  \****************************************************************/
/*! exports provided: isNonEmptyArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return isNonEmptyArray; });
function isNonEmptyArray(value) {
  return Array.isArray(value) && value.length > 0;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/canUse.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/canUse.js ***!
  \****************************************************************/
/*! exports provided: canUseWeakMap, canUseWeakSet, canUseSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseWeakMap", function() { return canUseWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseWeakSet", function() { return canUseWeakSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseSymbol", function() { return canUseSymbol; });
var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' && navigator.product === 'ReactNative');
var canUseWeakSet = typeof WeakSet === 'function';
var canUseSymbol = typeof Symbol === 'function' && typeof Symbol.for === 'function';

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/cloneDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/cloneDeep.js ***!
  \*******************************************************************/
/*! exports provided: cloneDeep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
var toString = Object.prototype.toString;
function cloneDeep(value) {
  return cloneDeepHelper(value);
}

function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]":
      {
        seen = seen || new Map();
        if (seen.has(val)) return seen.get(val);
        var copy_1 = val.slice(0);
        seen.set(val, copy_1);
        copy_1.forEach(function (child, i) {
          copy_1[i] = cloneDeepHelper(child, seen);
        });
        return copy_1;
      }

    case "[object Object]":
      {
        seen = seen || new Map();
        if (seen.has(val)) return seen.get(val);
        var copy_2 = Object.create(Object.getPrototypeOf(val));
        seen.set(val, copy_2);
        Object.keys(val).forEach(function (key) {
          copy_2[key] = cloneDeepHelper(val[key], seen);
        });
        return copy_2;
      }

    default:
      return val;
  }
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/compact.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/compact.js ***!
  \*****************************************************************/
/*! exports provided: compact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
function compact() {
  var objects = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    objects[_i] = arguments[_i];
  }

  var result = Object.create(null);
  objects.forEach(function (obj) {
    if (!obj) return;
    Object.keys(obj).forEach(function (key) {
      var value = obj[key];

      if (value !== void 0) {
        result[key] = value;
      }
    });
  });
  return result;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/errorHandling.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/errorHandling.js ***!
  \***********************************************************************/
/*! exports provided: graphQLResultHasError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
function graphQLResultHasError(result) {
  return result.errors && result.errors.length > 0 || false;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/filterInPlace.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/filterInPlace.js ***!
  \***********************************************************************/
/*! exports provided: filterInPlace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInPlace", function() { return filterInPlace; });
function filterInPlace(array, test, context) {
  var target = 0;
  array.forEach(function (elem, i) {
    if (test.call(this, elem, i, array)) {
      array[target++] = elem;
    }
  }, context);
  array.length = target;
  return array;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/makeUniqueId.js ***!
  \**********************************************************************/
/*! exports provided: makeUniqueId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeUniqueId", function() { return makeUniqueId; });
var prefixCounts = new Map();
function makeUniqueId(prefix) {
  var count = prefixCounts.get(prefix) || 1;
  prefixCounts.set(prefix, count + 1);
  return prefix + ":" + count + ":" + Math.random().toString(36).slice(2);
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js ***!
  \*************************************************************************/
/*! exports provided: maybeDeepFreeze */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");



function deepFreeze(value) {
  var workSet = new Set([value]);
  workSet.forEach(function (obj) {
    if (Object(_objects_js__WEBPACK_IMPORTED_MODULE_1__["isNonNullObject"])(obj) && shallowFreeze(obj) === obj) {
      Object.getOwnPropertyNames(obj).forEach(function (name) {
        if (Object(_objects_js__WEBPACK_IMPORTED_MODULE_1__["isNonNullObject"])(obj[name])) workSet.add(obj[name]);
      });
    }
  });
  return value;
}

function shallowFreeze(obj) {
  if (__DEV__ && !Object.isFrozen(obj)) {
    try {
      Object.freeze(obj);
    } catch (e) {
      if (e instanceof TypeError) return null;
      throw e;
    }
  }

  return obj;
}

function maybeDeepFreeze(obj) {
  if (__DEV__) {
    deepFreeze(obj);
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/mergeDeep.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/mergeDeep.js ***!
  \*******************************************************************/
/*! exports provided: mergeDeep, mergeDeepArray, DeepMerger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return mergeDeepArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepMerger", function() { return DeepMerger; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");


var hasOwnProperty = Object.prototype.hasOwnProperty;
function mergeDeep() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return mergeDeepArray(sources);
}
function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;

  if (count > 1) {
    var merger = new DeepMerger();

    for (var i = 1; i < count; ++i) {
      target = merger.merge(target, sources[i]);
    }
  }

  return target;
}

var defaultReconciler = function (target, source, property) {
  return this.merge(target[property], source[property]);
};

var DeepMerger = function () {
  function DeepMerger(reconciler) {
    if (reconciler === void 0) {
      reconciler = defaultReconciler;
    }

    this.reconciler = reconciler;
    this.isObject = _objects_js__WEBPACK_IMPORTED_MODULE_1__["isNonNullObject"];
    this.pastCopies = new Set();
  }

  DeepMerger.prototype.merge = function (target, source) {
    var _this = this;

    var context = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      context[_i - 2] = arguments[_i];
    }

    if (Object(_objects_js__WEBPACK_IMPORTED_MODULE_1__["isNonNullObject"])(source) && Object(_objects_js__WEBPACK_IMPORTED_MODULE_1__["isNonNullObject"])(target)) {
      Object.keys(source).forEach(function (sourceKey) {
        if (hasOwnProperty.call(target, sourceKey)) {
          var targetValue = target[sourceKey];

          if (source[sourceKey] !== targetValue) {
            var result = _this.reconciler.apply(_this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([target, source, sourceKey], context, false));

            if (result !== targetValue) {
              target = _this.shallowCopyForMerge(target);
              target[sourceKey] = result;
            }
          }
        } else {
          target = _this.shallowCopyForMerge(target);
          target[sourceKey] = source[sourceKey];
        }
      });
      return target;
    }

    return source;
  };

  DeepMerger.prototype.shallowCopyForMerge = function (value) {
    if (Object(_objects_js__WEBPACK_IMPORTED_MODULE_1__["isNonNullObject"])(value) && !this.pastCopies.has(value)) {
      if (Array.isArray(value)) {
        value = value.slice(0);
      } else {
        value = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
          __proto__: Object.getPrototypeOf(value)
        }, value);
      }

      this.pastCopies.add(value);
    }

    return value;
  };

  return DeepMerger;
}();



/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/objects.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/objects.js ***!
  \*****************************************************************/
/*! exports provided: isNonNullObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNonNullObject", function() { return isNonNullObject; });
function isNonNullObject(obj) {
  return obj !== null && typeof obj === 'object';
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js ***!
  \*****************************************************************************/
/*! exports provided: stringifyForDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyForDisplay", function() { return stringifyForDisplay; });
/* harmony import */ var _makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeUniqueId.js */ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js");

function stringifyForDisplay(value) {
  var undefId = Object(_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_0__["makeUniqueId"])("stringifyForDisplay");
  return JSON.stringify(value, function (key, value) {
    return value === void 0 ? undefId : value;
  }).split(JSON.stringify(undefId)).join("<undefined>");
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/DEV.js":
/*!**************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/DEV.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global.js */ "./node_modules/@apollo/client/utilities/globals/global.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");


var __ = "__";
var GLOBAL_KEY = [__, __].join("DEV");

function getDEV() {
  try {
    return Boolean(__DEV__);
  } catch (_a) {
    Object.defineProperty(_global_js__WEBPACK_IMPORTED_MODULE_0__["default"], GLOBAL_KEY, {
      value: Object(_maybe_js__WEBPACK_IMPORTED_MODULE_1__["maybe"])(function () {
        return "development";
      }) !== "production",
      enumerable: false,
      configurable: true,
      writable: true
    });
    return _global_js__WEBPACK_IMPORTED_MODULE_0__["default"][GLOBAL_KEY];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (getDEV());

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/fix-graphql.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/fix-graphql.js ***!
  \**********************************************************************/
/*! exports provided: removeTemporaryGlobals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTemporaryGlobals", function() { return removeTemporaryGlobals; });
/* harmony import */ var ts_invariant_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant/process */ "./node_modules/@apollo/client/node_modules/ts-invariant/process/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");


function removeTemporaryGlobals() {
  return typeof graphql__WEBPACK_IMPORTED_MODULE_1__["Source"] === "function" ? Object(ts_invariant_process__WEBPACK_IMPORTED_MODULE_0__["remove"])() : Object(ts_invariant_process__WEBPACK_IMPORTED_MODULE_0__["remove"])();
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/global.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/global.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["maybe"])(function () {
  return globalThis;
}) || Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["maybe"])(function () {
  return window;
}) || Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["maybe"])(function () {
  return self;
}) || Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["maybe"])(function () {
  return global;
}) || Object(_maybe_js__WEBPACK_IMPORTED_MODULE_0__["maybe"])(function () {
  return Function("return this")();
}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/index.js ***!
  \****************************************************************/
/*! exports provided: DEV, checkDEV, maybe, global, invariant, InvariantError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDEV", function() { return checkDEV; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-invariant */ "./node_modules/@apollo/client/node_modules/ts-invariant/lib/invariant.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invariant", function() { return ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InvariantError", function() { return ts_invariant__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]; });

/* harmony import */ var _DEV_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DEV.js */ "./node_modules/@apollo/client/utilities/globals/DEV.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEV", function() { return _DEV_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _fix_graphql_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fix-graphql.js */ "./node_modules/@apollo/client/utilities/globals/fix-graphql.js");
/* harmony import */ var _maybe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maybe.js */ "./node_modules/@apollo/client/utilities/globals/maybe.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybe", function() { return _maybe_js__WEBPACK_IMPORTED_MODULE_3__["maybe"]; });

/* harmony import */ var _global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global.js */ "./node_modules/@apollo/client/utilities/globals/global.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "global", function() { return _global_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });




function checkDEV() {
  __DEV__ ? Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])("boolean" === typeof _DEV_js__WEBPACK_IMPORTED_MODULE_1__["default"], _DEV_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])("boolean" === typeof _DEV_js__WEBPACK_IMPORTED_MODULE_1__["default"], 38);
}

Object(_fix_graphql_js__WEBPACK_IMPORTED_MODULE_2__["removeTemporaryGlobals"])();



checkDEV();

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/globals/maybe.js":
/*!****************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/globals/maybe.js ***!
  \****************************************************************/
/*! exports provided: maybe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybe", function() { return maybe; });
function maybe(thunk) {
  try {
    return thunk();
  } catch (_a) {}
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/directives.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/directives.js ***!
  \*********************************************************************/
/*! exports provided: shouldInclude, getDirectiveNames, hasDirectives, hasClientExports, getInclusionDirectives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return hasClientExports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInclusionDirectives", function() { return getInclusionDirectives; });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");


function shouldInclude(_a, variables) {
  var directives = _a.directives;

  if (!directives || !directives.length) {
    return true;
  }

  return getInclusionDirectives(directives).every(function (_a) {
    var directive = _a.directive,
        ifArgument = _a.ifArgument;
    var evaledValue = false;

    if (ifArgument.value.kind === 'Variable') {
      evaledValue = variables && variables[ifArgument.value.name.value];
      __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(evaledValue !== void 0, 39);
    } else {
      evaledValue = ifArgument.value.value;
    }

    return directive.name.value === 'skip' ? !evaledValue : evaledValue;
  });
}
function getDirectiveNames(root) {
  var names = [];
  Object(graphql__WEBPACK_IMPORTED_MODULE_1__["visit"])(root, {
    Directive: function (node) {
      names.push(node.name.value);
    }
  });
  return names;
}
function hasDirectives(names, root) {
  return getDirectiveNames(root).some(function (name) {
    return names.indexOf(name) > -1;
  });
}
function hasClientExports(document) {
  return document && hasDirectives(['client'], document) && hasDirectives(['export'], document);
}

function isInclusionDirective(_a) {
  var value = _a.name.value;
  return value === 'skip' || value === 'include';
}

function getInclusionDirectives(directives) {
  var result = [];

  if (directives && directives.length) {
    directives.forEach(function (directive) {
      if (!isInclusionDirective(directive)) return;
      var directiveArguments = directive.arguments;
      var directiveName = directive.name.value;
      __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(directiveArguments && directiveArguments.length === 1, 40);
      var ifArgument = directiveArguments[0];
      __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(ifArgument.name && ifArgument.name.value === 'if', 41);
      var ifValue = ifArgument.value;
      __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), 42);
      result.push({
        directive: directive,
        ifArgument: ifArgument
      });
    });
  }

  return result;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/fragments.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/fragments.js ***!
  \********************************************************************/
/*! exports provided: getFragmentQueryDocument, createFragmentMap, getFragmentFromSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentFromSelection", function() { return getFragmentFromSelection; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");


function getFragmentQueryDocument(document, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document.definitions.forEach(function (definition) {
    if (definition.kind === 'OperationDefinition') {
      throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " + 'No operations are allowed when using a fragment as a query. Only fragments are allowed.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_1__["InvariantError"](43);
    }

    if (definition.kind === 'FragmentDefinition') {
      fragments.push(definition);
    }
  });

  if (typeof actualFragmentName === 'undefined') {
    __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragments.length === 1, 44);
    actualFragmentName = fragments[0].name.value;
  }

  var query = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, document), {
    definitions: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([{
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{
          kind: 'FragmentSpread',
          name: {
            kind: 'Name',
            value: actualFragmentName
          }
        }]
      }
    }], document.definitions, true)
  });

  return query;
}
function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }

  var symTable = {};
  fragments.forEach(function (fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}
function getFragmentFromSelection(selection, fragmentMap) {
  switch (selection.kind) {
    case 'InlineFragment':
      return selection;

    case 'FragmentSpread':
      {
        var fragment = fragmentMap && fragmentMap[selection.name.value];
        __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragment, "No fragment named " + selection.name.value + ".") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragment, 45);
        return fragment;
      }

    default:
      return null;
  }
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/getFromAST.js ***!
  \*********************************************************************/
/*! exports provided: checkDocument, getOperationDefinition, getOperationName, getFragmentDefinitions, getQueryDefinition, getFragmentDefinition, getMainDefinition, getDefaultValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");


function checkDocument(doc) {
  __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc && doc.kind === 'Document', 46);
  var operations = doc.definitions.filter(function (d) {
    return d.kind !== 'FragmentDefinition';
  }).map(function (definition) {
    if (definition.kind !== 'OperationDefinition') {
      throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"") : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"](47);
    }

    return definition;
  });
  __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(operations.length <= 1, 48);
  return doc;
}
function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition';
  })[0];
}
function getOperationName(doc) {
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition' && definition.name;
  }).map(function (x) {
    return x.name.value;
  })[0] || null;
}
function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'FragmentDefinition';
  });
}
function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
  __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(queryDef && queryDef.operation === 'query', 'Must contain a query definition.') : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(queryDef && queryDef.operation === 'query', 49);
  return queryDef;
}
function getFragmentDefinition(doc) {
  __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql") : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc.kind === 'Document', 50);
  __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc.definitions.length <= 1, 'Fragment must have exactly one definition.') : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(doc.definitions.length <= 1, 51);
  var fragmentDef = doc.definitions[0];
  __DEV__ ? Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.') : Object(_globals_index_js__WEBPACK_IMPORTED_MODULE_0__["invariant"])(fragmentDef.kind === 'FragmentDefinition', 52);
  return fragmentDef;
}
function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;

  for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
    var definition = _a[_i];

    if (definition.kind === 'OperationDefinition') {
      var operation = definition.operation;

      if (operation === 'query' || operation === 'mutation' || operation === 'subscription') {
        return definition;
      }
    }

    if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }

  if (fragmentDefinition) {
    return fragmentDefinition;
  }

  throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"](53);
}
function getDefaultValues(definition) {
  var defaultValues = Object.create(null);
  var defs = definition && definition.variableDefinitions;

  if (defs && defs.length) {
    defs.forEach(function (def) {
      if (def.defaultValue) {
        Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_1__["valueToObjectRepresentation"])(defaultValues, def.variable.name, def.defaultValue);
      }
    });
  }

  return defaultValues;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/storeUtils.js ***!
  \*********************************************************************/
/*! exports provided: makeReference, isReference, isDocumentNode, valueToObjectRepresentation, storeKeyNameFromField, getStoreKeyName, argumentsObjectFromField, resultKeyNameFromField, getTypenameFromResult, isField, isInlineFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return makeReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return isReference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDocumentNode", function() { return isDocumentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTypenameFromResult", function() { return getTypenameFromResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var _common_objects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");



function makeReference(id) {
  return {
    __ref: String(id)
  };
}
function isReference(obj) {
  return Boolean(obj && typeof obj === 'object' && typeof obj.__ref === 'string');
}
function isDocumentNode(value) {
  return Object(_common_objects_js__WEBPACK_IMPORTED_MODULE_1__["isNonNullObject"])(value) && value.kind === "Document" && Array.isArray(value.definitions);
}

function isStringValue(value) {
  return value.kind === 'StringValue';
}

function isBooleanValue(value) {
  return value.kind === 'BooleanValue';
}

function isIntValue(value) {
  return value.kind === 'IntValue';
}

function isFloatValue(value) {
  return value.kind === 'FloatValue';
}

function isVariable(value) {
  return value.kind === 'Variable';
}

function isObjectValue(value) {
  return value.kind === 'ObjectValue';
}

function isListValue(value) {
  return value.kind === 'ListValue';
}

function isEnumValue(value) {
  return value.kind === 'EnumValue';
}

function isNullValue(value) {
  return value.kind === 'NullValue';
}

function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function (obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function (listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw __DEV__ ? new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"]("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" + 'is not supported. Use variables instead of inline arguments to ' + 'overcome this limitation.') : new _globals_index_js__WEBPACK_IMPORTED_MODULE_0__["InvariantError"](54);
  }
}
function storeKeyNameFromField(field, variables) {
  var directivesObj = null;

  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function (directive) {
      directivesObj[directive.name.value] = {};

      if (directive.arguments) {
        directive.arguments.forEach(function (_a) {
          var name = _a.name,
              value = _a.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }

  var argObj = null;

  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function (_a) {
      var name = _a.name,
          value = _a.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }

  return getStoreKeyName(field.name.value, argObj, directivesObj);
}
var KNOWN_DIRECTIVES = ['connection', 'include', 'skip', 'client', 'rest', 'export'];
var getStoreKeyName = Object.assign(function (fieldName, args, directives) {
  if (args && directives && directives['connection'] && directives['connection']['key']) {
    if (directives['connection']['filter'] && directives['connection']['filter'].length > 0) {
      var filterKeys = directives['connection']['filter'] ? directives['connection']['filter'] : [];
      filterKeys.sort();
      var filteredArgs_1 = {};
      filterKeys.forEach(function (key) {
        filteredArgs_1[key] = args[key];
      });
      return directives['connection']['key'] + "(" + stringify(filteredArgs_1) + ")";
    } else {
      return directives['connection']['key'];
    }
  }

  var completeFieldName = fieldName;

  if (args) {
    var stringifiedArgs = stringify(args);
    completeFieldName += "(" + stringifiedArgs + ")";
  }

  if (directives) {
    Object.keys(directives).forEach(function (key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;

      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@" + key + "(" + stringify(directives[key]) + ")";
      } else {
        completeFieldName += "@" + key;
      }
    });
  }

  return completeFieldName;
}, {
  setStringify: function (s) {
    var previous = stringify;
    stringify = s;
    return previous;
  }
});

var stringify = function defaultStringify(value) {
  return JSON.stringify(value, stringifyReplacer);
};

function stringifyReplacer(_key, value) {
  if (Object(_common_objects_js__WEBPACK_IMPORTED_MODULE_1__["isNonNullObject"])(value) && !Array.isArray(value)) {
    value = Object.keys(value).sort().reduce(function (copy, key) {
      copy[key] = value[key];
      return copy;
    }, {});
  }

  return value;
}

function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function (_a) {
      var name = _a.name,
          value = _a.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }

  return null;
}
function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}
function getTypenameFromResult(result, selectionSet, fragmentMap) {
  if (typeof result.__typename === 'string') {
    return result.__typename;
  }

  for (var _i = 0, _a = selectionSet.selections; _i < _a.length; _i++) {
    var selection = _a[_i];

    if (isField(selection)) {
      if (selection.name.value === '__typename') {
        return result[resultKeyNameFromField(selection)];
      }
    } else {
      var typename = getTypenameFromResult(result, Object(_fragments_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentFromSelection"])(selection, fragmentMap).selectionSet, fragmentMap);

      if (typeof typename === 'string') {
        return typename;
      }
    }
  }
}
function isField(selection) {
  return selection.kind === 'Field';
}
function isInlineFragment(selection) {
  return selection.kind === 'InlineFragment';
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/graphql/transform.js":
/*!********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/graphql/transform.js ***!
  \********************************************************************/
/*! exports provided: removeDirectivesFromDocument, addTypenameToDocument, removeConnectionDirectiveFromDocument, removeArgumentsFromDocument, removeFragmentSpreadFromDocument, buildQueryFromSelectionSet, removeClientSetsFromDocument */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return removeArgumentsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return removeFragmentSpreadFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return buildQueryFromSelectionSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return removeClientSetsFromDocument; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql */ "./node_modules/graphql/index.mjs");
/* harmony import */ var _getFromAST_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony import */ var _common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/filterInPlace.js */ "./node_modules/@apollo/client/utilities/common/filterInPlace.js");
/* harmony import */ var _storeUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony import */ var _fragments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");







var TYPENAME_FIELD = {
  kind: 'Field',
  name: {
    kind: 'Name',
    value: '__typename'
  }
};

function isEmpty(op, fragments) {
  return op.selectionSet.selections.every(function (selection) {
    return selection.kind === 'FragmentSpread' && isEmpty(fragments[selection.name.value], fragments);
  });
}

function nullIfDocIsEmpty(doc) {
  return isEmpty(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getOperationDefinition"])(doc) || Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinition"])(doc), Object(_fragments_js__WEBPACK_IMPORTED_MODULE_6__["createFragmentMap"])(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"])(doc))) ? null : doc;
}

function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function (dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}

function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty(Object(graphql__WEBPACK_IMPORTED_MODULE_2__["visit"])(doc, {
    Variable: {
      enter: function (node, _key, parent) {
        if (parent.kind !== 'VariableDefinition') {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function (node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function (directive) {
            return directive.remove;
          });

          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function (arg) {
                if (arg.value.kind === 'Variable') {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }

            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }

            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function (node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function (node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));

  if (modifiedDoc && Object(_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__["filterInPlace"])(variablesToRemove, function (v) {
    return !!v.name && !variablesInUse[v.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }

  if (modifiedDoc && Object(_common_filterInPlace_js__WEBPACK_IMPORTED_MODULE_4__["filterInPlace"])(fragmentSpreadsToRemove, function (fs) {
    return !!fs.name && !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }

  return modifiedDoc;
}
var addTypenameToDocument = Object.assign(function (doc) {
  return Object(graphql__WEBPACK_IMPORTED_MODULE_2__["visit"])(Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["checkDocument"])(doc), {
    SelectionSet: {
      enter: function (node, _key, parent) {
        if (parent && parent.kind === 'OperationDefinition') {
          return;
        }

        var selections = node.selections;

        if (!selections) {
          return;
        }

        var skip = selections.some(function (selection) {
          return Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(selection) && (selection.name.value === '__typename' || selection.name.value.lastIndexOf('__', 0) === 0);
        });

        if (skip) {
          return;
        }

        var field = parent;

        if (Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(field) && field.directives && field.directives.some(function (d) {
          return d.name.value === 'export';
        })) {
          return;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), {
          selections: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], selections, true), [TYPENAME_FIELD], false)
        });
      }
    }
  });
}, {
  added: function (field) {
    return field === TYPENAME_FIELD;
  }
});
var connectionRemoveConfig = {
  test: function (directive) {
    var willRemove = directive.name.value === 'connection';

    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function (arg) {
        return arg.name.value === 'key';
      })) {
        __DEV__ && _globals_index_js__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn('Removing an @connection directive even though it does not have a key. ' + 'You may want to use the key parameter to specify a store key.');
      }
    }

    return willRemove;
  }
};
function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["checkDocument"])(doc));
}

function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
  if (nestedCheck === void 0) {
    nestedCheck = true;
  }

  return !!selectionSet && selectionSet.selections && selectionSet.selections.some(function (selection) {
    return hasDirectivesInSelection(directives, selection, nestedCheck);
  });
}

function hasDirectivesInSelection(directives, selection, nestedCheck) {
  if (nestedCheck === void 0) {
    nestedCheck = true;
  }

  if (!Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(selection)) {
    return true;
  }

  if (!selection.directives) {
    return false;
  }

  return selection.directives.some(getDirectiveMatcher(directives)) || nestedCheck && hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck);
}

function getArgumentMatcher(config) {
  return function argumentMatcher(argument) {
    return config.some(function (aConfig) {
      return argument.value && argument.value.kind === 'Variable' && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}

function removeArgumentsFromDocument(config, doc) {
  var argMatcher = getArgumentMatcher(config);
  return nullIfDocIsEmpty(Object(graphql__WEBPACK_IMPORTED_MODULE_2__["visit"])(doc, {
    OperationDefinition: {
      enter: function (node) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), {
          variableDefinitions: node.variableDefinitions ? node.variableDefinitions.filter(function (varDef) {
            return !config.some(function (arg) {
              return arg.name === varDef.variable.name.value;
            });
          }) : []
        });
      }
    },
    Field: {
      enter: function (node) {
        var shouldRemoveField = config.some(function (argConfig) {
          return argConfig.remove;
        });

        if (shouldRemoveField) {
          var argMatchCount_1 = 0;

          if (node.arguments) {
            node.arguments.forEach(function (arg) {
              if (argMatcher(arg)) {
                argMatchCount_1 += 1;
              }
            });
          }

          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function (node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}
function removeFragmentSpreadFromDocument(config, doc) {
  function enter(node) {
    if (config.some(function (def) {
      return def.name === node.name.value;
    })) {
      return null;
    }
  }

  return nullIfDocIsEmpty(Object(graphql__WEBPACK_IMPORTED_MODULE_2__["visit"])(doc, {
    FragmentSpread: {
      enter: enter
    },
    FragmentDefinition: {
      enter: enter
    }
  }));
}

function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function (selection) {
    if ((Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(selection) || Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isInlineFragment"])(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === 'FragmentSpread') {
      allFragments.push(selection);
    }
  });
  return allFragments;
}

function buildQueryFromSelectionSet(document) {
  var definition = Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getMainDefinition"])(document);
  var definitionOperation = definition.operation;

  if (definitionOperation === 'query') {
    return document;
  }

  var modifiedDoc = Object(graphql__WEBPACK_IMPORTED_MODULE_2__["visit"])(document, {
    OperationDefinition: {
      enter: function (node) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, node), {
          operation: 'query'
        });
      }
    }
  });
  return modifiedDoc;
}
function removeClientSetsFromDocument(document) {
  Object(_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["checkDocument"])(document);
  var modifiedDoc = removeDirectivesFromDocument([{
    test: function (directive) {
      return directive.name.value === 'client';
    },
    remove: true
  }], document);

  if (modifiedDoc) {
    modifiedDoc = Object(graphql__WEBPACK_IMPORTED_MODULE_2__["visit"])(modifiedDoc, {
      FragmentDefinition: {
        enter: function (node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
              return Object(_storeUtils_js__WEBPACK_IMPORTED_MODULE_5__["isField"])(selection) && selection.name.value === '__typename';
            });

            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }

  return modifiedDoc;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/index.js ***!
  \********************************************************/
/*! exports provided: DEV, maybe, shouldInclude, hasDirectives, hasClientExports, getDirectiveNames, getInclusionDirectives, createFragmentMap, getFragmentQueryDocument, getFragmentFromSelection, checkDocument, getOperationDefinition, getOperationName, getFragmentDefinitions, getQueryDefinition, getFragmentDefinition, getMainDefinition, getDefaultValues, makeReference, isDocumentNode, isReference, isField, isInlineFragment, valueToObjectRepresentation, storeKeyNameFromField, argumentsObjectFromField, resultKeyNameFromField, getStoreKeyName, getTypenameFromResult, addTypenameToDocument, buildQueryFromSelectionSet, removeDirectivesFromDocument, removeConnectionDirectiveFromDocument, removeArgumentsFromDocument, removeFragmentSpreadFromDocument, removeClientSetsFromDocument, concatPagination, offsetLimitPagination, relayStylePagination, Observable, mergeDeep, mergeDeepArray, DeepMerger, cloneDeep, maybeDeepFreeze, iterateObserversSafely, asyncMap, Concast, fixObservableSubclass, isNonEmptyArray, isNonNullObject, graphQLResultHasError, canUseWeakMap, canUseWeakSet, canUseSymbol, compact, makeUniqueId, stringifyForDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _globals_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globals/index.js */ "./node_modules/@apollo/client/utilities/globals/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEV", function() { return _globals_index_js__WEBPACK_IMPORTED_MODULE_0__["DEV"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybe", function() { return _globals_index_js__WEBPACK_IMPORTED_MODULE_0__["maybe"]; });

/* harmony import */ var _graphql_directives_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphql/directives.js */ "./node_modules/@apollo/client/utilities/graphql/directives.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_1__["shouldInclude"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_1__["hasDirectives"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_1__["hasClientExports"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_1__["getDirectiveNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInclusionDirectives", function() { return _graphql_directives_js__WEBPACK_IMPORTED_MODULE_1__["getInclusionDirectives"]; });

/* harmony import */ var _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphql/fragments.js */ "./node_modules/@apollo/client/utilities/graphql/fragments.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__["createFragmentMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentQueryDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentFromSelection", function() { return _graphql_fragments_js__WEBPACK_IMPORTED_MODULE_2__["getFragmentFromSelection"]; });

/* harmony import */ var _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./graphql/getFromAST.js */ "./node_modules/@apollo/client/utilities/graphql/getFromAST.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["checkDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getOperationDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getOperationName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinitions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getQueryDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getFragmentDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getMainDefinition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return _graphql_getFromAST_js__WEBPACK_IMPORTED_MODULE_3__["getDefaultValues"]; });

/* harmony import */ var _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graphql/storeUtils.js */ "./node_modules/@apollo/client/utilities/graphql/storeUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeReference", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["makeReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDocumentNode", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["isDocumentNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReference", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["isReference"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["isField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["isInlineFragment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["valueToObjectRepresentation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["storeKeyNameFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["argumentsObjectFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["resultKeyNameFromField"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["getStoreKeyName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTypenameFromResult", function() { return _graphql_storeUtils_js__WEBPACK_IMPORTED_MODULE_4__["getTypenameFromResult"]; });

/* harmony import */ var _graphql_transform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql/transform.js */ "./node_modules/@apollo/client/utilities/graphql/transform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_5__["addTypenameToDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_5__["buildQueryFromSelectionSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_5__["removeDirectivesFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_5__["removeConnectionDirectiveFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_5__["removeArgumentsFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_5__["removeFragmentSpreadFromDocument"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return _graphql_transform_js__WEBPACK_IMPORTED_MODULE_5__["removeClientSetsFromDocument"]; });

/* harmony import */ var _policies_pagination_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policies/pagination.js */ "./node_modules/@apollo/client/utilities/policies/pagination.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concatPagination", function() { return _policies_pagination_js__WEBPACK_IMPORTED_MODULE_6__["concatPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "offsetLimitPagination", function() { return _policies_pagination_js__WEBPACK_IMPORTED_MODULE_6__["offsetLimitPagination"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relayStylePagination", function() { return _policies_pagination_js__WEBPACK_IMPORTED_MODULE_6__["relayStylePagination"]; });

/* harmony import */ var _observables_Observable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./observables/Observable.js */ "./node_modules/@apollo/client/utilities/observables/Observable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return _observables_Observable_js__WEBPACK_IMPORTED_MODULE_7__["Observable"]; });

/* harmony import */ var _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_8__["mergeDeep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_8__["mergeDeepArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeepMerger", function() { return _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_8__["DeepMerger"]; });

/* harmony import */ var _common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/cloneDeep.js */ "./node_modules/@apollo/client/utilities/common/cloneDeep.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return _common_cloneDeep_js__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"]; });

/* harmony import */ var _common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./common/maybeDeepFreeze.js */ "./node_modules/@apollo/client/utilities/common/maybeDeepFreeze.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return _common_maybeDeepFreeze_js__WEBPACK_IMPORTED_MODULE_10__["maybeDeepFreeze"]; });

/* harmony import */ var _observables_iteration_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./observables/iteration.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "iterateObserversSafely", function() { return _observables_iteration_js__WEBPACK_IMPORTED_MODULE_11__["iterateObserversSafely"]; });

/* harmony import */ var _observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./observables/asyncMap.js */ "./node_modules/@apollo/client/utilities/observables/asyncMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "asyncMap", function() { return _observables_asyncMap_js__WEBPACK_IMPORTED_MODULE_12__["asyncMap"]; });

/* harmony import */ var _observables_Concast_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./observables/Concast.js */ "./node_modules/@apollo/client/utilities/observables/Concast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Concast", function() { return _observables_Concast_js__WEBPACK_IMPORTED_MODULE_13__["Concast"]; });

/* harmony import */ var _observables_subclassing_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./observables/subclassing.js */ "./node_modules/@apollo/client/utilities/observables/subclassing.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fixObservableSubclass", function() { return _observables_subclassing_js__WEBPACK_IMPORTED_MODULE_14__["fixObservableSubclass"]; });

/* harmony import */ var _common_arrays_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./common/arrays.js */ "./node_modules/@apollo/client/utilities/common/arrays.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonEmptyArray", function() { return _common_arrays_js__WEBPACK_IMPORTED_MODULE_15__["isNonEmptyArray"]; });

/* harmony import */ var _common_objects_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./common/objects.js */ "./node_modules/@apollo/client/utilities/common/objects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNonNullObject", function() { return _common_objects_js__WEBPACK_IMPORTED_MODULE_16__["isNonNullObject"]; });

/* harmony import */ var _common_errorHandling_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./common/errorHandling.js */ "./node_modules/@apollo/client/utilities/common/errorHandling.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return _common_errorHandling_js__WEBPACK_IMPORTED_MODULE_17__["graphQLResultHasError"]; });

/* harmony import */ var _common_canUse_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./common/canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canUseWeakMap", function() { return _common_canUse_js__WEBPACK_IMPORTED_MODULE_18__["canUseWeakMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canUseWeakSet", function() { return _common_canUse_js__WEBPACK_IMPORTED_MODULE_18__["canUseWeakSet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "canUseSymbol", function() { return _common_canUse_js__WEBPACK_IMPORTED_MODULE_18__["canUseSymbol"]; });

/* harmony import */ var _common_compact_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./common/compact.js */ "./node_modules/@apollo/client/utilities/common/compact.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _common_compact_js__WEBPACK_IMPORTED_MODULE_19__["compact"]; });

/* harmony import */ var _common_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./common/makeUniqueId.js */ "./node_modules/@apollo/client/utilities/common/makeUniqueId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeUniqueId", function() { return _common_makeUniqueId_js__WEBPACK_IMPORTED_MODULE_20__["makeUniqueId"]; });

/* harmony import */ var _common_stringifyForDisplay_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./common/stringifyForDisplay.js */ "./node_modules/@apollo/client/utilities/common/stringifyForDisplay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringifyForDisplay", function() { return _common_stringifyForDisplay_js__WEBPACK_IMPORTED_MODULE_21__["stringifyForDisplay"]; });

/* harmony import */ var _types_IsStrictlyAny_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./types/IsStrictlyAny.js */ "./node_modules/@apollo/client/utilities/types/IsStrictlyAny.js");
/* empty/unused harmony star reexport */























/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/Concast.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/Concast.js ***!
  \**********************************************************************/
/*! exports provided: Concast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Concast", function() { return Concast; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/@apollo/client/utilities/observables/Observable.js");
/* harmony import */ var _iteration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./iteration.js */ "./node_modules/@apollo/client/utilities/observables/iteration.js");
/* harmony import */ var _subclassing_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subclassing.js */ "./node_modules/@apollo/client/utilities/observables/subclassing.js");





function isPromiseLike(value) {
  return value && typeof value.then === "function";
}

var Concast = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Concast, _super);

  function Concast(sources) {
    var _this = _super.call(this, function (observer) {
      _this.addObserver(observer);

      return function () {
        return _this.removeObserver(observer);
      };
    }) || this;

    _this.observers = new Set();
    _this.addCount = 0;
    _this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    _this.handlers = {
      next: function (result) {
        if (_this.sub !== null) {
          _this.latest = ["next", result];
          Object(_iteration_js__WEBPACK_IMPORTED_MODULE_2__["iterateObserversSafely"])(_this.observers, "next", result);
        }
      },
      error: function (error) {
        var sub = _this.sub;

        if (sub !== null) {
          if (sub) setTimeout(function () {
            return sub.unsubscribe();
          });
          _this.sub = null;
          _this.latest = ["error", error];

          _this.reject(error);

          Object(_iteration_js__WEBPACK_IMPORTED_MODULE_2__["iterateObserversSafely"])(_this.observers, "error", error);
        }
      },
      complete: function () {
        if (_this.sub !== null) {
          var value = _this.sources.shift();

          if (!value) {
            _this.sub = null;

            if (_this.latest && _this.latest[0] === "next") {
              _this.resolve(_this.latest[1]);
            } else {
              _this.resolve();
            }

            Object(_iteration_js__WEBPACK_IMPORTED_MODULE_2__["iterateObserversSafely"])(_this.observers, "complete");
          } else if (isPromiseLike(value)) {
            value.then(function (obs) {
              return _this.sub = obs.subscribe(_this.handlers);
            });
          } else {
            _this.sub = value.subscribe(_this.handlers);
          }
        }
      }
    };

    _this.cancel = function (reason) {
      _this.reject(reason);

      _this.sources = [];

      _this.handlers.complete();
    };

    _this.promise.catch(function (_) {});

    if (typeof sources === "function") {
      sources = [new _Observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"](sources)];
    }

    if (isPromiseLike(sources)) {
      sources.then(function (iterable) {
        return _this.start(iterable);
      }, _this.handlers.error);
    } else {
      _this.start(sources);
    }

    return _this;
  }

  Concast.prototype.start = function (sources) {
    if (this.sub !== void 0) return;
    this.sources = Array.from(sources);
    this.handlers.complete();
  };

  Concast.prototype.deliverLastMessage = function (observer) {
    if (this.latest) {
      var nextOrError = this.latest[0];
      var method = observer[nextOrError];

      if (method) {
        method.call(observer, this.latest[1]);
      }

      if (this.sub === null && nextOrError === "next" && observer.complete) {
        observer.complete();
      }
    }
  };

  Concast.prototype.addObserver = function (observer) {
    if (!this.observers.has(observer)) {
      this.deliverLastMessage(observer);
      this.observers.add(observer);
      ++this.addCount;
    }
  };

  Concast.prototype.removeObserver = function (observer, quietly) {
    if (this.observers.delete(observer) && --this.addCount < 1 && !quietly) {
      this.handlers.error(new Error("Observable cancelled prematurely"));
    }
  };

  Concast.prototype.cleanup = function (callback) {
    var _this = this;

    var called = false;

    var once = function () {
      if (!called) {
        called = true;

        _this.observers.delete(observer);

        callback();
      }
    };

    var observer = {
      next: once,
      error: once,
      complete: once
    };
    var count = this.addCount;
    this.addObserver(observer);
    this.addCount = count;
  };

  return Concast;
}(_Observable_js__WEBPACK_IMPORTED_MODULE_1__["Observable"]);


Object(_subclassing_js__WEBPACK_IMPORTED_MODULE_3__["fixObservableSubclass"])(Concast);

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/Observable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/Observable.js ***!
  \*************************************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "./node_modules/@apollo/client/node_modules/zen-observable-ts/module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });

/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! symbol-observable */ "./node_modules/@apollo/client/node_modules/symbol-observable/es/index.js");


var prototype = zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype;
var fakeObsSymbol = '@@observable';

if (!prototype[fakeObsSymbol]) {
  prototype[fakeObsSymbol] = function () {
    return this;
  };
}



/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/asyncMap.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/asyncMap.js ***!
  \***********************************************************************/
/*! exports provided: asyncMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asyncMap", function() { return asyncMap; });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/@apollo/client/utilities/observables/Observable.js");

function asyncMap(observable, mapFn, catchFn) {
  return new _Observable_js__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
    var next = observer.next,
        error = observer.error,
        complete = observer.complete;
    var activeCallbackCount = 0;
    var completed = false;
    var promiseQueue = {
      then: function (callback) {
        return new Promise(function (resolve) {
          return resolve(callback());
        });
      }
    };

    function makeCallback(examiner, delegate) {
      if (examiner) {
        return function (arg) {
          ++activeCallbackCount;

          var both = function () {
            return examiner(arg);
          };

          promiseQueue = promiseQueue.then(both, both).then(function (result) {
            --activeCallbackCount;
            next && next.call(observer, result);

            if (completed) {
              handler.complete();
            }
          }, function (error) {
            --activeCallbackCount;
            throw error;
          }).catch(function (caught) {
            error && error.call(observer, caught);
          });
        };
      } else {
        return function (arg) {
          return delegate && delegate.call(observer, arg);
        };
      }
    }

    var handler = {
      next: makeCallback(mapFn, next),
      error: makeCallback(catchFn, error),
      complete: function () {
        completed = true;

        if (!activeCallbackCount) {
          complete && complete.call(observer);
        }
      }
    };
    var sub = observable.subscribe(handler);
    return function () {
      return sub.unsubscribe();
    };
  });
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/iteration.js":
/*!************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/iteration.js ***!
  \************************************************************************/
/*! exports provided: iterateObserversSafely */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterateObserversSafely", function() { return iterateObserversSafely; });
function iterateObserversSafely(observers, method, argument) {
  var observersWithMethod = [];
  observers.forEach(function (obs) {
    return obs[method] && observersWithMethod.push(obs);
  });
  observersWithMethod.forEach(function (obs) {
    return obs[method](argument);
  });
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/observables/subclassing.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/observables/subclassing.js ***!
  \**************************************************************************/
/*! exports provided: fixObservableSubclass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fixObservableSubclass", function() { return fixObservableSubclass; });
/* harmony import */ var _Observable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Observable.js */ "./node_modules/@apollo/client/utilities/observables/Observable.js");
/* harmony import */ var _common_canUse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/canUse.js */ "./node_modules/@apollo/client/utilities/common/canUse.js");


function fixObservableSubclass(subclass) {
  function set(key) {
    Object.defineProperty(subclass, key, {
      value: _Observable_js__WEBPACK_IMPORTED_MODULE_0__["Observable"]
    });
  }

  if (_common_canUse_js__WEBPACK_IMPORTED_MODULE_1__["canUseSymbol"] && Symbol.species) {
    set(Symbol.species);
  }

  set("@@species");
  return subclass;
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/policies/pagination.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/policies/pagination.js ***!
  \**********************************************************************/
/*! exports provided: concatPagination, offsetLimitPagination, relayStylePagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatPagination", function() { return concatPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offsetLimitPagination", function() { return offsetLimitPagination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relayStylePagination", function() { return relayStylePagination; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/mergeDeep.js */ "./node_modules/@apollo/client/utilities/common/mergeDeep.js");



function concatPagination(keyArgs) {
  if (keyArgs === void 0) {
    keyArgs = false;
  }

  return {
    keyArgs: keyArgs,
    merge: function (existing, incoming) {
      return existing ? Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], existing, true), incoming, true) : incoming;
    }
  };
}
function offsetLimitPagination(keyArgs) {
  if (keyArgs === void 0) {
    keyArgs = false;
  }

  return {
    keyArgs: keyArgs,
    merge: function (existing, incoming, _a) {
      var args = _a.args;
      var merged = existing ? existing.slice(0) : [];

      if (args) {
        var _b = args.offset,
            offset = _b === void 0 ? 0 : _b;

        for (var i = 0; i < incoming.length; ++i) {
          merged[offset + i] = incoming[i];
        }
      } else {
        merged.push.apply(merged, incoming);
      }

      return merged;
    }
  };
}
function relayStylePagination(keyArgs) {
  if (keyArgs === void 0) {
    keyArgs = false;
  }

  return {
    keyArgs: keyArgs,
    read: function (existing, _a) {
      var canRead = _a.canRead,
          readField = _a.readField;
      if (!existing) return existing;
      var edges = [];
      var firstEdgeCursor = "";
      var lastEdgeCursor = "";
      existing.edges.forEach(function (edge) {
        if (canRead(readField("node", edge))) {
          edges.push(edge);

          if (edge.cursor) {
            firstEdgeCursor = firstEdgeCursor || edge.cursor || "";
            lastEdgeCursor = edge.cursor || lastEdgeCursor;
          }
        }
      });

      var _b = existing.pageInfo || {},
          startCursor = _b.startCursor,
          endCursor = _b.endCursor;

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getExtras(existing)), {
        edges: edges,
        pageInfo: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, existing.pageInfo), {
          startCursor: startCursor || firstEdgeCursor,
          endCursor: endCursor || lastEdgeCursor
        })
      });
    },
    merge: function (existing, incoming, _a) {
      var args = _a.args,
          isReference = _a.isReference,
          readField = _a.readField;

      if (!existing) {
        existing = makeEmptyData();
      }

      if (!incoming) {
        return existing;
      }

      var incomingEdges = incoming.edges ? incoming.edges.map(function (edge) {
        if (isReference(edge = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, edge))) {
          edge.cursor = readField("cursor", edge);
        }

        return edge;
      }) : [];

      if (incoming.pageInfo) {
        var pageInfo_1 = incoming.pageInfo;
        var startCursor = pageInfo_1.startCursor,
            endCursor = pageInfo_1.endCursor;
        var firstEdge = incomingEdges[0];
        var lastEdge = incomingEdges[incomingEdges.length - 1];

        if (firstEdge && startCursor) {
          firstEdge.cursor = startCursor;
        }

        if (lastEdge && endCursor) {
          lastEdge.cursor = endCursor;
        }

        var firstCursor = firstEdge && firstEdge.cursor;

        if (firstCursor && !startCursor) {
          incoming = Object(_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(incoming, {
            pageInfo: {
              startCursor: firstCursor
            }
          });
        }

        var lastCursor = lastEdge && lastEdge.cursor;

        if (lastCursor && !endCursor) {
          incoming = Object(_common_mergeDeep_js__WEBPACK_IMPORTED_MODULE_1__["mergeDeep"])(incoming, {
            pageInfo: {
              endCursor: lastCursor
            }
          });
        }
      }

      var prefix = existing.edges;
      var suffix = [];

      if (args && args.after) {
        var index = prefix.findIndex(function (edge) {
          return edge.cursor === args.after;
        });

        if (index >= 0) {
          prefix = prefix.slice(0, index + 1);
        }
      } else if (args && args.before) {
        var index = prefix.findIndex(function (edge) {
          return edge.cursor === args.before;
        });
        suffix = index < 0 ? prefix : prefix.slice(index);
        prefix = [];
      } else if (incoming.edges) {
        prefix = [];
      }

      var edges = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], prefix, true), incomingEdges, true), suffix, true);

      var pageInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, incoming.pageInfo), existing.pageInfo);

      if (incoming.pageInfo) {
        var _b = incoming.pageInfo,
            hasPreviousPage = _b.hasPreviousPage,
            hasNextPage = _b.hasNextPage,
            startCursor = _b.startCursor,
            endCursor = _b.endCursor,
            extras = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_b, ["hasPreviousPage", "hasNextPage", "startCursor", "endCursor"]);

        Object.assign(pageInfo, extras);

        if (!prefix.length) {
          if (void 0 !== hasPreviousPage) pageInfo.hasPreviousPage = hasPreviousPage;
          if (void 0 !== startCursor) pageInfo.startCursor = startCursor;
        }

        if (!suffix.length) {
          if (void 0 !== hasNextPage) pageInfo.hasNextPage = hasNextPage;
          if (void 0 !== endCursor) pageInfo.endCursor = endCursor;
        }
      }

      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, getExtras(existing)), getExtras(incoming)), {
        edges: edges,
        pageInfo: pageInfo
      });
    }
  };
}

var getExtras = function (obj) {
  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(obj, notExtras);
};

var notExtras = ["edges", "pageInfo"];

function makeEmptyData() {
  return {
    edges: [],
    pageInfo: {
      hasPreviousPage: false,
      hasNextPage: true,
      startCursor: "",
      endCursor: ""
    }
  };
}

/***/ }),

/***/ "./node_modules/@apollo/client/utilities/types/IsStrictlyAny.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@apollo/client/utilities/types/IsStrictlyAny.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./node_modules/@apollo/client/version.js":
/*!************************************************!*\
  !*** ./node_modules/@apollo/client/version.js ***!
  \************************************************/
/*! exports provided: version */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
var version = '3.4.16';

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createSuper.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createSuper.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

var possibleConstructorReturn = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function _createSuperInternal() {
    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread2; });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/bootstrap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/bootstrap.js ***!
  \*****************************************************************/
/*! exports provided: bootstrap, bootstrapPerf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapPerf", function() { return bootstrapPerf; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/patching */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./node_modules/@elastic/apm-rum-core/dist/es/state.js");



var enabled = false;
function bootstrap() {
  if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["isPlatformSupported"])()) {
    Object(_common_patching__WEBPACK_IMPORTED_MODULE_1__["patchAll"])();
    bootstrapPerf();
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].bootstrapTime = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["now"])();
    enabled = true;
  } else if (_common_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    console.log('[Elastic APM] platform is not supported!');
  }

  return enabled;
}
function bootstrapPerf() {
  if (document.visibilityState === 'hidden') {
    _state__WEBPACK_IMPORTED_MODULE_2__["state"].lastHiddenStart = 0;
  }

  window.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') {
      _state__WEBPACK_IMPORTED_MODULE_2__["state"].lastHiddenStart = performance.now();
    }
  }, {
    capture: true
  });
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/after-frame.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/after-frame.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return afterFrame; });
var RAF_TIMEOUT = 100;
function afterFrame(callback) {
  var handler = function handler() {
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    setTimeout(callback);
  };

  var timeout = setTimeout(handler, RAF_TIMEOUT);
  var raf = requestAnimationFrame(handler);
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/apm-server.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/apm-server.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queue */ "./node_modules/@elastic/apm-rum-core/dist/es/common/queue.js");
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./throttle */ "./node_modules/@elastic/apm-rum-core/dist/es/common/throttle.js");
/* harmony import */ var _ndjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ndjson */ "./node_modules/@elastic/apm-rum-core/dist/es/common/ndjson.js");
/* harmony import */ var _patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patching/patch-utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./truncate */ "./node_modules/@elastic/apm-rum-core/dist/es/common/truncate.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./polyfills */ "./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js");
/* harmony import */ var _compress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./compress */ "./node_modules/@elastic/apm-rum-core/dist/es/common/compress.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../state */ "./node_modules/@elastic/apm-rum-core/dist/es/state.js");










var THROTTLE_INTERVAL = 60000;

var ApmServer = function () {
  function ApmServer(configService, loggingService) {
    this._configService = configService;
    this._loggingService = loggingService;
    this.queue = undefined;
    this.throttleEvents = _utils__WEBPACK_IMPORTED_MODULE_6__["noop"];
  }

  var _proto = ApmServer.prototype;

  _proto.init = function init() {
    var _this = this;

    var queueLimit = this._configService.get('queueLimit');

    var flushInterval = this._configService.get('flushInterval');

    var limit = this._configService.get('eventsLimit');

    var onFlush = function onFlush(events) {
      var promise = _this.sendEvents(events);

      if (promise) {
        promise.catch(function (reason) {
          _this._loggingService.warn('Failed sending events!', _this._constructError(reason));
        });
      }
    };

    this.queue = new _queue__WEBPACK_IMPORTED_MODULE_0__["default"](onFlush, {
      queueLimit: queueLimit,
      flushInterval: flushInterval
    });
    this.throttleEvents = Object(_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(this.queue.add.bind(this.queue), function () {
      return _this._loggingService.warn('Dropped events due to throttling!');
    }, {
      limit: limit,
      interval: THROTTLE_INTERVAL
    });
  };

  _proto._postJson = function _postJson(endPoint, payload) {
    var _this2 = this;

    var headers = {
      'Content-Type': 'application/x-ndjson'
    };

    var apmRequest = this._configService.get('apmRequest');

    var params = {
      payload: payload,
      headers: headers,
      beforeSend: apmRequest
    };
    return Object(_compress__WEBPACK_IMPORTED_MODULE_8__["compressPayload"])(params).catch(function (error) {
      if (_state__WEBPACK_IMPORTED_MODULE_9__["__DEV__"]) {
        _this2._loggingService.debug('Compressing the payload using CompressionStream API failed', error.message);
      }

      return params;
    }).then(function (result) {
      return _this2._makeHttpRequest('POST', endPoint, result);
    }).then(function (_ref) {
      var responseText = _ref.responseText;
      return responseText;
    });
  };

  _proto._constructError = function _constructError(reason) {
    var url = reason.url,
        status = reason.status,
        responseText = reason.responseText;

    if (typeof status == 'undefined') {
      return reason;
    }

    var message = url + ' HTTP status: ' + status;

    if (_state__WEBPACK_IMPORTED_MODULE_9__["__DEV__"] && responseText) {
      try {
        var serverErrors = [];
        var response = JSON.parse(responseText);

        if (response.errors && response.errors.length > 0) {
          response.errors.forEach(function (err) {
            return serverErrors.push(err.message);
          });
          message += ' ' + serverErrors.join(',');
        }
      } catch (e) {
        this._loggingService.debug('Error parsing response from APM server', e);
      }
    }

    return new Error(message);
  };

  _proto._makeHttpRequest = function _makeHttpRequest(method, url, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
        _ref2$timeout = _ref2.timeout,
        timeout = _ref2$timeout === void 0 ? 10000 : _ref2$timeout,
        payload = _ref2.payload,
        headers = _ref2.headers,
        beforeSend = _ref2.beforeSend;

    return new _polyfills__WEBPACK_IMPORTED_MODULE_7__["Promise"](function (resolve, reject) {
      var xhr = new window.XMLHttpRequest();
      xhr[_patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__["XHR_IGNORE"]] = true;
      xhr.open(method, url, true);
      xhr.timeout = timeout;

      if (headers) {
        for (var header in headers) {
          if (headers.hasOwnProperty(header)) {
            xhr.setRequestHeader(header, headers[header]);
          }
        }
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var status = xhr.status,
              responseText = xhr.responseText;

          if (status === 0 || status > 399 && status < 600) {
            reject({
              url: url,
              status: status,
              responseText: responseText
            });
          } else {
            resolve(xhr);
          }
        }
      };

      xhr.onerror = function () {
        var status = xhr.status,
            responseText = xhr.responseText;
        reject({
          url: url,
          status: status,
          responseText: responseText
        });
      };

      var canSend = true;

      if (typeof beforeSend === 'function') {
        canSend = beforeSend({
          url: url,
          method: method,
          headers: headers,
          payload: payload,
          xhr: xhr
        });
      }

      if (canSend) {
        xhr.send(payload);
      } else {
        reject({
          url: url,
          status: 0,
          responseText: 'Request rejected by user configuration.'
        });
      }
    });
  };

  _proto.fetchConfig = function fetchConfig(serviceName, environment) {
    var _this3 = this;

    var serverUrl = this._configService.get('serverUrl');

    var configEndpoint = serverUrl + "/config/v1/rum/agents";

    if (!serviceName) {
      return _polyfills__WEBPACK_IMPORTED_MODULE_7__["Promise"].reject('serviceName is required for fetching central config.');
    }

    configEndpoint += "?service.name=" + serviceName;

    if (environment) {
      configEndpoint += "&service.environment=" + environment;
    }

    var localConfig = this._configService.getLocalConfig();

    if (localConfig) {
      configEndpoint += "&ifnonematch=" + localConfig.etag;
    }

    var apmRequest = this._configService.get('apmRequest');

    return this._makeHttpRequest('GET', configEndpoint, {
      timeout: 5000,
      beforeSend: apmRequest
    }).then(function (xhr) {
      var status = xhr.status,
          responseText = xhr.responseText;

      if (status === 304) {
        return localConfig;
      } else {
        var remoteConfig = JSON.parse(responseText);
        var etag = xhr.getResponseHeader('etag');

        if (etag) {
          remoteConfig.etag = etag.replace(/["]/g, '');

          _this3._configService.setLocalConfig(remoteConfig, true);
        }

        return remoteConfig;
      }
    }).catch(function (reason) {
      var error = _this3._constructError(reason);

      return _polyfills__WEBPACK_IMPORTED_MODULE_7__["Promise"].reject(error);
    });
  };

  _proto.createMetaData = function createMetaData() {
    var cfg = this._configService;
    var metadata = {
      service: {
        name: cfg.get('serviceName'),
        version: cfg.get('serviceVersion'),
        agent: {
          name: 'rum-js',
          version: cfg.version
        },
        language: {
          name: 'javascript'
        },
        environment: cfg.get('environment')
      },
      labels: cfg.get('context.tags')
    };
    return Object(_truncate__WEBPACK_IMPORTED_MODULE_4__["truncateModel"])(_truncate__WEBPACK_IMPORTED_MODULE_4__["METADATA_MODEL"], metadata);
  };

  _proto.addError = function addError(error) {
    var _this$throttleEvents;

    this.throttleEvents((_this$throttleEvents = {}, _this$throttleEvents[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]] = error, _this$throttleEvents));
  };

  _proto.addTransaction = function addTransaction(transaction) {
    var _this$throttleEvents2;

    this.throttleEvents((_this$throttleEvents2 = {}, _this$throttleEvents2[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]] = transaction, _this$throttleEvents2));
  };

  _proto.ndjsonErrors = function ndjsonErrors(errors, compress) {
    var key = compress ? 'e' : 'error';
    return errors.map(function (error) {
      var _NDJSON$stringify;

      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify((_NDJSON$stringify = {}, _NDJSON$stringify[key] = compress ? Object(_compress__WEBPACK_IMPORTED_MODULE_8__["compressError"])(error) : error, _NDJSON$stringify));
    });
  };

  _proto.ndjsonMetricsets = function ndjsonMetricsets(metricsets) {
    return metricsets.map(function (metricset) {
      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
        metricset: metricset
      });
    }).join('');
  };

  _proto.ndjsonTransactions = function ndjsonTransactions(transactions, compress) {
    var _this4 = this;

    var key = compress ? 'x' : 'transaction';
    return transactions.map(function (tr) {
      var _NDJSON$stringify2;

      var spans = '',
          breakdowns = '';

      if (!compress) {
        if (tr.spans) {
          spans = tr.spans.map(function (span) {
            return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify({
              span: span
            });
          }).join('');
          delete tr.spans;
        }

        if (tr.breakdown) {
          breakdowns = _this4.ndjsonMetricsets(tr.breakdown);
          delete tr.breakdown;
        }
      }

      return _ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify((_NDJSON$stringify2 = {}, _NDJSON$stringify2[key] = compress ? Object(_compress__WEBPACK_IMPORTED_MODULE_8__["compressTransaction"])(tr) : tr, _NDJSON$stringify2)) + spans + breakdowns;
    });
  };

  _proto.sendEvents = function sendEvents(events) {
    var _payload, _NDJSON$stringify3;

    if (events.length === 0) {
      return;
    }

    var transactions = [];
    var errors = [];

    for (var i = 0; i < events.length; i++) {
      var event = events[i];

      if (event[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]]) {
        transactions.push(event[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]]);
      }

      if (event[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]]) {
        errors.push(event[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]]);
      }
    }

    if (transactions.length === 0 && errors.length === 0) {
      return;
    }

    var cfg = this._configService;
    var payload = (_payload = {}, _payload[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]] = transactions, _payload[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]] = errors, _payload);
    var filteredPayload = cfg.applyFilters(payload);

    if (!filteredPayload) {
      this._loggingService.warn('Dropped payload due to filtering!');

      return;
    }

    var apiVersion = cfg.get('apiVersion');
    var compress = apiVersion > 2;
    var ndjson = [];
    var metadata = this.createMetaData();
    var metadataKey = compress ? 'm' : 'metadata';
    ndjson.push(_ndjson__WEBPACK_IMPORTED_MODULE_2__["default"].stringify((_NDJSON$stringify3 = {}, _NDJSON$stringify3[metadataKey] = compress ? Object(_compress__WEBPACK_IMPORTED_MODULE_8__["compressMetadata"])(metadata) : metadata, _NDJSON$stringify3)));
    ndjson = ndjson.concat(this.ndjsonErrors(filteredPayload[_constants__WEBPACK_IMPORTED_MODULE_5__["ERRORS"]], compress), this.ndjsonTransactions(filteredPayload[_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTIONS"]], compress));
    var ndjsonPayload = ndjson.join('');
    var endPoint = cfg.get('serverUrl') + ("/intake/v" + apiVersion + "/rum/events");
    return this._postJson(endPoint, ndjsonPayload);
  };

  return ApmServer;
}();

/* harmony default export */ __webpack_exports__["default"] = (ApmServer);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/compress.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/compress.js ***!
  \***********************************************************************/
/*! exports provided: compressMetadata, compressTransaction, compressError, compressMetricsets, compressPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressMetadata", function() { return compressMetadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressTransaction", function() { return compressTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressError", function() { return compressError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressMetricsets", function() { return compressMetricsets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressPayload", function() { return compressPayload; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js");
/* harmony import */ var _performance_monitoring_capture_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../performance-monitoring/capture-navigation */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/capture-navigation.js");



function compressStackFrames(frames) {
  return frames.map(function (frame) {
    return {
      ap: frame.abs_path,
      f: frame.filename,
      fn: frame.function,
      li: frame.lineno,
      co: frame.colno
    };
  });
}

function compressResponse(response) {
  return {
    ts: response.transfer_size,
    ebs: response.encoded_body_size,
    dbs: response.decoded_body_size
  };
}

function compressHTTP(http) {
  var compressed = {};
  var method = http.method,
      status_code = http.status_code,
      url = http.url,
      response = http.response;
  compressed.url = url;

  if (method) {
    compressed.mt = method;
  }

  if (status_code) {
    compressed.sc = status_code;
  }

  if (response) {
    compressed.r = compressResponse(response);
  }

  return compressed;
}

function compressContext(context) {
  if (!context) {
    return null;
  }

  var compressed = {};
  var page = context.page,
      http = context.http,
      response = context.response,
      destination = context.destination,
      user = context.user,
      custom = context.custom;

  if (page) {
    compressed.p = {
      rf: page.referer,
      url: page.url
    };
  }

  if (http) {
    compressed.h = compressHTTP(http);
  }

  if (response) {
    compressed.r = compressResponse(response);
  }

  if (destination) {
    var service = destination.service;
    compressed.dt = {
      se: {
        n: service.name,
        t: service.type,
        rc: service.resource
      },
      ad: destination.address,
      po: destination.port
    };
  }

  if (user) {
    compressed.u = {
      id: user.id,
      un: user.username,
      em: user.email
    };
  }

  if (custom) {
    compressed.cu = custom;
  }

  return compressed;
}

function compressMarks(marks) {
  if (!marks) {
    return null;
  }

  var navigationTiming = marks.navigationTiming,
      agent = marks.agent;
  var compressed = {
    nt: {}
  };
  _performance_monitoring_capture_navigation__WEBPACK_IMPORTED_MODULE_1__["COMPRESSED_NAV_TIMING_MARKS"].forEach(function (mark, index) {
    var mapping = _performance_monitoring_capture_navigation__WEBPACK_IMPORTED_MODULE_1__["NAVIGATION_TIMING_MARKS"][index];
    compressed.nt[mark] = navigationTiming[mapping];
  });
  compressed.a = {
    fb: compressed.nt.rs,
    di: compressed.nt.di,
    dc: compressed.nt.dc
  };
  var fp = agent.firstContentfulPaint;
  var lp = agent.largestContentfulPaint;

  if (fp) {
    compressed.a.fp = fp;
  }

  if (lp) {
    compressed.a.lp = lp;
  }

  return compressed;
}

function compressMetadata(metadata) {
  var service = metadata.service,
      labels = metadata.labels;
  var agent = service.agent,
      language = service.language;
  return {
    se: {
      n: service.name,
      ve: service.version,
      a: {
        n: agent.name,
        ve: agent.version
      },
      la: {
        n: language.name
      },
      en: service.environment
    },
    l: labels
  };
}
function compressTransaction(transaction) {
  var spans = transaction.spans.map(function (span) {
    var spanData = {
      id: span.id,
      n: span.name,
      t: span.type,
      s: span.start,
      d: span.duration,
      c: compressContext(span.context),
      o: span.outcome,
      sr: span.sample_rate
    };

    if (span.parent_id !== transaction.id) {
      spanData.pid = span.parent_id;
    }

    if (span.sync === true) {
      spanData.sy = true;
    }

    if (span.subtype) {
      spanData.su = span.subtype;
    }

    if (span.action) {
      spanData.ac = span.action;
    }

    return spanData;
  });
  var tr = {
    id: transaction.id,
    tid: transaction.trace_id,
    n: transaction.name,
    t: transaction.type,
    d: transaction.duration,
    c: compressContext(transaction.context),
    k: compressMarks(transaction.marks),
    me: compressMetricsets(transaction.breakdown),
    y: spans,
    yc: {
      sd: spans.length
    },
    sm: transaction.sampled,
    sr: transaction.sample_rate,
    o: transaction.outcome
  };

  if (transaction.experience) {
    var _transaction$experien = transaction.experience,
        cls = _transaction$experien.cls,
        fid = _transaction$experien.fid,
        tbt = _transaction$experien.tbt,
        longtask = _transaction$experien.longtask;
    tr.exp = {
      cls: cls,
      fid: fid,
      tbt: tbt,
      lt: longtask
    };
  }

  if (transaction.session) {
    var _transaction$session = transaction.session,
        id = _transaction$session.id,
        sequence = _transaction$session.sequence;
    tr.ses = {
      id: id,
      seq: sequence
    };
  }

  return tr;
}
function compressError(error) {
  var exception = error.exception;
  var compressed = {
    id: error.id,
    cl: error.culprit,
    ex: {
      mg: exception.message,
      st: compressStackFrames(exception.stacktrace),
      t: error.type
    },
    c: compressContext(error.context)
  };
  var transaction = error.transaction;

  if (transaction) {
    compressed.tid = error.trace_id;
    compressed.pid = error.parent_id;
    compressed.xid = error.transaction_id;
    compressed.x = {
      t: transaction.type,
      sm: transaction.sampled
    };
  }

  return compressed;
}
function compressMetricsets(breakdowns) {
  return breakdowns.map(function (_ref) {
    var span = _ref.span,
        samples = _ref.samples;
    var isSpan = span != null;

    if (isSpan) {
      return {
        y: {
          t: span.type
        },
        sa: {
          ysc: {
            v: samples['span.self_time.count'].value
          },
          yss: {
            v: samples['span.self_time.sum.us'].value
          }
        }
      };
    }

    return {
      sa: {
        xdc: {
          v: samples['transaction.duration.count'].value
        },
        xds: {
          v: samples['transaction.duration.sum.us'].value
        },
        xbc: {
          v: samples['transaction.breakdown.count'].value
        }
      }
    };
  });
}
function compressPayload(params, type) {
  if (type === void 0) {
    type = 'gzip';
  }

  var isCompressionStreamSupported = typeof CompressionStream === 'function';
  return new _polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"](function (resolve) {
    if (!isCompressionStreamSupported) {
      return resolve(params);
    }

    var payload = params.payload,
        headers = params.headers,
        beforeSend = params.beforeSend;
    var payloadStream = new Blob([payload]).stream();
    var compressedStream = payloadStream.pipeThrough(new CompressionStream(type));
    return new Response(compressedStream).blob().then(function (payload) {
      headers['Content-Encoding'] = type;
      return resolve({
        payload: payload,
        headers: headers,
        beforeSend: beforeSend
      });
    });
  });
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/config-service.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/config-service.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handler */ "./node_modules/@elastic/apm-rum-core/dist/es/common/event-handler.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}





function getConfigFromScript() {
  var script = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getCurrentScript"])();
  var config = getDataAttributesFromNode(script);
  return config;
}

function getDataAttributesFromNode(node) {
  if (!node) {
    return {};
  }

  var dataAttrs = {};
  var dataRegex = /^data-([\w-]+)$/;
  var attrs = node.attributes;

  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];

    if (dataRegex.test(attr.nodeName)) {
      var key = attr.nodeName.match(dataRegex)[1];
      var camelCasedkey = key.split('-').map(function (value, index) {
        return index > 0 ? value.charAt(0).toUpperCase() + value.substring(1) : value;
      }).join('');
      dataAttrs[camelCasedkey] = attr.value || attr.nodeValue;
    }
  }

  return dataAttrs;
}

var Config = function () {
  function Config() {
    this.config = {
      serviceName: '',
      serviceVersion: '',
      environment: '',
      serverUrl: 'http://localhost:8200',
      active: true,
      instrument: true,
      disableInstrumentations: [],
      logLevel: 'warn',
      breakdownMetrics: false,
      ignoreTransactions: [],
      eventsLimit: 80,
      queueLimit: -1,
      flushInterval: 500,
      distributedTracing: true,
      distributedTracingOrigins: [],
      distributedTracingHeaderName: 'traceparent',
      pageLoadTraceId: '',
      pageLoadSpanId: '',
      pageLoadSampled: false,
      pageLoadTransactionName: '',
      propagateTracestate: false,
      transactionSampleRate: 1.0,
      centralConfig: false,
      monitorLongtasks: true,
      apiVersion: 2,
      context: {},
      session: false,
      apmRequest: null
    };
    this.events = new _event_handler__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.filters = [];
    this.version = '';
  }

  var _proto = Config.prototype;

  _proto.init = function init() {
    var scriptData = getConfigFromScript();
    this.setConfig(scriptData);
  };

  _proto.setVersion = function setVersion(version) {
    this.version = version;
  };

  _proto.addFilter = function addFilter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Argument to must be function');
    }

    this.filters.push(cb);
  };

  _proto.applyFilters = function applyFilters(data) {
    for (var i = 0; i < this.filters.length; i++) {
      data = this.filters[i](data);

      if (!data) {
        return;
      }
    }

    return data;
  };

  _proto.get = function get(key) {
    return key.split('.').reduce(function (obj, objKey) {
      return obj && obj[objKey];
    }, this.config);
  };

  _proto.setUserContext = function setUserContext(userContext) {
    if (userContext === void 0) {
      userContext = {};
    }

    var context = {};
    var _userContext = userContext,
        id = _userContext.id,
        username = _userContext.username,
        email = _userContext.email;

    if (typeof id === 'number' || typeof id === 'string') {
      context.id = id;
    }

    if (typeof username === 'string') {
      context.username = username;
    }

    if (typeof email === 'string') {
      context.email = email;
    }

    this.config.context.user = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.config.context.user || {}, context);
  };

  _proto.setCustomContext = function setCustomContext(customContext) {
    if (customContext === void 0) {
      customContext = {};
    }

    this.config.context.custom = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["extend"])(this.config.context.custom || {}, customContext);
  };

  _proto.addLabels = function addLabels(tags) {
    var _this = this;

    if (!this.config.context.tags) {
      this.config.context.tags = {};
    }

    var keys = Object.keys(tags);
    keys.forEach(function (k) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setLabel"])(k, tags[k], _this.config.context.tags);
    });
  };

  _proto.setConfig = function setConfig(properties) {
    if (properties === void 0) {
      properties = {};
    }

    var _properties = properties,
        transactionSampleRate = _properties.transactionSampleRate,
        serverUrl = _properties.serverUrl;

    if (serverUrl) {
      properties.serverUrl = serverUrl.replace(/\/+$/, '');
    }

    if (!Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"])(transactionSampleRate)) {
      if (transactionSampleRate < 0.0001 && transactionSampleRate > 0) {
        transactionSampleRate = 0.0001;
      }

      properties.transactionSampleRate = Math.round(transactionSampleRate * 10000) / 10000;
    }

    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.config, properties);
    this.events.send(_constants__WEBPACK_IMPORTED_MODULE_2__["CONFIG_CHANGE"], [this.config]);
  };

  _proto.validate = function validate(properties) {
    if (properties === void 0) {
      properties = {};
    }

    var requiredKeys = ['serviceName', 'serverUrl'];
    var errors = {
      missing: [],
      invalid: []
    };
    Object.keys(properties).forEach(function (key) {
      if (requiredKeys.indexOf(key) !== -1 && !properties[key]) {
        errors.missing.push(key);
      }
    });

    if (properties.serviceName && !/^[a-zA-Z0-9 _-]+$/.test(properties.serviceName)) {
      errors.invalid.push({
        key: 'serviceName',
        value: properties.serviceName,
        allowed: 'a-z, A-Z, 0-9, _, -, <space>'
      });
    }

    var sampleRate = properties.transactionSampleRate;

    if (typeof sampleRate !== 'undefined' && (typeof sampleRate !== 'number' || isNaN(sampleRate) || sampleRate < 0 || sampleRate > 1)) {
      errors.invalid.push({
        key: 'transactionSampleRate',
        value: sampleRate,
        allowed: 'Number between 0 and 1'
      });
    }

    return errors;
  };

  _proto.getLocalConfig = function getLocalConfig() {
    var storage = sessionStorage;

    if (this.config.session) {
      storage = localStorage;
    }

    var config = storage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__["LOCAL_CONFIG_KEY"]);

    if (config) {
      return JSON.parse(config);
    }
  };

  _proto.setLocalConfig = function setLocalConfig(config, merge) {
    if (config) {
      if (merge) {
        var prevConfig = this.getLocalConfig();
        config = _extends({}, prevConfig, config);
      }

      var storage = sessionStorage;

      if (this.config.session) {
        storage = localStorage;
      }

      storage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__["LOCAL_CONFIG_KEY"], JSON.stringify(config));
    }
  };

  return Config;
}();

/* harmony default export */ __webpack_exports__["default"] = (Config);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js":
/*!************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js ***!
  \************************************************************************/
/*! exports provided: SCHEDULE, INVOKE, ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, RESOURCE_INITIATOR_TYPES, REUSABILITY_THRESHOLD, MAX_SPAN_DURATION, PAGE_LOAD, ROUTE_CHANGE, NAME_UNKNOWN, TYPE_CUSTOM, USER_TIMING_THRESHOLD, TRANSACTION_START, TRANSACTION_END, CONFIG_CHANGE, XMLHTTPREQUEST, FETCH, HISTORY, EVENT_TARGET, ERROR, BEFORE_EVENT, AFTER_EVENT, LOCAL_CONFIG_KEY, HTTP_REQUEST_TYPE, LONG_TASK, PAINT, MEASURE, NAVIGATION, RESOURCE, FIRST_CONTENTFUL_PAINT, LARGEST_CONTENTFUL_PAINT, KEYWORD_LIMIT, TEMPORARY_TYPE, USER_INTERACTION, TRANSACTION_TYPE_ORDER, ERRORS, TRANSACTIONS, CONFIG_SERVICE, LOGGING_SERVICE, APM_SERVER, TRUNCATED_TYPE, FIRST_INPUT, LAYOUT_SHIFT, OUTCOME_SUCCESS, OUTCOME_FAILURE, SESSION_TIMEOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCHEDULE", function() { return SCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVOKE", function() { return INVOKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_EVENT_LISTENER_STR", function() { return ADD_EVENT_LISTENER_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_EVENT_LISTENER_STR", function() { return REMOVE_EVENT_LISTENER_STR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_INITIATOR_TYPES", function() { return RESOURCE_INITIATOR_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REUSABILITY_THRESHOLD", function() { return REUSABILITY_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SPAN_DURATION", function() { return MAX_SPAN_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_LOAD", function() { return PAGE_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_CHANGE", function() { return ROUTE_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAME_UNKNOWN", function() { return NAME_UNKNOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_CUSTOM", function() { return TYPE_CUSTOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_TIMING_THRESHOLD", function() { return USER_TIMING_THRESHOLD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_START", function() { return TRANSACTION_START; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_END", function() { return TRANSACTION_END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_CHANGE", function() { return CONFIG_CHANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XMLHTTPREQUEST", function() { return XMLHTTPREQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH", function() { return FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HISTORY", function() { return HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TARGET", function() { return EVENT_TARGET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BEFORE_EVENT", function() { return BEFORE_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AFTER_EVENT", function() { return AFTER_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_CONFIG_KEY", function() { return LOCAL_CONFIG_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_REQUEST_TYPE", function() { return HTTP_REQUEST_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LONG_TASK", function() { return LONG_TASK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAINT", function() { return PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEASURE", function() { return MEASURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION", function() { return NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE", function() { return RESOURCE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_CONTENTFUL_PAINT", function() { return FIRST_CONTENTFUL_PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LARGEST_CONTENTFUL_PAINT", function() { return LARGEST_CONTENTFUL_PAINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYWORD_LIMIT", function() { return KEYWORD_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEMPORARY_TYPE", function() { return TEMPORARY_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_INTERACTION", function() { return USER_INTERACTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_TYPE_ORDER", function() { return TRANSACTION_TYPE_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERRORS", function() { return ERRORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTIONS", function() { return TRANSACTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG_SERVICE", function() { return CONFIG_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGGING_SERVICE", function() { return LOGGING_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APM_SERVER", function() { return APM_SERVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRUNCATED_TYPE", function() { return TRUNCATED_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_INPUT", function() { return FIRST_INPUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_SHIFT", function() { return LAYOUT_SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTCOME_SUCCESS", function() { return OUTCOME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OUTCOME_FAILURE", function() { return OUTCOME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SESSION_TIMEOUT", function() { return SESSION_TIMEOUT; });
var SCHEDULE = 'schedule';
var INVOKE = 'invoke';
var ADD_EVENT_LISTENER_STR = 'addEventListener';
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
var RESOURCE_INITIATOR_TYPES = ['link', 'css', 'script', 'img', 'xmlhttprequest', 'fetch', 'beacon', 'iframe'];
var REUSABILITY_THRESHOLD = 5000;
var MAX_SPAN_DURATION = 5 * 60 * 1000;
var PAGE_LOAD = 'page-load';
var ROUTE_CHANGE = 'route-change';
var TYPE_CUSTOM = 'custom';
var USER_INTERACTION = 'user-interaction';
var HTTP_REQUEST_TYPE = 'http-request';
var TEMPORARY_TYPE = 'temporary';
var NAME_UNKNOWN = 'Unknown';
var TRANSACTION_TYPE_ORDER = [PAGE_LOAD, ROUTE_CHANGE, USER_INTERACTION, HTTP_REQUEST_TYPE, TYPE_CUSTOM, TEMPORARY_TYPE];
var OUTCOME_SUCCESS = 'success';
var OUTCOME_FAILURE = 'failure';
var USER_TIMING_THRESHOLD = 60;
var TRANSACTION_START = 'transaction:start';
var TRANSACTION_END = 'transaction:end';
var CONFIG_CHANGE = 'config:change';
var XMLHTTPREQUEST = 'xmlhttprequest';
var FETCH = 'fetch';
var HISTORY = 'history';
var EVENT_TARGET = 'eventtarget';
var ERROR = 'error';
var BEFORE_EVENT = ':before';
var AFTER_EVENT = ':after';
var LOCAL_CONFIG_KEY = 'elastic_apm_config';
var LONG_TASK = 'longtask';
var PAINT = 'paint';
var MEASURE = 'measure';
var NAVIGATION = 'navigation';
var RESOURCE = 'resource';
var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';
var LARGEST_CONTENTFUL_PAINT = 'largest-contentful-paint';
var FIRST_INPUT = 'first-input';
var LAYOUT_SHIFT = 'layout-shift';
var ERRORS = 'errors';
var TRANSACTIONS = 'transactions';
var CONFIG_SERVICE = 'ConfigService';
var LOGGING_SERVICE = 'LoggingService';
var APM_SERVER = 'ApmServer';
var TRUNCATED_TYPE = '.truncated';
var KEYWORD_LIMIT = 1024;
var SESSION_TIMEOUT = 30 * 60000;


/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/context.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/context.js ***!
  \**********************************************************************/
/*! exports provided: getPageContext, addSpanContext, addTransactionContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageContext", function() { return getPageContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSpanContext", function() { return addSpanContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTransactionContext", function() { return addTransactionContext; });
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url */ "./node_modules/@elastic/apm-rum-core/dist/es/common/url.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
var _excluded = ["tags"];

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}




var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var EXTERNAL = 'external';
var RESOURCE = 'resource';
var HARD_NAVIGATION = 'hard-navigation';

function getPortNumber(port, protocol) {
  if (port === '') {
    port = protocol === 'http:' ? '80' : protocol === 'https:' ? '443' : '';
  }

  return port;
}

function getResponseContext(perfTimingEntry) {
  var transferSize = perfTimingEntry.transferSize,
      encodedBodySize = perfTimingEntry.encodedBodySize,
      decodedBodySize = perfTimingEntry.decodedBodySize,
      serverTiming = perfTimingEntry.serverTiming;
  var respContext = {
    transfer_size: transferSize,
    encoded_body_size: encodedBodySize,
    decoded_body_size: decodedBodySize
  };
  var serverTimingStr = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getServerTimingInfo"])(serverTiming);

  if (serverTimingStr) {
    respContext.headers = {
      'server-timing': serverTimingStr
    };
  }

  return respContext;
}

function getDestination(parsedUrl, type) {
  var port = parsedUrl.port,
      protocol = parsedUrl.protocol,
      hostname = parsedUrl.hostname,
      host = parsedUrl.host;
  var portNumber = getPortNumber(port, protocol);
  var ipv6Hostname = hostname.charCodeAt(0) === LEFT_SQUARE_BRACKET && hostname.charCodeAt(hostname.length - 1) === RIGHT_SQUARE_BRACKET;
  var address = hostname;

  if (ipv6Hostname) {
    address = hostname.slice(1, -1);
  }

  return {
    service: {
      name: protocol + '//' + host,
      resource: hostname + ':' + portNumber,
      type: type
    },
    address: address,
    port: Number(portNumber)
  };
}

function getResourceContext(data) {
  var entry = data.entry,
      url = data.url;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_0__["Url"](url);
  var destination = getDestination(parsedUrl, RESOURCE);
  return {
    http: {
      url: url,
      response: getResponseContext(entry)
    },
    destination: destination
  };
}

function getExternalContext(data) {
  var url = data.url,
      method = data.method,
      target = data.target,
      response = data.response;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_0__["Url"](url);
  var destination = getDestination(parsedUrl, EXTERNAL);
  var context = {
    http: {
      method: method,
      url: parsedUrl.href
    },
    destination: destination
  };
  var statusCode;

  if (target && typeof target.status !== 'undefined') {
    statusCode = target.status;
  } else if (response) {
    statusCode = response.status;
  }

  context.http.status_code = statusCode;
  return context;
}

function getNavigationContext(data) {
  var url = data.url;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_0__["Url"](url);
  var destination = getDestination(parsedUrl, HARD_NAVIGATION);
  return {
    destination: destination
  };
}

function getPageContext() {
  return {
    page: {
      referer: document.referrer,
      url: location.href
    }
  };
}
function addSpanContext(span, data) {
  if (!data) {
    return;
  }

  var type = span.type;
  var context;

  switch (type) {
    case EXTERNAL:
      context = getExternalContext(data);
      break;

    case RESOURCE:
      context = getResourceContext(data);
      break;

    case HARD_NAVIGATION:
      context = getNavigationContext(data);
      break;
  }

  span.addContext(context);
}
function addTransactionContext(transaction, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      tags = _ref.tags,
      configContext = _objectWithoutPropertiesLoose(_ref, _excluded);

  var pageContext = getPageContext();
  var responseContext = {};

  if (transaction.type === _constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_LOAD"] && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isPerfTimelineSupported"])()) {
    var entries = _utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].getEntriesByType(_constants__WEBPACK_IMPORTED_MODULE_1__["NAVIGATION"]);

    if (entries && entries.length > 0) {
      responseContext = {
        response: getResponseContext(entries[0])
      };
    }
  }

  transaction.addContext(pageContext, responseContext, configContext);
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/event-handler.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/event-handler.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");


var EventHandler = function () {
  function EventHandler() {
    this.observers = {};
  }

  var _proto = EventHandler.prototype;

  _proto.observe = function observe(name, fn) {
    var _this = this;

    if (typeof fn === 'function') {
      if (!this.observers[name]) {
        this.observers[name] = [];
      }

      this.observers[name].push(fn);
      return function () {
        var index = _this.observers[name].indexOf(fn);

        if (index > -1) {
          _this.observers[name].splice(index, 1);
        }
      };
    }
  };

  _proto.sendOnly = function sendOnly(name, args) {
    var obs = this.observers[name];

    if (obs) {
      obs.forEach(function (fn) {
        try {
          fn.apply(undefined, args);
        } catch (error) {
          console.log(error, error.stack);
        }
      });
    }
  };

  _proto.send = function send(name, args) {
    this.sendOnly(name + _constants__WEBPACK_IMPORTED_MODULE_0__["BEFORE_EVENT"], args);
    this.sendOnly(name, args);
    this.sendOnly(name + _constants__WEBPACK_IMPORTED_MODULE_0__["AFTER_EVENT"], args);
  };

  return EventHandler;
}();

/* harmony default export */ __webpack_exports__["default"] = (EventHandler);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/instrument.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/instrument.js ***!
  \*************************************************************************/
/*! exports provided: getInstrumentationFlags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInstrumentationFlags", function() { return getInstrumentationFlags; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");

function getInstrumentationFlags(instrument, disabledInstrumentations) {
  var _flags;

  var flags = (_flags = {}, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["XMLHTTPREQUEST"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["FETCH"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["HISTORY"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["ERROR"]] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_TARGET"]] = false, _flags);

  if (!instrument) {
    return flags;
  }

  Object.keys(flags).forEach(function (key) {
    if (disabledInstrumentations.indexOf(key) === -1) {
      flags[key] = true;
    }
  });
  return flags;
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/logging-service.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/logging-service.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");


var LoggingService = function () {
  function LoggingService(spec) {
    if (spec === void 0) {
      spec = {};
    }

    this.levels = ['trace', 'debug', 'info', 'warn', 'error'];
    this.level = spec.level || 'warn';
    this.prefix = spec.prefix || '';
    this.resetLogMethods();
  }

  var _proto = LoggingService.prototype;

  _proto.shouldLog = function shouldLog(level) {
    return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
  };

  _proto.setLevel = function setLevel(level) {
    if (level === this.level) {
      return;
    }

    this.level = level;
    this.resetLogMethods();
  };

  _proto.resetLogMethods = function resetLogMethods() {
    var _this = this;

    this.levels.forEach(function (level) {
      _this[level] = _this.shouldLog(level) ? log : _utils__WEBPACK_IMPORTED_MODULE_0__["noop"];

      function log() {
        var normalizedLevel = level;

        if (level === 'trace' || level === 'debug') {
          normalizedLevel = 'info';
        }

        var args = arguments;
        args[0] = this.prefix + args[0];

        if (console) {
          var realMethod = console[normalizedLevel] || console.log;

          if (typeof realMethod === 'function') {
            realMethod.apply(console, args);
          }
        }
      }
    });
  };

  return LoggingService;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoggingService);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/ndjson.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/ndjson.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NDJSON = function () {
  function NDJSON() {}

  NDJSON.stringify = function stringify(object) {
    return JSON.stringify(object) + '\n';
  };

  return NDJSON;
}();

/* harmony default export */ __webpack_exports__["default"] = (NDJSON);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/event-target-patch.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/event-target-patch.js ***!
  \******************************************************************************************/
/*! exports provided: patchEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchEventTarget", function() { return patchEventTarget; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _patch_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch-utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js");


var eventTypes = ['click'];
var eventTypeSymbols = {};

for (var i = 0; i < eventTypes.length; i++) {
  var et = eventTypes[i];
  eventTypeSymbols[et] = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_1__["apmSymbol"])(et);
}

function shouldInstrumentEvent(target, eventType, listenerFn) {
  return target instanceof Element && eventTypes.indexOf(eventType) >= 0 && typeof listenerFn === 'function';
}

function patchEventTarget(callback) {
  if (!window.EventTarget) {
    return;
  }

  var proto = window.EventTarget.prototype;
  var nativeAddEventListener = proto[_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_EVENT_LISTENER_STR"]];
  var nativeRemoveEventListener = proto[_constants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_EVENT_LISTENER_STR"]];

  function findTaskIndex(existingTasks, eventType, listenerFn, capture) {
    for (var _i = 0; _i < existingTasks.length; _i++) {
      var task = existingTasks[_i];

      if (task.eventType === eventType && task.listenerFn === listenerFn && task.capture === capture) {
        return _i;
      }
    }

    return -1;
  }

  function isCapture(options) {
    var capture;

    if (typeof options === 'boolean') {
      capture = options;
    } else {
      capture = options ? !!options.capture : false;
    }

    return capture;
  }

  function createListenerWrapper(target, eventType, listenerFn, options) {
    var eventSymbol = eventTypeSymbols[eventType];
    if (!eventSymbol) return listenerFn;
    var existingTasks = target[eventSymbol];
    var capture = isCapture(options);

    if (existingTasks) {
      var taskIndex = findTaskIndex(existingTasks, eventType, listenerFn, capture);

      if (taskIndex !== -1) {
        var _task = existingTasks[taskIndex];
        return _task.wrappingFn;
      }
    } else {
      existingTasks = target[eventSymbol] = [];
    }

    var task = {
      source: _constants__WEBPACK_IMPORTED_MODULE_0__["EVENT_TARGET"],
      target: target,
      eventType: eventType,
      listenerFn: listenerFn,
      capture: capture,
      wrappingFn: wrappingFn
    };
    existingTasks.push(task);

    function wrappingFn() {
      callback(_constants__WEBPACK_IMPORTED_MODULE_0__["SCHEDULE"], task);
      var result;

      try {
        result = listenerFn.apply(this, arguments);
      } finally {
        callback(_constants__WEBPACK_IMPORTED_MODULE_0__["INVOKE"], task);
      }

      return result;
    }

    return wrappingFn;
  }

  function getWrappingFn(target, eventType, listenerFn, options) {
    var eventSymbol = eventTypeSymbols[eventType];
    var existingTasks = target[eventSymbol];

    if (existingTasks) {
      var capture = isCapture(options);
      var taskIndex = findTaskIndex(existingTasks, eventType, listenerFn, capture);

      if (taskIndex !== -1) {
        var task = existingTasks[taskIndex];
        existingTasks.splice(taskIndex, 1);

        if (existingTasks.length === 0) {
          target[eventSymbol] = undefined;
        }

        return task.wrappingFn;
      }
    }

    return listenerFn;
  }

  proto[_constants__WEBPACK_IMPORTED_MODULE_0__["ADD_EVENT_LISTENER_STR"]] = function (eventType, listenerFn, optionsOrCapture) {
    var target = this;

    if (!shouldInstrumentEvent(target, eventType, listenerFn)) {
      return nativeAddEventListener.apply(target, arguments);
    }

    var wrappingListenerFn = createListenerWrapper(target, eventType, listenerFn, optionsOrCapture);
    var args = Array.prototype.slice.call(arguments);
    args[1] = wrappingListenerFn;
    return nativeAddEventListener.apply(target, args);
  };

  proto[_constants__WEBPACK_IMPORTED_MODULE_0__["REMOVE_EVENT_LISTENER_STR"]] = function (eventType, listenerFn, optionsOrCapture) {
    var target = this;

    if (!shouldInstrumentEvent(target, eventType, listenerFn)) {
      return nativeRemoveEventListener.apply(target, arguments);
    }

    var wrappingFn = getWrappingFn(target, eventType, listenerFn, optionsOrCapture);
    var args = Array.prototype.slice.call(arguments);
    args[1] = wrappingFn;
    return nativeRemoveEventListener.apply(target, args);
  };
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/fetch-patch.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/fetch-patch.js ***!
  \***********************************************************************************/
/*! exports provided: patchFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchFetch", function() { return patchFetch; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills */ "./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js");
/* harmony import */ var _patch_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch-utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");




function patchFetch(callback) {
  if (!window.fetch || !window.Request) {
    return;
  }

  function scheduleTask(task) {
    task.state = _constants__WEBPACK_IMPORTED_MODULE_2__["SCHEDULE"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_2__["SCHEDULE"], task);
  }

  function invokeTask(task) {
    task.state = _constants__WEBPACK_IMPORTED_MODULE_2__["INVOKE"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_2__["INVOKE"], task);
  }

  var nativeFetch = window.fetch;

  window.fetch = function (input, init) {
    var fetchSelf = this;
    var args = arguments;
    var request, url;

    if (typeof input === 'string') {
      request = new Request(input, init);
      url = input;
    } else if (input) {
      request = input;
      url = request.url;
    } else {
      return nativeFetch.apply(fetchSelf, args);
    }

    var task = {
      source: _constants__WEBPACK_IMPORTED_MODULE_2__["FETCH"],
      state: '',
      type: 'macroTask',
      data: {
        target: request,
        method: request.method,
        url: url,
        aborted: false
      }
    };
    return new _polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"](function (resolve, reject) {
      _patch_utils__WEBPACK_IMPORTED_MODULE_1__["globalState"].fetchInProgress = true;
      scheduleTask(task);
      var promise;

      try {
        promise = nativeFetch.apply(fetchSelf, [request]);
      } catch (error) {
        reject(error);
        task.data.error = error;
        invokeTask(task);
        _patch_utils__WEBPACK_IMPORTED_MODULE_1__["globalState"].fetchInProgress = false;
        return;
      }

      promise.then(function (response) {
        resolve(response);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMicroTask"])(function () {
          task.data.response = response;
          invokeTask(task);
        });
      }, function (error) {
        reject(error);
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMicroTask"])(function () {
          task.data.error = error;
          invokeTask(task);
        });
      });
      _patch_utils__WEBPACK_IMPORTED_MODULE_1__["globalState"].fetchInProgress = false;
    });
  };
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/history-patch.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/history-patch.js ***!
  \*************************************************************************************/
/*! exports provided: patchHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchHistory", function() { return patchHistory; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");

function patchHistory(callback) {
  if (!window.history) {
    return;
  }

  var nativePushState = history.pushState;

  if (typeof nativePushState === 'function') {
    history.pushState = function (state, title, url) {
      var task = {
        source: _constants__WEBPACK_IMPORTED_MODULE_0__["HISTORY"],
        data: {
          state: state,
          title: title,
          url: url
        }
      };
      callback(_constants__WEBPACK_IMPORTED_MODULE_0__["INVOKE"], task);
      nativePushState.apply(this, arguments);
    };
  }
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/index.js ***!
  \*****************************************************************************/
/*! exports provided: patchAll, patchEventHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchAll", function() { return patchAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchEventHandler", function() { return patchEventHandler; });
/* harmony import */ var _xhr_patch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./xhr-patch */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/xhr-patch.js");
/* harmony import */ var _fetch_patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch-patch */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/fetch-patch.js");
/* harmony import */ var _history_patch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-patch */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/history-patch.js");
/* harmony import */ var _event_target_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-target-patch */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/event-target-patch.js");
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../event-handler */ "./node_modules/@elastic/apm-rum-core/dist/es/common/event-handler.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");






var patchEventHandler = new _event_handler__WEBPACK_IMPORTED_MODULE_4__["default"]();
var alreadyPatched = false;

function patchAll() {
  if (!alreadyPatched) {
    alreadyPatched = true;
    Object(_xhr_patch__WEBPACK_IMPORTED_MODULE_0__["patchXMLHttpRequest"])(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_5__["XMLHTTPREQUEST"], [event, task]);
    });
    Object(_fetch_patch__WEBPACK_IMPORTED_MODULE_1__["patchFetch"])(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_5__["FETCH"], [event, task]);
    });
    Object(_history_patch__WEBPACK_IMPORTED_MODULE_2__["patchHistory"])(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_5__["HISTORY"], [event, task]);
    });
    Object(_event_target_patch__WEBPACK_IMPORTED_MODULE_3__["patchEventTarget"])(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_5__["EVENT_TARGET"], [event, task]);
    });
  }

  return patchEventHandler;
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js ***!
  \***********************************************************************************/
/*! exports provided: globalState, apmSymbol, patchMethod, XHR_IGNORE, XHR_SYNC, XHR_URL, XHR_METHOD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globalState", function() { return globalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apmSymbol", function() { return apmSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchMethod", function() { return patchMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR_IGNORE", function() { return XHR_IGNORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR_SYNC", function() { return XHR_SYNC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR_URL", function() { return XHR_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHR_METHOD", function() { return XHR_METHOD; });
var globalState = {
  fetchInProgress: false
};
function apmSymbol(name) {
  return '__apm_symbol__' + name;
}

function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }

  if (propertyDesc.writable === false) {
    return false;
  }

  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}

function attachOriginToPatched(patched, original) {
  patched[apmSymbol('OriginalDelegate')] = original;
}

function patchMethod(target, name, patchFn) {
  var proto = target;

  while (proto && !proto.hasOwnProperty(name)) {
    proto = Object.getPrototypeOf(proto);
  }

  if (!proto && target[name]) {
    proto = target;
  }

  var delegateName = apmSymbol(name);
  var delegate;

  if (proto && !(delegate = proto[delegateName])) {
    delegate = proto[delegateName] = proto[name];
    var desc = proto && Object.getOwnPropertyDescriptor(proto, name);

    if (isPropertyWritable(desc)) {
      var patchDelegate = patchFn(delegate, delegateName, name);

      proto[name] = function () {
        return patchDelegate(this, arguments);
      };

      attachOriginToPatched(proto[name], delegate);
    }
  }

  return delegate;
}
var XHR_IGNORE = apmSymbol('xhrIgnore');
var XHR_SYNC = apmSymbol('xhrSync');
var XHR_URL = apmSymbol('xhrURL');
var XHR_METHOD = apmSymbol('xhrMethod');

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/xhr-patch.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/xhr-patch.js ***!
  \*********************************************************************************/
/*! exports provided: patchXMLHttpRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "patchXMLHttpRequest", function() { return patchXMLHttpRequest; });
/* harmony import */ var _patch_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patch-utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");


function patchXMLHttpRequest(callback) {
  var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

  if (!XMLHttpRequestPrototype || !XMLHttpRequestPrototype[_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_EVENT_LISTENER_STR"]]) {
    return;
  }

  var READY_STATE_CHANGE = 'readystatechange';
  var LOAD = 'load';
  var ERROR = 'error';
  var TIMEOUT = 'timeout';
  var ABORT = 'abort';

  function invokeTask(task, status) {
    if (task.state !== _constants__WEBPACK_IMPORTED_MODULE_1__["INVOKE"]) {
      task.state = _constants__WEBPACK_IMPORTED_MODULE_1__["INVOKE"];
      task.data.status = status;
      callback(_constants__WEBPACK_IMPORTED_MODULE_1__["INVOKE"], task);
    }
  }

  function scheduleTask(task) {
    if (task.state === _constants__WEBPACK_IMPORTED_MODULE_1__["SCHEDULE"]) {
      return;
    }

    task.state = _constants__WEBPACK_IMPORTED_MODULE_1__["SCHEDULE"];
    callback(_constants__WEBPACK_IMPORTED_MODULE_1__["SCHEDULE"], task);
    var target = task.data.target;

    function addListener(name) {
      target[_constants__WEBPACK_IMPORTED_MODULE_1__["ADD_EVENT_LISTENER_STR"]](name, function (_ref) {
        var type = _ref.type;

        if (type === READY_STATE_CHANGE) {
          if (target.readyState === 4 && target.status !== 0) {
            invokeTask(task, 'success');
          }
        } else {
          var status = type === LOAD ? 'success' : type;
          invokeTask(task, status);
        }
      });
    }

    addListener(READY_STATE_CHANGE);
    addListener(LOAD);
    addListener(TIMEOUT);
    addListener(ERROR);
    addListener(ABORT);
  }

  var openNative = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_0__["patchMethod"])(XMLHttpRequestPrototype, 'open', function () {
    return function (self, args) {
      if (!self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_IGNORE"]]) {
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_METHOD"]] = args[0];
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_URL"]] = args[1];
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_SYNC"]] = args[2] === false;
      }

      return openNative.apply(self, args);
    };
  });
  var sendNative = Object(_patch_utils__WEBPACK_IMPORTED_MODULE_0__["patchMethod"])(XMLHttpRequestPrototype, 'send', function () {
    return function (self, args) {
      if (self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_IGNORE"]]) {
        return sendNative.apply(self, args);
      }

      var task = {
        source: _constants__WEBPACK_IMPORTED_MODULE_1__["XMLHTTPREQUEST"],
        state: '',
        type: 'macroTask',
        data: {
          target: self,
          method: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_METHOD"]],
          sync: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_SYNC"]],
          url: self[_patch_utils__WEBPACK_IMPORTED_MODULE_0__["XHR_URL"]],
          status: ''
        }
      };

      try {
        scheduleTask(task);
        return sendNative.apply(self, args);
      } catch (e) {
        invokeTask(task, ERROR);
        throw e;
      }
    };
  });
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js":
/*!************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js ***!
  \************************************************************************/
/*! exports provided: Promise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return Promise; });
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-polyfill */ "./node_modules/promise-polyfill/src/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");


var local = {};

if (_utils__WEBPACK_IMPORTED_MODULE_1__["isBrowser"]) {
  local = window;
} else if (typeof self !== 'undefined') {
  local = self;
}

var Promise = 'Promise' in local ? local.Promise : promise_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/queue.js":
/*!********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/queue.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Queue = function () {
  function Queue(onFlush, opts) {
    if (opts === void 0) {
      opts = {};
    }

    this.onFlush = onFlush;
    this.items = [];
    this.queueLimit = opts.queueLimit || -1;
    this.flushInterval = opts.flushInterval || 0;
    this.timeoutId = undefined;
  }

  var _proto = Queue.prototype;

  _proto._setTimer = function _setTimer() {
    var _this = this;

    this.timeoutId = setTimeout(function () {
      return _this.flush();
    }, this.flushInterval);
  };

  _proto._clear = function _clear() {
    if (typeof this.timeoutId !== 'undefined') {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }

    this.items = [];
  };

  _proto.flush = function flush() {
    this.onFlush(this.items);

    this._clear();
  };

  _proto.add = function add(item) {
    this.items.push(item);

    if (this.queueLimit !== -1 && this.items.length >= this.queueLimit) {
      this.flush();
    } else {
      if (typeof this.timeoutId === 'undefined') {
        this._setTimer();
      }
    }
  };

  return Queue;
}();

/* harmony default export */ __webpack_exports__["default"] = (Queue);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/service-factory.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/service-factory.js ***!
  \******************************************************************************/
/*! exports provided: serviceCreators, ServiceFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceCreators", function() { return serviceCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceFactory", function() { return ServiceFactory; });
/* harmony import */ var _apm_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apm-server */ "./node_modules/@elastic/apm-rum-core/dist/es/common/apm-server.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-service */ "./node_modules/@elastic/apm-rum-core/dist/es/common/config-service.js");
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging-service */ "./node_modules/@elastic/apm-rum-core/dist/es/common/logging-service.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "./node_modules/@elastic/apm-rum-core/dist/es/state.js");
var _serviceCreators;






var serviceCreators = (_serviceCreators = {}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_SERVICE"]] = function () {
  return new _config_service__WEBPACK_IMPORTED_MODULE_1__["default"]();
}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_3__["LOGGING_SERVICE"]] = function () {
  return new _logging_service__WEBPACK_IMPORTED_MODULE_2__["default"]({
    prefix: '[Elastic APM] '
  });
}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_3__["APM_SERVER"]] = function (factory) {
  var _factory$getService = factory.getService([_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_SERVICE"], _constants__WEBPACK_IMPORTED_MODULE_3__["LOGGING_SERVICE"]]),
      configService = _factory$getService[0],
      loggingService = _factory$getService[1];

  return new _apm_server__WEBPACK_IMPORTED_MODULE_0__["default"](configService, loggingService);
}, _serviceCreators);

var ServiceFactory = function () {
  function ServiceFactory() {
    this.instances = {};
    this.initialized = false;
  }

  var _proto = ServiceFactory.prototype;

  _proto.init = function init() {
    if (this.initialized) {
      return;
    }

    this.initialized = true;
    var configService = this.getService(_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_SERVICE"]);
    configService.init();

    var _this$getService = this.getService([_constants__WEBPACK_IMPORTED_MODULE_3__["LOGGING_SERVICE"], _constants__WEBPACK_IMPORTED_MODULE_3__["APM_SERVER"]]),
        loggingService = _this$getService[0],
        apmServer = _this$getService[1];

    configService.events.observe(_constants__WEBPACK_IMPORTED_MODULE_3__["CONFIG_CHANGE"], function () {
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
    });
    apmServer.init();
  };

  _proto.getService = function getService(name) {
    var _this = this;

    if (typeof name === 'string') {
      if (!this.instances[name]) {
        if (typeof serviceCreators[name] === 'function') {
          this.instances[name] = serviceCreators[name](this);
        } else if (_state__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
          console.log('Cannot get service, No creator for: ' + name);
        }
      }

      return this.instances[name];
    } else if (Array.isArray(name)) {
      return name.map(function (n) {
        return _this.getService(n);
      });
    }
  };

  return ServiceFactory;
}();



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/throttle.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/throttle.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return throttle; });
function throttle(fn, onThrottle, opts) {
  var context = this;
  var limit = opts.limit;
  var interval = opts.interval;
  var counter = 0;
  var timeoutId;
  return function () {
    counter++;

    if (typeof timeoutId === 'undefined') {
      timeoutId = setTimeout(function () {
        counter = 0;
        timeoutId = undefined;
      }, interval);
    }

    if (counter > limit && typeof onThrottle === 'function') {
      return onThrottle.apply(context, arguments);
    } else {
      return fn.apply(context, arguments);
    }
  };
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/truncate.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/truncate.js ***!
  \***********************************************************************/
/*! exports provided: truncate, truncateModel, SPAN_MODEL, TRANSACTION_MODEL, ERROR_MODEL, METADATA_MODEL, RESPONSE_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncateModel", function() { return truncateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPAN_MODEL", function() { return SPAN_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSACTION_MODEL", function() { return TRANSACTION_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MODEL", function() { return ERROR_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "METADATA_MODEL", function() { return METADATA_MODEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSE_MODEL", function() { return RESPONSE_MODEL; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");

var METADATA_MODEL = {
  service: {
    name: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
    version: true,
    agent: {
      version: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true]
    },
    environment: true
  },
  labels: {
    '*': true
  }
};
var RESPONSE_MODEL = {
  '*': true,
  headers: {
    '*': true
  }
};
var DESTINATION_MODEL = {
  address: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"]],
  service: {
    '*': [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true]
  }
};
var CONTEXT_MODEL = {
  user: {
    id: true,
    email: true,
    username: true
  },
  tags: {
    '*': true
  },
  http: {
    response: RESPONSE_MODEL
  },
  destination: DESTINATION_MODEL,
  response: RESPONSE_MODEL
};
var SPAN_MODEL = {
  name: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  type: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  trace_id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  parent_id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  transaction_id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  subtype: true,
  action: true,
  context: CONTEXT_MODEL
};
var TRANSACTION_MODEL = {
  name: true,
  parent_id: true,
  type: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  trace_id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  span_count: {
    started: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true]
  },
  context: CONTEXT_MODEL
};
var ERROR_MODEL = {
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"], true],
  trace_id: true,
  transaction_id: true,
  parent_id: true,
  culprit: true,
  exception: {
    type: true
  },
  transaction: {
    type: true
  },
  context: CONTEXT_MODEL
};

function truncate(value, limit, required, placeholder) {
  if (limit === void 0) {
    limit = _constants__WEBPACK_IMPORTED_MODULE_0__["KEYWORD_LIMIT"];
  }

  if (required === void 0) {
    required = false;
  }

  if (placeholder === void 0) {
    placeholder = 'N/A';
  }

  if (required && isEmpty(value)) {
    value = placeholder;
  }

  if (typeof value === 'string') {
    return value.substring(0, limit);
  }

  return value;
}

function isEmpty(value) {
  return value == null || value === '' || typeof value === 'undefined';
}

function replaceValue(target, key, currModel) {
  var value = truncate(target[key], currModel[0], currModel[1]);

  if (isEmpty(value)) {
    delete target[key];
    return;
  }

  target[key] = value;
}

function truncateModel(model, target, childTarget) {
  if (model === void 0) {
    model = {};
  }

  if (childTarget === void 0) {
    childTarget = target;
  }

  var keys = Object.keys(model);
  var emptyArr = [];

  var _loop = function _loop(i) {
    var currKey = keys[i];
    var currModel = model[currKey] === true ? emptyArr : model[currKey];

    if (!Array.isArray(currModel)) {
      truncateModel(currModel, target, childTarget[currKey]);
    } else {
      if (currKey === '*') {
        Object.keys(childTarget).forEach(function (key) {
          return replaceValue(childTarget, key, currModel);
        });
      } else {
        replaceValue(childTarget, currKey, currModel);
      }
    }
  };

  for (var i = 0; i < keys.length; i++) {
    _loop(i);
  }

  return target;
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/url.js":
/*!******************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/url.js ***!
  \******************************************************************/
/*! exports provided: Url, slugifyUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Url", function() { return Url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugifyUrl", function() { return slugifyUrl; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");


function isDefaultPort(port, protocol) {
  switch (protocol) {
    case 'http:':
      return port === '80';

    case 'https:':
      return port === '443';
  }

  return true;
}

var RULES = [['#', 'hash'], ['?', 'query'], ['/', 'path'], ['@', 'auth', 1], [NaN, 'host', undefined, 1]];
var PROTOCOL_REGEX = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
var Url = function () {
  function Url(url) {
    var _this$extractProtocol = this.extractProtocol(url || ''),
        protocol = _this$extractProtocol.protocol,
        address = _this$extractProtocol.address,
        slashes = _this$extractProtocol.slashes;

    var relative = !protocol && !slashes;
    var location = this.getLocation();
    var instructions = RULES.slice();
    address = address.replace('\\', '/');

    if (!slashes) {
      instructions[2] = [NaN, 'path'];
    }

    var index;

    for (var i = 0; i < instructions.length; i++) {
      var instruction = instructions[i];
      var parse = instruction[0];
      var key = instruction[1];

      if (typeof parse === 'string') {
        index = address.indexOf(parse);

        if (~index) {
          var instLength = instruction[2];

          if (instLength) {
            var newIndex = address.lastIndexOf(parse);
            index = Math.max(index, newIndex);
            this[key] = address.slice(0, index);
            address = address.slice(index + instLength);
          } else {
            this[key] = address.slice(index);
            address = address.slice(0, index);
          }
        }
      } else {
        this[key] = address;
        address = '';
      }

      this[key] = this[key] || (relative && instruction[3] ? location[key] || '' : '');
      if (instruction[3]) this[key] = this[key].toLowerCase();
    }

    if (relative && this.path.charAt(0) !== '/') {
      this.path = '/' + this.path;
    }

    this.relative = relative;
    this.protocol = protocol || location.protocol;
    this.hostname = this.host;
    this.port = '';

    if (/:\d+$/.test(this.host)) {
      var value = this.host.split(':');
      var port = value.pop();
      var hostname = value.join(':');

      if (isDefaultPort(port, this.protocol)) {
        this.host = hostname;
      } else {
        this.port = port;
      }

      this.hostname = hostname;
    }

    this.origin = this.protocol && this.host && this.protocol !== 'file:' ? this.protocol + '//' + this.host : 'null';
    this.href = this.toString();
  }

  var _proto = Url.prototype;

  _proto.toString = function toString() {
    var result = this.protocol;
    result += '//';

    if (this.auth) {
      var REDACTED = '[REDACTED]';
      var userpass = this.auth.split(':');
      var username = userpass[0] ? REDACTED : '';
      var password = userpass[1] ? ':' + REDACTED : '';
      result += username + password + '@';
    }

    result += this.host;
    result += this.path;
    result += this.query;
    result += this.hash;
    return result;
  };

  _proto.getLocation = function getLocation() {
    var globalVar = {};

    if (_utils__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
      globalVar = window;
    }

    return globalVar.location;
  };

  _proto.extractProtocol = function extractProtocol(url) {
    var match = PROTOCOL_REGEX.exec(url);
    return {
      protocol: match[1] ? match[1].toLowerCase() : '',
      slashes: !!match[2],
      address: match[3]
    };
  };

  return Url;
}();
function slugifyUrl(urlStr, depth) {
  if (depth === void 0) {
    depth = 2;
  }

  var parsedUrl = new Url(urlStr);
  var query = parsedUrl.query,
      path = parsedUrl.path;
  var pathParts = path.substring(1).split('/');
  var redactString = ':id';
  var wildcard = '*';
  var specialCharsRegex = /\W|_/g;
  var digitsRegex = /[0-9]/g;
  var lowerCaseRegex = /[a-z]/g;
  var upperCaseRegex = /[A-Z]/g;
  var redactedParts = [];
  var redactedBefore = false;

  for (var index = 0; index < pathParts.length; index++) {
    var part = pathParts[index];

    if (redactedBefore || index > depth - 1) {
      if (part) {
        redactedParts.push(wildcard);
      }

      break;
    }

    var numberOfSpecialChars = (part.match(specialCharsRegex) || []).length;

    if (numberOfSpecialChars >= 2) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    var numberOfDigits = (part.match(digitsRegex) || []).length;

    if (numberOfDigits > 3 || part.length > 3 && numberOfDigits / part.length >= 0.3) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    var numberofUpperCase = (part.match(upperCaseRegex) || []).length;
    var numberofLowerCase = (part.match(lowerCaseRegex) || []).length;
    var lowerCaseRate = numberofLowerCase / part.length;
    var upperCaseRate = numberofUpperCase / part.length;

    if (part.length > 5 && (upperCaseRate > 0.3 && upperCaseRate < 0.6 || lowerCaseRate > 0.3 && lowerCaseRate < 0.6)) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }

    part && redactedParts.push(part);
  }

  var redacted = '/' + (redactedParts.length >= 2 ? redactedParts.join('/') : redactedParts.join('')) + (query ? '?{query}' : '');
  return redacted;
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js":
/*!********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js ***!
  \********************************************************************/
/*! exports provided: extend, merge, isUndefined, noop, baseExtend, bytesToHex, isCORSSupported, isObject, isFunction, isPlatformSupported, isDtHeaderValid, parseDtHeaderValue, getServerTimingInfo, getDtHeaderValue, getTSHeaderValue, getCurrentScript, getElasticScript, getTimeOrigin, generateRandomId, getEarliestSpan, getLatestNonXHRSpan, getDuration, getTime, now, rng, checkSameOrigin, scheduleMacroTask, scheduleMicroTask, setLabel, setRequestHeader, stripQueryStringFromUrl, find, removeInvalidChars, PERF, isPerfTimelineSupported, isBrowser, isPerfTypeSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseExtend", function() { return baseExtend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bytesToHex", function() { return bytesToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCORSSupported", function() { return isCORSSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlatformSupported", function() { return isPlatformSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDtHeaderValid", function() { return isDtHeaderValid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDtHeaderValue", function() { return parseDtHeaderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerTimingInfo", function() { return getServerTimingInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDtHeaderValue", function() { return getDtHeaderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTSHeaderValue", function() { return getTSHeaderValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentScript", function() { return getCurrentScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getElasticScript", function() { return getElasticScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeOrigin", function() { return getTimeOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomId", function() { return generateRandomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEarliestSpan", function() { return getEarliestSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLatestNonXHRSpan", function() { return getLatestNonXHRSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDuration", function() { return getDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTime", function() { return getTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rng", function() { return rng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSameOrigin", function() { return checkSameOrigin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleMacroTask", function() { return scheduleMacroTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scheduleMicroTask", function() { return scheduleMicroTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLabel", function() { return setLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRequestHeader", function() { return setRequestHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripQueryStringFromUrl", function() { return stripQueryStringFromUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeInvalidChars", function() { return removeInvalidChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERF", function() { return PERF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPerfTimelineSupported", function() { return isPerfTimelineSupported; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPerfTypeSupported", function() { return isPerfTypeSupported; });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ "./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js");

var slice = [].slice;
var isBrowser = typeof window !== 'undefined';
var PERF = isBrowser && typeof performance !== 'undefined' ? performance : {};

function isCORSSupported() {
  var xhr = new window.XMLHttpRequest();
  return 'withCredentials' in xhr;
}

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToHex(buffer) {
  var hexOctets = [];

  for (var _i = 0; _i < buffer.length; _i++) {
    hexOctets.push(byteToHex[buffer[_i]]);
  }

  return hexOctets.join('');
}

var destination = new Uint8Array(16);

function rng() {
  if (typeof crypto != 'undefined' && typeof crypto.getRandomValues == 'function') {
    return crypto.getRandomValues(destination);
  } else if (typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function') {
    return msCrypto.getRandomValues(destination);
  }

  return destination;
}

function generateRandomId(length) {
  var id = bytesToHex(rng());
  return id.substr(0, length);
}

function getDtHeaderValue(span) {
  var dtVersion = '00';
  var dtUnSampledFlags = '00';
  var dtSampledFlags = '01';

  if (span && span.traceId && span.id && span.parentId) {
    var flags = span.sampled ? dtSampledFlags : dtUnSampledFlags;
    var id = span.sampled ? span.id : span.parentId;
    return dtVersion + '-' + span.traceId + '-' + id + '-' + flags;
  }
}

function parseDtHeaderValue(value) {
  var parsed = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(value);

  if (parsed) {
    var flags = parsed[4];
    var sampled = flags !== '00';
    return {
      traceId: parsed[2],
      id: parsed[3],
      sampled: sampled
    };
  }
}

function isDtHeaderValid(header) {
  return /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(header) && header.slice(3, 35) !== '00000000000000000000000000000000' && header.slice(36, 52) !== '0000000000000000';
}

function getTSHeaderValue(_ref) {
  var sampleRate = _ref.sampleRate;

  if (typeof sampleRate !== 'number' || String(sampleRate).length > 256) {
    return;
  }

  var NAMESPACE = 'es';
  var SEPARATOR = '=';
  return "" + NAMESPACE + SEPARATOR + "s:" + sampleRate;
}

function setRequestHeader(target, name, value) {
  if (typeof target.setRequestHeader === 'function') {
    target.setRequestHeader(name, value);
  } else if (target.headers && typeof target.headers.append === 'function') {
    target.headers.append(name, value);
  } else {
    target[name] = value;
  }
}

function checkSameOrigin(source, target) {
  var isSame = false;

  if (typeof target === 'string') {
    isSame = source === target;
  } else if (target && typeof target.test === 'function') {
    isSame = target.test(source);
  } else if (Array.isArray(target)) {
    target.forEach(function (t) {
      if (!isSame) {
        isSame = checkSameOrigin(source, t);
      }
    });
  }

  return isSame;
}

function isPlatformSupported() {
  return isBrowser && typeof Set === 'function' && typeof JSON.stringify === 'function' && PERF && typeof PERF.now === 'function' && isCORSSupported();
}

function setLabel(key, value, obj) {
  if (!obj || !key) return;
  var skey = removeInvalidChars(key);
  var valueType = typeof value;

  if (value != undefined && valueType !== 'boolean' && valueType !== 'number') {
    value = String(value);
  }

  obj[skey] = value;
  return obj;
}

function getServerTimingInfo(serverTimingEntries) {
  if (serverTimingEntries === void 0) {
    serverTimingEntries = [];
  }

  var serverTimingInfo = [];
  var entrySeparator = ', ';
  var valueSeparator = ';';

  for (var _i2 = 0; _i2 < serverTimingEntries.length; _i2++) {
    var _serverTimingEntries$ = serverTimingEntries[_i2],
        name = _serverTimingEntries$.name,
        duration = _serverTimingEntries$.duration,
        description = _serverTimingEntries$.description;
    var timingValue = name;

    if (description) {
      timingValue += valueSeparator + 'desc=' + description;
    }

    if (duration) {
      timingValue += valueSeparator + 'dur=' + duration;
    }

    serverTimingInfo.push(timingValue);
  }

  return serverTimingInfo.join(entrySeparator);
}

function getTimeOrigin() {
  return PERF.timing.fetchStart;
}

function stripQueryStringFromUrl(url) {
  return url && url.split('?')[0];
}

function isObject(value) {
  return value !== null && typeof value === 'object';
}

function isFunction(value) {
  return typeof value === 'function';
}

function baseExtend(dst, objs, deep) {
  for (var i = 0, ii = objs.length; i < ii; ++i) {
    var obj = objs[i];
    if (!isObject(obj) && !isFunction(obj)) continue;
    var keys = Object.keys(obj);

    for (var j = 0, jj = keys.length; j < jj; j++) {
      var key = keys[j];
      var src = obj[key];

      if (deep && isObject(src)) {
        if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
        baseExtend(dst[key], [src], false);
      } else {
        dst[key] = src;
      }
    }
  }

  return dst;
}

function getElasticScript() {
  if (typeof document !== 'undefined') {
    var scripts = document.getElementsByTagName('script');

    for (var i = 0, l = scripts.length; i < l; i++) {
      var sc = scripts[i];

      if (sc.src.indexOf('elastic') > 0) {
        return sc;
      }
    }
  }
}

function getCurrentScript() {
  if (typeof document !== 'undefined') {
    var currentScript = document.currentScript;

    if (!currentScript) {
      return getElasticScript();
    }

    return currentScript;
  }
}

function extend(dst) {
  return baseExtend(dst, slice.call(arguments, 1), false);
}

function merge(dst) {
  return baseExtend(dst, slice.call(arguments, 1), true);
}

function isUndefined(obj) {
  return typeof obj === 'undefined';
}

function noop() {}

function find(array, predicate, thisArg) {
  if (array == null) {
    throw new TypeError('array is null or not defined');
  }

  var o = Object(array);
  var len = o.length >>> 0;

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  var k = 0;

  while (k < len) {
    var kValue = o[k];

    if (predicate.call(thisArg, kValue, k, o)) {
      return kValue;
    }

    k++;
  }

  return undefined;
}

function removeInvalidChars(key) {
  return key.replace(/[.*"]/g, '_');
}

function getLatestNonXHRSpan(spans) {
  var latestSpan = null;

  for (var _i3 = 0; _i3 < spans.length; _i3++) {
    var span = spans[_i3];

    if (String(span.type).indexOf('external') === -1 && (!latestSpan || latestSpan._end < span._end)) {
      latestSpan = span;
    }
  }

  return latestSpan;
}

function getEarliestSpan(spans) {
  var earliestSpan = spans[0];

  for (var _i4 = 1; _i4 < spans.length; _i4++) {
    var span = spans[_i4];

    if (earliestSpan._start > span._start) {
      earliestSpan = span;
    }
  }

  return earliestSpan;
}

function now() {
  return PERF.now();
}

function getTime(time) {
  return typeof time === 'number' && time >= 0 ? time : now();
}

function getDuration(start, end) {
  if (isUndefined(end) || isUndefined(start)) {
    return null;
  }

  return parseInt(end - start);
}

function scheduleMacroTask(callback) {
  setTimeout(callback, 0);
}

function scheduleMicroTask(callback) {
  _polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"].resolve().then(callback);
}

function isPerfTimelineSupported() {
  return typeof PERF.getEntriesByType === 'function';
}

function isPerfTypeSupported(type) {
  return typeof PerformanceObserver !== 'undefined' && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.indexOf(type) >= 0;
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/error-logging/error-logging.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/error-logging.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stack_trace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stack-trace */ "./node_modules/@elastic/apm-rum-core/dist/es/error-logging/stack-trace.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/context */ "./node_modules/@elastic/apm-rum-core/dist/es/common/context.js");
/* harmony import */ var _common_truncate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/truncate */ "./node_modules/@elastic/apm-rum-core/dist/es/common/truncate.js");
var _excluded = ["tags"];

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}





var IGNORE_KEYS = ['stack', 'message'];

function getErrorProperties(error) {
  var propertyFound = false;
  var properties = {};
  Object.keys(error).forEach(function (key) {
    if (IGNORE_KEYS.indexOf(key) >= 0) {
      return;
    }

    var val = error[key];

    if (val == null || typeof val === 'function') {
      return;
    }

    if (typeof val === 'object') {
      if (typeof val.toISOString !== 'function') return;
      val = val.toISOString();
    }

    properties[key] = val;
    propertyFound = true;
  });

  if (propertyFound) {
    return properties;
  }
}

var ErrorLogging = function () {
  function ErrorLogging(apmServer, configService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._transactionService = transactionService;
  }

  var _proto = ErrorLogging.prototype;

  _proto.createErrorDataModel = function createErrorDataModel(errorEvent) {
    var frames = Object(_stack_trace__WEBPACK_IMPORTED_MODULE_0__["createStackTraces"])(errorEvent);
    var filteredFrames = Object(_stack_trace__WEBPACK_IMPORTED_MODULE_0__["filterInvalidFrames"])(frames);
    var culprit = '(inline script)';
    var lastFrame = filteredFrames[filteredFrames.length - 1];

    if (lastFrame && lastFrame.filename) {
      culprit = lastFrame.filename;
    }

    var message = errorEvent.message,
        error = errorEvent.error;
    var errorMessage = message;
    var errorType = '';
    var errorContext = {};

    if (error && typeof error === 'object') {
      errorMessage = errorMessage || error.message;
      errorType = error.name;
      var customProperties = getErrorProperties(error);

      if (customProperties) {
        errorContext.custom = customProperties;
      }
    }

    if (!errorType) {
      if (errorMessage && errorMessage.indexOf(':') > -1) {
        errorType = errorMessage.split(':')[0];
      }
    }

    var currentTransaction = this._transactionService.getCurrentTransaction();

    var transactionContext = currentTransaction ? currentTransaction.context : {};

    var _this$_configService$ = this._configService.get('context'),
        tags = _this$_configService$.tags,
        configContext = _objectWithoutPropertiesLoose(_this$_configService$, _excluded);

    var pageContext = Object(_common_context__WEBPACK_IMPORTED_MODULE_2__["getPageContext"])();
    var context = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["merge"])({}, pageContext, transactionContext, configContext, errorContext);
    var errorObject = {
      id: Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["generateRandomId"])(),
      culprit: culprit,
      exception: {
        message: errorMessage,
        stacktrace: filteredFrames,
        type: errorType
      },
      context: context
    };

    if (currentTransaction) {
      errorObject = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])(errorObject, {
        trace_id: currentTransaction.traceId,
        parent_id: currentTransaction.id,
        transaction_id: currentTransaction.id,
        transaction: {
          type: currentTransaction.type,
          sampled: currentTransaction.sampled
        }
      });
    }

    return Object(_common_truncate__WEBPACK_IMPORTED_MODULE_3__["truncateModel"])(_common_truncate__WEBPACK_IMPORTED_MODULE_3__["ERROR_MODEL"], errorObject);
  };

  _proto.logErrorEvent = function logErrorEvent(errorEvent) {
    if (typeof errorEvent === 'undefined') {
      return;
    }

    var errorObject = this.createErrorDataModel(errorEvent);

    if (typeof errorObject.exception.message === 'undefined') {
      return;
    }

    this._apmServer.addError(errorObject);
  };

  _proto.registerListeners = function registerListeners() {
    var _this = this;

    window.addEventListener('error', function (errorEvent) {
      return _this.logErrorEvent(errorEvent);
    });
    window.addEventListener('unhandledrejection', function (promiseRejectionEvent) {
      return _this.logPromiseEvent(promiseRejectionEvent);
    });
  };

  _proto.logPromiseEvent = function logPromiseEvent(promiseRejectionEvent) {
    var prefix = 'Unhandled promise rejection: ';
    var reason = promiseRejectionEvent.reason;

    if (reason == null) {
      reason = '<no reason specified>';
    }

    var errorEvent;

    if (typeof reason.message === 'string') {
      var name = reason.name ? reason.name + ': ' : '';
      errorEvent = {
        error: reason,
        message: prefix + name + reason.message
      };
    } else {
      reason = typeof reason === 'object' ? '<object>' : typeof reason === 'function' ? '<function>' : reason;
      errorEvent = {
        message: prefix + reason
      };
    }

    this.logErrorEvent(errorEvent);
  };

  _proto.logError = function logError(messageOrError) {
    var errorEvent = {};

    if (typeof messageOrError === 'string') {
      errorEvent.message = messageOrError;
    } else {
      errorEvent.error = messageOrError;
    }

    return this.logErrorEvent(errorEvent);
  };

  return ErrorLogging;
}();

/* harmony default export */ __webpack_exports__["default"] = (ErrorLogging);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/error-logging/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/index.js ***!
  \***************************************************************************/
/*! exports provided: registerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerServices", function() { return registerServices; });
/* harmony import */ var _error_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-logging */ "./node_modules/@elastic/apm-rum-core/dist/es/error-logging/error-logging.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/service-factory */ "./node_modules/@elastic/apm-rum-core/dist/es/common/service-factory.js");




function registerServices() {
  _common_service_factory__WEBPACK_IMPORTED_MODULE_2__["serviceCreators"]['ErrorLogging'] = function (serviceFactory) {
    var _serviceFactory$getSe = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_1__["APM_SERVER"], _common_constants__WEBPACK_IMPORTED_MODULE_1__["CONFIG_SERVICE"], 'TransactionService']),
        apmServer = _serviceFactory$getSe[0],
        configService = _serviceFactory$getSe[1],
        transactionService = _serviceFactory$getSe[2];

    return new _error_logging__WEBPACK_IMPORTED_MODULE_0__["default"](apmServer, configService, transactionService);
  };
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/error-logging/stack-trace.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/stack-trace.js ***!
  \*********************************************************************************/
/*! exports provided: createStackTraces, filterInvalidFrames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStackTraces", function() { return createStackTraces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterInvalidFrames", function() { return filterInvalidFrames; });
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! error-stack-parser */ "./node_modules/@elastic/apm-rum-core/node_modules/error-stack-parser/error-stack-parser.js");
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_0__);


function filePathToFileName(fileUrl) {
  var origin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');

  if (fileUrl.indexOf(origin) > -1) {
    fileUrl = fileUrl.replace(origin + '/', '');
  }

  return fileUrl;
}

function cleanFilePath(filePath) {
  if (filePath === void 0) {
    filePath = '';
  }

  if (filePath === '<anonymous>') {
    filePath = '';
  }

  return filePath;
}

function isFileInline(fileUrl) {
  if (fileUrl) {
    return window.location.href.indexOf(fileUrl) === 0;
  }

  return false;
}

function normalizeStackFrames(stackFrames) {
  return stackFrames.map(function (frame) {
    if (frame.functionName) {
      frame.functionName = normalizeFunctionName(frame.functionName);
    }

    return frame;
  });
}

function normalizeFunctionName(fnName) {
  var parts = fnName.split('/');

  if (parts.length > 1) {
    fnName = ['Object', parts[parts.length - 1]].join('.');
  } else {
    fnName = parts[0];
  }

  fnName = fnName.replace(/.<$/gi, '.<anonymous>');
  fnName = fnName.replace(/^Anonymous function$/, '<anonymous>');
  parts = fnName.split('.');

  if (parts.length > 1) {
    fnName = parts[parts.length - 1];
  } else {
    fnName = parts[0];
  }

  return fnName;
}

function createStackTraces(errorEvent) {
  var error = errorEvent.error,
      filename = errorEvent.filename,
      lineno = errorEvent.lineno,
      colno = errorEvent.colno;
  var stackTraces = [];

  if (error) {
    try {
      stackTraces = error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default.a.parse(error);
    } catch (e) {}
  }

  if (stackTraces.length === 0) {
    stackTraces = [{
      fileName: filename,
      lineNumber: lineno,
      columnNumber: colno
    }];
  }

  var normalizedStackTraces = normalizeStackFrames(stackTraces);
  return normalizedStackTraces.map(function (stack) {
    var fileName = stack.fileName,
        lineNumber = stack.lineNumber,
        columnNumber = stack.columnNumber,
        _stack$functionName = stack.functionName,
        functionName = _stack$functionName === void 0 ? '<anonymous>' : _stack$functionName;

    if (!fileName && !lineNumber) {
      return {};
    }

    if (!columnNumber && !lineNumber) {
      return {};
    }

    var filePath = cleanFilePath(fileName);
    var cleanedFileName = filePathToFileName(filePath);

    if (isFileInline(filePath)) {
      cleanedFileName = '(inline script)';
    }

    return {
      abs_path: fileName,
      filename: cleanedFileName,
      function: functionName,
      lineno: lineNumber,
      colno: columnNumber
    };
  });
}
function filterInvalidFrames(frames) {
  return frames.filter(function (_ref) {
    var filename = _ref.filename,
        lineno = _ref.lineno;
    return typeof filename !== 'undefined' && typeof lineno !== 'undefined';
  });
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/index.js ***!
  \*************************************************************/
/*! exports provided: createServiceFactory, ServiceFactory, patchAll, patchEventHandler, isPlatformSupported, isBrowser, getInstrumentationFlags, createTracer, scheduleMicroTask, scheduleMacroTask, afterFrame, ERROR, PAGE_LOAD, CONFIG_SERVICE, LOGGING_SERVICE, APM_SERVER, bootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createServiceFactory", function() { return createServiceFactory; });
/* harmony import */ var _error_logging__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-logging */ "./node_modules/@elastic/apm-rum-core/dist/es/error-logging/index.js");
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./performance-monitoring */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/index.js");
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/service-factory */ "./node_modules/@elastic/apm-rum-core/dist/es/common/service-factory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServiceFactory", function() { return _common_service_factory__WEBPACK_IMPORTED_MODULE_2__["ServiceFactory"]; });

/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPlatformSupported", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["isPlatformSupported"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["isBrowser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduleMicroTask", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMicroTask"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scheduleMacroTask", function() { return _common_utils__WEBPACK_IMPORTED_MODULE_3__["scheduleMacroTask"]; });

/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/patching */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchAll", function() { return _common_patching__WEBPACK_IMPORTED_MODULE_4__["patchAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "patchEventHandler", function() { return _common_patching__WEBPACK_IMPORTED_MODULE_4__["patchEventHandler"]; });

/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["ERROR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PAGE_LOAD", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CONFIG_SERVICE", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["CONFIG_SERVICE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGGING_SERVICE", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["LOGGING_SERVICE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APM_SERVER", function() { return _common_constants__WEBPACK_IMPORTED_MODULE_5__["APM_SERVER"]; });

/* harmony import */ var _common_instrument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/instrument */ "./node_modules/@elastic/apm-rum-core/dist/es/common/instrument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstrumentationFlags", function() { return _common_instrument__WEBPACK_IMPORTED_MODULE_6__["getInstrumentationFlags"]; });

/* harmony import */ var _common_after_frame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/after-frame */ "./node_modules/@elastic/apm-rum-core/dist/es/common/after-frame.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "afterFrame", function() { return _common_after_frame__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bootstrap */ "./node_modules/@elastic/apm-rum-core/dist/es/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_8__["bootstrap"]; });

/* harmony import */ var _opentracing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./opentracing */ "./node_modules/@elastic/apm-rum-core/dist/es/opentracing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTracer", function() { return _opentracing__WEBPACK_IMPORTED_MODULE_9__["createTracer"]; });












function createServiceFactory() {
  Object(_performance_monitoring__WEBPACK_IMPORTED_MODULE_1__["registerServices"])();
  Object(_error_logging__WEBPACK_IMPORTED_MODULE_0__["registerServices"])();
  var serviceFactory = new _common_service_factory__WEBPACK_IMPORTED_MODULE_2__["ServiceFactory"]();
  return serviceFactory;
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/opentracing/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/opentracing/index.js ***!
  \*************************************************************************/
/*! exports provided: Span, Tracer, createTracer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTracer", function() { return createTracer; });
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tracer */ "./node_modules/@elastic/apm-rum-core/dist/es/opentracing/tracer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tracer", function() { return _tracer__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./span */ "./node_modules/@elastic/apm-rum-core/dist/es/opentracing/span.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Span", function() { return _span__WEBPACK_IMPORTED_MODULE_1__["default"]; });




function createTracer(serviceFactory) {
  var performanceMonitoring = serviceFactory.getService('PerformanceMonitoring');
  var transactionService = serviceFactory.getService('TransactionService');
  var errorLogging = serviceFactory.getService('ErrorLogging');
  var loggingService = serviceFactory.getService('LoggingService');
  return new _tracer__WEBPACK_IMPORTED_MODULE_0__["default"](performanceMonitoring, transactionService, loggingService, errorLogging);
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/opentracing/span.js":
/*!************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/opentracing/span.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentracing/lib/span */ "./node_modules/opentracing/lib/span.js");
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _performance_monitoring_transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../performance-monitoring/transaction */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}





var Span = function (_otSpan) {
  _inheritsLoose(Span, _otSpan);

  function Span(tracer, span) {
    var _this;

    _this = _otSpan.call(this) || this;
    _this.__tracer = tracer;
    _this.span = span;
    _this.isTransaction = span instanceof _performance_monitoring_transaction__WEBPACK_IMPORTED_MODULE_2__["default"];
    _this.spanContext = {
      id: span.id,
      traceId: span.traceId,
      sampled: span.sampled
    };
    return _this;
  }

  var _proto = Span.prototype;

  _proto._context = function _context() {
    return this.spanContext;
  };

  _proto._tracer = function _tracer() {
    return this.__tracer;
  };

  _proto._setOperationName = function _setOperationName(name) {
    this.span.name = name;
  };

  _proto._addTags = function _addTags(keyValuePairs) {
    var tags = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["extend"])({}, keyValuePairs);

    if (tags.type) {
      this.span.type = tags.type;
      delete tags.type;
    }

    if (this.isTransaction) {
      var userId = tags['user.id'];
      var username = tags['user.username'];
      var email = tags['user.email'];

      if (userId || username || email) {
        this.span.addContext({
          user: {
            id: userId,
            username: username,
            email: email
          }
        });
        delete tags['user.id'];
        delete tags['user.username'];
        delete tags['user.email'];
      }
    }

    this.span.addLabels(tags);
  };

  _proto._log = function _log(log, timestamp) {
    if (log.event === 'error') {
      if (log['error.object']) {
        this.__tracer.errorLogging.logError(log['error.object']);
      } else if (log.message) {
        this.__tracer.errorLogging.logError(log.message);
      }
    }
  };

  _proto._finish = function _finish(finishTime) {
    this.span.end();

    if (finishTime) {
      this.span._end = finishTime - Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["getTimeOrigin"])();
    }
  };

  return Span;
}(opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0__["Span"]);

/* harmony default export */ __webpack_exports__["default"] = (Span);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/opentracing/tracer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/opentracing/tracer.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentracing/lib/tracer */ "./node_modules/opentracing/lib/tracer.js");
/* harmony import */ var opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! opentracing/lib/constants */ "./node_modules/opentracing/lib/constants.js");
/* harmony import */ var opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! opentracing/lib/span */ "./node_modules/opentracing/lib/span.js");
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ "./node_modules/@elastic/apm-rum-core/dist/es/state.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./span */ "./node_modules/@elastic/apm-rum-core/dist/es/opentracing/span.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}








var Tracer = function (_otTracer) {
  _inheritsLoose(Tracer, _otTracer);

  function Tracer(performanceMonitoring, transactionService, loggingService, errorLogging) {
    var _this;

    _this = _otTracer.call(this) || this;
    _this.performanceMonitoring = performanceMonitoring;
    _this.transactionService = transactionService;
    _this.loggingService = loggingService;
    _this.errorLogging = errorLogging;
    return _this;
  }

  var _proto = Tracer.prototype;

  _proto._startSpan = function _startSpan(name, options) {
    var spanOptions = {
      managed: true
    };

    if (options) {
      spanOptions.timestamp = options.startTime;

      if (options.childOf) {
        spanOptions.parentId = options.childOf.id;
      } else if (options.references && options.references.length > 0) {
        if (options.references.length > 1) {
          if (_state__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
            this.loggingService.debug('Elastic APM OpenTracing: Unsupported number of references, only the first childOf reference will be recorded.');
          }
        }

        var childRef = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["find"])(options.references, function (ref) {
          return ref.type() === opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["REFERENCE_CHILD_OF"];
        });

        if (childRef) {
          spanOptions.parentId = childRef.referencedContext().id;
        }
      }
    }

    var span;
    var currentTransaction = this.transactionService.getCurrentTransaction();

    if (currentTransaction) {
      span = this.transactionService.startSpan(name, undefined, spanOptions);
    } else {
      span = this.transactionService.startTransaction(name, undefined, spanOptions);
    }

    if (!span) {
      return new opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2__["Span"]();
    }

    if (spanOptions.timestamp) {
      span._start = spanOptions.timestamp - Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["getTimeOrigin"])();
    }

    var otSpan = new _span__WEBPACK_IMPORTED_MODULE_5__["default"](this, span);

    if (options && options.tags) {
      otSpan.addTags(options.tags);
    }

    return otSpan;
  };

  _proto._inject = function _inject(spanContext, format, carrier) {
    switch (format) {
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_TEXT_MAP"]:
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_HTTP_HEADERS"]:
        this.performanceMonitoring.injectDtHeader(spanContext, carrier);
        break;

      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_BINARY"]:
        if (_state__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
          this.loggingService.debug('Elastic APM OpenTracing: binary carrier format is not supported.');
        }

        break;
    }
  };

  _proto._extract = function _extract(format, carrier) {
    var ctx;

    switch (format) {
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_TEXT_MAP"]:
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_HTTP_HEADERS"]:
        ctx = this.performanceMonitoring.extractDtHeader(carrier);
        break;

      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__["FORMAT_BINARY"]:
        if (_state__WEBPACK_IMPORTED_MODULE_4__["__DEV__"]) {
          this.loggingService.debug('Elastic APM OpenTracing: binary carrier format is not supported.');
        }

        break;
    }

    if (!ctx) {
      ctx = null;
    }

    return ctx;
  };

  return Tracer;
}(opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0__["Tracer"]);

/* harmony default export */ __webpack_exports__["default"] = (Tracer);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/breakdown.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/breakdown.js ***!
  \****************************************************************************************/
/*! exports provided: captureBreakdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureBreakdown", function() { return captureBreakdown; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");


var pageLoadBreakdowns = [['domainLookupStart', 'domainLookupEnd', 'DNS'], ['connectStart', 'connectEnd', 'TCP'], ['requestStart', 'responseStart', 'Request'], ['responseStart', 'responseEnd', 'Response'], ['domLoading', 'domComplete', 'Processing'], ['loadEventStart', 'loadEventEnd', 'Load']];

function getValue(value) {
  return {
    value: value
  };
}

function calculateSelfTime(transaction) {
  var spans = transaction.spans,
      _start = transaction._start,
      _end = transaction._end;

  if (spans.length === 0) {
    return transaction.duration();
  }

  spans.sort(function (span1, span2) {
    return span1._start - span2._start;
  });
  var span = spans[0];
  var spanEnd = span._end;
  var spanStart = span._start;
  var lastContinuousEnd = spanEnd;
  var selfTime = spanStart - _start;

  for (var i = 1; i < spans.length; i++) {
    span = spans[i];
    spanStart = span._start;
    spanEnd = span._end;

    if (spanStart > lastContinuousEnd) {
      selfTime += spanStart - lastContinuousEnd;
      lastContinuousEnd = spanEnd;
    } else if (spanEnd > lastContinuousEnd) {
      lastContinuousEnd = spanEnd;
    }
  }

  if (lastContinuousEnd < _end) {
    selfTime += _end - lastContinuousEnd;
  }

  return selfTime;
}

function groupSpans(transaction) {
  var spanMap = {};
  var transactionSelfTime = calculateSelfTime(transaction);
  spanMap['app'] = {
    count: 1,
    duration: transactionSelfTime
  };
  var spans = transaction.spans;

  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    var duration = span.duration();

    if (duration === 0 || duration == null) {
      continue;
    }

    var type = span.type,
        subtype = span.subtype;
    var key = type.replace(_common_constants__WEBPACK_IMPORTED_MODULE_1__["TRUNCATED_TYPE"], '');

    if (subtype) {
      key += '.' + subtype;
    }

    if (!spanMap[key]) {
      spanMap[key] = {
        duration: 0,
        count: 0
      };
    }

    spanMap[key].count++;
    spanMap[key].duration += duration;
  }

  return spanMap;
}

function getSpanBreakdown(transactionDetails, _ref) {
  var details = _ref.details,
      _ref$count = _ref.count,
      count = _ref$count === void 0 ? 1 : _ref$count,
      duration = _ref.duration;
  return {
    transaction: transactionDetails,
    span: details,
    samples: {
      'span.self_time.count': getValue(count),
      'span.self_time.sum.us': getValue(duration)
    }
  };
}

function captureBreakdown(transaction, timings) {
  if (timings === void 0) {
    timings = _common_utils__WEBPACK_IMPORTED_MODULE_0__["PERF"].timing;
  }

  var breakdowns = [];
  var trDuration = transaction.duration();
  var name = transaction.name,
      type = transaction.type,
      sampled = transaction.sampled;
  var transactionDetails = {
    name: name,
    type: type
  };
  breakdowns.push({
    transaction: transactionDetails,
    samples: {
      'transaction.duration.count': getValue(1),
      'transaction.duration.sum.us': getValue(trDuration),
      'transaction.breakdown.count': getValue(sampled ? 1 : 0)
    }
  });

  if (!sampled) {
    return breakdowns;
  }

  if (type === _common_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_LOAD"] && timings) {
    for (var i = 0; i < pageLoadBreakdowns.length; i++) {
      var current = pageLoadBreakdowns[i];
      var start = timings[current[0]];
      var end = timings[current[1]];
      var duration = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(start, end);

      if (duration === 0 || duration == null) {
        continue;
      }

      breakdowns.push(getSpanBreakdown(transactionDetails, {
        details: {
          type: current[2]
        },
        duration: duration
      }));
    }
  } else {
    var spanMap = groupSpans(transaction);
    Object.keys(spanMap).forEach(function (key) {
      var _key$split = key.split('.'),
          type = _key$split[0],
          subtype = _key$split[1];

      var _spanMap$key = spanMap[key],
          duration = _spanMap$key.duration,
          count = _spanMap$key.count;
      breakdowns.push(getSpanBreakdown(transactionDetails, {
        details: {
          type: type,
          subtype: subtype
        },
        duration: duration,
        count: count
      }));
    });
  }

  return breakdowns;
}

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/capture-navigation.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/capture-navigation.js ***!
  \*************************************************************************************************/
/*! exports provided: getPageLoadMarks, captureNavigation, createNavigationTimingSpans, createResourceTimingSpans, createUserTimingSpans, NAVIGATION_TIMING_MARKS, COMPRESSED_NAV_TIMING_MARKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageLoadMarks", function() { return getPageLoadMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureNavigation", function() { return captureNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNavigationTimingSpans", function() { return createNavigationTimingSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createResourceTimingSpans", function() { return createResourceTimingSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUserTimingSpans", function() { return createUserTimingSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_TIMING_MARKS", function() { return NAVIGATION_TIMING_MARKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPRESSED_NAV_TIMING_MARKS", function() { return COMPRESSED_NAV_TIMING_MARKS; });
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./span */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "./node_modules/@elastic/apm-rum-core/dist/es/state.js");




var eventPairs = [['domainLookupStart', 'domainLookupEnd', 'Domain lookup'], ['connectStart', 'connectEnd', 'Making a connection to the server'], ['requestStart', 'responseEnd', 'Requesting and receiving the document'], ['domLoading', 'domInteractive', 'Parsing the document, executing sync. scripts'], ['domContentLoadedEventStart', 'domContentLoadedEventEnd', 'Fire "DOMContentLoaded" event'], ['loadEventStart', 'loadEventEnd', 'Fire "load" event']];

function shouldCreateSpan(start, end, trStart, trEnd, baseTime) {
  if (baseTime === void 0) {
    baseTime = 0;
  }

  return typeof start === 'number' && typeof end === 'number' && start >= baseTime && end > start && start - baseTime >= trStart && end - baseTime <= trEnd && end - start < _common_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_SPAN_DURATION"] && start - baseTime < _common_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_SPAN_DURATION"] && end - baseTime < _common_constants__WEBPACK_IMPORTED_MODULE_1__["MAX_SPAN_DURATION"];
}

function createNavigationTimingSpans(timings, baseTime, trStart, trEnd) {
  var spans = [];

  for (var i = 0; i < eventPairs.length; i++) {
    var start = timings[eventPairs[i][0]];
    var end = timings[eventPairs[i][1]];

    if (!shouldCreateSpan(start, end, trStart, trEnd, baseTime)) {
      continue;
    }

    var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"](eventPairs[i][2], 'hard-navigation.browser-timing');
    var data = null;

    if (eventPairs[i][0] === 'requestStart') {
      span.pageResponse = true;
      data = {
        url: location.origin
      };
    }

    span._start = start - baseTime;
    span.end(end - baseTime, data);
    spans.push(span);
  }

  return spans;
}

function createResourceTimingSpan(resourceTimingEntry) {
  var name = resourceTimingEntry.name,
      initiatorType = resourceTimingEntry.initiatorType,
      startTime = resourceTimingEntry.startTime,
      responseEnd = resourceTimingEntry.responseEnd;
  var kind = 'resource';

  if (initiatorType) {
    kind += '.' + initiatorType;
  }

  var spanName = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["stripQueryStringFromUrl"])(name);
  var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"](spanName, kind);
  span._start = startTime;
  span.end(responseEnd, {
    url: name,
    entry: resourceTimingEntry
  });
  return span;
}

function isCapturedByPatching(resourceStartTime, requestPatchTime) {
  return requestPatchTime != null && resourceStartTime > requestPatchTime;
}

function isIntakeAPIEndpoint(url) {
  return /intake\/v\d+\/rum\/events/.test(url);
}

function createResourceTimingSpans(entries, requestPatchTime, trStart, trEnd) {
  var spans = [];

  for (var i = 0; i < entries.length; i++) {
    var _entries$i = entries[i],
        initiatorType = _entries$i.initiatorType,
        name = _entries$i.name,
        startTime = _entries$i.startTime,
        responseEnd = _entries$i.responseEnd;

    if (_common_constants__WEBPACK_IMPORTED_MODULE_1__["RESOURCE_INITIATOR_TYPES"].indexOf(initiatorType) === -1 || name == null) {
      continue;
    }

    if ((initiatorType === 'xmlhttprequest' || initiatorType === 'fetch') && (isIntakeAPIEndpoint(name) || isCapturedByPatching(startTime, requestPatchTime))) {
      continue;
    }

    if (shouldCreateSpan(startTime, responseEnd, trStart, trEnd)) {
      spans.push(createResourceTimingSpan(entries[i]));
    }
  }

  return spans;
}

function createUserTimingSpans(entries, trStart, trEnd) {
  var userTimingSpans = [];

  for (var i = 0; i < entries.length; i++) {
    var _entries$i2 = entries[i],
        name = _entries$i2.name,
        startTime = _entries$i2.startTime,
        duration = _entries$i2.duration;
    var end = startTime + duration;

    if (duration <= _common_constants__WEBPACK_IMPORTED_MODULE_1__["USER_TIMING_THRESHOLD"] || !shouldCreateSpan(startTime, end, trStart, trEnd)) {
      continue;
    }

    var kind = 'app';
    var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"](name, kind);
    span._start = startTime;
    span.end(end);
    userTimingSpans.push(span);
  }

  return userTimingSpans;
}

var NAVIGATION_TIMING_MARKS = ['fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domInteractive', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domComplete', 'loadEventStart', 'loadEventEnd'];
var COMPRESSED_NAV_TIMING_MARKS = ['fs', 'ls', 'le', 'cs', 'ce', 'qs', 'rs', 're', 'dl', 'di', 'ds', 'de', 'dc', 'es', 'ee'];

function getNavigationTimingMarks(timing) {
  var fetchStart = timing.fetchStart,
      navigationStart = timing.navigationStart,
      responseStart = timing.responseStart,
      responseEnd = timing.responseEnd;

  if (fetchStart >= navigationStart && responseStart >= fetchStart && responseEnd >= responseStart) {
    var marks = {};
    NAVIGATION_TIMING_MARKS.forEach(function (timingKey) {
      var m = timing[timingKey];

      if (m && m >= fetchStart) {
        marks[timingKey] = parseInt(m - fetchStart);
      }
    });
    return marks;
  }

  return null;
}

function getPageLoadMarks(timing) {
  var marks = getNavigationTimingMarks(timing);

  if (marks == null) {
    return null;
  }

  return {
    navigationTiming: marks,
    agent: {
      timeToFirstByte: marks.responseStart,
      domInteractive: marks.domInteractive,
      domComplete: marks.domComplete
    }
  };
}

function captureNavigation(transaction) {
  if (!transaction.captureTimings) {
    return;
  }

  var trEnd = transaction._end;

  if (transaction.type === _common_constants__WEBPACK_IMPORTED_MODULE_1__["PAGE_LOAD"]) {
    if (transaction.marks && transaction.marks.custom) {
      var customMarks = transaction.marks.custom;
      Object.keys(customMarks).forEach(function (key) {
        customMarks[key] += transaction._start;
      });
    }

    var trStart = 0;
    transaction._start = trStart;
    var timings = _common_utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].timing;
    createNavigationTimingSpans(timings, timings.fetchStart, trStart, trEnd).forEach(function (span) {
      span.traceId = transaction.traceId;
      span.sampled = transaction.sampled;

      if (span.pageResponse && transaction.options.pageLoadSpanId) {
        span.id = transaction.options.pageLoadSpanId;
      }

      transaction.spans.push(span);
    });
    transaction.addMarks(getPageLoadMarks(timings));
  }

  if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["isPerfTimelineSupported"])()) {
    var _trStart = transaction._start;
    var resourceEntries = _common_utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__["RESOURCE"]);
    createResourceTimingSpans(resourceEntries, _state__WEBPACK_IMPORTED_MODULE_3__["state"].bootstrapTime, _trStart, trEnd).forEach(function (span) {
      return transaction.spans.push(span);
    });
    var userEntries = _common_utils__WEBPACK_IMPORTED_MODULE_2__["PERF"].getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__["MEASURE"]);
    createUserTimingSpans(userEntries, _trStart, trEnd).forEach(function (span) {
      return transaction.spans.push(span);
    });
  }
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/index.js ***!
  \************************************************************************************/
/*! exports provided: registerServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerServices", function() { return registerServices; });
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./performance-monitoring */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/performance-monitoring.js");
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-service */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction-service.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/service-factory */ "./node_modules/@elastic/apm-rum-core/dist/es/common/service-factory.js");





function registerServices() {
  _common_service_factory__WEBPACK_IMPORTED_MODULE_3__["serviceCreators"]['TransactionService'] = function (serviceFactory) {
    var _serviceFactory$getSe = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_2__["LOGGING_SERVICE"], _common_constants__WEBPACK_IMPORTED_MODULE_2__["CONFIG_SERVICE"]]),
        loggingService = _serviceFactory$getSe[0],
        configService = _serviceFactory$getSe[1];

    return new _transaction_service__WEBPACK_IMPORTED_MODULE_1__["default"](loggingService, configService);
  };

  _common_service_factory__WEBPACK_IMPORTED_MODULE_3__["serviceCreators"]['PerformanceMonitoring'] = function (serviceFactory) {
    var _serviceFactory$getSe2 = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_2__["APM_SERVER"], _common_constants__WEBPACK_IMPORTED_MODULE_2__["CONFIG_SERVICE"], _common_constants__WEBPACK_IMPORTED_MODULE_2__["LOGGING_SERVICE"], 'TransactionService']),
        apmServer = _serviceFactory$getSe2[0],
        configService = _serviceFactory$getSe2[1],
        loggingService = _serviceFactory$getSe2[2],
        transactionService = _serviceFactory$getSe2[3];

    return new _performance_monitoring__WEBPACK_IMPORTED_MODULE_0__["default"](apmServer, configService, loggingService, transactionService);
  };
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/metrics.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/metrics.js ***!
  \**************************************************************************************/
/*! exports provided: metrics, createLongTaskSpans, createFirstInputDelaySpan, createTotalBlockingTimeSpan, calculateTotalBlockingTime, calculateCumulativeLayoutShift, captureObserverEntries, PerfEntryRecorder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metrics", function() { return metrics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLongTaskSpans", function() { return createLongTaskSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFirstInputDelaySpan", function() { return createFirstInputDelaySpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTotalBlockingTimeSpan", function() { return createTotalBlockingTimeSpan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalBlockingTime", function() { return calculateTotalBlockingTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCumulativeLayoutShift", function() { return calculateCumulativeLayoutShift; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "captureObserverEntries", function() { return captureObserverEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfEntryRecorder", function() { return PerfEntryRecorder; });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span.js");



var metrics = {
  fid: 0,
  fcp: 0,
  tbt: {
    start: Infinity,
    duration: 0
  },
  cls: 0,
  longtask: {
    count: 0,
    duration: 0,
    max: 0
  }
};
var LONG_TASK_THRESHOLD = 50;
function createLongTaskSpans(longtasks, agg) {
  var spans = [];

  for (var i = 0; i < longtasks.length; i++) {
    var _longtasks$i = longtasks[i],
        name = _longtasks$i.name,
        startTime = _longtasks$i.startTime,
        duration = _longtasks$i.duration,
        attribution = _longtasks$i.attribution;
    var end = startTime + duration;
    var span = new _span__WEBPACK_IMPORTED_MODULE_2__["default"]("Longtask(" + name + ")", _common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"], {
      startTime: startTime
    });
    agg.count++;
    agg.duration += duration;
    agg.max = Math.max(duration, agg.max);

    if (attribution.length > 0) {
      var _attribution$ = attribution[0],
          _name = _attribution$.name,
          containerType = _attribution$.containerType,
          containerName = _attribution$.containerName,
          containerId = _attribution$.containerId;
      var customContext = {
        attribution: _name,
        type: containerType
      };

      if (containerName) {
        customContext.name = containerName;
      }

      if (containerId) {
        customContext.id = containerId;
      }

      span.addContext({
        custom: customContext
      });
    }

    span.end(end);
    spans.push(span);
  }

  return spans;
}
function createFirstInputDelaySpan(fidEntries) {
  var firstInput = fidEntries[0];

  if (firstInput) {
    var startTime = firstInput.startTime,
        processingStart = firstInput.processingStart;
    var span = new _span__WEBPACK_IMPORTED_MODULE_2__["default"]('First Input Delay', _common_constants__WEBPACK_IMPORTED_MODULE_0__["FIRST_INPUT"], {
      startTime: startTime
    });
    span.end(processingStart);
    return span;
  }
}
function createTotalBlockingTimeSpan(tbtObject) {
  var start = tbtObject.start,
      duration = tbtObject.duration;
  var tbtSpan = new _span__WEBPACK_IMPORTED_MODULE_2__["default"]('Total Blocking Time', _common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"], {
    startTime: start
  });
  tbtSpan.end(start + duration);
  return tbtSpan;
}
function calculateTotalBlockingTime(longtaskEntries) {
  longtaskEntries.forEach(function (entry) {
    var name = entry.name,
        startTime = entry.startTime,
        duration = entry.duration;

    if (startTime < metrics.fcp) {
      return;
    }

    if (name !== 'self' && name.indexOf('same-origin') === -1) {
      return;
    }

    metrics.tbt.start = Math.min(metrics.tbt.start, startTime);
    var blockingTime = duration - LONG_TASK_THRESHOLD;

    if (blockingTime > 0) {
      metrics.tbt.duration += blockingTime;
    }
  });
}
function calculateCumulativeLayoutShift(clsEntries) {
  clsEntries.forEach(function (entry) {
    if (!entry.hadRecentInput && entry.value) {
      metrics.cls += entry.value;
    }
  });
}
function captureObserverEntries(list, _ref) {
  var isHardNavigation = _ref.isHardNavigation,
      trStart = _ref.trStart;
  var longtaskEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["LONG_TASK"]).filter(function (entry) {
    return entry.startTime >= trStart;
  });
  var longTaskSpans = createLongTaskSpans(longtaskEntries, metrics.longtask);
  var result = {
    spans: longTaskSpans,
    marks: {}
  };

  if (!isHardNavigation) {
    return result;
  }

  var lcpEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["LARGEST_CONTENTFUL_PAINT"]);
  var lastLcpEntry = lcpEntries[lcpEntries.length - 1];

  if (lastLcpEntry) {
    var lcp = parseInt(lastLcpEntry.startTime);
    metrics.lcp = lcp;
    result.marks.largestContentfulPaint = lcp;
  }

  var timing = _common_utils__WEBPACK_IMPORTED_MODULE_1__["PERF"].timing;
  var unloadDiff = timing.fetchStart - timing.navigationStart;
  var fcpEntry = list.getEntriesByName(_common_constants__WEBPACK_IMPORTED_MODULE_0__["FIRST_CONTENTFUL_PAINT"])[0];

  if (fcpEntry) {
    var fcp = parseInt(unloadDiff >= 0 ? fcpEntry.startTime - unloadDiff : fcpEntry.startTime);
    metrics.fcp = fcp;
    result.marks.firstContentfulPaint = fcp;
  }

  var fidEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["FIRST_INPUT"]);
  var fidSpan = createFirstInputDelaySpan(fidEntries);

  if (fidSpan) {
    metrics.fid = fidSpan.duration();
    result.spans.push(fidSpan);
  }

  calculateTotalBlockingTime(longtaskEntries);
  var clsEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__["LAYOUT_SHIFT"]);
  calculateCumulativeLayoutShift(clsEntries);
  return result;
}
var PerfEntryRecorder = function () {
  function PerfEntryRecorder(callback) {
    this.po = {
      observe: _common_utils__WEBPACK_IMPORTED_MODULE_1__["noop"],
      disconnect: _common_utils__WEBPACK_IMPORTED_MODULE_1__["noop"]
    };

    if (window.PerformanceObserver) {
      this.po = new PerformanceObserver(callback);
    }
  }

  var _proto = PerfEntryRecorder.prototype;

  _proto.start = function start(type) {
    try {
      this.po.observe({
        type: type,
        buffered: true
      });
    } catch (_) {}
  };

  _proto.stop = function stop() {
    this.po.disconnect();
  };

  return PerfEntryRecorder;
}();

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/performance-monitoring.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/performance-monitoring.js ***!
  \*****************************************************************************************************/
/*! exports provided: groupSmallContinuouslySimilarSpans, adjustTransaction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupSmallContinuouslySimilarSpans", function() { return groupSmallContinuouslySimilarSpans; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustTransaction", function() { return adjustTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerformanceMonitoring; });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/url */ "./node_modules/@elastic/apm-rum-core/dist/es/common/url.js");
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/patching */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/index.js");
/* harmony import */ var _common_patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/patching/patch-utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_truncate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/truncate */ "./node_modules/@elastic/apm-rum-core/dist/es/common/truncate.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../state */ "./node_modules/@elastic/apm-rum-core/dist/es/state.js");







var SIMILAR_SPAN_TO_TRANSACTION_RATIO = 0.05;
var TRANSACTION_DURATION_THRESHOLD = 60000;
function groupSmallContinuouslySimilarSpans(originalSpans, transDuration, threshold) {
  originalSpans.sort(function (spanA, spanB) {
    return spanA._start - spanB._start;
  });
  var spans = [];
  var lastCount = 1;
  originalSpans.forEach(function (span, index) {
    if (spans.length === 0) {
      spans.push(span);
    } else {
      var lastSpan = spans[spans.length - 1];
      var isContinuouslySimilar = lastSpan.type === span.type && lastSpan.subtype === span.subtype && lastSpan.action === span.action && lastSpan.name === span.name && span.duration() / transDuration < threshold && (span._start - lastSpan._end) / transDuration < threshold;
      var isLastSpan = originalSpans.length === index + 1;

      if (isContinuouslySimilar) {
        lastCount++;
        lastSpan._end = span._end;
      }

      if (lastCount > 1 && (!isContinuouslySimilar || isLastSpan)) {
        lastSpan.name = lastCount + 'x ' + lastSpan.name;
        lastCount = 1;
      }

      if (!isContinuouslySimilar) {
        spans.push(span);
      }
    }
  });
  return spans;
}
function adjustTransaction(transaction) {
  if (transaction.sampled) {
    var filterdSpans = transaction.spans.filter(function (span) {
      return span.duration() > 0 && span._start >= transaction._start && span._end <= transaction._end;
    });

    if (transaction.isManaged()) {
      var duration = transaction.duration();
      var similarSpans = groupSmallContinuouslySimilarSpans(filterdSpans, duration, SIMILAR_SPAN_TO_TRANSACTION_RATIO);
      transaction.spans = similarSpans;
    } else {
      transaction.spans = filterdSpans;
    }
  } else {
    transaction.resetFields();
  }

  return transaction;
}

var PerformanceMonitoring = function () {
  function PerformanceMonitoring(apmServer, configService, loggingService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._logginService = loggingService;
    this._transactionService = transactionService;
  }

  var _proto = PerformanceMonitoring.prototype;

  _proto.init = function init(flags) {
    var _this = this;

    if (flags === void 0) {
      flags = {};
    }

    this._configService.events.observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["TRANSACTION_END"] + _common_constants__WEBPACK_IMPORTED_MODULE_4__["AFTER_EVENT"], function (tr) {
      var payload = _this.createTransactionPayload(tr);

      if (payload) {
        _this._apmServer.addTransaction(payload);
      }
    });

    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_4__["HISTORY"]]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_2__["patchEventHandler"].observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["HISTORY"], this.getHistorySub());
    }

    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_4__["XMLHTTPREQUEST"]]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_2__["patchEventHandler"].observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["XMLHTTPREQUEST"], this.getXHRSub());
    }

    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH"]]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_2__["patchEventHandler"].observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH"], this.getFetchSub());
    }

    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_4__["EVENT_TARGET"]]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_2__["patchEventHandler"].observe(_common_constants__WEBPACK_IMPORTED_MODULE_4__["EVENT_TARGET"], this.getEventTargetSub());
    }
  };

  _proto.getEventTargetSub = function getEventTargetSub() {
    var transactionService = this._transactionService;
    return function (event, task) {
      if (event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["SCHEDULE"] && task.source === _common_constants__WEBPACK_IMPORTED_MODULE_4__["EVENT_TARGET"] && task.eventType === 'click') {
        var target = task.target;
        var name = target.getAttribute('name');
        var additionalInfo = '';

        if (name) {
          additionalInfo = "[\"" + name + "\"]";
        }

        var tagName = target.tagName.toLowerCase();
        var tr = transactionService.startTransaction("Click - " + tagName + additionalInfo, _common_constants__WEBPACK_IMPORTED_MODULE_4__["USER_INTERACTION"], {
          managed: true,
          canReuse: true,
          reuseThreshold: 300
        });

        if (tr) {
          var classes = target.getAttribute('class');

          if (classes) {
            tr.addContext({
              custom: {
                classes: classes
              }
            });
          }
        }
      }
    };
  };

  _proto.getHistorySub = function getHistorySub() {
    var transactionService = this._transactionService;
    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_4__["HISTORY"] && event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["INVOKE"]) {
        transactionService.startTransaction(task.data.title, 'route-change', {
          managed: true,
          canReuse: true
        });
      }
    };
  };

  _proto.getXHRSub = function getXHRSub() {
    var _this2 = this;

    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_4__["XMLHTTPREQUEST"] && !_common_patching_patch_utils__WEBPACK_IMPORTED_MODULE_3__["globalState"].fetchInProgress) {
        _this2.processAPICalls(event, task);
      }
    };
  };

  _proto.getFetchSub = function getFetchSub() {
    var _this3 = this;

    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_4__["FETCH"]) {
        _this3.processAPICalls(event, task);
      }
    };
  };

  _proto.processAPICalls = function processAPICalls(event, task) {
    var configService = this._configService;
    var transactionService = this._transactionService;

    if (event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["SCHEDULE"] && task.data) {
      var data = task.data;
      var requestUrl = new _common_url__WEBPACK_IMPORTED_MODULE_1__["Url"](data.url);
      var spanName = data.method + ' ' + (requestUrl.relative ? requestUrl.path : Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["stripQueryStringFromUrl"])(requestUrl.href));

      if (!transactionService.getCurrentTransaction()) {
        transactionService.startTransaction(spanName, _common_constants__WEBPACK_IMPORTED_MODULE_4__["HTTP_REQUEST_TYPE"], {
          managed: true
        });
      }

      var span = transactionService.startSpan(spanName, 'external.http', {
        blocking: true
      });

      if (!span) {
        return;
      }

      var isDtEnabled = configService.get('distributedTracing');
      var dtOrigins = configService.get('distributedTracingOrigins');
      var currentUrl = new _common_url__WEBPACK_IMPORTED_MODULE_1__["Url"](window.location.href);
      var isSameOrigin = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["checkSameOrigin"])(requestUrl.origin, currentUrl.origin) || Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["checkSameOrigin"])(requestUrl.origin, dtOrigins);
      var target = data.target;

      if (isDtEnabled && isSameOrigin && target) {
        this.injectDtHeader(span, target);
        var propagateTracestate = configService.get('propagateTracestate');

        if (propagateTracestate) {
          this.injectTSHeader(span, target);
        }
      } else if (_state__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
        this._logginService.debug("Could not inject distributed tracing header to the request origin ('" + requestUrl.origin + "') from the current origin ('" + currentUrl.origin + "')");
      }

      if (data.sync) {
        span.sync = data.sync;
      }

      data.span = span;
    } else if (event === _common_constants__WEBPACK_IMPORTED_MODULE_4__["INVOKE"]) {
      var _data = task.data;

      if (_data && _data.span) {
        var _span = _data.span,
            response = _data.response,
            _target = _data.target;
        var status;

        if (response) {
          status = response.status;
        } else {
          status = _target.status;
        }

        var outcome;

        if (_data.status != 'abort') {
          if (status >= 400 || status == 0) {
            outcome = _common_constants__WEBPACK_IMPORTED_MODULE_4__["OUTCOME_FAILURE"];
          } else {
            outcome = _common_constants__WEBPACK_IMPORTED_MODULE_4__["OUTCOME_SUCCESS"];
          }
        }

        _span.outcome = outcome;
        var tr = transactionService.getCurrentTransaction();

        if (tr && tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_4__["HTTP_REQUEST_TYPE"]) {
          tr.outcome = outcome;
        }

        transactionService.endSpan(_span, _data);
      }
    }
  };

  _proto.injectDtHeader = function injectDtHeader(span, target) {
    var headerName = this._configService.get('distributedTracingHeaderName');

    var headerValue = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getDtHeaderValue"])(span);
    var isHeaderValid = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["isDtHeaderValid"])(headerValue);

    if (isHeaderValid && headerValue && headerName) {
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["setRequestHeader"])(target, headerName, headerValue);
    }
  };

  _proto.injectTSHeader = function injectTSHeader(span, target) {
    var headerValue = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getTSHeaderValue"])(span);

    if (headerValue) {
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["setRequestHeader"])(target, 'tracestate', headerValue);
    }
  };

  _proto.extractDtHeader = function extractDtHeader(target) {
    var configService = this._configService;
    var headerName = configService.get('distributedTracingHeaderName');

    if (target) {
      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["parseDtHeaderValue"])(target[headerName]);
    }
  };

  _proto.filterTransaction = function filterTransaction(tr) {
    var duration = tr.duration();

    if (!duration) {
      if (_state__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
        var message = "transaction(" + tr.id + ", " + tr.name + ") was discarded! ";

        if (duration === 0) {
          message += "Transaction duration is 0";
        } else {
          message += "Transaction wasn't ended";
        }

        this._logginService.debug(message);
      }

      return false;
    }

    if (tr.isManaged()) {
      if (duration > TRANSACTION_DURATION_THRESHOLD) {
        if (_state__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction duration (" + duration + ") is greater than managed transaction threshold (" + TRANSACTION_DURATION_THRESHOLD + ")");
        }

        return false;
      }

      if (tr.sampled && tr.spans.length === 0) {
        if (_state__WEBPACK_IMPORTED_MODULE_6__["__DEV__"]) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction does not have any spans");
        }

        return false;
      }
    }

    return true;
  };

  _proto.createTransactionDataModel = function createTransactionDataModel(transaction) {
    var transactionStart = transaction._start;
    var spans = transaction.spans.map(function (span) {
      var spanData = {
        id: span.id,
        transaction_id: transaction.id,
        parent_id: span.parentId || transaction.id,
        trace_id: transaction.traceId,
        name: span.name,
        type: span.type,
        subtype: span.subtype,
        action: span.action,
        sync: span.sync,
        start: parseInt(span._start - transactionStart),
        duration: span.duration(),
        context: span.context,
        outcome: span.outcome,
        sample_rate: span.sampleRate
      };
      return Object(_common_truncate__WEBPACK_IMPORTED_MODULE_5__["truncateModel"])(_common_truncate__WEBPACK_IMPORTED_MODULE_5__["SPAN_MODEL"], spanData);
    });
    var transactionData = {
      id: transaction.id,
      trace_id: transaction.traceId,
      session: transaction.session,
      name: transaction.name,
      type: transaction.type,
      duration: transaction.duration(),
      spans: spans,
      context: transaction.context,
      marks: transaction.marks,
      breakdown: transaction.breakdownTimings,
      span_count: {
        started: spans.length
      },
      sampled: transaction.sampled,
      sample_rate: transaction.sampleRate,
      experience: transaction.experience,
      outcome: transaction.outcome
    };
    return Object(_common_truncate__WEBPACK_IMPORTED_MODULE_5__["truncateModel"])(_common_truncate__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_MODEL"], transactionData);
  };

  _proto.createTransactionPayload = function createTransactionPayload(transaction) {
    var adjustedTransaction = adjustTransaction(transaction);
    var filtered = this.filterTransaction(adjustedTransaction);

    if (filtered) {
      return this.createTransactionDataModel(transaction);
    }
  };

  return PerformanceMonitoring;
}();



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span-base.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span-base.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");



var SpanBase = function () {
  function SpanBase(name, type, options) {
    if (options === void 0) {
      options = {};
    }

    if (!name) {
      name = _common_constants__WEBPACK_IMPORTED_MODULE_1__["NAME_UNKNOWN"];
    }

    if (!type) {
      type = _common_constants__WEBPACK_IMPORTED_MODULE_1__["TYPE_CUSTOM"];
    }

    this.name = name;
    this.type = type;
    this.options = options;
    this.id = options.id || Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["generateRandomId"])(16);
    this.traceId = options.traceId;
    this.sampled = options.sampled;
    this.sampleRate = options.sampleRate;
    this.timestamp = options.timestamp;
    this._start = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getTime"])(options.startTime);
    this._end = undefined;
    this.ended = false;
    this.outcome = undefined;
    this.onEnd = options.onEnd;
  }

  var _proto = SpanBase.prototype;

  _proto.ensureContext = function ensureContext() {
    if (!this.context) {
      this.context = {};
    }
  };

  _proto.addLabels = function addLabels(tags) {
    this.ensureContext();
    var ctx = this.context;

    if (!ctx.tags) {
      ctx.tags = {};
    }

    var keys = Object.keys(tags);
    keys.forEach(function (k) {
      return Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["setLabel"])(k, tags[k], ctx.tags);
    });
  };

  _proto.addContext = function addContext() {
    for (var _len = arguments.length, context = new Array(_len), _key = 0; _key < _len; _key++) {
      context[_key] = arguments[_key];
    }

    if (context.length === 0) return;
    this.ensureContext();
    _common_utils__WEBPACK_IMPORTED_MODULE_0__["merge"].apply(void 0, [this.context].concat(context));
  };

  _proto.end = function end(endTime) {
    if (this.ended) {
      return;
    }

    this.ended = true;
    this._end = Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getTime"])(endTime);
    this.callOnEnd();
  };

  _proto.callOnEnd = function callOnEnd() {
    if (typeof this.onEnd === 'function') {
      this.onEnd(this);
    }
  };

  _proto.duration = function duration() {
    return Object(_common_utils__WEBPACK_IMPORTED_MODULE_0__["getDuration"])(this._start, this._end);
  };

  return SpanBase;
}();

/* harmony default export */ __webpack_exports__["default"] = (SpanBase);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _span_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./span-base */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span-base.js");
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/context */ "./node_modules/@elastic/apm-rum-core/dist/es/common/context.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}




var Span = function (_SpanBase) {
  _inheritsLoose(Span, _SpanBase);

  function Span(name, type, options) {
    var _this;

    _this = _SpanBase.call(this, name, type, options) || this;
    _this.parentId = _this.options.parentId;
    _this.subtype = undefined;
    _this.action = undefined;

    if (_this.type.indexOf('.') !== -1) {
      var fields = _this.type.split('.', 3);

      _this.type = fields[0];
      _this.subtype = fields[1];
      _this.action = fields[2];
    }

    _this.sync = _this.options.sync;
    return _this;
  }

  var _proto = Span.prototype;

  _proto.end = function end(endTime, data) {
    _SpanBase.prototype.end.call(this, endTime);

    Object(_common_context__WEBPACK_IMPORTED_MODULE_1__["addSpanContext"])(this, data);
  };

  return Span;
}(_span_base__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Span);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction-service.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction-service.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/polyfills */ "./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js");
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction.js");
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metrics */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/metrics.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _capture_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capture-navigation */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/capture-navigation.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/context */ "./node_modules/@elastic/apm-rum-core/dist/es/common/context.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state */ "./node_modules/@elastic/apm-rum-core/dist/es/state.js");
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/url */ "./node_modules/@elastic/apm-rum-core/dist/es/common/url.js");










var TransactionService = function () {
  function TransactionService(logger, config) {
    var _this = this;

    this._config = config;
    this._logger = logger;
    this.currentTransaction = undefined;
    this.respIntervalId = undefined;
    this.recorder = new _metrics__WEBPACK_IMPORTED_MODULE_2__["PerfEntryRecorder"](function (list) {
      var tr = _this.getCurrentTransaction();

      if (tr && tr.captureTimings) {
        var _tr$spans;

        var isHardNavigation = tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"];

        var _captureObserverEntri = Object(_metrics__WEBPACK_IMPORTED_MODULE_2__["captureObserverEntries"])(list, {
          isHardNavigation: isHardNavigation,
          trStart: isHardNavigation ? 0 : tr._start
        }),
            spans = _captureObserverEntri.spans,
            marks = _captureObserverEntri.marks;

        (_tr$spans = tr.spans).push.apply(_tr$spans, spans);

        tr.addMarks({
          agent: marks
        });
      }
    });
  }

  var _proto = TransactionService.prototype;

  _proto.createCurrentTransaction = function createCurrentTransaction(name, type, options) {
    var tr = new _transaction__WEBPACK_IMPORTED_MODULE_1__["default"](name, type, options);
    this.currentTransaction = tr;
    return tr;
  };

  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.currentTransaction && !this.currentTransaction.ended) {
      return this.currentTransaction;
    }
  };

  _proto.createOptions = function createOptions(options) {
    var config = this._config.config;
    var presetOptions = {
      transactionSampleRate: config.transactionSampleRate
    };
    var perfOptions = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["extend"])(presetOptions, options);

    if (perfOptions.managed) {
      perfOptions = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["extend"])({
        pageLoadTraceId: config.pageLoadTraceId,
        pageLoadSampled: config.pageLoadSampled,
        pageLoadSpanId: config.pageLoadSpanId,
        pageLoadTransactionName: config.pageLoadTransactionName
      }, perfOptions);
    }

    return perfOptions;
  };

  _proto.startManagedTransaction = function startManagedTransaction(name, type, perfOptions) {
    var tr = this.getCurrentTransaction();
    var isRedefined = false;

    if (!tr) {
      tr = this.createCurrentTransaction(name, type, perfOptions);
    } else if (tr.canReuse() && perfOptions.canReuse) {
      var redefineType = tr.type;
      var currentTypeOrder = _common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_TYPE_ORDER"].indexOf(tr.type);
      var redefineTypeOrder = _common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_TYPE_ORDER"].indexOf(type);

      if (currentTypeOrder >= 0 && redefineTypeOrder < currentTypeOrder) {
        redefineType = type;
      }

      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("redefining transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", 'to', "(" + (name || tr.name) + ", " + redefineType + ")", tr);
      }

      tr.redefine(name, redefineType, perfOptions);
      isRedefined = true;
    } else {
      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("ending previous transaction(" + tr.id + ", " + tr.name + ")", tr);
      }

      tr.end();
      tr = this.createCurrentTransaction(name, type, perfOptions);
    }

    if (tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]) {
      if (!isRedefined) {
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LARGEST_CONTENTFUL_PAINT"]);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["PAINT"]);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["FIRST_INPUT"]);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_SHIFT"]);
      }

      if (perfOptions.pageLoadTraceId) {
        tr.traceId = perfOptions.pageLoadTraceId;
      }

      if (perfOptions.pageLoadSampled) {
        tr.sampled = perfOptions.pageLoadSampled;
      }

      if (tr.name === _common_constants__WEBPACK_IMPORTED_MODULE_5__["NAME_UNKNOWN"] && perfOptions.pageLoadTransactionName) {
        tr.name = perfOptions.pageLoadTransactionName;
      }
    }

    if (!isRedefined && this._config.get('monitorLongtasks')) {
      this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LONG_TASK"]);
    }

    if (tr.sampled) {
      tr.captureTimings = true;
    }

    return tr;
  };

  _proto.startTransaction = function startTransaction(name, type, options) {
    var _this2 = this;

    var perfOptions = this.createOptions(options);
    var tr;
    var fireOnstartHook = true;

    if (perfOptions.managed) {
      var current = this.currentTransaction;
      tr = this.startManagedTransaction(name, type, perfOptions);

      if (current === tr) {
        fireOnstartHook = false;
      }
    } else {
      tr = new _transaction__WEBPACK_IMPORTED_MODULE_1__["default"](name, type, perfOptions);
    }

    tr.onEnd = function () {
      return _this2.handleTransactionEnd(tr);
    };

    if (fireOnstartHook) {
      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        this._logger.debug("startTransaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")");
      }

      this._config.events.send(_common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_START"], [tr]);
    }

    return tr;
  };

  _proto.handleTransactionEnd = function handleTransactionEnd(tr) {
    var _this3 = this;

    this.recorder.stop();
    var currentUrl = window.location.href;
    return _common_polyfills__WEBPACK_IMPORTED_MODULE_0__["Promise"].resolve().then(function () {
      var name = tr.name,
          type = tr.type;
      var lastHiddenStart = _state__WEBPACK_IMPORTED_MODULE_7__["state"].lastHiddenStart;

      if (lastHiddenStart >= tr._start) {
        if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
          _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") was discarded! The page was hidden during the transaction!");
        }

        return;
      }

      if (_this3.shouldIgnoreTransaction(name) || type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["TEMPORARY_TYPE"]) {
        if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
          _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") is ignored");
        }

        return;
      }

      if (type === _common_constants__WEBPACK_IMPORTED_MODULE_5__["PAGE_LOAD"]) {
        var pageLoadTransactionName = _this3._config.get('pageLoadTransactionName');

        if (name === _common_constants__WEBPACK_IMPORTED_MODULE_5__["NAME_UNKNOWN"] && pageLoadTransactionName) {
          tr.name = pageLoadTransactionName;
        }

        if (tr.captureTimings) {
          var cls = _metrics__WEBPACK_IMPORTED_MODULE_2__["metrics"].cls,
              fid = _metrics__WEBPACK_IMPORTED_MODULE_2__["metrics"].fid,
              tbt = _metrics__WEBPACK_IMPORTED_MODULE_2__["metrics"].tbt,
              longtask = _metrics__WEBPACK_IMPORTED_MODULE_2__["metrics"].longtask;

          if (tbt.duration > 0) {
            tr.spans.push(Object(_metrics__WEBPACK_IMPORTED_MODULE_2__["createTotalBlockingTimeSpan"])(tbt));
          }

          tr.experience = {};

          if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["isPerfTypeSupported"])(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LONG_TASK"])) {
            tr.experience.tbt = tbt.duration;
          }

          if (Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["isPerfTypeSupported"])(_common_constants__WEBPACK_IMPORTED_MODULE_5__["LAYOUT_SHIFT"])) {
            tr.experience.cls = cls;
          }

          if (fid > 0) {
            tr.experience.fid = fid;
          }

          if (longtask.count > 0) {
            tr.experience.longtask = {
              count: longtask.count,
              sum: longtask.duration,
              max: longtask.max
            };
          }
        }

        _this3.setSession(tr);
      }

      if (tr.name === _common_constants__WEBPACK_IMPORTED_MODULE_5__["NAME_UNKNOWN"]) {
        tr.name = Object(_common_url__WEBPACK_IMPORTED_MODULE_8__["slugifyUrl"])(currentUrl);
      }

      Object(_capture_navigation__WEBPACK_IMPORTED_MODULE_4__["captureNavigation"])(tr);

      _this3.adjustTransactionTime(tr);

      var breakdownMetrics = _this3._config.get('breakdownMetrics');

      if (breakdownMetrics) {
        tr.captureBreakdown();
      }

      var configContext = _this3._config.get('context');

      Object(_common_context__WEBPACK_IMPORTED_MODULE_6__["addTransactionContext"])(tr, configContext);

      _this3._config.events.send(_common_constants__WEBPACK_IMPORTED_MODULE_5__["TRANSACTION_END"], [tr]);

      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        _this3._logger.debug("end transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", tr);
      }
    }, function (err) {
      if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
        _this3._logger.debug("error ending transaction(" + tr.id + ", " + tr.name + ")", err);
      }
    });
  };

  _proto.setSession = function setSession(tr) {
    var session = this._config.get('session');

    if (session) {
      if (typeof session == 'boolean') {
        tr.session = {
          id: Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["generateRandomId"])(16),
          sequence: 1
        };
      } else {
        if (session.timestamp && Date.now() - session.timestamp > _common_constants__WEBPACK_IMPORTED_MODULE_5__["SESSION_TIMEOUT"]) {
          tr.session = {
            id: Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["generateRandomId"])(16),
            sequence: 1
          };
        } else {
          tr.session = {
            id: session.id,
            sequence: session.sequence ? session.sequence + 1 : 1
          };
        }
      }

      var sessionConfig = {
        session: {
          id: tr.session.id,
          sequence: tr.session.sequence,
          timestamp: Date.now()
        }
      };

      this._config.setConfig(sessionConfig);

      this._config.setLocalConfig(sessionConfig, true);
    }
  };

  _proto.adjustTransactionTime = function adjustTransactionTime(transaction) {
    var spans = transaction.spans;
    var earliestSpan = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["getEarliestSpan"])(spans);

    if (earliestSpan && earliestSpan._start < transaction._start) {
      transaction._start = earliestSpan._start;
    }

    var latestSpan = Object(_common_utils__WEBPACK_IMPORTED_MODULE_3__["getLatestNonXHRSpan"])(spans);

    if (latestSpan && latestSpan._end > transaction._end) {
      transaction._end = latestSpan._end;
    }

    var transactionEnd = transaction._end;

    for (var i = 0; i < spans.length; i++) {
      var span = spans[i];

      if (span._end > transactionEnd) {
        span._end = transactionEnd;
        span.type += _common_constants__WEBPACK_IMPORTED_MODULE_5__["TRUNCATED_TYPE"];
      }

      if (span._start > transactionEnd) {
        span._start = transactionEnd;
      }
    }
  };

  _proto.shouldIgnoreTransaction = function shouldIgnoreTransaction(transactionName) {
    var ignoreList = this._config.get('ignoreTransactions');

    if (ignoreList && ignoreList.length) {
      for (var i = 0; i < ignoreList.length; i++) {
        var element = ignoreList[i];

        if (typeof element.test === 'function') {
          if (element.test(transactionName)) {
            return true;
          }
        } else if (element === transactionName) {
          return true;
        }
      }
    }

    return false;
  };

  _proto.startSpan = function startSpan(name, type, options) {
    var tr = this.getCurrentTransaction();

    if (!tr) {
      tr = this.createCurrentTransaction(undefined, _common_constants__WEBPACK_IMPORTED_MODULE_5__["TEMPORARY_TYPE"], this.createOptions({
        canReuse: true,
        managed: true
      }));
    }

    var span = tr.startSpan(name, type, options);

    if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
      this._logger.debug("startSpan(" + name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
    }

    return span;
  };

  _proto.endSpan = function endSpan(span, context) {
    if (!span) {
      return;
    }

    if (_state__WEBPACK_IMPORTED_MODULE_7__["__DEV__"]) {
      var tr = this.getCurrentTransaction();
      tr && this._logger.debug("endSpan(" + span.name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
    }

    span.end(null, context);
  };

  return TransactionService;
}();

/* harmony default export */ __webpack_exports__["default"] = (TransactionService);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./span */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span.js");
/* harmony import */ var _span_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./span-base */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span-base.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ "./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ "./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js");
/* harmony import */ var _breakdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breakdown */ "./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/breakdown.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}







var Transaction = function (_SpanBase) {
  _inheritsLoose(Transaction, _SpanBase);

  function Transaction(name, type, options) {
    var _this;

    _this = _SpanBase.call(this, name, type, options) || this;
    _this.traceId = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["generateRandomId"])();
    _this.marks = undefined;
    _this.spans = [];
    _this._activeSpans = {};
    _this._activeTasks = new Set();
    _this.blocked = false;
    _this.captureTimings = false;
    _this.breakdownTimings = [];
    _this.sampleRate = _this.options.transactionSampleRate;
    _this.sampled = Math.random() <= _this.sampleRate;
    return _this;
  }

  var _proto = Transaction.prototype;

  _proto.addMarks = function addMarks(obj) {
    this.marks = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.marks || {}, obj);
  };

  _proto.mark = function mark(key) {
    var skey = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["removeInvalidChars"])(key);

    var markTime = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - this._start;

    var custom = {};
    custom[skey] = markTime;
    this.addMarks({
      custom: custom
    });
  };

  _proto.canReuse = function canReuse() {
    var threshold = this.options.reuseThreshold || _common_constants__WEBPACK_IMPORTED_MODULE_3__["REUSABILITY_THRESHOLD"];
    return !!this.options.canReuse && !this.ended && Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["now"])() - this._start < threshold;
  };

  _proto.redefine = function redefine(name, type, options) {
    if (name) {
      this.name = name;
    }

    if (type) {
      this.type = type;
    }

    if (options) {
      Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])(this.options, options);
    }
  };

  _proto.startSpan = function startSpan(name, type, options) {
    var _this2 = this;

    if (this.ended) {
      return;
    }

    var opts = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["extend"])({}, options);

    opts.onEnd = function (trc) {
      _this2._onSpanEnd(trc);
    };

    opts.traceId = this.traceId;
    opts.sampled = this.sampled;
    opts.sampleRate = this.sampleRate;

    if (!opts.parentId) {
      opts.parentId = this.id;
    }

    var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"](name, type, opts);
    this._activeSpans[span.id] = span;

    if (opts.blocking) {
      this.addTask(span.id);
    }

    return span;
  };

  _proto.isFinished = function isFinished() {
    return !this.blocked && this._activeTasks.size === 0;
  };

  _proto.detectFinish = function detectFinish() {
    if (this.isFinished()) this.end();
  };

  _proto.end = function end(endTime) {
    if (this.ended) {
      return;
    }

    this.ended = true;
    this._end = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["getTime"])(endTime);

    for (var sid in this._activeSpans) {
      var span = this._activeSpans[sid];
      span.type = span.type + _common_constants__WEBPACK_IMPORTED_MODULE_3__["TRUNCATED_TYPE"];
      span.end(endTime);
    }

    this.callOnEnd();
  };

  _proto.captureBreakdown = function captureBreakdown() {
    this.breakdownTimings = Object(_breakdown__WEBPACK_IMPORTED_MODULE_4__["captureBreakdown"])(this);
  };

  _proto.block = function block(flag) {
    this.blocked = flag;

    if (!this.blocked) {
      this.detectFinish();
    }
  };

  _proto.addTask = function addTask(taskId) {
    if (!taskId) {
      taskId = 'task-' + Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["generateRandomId"])(16);
    }

    this._activeTasks.add(taskId);

    return taskId;
  };

  _proto.removeTask = function removeTask(taskId) {
    var deleted = this._activeTasks.delete(taskId);

    deleted && this.detectFinish();
  };

  _proto.resetFields = function resetFields() {
    this.spans = [];
    this.sampleRate = 0;
  };

  _proto._onSpanEnd = function _onSpanEnd(span) {
    this.spans.push(span);
    delete this._activeSpans[span.id];
    this.removeTask(span.id);
  };

  _proto.isManaged = function isManaged() {
    return !!this.options.managed;
  };

  return Transaction;
}(_span_base__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Transaction);

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/dist/es/state.js":
/*!*************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/state.js ***!
  \*************************************************************/
/*! exports provided: __DEV__, state */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DEV__", function() { return __DEV__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
var __DEV__ = "development" !== 'production';

var state = {
  bootstrapTime: null,
  lastHiddenStart: Number.MIN_SAFE_INTEGER
};


/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/node_modules/error-stack-parser/error-stack-parser.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/node_modules/error-stack-parser/error-stack-parser.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ "./node_modules/@elastic/apm-rum-core/node_modules/stackframe/stackframe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function ErrorStackParser(StackFrame) {
  'use strict';

  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

  function _map(array, fn, thisArg) {
    if (typeof Array.prototype.map === 'function') {
      return array.map(fn, thisArg);
    } else {
      var output = new Array(array.length);

      for (var i = 0; i < array.length; i++) {
        output[i] = fn.call(thisArg, array[i]);
      }

      return output;
    }
  }

  function _filter(array, fn, thisArg) {
    if (typeof Array.prototype.filter === 'function') {
      return array.filter(fn, thisArg);
    } else {
      var output = [];

      for (var i = 0; i < array.length; i++) {
        if (fn.call(thisArg, array[i])) {
          output.push(array[i]);
        }
      }

      return output;
    }
  }

  function _indexOf(array, target) {
    if (typeof Array.prototype.indexOf === 'function') {
      return array.indexOf(target);
    } else {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
          return i;
        }
      }

      return -1;
    }
  }

  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }

      var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);

      return _map(filtered, function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
        }

        var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
        var locationParts = this.extractLocation(tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);

      return _map(filtered, function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
        }

        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame(line);
        } else {
          var tokens = line.split('@');
          var locationParts = this.extractLocation(tokens.pop());
          var functionName = tokens.join('@') || undefined;
          return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];

      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
        }
      }

      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];

      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);

        if (match) {
          result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
        }
      }

      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);

      return _map(filtered, function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
        var argsRaw;

        if (functionCall.match(/\(([^\)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
        }

        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
      }, this);
    }
  };
});

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-core/node_modules/stackframe/stackframe.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/node_modules/stackframe/stackframe.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict'; // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */

  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';

  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
    if (functionName !== undefined) {
      this.setFunctionName(functionName);
    }

    if (args !== undefined) {
      this.setArgs(args);
    }

    if (fileName !== undefined) {
      this.setFileName(fileName);
    }

    if (lineNumber !== undefined) {
      this.setLineNumber(lineNumber);
    }

    if (columnNumber !== undefined) {
      this.setColumnNumber(columnNumber);
    }

    if (source !== undefined) {
      this.setSource(source);
    }
  }

  StackFrame.prototype = {
    getFunctionName: function () {
      return this.functionName;
    },
    setFunctionName: function (v) {
      this.functionName = String(v);
    },
    getArgs: function () {
      return this.args;
    },
    setArgs: function (v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }

      this.args = v;
    },
    // NOTE: Property name may be misleading as it includes the path,
    // but it somewhat mirrors V8's JavaScriptStackTraceApi
    // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
    // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
    getFileName: function () {
      return this.fileName;
    },
    setFileName: function (v) {
      this.fileName = String(v);
    },
    getLineNumber: function () {
      return this.lineNumber;
    },
    setLineNumber: function (v) {
      if (!_isNumber(v)) {
        throw new TypeError('Line Number must be a Number');
      }

      this.lineNumber = Number(v);
    },
    getColumnNumber: function () {
      return this.columnNumber;
    },
    setColumnNumber: function (v) {
      if (!_isNumber(v)) {
        throw new TypeError('Column Number must be a Number');
      }

      this.columnNumber = Number(v);
    },
    getSource: function () {
      return this.source;
    },
    setSource: function (v) {
      this.source = String(v);
    },
    toString: function () {
      var functionName = this.getFunctionName() || '{anonymous}';
      var args = '(' + (this.getArgs() || []).join(',') + ')';
      var fileName = this.getFileName() ? '@' + this.getFileName() : '';
      var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
      var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
      return functionName + args + fileName + lineNumber + columnNumber;
    }
  };
  return StackFrame;
});

/***/ }),

/***/ "./node_modules/@elastic/apm-rum-react/dist/es/get-apm-route.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-react/dist/es/get-apm-route.js ***!
  \**********************************************************************/
/*! exports provided: getApmRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApmRoute", function() { return getApmRoute; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _get_with_transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-with-transaction */ "./node_modules/@elastic/apm-rum-react/dist/es/get-with-transaction.js");
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}





function getTransactionName(name, props) {
  var _props$match = props.match,
      match = _props$match === void 0 ? {} : _props$match;

  if (Array.isArray(name) && match.path) {
    return match.path;
  }

  return name;
}

function getApmRoute(apm) {
  var withTransaction = Object(_get_with_transaction__WEBPACK_IMPORTED_MODULE_2__["getWithTransaction"])(apm);
  return function (_React$Component) {
    _inheritsLoose(ApmRoute, _React$Component);

    function ApmRoute(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {};
      return _this;
    }

    ApmRoute.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      var initial = prevState.apmComponent == null;
      var path = nextProps.path,
          component = nextProps.component;
      var pathChanged = path != prevState.path;

      if (initial || pathChanged) {
        return {
          path: path,
          apmComponent: withTransaction(path, 'route-change', function (transaction, props) {
            if (transaction) {
              var name = getTransactionName(path, props);
              name && (transaction.name = name);
            }
          })(component)
        };
      }

      return null;
    };

    var _proto = ApmRoute.prototype;

    _proto.render = function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], _extends({}, this.props, {
        component: this.state.apmComponent
      }));
    };

    return ApmRoute;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-react/dist/es/get-with-transaction.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-react/dist/es/get-with-transaction.js ***!
  \*****************************************************************************/
/*! exports provided: getWithTransaction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWithTransaction", function() { return getWithTransaction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/apm-rum-core */ "./node_modules/@elastic/apm-rum-core/dist/es/index.js");
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}





function isReactClassComponent(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function getWithTransaction(apm) {
  return function withTransaction(name, type, callback) {
    if (callback === void 0) {
      callback = function callback() {};
    }

    return function (Component) {
      if (!apm.isActive()) {
        return Component;
      }

      if (!Component) {
        var loggingService = apm.serviceFactory.getService('LoggingService');
        loggingService.warn(name + " is not instrumented since component property is not provided");
        return Component;
      }

      var ApmComponent = null;

      if (!isReactClassComponent(Component) && typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect === 'function' && typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useState === 'function') {
        ApmComponent = function ApmComponent(props) {
          var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(function () {
            var tr = apm.startTransaction(name, type, {
              managed: true,
              canReuse: true
            });
            callback(tr, props);
            return tr;
          }),
              _React$useState2 = _slicedToArray(_React$useState, 1),
              transaction = _React$useState2[0];

          react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
            Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_2__["afterFrame"])(function () {
              return transaction && transaction.detectFinish();
            });
            return function () {
              transaction && transaction.detectFinish();
            };
          }, []);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
            transaction: transaction
          }, props));
        };
      } else {
        ApmComponent = function (_React$Component) {
          _inheritsLoose(ApmComponent, _React$Component);

          function ApmComponent(props) {
            var _this;

            _this = _React$Component.call(this, props) || this;
            _this.transaction = apm.startTransaction(name, type, {
              managed: true,
              canReuse: true
            });
            callback(_this.transaction, props);
            return _this;
          }

          var _proto = ApmComponent.prototype;

          _proto.componentDidMount = function componentDidMount() {
            var _this2 = this;

            Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_2__["afterFrame"])(function () {
              return _this2.transaction && _this2.transaction.detectFinish();
            });
          };

          _proto.componentWillUnmount = function componentWillUnmount() {
            if (this.transaction) {
              this.transaction.detectFinish();
            }
          };

          _proto.render = function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
              transaction: this.transaction
            }, this.props));
          };

          return ApmComponent;
        }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
      }

      ApmComponent.displayName = "withTransaction(" + (Component.displayName || Component.name) + ")";
      ApmComponent.WrappedComponent = Component;
      return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(ApmComponent, Component);
    };
  };
}



/***/ }),

/***/ "./node_modules/@elastic/apm-rum-react/dist/es/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-react/dist/es/index.js ***!
  \**************************************************************/
/*! exports provided: withTransaction, ApmRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTransaction", function() { return withTransaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApmRoute", function() { return ApmRoute; });
/* harmony import */ var _elastic_apm_rum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum */ "./node_modules/@elastic/apm-rum/dist/es/index.js");
/* harmony import */ var _get_with_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-with-transaction */ "./node_modules/@elastic/apm-rum-react/dist/es/get-with-transaction.js");
/* harmony import */ var _get_apm_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-apm-route */ "./node_modules/@elastic/apm-rum-react/dist/es/get-apm-route.js");



var withTransaction = Object(_get_with_transaction__WEBPACK_IMPORTED_MODULE_1__["getWithTransaction"])(_elastic_apm_rum__WEBPACK_IMPORTED_MODULE_0__["apm"]);
var ApmRoute = Object(_get_apm_route__WEBPACK_IMPORTED_MODULE_2__["getApmRoute"])(_elastic_apm_rum__WEBPACK_IMPORTED_MODULE_0__["apm"]);


/***/ }),

/***/ "./node_modules/@elastic/apm-rum/dist/es/apm-base.js":
/*!***********************************************************!*\
  !*** ./node_modules/@elastic/apm-rum/dist/es/apm-base.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ApmBase; });
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum-core */ "./node_modules/@elastic/apm-rum-core/dist/es/index.js");


var ApmBase = function () {
  function ApmBase(serviceFactory, disable) {
    this._disable = disable;
    this.serviceFactory = serviceFactory;
    this._initialized = false;
  }

  var _proto = ApmBase.prototype;

  _proto.isEnabled = function isEnabled() {
    return !this._disable;
  };

  _proto.isActive = function isActive() {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    return this.isEnabled() && this._initialized && configService.get('active');
  };

  _proto.init = function init(config) {
    var _this = this;

    if (this.isEnabled() && !this._initialized) {
      this._initialized = true;

      var _this$serviceFactory$ = this.serviceFactory.getService([_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"], _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["LOGGING_SERVICE"]]),
          configService = _this$serviceFactory$[0],
          loggingService = _this$serviceFactory$[1];

      configService.setVersion('5.9.1');
      this.config(config);
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
      var isConfigActive = configService.get('active');

      if (isConfigActive) {
        this.serviceFactory.init();
        var flags = Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["getInstrumentationFlags"])(configService.get('instrument'), configService.get('disableInstrumentations'));
        var performanceMonitoring = this.serviceFactory.getService('PerformanceMonitoring');
        performanceMonitoring.init(flags);

        if (flags[_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["ERROR"]]) {
          var errorLogging = this.serviceFactory.getService('ErrorLogging');
          errorLogging.registerListeners();
        }

        if (configService.get('session')) {
          var localConfig = configService.getLocalConfig();

          if (localConfig && localConfig.session) {
            configService.setConfig({
              session: localConfig.session
            });
          }
        }

        var sendPageLoad = function sendPageLoad() {
          return flags[_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]] && _this._sendPageLoadMetrics();
        };

        if (configService.get('centralConfig')) {
          this.fetchCentralConfig().then(sendPageLoad);
        } else {
          sendPageLoad();
        }
      } else {
        this._disable = true;
        loggingService.warn('RUM agent is inactive');
      }
    }

    return this;
  };

  _proto.fetchCentralConfig = function fetchCentralConfig() {
    var _this$serviceFactory$2 = this.serviceFactory.getService([_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["APM_SERVER"], _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["LOGGING_SERVICE"], _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]]),
        apmServer = _this$serviceFactory$2[0],
        loggingService = _this$serviceFactory$2[1],
        configService = _this$serviceFactory$2[2];

    return apmServer.fetchConfig(configService.get('serviceName'), configService.get('environment')).then(function (config) {
      var transactionSampleRate = config['transaction_sample_rate'];

      if (transactionSampleRate) {
        transactionSampleRate = Number(transactionSampleRate);
        var _config2 = {
          transactionSampleRate: transactionSampleRate
        };

        var _configService$valida = configService.validate(_config2),
            invalid = _configService$valida.invalid;

        if (invalid.length === 0) {
          configService.setConfig(_config2);
        } else {
          var _invalid$ = invalid[0],
              key = _invalid$.key,
              value = _invalid$.value,
              allowed = _invalid$.allowed;
          loggingService.warn("invalid value \"" + value + "\" for " + key + ". Allowed: " + allowed + ".");
        }
      }

      return config;
    }).catch(function (error) {
      loggingService.warn('failed fetching config:', error);
    });
  };

  _proto._sendPageLoadMetrics = function _sendPageLoadMetrics() {
    var tr = this.startTransaction(undefined, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"], {
      managed: true,
      canReuse: true
    });

    if (!tr) {
      return;
    }

    tr.addTask(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]);

    var sendPageLoadMetrics = function sendPageLoadMetrics() {
      setTimeout(function () {
        return tr.removeTask(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["PAGE_LOAD"]);
      });
    };

    if (document.readyState === 'complete') {
      sendPageLoadMetrics();
    } else {
      window.addEventListener('load', sendPageLoadMetrics);
    }
  };

  _proto.observe = function observe(name, fn) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.events.observe(name, fn);
  };

  _proto.config = function config(_config) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);

    var _configService$valida2 = configService.validate(_config),
        missing = _configService$valida2.missing,
        invalid = _configService$valida2.invalid;

    if (missing.length === 0 && invalid.length === 0) {
      configService.setConfig(_config);
    } else {
      var loggingService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["LOGGING_SERVICE"]);
      var separator = ', ';
      var message = "RUM agent isn't correctly configured. ";

      if (missing.length > 0) {
        message += missing.join(separator) + ' is missing';

        if (invalid.length > 0) {
          message += separator;
        }
      }

      invalid.forEach(function (_ref, index) {
        var key = _ref.key,
            value = _ref.value,
            allowed = _ref.allowed;
        message += key + " \"" + value + "\" contains invalid characters! (allowed: " + allowed + ")" + (index !== invalid.length - 1 ? separator : '');
      });
      loggingService.error(message);
      configService.setConfig({
        active: false
      });
    }
  };

  _proto.setUserContext = function setUserContext(userContext) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.setUserContext(userContext);
  };

  _proto.setCustomContext = function setCustomContext(customContext) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.setCustomContext(customContext);
  };

  _proto.addLabels = function addLabels(labels) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.addLabels(labels);
  };

  _proto.setInitialPageLoadName = function setInitialPageLoadName(name) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.setConfig({
      pageLoadTransactionName: name
    });
  };

  _proto.startTransaction = function startTransaction(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.startTransaction(name, type, options);
    }
  };

  _proto.startSpan = function startSpan(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.startSpan(name, type, options);
    }
  };

  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService('TransactionService');
      return transactionService.getCurrentTransaction();
    }
  };

  _proto.captureError = function captureError(error) {
    if (this.isEnabled()) {
      var errorLogging = this.serviceFactory.getService('ErrorLogging');
      return errorLogging.logError(error);
    }
  };

  _proto.addFilter = function addFilter(fn) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["CONFIG_SERVICE"]);
    configService.addFilter(fn);
  };

  return ApmBase;
}();



/***/ }),

/***/ "./node_modules/@elastic/apm-rum/dist/es/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@elastic/apm-rum/dist/es/index.js ***!
  \********************************************************/
/*! exports provided: default, init, apmBase, ApmBase, apm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apmBase", function() { return apmBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apm", function() { return apmBase; });
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum-core */ "./node_modules/@elastic/apm-rum-core/dist/es/index.js");
/* harmony import */ var _apm_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apm-base */ "./node_modules/@elastic/apm-rum/dist/es/apm-base.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApmBase", function() { return _apm_base__WEBPACK_IMPORTED_MODULE_1__["default"]; });




function getApmBase() {
  if (_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["isBrowser"] && window.elasticApm) {
    return window.elasticApm;
  }

  var enabled = Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["bootstrap"])();
  var serviceFactory = Object(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["createServiceFactory"])();
  var apmBase = new _apm_base__WEBPACK_IMPORTED_MODULE_1__["default"](serviceFactory, !enabled);

  if (_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__["isBrowser"]) {
    window.elasticApm = apmBase;
  }

  return apmBase;
}

var apmBase = getApmBase();
var init = apmBase.init.bind(apmBase);
/* harmony default export */ __webpack_exports__["default"] = (init);


/***/ }),

/***/ 1:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Rui/works/frontend/gio-data-frontend/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/Rui/works/frontend/gio-data-frontend/node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js */"./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/Rui/works/frontend/gio-data-frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/Rui/works/frontend/gio-data-frontend/src/index.tsx */"./src/index.tsx");


/***/ })

}]);
//# sourceMappingURL=main~._m.chunk.js.map