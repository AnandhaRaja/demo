var app = angular.module('app', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);
app.controller('myCtrl', function($scope,$http){
$scope.s={};
$scope.s.adds=0;
$scope.s.cit=0;
$scope.s.stat=0;
$scope.s.con=0;
$scope.sum=function(){

alert("Register Successfully");

}
$scope.rec=function () {

window.location.reload();
}
});
app.config(function($mdDateLocaleProvider) {
$mdDateLocaleProvider.formatDate = function(date) {
return moment(date).format('DD-MM-YYYY');

};
});
app.directive("firstName", function() {
return {
restrict: "E",
require: "ngModel",

template:'<input type="text" class="form-control" ng-model="s.fname"/>',
link:function(scope, elm, attrs, ctrl) {
elm.bind("keyup",function(){
var fname1=scope.s.fname;

if(fname1) {
	fname1 = fname1.replace(/ /g, '');
var flen=fname1.length;

}
console.log(fname1);
console.log(flen);
var reg=/[0-9]/;
if(reg.test(fname1)){
ctrl.$setValidity('charonly',false);

}
else{
ctrl.$setValidity('charonly',true);
if(flen>20)
{
ctrl.$setValidity('nomore',false );
}
else{
ctrl.$setValidity('nomore', true);
}
//}
}
scope.$apply();
})
}
}
});
/**/
app.directive("emailDirective", function() {
return {
restrict: "E",
require: "ngModel",

template:'<input type="text" class="form-control" ng-model="s.usergmail" />',
link:function(scope, elm, attrs, ctrl) {
elm.bind("keyup",function(){
var  usergmail1=scope.s.usergmail;
var gmail = /^[a-z](\.?[a-z0-9]){3,}@g(oogle)?mail\.com$/;
var gmail2 = /^[a-z](\.?[a-z0-9]){3,}@g(oogle)?mail\.co\.in$/;
var gmail3 = /^[a-z](\.?[a-z0-9]){3,}@g(oogle)?mail\.in$/;
var yahoo1 = /^[a-z]([\.\_]?[a-z0-9]){3,}@yahoo\.com$/;
var yahoo2 = /^[a-z](\.\_?[a-z0-9]){3,}@yahoo\.co\.in$/;
var yahoo3= /^[a-z](\.\_?[a-z0-9]){3,}@yahoo\.in$/;
var start=/^[0-9\W]/;
if(usergmail1){
usergmail1 = usergmail1.replace(/ /g, '');
}
if(start.test(usergmail1)){

ctrl.$setValidity('invalid_start',false);

}
else{
ctrl.$setValidity('invalid_start', true);
if((gmail.test(usergmail1))||(gmail2.test(usergmail1))||(gmail3.test(usergmail1))||(yahoo3.test(usergmail1))||(yahoo2.test(usergmail1))||(yahoo1.test(usergmail1))){
console.log(usergmail1);
ctrl.$setValidity('invalid',true);

}
else{
ctrl.$setValidity('invalid', false);
}
}

scope.$apply();
})
}
}
});
app.directive("pinCode", function() {
return {
restrict: "E",
require: "ngModel",

template:'<input type="text" class="form-control" ng-model="s.pincode" />',
link:function(scope, elm, attrs, ctrl) {
elm.bind("keyup",function(){
//var  tele1=0;
var pin1=scope.s.pincode;
if(pin1){
pin1 = pin1.replace(/ /g, '');}
ctrl.$setViewValue(pin1);
ctrl.$render();
var reg=/[+\-*\/A-z!@#$%^&*(_=\s\-{:"<>?|;',.\/\[\]"})]/;

if((reg.test(pin1)))
{

ctrl.$setValidity('noonly', false);
}
else {
ctrl.$setValidity('noonly', true);
if((pin1.length==6)&&(!reg.test(pin1)))
{
ctrl.$setValidity('belowlen',true);
}
else{
ctrl.$setValidity('belowlen', false);
}
}

scope.$apply();
})
}
}
});
app.directive('datDirective',function(){
return{
restrict:'A',
require:'ngModel',
link:function(scope,ele,attr,ctl){
ctl.$parsers.unshift(function(ngModelValue){
var x=new Date();
x.setTime(x.valueOf() - 1 * 365.25 *24 * 60 * 60 * 1000);
console.log(x)
var udat_full=new Date(ngModelValue);
console.log(udat_full);
if(x.getTime()>udat_full.getTime()){
console.log("valid")
ctl.$setValidity('val',true);
return ngModelValue;
}
else{
console.log("invalid")
ctl.$setValidity('val',false);
return undefined;
}
})
}
}
});
app.directive("feesAmount", function() {
return {
restrict: "E",
require: "ngModel",

template:'<input type="text" class="form-control" ng-model="s.fees" />',
link:function(scope, elm, attrs, ctrl) {
elm.bind("keyup",function(){
console.log();
var  tele=scope.s.fees;
if(tele){
tele = tele.replace(/ /g, '');
}
var reg=/[\+!@#$%^&*(_=\s\-{:"<>?|;',.\/\[\]"})]/;

console.log(tele);
if((reg.test(tele)))
{
ctrl.$setValidity('noonly', false);
}
else {
ctrl.$setValidity('noonly', true);


}

scope.$apply();
})
}
}
});


