// Merge V4.0

"merge":"true",

               

// Font_Settings V4.0    

"Txt_Font_Settings":"left,#ffffff,normal,italic,jb7",

 

// Cell_Color V4.0

"Cell_Color":"#ed8c01",

               

// Single_Border V4.0

"Border":"block,4px,solid,#015d52",

               

// New_Table V4.0

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄                                                                       

//╔══════════════════════════════════════════════════════╗
//║ ----<( JB_Table Table Begin )>----                   ║
//╚══════════════════════════════════════════════════════╝

/*                                          
                Heading Snippet Key:

  ┌─────────────────────────┐ ┌────────────────────────────┐
  | "Cell_Color":"#ed8c01", ├─┤  Snippet name: Cell_Color  |
  └─────────────────────────┘ └────────────────────────────┘

 

  ┌─────────────────────────────────────┐ ┌───────────────────────────────┐                                           
  │ "Border":"block,4px,solid,#015d52", ├─┤  Snippet name: Single_Border  | 
  └─────────────┬────┬────┬──────┬──────┘ └───────────────────────────────┘       
                │    │    │      │
                │    │    │      └─ Color of the Border
                │    │    │
                │    │    └─ This is the style of the border. solid, dashed, dotted
                │    │
                │    └─ This is the weight of the border use px.
                │
                └─ Change this value to any of the following: block, left, top, right, bottom, LT, TR, LR, LB, BR, TB, LTR, LBR, TLB, TRB
                         (example: LT = left top)
                               

  ┌───────────────────────────────────────────────────────┐ ┌───────────────────────────────┐                               
  │ "Txt_Font_Settings":"left,#ffffff,normal,italic,jb7", ├─┤  Snippet name: Font_Settings  |
  └───────────────────────┬──────┬───────┬──────┬────┬────┘ └───────────────────────────────┘
                          │      │       │      │    │
                          │      │       │      │    └─ Font: Use jb1-jb7
                          │      │       │      │
                          │      │       │      └─ Font Style: normal, italic
                          │      │       │
                          │      │       └─ Font weight: normal, bold
                          │      │
                          │      └─ Font color
                          │
                          └─ Font alignment

*/                                                                                          

                                               

                                               

{"JB_Table":

[  // -------<( Heading Row )>------- // Border Style:  block, left, top, right, bottom, LT, TR, LR, LB, BR, TB, LTR, LBR, TLB, TRB

                {"Col_Heading":                                                                 // Text Settings: Alignment,Color,Weight,Style,Font

                               [

                                                {"Heading":"Heading 01",},

                                                {"Heading":"Heading 02",},

                                                {"Heading":"Heading 03",},

                                                {"Heading":"Heading 04",},

                                ],

                  "Row_Heading_Color":"#0070b0", // Whole row color

                  "Row_Heading_Height":"", // use px: example 50px

                  "Row_Heading_Font_Whole":"Alignment,#ffffff,Weight,Style,jb7", // "Row_Heading_Font":"Alignment,Color,Weight,Style,Font",

                },

    // -------<( Heading Row )>------- // 

 

               

    // -------<( Data Row )>------- //              

{"Row_Information":

[

                 {"Row_Data":// Row 01

                                [

                                                {"Data_Info":"Data 01",},

                                                {"Data_Info":"Data 02",},

                                                {"Data_Info":"Data 03",},

                                                {"Data_Info":"Data 04",},

 

 

                                ],

                  "Row_Data_Color":"", // Whole row color

                  "Row_Data_Height":"", //"" or use px: example 50px

                  "Row_Data_Font_Whole":"", // "Row_Heading_Font":"Alignment,Color,Weight,Style,Font",

                },

 

                ],

},

    // -------<( Data Row )>------- //                              

    // -------<( Table Settings )>------- //     

{"Whole_Table_Settings":

               [

                                {

                                                "Top_Margin":"10px", // use px: Example: 10px  "Border":"block,4px,solid,#015d52",

                                                "Heading_Text_Settings":"",

                                                "Row_Text_Settings":"",

                                                "Table_Background_Color":"",

                                                "Table_Border_Settings":"",

//====================================================================                                                    

                                                "Table_Width":"100%", // Use Percentage only!    

//====================================================================                                    

//====================================================================

//| When the table exceeds 320px a scroll bar will appear.           |

//====================================================================                                                    

                                                                "Table_Max_Height":"320px", // Use px. example: 320px

//====================================================================                                                    

 

                                },

                ],

},

    // -------<( Table Settings )>------- //     

                 

 ],

 

},                                            

//╔══════════════════════════════════════════════════════╗

//║ ----<( JB_Table Table End )>----                     ║

//╠══════════════════════════════════════════════════════╣                        

//╚══════════════════════════════════════════════════════╝                                        

//▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄               