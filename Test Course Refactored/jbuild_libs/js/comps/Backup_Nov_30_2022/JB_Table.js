
var varSetupNum = [];
var tbl_bdr_set = [];
var heading_trim = [];
var new_head_array = [];
var merge_array = [];

var hd_label_array = [];
var hd_cell_color_array = [];
var hd_border_array = [];
var hd_border_array_data = [];
var hd_txt_font_array = [];
var hd_txt_font_data = [];


var hd_row_array = [];
var border_sides_array = [];
var hd_text_font_data = [];
var hd_font_single;

var cell_border_both
var cell_border
var cell_data_border

var row_data_information_array = [];
var row_data_text_array = [];

var rd_border_array = [];
var rd_cell_color_array; // = [];
var rd_text_array = [];
var rd_merge_array = [];


function JB_Table(c_data_stream,c_ccnum,acfl)
{

  Whole_Table_Settings_array = c_data_stream[2].Whole_Table_Settings;

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Whole_Table_Settings code )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-



whole_set_array = Whole_Table_Settings_array[0];

for(var wsa = 0; wsa < Object.keys(Whole_Table_Settings_array[0]).length; wsa++)
        {
          varSetupNum[wsa] = Object.keys(Whole_Table_Settings_array[0])[wsa];

          tbl_bdr_set[wsa] = whole_set_array[varSetupNum[wsa]].split(",");

          if(tbl_bdr_set[wsa].length === 1)
                {

                }

            if(tbl_bdr_set[wsa].length > 1)
                {

                    for(var sspt = 0; sspt < tbl_bdr_set[wsa].length; sspt++)
                          {
                            
                          }

                }

        }

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Whole_Table_Settings code )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 //-------<( Heading data start )>-------
 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
 col_heading_array = c_data_stream[0].Col_Heading;

 hd_row_array = [];
                for(var hrh = 1; hrh < Object.keys(c_data_stream[0]).length; hrh++)
                    {
                      hd_row_array[hrh] = c_data_stream[0][Object.keys(c_data_stream[0])[hrh]];

                    }


new_head_array = [];

for(var hdm = 0; hdm < col_heading_array.length; hdm++)
{
 if(typeof col_heading_array[hdm].merge !== "undefined")
      {
         new_head_array.push(col_heading_array[hdm].merge);
      }

 if(typeof col_heading_array[hdm].merge === "undefined")
      {
        new_head_array.push(null);
      } 
      
      
}

var mab = 0;
merge_array = [];
hd_label_array = [];
hd_cell_color_array = [];
hd_border_array = [];
hd_txt_font_array = [];


for(var mg = 0; mg < new_head_array.length; mg++)
    {

        if(new_head_array[mg] !== null)
            {
//---------------------------------------------------------------------------------
//-------<( Heading )>-------
//---------------------------------------------------------------------------------
                if(typeof col_heading_array[mg].Heading !== "undefined")
                    {
                      hd_label_array.push(col_heading_array[mg].Heading);
                    }

                if(typeof col_heading_array[mg].Heading === "undefined")
                    {
                      hd_label_array.push("none");
                    }
//---------------------------------------------------------------------------------
//-------<( Heading )>-------
//---------------------------------------------------------------------------------   


//---------------------------------------------------------------------------------
//-------<( Cell Color )>-------
//---------------------------------------------------------------------------------
                if(typeof col_heading_array[mg].Cell_Color !== "undefined")
                    {
                      hd_cell_color_array.push(col_heading_array[mg].Cell_Color);
                    }

                if(typeof col_heading_array[mg].Cell_Color === "undefined")
                    {
                      hd_cell_color_array.push("none");
                    }
//---------------------------------------------------------------------------------
//-------<( Cell Color )>-------
//---------------------------------------------------------------------------------   

//---------------------------------------------------------------------------------
//-------<( Border )>-------
//---------------------------------------------------------------------------------
                if(typeof col_heading_array[mg].Border !== "undefined")
                    {

                      hd_border_array.push(col_heading_array[mg].Border);
                    }  

                if(typeof col_heading_array[mg].Border === "undefined")
                    {

                      hd_border_array.push("none");
                    }                      
//---------------------------------------------------------------------------------
//-------<( Border )>-------
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
//-------<( Text / Font )>-------
//---------------------------------------------------------------------------------
                if(typeof col_heading_array[mg].Txt_Font_Settings !== "undefined")
                    {
                      hd_txt_font_array.push(col_heading_array[mg].Txt_Font_Settings);

                    }    
                    
                if(typeof col_heading_array[mg].Txt_Font_Settings === "undefined")
                    {
                      hd_txt_font_array.push("none");

                    }      
//---------------------------------------------------------------------------------
//-------<( Text / Font )>-------
//---------------------------------------------------------------------------------
              
               merge_array.push(new_head_array[mg])
               mab = (new_head_array[mg]);

            }
        if(new_head_array[mg] === null)
            {
              
              if(mab > 0)
                {
                  mab = (mab - 1)
                }
             if(mab === 0)
                  {
                    merge_array.push(0);

//---------------------------------------------------------------------------------
//-------<( Heading )>-------
//---------------------------------------------------------------------------------
              if(typeof col_heading_array[mg].Heading !== "undefined")
                  {
                    hd_label_array.push(col_heading_array[mg].Heading);
                  }

              if(typeof col_heading_array[mg].Heading === "undefined")
                  {
                    hd_label_array.push("none");
                  }
      //---------------------------------------------------------------------------------
//-------<( Heading )>-------
//---------------------------------------------------------------------------------  


//---------------------------------------------------------------------------------
//-------<( Cell Color )>-------
//---------------------------------------------------------------------------------
                if(typeof col_heading_array[mg].Cell_Color !== "undefined")
                    {
                      hd_cell_color_array.push(col_heading_array[mg].Cell_Color);

                    } 

                if(typeof col_heading_array[mg].Cell_Color === "undefined")
                    {
                      hd_cell_color_array.push("none");

                    }                    
//---------------------------------------------------------------------------------
//-------<( Cell Color )>-------
//---------------------------------------------------------------------------------

//---------------------------------------------------------------------------------
//-------<( Border )>-------
//---------------------------------------------------------------------------------
                if(typeof col_heading_array[mg].Border !== "undefined")
                    {

                      hd_border_array.push(col_heading_array[mg].Border)
                    } 

                if(typeof col_heading_array[mg].Border === "undefined")
                    {
                      hd_border_array.push("none");

                    } 
   

//---------------------------------------------------------------------------------
//-------<( Border )>-------
//--------------------------------------------------------------------------------- 


//---------------------------------------------------------------------------------
//-------<( Text / Font )>-------
//---------------------------------------------------------------------------------                    
             
                  if(typeof col_heading_array[mg].Txt_Font_Settings !== "undefined")
                      {
                        hd_txt_font_array.push(col_heading_array[mg].Txt_Font_Settings);

                      }    

                  if(typeof col_heading_array[mg].Txt_Font_Settings === "undefined")
                      {
                        hd_txt_font_array.push("none");

                      } 
           
//---------------------------------------------------------------------------------
//-------<( Text / Font )>-------
//---------------------------------------------------------------------------------                    

                  }
            }
    }



    row_data_information_array = c_data_stream[1].Row_Information;

c_div_maker = "";
new_jcc_tbl_id = "table_" + c_ccnum;

c_div_maker = c_div_maker + "<div id='"+ new_jcc_tbl_id +"' class='col-lg-12 col-md-12 col-xs-12' style='margin-top:"+whole_set_array[varSetupNum[0]]+"; background-color:"+whole_set_array[varSetupNum[3]]+"'>"; 


c_div_maker = c_div_maker + "<div class='tbDiv'>"; 
       
if(whole_set_array[varSetupNum[4]].split(',')[0] === "block")
    {
      var whole_table_border = "border-style:"+whole_set_array[varSetupNum[4]].split(',')[1]+"; border-width:"+whole_set_array[varSetupNum[4]].split(',')[2]+"; border-color:"+whole_set_array[varSetupNum[4]].split(',')[3]+";"
    }



c_div_maker = c_div_maker + "<table style='"+whole_table_border+" width:"+whole_set_array[varSetupNum[5]]+";height:"+whole_set_array[varSetupNum[6]]+";'>"; 
c_div_maker = c_div_maker + "<tr style='background-color:gray'>";
var whole_head_font_align = "";
var whole_head_font = "";
for(var hdb = 0; hdb < hd_label_array.length; hdb++)
      {

        hd_border_array_data = hd_border_array[hdb].split(',');
        Border_Lines(0,hd_border_array_data);

        hd_txt_font_data = hd_txt_font_array[hdb].split(',');
        whole_head_font_align = "text-align:"+hd_txt_font_data[0]+";color:"+hd_txt_font_data[1]+";font-weight:"+hd_txt_font_data[2]+";font-style:"+hd_txt_font_data[3]+";"; 
        whole_head_font = hd_txt_font_data[4];

        


        if(hd_txt_font_array[hdb] === "none")
            {

              hd_txt_font_data = hd_row_array[3].split(',');



             whole_head_font_align = "text-align:left ;color:#ffffff ;font-weight:normal;font-style:normal;";



             if(whole_set_array[varSetupNum[1]] !== "")
                  {
                     whole_head_font = whole_set_array[varSetupNum[1]];
                  }
             if(whole_set_array[varSetupNum[1]] === "")
                  {
                     whole_head_font = "jb2";
                  }


            }  

        if(hd_cell_color_array[hdb] === "none")
            {
              hd_cell_color_array[hdb] = hd_row_array[1];
            }
             c_div_maker = c_div_maker + "<th colspan='"+merge_array[hdb]+"' style='"+cell_border+"; padding:10px; "+whole_head_font_align+";height:"+hd_row_array[2]+";background-color:"+hd_cell_color_array[hdb]+";'><"+whole_head_font+">"+hd_label_array[hdb]+"</"+whole_head_font+"></th>";
    
      }


c_div_maker = c_div_maker + "</tr>";


var row_data_info_array = [];
var bdr_code;
var bdr_code_array = [];
rd_border_array = [];
rd_text_array = [];
var rd_text_data;
var rd_font;

for(var rdta = 0; rdta < row_data_information_array.length;rdta++)
      {

        row_data_info_array[rdta] = row_data_information_array[rdta].Row_Data;

        c_div_maker = c_div_maker + "<tr style='background-color:white;'>";

          for(var sps = 0; sps < row_data_info_array[rdta].length; sps++)
              {
                
                  if(typeof row_data_information_array[rdta].Row_Data[sps].Border !== "undefined")
                      {
                        rd_border_array[sps] = row_data_information_array[rdta].Row_Data[sps].Border;
                        bdr_code_array =  rd_border_array[sps].split(',');                         
                        Border_Lines(1,bdr_code_array);
                      }
                  if(typeof row_data_information_array[rdta].Row_Data[sps].Border === "undefined")
                      {
                        cell_data_border = "";
                      }                      
                  if(typeof row_data_information_array[rdta].Row_Data[sps].Cell_Color !== "undefined")
                      {
                              rd_cell_color_array = "background-color:"+row_data_information_array[rdta].Row_Data[sps].Cell_Color+";"
                      }

                  if(typeof row_data_information_array[rdta].Row_Data[sps].Cell_Color === "undefined")
                      {
                              rd_cell_color_array = "";
                      }  
                  
                  if(typeof row_data_information_array[rdta].Row_Data[sps].Txt_Font_Settings !== "undefined")
                      {
                          rd_text_array = row_data_information_array[rdta].Row_Data[sps].Txt_Font_Settings.split(',');
                          rd_text_data = "text-align:"+rd_text_array[0]+";color:"+rd_text_array[1]+";font-weight:"+rd_text_array[2]+";font-style:"+rd_text_array[3]+";"
                          rd_font = rd_text_array[4];
                      }                   
               
                  if(typeof row_data_information_array[rdta].Row_Data[sps].Txt_Font_Settings === "undefined")
                      {
                          rd_text_data = "";
                          rd_font = "jb1";
                      }                


               c_div_maker = c_div_maker + "<td style='padding:10px;"+rd_cell_color_array+""+cell_data_border+";"+rd_text_data+"'><"+rd_font+">"+row_data_information_array[rdta].Row_Data[sps].Data_Info+"</"+rd_font+"></td>";
               cell_data_border = "";
               rd_text_data = "";
               rd_font = "";
              }

              
              
          // console.log("==============================") 

          c_div_maker = c_div_maker + "</tr>";

      }


c_div_maker = c_div_maker + "</table>";


c_div_maker = c_div_maker + "</div>"; // second Div

c_div_maker = c_div_maker + "</div>";

c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test(); 


 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 //-------<( Heading data end )>-------
 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 




//-------<( End JB_Table )>-------
}

function table_head()
    {

    }



var border_whole_array = ["block","top","right","bottom","left","LT","TR","LR","LB","BR","TB","LTR","LBR","TLB","TRB"];

var bdr_style_array = [];

function Border_Lines(clrw,PWTC)

{

if(clrw === 1)
    {

    }


 

   border_sides_array[0] = "border-style: " +PWTC[2]+ "; border-width: " +PWTC[1]+ "; border-color: " +PWTC[3]+ ";"; // block
   border_sides_array[1] = "border-style: " +PWTC[2]+" solid solid solid; border-width: "+PWTC[1]+" 1px 1px 1px; border-color: "+PWTC[3]+" #000000 #000000 #000000;";// top
   border_sides_array[2] = "border-style: solid "+PWTC[2]+" solid solid; border-width: 1px "+PWTC[1]+" 1px 1px; border-color: #000000 "+PWTC[3]+" #000000 #000000;"; // right
   border_sides_array[3] = "border-style: solid solid "+PWTC[2]+" solid; border-width: 1px 1px "+PWTC[1]+" 1px; border-color: #000000 #000000 "+PWTC[3]+" #000000;"; // bottom
   border_sides_array[4] = "border-style: solid solid solid "+PWTC[2]+"; border-width: 1px 1px 1px "+PWTC[1]+"; border-color: #000000 #000000 #000000 "+PWTC[3]+";"; // left
   border_sides_array[5] = "border-style: "+PWTC[2]+" solid solid "+PWTC[2]+"; border-width: "+PWTC[1]+" 1px 1px "+PWTC[1]+"; border-color: "+PWTC[3]+" #000000 #000000 "+PWTC[3]+";"; // LT
   border_sides_array[6] = "border-style: "+PWTC[2]+" "+PWTC[2]+" solid solid; border-width: "+PWTC[1]+ " "+PWTC[1]+" 1px 1px; border-color: "+PWTC[3]+" "+PWTC[3]+" #000000 #000000;"; // TR
   border_sides_array[7] = "border-style: solid "+PWTC[2]+" solid "+PWTC[2]+"; border-width: 1px "+PWTC[1]+" 1px "+PWTC[1]+"; border-color: #000000 "+PWTC[3]+" #000000 "+PWTC[3]+";"; // LR
   border_sides_array[8] = "border-style: solid solid "+PWTC[2]+" "+PWTC[2]+"; border-width: 1px 1px "+PWTC[1]+" "+PWTC[1]+"; border-color: #000000 #000000 "+PWTC[3]+" "+PWTC[3]+";"; // LB
   border_sides_array[9] = "border-style: solid "+PWTC[2]+" "+PWTC[2]+" solid; border-width: 1px "+PWTC[1]+" "+PWTC[1]+" 1px; border-color: #000000 "+PWTC[3]+" "+PWTC[3]+" #000000;"; // BR
   border_sides_array[10] = "border-style: "+PWTC[2]+" solid "+PWTC[2]+" solid; border-width: "+PWTC[1]+" 1px "+PWTC[1]+" 1px; border-color: "+PWTC[3]+" #000000 "+PWTC[3]+" #000000;"; // TB
   border_sides_array[11] = "border-style: "+PWTC[2]+" "+PWTC[2]+" solid "+PWTC[2]+"; border-width: "+PWTC[1]+" "+PWTC[1]+" 1px "+PWTC[1]+"; border-color: "+PWTC[3]+" "+PWTC[3]+" #000000 "+PWTC[3]+";"; // LTR
   border_sides_array[12] = "border-style: solid "+PWTC[2]+" "+PWTC[2]+" "+PWTC[2]+"; border-width: 1px "+PWTC[1]+" "+PWTC[1]+" "+PWTC[1]+"; border-color: #000000 "+PWTC[3]+" "+PWTC[3]+" "+PWTC[3]+";"; // LBR
   border_sides_array[13] = "border-style: "+PWTC[2]+" solid "+PWTC[2]+" "+PWTC[2]+"; border-width: "+PWTC[1]+" 1px "+PWTC[1]+" "+PWTC[1]+"; border-color: "+PWTC[3]+" #000000 "+PWTC[3]+" "+PWTC[3]+";"; // TLB
   border_sides_array[14] = "border-style: "+PWTC[2]+" "+PWTC[2]+" "+PWTC[2]+" solid; border-width: "+PWTC[1]+" "+PWTC[1]+" "+PWTC[1]+" 1px; border-color:"+PWTC[3]+" "+PWTC[3]+" "+PWTC[3]+" #000000;"; // TRB
   border_sides_array[15] = "border-style:none;"; // block
cell_border_both = "";
  
  switch(PWTC[0])  
      {
        case "block":
          cell_border_both = border_sides_array[0];
        //  console.log(border_sides_array[0]);
        break;
        case "top":
          cell_border_both = border_sides_array[1]; 
        //  console.log(border_sides_array[1]);  
        break; 
        case "right":
          cell_border_both = border_sides_array[2];  
        //  console.log("right 2: " + border_sides_array[2]); 
        break;  
        case "bottom":
          cell_border_both = border_sides_array[3]; 
       //  console.log(border_sides_array[3]);  
        break;                     
        case "left":
          cell_border_both = border_sides_array[4]; 
       //   console.log(border_sides_array[4]); 
        break;
        case "LT":
          cell_border_both = border_sides_array[5];
        //  console.log(border_sides_array[5]);  
        break;
        case "TR":
          cell_border_both = border_sides_array[6];
       //   console.log(border_sides_array[6]);   
        break;
        case "LR":
          cell_border_both = border_sides_array[7];
        //  console.log(border_sides_array[7]);   
        break;
        case "LB":
          cell_border_both = border_sides_array[8]; 
        //  console.log(border_sides_array[8]);  
        break;      
        case "BR":
          cell_border_both = border_sides_array[9]; 
       //   console.log(border_sides_array[9]);  
        break;      
        case "TB":
          cell_border_both = border_sides_array[10]; 
        //  console.log(border_sides_array[10]);  
        break;  
        case "LTR":
          cell_border_both = border_sides_array[11];
        //  console.log(border_sides_array[11]);  
        break;  
        case "LBR":
          cell_border_both = border_sides_array[12]; 
       //   console.log(border_sides_array[12]);  
        break;  
        case "TLB":
          cell_border_both = border_sides_array[13]; 
       //   console.log(border_sides_array[13]);  
        break;        
        case "TRB":
          cell_border_both = border_sides_array[14];  
       //   console.log(border_sides_array[14]); 
        break; 
        case "none":
          cell_border_both = border_sides_array[15]; 
         // console.log(border_sides_array[15]); 
        break;


      }
      if(clrw === 0)
      {
        cell_border = "";
        cell_border = cell_border_both;
      }

      if(clrw === 1)
      {
        cell_data_border = "";
        cell_data_border = cell_border_both;
      } 

}


