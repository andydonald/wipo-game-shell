// JavaScript Document
var score = 0;
var _paq
var testBtn

function ini(){
	canvas = document.getElementById("stageCanvas");
	stage_width = canvas.width;
	stage_height = canvas.height;
	canvas.oncontextmenu = function() {
		return false;  
	} 
			
	stage = new createjs.Stage("stageCanvas");
	stage.enableMouseOver();
			
	is_touch_device = 'ontouchstart' in document.documentElement;
	if (is_touch_device){
		createjs.Touch.enable(stage);
	}
    var circle = new createjs.Shape();
    circle.graphics.beginFill("Red").drawCircle(0, 0, 20);
    circle.x = 20;
    circle.y = 20;
    stage.addChild(circle);
	
	
	///final score
	score = 80;
	startNewGameBtn = createBtn({w:100,h:50, colour:'#000', nfunction: 'null', idRef:'startNewGame', text:[{t:'Start', s:'16', f:'Arial', c:'#fff'}]});
    stage.addChild(startNewGameBtn);
	startNewGameBtn.addEventListener("mousedown", startNewGame, this);
	startNewGameBtn.x = (stage_width/2) - 200 
	startNewGameBtn.y = stage_height/2
	
	finishGameBtn = createBtn({w:100,h:50, colour:'#000', nfunction: 'null', idRef:'finishGame', text:[{t:'Finish', s:'16', f:'Arial', c:'#fff'}]});
    stage.addChild(finishGameBtn);
	finishGameBtn.addEventListener("mousedown", finishGame, this);
	finishGameBtn.x = (stage_width/2) - 50 
	finishGameBtn.y = stage_height/2
	
	replayGameBtn = createBtn({w:100,h:50, colour:'#000', nfunction: 'null', idRef:'replayGame', text:[{t:'Replay', s:'16', f:'Arial', c:'#fff'}]});
    stage.addChild(replayGameBtn);
	replayGameBtn.addEventListener("mousedown", replayGame, this);
	replayGameBtn.x = (stage_width/2) + 100 
	replayGameBtn.y = stage_height/2
	
	
 
    stage.update();
 
    createjs.Tween.get(circle, { loop: true })
    .to({ x: stage_width-20 }, 1000, createjs.Ease.getPowInOut(4))
    .to({ alpha: 1, y: stage_height-20 }, 500, createjs.Ease.getPowInOut(2))
    .to({ x: 20 }, 1000, createjs.Ease.getPowInOut(2))
 	.to({ y: 20 }, 1000, createjs.Ease.getPowInOut(2));
    createjs.Ticker.setFPS(24);
    createjs.Ticker.addEventListener("tick", stage);	
}

function startNewGame(e){
	console.log('trackEvent >>>>> rfipGameStart');
	_paq.push(['trackEvent', 'wsitCustomEvent', 'rfipGameStart', 'respectForIPGame', 'gameStart', 0, null]);
	generateNewScore();
}

function finishGame(e){
	console.log('trackEvent >>>>> rfipGameFinish');
	_paq.push(['trackEvent', 'wsitCustomEvent', 'rfipGameFinish', 'respectForIPGame', 'gameFinished', score, null]);
	
}

function replayGame(e){
	console.log('trackEvent >>>>> rfipGameReplay');
	_paq.push(['trackEvent', 'wsitCustomEvent', 'rfipGameReplay', 'respectForIPGame', 'gameReplay', 0, null]);
}

function generateNewScore(){
	score = Math.floor(Math.random() * 100);
	//testBtn.updateText('Score:'+score);
}

function createBtn(params){
	
			
	
			var btn = new createjs.Container();	
			var clickshape = new createjs.Shape(); 
			var bk = new createjs.Shape();
			bk.alpha = 0;
	
			if (params.shape){
				
				if (params.shape[0].r == null){params.shape[0].r = params.h/2}
				
				bk.graphics.setStrokeStyle(params.shape[0].s).beginStroke(params.shape[0].sc).beginFill(params.shape[0].c).drawRoundRect( 0, 0 ,params.w, params.h, params.shape[0].r );
				bk.alpha = 1;
			}
	
			
			if (params.shape==null && params.colour!='0' || params.colour==null){
				bk.graphics.beginFill(params.colour).setStrokeStyle(0).rect(0, 0, params.w, params.h);
				bk.alpha = 1;
			}
			var label = null;
			if (params.text){
				label = new createjs.Text(params.text[0].t, params.text[0].s+"px "+params.text[0].f, params.text[0].c);
					
				label.textAlign = "center"
				label.lineWidth = params.w;
				label.x = (params.w / 2)
				//label.y = (params.h/2)
				label.y = (params.h/3)
				//label.y = (params.h/2)-getTextHeight(label, 2)
				//trace(params.text[0].t);
			}
	
			clickshape.graphics.setStrokeStyle(0).rect(0, 0, params.w, params.h);
			var hit = new createjs.Shape();
			hit.graphics.beginFill("#000").rect(0, 0, params.w, params.h);
			clickshape.hitArea = hit;	
			clickshape.cursor='pointer';
	
	
	
			if (params.asset){
				btn.addChild(bk, params.asset, label, clickshape);
			}else{
				btn.addChild(bk, label, clickshape)
				
			}
			if (params.nfunction==null){
				params.nfunction = buttonFunc;
			}
	// myObject.addEventListener("change", createjs.proxy(myMethod, scope));
			//clickshape.on("click", params.nfunction);
			//clickshape.addEventListener("mousedown", params.nfunction, this);
			///rollovers??!!!
			//shape.addEventListener("mouseover", _rollOver);
			//shape.addEventListener("mouseout", _rollOut);
	
			if (params.idRef==null){
				params.idRef = 'idRef-null';
			}
			clickshape.parent.idRef = params.idRef
	
			btn.updateText = function(_txt){
				alert(_txt);
				label.text = _txt;
			}
	
			btn.width = params.w
			btn.height = params.h
			
			return btn;
		}