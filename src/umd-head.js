;(function (factory)
{
   'use strict';

   // AMD
   if (typeof define === 'function' && define.amd) define([], factory);

   // CommonJS
   else if (typeof exports === 'object') factory(require());

   // browser globals
   else factory();

}(function ()
{
