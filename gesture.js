import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';

class Point{
	constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

//initialize
		
var maxIndex = 4;
var msTout = 5000;
var maxId;
var timeout;
var gPts;
var stepStartTime=0;
var curIdx;
var lastPoint = new Point(0,0);
var gDone = false;




//defined the gesture
const p1 = new Point(0,0);
const p2 = new Point(30,30);
const p3 = new Point(-60,0);
const p4 = new Point(30,-30);
const p5 = new Point(1,1);
export var gPoints = [];
gPoints.push(p1,p2,p3,p4,p5);

gPts = gPoints;
maxId = maxIndex;
timeout = msTout;
curIdx = 1;



function Track(iPt){
	var xMatch = false;
	var yMatch = false;
	var timePerPoint = timeout/maxId;

	var d = new Date();
	var currentT = d.getTime();


	if(currentT > stepStartTime + timePerPoint){
		curIdx = 1;
		lastPoint = iPt;
		stepStartTime = currentT;
		console.log("timesout");
	}

	var absNext = new Point(0,0);
	absNext.x = lastPoint.x + gPoints[curIdx].x;
	absNext.y = lastPoint.y + gPoints[curIdx].y;


	if(gPoints[curIdx-1].x == gPoints[curIdx].x){
		xMatch = true;
	}

	if(gPoints[curIdx-1].y == gPoints[curIdx].y){
		yMatch = true;
	}

	// if(iPt.x - lastPoint.x)>

	if(gPoints[curIdx-1].x<gPoints[curIdx].x){
		// console.log(absNext.x);
		if(absNext.x<iPt.x){
			xMatch = true;
		}}
		else{
			// console.log(absNext.x);
			if(absNext.x>iPt.x){
				xMatch = true;
			}
		}


	if(gPoints[curIdx-1].y<gPoints[curIdx].y){
		if(absNext.y<iPt.y){
			yMatch = true;
		}
	}else{
			if(absNext.y>iPt.y){
				yMatch = true;
			}
		}



	// console.log("-------------");
	// console.log("curIdx: "+curIdx);
	// console.log("x: "+ (gPoints[curIdx-1].x-gPoints[curIdx].x) +"/" +(lastPoint.x-iPt.x));
	// console.log("y: "+ (gPoints[curIdx-1].y-gPoints[curIdx].y) +"/" +(lastPoint.y-iPt.y));
	// console.log(xMatch);

	if(xMatch && yMatch){
		curIdx++;
		lastPoint = iPt;
		stepStartTime = currentT;
		console.log("curIdx: "+curIdx);
		if(curIdx == maxId){
			curIdx =1;
			console.log("match");
			return(true);
			// gDone = true;
		}
	}
	return(false);
	// gDone = false;s
}

function drawPoint(ctx, x, y, r, color) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawATriangle(ctx){

	drawPoint(ctx, 500,250,50,'purple');
	drawPoint(ctx, 350,50,50,'purple');
	drawPoint(ctx, 200,250,50,'purple');
	// drawPoint(ctx, 450,150,5,'blue');
	// drawPoint(ctx, 455,153,5,'purple');
}


export function recGesture(keypoints, minConfidence,ctx){
	for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i];

    if (keypoint.score < minConfidence) {
      continue;
    }

  }
  	// drawATriangle(ctx);
   gDone = Track(keypoints[10].position);
    console.log(gDone);
    if(gDone){
    	// drawPoint(ctx, 100,100,50,'purple');
    	drawATriangle(ctx);
    }

    return(gDone);
}





