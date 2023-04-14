module.exports = {
    JB_Page: function() {
        return [
            {
                "Page_Setup": {

                    "Assets_folder": "Mod",

                    "Lesson_Header_Color": "#0070b0",
                    "Lesson_Title_Color": "#ffffff",
                    "Lesson_Title_Text": "",
                    "Page_Title": "",
                    "Progress_Bar_Color": "#f2c400",
                    "Progress_Bar_Height": "3px",

                    "heroSize": "75%",
                    "hImage": "",
                    "hImage_Alt_Tag_Text": "",
                },

                "JBuilder_Content": [

                ],

            }
        ];
    }, 

    JB_Heading: function() {
        return 	{
            "Heading": [
				{ "sngl_Heading":"" },
				{ "alignment":"center" }, 
				{ "top_margin":"0px" },		
				{ "size":"" },  
				{ "style":"bold" }, 
				{ "color":"#000000" },  
				{ "background_color":"#ffffff" }, 
				{ "border_color":"" }, 
				{ "border_weight":"" }, 
				{ "border_style":"" }, 
				{ "border_radius":"0px" } 
		    ]
	    }
    },
 
    JB_LO: function() {
        return {
            "Learning_Objectives": [
                { "color": "006aac" }
            ]
        }
    },

    JB_Table: function() {
        return {
            "JB_Table":  [  
                {   
                    "Col_Heading": [ 
                        /*{
                            "Heading":"",
                            "merge":"" 
                        },*/
                        
                    ],

                    "Row_Heading_Color":"#0070b0", 
                    "Row_Heading_Height":"", 
                    "Row_Heading_Font_Whole":"center,#ffffff,Weight,Style,jb7", 
                }, 

                {
                    "Row_Information": [

                    ]
                },
                
                    
                {
                    "Whole_Table_Settings": [ 
                        { 
                            "Top_Margin":"10px", 
                            "Heading_Text_Settings":"", 
                            "Row_Text_Settings":"",
                            "Table_Background_Color":"", 
                            "Table_Border_Settings":"block", 
                            "Table_Width":"100%", 
                            "Table_Max_Height":"", 
                        }
                    ]
                }
            ]
        }
    },

    JB_List: function() {
        return {
            "List_text_paragraph": [
                {
                    "List_Heading":"",
                    "heading_alignment":"center",
                    "heading_style":"bold",
                    "heading_underline":"",
                    "heading_underline_color":"",
                    "heading_underline_height":"0px",
                    "heading_color":"",
                    "heading_size":"h1",
                    "paragraph_alignment":"left",
                    "paragraph_text_size":"jb1",
                    "paragraph_top_text_color":"#000000",
                    "paragraph_bot_text_color":"#000000",
                },
                
                {
                    "Top_Paragraphs": [
                        
                    ]
                },
                                            
                { "align_text":"left" },

                {
                    "Type_of_List":"ul",
                    "ul_type":"",
                    "ol_type":"",  
                    "List_Text_Size":"jb1",    
                }, 
                
                { "top_margin":"10px" },                  
                { "background_color":"#ffffff"} ,
                { "padding":"10px" },
                { "text_color":"#000000" },
                
                {
                    "list_items": [
                        
                        
                    ]
                },
                
                {
                    "Bottom_paragraphs": [
                        
                    ]
                }					
            ]
        }
    },

    JB_Para: function() {
        return {
            "Paragraphs_New": [
                {
                    "Paragraph_align":"left",
                    "Paragraph_Font_Size":"jb1", 
                    "Paragraph_Font_color":"", 
                    "Paragraph_Font_style":"", 
                    "Paragraph_Font_variant":"", 
                    "Paragraph_Font_weight":"", 
                    
                    "Padding":"",
                    "background_color":"",
                    "top_margin":"20px",
                    "border_color":"black",
                    "border_weight":"thin", 
                    "border_style":"", 
                    "border_radius":"0px", 
                    
                    "heading":"",
                    "heading_font_size":"h2",  
                    "heading_alignment":"center", 
                    "heading_color":"",
                    "heading_weight":"bold",  
                    "heading_style":"normal",   
                    "heading_variant":"normal", 
                    "heading_transform":"", 

                    "columns":"1",
                    "line_spacing":"1.5",
                    "background_image":""
                }
            
                
            ]
        }
    },

    JB_MImage: function () {
        return {
            "Image_Multi": [ 
                { 
                    "main_background_color":"", 
                    "main_border_radius":"", 
                    "main_border_style":"", 
                    "main_border_color":"", 
                    "main_border_width":"", 
                    "total_images":"1"
                }, 
                {
                    "image_file":"", 
                    "image_file_tag":"", 
                    "image_width":"90%", 
                    "image_top_margin":"10px", 
                    "image_border_radius":"", 
                     
                    "image_border_style":"", 
                    "image_border_color":"", 
                    "image_border_width":""
                }, 
                {
                    "image_file":"", 
                    "image_file_tag":"", 
                    "image_width":"90%", 
                    "image_top_margin":"10px", 
                    "image_border_radius":"", 			 
                    "image_border_style":"", 
                    "image_border_color":"", 
                    "image_border_width":""
                }, 
                {
                    "image_file":"", 
                    "image_file_tag":"", 
                    "image_width":"90%", 
                    "image_top_margin":"10px", 
                    "image_border_radius":"", 			 
                    "image_border_style":"", 
                    "image_border_color":"", 
                    "image_border_width":""
                },		 
            ],
        }
    },

    JB_Image: function () {
        return {
            "image_w_text": [    
                { 
                    "image_name":"", 
                    "image_w_text_tag":"", 
                    "border_style":"", 
                    "border_height":"",   
                    "border_color":"", 
                }, 
                        
                { 
                    "image_position":"bottom",
                    "image_aligmnent":"center", 
                }, 
                        
                { "image_size":"50%" }, 
                    
                { 
                    "image_text":"", 
                        
                    "image_list": [ 
                        
                    ], 

                    "list_position":"bottom", 
                    "top_margin":"10px", 
                    "Type_of_List":"ol", 
                    "ul_type":"",	
                    "ol_type":"",  
                    "List_Text_Size":"jb1",
                    "list_border_style":"",  
                    "list_border_height":"", 
                    "list_border_color":"", 
                        
                    "image_text_below":"", 
                                        
                }, 
                {
                    "image_text_color":"#bf0d3f",                  
                    "image_text_style":"normal",                      
                    "image_text_variant":"normal",                     
                    "image_text_weight":"normal",                     
                    "image_text_top_margin":"0%",                         
                    "image_text_padding":"0px", 
                }, 
                    
                { 
                    "image_text_alignmnet":"left",                      
                    "image_font_size":"jb1", 
                }, 
                                            
                { 
                    "top_margin":"0px",   
                    "snippet_top_margin":"10px", 
                }, 
                        
                {"background_color":""}, 
                    
                {"image_radius":""},                      
                    
            ]
        } 
    },

    JB_Question: function() {
        return {
            "Question_Comp": [
                {
                    "Question_type":"", 
                    "text_color":"#000000",
                    "question_size":"jb1", 
                    "background_color":"", 
                    "border_color":"",
                    "border_weight":"", 
                    "border_style":"", 
                    "border_radius":"10px", 
                    "question_align":"left",
                    "feedback_align":"left",	
                    "top_margin":"10px",
                    "image":"Lets Review.jpg", 
                    "image_alt_text":"",
                    "question":"",
                    "question_image":"", 
                    "question_image_placement":"none", 
                    "question_image_alt_tag":"",
                },
                
                {
                    "paragraph_top_text": [
                        //{"paragraph_top":""}
                    ]
                },
                
                {
                    "qList": [
                        {
                            "qList_on_off":"off", 
                            "align_text":"left",
                            "Type_of_List":"ol",
                            "ul_type":"",	
                            "ol_type":"",  
                            "Heading_Text_Size":"h1", 
                        },

                        //{"lstText":"List One"}
                    ]
                },
                {
                    "paragraph_bottom_text": [
                        {"paragraph_bottom":""}    
                    ]
                },	
                {
                    question_answers: [
                        //{"q_answer":"True", "true_false":"true","q_feedback":"",},
                    ]
                },
                
                {
                    "correct_feedback":"That's correct!",
                    "correct_remediation":"",
                    "incorrect_feedback":"Sorry. That's incorrect.",
                    "incorrect_remediation":"",
                    "correct_incorrect_font_size":"jb1",   
                    "Additional_feedback":"", 
                    "Additional_font_size":"jb1", 
                }
                
            ]
        }
    },

    JB_Video: function() {
        return {
            "Video_Files_New": [
                    
                {
                    "Video":"",
                    "Expert_View":"no",
                    "Expert_View_Alt":"The is for the expert view video series",
                    "top_margin":"20px",
                    "back_color":"#ffffff",
                    
                    "Transcript_Text_font":"jb1",
                    "Transcript_Text_align":"left",
                    "Transcript_Text_color":"#000000",
                    
                    "Person_font":"jb2",
                    "Person_align":"left",
                    "Person_text_color":"#000000",
                    "Person_underline":""
                }                    
                    
            ]
        }
    },

    JB_Divider: function() {
        return {
            "Divider": [
                {
                    "divider_image":""
                },
                {
                    "height":"50px",
                    "width":"100%",
                },
                {
                    "top_margin":""
                },
                {
                    "flip":"false"
                },
                {
                    "back_color":""
                },
                {
                    "Line_Display":"true",
                    "Line_Style":"solid",
                    "Line_height":"4px",
                    "Line_Color":"#000000",
                    "top_margin":"0px"
                }
            ]
        }
    }
};