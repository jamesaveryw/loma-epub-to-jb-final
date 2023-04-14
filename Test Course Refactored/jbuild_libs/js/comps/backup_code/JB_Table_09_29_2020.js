
var tbl_row_keys;
var tbl_row_keys_array = [];

var col_heading_array = [];
var col_row_array = [];

var row_data_information_array = [];
var row_data_text_array = [];
var whole_settings_array = [];


var single_cell_array = [];
var hrow_set_array = [];

var single_cell_border_array = [[],[]];
var border_data;
var border_sides_array = [];
var cell_border;
var cell_data_border;
var cell_border_both;
var tf_settings;
var tf_font;

var data_row_color_array = [];
var row_border;
var l_nums;

function JB_Table(c_data_stream,c_ccnum,acfl)
{
    tbl_row_keys = Object.keys(c_data_stream[0]);
    col_heading_array = c_data_stream[0].Col_Heading;
    col_row_array = c_data_stream[0];
    row_data_information_array = c_data_stream[1].Row_Information;
    whole_settings_array = c_data_stream[2].Whole_Table_Settings; // .Whole_Table_Settings;

    c_div_maker = "";
    new_jcc_tbl_id = "table_" + c_ccnum;


c_div_maker = c_div_maker + "<div id='"+ new_jcc_tbl_id +"' class='col-lg-12 col-md-12 col-xs-12' style='margin-top:20px'>";
    c_div_maker = c_div_maker + "<table style='width:80%;padding:10px;'>";

        c_div_maker = c_div_maker + "<tr>";

        for(var tbl_hd_row = 1; tbl_hd_row < Object.keys(col_row_array).length; tbl_hd_row++)
        {
          
          switch(tbl_hd_row)
            {
                case 3:
                  var TFS_Global_Array = col_row_array[tbl_row_keys[tbl_hd_row]].split(',');
                  
                break;

                default:
                      hrow_set_array[tbl_hd_row] = col_row_array[tbl_row_keys[tbl_hd_row]];
                break;
            }

       
        }



// For the heading
for(var tbl_hd = 0; tbl_hd < col_heading_array.length; tbl_hd++)
        {
            

//==============================================================================
//-------<( Single Cell background color begin )>-------
//==============================================================================
if(typeof col_heading_array[tbl_hd].Cell_Color !== "undefined")
            {
              single_cell_array[tbl_hd] = col_heading_array[tbl_hd].Cell_Color;
            }
if(typeof col_heading_array[tbl_hd].Cell_Color === "undefined")
            {
              single_cell_array[tbl_hd] = hrow_set_array[1];
            }
//==============================================================================
//-------<( Single Cell background color end )>-------
//==============================================================================

if(typeof col_heading_array[tbl_hd].Border !== "undefined")
            {
              //alert("col_heading_array[tbl_hd].Border: " + col_heading_array[tbl_hd].Border);
              single_cell_border_array[tbl_hd] = col_heading_array[tbl_hd].Border.split(',');


// top right bottom left

var scb = single_cell_border_array[tbl_hd][2];
l_nums = single_cell_border_array[tbl_hd][0];


Border_Lines(0,scb,l_nums);

/*
border_sides_array[0] = "block"; // block
border_sides_array[1] = "none none none " + scb; // left
border_sides_array[2] = scb + " none none none"; // top
border_sides_array[3] = "none " + scb + " none none"; // right
border_sides_array[4] = "none none " + scb + " none";  // bottom
border_sides_array[5] = scb + " none none " + scb;  // LT
border_sides_array[6] = scb + " " + scb + " none none"; // TR
border_sides_array[7] = "none " + scb + " none " + scb; // LR
border_sides_array[8] = "none none " + scb + " " + scb; // LB
border_sides_array[9] = "none " + scb + " " + scb + " none"; // BR
border_sides_array[10] = scb + " none " + scb + " none"; // TB
border_sides_array[11] = scb + " " + scb + " none " + scb; // LTR
border_sides_array[12] = "none " + scb + " " + scb + " " + scb; // LBR
border_sides_array[13] = scb + " none " + scb + " " + scb; // TLB
border_sides_array[14] = scb + " " + scb + " " + scb + " none"; // TRB


cell_border = "";

switch(single_cell_border_array[tbl_hd][0])
    {
      case "block":
        cell_border = border_sides_array[0];  
      break;
      case "left":
        cell_border = border_sides_array[1];  
      break;
      case "top":
        cell_border = border_sides_array[2];   
      break;
      case "right":
        cell_border = border_sides_array[3];   
      break;
      case "bottom":
        cell_border = border_sides_array[4];   
      break;
      case "LT":
        cell_border = border_sides_array[5];   
      break;
      case "TR":
        cell_border = border_sides_array[6];   
      break;
      case "LR":
        cell_border = border_sides_array[7];   
      break;
      case "LB":
        cell_border = border_sides_array[8];   
      break;      
      case "BR":
        cell_border = border_sides_array[9];   
      break;      
      case "TB":
        cell_border = border_sides_array[10];   
      break;  
      case "LTR":
        cell_border = border_sides_array[11];   
      break;  
      case "LBR":
        cell_border = border_sides_array[12];   
      break;  
      case "TLB":
        cell_border = border_sides_array[13];   
      break;        
      case "TRB":
        cell_border = border_sides_array[14];   
      break;  
    }
*/


border_data = "border-width: " + single_cell_border_array[tbl_hd][1] + "; border-style: " + cell_border + "; border-color: " + single_cell_border_array[tbl_hd][3] + ";";

            }
if(typeof col_heading_array[tbl_hd].Border === "undefined")
            {
                border_data = "";
            }

if(typeof col_heading_array[tbl_hd].Txt_Font_Settings !== "undefined")
            {
              var TFS_single_Array = col_heading_array[tbl_hd].Txt_Font_Settings.split(',');
              tf_settings = "";

              tf_settings = "text-align: "+TFS_single_Array[0]+"; color: "+TFS_single_Array[1]+";font-weight: "+TFS_single_Array[2]+";font-style:"+TFS_single_Array[3]+";" ;
              tf_font = "";
              tf_font = TFS_single_Array[4];

            }


if(typeof col_heading_array[tbl_hd].Txt_Font_Settings === "undefined")
            {
              tf_settings = "";

              tf_settings = "text-align: "+TFS_Global_Array[0]+"; color: "+TFS_Global_Array[1]+";font-weight: "+TFS_Global_Array[2]+";font-style:"+TFS_Global_Array[3]+";" ; 
              tf_font = "";
              tf_font = TFS_Global_Array[4];
            }

            c_div_maker = c_div_maker + "<th style='background-color:"+single_cell_array[tbl_hd]+"; height:"+hrow_set_array[2]+";"+border_data+"'><"+tf_font+"><p style='"+tf_settings+";padding:10px'>"+col_heading_array[tbl_hd].Heading+"</p></"+tf_font+"></th>";

        }
c_div_maker = c_div_maker + "</tr>";




//alert(row_data_information_array.length); // === 5
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<(  Row Data Begin  )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  for(var tbl_rd = 0; tbl_rd <row_data_information_array.length;tbl_rd++)
        {
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-          
//-------<(  Whole row background color for each row  )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
         if(row_data_information_array[tbl_rd].Row_Data_Color === "")
              {
                data_row_color_array[tbl_rd] = "#ffffff";
              }
        if(row_data_information_array[tbl_rd].Row_Data_Color !== "")
              {
                data_row_color_array[tbl_rd] = row_data_information_array[tbl_rd].Row_Data_Color;
              } 
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-                       
//-------<(  Whole row background color for each row  )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 

          row_data_text_array = row_data_information_array[tbl_rd].Row_Data;
    
          row_border = "";
      c_div_maker = c_div_maker + "<tr>";
          for(var rdta = 0; rdta < row_data_text_array.length; rdta++)
              {

                if(typeof row_data_text_array[rdta].Border !== "undefined")
                  {
                   var rowBorder = row_data_text_array[rdta].Border.split(",");

Border_Lines(1,rowBorder[2],rowBorder[0]);
border_data = "";

border_data = "border-width: " + rowBorder[1] + "; border-style: " + cell_data_border + "; border-color: " + rowBorder[3] + ";";

//alert("border_data: " + border_data);

                   // alert(rowBorder[0]);
                   // alert(rowBorder[2]);
                    //alert(border_sides_array);

                  }
                if(typeof row_data_text_array[rdta].Border === "undefined")
                  {
                   //alert(row_data_text_array[rdta].Border);
                   border_data = "";
                   row_border = "";
                  }
                
//alert("border_data: " + border_data);

c_div_maker = c_div_maker + "<td style='background-color:"+data_row_color_array[tbl_rd]+";padding:10px;"+border_data+"'>"+row_data_text_array[rdta].Data_Info+"</td>";


//c_div_maker = c_div_maker + "<td style='background-color:"+data_row_color_array[tbl_rd]+";padding:10px';"+border_data+"; border-style: "+cell_data_border+"'>"+row_data_text_array[rdta].Data_Info+"</td>";
                
                // alert(row_data_text_array[rdta].Data_Info); // Works, gets the row text
              } 
               // alert( row_data_information_array[tbl_rd].Row_Data_Color ); // Works
               // alert( row_data_information_array[tbl_rd].Row_Data_Height ); // Works
               // alert( row_data_information_array[tbl_rd].Row_Data_Font_Whole ); // Works                 
      c_div_maker = c_div_maker + "</tr>";  
        }
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//-------<(  Row Data End  )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    c_div_maker = c_div_maker + "</table>";
    c_div_maker = c_div_maker + "</div>";

    c_comp_Array[c_ccnum] = c_div_maker;
    comp_Array_test(); 

}



function Border_Lines(clrw,blines,dsgn)
{




  border_sides_array[0] = "block"; // block
  border_sides_array[1] = "none none none " + blines; // left
  border_sides_array[2] = blines + " none none none"; // top
  border_sides_array[3] = "none " + blines + " none none"; // right
  border_sides_array[4] = "none none " + blines + " none";  // bottom
  border_sides_array[5] = blines + " none none " + blines;  // LT
  border_sides_array[6] = blines + " " + blines + " none none"; // TR
  border_sides_array[7] = "none " + blines + " none " + blines; // LR
  border_sides_array[8] = "none none " + blines + " " + blines; // LB
  border_sides_array[9] = "none " + blines + " " + blines + " none"; // BR
  border_sides_array[10] = blines + " none " + blines + " none"; // TB
  border_sides_array[11] = blines + " " + blines + " none " + blines; // LTR
  border_sides_array[12] = "none " + blines + " " + blines + " " + blines; // LBR
  border_sides_array[13] = blines + " none " + blines + " " + blines; // TLB
  border_sides_array[14] = blines + " " + blines + " " + blines + " none"; // TRB
  
  cell_border_both = "";
  
  switch(dsgn)  
//  switch(single_cell_border_array[tbl_hd][0])
      {
        case "block":
          cell_border_both = border_sides_array[0];  
        break;
        case "left":
          cell_border_both = border_sides_array[1];  
        break;
        case "top":
          cell_border_both = border_sides_array[2];   
        break;
        case "right":
          cell_border_both = border_sides_array[3];   
        break;
        case "bottom":
          cell_border_both = border_sides_array[4];   
        break;
        case "LT":
          cell_border_both = border_sides_array[5];   
        break;
        case "TR":
          cell_border_both = border_sides_array[6];   
        break;
        case "LR":
          cell_border_both = border_sides_array[7];   
        break;
        case "LB":
          cell_border_both = border_sides_array[8];   
        break;      
        case "BR":
          cell_border_both = border_sides_array[9];   
        break;      
        case "TB":
          cell_border_both = border_sides_array[10];   
        break;  
        case "LTR":
          cell_border_both = border_sides_array[11];   
        break;  
        case "LBR":
          cell_border_both = border_sides_array[12];   
        break;  
        case "TLB":
          cell_border_both = border_sides_array[13];   
        break;        
        case "TRB":
          cell_border_both = border_sides_array[14];   
        break;  

      }
      if(clrw === 0)
      {
        cell_border = "";
        cell_border = cell_border_both;
       // alert(cell_border)
      }

      if(clrw === 1)
      {
        cell_data_border = "";
        cell_data_border = cell_border_both;
        //alert(cell_data_border)
      }      


}





	