//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// -------<(  Component Begin 03/02/2020 )>-------
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

var iwtl_id;
var iwtl_data = [];
var iwtl = [];

var iwtl_json_data = [[],[]];
var img_alt_tag = [];
var Paragraph_Top;
var Paragraph_Bot;
var Paragraph_List;
var IWT_Image_Width;

function Image_with_text_list(iwtl_data_stream,c_ccnum,acfl)
{
    iwtl_data = iwtl_data_stream;
    iwtl = iwtl_data[0];



        for(var i = 0; i < Object.keys(iwtl).length; i++)
            {
               // console.log(Object.values(iwtl)[i])
                iwtl_json_data[i] = Object.values(iwtl)[i]
            }

            console.log(iwtl_json_data);

       // if(document.body.clientWidth <= 414){IWT_Image_Width = "100%"}
       // if(document.body.clientWidth > 414){IWT_Image_Width = iwtl_json_data[0][0].image_size} 

        }