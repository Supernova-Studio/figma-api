"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStyleApi = exports.getFileStylesStreamApi = exports.getFileStylesApi = exports.getTeamStylesApi = exports.getComponentSetApi = exports.getFileComponentSetsApi = exports.getTeamComponentSetsApi = exports.getComponentApi = exports.getFileComponentsStreamApi = exports.getFileComponentsApi = exports.getTeamComponentsApi = exports.getProjectFilesApi = exports.getTeamProjectsApi = exports.getVersionsApi = exports.getUserMeApi = exports.deleteCommentsApi = exports.postCommentsApi = exports.getCommentsApi = exports.getImageFillsApi = exports.getImageApi = exports.getFileNodesApi = exports.headFileApi = exports.getFileFullApi = exports.getFileStreamApi = exports.getFileApi = void 0;
var config_1 = require("./config");
var utils_1 = require("./utils");
function getFileApiOptionsToQueryString(opts) {
    return (0, utils_1.toQueryParams)(__assign(__assign({}, opts), { ids: opts && opts.ids && opts.ids.join(',') }));
}
function getFileApi(
/**
 * File to export JSON from
 *
 * Can be found in url to file, eg:
 * https://www.figma.com/file/FILE_KEY/FILE_NAME
 */
fileKey, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var queryParams;
        return __generator(this, function (_a) {
            queryParams = getFileApiOptionsToQueryString(opts);
            return [2 /*return*/, this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "?").concat(queryParams))];
        });
    });
}
exports.getFileApi = getFileApi;
function getFileStreamApi(
/**
 * File to export JSON from
 *
 * Can be found in url to file, eg:
 * https://www.figma.com/file/FILE_KEY/FILE_NAME
 */
fileKey, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var queryParams;
        return __generator(this, function (_a) {
            queryParams = getFileApiOptionsToQueryString(opts);
            return [2 /*return*/, this.streamRequest("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "?").concat(queryParams))];
        });
    });
}
exports.getFileStreamApi = getFileStreamApi;
function getFileFullApi(
/**
 * File to export JSON from
 *
 * Can be found in url to file, eg:
 * https://www.figma.com/file/FILE_KEY/FILE_NAME
 */
fileKey, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var queryParams, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryParams = getFileApiOptionsToQueryString(opts);
                    return [4 /*yield*/, this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "?").concat(queryParams), {
                            method: 'GET',
                            fullResponse: true
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, {
                            data: response.data,
                            headers: response.headers
                        }];
            }
        });
    });
}
exports.getFileFullApi = getFileFullApi;
function headFileApi(
/**
 * File to export JSON from
 *
 * Can be found in url to file, eg:
 * https://www.figma.com/file/FILE_KEY/FILE_NAME
 */
fileKey, opts) {
    return __awaiter(this, void 0, void 0, function () {
        var queryParams, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    queryParams = (0, utils_1.toQueryParams)(opts);
                    return [4 /*yield*/, this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "?").concat(queryParams), {
                            method: 'HEAD',
                            fullResponse: true
                        })];
                case 1:
                    response = _a.sent();
                    return [2 /*return*/, response.headers];
            }
        });
    });
}
exports.headFileApi = headFileApi;
function getFileNodesApi(
/**
 * File to export JSON from
 *
 * Can be found in url to file, eg:
 * https://www.figma.com/file/FILE_KEY/FILE_NAME
 */
fileKey, 
/** list of node IDs to retrieve and convert */
ids, opts) {
    var queryParams = (0, utils_1.toQueryParams)(__assign(__assign({}, opts), { ids: ids.join(',') }));
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "/nodes?").concat(queryParams));
}
exports.getFileNodesApi = getFileNodesApi;
function getImageApi(fileKey, opts) {
    var queryParams = (0, utils_1.toQueryParams)(opts);
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/images/").concat(fileKey, "?").concat(queryParams));
}
exports.getImageApi = getImageApi;
function getImageFillsApi(fileKey) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "/images"));
}
exports.getImageFillsApi = getImageFillsApi;
// COMMENTS
// -----------------------------------------------------------------
function getCommentsApi(fileKey) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "/comments"));
}
exports.getCommentsApi = getCommentsApi;
function postCommentsApi(fileKey, 
/** The text contents of the comment to post */
message, 
/** The position of where to place the comment. This can either be an absolute canvas position or the relative position within a frame. */
client_meta, 
/** (Optional) The comment to reply to, if any. This must be a root comment, that is, you cannot reply to a comment that is a reply itself (a reply has a parent_id). */
comment_id) {
    var body = comment_id ? { message: message, client_meta: client_meta, comment_id: comment_id } : { message: message, client_meta: client_meta };
    /** Notice: we need to pass a custom 'Content-Type' header (as 'application-json') or the current implementation
     * (see `this.appendHeaders` in api-class.ts) will use the default 'application/x-www-form-urlencoded' content-type */
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "/comments"), {
        method: 'POST',
        data: body,
    });
}
exports.postCommentsApi = postCommentsApi;
function deleteCommentsApi(fileKey, comment_id) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "/comments/").concat(comment_id), {
        method: 'DELETE',
        data: ''
    });
}
exports.deleteCommentsApi = deleteCommentsApi;
// USERS
// -----------------------------------------------------------------
function getUserMeApi() {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/me"));
}
exports.getUserMeApi = getUserMeApi;
// VERSION HISTORY
// -----------------------------------------------------------------
function getVersionsApi(fileKey, after, before, pageSize) {
    if (pageSize === void 0) { pageSize = 30; }
    var queryParams = (0, utils_1.toQueryParams)({ before: before, after: after, page_size: pageSize });
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "/versions?").concat(queryParams));
}
exports.getVersionsApi = getVersionsApi;
// PROJECTS
// -----------------------------------------------------------------
function getTeamProjectsApi(team_id) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/teams/").concat(team_id, "/projects"));
}
exports.getTeamProjectsApi = getTeamProjectsApi;
function getProjectFilesApi(project_id, opts) {
    var queryParams = (0, utils_1.toQueryParams)(opts);
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/projects/").concat(project_id, "/files?").concat(queryParams));
}
exports.getProjectFilesApi = getProjectFilesApi;
// COMPONENTS AND STYLES
// -----------------------------------------------------------------
/** Get a paginated list of published components within a team library */
function getTeamComponentsApi(
/** Id of the team to list components from */
team_id, opts) {
    if (opts === void 0) { opts = {}; }
    var queryParams = (0, utils_1.toQueryParams)(opts);
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/teams/").concat(team_id, "/components?").concat(queryParams));
}
exports.getTeamComponentsApi = getTeamComponentsApi;
function getFileComponentsApi(fileKey) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(fileKey, "/components"));
}
exports.getFileComponentsApi = getFileComponentsApi;
function getFileComponentsStreamApi(project_id) {
    return this.streamRequest("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(project_id, "/components"));
}
exports.getFileComponentsStreamApi = getFileComponentsStreamApi;
/** Get metadata on a component by key. */
function getComponentApi(
/** The unique identifier of the component. */
key) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/components/").concat(key));
}
exports.getComponentApi = getComponentApi;
function getTeamComponentSetsApi(
/** Id of the team to list component_sets from */
team_id, opts) {
    if (opts === void 0) { opts = {}; }
    var queryParams = (0, utils_1.toQueryParams)(opts);
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/teams/").concat(team_id, "/component_sets?").concat(queryParams));
}
exports.getTeamComponentSetsApi = getTeamComponentSetsApi;
function getFileComponentSetsApi(file_key) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(file_key, "/component_sets"));
}
exports.getFileComponentSetsApi = getFileComponentSetsApi;
function getComponentSetApi(
/** The unique identifier of the component_set */
key) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/component_sets/").concat(key));
}
exports.getComponentSetApi = getComponentSetApi;
function getTeamStylesApi(team_id, opts) {
    if (opts === void 0) { opts = {}; }
    var queryParams = (0, utils_1.toQueryParams)(opts);
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/teams/").concat(team_id, "/styles?").concat(queryParams));
}
exports.getTeamStylesApi = getTeamStylesApi;
function getFileStylesApi(file_key) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(file_key, "/styles"));
}
exports.getFileStylesApi = getFileStylesApi;
function getFileStylesStreamApi(file_key) {
    return this.streamRequest("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/files/").concat(file_key, "/styles"));
}
exports.getFileStylesStreamApi = getFileStylesStreamApi;
function getStyleApi(
/** The unique identifier of the style */
key) {
    return this.request("".concat(config_1.API_DOMAIN, "/").concat(config_1.API_VER, "/styles/").concat(key));
}
exports.getStyleApi = getStyleApi;
//# sourceMappingURL=api-funcs.js.map