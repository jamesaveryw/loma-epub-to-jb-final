//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
var IMG_pos;
var IMG_Div_Secttions;
var IWT_Image_Array = [];
var IWT_Img_Pos_Array = [];
var IWT_Image_View_Array = [[],[]];
var IWT_Alt_Tag;
var IWT_Alt_Tag_Mdl = [];
var IWT_Image_Width;
var IWT_Text_Array = [];
var IWT_Image_Maker;
var IWT_List_Maker;
var IWT_List_Array_Maker = [];
var IWT_txt_lst_array = [[],[]];
var IWT_Image_Scale = [];
var IWT_Image_Radius = [];
var IWT_Text_Settings = [];
var IWT_Font = [];
var c_ccnum;
function image_w_text(c_data_stream,c_ccnum,acfl)
{
  IWT_Image_Array = Object.values(c_data_stream[0]);
  IWT_Img_Pos_Array = Object.values(c_data_stream[1]);
  IWT_Image_Scale = Object.values(c_data_stream[2]);
  IWT_Text_Array = Object.values(c_data_stream[3]);

  IWT_Text_Settings = Object.values(c_data_stream[4]);
  IWT_Font = Object.values(c_data_stream[5]);
  IWT_Image_Radius = Object.values(c_data_stream[8]);
  IWT_Alt_Tag = IWT_Image_Array[1];
  IWT_Image_View_Array[c_ccnum] = IWT_Image_Array[0];

  c_div_maker = ""; 

//-------< This gets the top and bottom paragraph text and the list >
IWT_List_Array_Maker[0] = "<div style='margin-top:10px; text-align:left;'><"+IWT_Font[1]+"><p style='color:"+IWT_Text_Settings[0]+";font-weight:"+IWT_Text_Settings[3]+";font-variant:"+IWT_Text_Settings[2]+";font-style:"+IWT_Text_Settings[1]+"'>"+IWT_Text_Array[0]+"</p></"+IWT_Font[1]+"></div>";

if(IWT_Text_Array[1].length > 0)
{ 
    IWT_List_Maker = "<div><"+IWT_Text_Array[4]+" type='"+IWT_Text_Array[5]+"'>";
        for(var IWT_LST = 0; IWT_LST < IWT_Text_Array[1].length; IWT_LST++)
            {
                IWT_List_Maker = IWT_List_Maker + "<"+IWT_Font[1]+"><li style='text-align:left;color:"+IWT_Text_Settings[0]+";font-weight:"+IWT_Text_Settings[3]+";font-variant:"+IWT_Text_Settings[2]+";font-style:"+IWT_Text_Settings[1]+"'>"+IWT_Text_Array[1][IWT_LST].img_lstText+"</li></"+IWT_Font[1]+">";
            }
    IWT_List_Maker = IWT_List_Maker + "</"+IWT_Text_Array[4]+"></div>";
}
IWT_List_Array_Maker[1] = IWT_List_Maker;
IWT_List_Maker = "";

IWT_List_Array_Maker[2] = "<div style='text-align:left'><"+IWT_Font[1]+"><p style='color:"+IWT_Text_Settings[0]+";font-weight:"+IWT_Text_Settings[3]+";font-variant:"+IWT_Text_Settings[2]+";font-style:"+IWT_Text_Settings[1]+"'>"+IWT_Text_Array[11]+"</p></"+IWT_Font[1]+"></div>";



//----------------------------------------------------------------<>
//-------<=-=-=-=-=-=-= This gets the image info =-=-=-=-=-=-=-=-=-=>

if(IWT_Image_Array[1].length > 125)
{
    IWT_Alt_Tag = "Select Image Description Button for more information";
    IWT_Alt_Tag_Mdl[c_ccnum] = IWT_Image_Array[1];

  //  console.log("tester: " + IWT_Image_Array[1]);
}
if(IWT_Image_Array[1].length <= 125)
{
    IWT_Alt_Tag = IWT_Image_Array[1];
}    

if(document.body.clientWidth <= 414){IWT_Image_Width = "100%"}
if(document.body.clientWidth > 414){IWT_Image_Width = IWT_Image_Scale[0]}        

IWT_Image_Maker = "<div style='margin-top:10px; text-align:"+IWT_Img_Pos_Array[1]+"'>";    //text-align:"+IWT_Img_Pos_Array[1]+"     
    IWT_Image_Maker = IWT_Image_Maker + "<div style=''>"; //style='text-align:center'
       IWT_Image_Maker = IWT_Image_Maker + "<img id='IWT_Img_"+c_ccnum+"' style='padding:"+IWT_Text_Settings[5]+"; border:"+IWT_Image_Array[3]+" "+IWT_Image_Array[2]+" "+IWT_Image_Array[4]+"; border-radius:"+IWT_Image_Radius[0]+"; width:"+IWT_Image_Width+"' src='images/"+IWT_Image_Array[0]+"' alt='"+IWT_Alt_Tag+"' onclick='show_L_image("+c_ccnum+")'>"

            if(IWT_Image_Array[1].length > 125)
                {
                                 IWT_Image_Maker = IWT_Image_Maker + "<div style='margin-top:10px;margin-left:"+IWT_Image_Width+"%; margin-right:"+IWT_Image_Width+"%'><button id='iwt_btn' class='btn btn-primary btn-sm' onclick='alt_tag_image("+c_ccnum+",0,2)'>Image Description</button></div>";
                }
    IWT_Image_Maker = IWT_Image_Maker + "</div>";
IWT_Image_Maker = IWT_Image_Maker + "</div>";

IWT_List_Array_Maker[3] = IWT_Image_Maker;


//IWT_Image_Maker = "IWT_List_Array_Maker[3]: "  + IWT_List_Array_Maker[3];

//-------<>
    if(typeof acfl !== "undefined")
    {
            c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top: 20px;height:auto; background-color:"+c_data_stream[7].background_color+";padding:10px'>"; // 1  IWT_Text_Settings[0]
                c_div_maker = c_div_maker + "<div style='max-width:1400px;'>";
                            IMP_Placement(c_ccnum);
                c_div_maker = c_div_maker + "</div>";
            c_div_maker = c_div_maker + "</div>"; // 1   
    }

    if(typeof acfl === "undefined")
    {
        c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12' style='margin-top: 20px;height:auto; background-color:"+c_data_stream[7].background_color+";padding:10px'>"; // 1  IWT_Text_Settings[0]
                c_div_maker = c_div_maker + "<div style='max-width:1400px;'>";
                            IMP_Placement(c_ccnum);
                c_div_maker = c_div_maker + "</div>";
        c_div_maker = c_div_maker + "</div>"; // 1

        c_comp_Array[c_ccnum] = c_div_maker;
        comp_Array_test()  
        c_div_maker = ""; 
    }
 
}

function IMP_Placement(impcn)
{
    if(IWT_Img_Pos_Array[0] === "right" || IWT_Img_Pos_Array[0] === "left")
    {
        for(var rl=0; rl<2; rl++)
            { 
                c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12'>";
                    if(IWT_Img_Pos_Array[0] === "left")
                        {
                            if(rl=== 0){c_div_maker = c_div_maker + IWT_List_Array_Maker[3]};
                            if(rl=== 1){LRP_Check(impcn)};
                        }

                    if(IWT_Img_Pos_Array[0] === "right")
                        {
                            if(rl=== 0){LRP_Check(impcn)};
                            if(rl=== 1){c_div_maker = c_div_maker + IWT_List_Array_Maker[3]};
                        }                        
                c_div_maker = c_div_maker + "</div>";
            }
    }

    if(IWT_Img_Pos_Array[0] === "top" || IWT_Img_Pos_Array[0] === "bottom")
            {
                c_div_maker = c_div_maker + "<div class='col-lg-12 col-md-12 col-xs-12'>";
                    if(IWT_Img_Pos_Array[0] === "top")
                        {
                            c_div_maker = c_div_maker + IWT_List_Array_Maker[3];
                            LRP_Check(impcn)
                        }

                    if(IWT_Img_Pos_Array[0] === "bottom")
                        {
                            LRP_Check(impcn)
                            c_div_maker = c_div_maker + IWT_List_Array_Maker[3];
                        }                        

                c_div_maker = c_div_maker + "</div>";                
            }

}


function LRP_Check(lrp_num)
{

c_div_maker = c_div_maker + "<div style='border:"+IWT_Text_Array[9]+" "+IWT_Text_Array[8]+" "+IWT_Text_Array[10]+";padding:10px'>";

if(IWT_Text_Array[2] === "top")
    {
        c_div_maker = c_div_maker + IWT_List_Array_Maker[1]
        c_div_maker = c_div_maker + IWT_List_Array_Maker[0]
        c_div_maker = c_div_maker + IWT_List_Array_Maker[0]
    }

if(IWT_Text_Array[2] === "bottom")
    {
        c_div_maker = c_div_maker + IWT_List_Array_Maker[0]
        c_div_maker = c_div_maker + IWT_List_Array_Maker[1]
        c_div_maker = c_div_maker + IWT_List_Array_Maker[2]
    }

c_div_maker = c_div_maker + "</div>"; 
}


function show_L_image(cmp_nmbr)
        {
           var lstImg = "images/" + IWT_Image_View_Array[cmp_nmbr];
           open_image_modal(lstImg)
        }

/*
// -------<(  Ideas to work on )>-------


  /*          
            for(var dp=0; dp<2;dp++)
                {
                    c_div_maker = c_div_maker + "<div class='col-lg-6 col-md-6 col-xs-12' style='text-align:"+comp_data[1][1]+";'>";
                        if(comp_data[1][0] === "left")
                            {
                                console.log("left")
                                if(dp === 0){c_div_maker = c_div_maker + "<img style='width:"+comp_data[2][0]+"' src='images/"+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"'>"};
                                if(dp === 1){text_placement()};
                          
                              
                            }

                        if(comp_data[1][0] === "right")
                            {
                                console.log("right")
                                if(dp === 0){text_placement()};
                                if(dp === 1){c_div_maker = c_div_maker + "<img style='width:"+comp_data[2][0]+"' src='images/"+comp_data[0][0]+"' alt='"+img_alt_tag[curcmp]+"'>"};
                               // alt_text_button(curcmp);
                            } 
                    c_div_maker = c_div_maker + "</div>";       
                }
    */
*/