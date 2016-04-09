/**
 * Created by jsinner on 20/12/15.
 */

var helper = {};

helper.isAjaxRequest = function(req, withJsonResponse){
    var answer = req.xhr;
    if(withJsonResponse){
        answer = req.xhr && req.headers.accept.indexOf("json") > -1;
    }
    return answer;
};

module.exports = helper;
