//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var trans_close = "Close Transcript";
var trans_button = "Open Transcript";  
var expert_vid_class;
var acc_vid_array = [];
var sa_vid_array = [];
var vid_add; 

function Video_Files_New(c_data_video,c_ccnum,acfl)
{
    
    var new_vid = c_data_video[0];
    vid_add = new_vid.Video;
    
    
if(typeof acfl !== "undefined")
    {
        c_div_maker = c_div_maker + "<div id='c_video_ID_"+c_ccnum+"'>";

      acc_vid_array[c_ccnum] = ("vid_source_ac_" + c_ccnum);

        // JW 02-25-21:
        // 1: Added onkeydown event listener
        // Reasoning: Buttons should respond to enter/space key
        // 2: Added aria-expanded='false' and aria-controls='trans-id'
        // Reasoning: The button reveals content, so screenreader users need to know the
        // transcrip is open or closed. 


        c_div_maker = c_div_maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div class=\""+expert_vid_class+"\"><video id='vid_source_ac_"+c_ccnum+"' class='c_lesson_width' width='100%;' controls onplay='video_number("+c_ccnum+")'><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_ac_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+c_ccnum+",1,event);' onkeydown='Transcripts("+c_ccnum+",0,event);' aria-expanded='false' aria-controls='trans_ac_" + c_ccnum +"'>"+trans_button+"</button></div></div></div>";
        
       c_div_maker = c_div_maker + "<div class='c_lesson_width' id='trans_ac_" + c_ccnum +"' style='display: none; border: medium; border-style: solid; border-color: #000000;height: auto; overflow-y: auto; overflow-x: hidden ;padding:5px; background-color:#ffffff;'>"; //height:300px;

       for(var c_vid_tran = 1; c_vid_tran < c_data_video.length; c_vid_tran ++)
       {
               if(new_vid.Person_underline === "u")
                   {
                       c_div_maker = c_div_maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+"><u>"+ c_data_video[c_vid_tran].Person +"</u></"+new_vid.Person_font+"></p>";
                   }

               if(new_vid.Person_underline !== "u")
                   {
                       c_div_maker = c_div_maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+">"+ c_data_video[c_vid_tran].Person +"</"+new_vid.Person_font+"></p>";	
                   } 
 

       c_div_maker = c_div_maker + "<p class='jb_char_para' style='text-align:"+new_vid.Transcript_Text_align+"; color:"+new_vid.Transcript_Text_color+"'><"+new_vid.Transcript_Text_font+">"+ c_data_video[c_vid_tran].Transcript_Text +"</"+new_vid.Transcript_Text_font+"></p>";                                

           
       }

c_div_maker = c_div_maker + "</div>";
       


        c_div_maker = c_div_maker + "</div>";

    }

if(typeof acfl === "undefined")
    {


        var new_vid = c_data_video[0];
        
        c_div_maker = c_div_maker + "<div id='c_video_ID_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 '>";
        
        expert_vid_class = "";
        if(new_vid.Expert_View === "yes"){expert_vid_class = "bExpertVid"}

        sa_vid_array[c_ccnum] = ("vid_source_sa_" + c_ccnum);

        // JW 02-25-21:
        // 1: Added onkeydown event listener
        // Reasoning: Buttons should respond to enter/space key
        // 2: Passing the event to the Transcripts function
        // Reasoning: We need a way to determine what type of event and which key, if applicable,
        // was triggered the call to the function.
        // 3: Added aria-expanded='false' and aria-controls='trans-id'
        // Reasoning: The button reveals content, so screenreader users need to know the
        // transcrip is open or closed. 
        c_div_maker = c_div_maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div class=\""+expert_vid_class+"\"><video id='vid_source_sa_"+c_ccnum+"' class='c_lesson_width' width='100%;' controls onplay='video_number("+c_ccnum+")'><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_sa_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+c_ccnum+",0, event);' onkeydown='Transcripts("+c_ccnum+",0, event);' aria-expanded='false' aria-controls='trans_sa_" + c_ccnum +"'>"+trans_button+"</button></div></div></div>";
        
        c_div_maker = c_div_maker + "<div class='c_lesson_width' id='trans_sa_" + c_ccnum +"' style='display: none; border: medium; border-style: solid; border-color: #000000; ;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px; background-color:#ffffff;'>";
        
        
        
                    for(var c_vid_tran = 1; c_vid_tran < c_data_video.length; c_vid_tran ++)
                            {
        
                                    if(new_vid.Person_underline === "u")
                                        {
                                            c_div_maker = c_div_maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+"><u>"+ c_data_video[c_vid_tran].Person +"</u></"+new_vid.Person_font+"></p>";
                                        }
        
                                    if(new_vid.Person_underline !== "u")
                                        {
                                            c_div_maker = c_div_maker + "<p class='jb_char_para' style='text-align:"+new_vid.Person_align+"; color: "+new_vid.Person_text_color+"'><"+new_vid.Person_font+">"+ c_data_video[c_vid_tran].Person +"</"+new_vid.Person_font+"></p>";	
                                        } 
                          
                                        

                            c_div_maker = c_div_maker + "<p class='jb_char_para' style='text-align:"+new_vid.Transcript_Text_align+"; color:"+new_vid.Transcript_Text_color+"'><"+new_vid.Transcript_Text_font+">"+ c_data_video[c_vid_tran].Transcript_Text +"</"+new_vid.Transcript_Text_font+"></p>";                                
        
                                
                            }
        
        c_div_maker = c_div_maker + "</div>";
        
        
        
        c_div_maker = c_div_maker + "</div>";
        
        c_comp_Array[c_ccnum] = c_div_maker;

                comp_Array_test();

                c_div_maker = "";
        
        
        } 
    }


function Transcripts(tran,ctype, event)
	{
        
        // JW 02-25-21:
        // 1. Added if statement to determine if the event was a click or keydown.
        // Reasonsing: Automatically trigger code if event type is click. If keydown, we should only respond to Space or Enter key.
        // 2. Toggles aria-expanded from false to true (or vice versa) based on whether the transcript is open.
        // Reasoning: Notifes screenreaders that there's new content visible.
        if (event.type === 'click' || (event.type === 'keydown' && (event.code === 13 || event.code === 32))) {

            switch(ctype)
                {
                    case 0:
                        switch(document.getElementById("tbtn_sa_" + tran).innerHTML)
                            {
                                case "Close Transcript":
                                    document.getElementById("trans_sa_" + tran).style.display = "none";
                                    document.getElementById("tbtn_sa_" + tran).innerHTML = trans_button; 
                                    document.getElementById("tbtn_sa_" + tran).setAttribute('aria-expanded', 'false');
                                break;

                                case "Open Transcript":
                                    document.getElementById("trans_sa_" + tran).style.display = "block";
                                    document.getElementById("tbtn_sa_" + tran).innerHTML = trans_close;
                                    document.getElementById("tbtn_sa_" + tran).setAttribute('aria-expanded', 'true');
                                    video_transcripts(vid_add);
                                break;
                            }
                    break;

                    case 1:
                        switch(document.getElementById("tbtn_ac_" + tran).innerHTML)
                            {
                                case "Close Transcript":
                                    document.getElementById("trans_ac_" + tran).style.display = "none";
                                    document.getElementById("tbtn_ac_" + tran).innerHTML = trans_button; 
                                    document.getElementById("tbtn_ac_" + tran).setAttribute('aria-expanded', 'false');
                                break;

                                case "Open Transcript":
                                    document.getElementById("trans_ac_" + tran).style.display = "block";
                                    document.getElementById("tbtn_ac_" + tran).innerHTML = trans_close;
                                    document.getElementById("tbtn_ac_" + tran).setAttribute('aria-expanded', 'true');
                                    video_transcripts(vid_add);
                                break;
                            }
                    break;
                }
        }

	}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component End 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
