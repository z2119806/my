/**
 * 检测是pc 还是 移动
 *
 * @return {bool} [true pc false orther]
 */
var isOs = function()
{  
	var userAgentInfo = navigator.userAgent;  
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
	var flag = true;
	for (var v = 0; v < Agents.length; v++) 
	{
	   if (userAgentInfo.indexOf(Agents[v]) > 0) 
	   { 
	   		flag = false;
	   		break; 
	   }  
	}

	return flag;  
}