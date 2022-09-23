var b;
function viewclose()
{ 	
	if(b==1)
		{
			document.getElementById("nav").style.display="inline";
			return b=0;
		}

	else
		{	
			document.getElementById("nav").style.display="none";
			return b=1;
		}
}