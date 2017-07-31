$('h1').html('TIC TAC TOE! 3');

var numberOfX = 0
var numberOfO = 0

var pos1 = undefined;
var pos2 = undefined;
var pos3 = undefined;
var pos4 = undefined;
var pos5 = undefined;
var pos6 = undefined;
var pos7 = undefined;
var pos8 = undefined;
var pos9 = undefined;
var pos10 = undefined;



$(function() {
	$('.square').one('click', function() {

		if (numberOfX === numberOfO) {
			
			numberOfX += 1;
			$(this).addClass('ex');
			
			var pos = eval($(this).attr('id'));
			
			switch (pos) {
				case 1:
				pos1 = 1;
				break;
				case 2:
				pos2 = 1;
				break;
				case 3:
				pos3 = 1;
				break;
				case 4:
				pos4 = 1;
				break;
				case 5:
				pos5 = 1;
				break;
				case 6:
				pos6 = 1;
				break;
				case 7:
				pos7 = 1;
				break;
				case 8:
				pos8 = 1;
				break;
				case 9:
				pos9 = 1;
				break;
				default:
				pos10 = 1;
			}

		} else {
			
			numberOfO += 1;
			$(this).addClass('oh');

			var pos = eval($(this).attr('id'));
			
			switch (pos) {
				case 1:
				pos1 = 0;
				break;
				case 2:
				pos2 = 0;
				break;
				case 3:
				pos3 = 0;
				break;
				case 4:
				pos4 = 0;
				break;
				case 5:
				pos5 = 0;
				break;
				case 6:
				pos6 = 0;
				break;
				case 7:
				pos7 = 0;
				break;
				case 8:
				pos8 = 0;
				break;
				case 9:
				pos9 = 0;
				break;
				default:
				pos10 = 0;
			}
		};
		var checkWinner = function() {
			if (pos1 === 1 && pos2 === 1 && pos3 === 1 ||
				pos1 === 1 && pos4 === 1 && pos7 === 1 ||
				pos1 === 1 && pos5 === 1 && pos9 === 1 || 
				pos2 === 1 && pos5 === 1 && pos8 === 1 || 
				pos3 === 1 && pos5 === 1 && pos7 === 1 || 
				pos3 === 1 && pos6 === 1 && pos9 === 1 || 
				pos4 === 1 && pos5 === 1 && pos6 === 1 || 
				pos7 === 1 && pos8 === 1 && pos9 === 1) {
				
				$('h2').html('BLUE WINS!').css('font-size', '5em');
			
			} else if (pos1 === 0 && pos2 === 0 && pos3 === 0 ||
				pos1 === 0 && pos5 === 0 && pos9 === 0 ||
				pos1 === 0 && pos4 === 0 && pos7 === 0 || 
				pos2 === 0 && pos5 === 0 && pos8 === 0 || 
				pos3 === 0 && pos5 === 0 && pos7 === 0 || 
				pos3 === 0 && pos6 === 0 && pos9 === 0 || 
				pos4 === 0 && pos5 === 0 && pos6 === 0 || 
				pos7 === 0 && pos8 === 0 && pos9 === 0) {
				
				$('h2').html('GREEN WINS').css('font-size', '5em');
				
			}
			
		}
	checkWinner();
	
	});
});

$(function() {
	$('#reset').on('click', function() {
		numberOfO = 0;
		numberOfX = 0;
		$('div').removeClass('ex');
		$('div').removeClass('oh');
		pos1 = undefined;
		pos2 = undefined;
		pos3 = undefined;
		pos4 = undefined;
		pos5 = undefined;
		pos6 = undefined;
		pos7 = undefined;
		pos8 = undefined;
		pos9 = undefined;
		pos10 = undefined;
		
		$('h2').html('The Winner Is...').css('font-size', '1em');
	});
});

// $(function() {
// 	$('#checkPos').on('click', function() {
// 		alert(pos1);
// 		alert(pos2);
// 		alert(pos3);
// 	});
// });













