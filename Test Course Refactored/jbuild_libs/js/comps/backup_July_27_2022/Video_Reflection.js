var vdr_whole_array = [[],[]];
var vdr_parts_array = [];
var new_count;
var rr_count = 0;
var cur_ccnum;
var opt_quest = [[],[]];
//var trans_button;
//var	trans_close;
//var rscnum;

function Video_Reflection(vidrData,c_ccnum)
{

    if(image_locale === "images/")
    {
            trans_button = "Open Transcript"; 
			trans_close = "Close Transcript";
    }

    for(var vrdta = 0 ; vrdta < vidrData.length; vrdta++)
        {
            vdr_parts_array[vrdta] = vidrData[vrdta]


            for(var vrwa = 0; vrwa < (Object.values(vdr_parts_array[vrdta]).length); vrwa++)
                {
                    vdr_whole_array[vrdta] = Object.values(vdr_parts_array[vrdta])
                }

        }


    cur_ccnum = c_ccnum;
    

    c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' id='Reference_Video_" + c_ccnum + "' style='margin-top:"+vdr_whole_array[0][1]+";'>";   

    
    c_div_maker = c_div_maker + "<div style='background-color:"+vdr_whole_array[0][2]+"; padding: 4px; margin-top: "+vdr_whole_array[0][1]+";'><div>:";
    
    c_div_maker = c_div_maker + "<video id='vid_source_sa_"+c_ccnum+"' class='c_lesson_width' width='100%;' controls onseeking='seeker("+c_ccnum+")' onplay='video_number("+c_ccnum+")'><source src='"+vdr_whole_array[0][0]+"' id='vid_source' type='video/mp4'></video>";
    
    
    c_div_maker = c_div_maker + "<div align='center'><button id='tbtn_sa_" + c_ccnum+"' type='button' class='btn btn-primary btn-sm' onclick='rTranscripts("+c_ccnum+",0,event);' onkeydown='rTranscripts("+c_ccnum+",0,event);' aria-expanded='false' aria-controls='trans_ac_" + c_ccnum +"'>"+trans_button+"</button></div>";


c_div_maker = c_div_maker + "<div onscroll='rvidt_scroll()' class='c_lesson_width' id='ref_trans_sa_" + c_ccnum +"' style='display: none; border: medium; border-style: solid; border-color: #000000; ;height:300px; overflow-y: auto; overflow-x: hidden; overflow:scroll; padding:5px; background-color:#ffffff;'>"; //#ffffff

            c_div_maker = c_div_maker + "<div id='rvid_trans_"+c_ccnum+"'>";
        for(var r_vid_tran = 1; r_vid_tran < vidrData.length ; r_vid_tran++)
        {

                if(vidrData[0].Person_underline !== "u")
                    {
                        c_div_maker = c_div_maker + "<p class='jb_char_para' style='text-align:"+vidrData[0].Person_align+"; color: "+vidrData[0].Person_text_color+"'><"+vidrData[0].Person_font+">"+ vidrData[r_vid_tran].Person +"</"+vidrData[0].Person_font+"></p>";
                    }

                    c_div_maker = c_div_maker + "<p class='jb_char_para' style='text-align:"+vidrData[0].Transcript_Text_align+"; color:"+vidrData[0].Transcript_Text_color+"'><"+vidrData[0].Transcript_Text_font+">"+ vidrData[r_vid_tran].Transcript_Text +"</"+vidrData[0].Transcript_Text_font+"></p>"; 
        }
            c_div_maker = c_div_maker + "</div>";
 
        c_div_maker = c_div_maker + "</div>";
       
   
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Reflection Question Begin )>------- 
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

if(vdr_whole_array[0][17].length > 0)
        {
            for(var oq = 0; oq < vdr_whole_array[0][17].length; oq++)
                {

                   // opt_quest[c_ccnum][oq] = ("reflect_optional_"+c_ccnum+"_"+oq);

                    c_div_maker = c_div_maker + "<div id='reflect_optional_"+c_ccnum+"_"+oq+"' style='display:none' class='col-lg-12 col-md-12 col-xs-12'>";

                    c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";
                    
                    c_div_maker = c_div_maker + "<div style='margin-top:20px;border:2px solid #0070b0;border-radius:10px;padding:10px;background-color:"+vdr_whole_array[0][20]+"' class='col-lg-6 col-md-6 col-xs-12'>";                    

                    c_div_maker = c_div_maker + "<p><"+vdr_whole_array[0][14]+" style='color:"+vdr_whole_array[0][12]+"'>"+vdr_whole_array[0][17][oq].OptQuestion+"</"+vdr_whole_array[0][14]+"></p>";

                    c_div_maker = c_div_maker + "<textarea id='ref_opquest_"+c_ccnum+"_"+oq+"' style='height:100px;color:#000000' minlength='4' rows='2' required oninput='reflect_test("+c_ccnum+")'></textarea>"

                    c_div_maker = c_div_maker + "</div>";

                    c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";
                    
                    c_div_maker = c_div_maker + "</div>";                    
                }
        }

c_div_maker = c_div_maker + "<div id='reflect_input_"+c_ccnum+"' style='display:none' class='col-lg-12 col-md-12 col-xs-12'>";

c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";

c_div_maker = c_div_maker + "<div style='margin-top:20px;border:2px solid #0070b0;border-radius:10px;padding:10px;background-color:"+vdr_whole_array[0][13]+"' class='col-lg-6 col-md-6 col-xs-12'>";

c_div_maker = c_div_maker + "<p><"+vdr_whole_array[0][14]+" style='color:"+vdr_whole_array[0][12]+"'>"+vdr_whole_array[0][11]+"</"+vdr_whole_array[0][14]+"></p>";

c_div_maker = c_div_maker + "<textarea id='ref_quest_"+c_ccnum+"' style='height:100px;color:#000000' minlength='4' rows='2' required oninput='reflect_test("+c_ccnum+")'></textarea>"
c_div_maker = c_div_maker + "<p id='refchk_"+c_ccnum+"' style='color:"+vdr_whole_array[0][12]+"'>"+vdr_whole_array[0][15]+"</p>"; 

c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'><button style='margin-top:10px;' class='btn btn-primary disabled' id='rf_sub_"+c_ccnum+"'' onclick='rfsub()'>Submit</button></div>"; //"+submit_button+" onclick='rv_sub("+c_ccnum+","+ref_opt_num+");


c_div_maker = c_div_maker + "</div>";

c_div_maker = c_div_maker + "<div class='col-lg-3 col-md-3 col-xs-12'></div>";

c_div_maker = c_div_maker + "</div>";

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Reflection Question End )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
   
c_div_maker = c_div_maker + "</div>";
        c_comp_Array[c_ccnum] = c_div_maker;

                comp_Array_test();
                c_div_maker = ""; 

}

function rv_sub(cm,)
{

}


function rTranscripts(tran,ctype, event)
{

    console.log("tran: " + tran + " // " + "ctype: " + ctype + " // " + "event: " + event);

    if (event.type === 'click' || (event.type === 'keydown' && (event.code === 13 || event.code === 32))) {

    console.log("Boom!: " + document.getElementById("tbtn_sa_" + tran).innerHTML); 
    console.log(ctype);
switch(ctype)



        {
            case 0:
                switch(document.getElementById("tbtn_sa_" + tran).innerHTML)
                    {
                        case "Close Transcript":
                            document.getElementById("ref_trans_sa_" + tran).style.display = "none";
                            document.getElementById("tbtn_sa_" + tran).innerHTML = trans_button; 
                            document.getElementById("tbtn_sa_" + tran).setAttribute('aria-expanded', 'false');
                        break;

                        case "Open Transcript":
                            document.getElementById("ref_trans_sa_" + tran).style.display = "block";
                            document.getElementById("tbtn_sa_" + tran).innerHTML = trans_close;
                            document.getElementById("tbtn_sa_" + tran).setAttribute('aria-expanded', 'true');
                        break;
                    }
            break;
        }

         
            }
    
}


function reflect_test(rft)
{
    var element = document.getElementById("rf_sub_"+rft);

        if(document.getElementById("ref_quest_"+rft).value.length <= 3)
            {
                element.classList.add("disabled");
                
            }

        if(document.getElementById("ref_quest_"+rft).value.length >= 4)
            {
                element.classList.remove("disabled");
            }

            rr_count = document.getElementById("ref_quest_"+rft).value.length

}

function rfsub()
{
        if(rr_count >= 4)
            {
                console.log("Sumbit answer");
                console.log(document.getElementById("ref_quest_"+cur_ccnum).value);
            }
                else
            {
                
                //console.log("Do nothing");
            }
}

function rvidt_scroll()
{
    var ref_scr = document.getElementById("ref_trans_sa_" + cur_ccnum);
    if( (ref_scr.scrollHeight - ref_scr.offsetHeight) + 23 === ref_scr.scrollTop)
        {
            
            document.getElementById("reflect_input_" + cur_ccnum).style.display = "block";
            for(var opshw = 0; opshw < vdr_whole_array[0][17].length; opshw++)
            {
                document.getElementById("reflect_optional_"+cur_ccnum+"_"+opshw).style.display = "block";
            }
        }
}

function seeker(sknm) {
   // console.log("seeker")  
    if(document.getElementById("vid_source_sa_" + sknm).currentTime === document.getElementById("vid_source_sa_" + sknm).duration)
        {
            document.getElementById("reflect_input_" + sknm).style.display = "block";
            
                for(var opshw = 0; opshw < vdr_whole_array[0][17].length; opshw++)
                    {
                        document.getElementById("reflect_optional_"+sknm+"_"+opshw).style.display = "block";
                    }

        }

  }

function video_number(vdn)
{
    var vid_ref_dur = document.getElementById("vid_source_sa_" + vdn);
	vid_ref_dur.onended = function() {
        document.getElementById("reflect_input_" + vdn).style.display = "block";

        for(var opshw = 0; opshw < vdr_whole_array[0][17].length; opshw++)
        {
            
            document.getElementById("reflect_optional_"+vdn+"_"+opshw).style.display = "block";
        }        
    
    }
}

/*
function lrsVideoQuestionData(vqdata)

{
//console.log("vqdata: " + vqdata);

         var videoQuestionStatement = {
                   "type": "videofeedback",
                   "verb": "answered",

                   "activity": "http://adlnet.gov/expapi/activities/videofeedback",
                   "module": bCurrentMod + 1,
                   "lesson": bCurrentLsn + 1,
                   "page": np_num,

                   "objectID": course_settings.Portal_Setup.Course_Folder,

                   "extensions":
				   					vqdata
                   }

         if(isXAPI){

                   LRSSend(videoQuestionStatement);

         }

}
*/