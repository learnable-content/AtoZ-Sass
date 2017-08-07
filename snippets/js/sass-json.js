var santizeContent = function( string ) {
	return string.replace(/^['"]+|\s+|\\|(;\s?})+|['"]$/g, '');
}
var getSassVars = function() {
	var style = null;

	if ( window.getComputedStyle && window.getComputedStyle(document.body, '::before') ) {
		style = window.getComputedStyle(document.body, '::before');
		style = style.content;
	}
	return JSON.parse( santizeContent( style ) );
}
var sassVars = getSassVars();
console.log( sassVars );

var blue = sassVars.colors.blue;
console.log( blue );