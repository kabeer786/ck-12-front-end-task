// Code goes here

function renderDay()
{
	totalMinutes=1440/2;
	

	var day={}
	day.time=[]
 
	cnt=9;
	for(i=1;i<=totalMinutes;i++){
		if(i%60==0){					
			day.time.push(i)
			$(".mainWrapper").append("<span class='minitue'>"+getAmPM(cnt)+"</span>")
			cnt++;
	
		}
	
	
	
	}

	console.log("day",day)

}

function getAmPM(cnt){
	if(cnt==12)
	{
		return cnt+"AM"
	
	}
if(cnt>11)
	return cnt%12+"AM"
	else
	return cnt+"PM"	

}

function calculateRange(allEvents,thisEvent){
	
	$.each(allEvents,function(index,element){
		 
	 
		})
	
	
}

$(document).ready(function(){
	
renderDay();

var events=[{
id : 001, start : 60, end : 150
},{
id : 002, start : 540, end : 570
}]
	
	
	var renderObj={};
	renderObj.item=[];
	
	
	
	$.each(events,function(index,element){
		 
		newObj=element;
		newObj.top=element.start
		renderObj.item.push(newObj);
		calculateRange(events,element);
		})
		
	console.log("renderObj",renderObj);
	
	$.each(renderObj.item,function(index,element){
		
		//alert(element.top)
		
		 
		$(".mainWrapper").append("<div class='event eve"+element.id+"'/>"+element.id+"</div>") 
		$(".eve"+element.id).css('top',element.top+"px");
		$(".eve"+element.id).css('height',element.end+"px")
		
		})
	
})




