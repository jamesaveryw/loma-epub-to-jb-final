//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄				
//╔══════════════════════════════════════════════════════╗
//║ -------<( List Paragraph Begin v4.0 )>-------        ║ 
//╚══════════════════════════════════════════════════════╝					
{"List_text_paragraph":
[
    {
        "List_Heading":"Heading",
            "heading_alignment":"left", // left, right, center
            "heading_style":"", // "" for default, bold, italic,
            "heading_underline":"", //"" for no underline,  solid, dashed, dotted, double
            "heading_underline_color":"",
            "heading_underline_height":"0px", // use px number 
            "heading_color":"",
            "heading_size":"h2", // h1, h2, h3, h4, h5, h6
        
            "paragraph_alignment":"left", // left, right, center
            "paragraph_text_size":"jb1", // jb1, jb2, jb3. jb4, jb5, jb6: all of these are 16px
        
            "paragraph_top_text_color":"#000000",
            "paragraph_bot_text_color":"#000000",
            /*
                jb1: normal, jb2: bold, jb3: italic 
                jb4: normal, jb5: bold, jb6: italic 
            */
    },
    
    {"Top_Paragraphs": 
          [
            // to add a paragraph copy the {"Paragraph_text":"One"}," then past it below {"Paragraph_text":"One"},
            // leave blank "" if there is no paragraph
            {"Paragraph_text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."},
            
            {"Paragraph_text":"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."},
        ],
    },
                                
    {"align_text":"left"}, // Do not alter or delete, this field will be phased out later. 
    {
        "Type_of_List":"ul",    //"" = no bullet list,  ol = is an ordered list with numbers,  ul = unordered list with bullets
        
        //-------------------------------------------------------------------
        //  -------<( to customize the ul list use the folowing: )>-------
        "ul_type":"",	// disc, circle, square, none, "" will be the default
        //-------------------------------------------------------------------
        
        //-------------------------------------------------------------------
        //  -------<( to customize the ol list use the folowing: )>-------
        "ol_type":"",  // 1, a, A, i, I, "" will be the default
        //-------------------------------------------------------------------
        
    // In order to change the bullet or number size of the list you will need to use pixel sizes
    // Below are the pixel sizes for each of the h1 - h6 tags. use the pixel size to change the "List_Text_Size"
        "List_Text_Size":"jb1",    // jb1, jb2, jb3, jb4, jb5, jb6: all of these are 16px
    }, 
    

    {"top_margin":"10px"},     //negative numbers to move the component up ex "-10px" 
                               //positive numbers to move the component down ex "10px"							
    {"background_color":"#ffffff"},
    {"padding":"10px"},
    {"text_color":"#000000"},
    
    {"list_items":
        [
            // to add another list item, copy the previous lstText and paste it below the last lstText item 
            {"lstText":"List Item One"},
            {"lstText":"List Item Two"},
            {"lstText":"List Item Three"},
            {"lstText":"List Item Four"},
        ],
    },
    
    {"Bottom_paragraphs":
        [
            // to add a paragraph copy the {"Paragraph_text":"One"}," then past it below {"Paragraph_text":"One"},
            // leave blank "" if there is no paragraph
            {"Paragraph_text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc."},
            {"Paragraph_text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.Two"},								
        
        ],
    },							
                                

],

},
//╔══════════════════════════════════════════════════════╗
//║ -------<( List Paragraph End )>-------               ║
//╠══════════════════════════════════════════════════════╣		
//╚══════════════════════════════════════════════════════╝	
//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄