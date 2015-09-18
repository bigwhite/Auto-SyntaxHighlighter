;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		// Copyright 2015 Tony Bai
		var datatypes = 'uint8 uint16 uint32 uint64 int8 int16 int32 int64 float32 float64 ' +
	                        'complex64 complex128 byte rune string int uint uintptr nil';

        var keywords =  'break default func interface select ' +
	                        'case  defer go map struct ' +
	                        'chan  else  goto package switch ' +
	                        'const fallthrough if range type ' +
	                        'continue for import return var';
	
		var functions =	'close len cap iota new make append copy delete complex real imag ' +
						'panic recover print println';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'string' },			// strings
			{ regex: /^ *#.*/gm,										css: 'preprocessor' },
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' },
			{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions bold' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword bold' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['golang', 'go'];

	SyntaxHighlighter.brushes.Go = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
