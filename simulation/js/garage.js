var start=0,opening=0,closing=0,cntUp=0,cntdown=0,openstatus=false;

var offset = 210;

function openShutterFrame() 
{
	document.getElementById("closeBtn").onclick=function(){closeShutter();}
	cntUp++;
	shutter=document.getElementById("shutter");
	offset-=40;
	shutter.style.top=offset+"px";
	if(offset==10)
	{
	    clearInterval(opening);
		opening=0;
		document.getElementById("bit4").style.backgroundColor="#FF0000";
		document.getElementById("bit6").style.backgroundColor="#FF0000";
		document.getElementById("bit15").style.backgroundColor="#FF0000";
		document.getElementById("bit2").style.backgroundColor="#009900";
		document.getElementById("bit13").style.backgroundColor="#009900";
		document.getElementById("open").style.background="radial-gradient(#ED0000 2.5%, #000000)";
		document.getElementById("ajar").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
		document.getElementById("op1").style.visibility="hidden";
		document.getElementById("op5").style.visibility="hidden";
		document.getElementById("op3").style.visibility="visible";
		document.getElementById("stopBtn").disabled=true;
	}
}

function closeShutterFrame() 
{
	document.getElementById("openBtn").onclick=function(){openShutter();}
	cntDown++;
	shutter=document.getElementById("shutter");
	offset+=40;
	shutter.style.top=offset+"px";
	if(offset==210)
	{
	    clearInterval(closing);
		closing=0;
		document.getElementById("bit8").style.backgroundColor="#FF0000";
		document.getElementById("bit12").style.backgroundColor="#FF0000";
		document.getElementById("bit15").style.backgroundColor="#FF0000";
		document.getElementById("bit9").style.backgroundColor="#009900";
		document.getElementById("bit14").style.backgroundColor="#009900";
		document.getElementById("close").style.background="radial-gradient(#ED0000 2.5%, #000000)";
		document.getElementById("ajar").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
		document.getElementById("op2").style.visibility="hidden";
		document.getElementById("op5").style.visibility="hidden";
		document.getElementById("op4").style.visibility="visible";
		document.getElementById("stopBtn").disabled=true;
		document.getElementById("closeBtn").onclick="";
	}
}

function showMsg()
{
	document.getElementById("msg").style.visibility="visible";
	if(document.getElementById("msg").innerHTML=="Please wait.")
		document.getElementById("msg").innerHTML="Please wait..";
	else if(document.getElementById("msg").innerHTML=="Please wait..")
		document.getElementById("msg").innerHTML="Please wait...";
	else if(document.getElementById("msg").innerHTML=="Please wait...")
		document.getElementById("msg").innerHTML="Please wait.";
}

function hideMsg()
{
	document.getElementById("stopBtn").disabled=false;
	document.getElementById("msg").style.visibility="hidden";
	clearInterval(start);
	start=0;
}

function openShutter()
{
	console.log("openShutter",offset);
	document.getElementById("openBtn").onclick="";
	if(offset!=10)
	{
		clearInterval(closing);
		openstatus=true;
		start=setInterval(function(){ showMsg(); },300);
		for(i=1;i<=5;i++)	
		{
			document.getElementById("bit"+i).style.backgroundColor="#009900";
			if(i==1||i==5)
				document.getElementById("op"+i).style.visibility="visible";
			else
				document.getElementById("op"+i).style.visibility="hidden";
		}
		for(i=7;i<=11;i++)	
				document.getElementById("bit"+i).style.backgroundColor="#ff0000";
		document.getElementById("bit15").style.backgroundColor="#009900";
		document.getElementById("bit16").style.backgroundColor="#009900";
		setTimeout(function()
		{
			hideMsg();
			document.getElementById("closeBtn").disabled=false;
			document.getElementById("stopBtn").disabled=false;
			document.getElementById("bit2").style.backgroundColor="#FF0000";
			document.getElementById("bit6").style.backgroundColor="#009900";
			document.getElementById("ajar").style.background="radial-gradient(#ED0000 2.5%, #000000)";
			document.getElementById("close").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
			document.getElementById("open").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
			cntUp=0;
			opening=setInterval(function(){openShutterFrame();},1000);
		},3000);
	}
}

function closeShutter()
{
	document.getElementById("closeBtn").onclick="";
	document.getElementById("openBtn").onclick="";
	console.log("closeShutter",offset);
	if(offset!=210)
	{
		document.getElementById("stopBtn").disabled=false;
		clearInterval(opening);
		openstatus=false;
		start=setInterval(function(){ showMsg(); },300);
		document.getElementById("op2").style.visibility="visible";
		document.getElementById("op5").style.visibility="visible";
		document.getElementById("op3").style.visibility="hidden";
		for(i=1;i<=5;i++)	
		document.getElementById("bit"+i).style.backgroundColor="#ff0000";
		for(i=7;i<=11;i++)	
			document.getElementById("bit"+i).style.backgroundColor="#009900";
		document.getElementById("bit15").style.backgroundColor="#009900";
		document.getElementById("bit16").style.backgroundColor="#009900";
		document.getElementById("bit2").style.backgroundColor="#ff0000";
		document.getElementById("bit13").style.backgroundColor="#ff0000";
		setTimeout(function()
		{
			hideMsg();
			document.getElementById("bit9").style.backgroundColor="#FF0000";
			document.getElementById("bit12").style.backgroundColor="#009900";
			document.getElementById("ajar").style.background="radial-gradient(#ED0000 2.5%, #000000)";
			document.getElementById("close").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
			document.getElementById("open").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
			cntDown=0;
			closing=setInterval(function(){closeShutterFrame();},1000);
		},3000);
	}
}

function stop()
{
	document.getElementById("openBtn").onclick=function(){openShutter();}
	document.getElementById("closeBtn").onclick=function(){closeShutter();}
	console.log("stop",offset);
	if(openstatus)
	{
		hideMsg();
		clearInterval(opening);
		document.getElementById("ajar").style.background="radial-gradient(#ED0000 2.5%, #000000)";
		document.getElementById("close").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
		document.getElementById("open").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
		for(i=1;i<=16;i++)
		{
			if(i==2||i==3||i==4||i==5||i==8||i==10||i==11||i==15||i==16)
				document.getElementById("bit"+i).style.backgroundColor="#009900";
			else
				document.getElementById("bit"+i).style.backgroundColor="#FF0000";
		}
	}
	if(!openstatus)
	{
		hideMsg();
		clearInterval(closing);
		document.getElementById("ajar").style.background="radial-gradient(#ED0000 2.5%, #000000)";
		document.getElementById("close").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
		document.getElementById("open").style.background="radial-gradient(#E3F1F7 10%, #3B95B9)";
		for(i=1;i<=16;i++)
		{
			if(i==3||i==4||i==5||i==8||i==10||i==11||i==15||i==16)
				document.getElementById("bit"+i).style.backgroundColor="#009900";
			else
				document.getElementById("bit"+i).style.backgroundColor="#FF0000";
		}
	}
	for(i=1;i<=5;i++)
	{
		document.getElementById("op"+i).style.visibility="hidden";
	}
	document.getElementById("op5").style.visibility="visible";
}