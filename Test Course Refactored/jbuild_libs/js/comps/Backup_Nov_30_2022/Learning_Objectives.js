var headlineText = "";
var headlineTextStyle = "";
var colorOption = "";
var locale = returnLocale();


function Learning_Objectives(c_data_stream,c_ccnum,acfl)
{
	colorOption = c_data_stream[0].color;

    switch (locale.locale){

    ///////////BRIAN EDIT 2019-11-25////////////////
        case "ar-MA": headlineText = "أهداف التعلم";
                      headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma'; transform: translate(-50%, -84%);\"";
        break;
            
        case "en-US": headlineText = "Learning Objectives";
                      if( typeof course_settings === "undefined" || typeof course_settings == null){
                        headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma';\"";
                      }else{
                        headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
                      }
        break;
            
        case "es-MX": headlineText = "objetivo de estudios";
                      headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
        break;
        
        case "fr-CA":
        case "fr-FR": headlineText = "Objectifs d'apprentissage";
                      headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
        break;
            
        case "id-ID": headlineText = "Tujuan Pembelajaran";
                      headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
        break;
            
        case "ko-KR": headlineText = "학습 목표";
                      //headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Black Han Sans';\"";
                      headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'DoHyeon'; transform: translate(-50%, -77%);\"";
        break;
            
        case "pt-BR": headlineText = "objetivos de aprendizado";
                      headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
        break;
            
        case "th-TH": headlineText = "เป้าหมายการเรียนรู้";
                      headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma'; transform: translate(-50%, -84%);\"";
        break;
            
        case "vi-VN": headlineText = "Mục tiêu học tập";
                      headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma'; transform: translate(-50%, -84%);\"";
        break;
        
        case "zh-HK":
        case "zh-MO":
        case "zh-SG":
        case "zh-TW":
        case "zh-CHT": headlineText = "學習目標";
                       headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Microsoft Yahei'; transform: translate(-50%, -90%);\"";//-171%
        break;

        case "zh-CN":
        case "zh-CHS": headlineText = "学习目标";
                       headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Microsoft Yahei'; transform: translate(-50%, -90%);\"";
        break;
        default: headlineText = "Learning Objectives";
                if( typeof course_settings === "undefined" || typeof course_settings == null){
                  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Tahoma';\"";
                }else{
                  headlineTextStyle = "style=\"color: #" + colorOption + "; font-family: 'Archivo';\"";
                }	
				
    }

	c_div_maker = c_div_maker +  "<div id='bLearningObjectives"+c_ccnum+"' class='col-lg-12 col-md-12 col-xs-12' style='margin:0; padding:0;'>";
	c_div_maker = c_div_maker + "<div "+headlineTextStyle+">" + headlineText + "</div>";

// Add a check for a #
for(var lw = 0; lw <= 11; lw++)
	{
		if(lw > 0)
			{
				c_div_maker = c_div_maker + "<div style='width:100%; margin-top:10px; border-bottom: "+lw+"px solid #"+colorOption+"'></div>";
			}
	}

	c_div_maker = c_div_maker + "</div>";
	c_div_maker = c_div_maker + "</div>";
	c_comp_Array[c_ccnum] = c_div_maker;
	
	comp_Array_test();
	c_div_maker = "";

}

