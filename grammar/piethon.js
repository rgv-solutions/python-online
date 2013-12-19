/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var piethon = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"startproduction":3,"stmt":4,"parm_list":5,"id":6,",":7,"NUMBER":8,"line":9,"CR":10,"selection":11,"funcdef":12,"def":13,"(":14,")":15,":":16,"end":17,"if":18,"expr":19,"else":20,"while":21,"=":22,"[":23,"]":24,".":25,"print":26,"return":27,"+":28,"-":29,"*":30,"**":31,"/":32,"%":33,"<":34,"<=":35,">":36,">=":37,"!=":38,"==":39,"len":40,"STRING":41,"IDENT":42,"$accept":0,"$end":1},
terminals_: {2:"error",7:",",8:"NUMBER",10:"CR",13:"def",14:"(",15:")",16:":",17:"end",18:"if",20:"else",21:"while",22:"=",23:"[",24:"]",25:".",26:"print",27:"return",28:"+",29:"-",30:"*",31:"**",32:"/",33:"%",34:"<",35:"<=",36:">",37:">=",38:"!=",39:"==",40:"len",41:"STRING",42:"IDENT"},
productions_: [0,[3,1],[5,1],[5,3],[5,1],[5,3],[5,0],[4,3],[4,3],[4,3],[4,0],[12,8],[11,5],[11,8],[11,5],[9,4],[9,7],[9,5],[9,7],[9,6],[9,7],[9,6],[9,3],[9,3],[9,0],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,3],[19,2],[19,1],[19,1],[19,4],[19,4],[19,1],[6,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: 
		finalprogram = $$[$0];
		// Maybe remove all function branches?, then execute the one statement
	
break;
case 2:	
		this.$ = [];
		this.$.push({name : $$[$0], value : null})
	
break;
case 3:
		$$[$0].push({name : $$[$0-2], value : null})
		this.$ = $$[$0];
	
break;
case 4:
		this.$ = [];
		console.log(yytext);
		this.$.push({name : null, value : Number(yytext)})
	
break;
case 5:
		console.log(yytext);		
		$$[$0].push({name : null, value : Number(yytext)})
		this.$ = $$[$0];
	
break;
case 6: this.$ = []; 
break;
case 7:
		this.$ = new AstNode('Statement', {left : $$[$0-2], right :$$[$0-1]});
	
break;
case 8:
		this.$ = new AstNode('Statement', {left : $$[$0-2], right :$$[$0-1]});
	
break;
case 9:
		this.$ = new AstNode('Statement', {left : $$[$0-2], right : new AstNode('no-op') });
	
break;
case 10: this.$ = new AstNode('no-op'); 
break;
case 11: 
		// AST for function, add to function table
		var mainFunc = new AstNode('function', {left : $$[$0-1], name : $$[$0-6], parameters : $$[$0-4].reverse()});
		functions[$$[$0-6]] = mainFunc; 
	
break;
case 12:
		this.$ = new AstNode('if', {left : $$[$0-3], right : $$[$0-1]});
	
break;
case 13:
		this.$ = new AstNode('ifelse', {left : $$[$0-6], middle: $$[$0-4],right: $$[$0-1]});		
	
break;
case 14:
		this.$ = new AstNode('while', {left : $$[$0-3], right:$$[$0-1]});
	
break;
case 15:
		// Identifier assigment	
		var lf= new AstNode('IDENT', {name : $$[$0-2]});	
		this.$ = new AstNode('=', {left : lf, right : $$[$0]});
	
break;
case 16: 
		// Assignment of an array index
		var lf  = new AstNode('arrayindex', {name : $$[$0-5], index : $$[$0-3]}); 
		this.$ = new AstNode('=', {left : lf, right : $$[$0]});
	
break;
case 17:
		// Function call
		this.$ = new AstNode('FunctionCall', {name : $$[$0-3], parameters : $$[$0-1].reverse()});
	
break;
case 18:
		// Function call and assign
		var lf= new AstNode('IDENT', {name : $$[$0-5]});			
		var call = new AstNode('FunctionCall', {method : $$[$0-3], parameters : $$[$0-1].reverse()});
		this.$ = new AstNode('=', {left : lf, right : call});
	
break;
case 19:
		// Array creation and assignment
		var lf= new AstNode('IDENT', {name : $$[$0-4]});
		var arr = new AstNode('array', {value : $$[$0-1].reverse()});
		this.$ = new AstNode('=', {left :lf, right : arr});
	
break;
case 20: 
		// Method dispatch, with single argument
		this.$ = new AstNode('method', { object : $$[$0-5], method : $$[$0-3], argument : $$[$0-1]});
	
break;
case 21: 
		// No argument method dispatch
		this.$ = new AstNode('method', { object : $$[$0-4], method : $$[$0-2]});
	
break;
case 22:
		// Print statement
		this.$ = new AstNode('print', {left : $$[$0]});			
	
break;
case 23:
		// Return statement
		this.$ = new AstNode('return', {left : $$[$0]});
	
break;
case 24: this.$ = new AstNode('no-op'); 
break;
case 25: this.$ = new AstNode('+', {left : $$[$0-2], right : $$[$0]}); 
break;
case 26: this.$ = new AstNode('-', {left : $$[$0-2], right : $$[$0]});
break;
case 27: this.$ = new AstNode('*', {left : $$[$0-2], right : $$[$0]});
break;
case 28: this.$ = new AstNode('**', {left : $$[$0-2], right : $$[$0]});
break;
case 29: this.$ = new AstNode('/', {left : $$[$0-2], right : $$[$0]});
break;
case 30: this.$ = new AstNode('%', {left : $$[$0-2], right : $$[$0]});
break;
case 31: this.$ = new AstNode('<', {left : $$[$0-2], right : $$[$0]});
break;
case 32: this.$ = new AstNode('<=', {left : $$[$0-2], right : $$[$0]});
break;
case 33: this.$ = new AstNode('>', {left : $$[$0-2], right : $$[$0]});
break;
case 34: this.$ = new AstNode('>=', {left : $$[$0-2], right : $$[$0]});
break;
case 35: this.$ = new AstNode('!=', {left : $$[$0-2], right : $$[$0]});
break;
case 36: this.$ = new AstNode('==', {left : $$[$0-2], right : $$[$0]});
break;
case 37: this.$ = new AstNode('UMINUS', {left : $$[$0]}); 
break;
case 38: this.$ = new AstNode('NUMBER', {value : Number(yytext)}); 
break;
case 39: this.$ = new AstNode('IDENT', {name : $$[$0]});	
break;
case 40: this.$ = new AstNode('arrayindex', {name : $$[$0-3], index : $$[$0-1]}); 
break;
case 41:this.$ = new AstNode('len', {name : $$[$0-1]});
break;
case 42:this.$ = new AstNode('STRING', {value: yytext}); 
break;
case 43:this.$ = yytext;
break;
}
},
table: [{1:[2,10],3:1,4:2,10:[2,10],13:[2,10],18:[2,10],21:[2,10],26:[2,10],27:[2,10],42:[2,10]},{1:[3]},{1:[2,1],9:3,10:[2,24],11:4,12:5,13:[1,8],18:[1,6],21:[1,7],26:[2,24],27:[2,24],42:[2,24]},{6:10,10:[1,9],26:[1,11],27:[1,12],42:[1,13]},{10:[1,14]},{10:[1,15]},{6:19,8:[1,18],19:16,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:22,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:23,42:[1,13]},{1:[2,7],10:[2,7],13:[2,7],17:[2,7],18:[2,7],20:[2,7],21:[2,7],26:[2,7],27:[2,7],42:[2,7]},{14:[1,26],22:[1,24],23:[1,25],25:[1,27]},{6:19,8:[1,18],19:28,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:29,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{7:[2,43],10:[2,43],14:[2,43],15:[2,43],16:[2,43],22:[2,43],23:[2,43],24:[2,43],25:[2,43],26:[2,43],27:[2,43],28:[2,43],29:[2,43],30:[2,43],31:[2,43],32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],37:[2,43],38:[2,43],39:[2,43],42:[2,43]},{1:[2,8],10:[2,8],13:[2,8],17:[2,8],18:[2,8],20:[2,8],21:[2,8],26:[2,8],27:[2,8],42:[2,8]},{1:[2,9],10:[2,9],13:[2,9],17:[2,9],18:[2,9],20:[2,9],21:[2,9],26:[2,9],27:[2,9],42:[2,9]},{16:[1,30],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42]},{6:19,8:[1,18],19:43,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{10:[2,38],15:[2,38],16:[2,38],24:[2,38],26:[2,38],27:[2,38],28:[2,38],29:[2,38],30:[2,38],31:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],37:[2,38],38:[2,38],39:[2,38],42:[2,38]},{10:[2,39],15:[2,39],16:[2,39],23:[1,44],24:[2,39],26:[2,39],27:[2,39],28:[2,39],29:[2,39],30:[2,39],31:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],42:[2,39]},{14:[1,45]},{10:[2,42],15:[2,42],16:[2,42],24:[2,42],26:[2,42],27:[2,42],28:[2,42],29:[2,42],30:[2,42],31:[2,42],32:[2,42],33:[2,42],34:[2,42],35:[2,42],36:[2,42],37:[2,42],38:[2,42],39:[2,42],42:[2,42]},{16:[1,46],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42]},{14:[1,47]},{6:49,8:[1,18],19:48,23:[1,50],29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:51,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{5:52,6:53,8:[1,54],15:[2,6],42:[1,13]},{6:55,42:[1,13]},{10:[2,22],26:[2,22],27:[2,22],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,22]},{10:[2,23],26:[2,23],27:[2,23],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,23]},{4:56,10:[2,10],13:[2,10],17:[2,10],18:[2,10],20:[2,10],21:[2,10],26:[2,10],27:[2,10],42:[2,10]},{6:19,8:[1,18],19:57,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:58,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:59,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:60,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:61,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:62,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:63,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:64,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:65,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:66,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:67,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:19,8:[1,18],19:68,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{10:[2,37],15:[2,37],16:[2,37],24:[2,37],26:[2,37],27:[2,37],28:[2,37],29:[2,37],30:[2,37],31:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],37:[2,37],38:[2,37],39:[2,37],42:[2,37]},{6:19,8:[1,18],19:69,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{6:70,42:[1,13]},{4:71,10:[2,10],13:[2,10],17:[2,10],18:[2,10],21:[2,10],26:[2,10],27:[2,10],42:[2,10]},{5:72,6:53,8:[1,54],15:[2,6],42:[1,13]},{10:[2,15],26:[2,15],27:[2,15],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,15]},{10:[2,39],14:[1,73],23:[1,44],26:[2,39],27:[2,39],28:[2,39],29:[2,39],30:[2,39],31:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],37:[2,39],38:[2,39],39:[2,39],42:[2,39]},{5:74,6:53,8:[1,54],24:[2,6],42:[1,13]},{24:[1,75],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42]},{15:[1,76]},{7:[1,77],15:[2,2],24:[2,2]},{7:[1,78],15:[2,4],24:[2,4]},{14:[1,79]},{9:3,10:[2,24],11:4,12:5,13:[1,8],17:[1,80],18:[1,6],20:[1,81],21:[1,7],26:[2,24],27:[2,24],42:[2,24]},{10:[2,25],15:[2,25],16:[2,25],24:[2,25],26:[2,25],27:[2,25],28:[2,25],29:[2,25],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,25]},{10:[2,26],15:[2,26],16:[2,26],24:[2,26],26:[2,26],27:[2,26],28:[2,26],29:[2,26],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,26]},{10:[2,27],15:[2,27],16:[2,27],24:[2,27],26:[2,27],27:[2,27],28:[2,27],29:[2,27],30:[2,27],31:[1,34],32:[2,27],33:[2,27],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,27]},{10:[2,28],15:[2,28],16:[2,28],24:[2,28],26:[2,28],27:[2,28],28:[2,28],29:[2,28],30:[2,28],31:[2,28],32:[2,28],33:[2,28],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,28]},{10:[2,29],15:[2,29],16:[2,29],24:[2,29],26:[2,29],27:[2,29],28:[2,29],29:[2,29],30:[2,29],31:[1,34],32:[2,29],33:[2,29],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,29]},{10:[2,30],15:[2,30],16:[2,30],24:[2,30],26:[2,30],27:[2,30],28:[2,30],29:[2,30],30:[2,30],31:[1,34],32:[2,30],33:[2,30],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,30]},{10:[2,31],15:[2,31],16:[2,31],24:[2,31],26:[2,31],27:[2,31],28:[2,31],29:[2,31],30:[2,31],31:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],37:[2,31],38:[2,31],39:[2,31],42:[2,31]},{10:[2,32],15:[2,32],16:[2,32],24:[2,32],26:[2,32],27:[2,32],28:[2,32],29:[2,32],30:[2,32],31:[2,32],32:[2,32],33:[2,32],34:[2,32],35:[2,32],36:[2,32],37:[2,32],38:[2,32],39:[2,32],42:[2,32]},{10:[2,33],15:[2,33],16:[2,33],24:[2,33],26:[2,33],27:[2,33],28:[2,33],29:[2,33],30:[2,33],31:[2,33],32:[2,33],33:[2,33],34:[2,33],35:[2,33],36:[2,33],37:[2,33],38:[2,33],39:[2,33],42:[2,33]},{10:[2,34],15:[2,34],16:[2,34],24:[2,34],26:[2,34],27:[2,34],28:[2,34],29:[2,34],30:[2,34],31:[2,34],32:[2,34],33:[2,34],34:[2,34],35:[2,34],36:[2,34],37:[2,34],38:[2,34],39:[2,34],42:[2,34]},{10:[2,35],15:[2,35],16:[2,35],24:[2,35],26:[2,35],27:[2,35],28:[2,35],29:[2,35],30:[2,35],31:[2,35],32:[2,35],33:[2,35],34:[2,35],35:[2,35],36:[2,35],37:[2,35],38:[2,35],39:[2,35],42:[2,35]},{10:[2,36],15:[2,36],16:[2,36],24:[2,36],26:[2,36],27:[2,36],28:[2,36],29:[2,36],30:[2,36],31:[2,36],32:[2,36],33:[2,36],34:[2,36],35:[2,36],36:[2,36],37:[2,36],38:[2,36],39:[2,36],42:[2,36]},{24:[1,82],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42]},{15:[1,83]},{9:3,10:[2,24],11:4,12:5,13:[1,8],17:[1,84],18:[1,6],21:[1,7],26:[2,24],27:[2,24],42:[2,24]},{15:[1,85]},{5:86,6:53,8:[1,54],15:[2,6],42:[1,13]},{24:[1,87]},{22:[1,88]},{10:[2,17],26:[2,17],27:[2,17],42:[2,17]},{5:89,6:53,8:[1,54],15:[2,6],24:[2,6],42:[1,13]},{5:90,6:53,8:[1,54],15:[2,6],24:[2,6],42:[1,13]},{6:19,8:[1,18],15:[1,92],19:91,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{10:[2,12]},{16:[1,93]},{10:[2,40],15:[2,40],16:[2,40],24:[2,40],26:[2,40],27:[2,40],28:[2,40],29:[2,40],30:[2,40],31:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],37:[2,40],38:[2,40],39:[2,40],42:[2,40]},{10:[2,41],15:[2,41],16:[2,41],24:[2,41],26:[2,41],27:[2,41],28:[2,41],29:[2,41],30:[2,41],31:[2,41],32:[2,41],33:[2,41],34:[2,41],35:[2,41],36:[2,41],37:[2,41],38:[2,41],39:[2,41],42:[2,41]},{10:[2,14]},{16:[1,94]},{15:[1,95]},{10:[2,19],26:[2,19],27:[2,19],42:[2,19]},{6:19,8:[1,18],19:96,29:[1,17],40:[1,20],41:[1,21],42:[1,13]},{15:[2,3],24:[2,3]},{15:[2,5],24:[2,5]},{15:[1,97],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42]},{10:[2,21],26:[2,21],27:[2,21],42:[2,21]},{4:98,10:[2,10],13:[2,10],17:[2,10],18:[2,10],21:[2,10],26:[2,10],27:[2,10],42:[2,10]},{4:99,10:[2,10],13:[2,10],17:[2,10],18:[2,10],21:[2,10],26:[2,10],27:[2,10],42:[2,10]},{10:[2,18],26:[2,18],27:[2,18],42:[2,18]},{10:[2,16],26:[2,16],27:[2,16],28:[1,31],29:[1,32],30:[1,33],31:[1,34],32:[1,35],33:[1,36],34:[1,37],35:[1,38],36:[1,39],37:[1,40],38:[1,41],39:[1,42],42:[2,16]},{10:[2,20],26:[2,20],27:[2,20],42:[2,20]},{9:3,10:[2,24],11:4,12:5,13:[1,8],17:[1,100],18:[1,6],21:[1,7],26:[2,24],27:[2,24],42:[2,24]},{9:3,10:[2,24],11:4,12:5,13:[1,8],17:[1,101],18:[1,6],21:[1,7],26:[2,24],27:[2,24],42:[2,24]},{10:[2,13]},{10:[2,11]}],
defaultActions: {80:[2,12],84:[2,14],100:[2,13],101:[2,11]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: this.begin('COMMENT'); 
break;
case 1: this.begin('INITIAL'); 
break;
case 2: ; 
break;
case 3: ; 
break;
case 4: this.begin('OTHER_COMMENT'); 
break;
case 5: this.begin('INITIAL'); 
break;
case 6: ; 
break;
case 7:console.log(yy_.yytext);return 41;
break;
case 8:return 31;
break;
case 9:return 32;
break;
case 10:return 29;
break;
case 11:return 28;
break;
case 12:return 33;
break;
case 13:return 14;
break;
case 14:return 15;
break;
case 15:return 'PI';
break;
case 16:return 'E';
break;
case 17:return 30;
break;
case 18:return "!=";
break;
case 19:return 35;
break;
case 20:return 37;
break;
case 21:return 39;
break;
case 22:return 22;
break;
case 23:return 16;
break;
case 24:return 7;
break;
case 25:return 34;
break;
case 26:return 36;
break;
case 27:return 18;
break;
case 28:return 20;
break;
case 29:return 13;
break;
case 30:return 'pass';
break;
case 31:return 26;
break;
case 32:return 17;
break;
case 33:return 27;
break;
case 34:return 23;
break;
case 35:return 24;
break;
case 36:return 25;
break;
case 37:return 40;
break;
case 38:return 21;
break;
case 39:return 8;
break;
case 40: return 42;
break;
case 41: return 10;
break;
case 42: ; 
break;
}
},
rules: [/^(?:''')/,/^(?:''')/,/^(?:\n)/,/^(?:.)/,/^(?:#)/,/^(?:\n)/,/^(?:.)/,/^(?:"[\s\S]*")/,/^(?:\*\*)/,/^(?:\/)/,/^(?:-)/,/^(?:\+)/,/^(?:%)/,/^(?:\()/,/^(?:\))/,/^(?:PI\b)/,/^(?:E\b)/,/^(?:\*)/,/^(?:!=)/,/^(?:<=)/,/^(?:>=)/,/^(?:==)/,/^(?:=)/,/^(?::)/,/^(?:,)/,/^(?:<)/,/^(?:>)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:def\b)/,/^(?:pass\b)/,/^(?:print\b)/,/^(?:end\b)/,/^(?:return\b)/,/^(?:\[)/,/^(?:\])/,/^(?:\.)/,/^(?:len\b)/,/^(?:while\b)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:[a-zA-Z]([a-zA-Z]|[0-9])*)/,/^(?:\n)/,/^(?:.)/],
conditions: {"OTHER_COMMENT":{"rules":[0,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],"inclusive":true},"COMMENT":{"rules":[1,2,3],"inclusive":false},"INITIAL":{"rules":[0,4,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = piethon;
exports.Parser = piethon.Parser;
exports.parse = function () { return piethon.parse.apply(piethon, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}