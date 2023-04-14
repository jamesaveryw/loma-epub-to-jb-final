const countries = [
	{
		name: "United States",
		countrycode: "us"
	}, {
		name: "Canada",
		countrycode: "ca"
	}, {
		name: "China (中国)",
		countrycode: "cn"
	},
	//Most common listed above...
    {
		name: "Afghanistan (‫افغانستان‬‎)",
		countrycode: "af"
	}, {
		name: "Åland Islands (Åland)",
		countrycode: "ax"
	}, {
		name: "Albania (Shqipëri)",
		countrycode: "al"
	}, {
		name: "Algeria (‫الجزائر‬‎)",
		countrycode: "dz"
	}, {
		name: "American Samoa",
		countrycode: "as"
	}, {
		name: "Andorra",
		countrycode: "ad"
	}, {
		name: "Angola",
		countrycode: "ao"
	}, {
		name: "Anguilla",
		countrycode: "ai"
	}, {
		name: "Antarctica",
		countrycode: "aq"
	}, {
		name: "Antigua and Barbuda",
		countrycode: "ag"
	}, {
		name: "Argentina",
		countrycode: "ar"
	}, {
		name: "Armenia (Հայաստան)",
		countrycode: "am"
	}, {
		name: "Aruba",
		countrycode: "aw"
	}, {
		name: "Australia",
		countrycode: "au"
	}, {
		name: "Austria (Österreich)",
		countrycode: "at"
	}, {
		name: "Azerbaijan (Azərbaycan)",
		countrycode: "az"
	}, {
		name: "Bahamas",
		countrycode: "bs"
	}, {
		name: "Bahrain (‫البحرين‬‎)",
		countrycode: "bh"
	}, {
		name: "Bangladesh (বাংলাদেশ)",
		countrycode: "bd"
	}, {
		name: "Barbados",
		countrycode: "bb"
	}, {
		name: "Belarus (Беларусь)",
		countrycode: "by"
	}, {
		name: "Belgium (België)",
		countrycode: "be"
	}, {
		name: "Belize",
		countrycode: "bz"
	}, {
		name: "Benin (Bénin)",
		countrycode: "bj"
	}, {
		name: "Bermuda",
		countrycode: "bm"
	}, {
		name: "Bhutan (འབྲུག)",
		countrycode: "bt"
	}, {
		name: "Bolivia",
		countrycode: "bo"
	}, {
		name: "Bosnia and Herzegovina (Босна и Херцеговина)",
		countrycode: "ba"
	}, {
		name: "Botswana",
		countrycode: "bw"
	}, {
		name: "Bouvet Island (Bouvetøya)",
		countrycode: "bv"
	}, {
		name: "Brazil (Brasil)",
		countrycode: "br"
	}, {
		name: "British Indian Ocean Territory",
		countrycode: "io"
	}, {
		name: "British Virgin Islands",
		countrycode: "vg"
	}, {
		name: "Brunei",
		countrycode: "bn"
	}, {
		name: "Bulgaria (България)",
		countrycode: "bg"
	}, {
		name: "Burkina Faso",
		countrycode: "bf"
	}, {
		name: "Burundi (Uburundi)",
		countrycode: "bi"
	}, {
		name: "Cambodia (កម្ពុជា)",
		countrycode: "kh"
	}, {
		name: "Cameroon (Cameroun)",
		countrycode: "cm"
	}, {
		name: "Canada",
		countrycode: "ca"
	}, {
		name: "Cape Verde (Kabu Verdi)",
		countrycode: "cv"
	}, {
		name: "Caribbean Netherlands",
		countrycode: "bq"
	}, {
		name: "Cayman Islands",
		countrycode: "ky"
	}, {
		name: "Central African Republic (République Centrafricaine)",
		countrycode: "cf"
	}, {
		name: "Chad (Tchad)",
		countrycode: "td"
	}, {
		name: "Chile",
		countrycode: "cl"
	}, {
		name: "China (中国)",
		countrycode: "cn"
	}, {
		name: "Christmas Island",
		countrycode: "cx"
	}, {
		name: "Cocos (Keeling) Islands (Kepulauan Cocos (Keeling))",
		countrycode: "cc"
	}, {
		name: "Colombia",
		countrycode: "co"
	}, {
		name: "Comoros (‫جزر القمر‬‎)",
		countrycode: "km"
	}, {
		name: "Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)",
		countrycode: "cd"
	}, {
		name: "Congo (Republic) (Congo-Brazzaville)",
		countrycode: "cg"
	}, {
		name: "Cook Islands",
		countrycode: "ck"
	}, {
		name: "Costa Rica",
		countrycode: "cr"
	}, {
		name: "Côte d’Ivoire",
		countrycode: "ci"
	}, {
		name: "Croatia (Hrvatska)",
		countrycode: "hr"
	}, {
		name: "Cuba",
		countrycode: "cu"
	}, {
		name: "Curaçao",
		countrycode: "cw"
	}, {
		name: "Cyprus (Κύπρος)",
		countrycode: "cy"
	}, {
		name: "Czech Republic (Česká republika)",
		countrycode: "cz"
	}, {
		name: "Denmark (Danmark)",
		countrycode: "dk"
	}, {
		name: "Djibouti",
		countrycode: "dj"
	}, {
		name: "Dominica",
		countrycode: "dm"
	}, {
		name: "Dominican Republic (República Dominicana)",
		countrycode: "do"
	}, {
		name: "Ecuador",
		countrycode: "ec"
	}, {
		name: "Egypt (‫مصر‬‎)",
		countrycode: "eg"
	}, {
		name: "El Salvador",
		countrycode: "sv"
	}, {
		name: "Equatorial Guinea (Guinea Ecuatorial)",
		countrycode: "gq"
	}, {
		name: "Eritrea",
		countrycode: "er"
	}, {
		name: "Estonia (Eesti)",
		countrycode: "ee"
	}, {
		name: "Ethiopia",
		countrycode: "et"
	}, {
		name: "Falkland Islands (Islas Malvinas)",
		countrycode: "fk"
	}, {
		name: "Faroe Islands (Føroyar)",
		countrycode: "fo"
	}, {
		name: "Fiji",
		countrycode: "fj"
	}, {
		name: "Finland (Suomi)",
		countrycode: "fi"
	}, {
		name: "France",
		countrycode: "fr"
	}, {
		name: "French Guiana (Guyane française)",
		countrycode: "gf"
	}, {
		name: "French Polynesia (Polynésie française)",
		countrycode: "pf"
	}, {
		name: "French Southern Territories (Terres australes françaises)",
		countrycode: "tf"
	}, {
		name: "Gabon",
		countrycode: "ga"
	}, {
		name: "Gambia",
		countrycode: "gm"
	}, {
		name: "Georgia (საქართველო)",
		countrycode: "ge"
	}, {
		name: "Germany (Deutschland)",
		countrycode: "de"
	}, {
		name: "Ghana (Gaana)",
		countrycode: "gh"
	}, {
		name: "Gibraltar",
		countrycode: "gi"
	}, {
		name: "Greece (Ελλάδα)",
		countrycode: "gr"
	}, {
		name: "Greenland (Kalaallit Nunaat)",
		countrycode: "gl"
	}, {
		name: "Grenada",
		countrycode: "gd"
	}, {
		name: "Guadeloupe",
		countrycode: "gp"
	}, {
		name: "Guam",
		countrycode: "gu"
	}, {
		name: "Guatemala",
		countrycode: "gt"
	}, {
		name: "Guernsey",
		countrycode: "gg"
	}, {
		name: "Guinea (Guinée)",
		countrycode: "gn"
	}, {
		name: "Guinea-Bissau (Guiné Bissau)",
		countrycode: "gw"
	}, {
		name: "Guyana",
		countrycode: "gy"
	}, {
		name: "Haiti",
		countrycode: "ht"
	}, {
		name: "Heard Island and Mcdonald Islands",
		countrycode: "hm"
	}, {
		name: "Honduras",
		countrycode: "hn"
	}, {
		name: "Hong Kong (香港)",
		countrycode: "hk"
	}, {
		name: "Hungary (Magyarország)",
		countrycode: "hu"
	}, {
		name: "Iceland (Ísland)",
		countrycode: "is"
	}, {
		name: "India (भारत)",
		countrycode: "in"
	}, {
		name: "Indonesia",
		countrycode: "id"
	}, {
		name: "Iran (‫ایران‬‎)",
		countrycode: "ir"
	}, {
		name: "Iraq (‫العراق‬‎)",
		countrycode: "iq"
	}, {
		name: "Ireland",
		countrycode: "ie"
	}, {
		name: "Isle of Man",
		countrycode: "im"
	}, {
		name: "Israel (‫ישראל‬‎)",
		countrycode: "il"
	}, {
		name: "Italy (Italia)",
		countrycode: "it"
	}, {
		name: "Jamaica",
		countrycode: "jm"
	}, {
		name: "Japan (日本)",
		countrycode: "jp"
	}, {
		name: "Jersey",
		countrycode: "je"
	}, {
		name: "Jordan (‫الأردن‬‎)",
		countrycode: "jo"
	}, {
		name: "Kazakhstan (Казахстан)",
		countrycode: "kz"
	}, {
		name: "Kenya",
		countrycode: "ke"
	}, {
		name: "Kiribati",
		countrycode: "ki"
	}, 
/* 	{
		name: "Kosovo (Kosovë)",
		countrycode: "xk"
	},  */
	{
		name: "Kuwait (‫الكويت‬‎)",
		countrycode: "kw"
	}, {
		name: "Kyrgyzstan (Кыргызстан)",
		countrycode: "kg"
	}, {
		name: "Laos (ລາວ)",
		countrycode: "la"
	}, {
		name: "Latvia (Latvija)",
		countrycode: "lv"
	}, {
		name: "Lebanon (‫لبنان‬‎)",
		countrycode: "lb"
	}, {
		name: "Lesotho",
		countrycode: "ls"
	}, {
		name: "Liberia",
		countrycode: "lr"
	}, {
		name: "Libya (‫ليبيا‬‎)",
		countrycode: "ly"
	}, {
		name: "Liechtenstein",
		countrycode: "li"
	}, {
		name: "Lithuania (Lietuva)",
		countrycode: "lt"
	}, {
		name: "Luxembourg",
		countrycode: "lu"
	}, {
		name: "Macau (澳門)",
		countrycode: "mo"
	}, 
/* 	{
		name: "Macedonia (FYROM) (Македонија)",
		countrycode: "mk"
	}, */ 
	{
		name: "Madagascar (Madagasikara)",
		countrycode: "mg"
	}, {
		name: "Malawi",
		countrycode: "mw"
	}, {
		name: "Malaysia",
		countrycode: "my"
	}, {
		name: "Maldives",
		countrycode: "mv"
	}, {
		name: "Mali",
		countrycode: "ml"
	}, {
		name: "Malta",
		countrycode: "mt"
	}, {
		name: "Marshall Islands",
		countrycode: "mh"
	}, {
		name: "Martinique",
		countrycode: "mq"
	}, {
		name: "Mauritania (‫موريتانيا‬‎)",
		countrycode: "mr"
	}, {
		name: "Mauritius (Moris)",
		countrycode: "mu"
	}, {
		name: "Mayotte",
		countrycode: "yt"
	}, {
		name: "Mexico (México)",
		countrycode: "mx"
	}, {
		name: "Micronesia",
		countrycode: "fm"
	}, {
		name: "Moldova (Republica Moldova)",
		countrycode: "md"
	}, {
		name: "Monaco",
		countrycode: "mc"
	}, {
		name: "Mongolia (Монгол)",
		countrycode: "mn"
	}, {
		name: "Montenegro (Crna Gora)",
		countrycode: "me"
	}, {
		name: "Montserrat",
		countrycode: "ms"
	}, {
		name: "Morocco (‫المغرب‬‎)",
		countrycode: "ma"
	}, {
		name: "Mozambique (Moçambique)",
		countrycode: "mz"
	}, {
		name: "Myanmar (Burma) (မြန်မာ)",
		countrycode: "mm"
	}, {
		name: "Namibia (Namibië)",
		countrycode: "na"
	}, {
		name: "Nauru",
		countrycode: "nr"
	}, {
		name: "Nepal (नेपाल)",
		countrycode: "np"
	}, {
		name: "Netherlands (Nederland)",
		countrycode: "nl"
	}, {
		name: "New Caledonia (Nouvelle-Calédonie)",
		countrycode: "nc"
	}, {
		name: "New Zealand",
		countrycode: "nz"
	}, {
		name: "Nicaragua",
		countrycode: "ni"
	}, {
		name: "Niger (Nijar)",
		countrycode: "ne"
	}, {
		name: "Nigeria",
		countrycode: "ng"
	}, {
		name: "Niue",
		countrycode: "nu"
	}, {
		name: "Norfolk Island",
		countrycode: "nf"
	}, {
		name: "North Korea (조선 민주주의 인민 공화국)",
		countrycode: "kp"
	}, {
		name: "Northern Mariana Islands",
		countrycode: "mp"
	}, {
		name: "Norway (Norge)",
		countrycode: "no"
	}, {
		name: "Oman (‫عُمان‬‎)",
		countrycode: "om"
	}, {
		name: "Pakistan (‫پاکستان‬‎)",
		countrycode: "pk"
	}, {
		name: "Palau",
		countrycode: "pw"
	}, {
		name: "Palestine (‫فلسطين‬‎)",
		countrycode: "ps"
	}, {
		name: "Panama (Panamá)",
		countrycode: "pa"
	}, {
		name: "Papua New Guinea",
		countrycode: "pg"
	}, {
		name: "Paraguay",
		countrycode: "py"
	}, {
		name: "Peru (Perú)",
		countrycode: "pe"
	}, {
		name: "Philippines",
		countrycode: "ph"
	}, {
		name: "Pitcairn Islands",
		countrycode: "pn"
	}, {
		name: "Poland (Polska)",
		countrycode: "pl"
	}, {
		name: "Portugal",
		countrycode: "pt"
	}, {
		name: "Puerto Rico",
		countrycode: "pr"
	}, {
		name: "Qatar (‫قطر‬‎)",
		countrycode: "qa"
	}, {
		name: "Réunion (La Réunion)",
		countrycode: "re"
	}, {
		name: "Romania (România)",
		countrycode: "ro"
	}, {
		name: "Russia (Россия)",
		countrycode: "ru"
	}, {
		name: "Rwanda",
		countrycode: "rw"
	}, {
		name: "Saint Barthélemy (Saint-Barthélemy)",
		countrycode: "bl"
	}, {
		name: "Saint Helena",
		countrycode: "sh"
	}, {
		name: "Saint Kitts and Nevis",
		countrycode: "kn"
	}, {
		name: "Saint Lucia",
		countrycode: "lc"
	}, {
		name: "Saint Martin (Saint-Martin (partie française))",
		countrycode: "mf"
	}, {
		name: "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
		countrycode: "pm"
	}, {
		name: "Saint Vincent and the Grenadines",
		countrycode: "vc"
	}, {
		name: "Samoa",
		countrycode: "ws"
	}, {
		name: "San Marino",
		countrycode: "sm"
	}, {
		name: "São Tomé and Príncipe (São Tomé e Príncipe)",
		countrycode: "st"
	}, {
		name: "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
		countrycode: "sa"
	}, {
		name: "Senegal (Sénégal)",
		countrycode: "sn"
	}, {
		name: "Serbia (Србија)",
		countrycode: "rs"
	}, {
		name: "Seychelles",
		countrycode: "sc"
	}, {
		name: "Sierra Leone",
		countrycode: "sl"
	}, {
		name: "Singapore",
		countrycode: "sg"
	}, {
		name: "Sint Maarten",
		countrycode: "sx"
	}, {
		name: "Slovakia (Slovensko)",
		countrycode: "sk"
	}, {
		name: "Slovenia (Slovenija)",
		countrycode: "si"
	}, {
		name: "Solomon Islands",
		countrycode: "sb"
	}, {
		name: "Somalia (Soomaaliya)",
		countrycode: "so"
	}, {
		name: "South Africa",
		countrycode: "za"
	}, {
		name: "South Georgia & South Sandwich Islands",
		countrycode: "gs"
	}, {
		name: "South Korea (대한민국)",
		countrycode: "kr"
	}, {
		name: "South Sudan (‫جنوب السودان‬‎)",
		countrycode: "ss"
	}, {
		name: "Spain (España)",
		countrycode: "es"
	}, {
		name: "Sri Lanka (ශ්‍රී ලංකාව)",
		countrycode: "lk"
	}, {
		name: "Sudan (‫السودان‬‎)",
		countrycode: "sd"
	}, {
		name: "Suriname",
		countrycode: "sr"
	}, {
		name: "Svalbard and Jan Mayen (Svalbard og Jan Mayen)",
		countrycode: "sj"
	}, {
		name: "Swaziland",
		countrycode: "sz"
	}, {
		name: "Sweden (Sverige)",
		countrycode: "se"
	}, {
		name: "Switzerland (Schweiz)",
		countrycode: "ch"
	}, {
		name: "Syria (‫سوريا‬‎)",
		countrycode: "sy"
	}, {
		name: "Taiwan (台灣)",
		countrycode: "tw"
	}, {
		name: "Tajikistan",
		countrycode: "tj"
	}, {
		name: "Tanzania",
		countrycode: "tz"
	}, {
		name: "Thailand (ไทย)",
		countrycode: "th"
	}, {
		name: "Timor-Leste",
		countrycode: "tl"
	}, {
		name: "Togo",
		countrycode: "tg"
	}, {
		name: "Tokelau",
		countrycode: "tk"
	}, {
		name: "Tonga",
		countrycode: "to"
	}, {
		name: "Trinidad and Tobago",
		countrycode: "tt"
	}, {
		name: "Tunisia (‫تونس‬‎)",
		countrycode: "tn"
	}, {
		name: "Turkey (Türkiye)",
		countrycode: "tr"
	}, {
		name: "Turkmenistan",
		countrycode: "tm"
	}, {
		name: "Turks and Caicos Islands",
		countrycode: "tc"
	}, {
		name: "Tuvalu",
		countrycode: "tv"
	}, {
		name: "Uganda",
		countrycode: "ug"
	}, {
		name: "Ukraine (Україна)",
		countrycode: "ua"
	}, {
		name: "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
		countrycode: "ae"
	}, {
		name: "United Kingdom",
		countrycode: "gb"
	}, {
		name: "United States",
		countrycode: "us"
	}, {
		name: "U.S. Minor Outlying Islands",
		countrycode: "um"
	}, {
		name: "U.S. Virgin Islands",
		countrycode: "vi"
	}, {
		name: "Uruguay",
		countrycode: "uy"
	}, {
		name: "Uzbekistan (Oʻzbekiston)",
		countrycode: "uz"
	}, {
		name: "Vanuatu",
		countrycode: "vu"
	}, {
		name: "Vatican City (Città del Vaticano)",
		countrycode: "va"
	}, {
		name: "Venezuela",
		countrycode: "ve"
	}, {
		name: "Vietnam (Việt Nam)",
		countrycode: "vn"
	}, {
		name: "Wallis and Futuna",
		countrycode: "wf"
	}, {
		name: "Western Sahara (‫الصحراء الغربية‬‎)",
		countrycode: "eh"
	}, {
		name: "Yemen (‫اليمن‬‎)",
		countrycode: "ye"
	}, {
		name: "Zambia",
		countrycode: "zm"
	}, {
		name: "Zimbabwe",
		countrycode: "zw"
	}
];