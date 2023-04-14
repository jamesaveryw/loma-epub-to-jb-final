//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var trans_close = "Close Transcript";
var trans_button = "Open Transcript";  
var expert_vid_class;
var acc_vid_array = [];
var sa_vid_array = [];

function Video_Files_New(c_data_video,c_ccnum,acfl)
{

    var new_vid = c_data_video[0];

if(typeof acfl !== "undefined")
    {
      //  c_div_maker = "";
        c_div_maker = c_div_maker + "<div id='c_video_ID_"+c_ccnum+"'>";

      // c_div_maker = c_div_maker + "<video id='vid_source_"+c_ccnum+"' class='c_lesson_width' width='100%;' controls onplay='video_number("+c_ccnum+")'><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video>";
       
      acc_vid_array[c_ccnum] = ("vid_source_ac_" + c_ccnum);

        c_div_maker = c_div_maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div class=\""+expert_vid_class+"\"><video id='vid_source_ac_"+c_ccnum+"' class='c_lesson_width' width='100%;' controls onplay='video_number("+c_ccnum+")'><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_ac_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+c_ccnum+",1);'>"+trans_button+"</button></div></div></div>";
        //<button id='tbtn_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+c_ccnum+");'>"+trans_button+"</button>
        
       c_div_maker = c_div_maker + "<div class='c_lesson_width' id='trans_ac_" + c_ccnum +"' style='display: none; border: medium; border-style: solid; border-color: #000000; ;height:300px; overflow-y: auto; overflow-x: hidden ;padding:5px; background-color:#ffffff;'>";

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
        c_div_maker = "";	

        var new_vid = c_data_video[0];
        
        c_div_maker = c_div_maker + "<div id='c_video_ID_"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12 '>";
        
        expert_vid_class = "";
        if(new_vid.Expert_View === "yes"){expert_vid_class = "bExpertVid"}
        //if(new_vid.Expert_View === "no"){}
        //acc_vid_array[c_ccnum] = ("vid_source_ac_" + c_ccnum);
        sa_vid_array[c_ccnum] = ("vid_source_sa_" + c_ccnum);

        
                                                                                                                                                   //bExpertVid  
        c_div_maker = c_div_maker + "<div style='background-color:"+new_vid.back_color+"; padding: 4px; margin-top: "+new_vid.top_margin+";'><div><div class=\""+expert_vid_class+"\"><video id='vid_source_sa_"+c_ccnum+"' class='c_lesson_width' width='100%;' controls onplay='video_number("+c_ccnum+")'><source src='"+new_vid.Video+"' id='vid_source' type='video/mp4'></video></div><div align='center'><button id='tbtn_sa_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+c_ccnum+",0);'>"+trans_button+"</button></div></div></div>";
        //<button id='tbtn_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='Transcripts("+c_ccnum+");'>"+trans_button+"</button>
        
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

        
        
        
        } 
    }



 //   var element = document.getElementById("myDIV");
 //   element.className = element.className.replace(/\bmystyle\b/g, "");
//panel-body
//panel-collapse collapse

   // $('.accordion-toggole').on('click', '.btn', function(e) { e.stopPropagation(); })

function Transcripts(tran,ctype)
	{
        
       // function stopEventPropogation(e){
           // stopPropogation()
      //  }
    //  $('[data-toggle=collapse]').prop('disabled',true);
        //alert(document.getElementById("tbtn_" + tran).innerHTML);
           // alert("tran: " + tran);
           // alert("tbtn_" + tran);
//alert("ctype: " + ctype);
//alert("tran: "  + tran);

        switch(ctype)
            {
                case 0:
                    switch(document.getElementById("tbtn_sa_" + tran).innerHTML)
                        {
                            case "Close Transcript":
                                document.getElementById("trans_sa_" + tran).style.display = "none";
                                document.getElementById("tbtn_sa_" + tran).innerHTML = trans_button; 
                            break;

                            case "Open Transcript":
                                document.getElementById("trans_sa_" + tran).style.display = "block";
                                document.getElementById("tbtn_sa_" + tran).innerHTML = trans_close;
                            break;
                        }
                break;

                case 1:
                    switch(document.getElementById("tbtn_ac_" + tran).innerHTML)
                        {
                            case "Close Transcript":
                                document.getElementById("trans_ac_" + tran).style.display = "none";
                                document.getElementById("tbtn_ac_" + tran).innerHTML = trans_button; 
                            break;

                            case "Open Transcript":
                                document.getElementById("trans_ac_" + tran).style.display = "block";
                                document.getElementById("tbtn_ac_" + tran).innerHTML = trans_close;
                            break;
                        }
                break;
            }



/*
       switch(document.getElementById("tbtn_" + tran).innerHTML)
       {
            case "Close Transcript":

                if(ctype === 0)
                    {
                        document.getElementById("trans_sa_" + tran).style.display = "none";
                        document.getElementById("tbtn_" + tran).innerHTML = trans_button;                     
                    }

                 if(ctype === 1)
                    {
                        document.getElementById("trans_ac_" + tran).style.display = "none";
                        document.getElementById("tbtn_" + tran).innerHTML = trans_button;
                    }   
            break;

            case "Open Transcript":
 
                if(ctype === 0)
                   {
                        document.getElementById("trans_sa_" + tran).style.display = "block";
                        document.getElementById("tbtn_" + tran).innerHTML = trans_close;
                   } 
                   
                if(ctype === 1)
                   {
                        document.getElementById("trans_ac_" + tran).style.display = "block";
                        document.getElementById("tbtn_" + tran).innerHTML = trans_close;
                   }

            break; 

       }
 */
       


	}

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component End 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
