var g_isMSIE=!1,g_isFirefox=!1,g_bAicc=!1,g_bLmsDebug=!0,g_sAiccSid="",g_sAiccUrl="",g_sRelayAiccUrl=" https://services.loma.org/Test/Relay/Proxy.ashx",g_sStudentID="",g_sStudentName="",g_dtSessionBegin="",g_sLmsCmiEntry="",g_sLmsCmiLocation="",g_sLmsCmiStatus="i",g_sLmsCmiSuspendData="",g_sMSXMLProgID,g_sMSXMLHTTPProgID,g_oSCO,g_oDocSCO;function setAICCData(name,value,target){var oModuleObjective=g_oSCO.selectSingleNode("objectives/o[@module='yes']");return"cmi.core.student_id"==name?g_sStudentID=value:"cmi.core.student_name"==name?g_sStudentName=value:"cmi.core.lesson_status"==name?g_sLmsCmiStatus=value:"cmi.core.lesson_location"==name?g_sLmsCmiLocation=value:"cmi.suspend_data"==name?g_sLmsCmiSuspendData=value:"cmi.core.score.raw"==name&&null!=oModuleObjective?oModuleObjective.setAttribute("raw",value):"cmi.core.score.max"==name&&null!=oModuleObjective?oModuleObjective.setAttribute("max",value):"cmi.core.score.min"==name&&null!=oModuleObjective&&oModuleObjective.setAttribute("min",value),AICC_Save(),!0}function getAICCData(name,target){var oModuleObjective=g_oSCO.selectSingleNode("objectives/o[@module='yes']"),value="";return"cmi.core.student_id"==name?value=g_sStudentID:"cmi.core.student_name"==name?value=g_sStudentName:"cmi.core.lesson_status"==name?value=g_sLmsCmiStatus:"cmi.core.lesson_location"==name?value=g_sLmsCmiLocation:"cmi.suspend_data"==name?value=g_sLmsCmiSuspendData:"cmi.core.score.raw"==name&&null!=oModuleObjective?value=oModuleObjective.getAttribute("raw"):"cmi.core.score.max"==name&&null!=oModuleObjective?value=oModuleObjective.getAttribute("max"):"cmi.core.score.min"==name&&null!=oModuleObjective&&(value=oModuleObjective.getAttribute("min")),value}function CheckBrowserType(){var sUserAgent=navigator.userAgent.toLowerCase();-1!=sUserAgent.indexOf("msie")?g_isMSIE=!0:sUserAgent.indexOf("trident/")>0?g_isMSIE=!0:-1!=sUserAgent.indexOf("gecko")&&(g_isFirefox=!0)}function AICC_Load(){try{var sAiccData="",sSend="AICCURL="+encodeURIComponent(g_sAiccUrl)+"&command=GetParam&version=2.0&session_id="+g_sAiccSid+"&AICC_Data="+escape(""),oXmlHttp=CreateXMLHTTP(),sResponse;if(oXmlHttp.open("POST",g_sRelayAiccUrl,!1),oXmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),oXmlHttp.send(sSend),200!=oXmlHttp.status){var e="AICC_Load:\n";throw e+="XmlHttp.status "+oXmlHttp.status}AICC_HandleResponse(oXmlHttp.responseText),AICC_InitSessionTime()}catch(e){return g_bLmsDebug&&alert(e),!1}return!0}function AICC_Save(){try{var sAiccData=AICC_PrepareData(),sSend="AICCURL="+encodeURIComponent(g_sAiccUrl)+"&command=PutParam&version=2.0&session_id="+g_sAiccSid+"&AICC_Data="+escape(sAiccData),oXmlHttp=CreateXMLHTTP();if(oXmlHttp.open("POST",g_sRelayAiccUrl,!1),oXmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),oXmlHttp.send(sSend),200!=oXmlHttp.status){var e="AICC_Save:\n";throw e+="XmlHttp.status "+oXmlHttp.status}}catch(e){return g_bLmsDebug&&alert(e),!1}return!0}function AICC_HandleResponse(sResponse){var sCRLF=String.fromCharCode(13,10),sCR=String.fromCharCode(10),sSrc=unescape(sResponse),corestart=(sSrc=sSrc.replace(/^;.*$/gm,"")).toLowerCase().indexOf("[core]");sSrc=sSrc.substr(corestart);for(var re=/^\[(\w+)\]$/m,sNameSeparator=" ",pGroups=null;0!=sSrc.length;){var nGroupBegin=sSrc.search(re),sGroup=(sSrc=sSrc.substr(nGroupBegin)).replace(re,"$1 "),sGroupName=sGroup.substr(0,sGroup.search(" ")),nNextGroupBegin=(sGroup=sGroup.substr(sGroupName.length+1)).search(re),oGroup;-1==nNextGroupBegin&&(nNextGroupBegin=sGroup.length),sSrc=sGroup.substr(nNextGroupBegin),sGroup=(sGroup=(sGroup=sGroup.substr(0,nNextGroupBegin)).replace(/[\n\r]+/gm,sCR)).replace(/^[\n]+/gm,""),(oGroup=new Object).sName=sGroupName.toLowerCase(),oGroup.arVars=sGroup.split(sCR),oGroup.pNext=pGroups,pGroups=oGroup}for(var oGroup=pGroups;null!=oGroup;oGroup=oGroup.pNext)for(var i=0;i<oGroup.arVars.length;i++){var sPair=oGroup.arVars[i];if(sPair.length>0){var nBegin=sPair.search("="),sName=sPair.substring(0,nBegin),sValue=sPair.substring(nBegin+1);if(sName=(sName=sName.toLowerCase()).replace(/^\s+|\s+$/g,""),"core"==oGroup.sName)switch(sName){case"lesson_status":var arValues=(sValue=sValue.toLowerCase()).split(","),sStatus=arValues[0];"i"==sStatus||"incomplete"==sStatus?g_sLmsCmiStatus="incomplete":"c"==sStatus||"complete"==sStatus?g_sLmsCmiStatus="complete":"p"==sStatus||"passed"==sStatus?g_sLmsCmiStatus="passed":"f"==sStatus||"failed"==sStatus?g_sLmsCmiStatus="failed":"b"==sStatus||"browsed"==sStatus?g_sLmsCmiStatus="browsed":"n"!=sStatus&&"not attempted"!=sStatus||(g_sLmsCmiStatus="not attempted");var sFlag="r";arValues.length>1&&(sFlag=arValues[1]),"r"!=sFlag&&"resume"!=sFlag||(g_sLmsCmiEntry="resume");break;case"lesson_location":null!=sValue&&"null"!=sValue&&(g_sLmsCmiLocation=sValue);break;case"student_name":g_sStudentName=sValue;break;case"student_id":g_sStudentID=sValue}else if("core_lesson"==oGroup.sName)switch(sName){case"suspend_data":g_sLmsCmiSuspendData=sValue}}}}function AICC_PrepareData(){var sScore="0",sStatus="i",oModuleObjective=g_oSCO.selectSingleNode("objectives/o[@module='yes']"),sRaw;null!=oModuleObjective&&(sScore=sRaw=oModuleObjective.getAttribute("raw"),"n"==(sStatus=g_sLmsCmiStatus.substring(0,1))&&(sStatus=g_sLmsCmiStatus="i"));var sCRLF=String.fromCharCode(13,10),sData="";sData+="[CORE]"+sCRLF,sData+="Lesson_Location="+g_sLmsCmiLocation+sCRLF,sData+="Lesson_Status="+sStatus+sCRLF,sData+="Score="+sScore+sCRLF,sData+="Time="+AICC_ReturnSessionTime()+sCRLF,sData+="[CORE_LESSON]"+sCRLF,sData+="Suspend_Data="+g_sLmsCmiSuspendData+sCRLF,sData+="[OBJECTIVES_STATUS]"+sCRLF;for(var nIndex=1,oObjectives=g_oSCO.selectNodes("objectives/o"),i=0;i<oObjectives.length;i++){var oObjective=oObjectives[i],sModule;if("yes"!=oObjective.getAttribute("module")){var sId=oObjective.getAttribute("id"),sRaw=oObjective.getAttribute("raw"),sSS=oObjective.getAttribute("ss"),sCS=oObjective.getAttribute("cs"),sStatus;sData+="J_ID."+nIndex+"="+sId+sCRLF,sData+="J_Score."+nIndex+"="+sRaw+sCRLF,sData+="J_Status."+nIndex+"="+(sStatus="u"!=sSS?sSS:sCS)+sCRLF,nIndex+=1}}return sData}function AICC_InitSessionTime(){g_dtSessionBegin=new Date}function AICC_ReturnSessionTime(){try{var dtCurrent=new Date,msecElapsed,dtElapsed=new Date(dtCurrent-g_dtSessionBegin),nYears=dtElapsed.getUTCFullYear()-1970,nMonths=dtElapsed.getUTCMonth(),nDays=dtElapsed.getUTCDate()-1,nHours=dtElapsed.getUTCHours(),nMinutes=dtElapsed.getUTCMinutes(),nSeconds=dtElapsed.getUTCSeconds(),s="";return nHours<10&&(s+="0"),s+=nHours+":",nMinutes<10&&(s+="0"),s+=nMinutes+":",nSeconds<10&&(s+="0"),s+=nSeconds}catch(e){return"00:00:00"}return"00:00:00"}function RemoveInteractionNode(sID){var oInteractions=g_oSCO.selectSingleNode("interactions"),oInteraction=GetInteraction(sID);if(null!=oInteraction){var oTmp=oInteractions.removeChild(oInteraction);oTmp=null}}function ReturnInteraction(sID,bReplace){var oInteraction;if(bReplace&&RemoveInteractionNode(sID),null==(oInteraction=GetInteraction(sID))){var oInteractions;if(null==(oInteractions=g_oSCO.selectSingleNode("interactions"))){var oInteractions=g_oDocSCO.createElement("interactions");g_oSCO.appendChild(oInteractions)}var oInteraction=g_oDocSCO.createElement("i");oInteractions.appendChild(oInteraction),oInteraction.setAttribute("id",sID);var dDate=new Date,sDate=ConvertDateToISO8601(dDate);oInteraction.setAttribute("b",sDate)}return oInteraction}function SetInteractionParam(sID,sParam,sValue){var oInteraction=ReturnInteraction(sID),sAttrName="y";return"latency"!=sParam&&(sAttrName=sParam.charAt(0)),oInteraction.setAttribute(sAttrName,sValue),!0}function SetInteractionArrayItem(sID,sArray,sValue){var oInteraction=ReturnInteraction(sID),sParentName="objectives"==sArray?"oo":"rr",sNodeName="objectives"==sArray?"o":"r",sAttrName="objectives"==sArray?"id":"p",oParent=oInteraction.selectSingleNode(sParentName);null==oParent&&(oParent=g_oDocSCO.createElement(sParentName),oInteraction.appendChild(oParent));var aoNodes=oParent.selectNodes(sNodeName);if(aoNodes.length>0)for(var i=0;i<aoNodes.length;i++)if(aoNodes[i].getAttribute(sAttrName)==sValue)return!1;var oNode=g_oDocSCO.createElement(sNodeName);return oParent.appendChild(oNode),oNode.setAttribute(sAttrName,sValue),!0}function GetInteractionParam(sID,sParam){var oInteraction=GetInteraction(sID);if(null==oInteraction)return null;var sAttrName="timestamp"==sParam?"b":"y";return"latency"!=sParam&&"timestamp"!=sParam&&(sAttrName=sParam.charAt(0)),oInteraction.getAttribute(sAttrName)}function GetInteractionArray(sID,sArray){var oInteraction=GetInteraction(sID);if(null==oInteraction)return null;var sParentName="objectives"==sArray?"oo":"rr",oParent=oInteraction.selectSingleNode(sParentName);if(null==oParent)return null;var sNodeName="objectives"==sArray?"o":"r",aNodes=oParent.selectNodes(sNodeName);if(0==aNodes.length)return null;for(var sAttrName="objectives"==sArray?"id":"p",sTmp="",aArray=new Array,i=0;i<aNodes.length;i++)null!=(sTmp=aNodes[i].getAttribute(sAttrName))&&aArray.push(sTmp);return aArray}function AICC_Initialize(oWindow){var s=window.location.search;if(s.length>0){for(var arPairs=s.split("&"),i=0;i<arPairs.length;i++){0==arPairs[i].indexOf("?")&&(arPairs[i]=arPairs[i].substring(1,arPairs[i].length));var arPair=arPairs[i].split("=");if(2==arPair.length){var sName=arPair[0],sValue=arPair[1];switch(sName=sName.toLowerCase()){case"aicc_sid":g_sAiccSid=sValue;break;case"aicc_url":g_sAiccUrl=unescape(sValue)}}}""!=g_sAiccSid&&""!=g_sAiccUrl&&(g_bAicc=!0,g_dtSessionBegin=new Date)}AICC_Load()}function loadPage(){AICC_Initialize()}function unloadPage(status){try{var sAiccData="",sSend="AICCURL="+encodeURIComponent(g_sAiccUrl)+"&command=ExitAU&version=4.0&session_id="+g_sAiccSid,oXmlHttp=CreateXMLHTTP(),sResponse;if(oXmlHttp.open("POST",g_sRelayAiccUrl,!1),oXmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),oXmlHttp.send(sSend),200!=oXmlHttp.status){var e="unloadPage:\n";throw e+="XmlHttp.status "+oXmlHttp.status}AICC_HandleResponse(oXmlHttp.responseText)}catch(e){return g_bLmsDebug&&alert(e),!1}return!0}function CreateXMLHTTP(){var oXmlHttp;return g_isMSIE?oXmlHttp=new ActiveXObject(g_sMSXMLHTTPProgID):g_isFirefox&&(oXmlHttp=new XMLHttpRequest),oXmlHttp}function CreateDOMDocument(){var oDoc;return g_isMSIE?oDoc=new ActiveXObject("Microsoft.XMLDOM"):g_isFirefox&&(oDoc=document.implementation.createDocument("","doc",null)),oDoc}function CreateSCO(){oDoc=CreateDOMDocument();var oSCO=oDoc.createElement("SCO");g_isMSIE?oDoc.appendChild(oSCO):g_isFirefox&&oDoc.documentElement.appendChild(oSCO);var oVisits=oDoc.createElement("visits");oSCO.appendChild(oVisits);var oObjects=oDoc.createElement("objects");oSCO.appendChild(oObjects);var oObjectives=oDoc.createElement("objectives");oSCO.appendChild(oObjectives);var oInteractions=oDoc.createElement("interactions");oSCO.appendChild(oInteractions);var oObjective=oDoc.createElement("o");oObjectives.appendChild(oObjective),oObjective.setAttribute("max","100"),oObjective.setAttribute("min","0"),oObjective.setAttribute("raw","0"),oObjective.setAttribute("module","yes"),g_oDocSCO=oDoc,g_oSCO=oSCO}function DetermineMSXMLProgID(){for(var oDoc,sProgID,i=6;i>=3;i--){try{sProgID="MSXML2.DOMDocument."+i+".0",oDoc=new ActiveXObject(sProgID)}catch(e){}if(void 0!==oDoc){g_sMSXMLProgID=sProgID,g_nFirst=i<=3?0:1;break}}}function DetermineMSXMLHTTPProgID(){for(var oDoc,sProgID,i=6;i>=3;i--){try{sProgID="MSXML2.XMLHTTP."+i+".0",oDoc=new ActiveXObject(sProgID)}catch(e){}if(void 0!==oDoc){g_sMSXMLHTTPProgID=sProgID;break}}}function UpdateFirefoxDOM(){document.implementation.hasFeature("XPath","3.0")&&(XMLDocument.prototype.selectNodes=function(cXPathString,xNode){xNode||(xNode=this);for(var oNSResolver=this.createNSResolver(this.documentElement),aItems=this.evaluate(cXPathString,xNode,oNSResolver,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),aResult=[],i=0;i<aItems.snapshotLength;i++)aResult[i]=aItems.snapshotItem(i);return aResult},Element.prototype.selectNodes=function(cXPathString){if(this.ownerDocument.selectNodes)return this.ownerDocument.selectNodes(cXPathString,this);throw"For XML Elements Only"}),document.implementation.hasFeature("XPath","3.0")&&(XMLDocument.prototype.selectSingleNode=function(cXPathString,xNode){xNode||(xNode=this);var xItems=this.selectNodes(cXPathString,xNode);return xItems.length>0?xItems[0]:null},Element.prototype.selectSingleNode=function(cXPathString){if(this.ownerDocument.selectSingleNode)return this.ownerDocument.selectSingleNode(cXPathString,this);throw"For XML Elements Only"}),Document.prototype.loadXML=function(sXML){for(var objDOMParser,objDoc=(new DOMParser).parseFromString(sXML,"text/xml");this.hasChildNodes();)this.removeChild(this.lastChild);for(var i=0;i<objDoc.childNodes.length;i++){var objImportedNode=this.importNode(objDoc.childNodes[i],!0);this.appendChild(objImportedNode)}},Node.prototype.__defineGetter__("xml",(function(){var oXMLSerializer,sXML;return(new XMLSerializer).serializeToString(this)})),Node.prototype.__defineGetter__("text",(function(){for(var sText="",oText=this.firstChild;null!=oText;)3!=oText.nodeType&&4!=oText.nodeType||(sText+=oText.nodeValue),oText=oText.nextSibling;return sText})),g_nFirst=1}CheckBrowserType(),g_isFirefox?UpdateFirefoxDOM():g_isMSIE&&(DetermineMSXMLProgID(),DetermineMSXMLHTTPProgID()),CreateSCO();