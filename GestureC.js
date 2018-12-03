import * as posenet from '@tensorflow-models/posenet';
import * as tf from '@tensorflow/tfjs';

class Point{
	constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

var ofPoint = [[],[]];
var maxIndex = 4;
var msTout = 5000;


class Gesture{
	setup(points,maxIndex,msTout){

	}
	// inputPoint = new Point;
	track(inputPoint){
	}

	constructor(maxId,timeout,gPts,stepStartTime,curIdx,lastPoint){
		this.maxId = maxId;
		this.timeout = timeout;
		this.gPts = gPts;
		this.stepStartTime = stepStartTime;
		this.curIdx = curIdx;
		this.lastPoint = lastPoint;
	}		
}


//defined the gesture
const p1 = new Point(0,0);
const p2 = new Point(150,90);
const p3 = new Point(-150,-150);
const p4 = new Point(150,90);
const p5 = new Point(5,3);
var gPoints = [];
gPoints = {p1,p2,p3,p4,p5};

// var gesture = new Gesture;
// gesture.setup(gPoints,4,5000);


var gesture = new Gesture;
gesture.gPts = gPoints;
gesture.maxId = maxIndex;
gesture.timeout = msTout;
gesture.curIdx = 1;

function Track(iPt){
	var xMatch,yMatch = false;
	var timePerPoint = timeout/maxId;

	var d = new Date();
	var currentT = d.getTime();

	if(currentT > stepStartTime + timePerPoint){
		curIdx = 1;
		lastPoint = iPt;
		stepStartTime = currentT;
	}

	var absNext = new Point;
	absNext = lastPoint + gPoints[curIdx];

	if(gPoints[curIdx-1].x == gPoints[curIdx].x){
		xMatch = true;
	}

	if(gPoints[curIdx-1].y == gPoints[curIdx].y){
		yMatch = true;
	}

	if(gPoints[curIdx-1].x<gPoints[curIdx].x){
		if(absNext.x<iPt.x){
			xMatch = true;
		}else{
			if(absNext.x>iPt.x){
				xMatch = true;
			}
		}
	}

	if(gPoints[curIdx-1].y<gPoints[curIdx].y){
		if(absNext.y<iPt.y){
			yMatch = true;
		}else{
			if(absNext.y>iPt.y){
				yMatch = true;
			}
		}
	}

	if(xMatch && yMatch){
		curIdx++;
		lastPoint = iPt;
		stepStartTime = currentT;

		if(curIdx == maxId){
			curIdx =1;
			return(true);
		}
	}

	return(false);
}


// function Track(iPt){
// 	var xMatch,yMatch = false;
// 	var timePerPoint = timeout/maxId;

// 	var d = new Date();
// 	var currentT = d.getTime();

// 	if(currentT > stepStartTime + timePerPoint){
// 		curIdx = 1;
// 		lastPoint = iPt;
// 		stepStartTime = currentT;
// 	}

// 	var absNext = new Point;
// 	absNext = lastPoint + gPoints[curIdx];

// 	if(gPoints[curIdx-1].x == gPoints[curIdx].x){
// 		xMatch = true;
// 	}

// 	if(gPoints[curIdx-1].y == gPoints[curIdx].y){
// 		yMatch = true;
// 	}

// 	if(gPoints[curIdx-1].x<gPoints[curIdx].x){
// 		if(absNext.x<iPt.x){
// 			xMatch = true;
// 		}else{
// 			if(absNext.x>iPt.x){
// 				xMatch = true;
// 			}
// 		}
// 	}

// 	if(gPoints[curIdx-1].y<gPoints[curIdx].y){
// 		if(absNext.y<iPt.y){
// 			yMatch = true;
// 		}else{
// 			if(absNext.y>iPt.y){
// 				yMatch = true;
// 			}
// 		}
// 	}

// 	if(xMatch && yMatch){
// 		curIdx++;
// 		lastPoint = iPt;
// 		stepStartTime = currentT;

// 		if(curIdx == maxId){
// 			curIdx =1;
// 			return(true);
// 		}
// 	}

// 	return(false);
// }


export function recGesture(keypoints, minConfidence){
	for (let i = 0; i < keypoints.length; i++) {
    const keypoint = keypoints[i];

    if (keypoint.score < minConfidence) {
      continue;
    }

  }

    var gDone = gesture.track(keypoints[0].position);
    console.log(gDone);
}





