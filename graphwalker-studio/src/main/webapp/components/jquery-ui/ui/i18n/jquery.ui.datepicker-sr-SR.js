/*
 * #%L
 * GraphWalker Dashboard
 * %%
 * Copyright (C) 2005 - 2014 GraphWalker
 * %%
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * #L%
 */
/* Serbian i18n for the jQuery UI date picker plugin. */
/* Written by Dejan Dimić. */
jQuery(function($){
	$.datepicker.regional['sr-SR'] = {
		closeText: 'Zatvori',
		prevText: '&#x3C;',
		nextText: '&#x3E;',
		currentText: 'Danas',
		monthNames: ['Januar','Februar','Mart','April','Maj','Jun',
		'Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
		'Jul','Avg','Sep','Okt','Nov','Dec'],
		dayNames: ['Nedelja','Ponedeljak','Utorak','Sreda','Četvrtak','Petak','Subota'],
		dayNamesShort: ['Ned','Pon','Uto','Sre','Čet','Pet','Sub'],
		dayNamesMin: ['Ne','Po','Ut','Sr','Če','Pe','Su'],
		weekHeader: 'Sed',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['sr-SR']);
});
