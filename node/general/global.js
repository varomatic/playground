/*global can be accessed by use global.xxx */
exports.getGlobal=function(){
console.log(gl);
    global.gl=321;
}