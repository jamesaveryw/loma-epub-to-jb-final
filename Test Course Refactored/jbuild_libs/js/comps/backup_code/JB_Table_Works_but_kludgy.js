var tbl_row_keys;
var col_heading_array = [];
var col_row_array = [];
var row_data_information_array = [];
var row_data_text_array = [];
var single_cell_border_array = [[],[]];
var border_data;

var border_sides_array = [];
var cell_border;
var cell_data_border;
var cell_border_both;
var row_border;

var head_trim_array = [];
var border_data_set_trim = [];
var heading_back_color_array = [];

//=======
// New vars
var hdm_array = [];
var test_array = [];
var border_data_set = [];
var border_data_set_trim = [];
var head_border_array = [];
var head_cell_color_array = [];
var heading_font_array = [];
var head_font_settings_array = [];
var row_border_array = [];
var cell_color_array = [];
//=======

var heading_label_array = [];

function data_typeof()
{

}


function tbl_bdrs(arn)
{
    
      border_data_set[arn] = col_heading_array[arn].Border;

}



function JB_Table(c_data_stream,c_ccnum,acfl)
{


  tbl_row_keys = Object.keys(c_data_stream[0]);
  col_heading_array = c_data_stream[0].Col_Heading;
  col_row_array = c_data_stream[0];
  row_data_information_array = c_data_stream[1].Row_Information;

  
 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 //-------<( Heading data start )>-------
 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 

  for(var hdm = 0; hdm < col_heading_array.length; hdm++)
      {

       // console.log("Font Info: " + col_heading_array[hdm].Txt_Font_Settings)

         if(typeof col_heading_array[hdm].merge === "undefined")
            {
              hdm_array[hdm] = 0;
              heading_label_array[hdm] = col_heading_array[hdm].Heading;
              heading_back_color_array[hdm] = col_heading_array[hdm].Cell_Color;
              heading_font_array[hdm] = col_heading_array[hdm].Txt_Font_Settings;

                

                console.log("heading_back_color_array[hdm]: " + heading_back_color_array[hdm]);

              tbl_bdrs(hdm);



            }
        
        if(typeof col_heading_array[hdm].merge !== "undefined")
            {
              hdm_array[hdm] = col_heading_array[hdm].merge;
              heading_label_array[hdm] = col_heading_array[hdm].Heading;
              heading_back_color_array[hdm] = col_heading_array[hdm].Cell_Color;
              heading_font_array[hdm] = col_heading_array[hdm].Txt_Font_Settings;

                

              tbl_bdrs(hdm);
            } 

    
       
      }

      for(var jcc = 0; jcc < hdm_array.length; jcc++)
        {
            if(hdm_array[jcc] !== 0)
                {
                  var dct = (jcc + 1)
                    for(var td = 1; td < hdm_array[jcc]; td++)
                      {
                       
                        hdm_array[dct] = null;
                        heading_label_array[dct] = null;
                        dct = (dct + 1)
                      }

                }
     
        } //Cell_Color
        for(var hla=0; hla < heading_label_array.length; hla++)  // Use this to create the border array?
            {
              
              if(heading_label_array[hla] !== null)
                  {


                  if(typeof border_data_set[hla] === "undefined")
                      {
                         border_data_set_trim.push("no_border");

                        
                        
                         head_cell_color_array.push(heading_back_color_array[hla]);



                      }
                  if(typeof border_data_set[hla] !== "undefined")
                      {
                         border_data_set_trim.push(border_data_set[hla])
                         head_cell_color_array.push(heading_back_color_array[hla]);
                         head_font_settings_array.push(heading_font_array[hla]);
                      }
                   

                    

                    head_trim_array.push(heading_label_array[hla])
                    
                  }
                
            }

          // console.log("head_font_settings_array.length: " + head_font_settings_array);


           

        var newMerge = hdm_array.join(",");

        var mec = (newMerge.replace(/,/g, ''))

        var sec = [];
          for(var mct = 0; mct < mec.length; mct++)
              {
                sec[mct] = mec[mct];
                
                
              }
    
  c_div_maker = "";
  new_jcc_tbl_id = "table_" + c_ccnum;

c_div_maker = c_div_maker + "<div id='"+ new_jcc_tbl_id +"' class='col-lg-12 col-md-12 col-xs-12' style='margin-top:20px'>";
  c_div_maker = c_div_maker + "<table style='width:80%;padding:10px;'>";
//console.log("==================================================");
      c_div_maker = c_div_maker + "<tr>";
          for(var thm = 0; thm < sec.length; thm++)
            {




                if(sec[thm] >= 0)
                  {
                      if(typeof single_cell_border_array[thm] !== "undefined")
                          {

                          }
                    
                          if(border_data_set_trim[thm] !== "no_border")
                            {

                              head_border_array[thm] = border_data_set_trim[thm].split(',')

                             Border_Lines(0,head_border_array[thm][0],head_border_array[thm][1],head_border_array[thm][2],head_border_array[thm][3]);

                            }
                          if(border_data_set_trim[thm] === "no_border") 
                                {
                                    Border_Lines(0,"block","1px","solid","black");
                                }                    


c_div_maker = c_div_maker + "<th colspan='"+sec[thm]+"' style='"+cell_border+" background-color:"+head_cell_color_array[thm]+"; height:50px;'><jb7><p style='padding:10px; color:#ffffff;'>"+head_trim_array[thm]+"</p></jb7></th>";



                  }
   
                  
            }
           // console.log("==================================================");
      c_div_maker = c_div_maker + "</tr>";

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Heading data end )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 


 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
 //-------<( Row data start )>-------
 //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
      
    //  console.log("==================================================");  
      for(var tbl_rd = 0; tbl_rd < row_data_information_array.length;tbl_rd++)
      {

          row_data_text_array = row_data_information_array[tbl_rd].Row_Data;

          c_div_maker = c_div_maker + "<tr>";
            for(var rddi = 0; rddi < row_data_text_array.length; rddi++)
                {

                        if(typeof row_data_text_array[rddi].Border !== "undefined")   // Border
                              {

                                   row_border_array[rddi] = row_data_text_array[rddi].Border.split(',')

                                 Border_Lines(1,row_border_array[rddi][0],row_border_array[rddi][1],row_border_array[rddi][2],row_border_array[rddi][3]);

                              }

                        if(typeof row_data_text_array[rddi].Border === "undefined")   // Border
                              {
                                   Border_Lines(1,"block","1px","solid","black");
                              }

                        if(typeof row_data_text_array[rddi].Cell_Color !== "undefined")
                              {

                                cell_color_array[rddi] = row_data_text_array[rddi].Cell_Color;
                              } 
                        if(typeof row_data_text_array[rddi].Cell_Color === "undefined")
                              {
                                cell_color_array[rddi] = "#ffffff";
                              }                              
                              


                              c_div_maker = c_div_maker + "<td style='background-color:"+cell_color_array[rddi]+"; "+cell_data_border+" height:40px;padding:10px;'>"+row_data_text_array[rddi].Data_Info+"</td>";


                }
          c_div_maker = c_div_maker + "</tr>";

      }
     // console.log("==================================================");

  c_div_maker = c_div_maker + "</table>";
c_div_maker = c_div_maker + "</div>";

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<( Row data end )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 




c_comp_Array[c_ccnum] = c_div_maker;
comp_Array_test(); 

}


var border_whole_array = ["block","top","right","bottom","left","LT","TR","LR","LB","BR","TB","LTR","LBR","TLB","TRB"];

var bdr_style_array = [];


function Border_Lines(clrw,lPos,lWdth,lType,lColor)
{

   border_sides_array[0] = "border-style: " +lType+ "; border-width: " +lWdth+ "; border-color: " +lColor+ ";"; // block
   border_sides_array[1] = "border-style: " +lType+" solid solid solid; border-width: "+lWdth+" 1px 1px 1px; border-color: "+lColor+" #000000 #000000 #000000;";// top
   border_sides_array[2] = "border-style: solid "+lType+" solid solid; border-width: 1px "+lWdth+" 1px 1px; border-color: #000000 "+lColor+" #000000 #000000;"; // right
   border_sides_array[3] = "border-style: solid solid "+lType+" solid; border-width: 1px 1px "+lWdth+" 1px; border-color: #000000 #000000 "+lColor+" #000000;"; // bottom
   border_sides_array[4] = "border-style: solid solid solid "+lType+"; border-width: 1px 1px 1px "+lWdth+"; border-color: #000000 #000000 #000000 "+lColor+";"; // left
   border_sides_array[5] = "border-style: "+lType+" solid solid "+lType+"; border-width: "+lWdth+" 1px 1px "+lWdth+"; border-color: "+lColor+" #000000 #000000 "+lColor+";"; // LT
   border_sides_array[6] = "border-style: "+lType+" "+lType+" solid solid; border-width: "+lWdth+ " "+lWdth+" 1px 1px; border-color: "+lColor+" "+lColor+" #000000 #000000;"; // TR
   border_sides_array[7] = "border-style: solid "+lType+" solid "+lType+"; border-width: 1px "+lWdth+" 1px "+lWdth+"; border-color: #000000 "+lColor+" #000000 "+lColor+";"; // LR
   border_sides_array[8] = "border-style: solid solid "+lType+" "+lType+"; border-width: 1px 1px "+lWdth+" "+lWdth+"; border-color: #000000 #000000 "+lColor+" "+lColor+";"; // LB
   border_sides_array[9] = "border-style: solid "+lType+" "+lType+" solid; border-width: 1px "+lWdth+" "+lWdth+" 1px; border-color: #000000 "+lColor+" "+lColor+" #000000;"; // BR
   border_sides_array[10] = "border-style: "+lType+" solid "+lType+" solid; border-width: "+lWdth+" 1px "+lWdth+" 1px; border-color: "+lColor+" #000000 "+lColor+" #000000;"; // TB
   border_sides_array[11] = "border-style: "+lType+" "+lType+" solid "+lType+"; border-width: "+lWdth+" "+lWdth+" 1px "+lWdth+"; border-color: "+lColor+" "+lColor+" #000000 "+lColor+";"; // LTR
   border_sides_array[12] = "border-style: solid "+lType+" "+lType+" "+lType+"; border-width: 1px "+lWdth+" "+lWdth+" "+lWdth+"; border-color: #000000 "+lColor+" "+lColor+" "+lColor+";"; // LBR
   border_sides_array[13] = "border-style: "+lType+" solid "+lType+" "+lType+"; border-width: "+lWdth+" 1px "+lWdth+" "+lWdth+"; border-color: "+lColor+" #000000 "+lColor+" "+lColor+";"; // TLB
   border_sides_array[14] = "border-style: "+lType+" "+lType+" "+lType+" solid; border-width: "+lWdth+" "+lWdth+" "+lWdth+" 1px; border-color:"+lColor+" "+lColor+" "+lColor+" #000000;"; // TRB
  
cell_border_both = "";
  
  switch(lPos)  
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

      }
      if(clrw === 0)
      {
        cell_border = "";
        cell_border = cell_border_both;
      }

      if(clrw === 1)
      {
      //  console.log(lPos);
       cell_data_border = "";
       cell_data_border = cell_border_both;
      } 
}
//============================
// top right bottom left
//============================

