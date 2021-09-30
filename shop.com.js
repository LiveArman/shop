var SC = {
	AUD:{s:'A$'	, t:'AUD'},//Australian Dollar
	CAD:{s:'C$'	, t:'CAD'},//Canadian Dollar
	EUR:{s:'€'	, t:'EUR'},//Euro		
	GBP:{s:'£'	, t:'GBP'},//British Pound
	BDT:{s:'৳'	, t:'BDT'},//Bangladehi Taka			
	USD:{s:'$'	, t:'USD'},//U.S. Dollar
	NZD:{s:'N$'	, t:'NZD'},//New Zealand Dollar ($)		
	CHF:{s:'SFr', t:'CHF'},//Swiss Franc					
	HKD:{s:'H$'	, t:'HKD'},//Hong Kong Dollar ($)		
	SGD:{s:'S$'	, t:'SGD'},//Singapore Dollar ($)		
	SEK:{s:'kr'	, t:'SEK'},//Swedish Krona				
	DKK:{s:'kr'	, t:'DKK'},//Danish Krone				
	PLN:{s:'zł'	, t:'PLN'},//Polish Zloty				
	NOK:{s:'kr'	, t:'NOK'},//Norwegian Krone				
	HUF:{s:'Ft'	, t:'HUF'},//Hungarian Forint			
	CZK:{s:'Kč'	, t:'CZK'},//Czech Koruna				
	ILS:{s:'₪'	, t:'ILS'},//Israeli New Shekel			
	MXN:{s:'M$'	, t:'MXN'},//Mexican Peso				
	BRL:{s:'R$'	, t:'BRL'},//Brazilian Real				
	MYR:{s:'RM'	, t:'MYR'},//Malaysian Ringgit			
	PHP:{s:'₱'	, t:'PHP'},//Philippine Peso				
	TWD:{s:'NT$', t:'TWD'},//New Taiwan Dollar			
	THB:{s:'฿'	, t:'THB'},//Thai Baht					
	TRY:{s:'t#'	, t:'TRY'},//Turkish Lira				
	RUB:{s:'руб', t:'RUB'},//Russian Ruble
	VND:{s:'đ'	, t:'VND'},//Vietnam Dong
	RON:{s:'ron', t:'RON'},//Romanian Ron
	INR:{s:'₨', t:'INR'},//Indian Rupee 
	IDR:{s:'Rp', t:'IDR'},//Indonesia Rupiah
	NPR:{s:'रू', t:'NPR'}, //Nepalese rupee
	NGN:{s:'₦', t:'NGN'}//Nigerian Naira
};

var SC_MAP = new Array();
SC_MAP['AUD'] = SC.AUD;
SC_MAP['CAD'] = SC.CAD;
SC_MAP['EUR'] = SC.EUR;
SC_MAP['GBP'] = SC.GBP;
SC_MAP['BDT'] = SC.BDT;
SC_MAP['USD'] = SC.USD;
SC_MAP['NZD'] = SC.NZD;
SC_MAP['CHF'] = SC.CHF;
SC_MAP['HKD'] = SC.HKD;
SC_MAP['SGD'] = SC.SGD;
SC_MAP['SEK'] = SC.SEK;
SC_MAP['DKK'] = SC.DKK;
SC_MAP['PLN'] = SC.PLN;
SC_MAP['NOK'] = SC.NOK;
SC_MAP['HUF'] = SC.HUF;
SC_MAP['CZK'] = SC.CZK;
SC_MAP['ILS'] = SC.ILS;
SC_MAP['MXN'] = SC.MXN;
SC_MAP['BRL'] = SC.BRL;
SC_MAP['MYR'] = SC.MYR;
SC_MAP['PHP'] = SC.PHP;
SC_MAP['TWD'] = SC.TWD;
SC_MAP['THB'] = SC.THB;
SC_MAP['TRY'] = SC.TRY;
SC_MAP['RUB'] = SC.RUB;
SC_MAP['VND'] = SC.VND;
SC_MAP['RON'] = SC.RON;
SC_MAP['INR'] = SC.INR;
SC_MAP['IDR'] = SC.IDR;
SC_MAP['NPR'] = SC.NPR;
SC_MAP['NGN'] = SC.NGN;



// COMMERCE SETTINGS
// ##################
// important!
var CURRENCY_CODE =  SC.USD;// see the list above
var PAYPAL_EMAIL = 'mdarman100001@gmail.com';
var CURRENCY_POS = 'before';// before or after the price value
var SEP_LONG_PRICE = ' ';// separator for long price text (1.2.0)

// shipping
var SHIPPING_FEE = 55;// per order, 0 is free
var SHIPPING_FEE_FOR_EACH_ITEM = 0.0;// per item, 0 is free

// store
var STORE_NAME = '';
var STORE_STREET = '';
var STORE_TOWN = '';
var STORE_STATE = '';
var STORE_COUNTRY = '';
var STORE_POSTCODE = '';

// bank
var BANK_ACCOUNT_NAME = 'MD ARMAN';
var BANK_ACCOUNT_NUMBER = '01614946747';
var BANK_ACCOUNT_BANKNAME = 'BKASH , ROCKET , NAGAD , SURECASH , CELLFIN , IPAY , UPAY , NEXSPAY , DMONEY , ISLAMIWALLET ,OKEALLET';
var BANK_ACCOUNT_SORTCODE = 'MFS ,DFS';
var BANK_ACCOUNT_IBAN = 'MOBILE BANKING';
var BANK_ACCOUNT_BIC_SWIFT = 'PARSENAL ACCOUNT';

// payment methods and checkout form
var ENABLE_DIRECT_BANK_TRANSFER = false;
var ENABLE_BANK = true;
var ENABLE_CASH_ON_DELIVERY = true;
var ENABLE_PAYPAL = true;
var ENABLE_FIELD_COUNTRY = false; // set false to hide country list (1.2.0)
var ENABLE_FIELD_FIRST_NAME = true;
var ENABLE_FIELD_LAST_NAME = true;
var ENABLE_FIELD_COMPANY_NAME = false;
var ENABLE_FIELD_ADDRESS = true;
var ENABLE_FIELD_TOWN_CITY_STATE = true;
var ENABLE_FIELD_POST_ZIP_CODE = true;

// extra updates


// SITE DESIGN SETTINGS
// ####################
var DAY_FORMAT = 'mm/dd/yyyy';
var SUMMARY_LEN = 150;
var DEFAULT_THUMBNAIL = 'http://lorempixel.com/300/500/';
var AJAX_LOADING_IMAGE = 'http://1.bp.blogspot.com/-Qu3p5sfG0_0/U7-BqkiW-nI/AAAAAAAAIVg/fqpTyUkrFkQ/s1600/ajax-loader.gif';
var NUMBER_ITEMS_FOR_COLLECTION = 3;
var CART_CACHE_DURATION = 7; // days

var Slider_Animation_Speed = 1000; // milisecond
var Slider_Pause_Time = 4000; // milisecond
var Slider_Control = true; // false: hide next/prev buttons, true: show next/prev buttons
var Slider_Pause_When_Hover = false; // false: slider still run when hover, true: pause when hover


// DEVELOP APPS
// #####################################
var Developing = true;
var Feed_URL = '/feeds';
if (Developing) {
	Feed_URL = 'https://www.blogger.com/feeds/'+Blog_Id;
}

// VARIABLES PARSE
// ####################################
CURRENCY_CODE.s = '';
CURRENCY_CODE.t = '';
var COUNTRY_CODE = [
	'Åland Islands',
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Anguilla',
	'Antarctica',
	'Antigua and Barbuda',
	'Argentina',
	'Armenia',
	'Aruba',
	'Australia',
	'Austria',
	'Azerbaijan',
	'Bahamas',
	'Bahrain',
	'Bangladesh',
	'Barbados',
	'Belarus',
	'Belau',
	'Belgium',
	'Belize',
	'Benin',
	'Bermuda',
	'Bhutan',
	'Bolivia',
	'Bonaire, Saint Eustatius and Saba',
	'Bosnia and Herzegovina',
	'Botswana',
	'Bouvet Island',
	'Brazil',
	'British Indian Ocean Territory',
	'British Virgin Islands',
	'Brunei',
	'Bulgaria',
	'Burkina Faso',
	'Burundi',
	'Cambodia',
	'Cameroon',
	'Canada',
	'Cape Verde',
	'Cayman Islands',
	'Central African Republic',
	'Chad',
	'Chile',
	'China',
	'Christmas Island',
	'Cocos (Keeling) Islands',
	'Colombia',
	'Comoros',
	'Congo (Brazzaville)',
	'Congo (Kinshasa)',
	'Cook Islands',
	'Costa Rica',
	'Croatia',
	'Cuba',
	'CuraÇao',
	'Cyprus',
	'Czech Republic',
	'Denmark',
	'Djibouti',
	'Dominica',
	'Dominican Republic',
	'Ecuador',
	'Egypt',
	'El Salvador',
	'Equatorial Guinea',
	'Eritrea',
	'Estonia',
	'Ethiopia',
	'Falkland Islands',
	'Faroe Islands',
	'Fiji',
	'Finland',
	'France',
	'French Guiana',
	'French Polynesia',
	'French Southern Territories',
	'Gabon',
	'Gambia',
	'Georgia',
	'Germany',
	'Ghana',
	'Gibraltar',
	'Greece',
	'Greenland',
	'Grenada',
	'Guadeloupe',
	'Guatemala',
	'Guernsey',
	'Guinea',
	'Guinea-Bissau',
	'Guyana',
	'Haiti',
	'Heard Island and McDonald Islands',
	'Honduras',
	'Hong Kong',
	'Hungary',
	'Iceland',
	'India',
	'Indonesia',
	'Iran',
	'Iraq',
	'Isle of Man',
	'Israel',
	'Italy',
	'Ivory Coast',
	'Jamaica',
	'Japan',
	'Jersey',
	'Jordan',
	'Kazakhstan',
	'Kenya',
	'Kiribati',
	'Kuwait',
	'Kyrgyzstan',
	'Laos',
	'Latvia',
	'Lebanon',
	'Lesotho',
	'Liberia',
	'Libya',
	'Liechtenstein',
	'Lithuania',
	'Luxembourg',
	'Macao S.A.R., China',
	'Macedonia',
	'Madagascar',
	'Malawi',
	'Malaysia',
	'Maldives',
	'Mali',
	'Malta',
	'Marshall Islands',
	'Martinique',
	'Mauritania',
	'Mauritius',
	'Mayotte',
	'Mexico',
	'Micronesia',
	'Moldova',
	'Monaco',
	'Mongolia',
	'Montenegro',
	'Montserrat',
	'Morocco',
	'Mozambique',
	'Myanmar',
	'Namibia',
	'Nauru',
	'Nepal',
	'Netherlands',
	'Netherlands Antilles',
	'New Caledonia',
	'New Zealand',
	'Nicaragua',
	'Niger',
	'Nigeria',
	'Niue',
	'Norfolk Island',
	'North Korea',
	'Norway',
	'Oman',
	'Pakistan',
	'Palestinian Territory',
	'Panama',
	'Papua New Guinea',
	'Paraguay',
	'Peru',
	'Philippines',
	'Pitcairn',
	'Poland',
	'Portugal',
	'Qatar',
	'Republic of Ireland',
	'Reunion',
	'Romania',
	'Russia',
	'Rwanda',
	'São Tomé and Príncipe',
	'Saint Barthélemy',
	'Saint Helena',
	'Saint Kitts and Nevis',
	'Saint Lucia',
	'Saint Martin (Dutch part)',
	'Saint Martin (French part)',
	'Saint Pierre and Miquelon',
	'Saint Vincent and the Grenadines',
	'San Marino',
	'Saudi Arabia',
	'Senegal',
	'Serbia',
	'Seychelles',
	'Sierra Leone',
	'Singapore',
	'Slovakia',
	'Slovenia',
	'Solomon Islands',
	'Somalia',
	'South Africa',
	'South Georgia/Sandwich Islands',
	'South Korea',
	'South Sudan',
	'Spain',
	'Sri Lanka',
	'Sudan',
	'Suriname',
	'Svalbard and Jan Mayen',
	'Swaziland',
	'Sweden',
	'Switzerland',
	'Syria',
	'Taiwan',
	'Tajikistan',
	'Tanzania',
	'Thailand',
	'Timor-Leste',
	'Togo',
	'Tokelau',
	'Tonga',
	'Trinidad and Tobago',
	'Tunisia',
	'Turkey',
	'Turkmenistan',
	'Turks and Caicos Islands',
	'Tuvalu',
	'Uganda',
	'Ukraine',
	'United Arab Emirates',
	'United Kingdom (UK)',
	'United States (US)',
	'Uruguay',
	'Uzbekistan',
	'Vanuatu',
	'Vatican',
	'Venezuela',
	'Vietnam',
	'Wallis and Futuna',
	'Western Sahara',
	'Western Samoa',
	'Yemen',
	'Zambia',
	'Zimbabwe'
];
$('.variables i').each(function(){
	var name = $(this).attr('name');
	var val = $(this).html();
	if (!val || !name) {
		return;
	}
	
	name = name.toUpperCase().replace(/ /gi, '_');
	
	
	switch (name) {
	case 'SEP_LONG_PRICE':
		SEP_LONG_PRICE = val;
		break;
		
	case 'CURRENCY_CODE':
		if (typeof(SC_MAP[val]) !== 'undefined') {
			if (CURRENCY_CODE.s == '') {
				CURRENCY_CODE.s = SC_MAP[val].s;
			}
			if (CURRENCY_CODE.t == '') {
				CURRENCY_CODE.t = SC_MAP[val].t;
			}
		} else {
			if (CURRENCY_CODE.t == '') {
				CURRENCY_CODE.t = val;
			}
			if (CURRENCY_CODE.s == '') {
				CURRENCY_CODE.s = '$';
			}
		}
		break;
		
	case 'CURRENCY_SIGN':
		CURRENCY_CODE.s = val;
		break;
		
	
	case 'CURRENCY_POS':
	case 'CURRENCY_POSITION':
		CURRENCY_POS = val.toLowerCase();
		break;
	
	case 'PAYPAL_EMAIL':
		PAYPAL_EMAIL = val;
		break;
		
	case 'SHIPPING_FEE':
		if (!isNaN(val)) {
			SHIPPING_FEE = Number(val);
		}
		break;
		
	case 'SHIPPING_FEE_FOR_EACH_ITEM':
		if (!isNaN(val)) {
			SHIPPING_FEE_FOR_EACH_ITEM = Number(val);
		}
		break;
		
	case 'STORE_NAME':
		STORE_NAME = val;
		break;
		
	case 'STORE_STREET':
		STORE_STREET = val;
		break;
		
	case 'STORE_TOWN':
		STORE_TOWN = val;
		break;
		
	case 'STORE_STATE':
		STORE_STATE = val;
		break;
	case 'STORE_COUNTRY':
		STORE_COUNTRY = val;
		break;
	case 'STORE_POSTCODE':
		STORE_POSTCODE = val;
		break;
	case 'BANK_ACCOUNT_NAME':
		BANK_ACCOUNT_NAME = val;
		break;
	case 'BANK_ACCOUNT_NUMBER':
		BANK_ACCOUNT_NUMBER = val;
		break;
	case 'BANK_ACCOUNT_BANKNAME':
		BANK_ACCOUNT_BANKNAME = val;
		break;
	case 'BANK_ACCOUNT_SORTCODE':
		BANK_ACCOUNT_SORTCODE = val;
		break;
	case 'BANK_ACCOUNT_IBAN':
		BANK_ACCOUNT_IBAN = val;
		break;
	case 'BANK_ACCOUNT_BIC_SWIFT':
		BANK_ACCOUNT_BIC_SWIFT = val;
		break;
	case 'DAY_FORMAT':
		DAY_FORMAT = val;
		break;
	case 'SUMMARY_LEN':
		if (!isNaN(val)) {
			SUMMARY_LEN = Number(val);
		}
		break;
	case 'DEFAULT_THUMBNAIL':
		DEFAULT_THUMBNAIL = val;
		break;
	case 'AJAX_LOADING_IMAGE':
		AJAX_LOADING_IMAGE = val;
		break;
	case 'NUMBER_ITEMS_FOR_COLLECTION':
		if (!isNaN(val)) {
			NUMBER_ITEMS_FOR_COLLECTION = Number(val);
		}
		break;
	case 'CART_CACHE_DURATION':
		if (!isNaN(val)) {
			CART_CACHE_DURATION = Number(val);
		}
		break;
	case 'SLIDER_ANIMATION_SPEED':
		if (!isNaN(val)) {
			Slider_Animation_Speed = Number(val);
		}
		break;
	case 'SLIDER_PAUSE_TIME':
		if (!isNaN(val)) {
			Slider_Pause_Time = Number(val);
		}
		break;
	case 'SLIDER_CONTROL':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			Slider_Control = true;
		} else if (val === 'FALSE') {
			Slider_Control = false;
		}
		break;
	case 'SLIDER_PAUSE_WHEN_HOVER':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			Slider_Pause_When_Hover = true;
		} else if (val === 'FALSE') {
			Slider_Pause_When_Hover = false;
		}
		break;
	case 'ENABLE_DIRECT_BANK_TRANSFER':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_DIRECT_BANK_TRANSFER = true;
		} else if (val === 'FALSE') {
			ENABLE_DIRECT_BANK_TRANSFER = false;
		}
		break;
	case 'ENABLE_Bank':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_BANK = true;
		} else if (val === 'FALSE') {
			ENABLE_BANK = false;
		}
		break;
	case 'ENABLE_CASH_ON_DELIVERY':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_CASH_ON_DELIVERY = true;
		} else if (val === 'FALSE') {
			ENABLE_CASH_ON_DELIVERY = false;
		}
		break;
	case 'ENABLE_PAYPAL':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_PAYPAL = true;
		} else if (val === 'FALSE') {
			ENABLE_PAYPAL = false;
		}
		break;
		
	case 'ENABLE_FIELD_COUNTRY':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_FIELD_COUNTRY = true;
		} else if (val === 'FALSE') {
			ENABLE_FIELD_COUNTRY = false;
		}
		break;
			
	case 'ENABLE_FIELD_FIRST_NAME':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_FIELD_FIRST_NAME = true;
		} else if (val === 'FALSE') {
			ENABLE_FIELD_FIRST_NAME = false;
		}
		break;
			
	case 'ENABLE_FIELD_LAST_NAME':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_FIELD_LAST_NAME = true;
		} else if (val === 'FALSE') {
			ENABLE_FIELD_LAST_NAME = false;
		}
		break;
			
	case 'ENABLE_FIELD_COMPANY_NAME':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_FIELD_COMPANY_NAME = true;
		} else if (val === 'FALSE') {
			ENABLE_FIELD_COMPANY_NAME = false;
		}
		break;
			
	case 'ENABLE_FIELD_ADDRESS':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_FIELD_ADDRESS = true;
		} else if (val === 'FALSE') {
			ENABLE_FIELD_ADDRESS = false;
		}
		break;
			
	case 'ENABLE_FIELD_TOWN_CITY_STATE':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_FIELD_TOWN_CITY_STATE = true;
		} else if (val === 'FALSE') {
			ENABLE_FIELD_TOWN_CITY_STATE = false;
		}
		break;
			
	case 'ENABLE_FIELD_POST_ZIP_CODE':
		val = val.toUpperCase();
		if (val === 'TRUE') {
			ENABLE_FIELD_POST_ZIP_CODE = true;
		} else if (val === 'FALSE') {
			ENABLE_FIELD_POST_ZIP_CODE = false;
		}
		break;
	}
});
if (CURRENCY_CODE.t == '') {
	CURRENCY_CODE.t = 'BDT';
}
if (CURRENCY_CODE.s == '') {
	CURRENCY_CODE.s = '৳';
}
var CURRENCY =  CURRENCY_CODE.s;
var CURRENCY_BEFORE = '';
var CURRENCY_AFTER = '';
if (CURRENCY_POS === 'before') {
	CURRENCY_BEFORE = CURRENCY;
} else {
	CURRENCY_AFTER = CURRENCY;
}
var CURRENCY_CODE_T = CURRENCY_CODE.t;



// PLUGINS
// #####################################
// slider from sneeit.com/slider
$.fn.slider = function (options) {
	var defaults = {
		animation_speed: 1000,
		pause_time: 4000,
		control: false,
		pause_when_hover: false
	};
	var settings = $.extend( {}, defaults, options );
	var s = $(this);
	var item = s.find('.slide');
	var cindex = 0; // current active index
	var tindex = 1; // target active index
	var slider_timer;
	var safe_bounce = true;
	var hovering = false;
	var index_limit = item.length;
	var control_width = 0;
	
	// init control
	if (settings.control) {
		s.append('<a class="slide-left slide-control white block abs"><i class="fa fa-angle-left"></i></a><a class="slide-right slide-control white block abs"><i class="fa fa-angle-right"></i></a>');
	}
	
	// save top and left value for content
	function init_top_left() {
		var header_h = $('#header-1').height();
		var inner = s.find('.inner');
		var inner_left = inner.offset().left;
		var inner_width = inner.width();
		var current_top = s.find('.image').offset().top - header_h;
		var content = item.find('a.slide-content');
		var content_wrapper = s.find('.slide-content-wrapper');
		
		//restore init position
		s.find('.image').css('left', '100%').css('max-width', (inner_width * 40 / 100) + 'px');
		content_wrapper.css('top', current_top + 'px');
		content.removeAttr('style');
		content.css('position', 'static');
		
		// save end top/left position
		content.each(function(){
			$(this).css('max-width', (inner_width * 60 / 100) + 'px');
			$(this).attr('end-top', ($(this).offset().top - header_h));
			$(this).attr('end-left', inner_left);
			
		});
		
		// save and set start top/left position
		s.find('.slide-content-wrapper').css('top', 0);
		content.each(function(){
			var a = $(this);
			a.css('position','absolute');
			if (a.is('.pre-title')) {
				a.css('left', '50%');
				a.attr('start-left', ($(this).offset().left + 1));
				a.attr('start-top', a.attr('end-top')).css('top', a.attr('end-top')+'px').css('left', a.attr('start-left') + 'px');
			} else if ($(this).is('.title')) {
				a.css('bottom', '100%');
				var start_top = $(this).offset().top - header_h - 1;
				a.css('top', start_top + 'px').css('bottom', 'auto').css('left', inner_left+'px').attr('start-top', start_top).attr('start-left', inner_left);
			} else if (a.is('.caption')) {
				a.css('top', '100%');
				var start_top = $(this).offset().top - header_h + 1;
				a.css('top', start_top + 'px').css('left', inner_left+'px').attr('start-top', start_top).attr('start-left', inner_left);
			} else if (a.is('.button')) {
				//a.css('width', a.width()+'px');
				var padding = a.css('padding');
				padding = Number(padding.replace('px',''));
				var width = a.width();
				var start_left = - padding - width - 1;
				a.css('left', start_left + 'px').css('right', 'auto').attr('start-left', start_left).attr('start-top', a.attr('end-top')).css('top', a.attr('end-top')+'px');
			}
		});
	}
	
	init_top_left();
	
	$(window).resize(function(){
		if (typeof(slider_timer) != 'undefined') {
			clearTimeout(slider_timer);
			init_top_left();
			main(cindex, cindex+1);
		} else {
			setTimeout(function () {
				init_top_left();
				main(cindex, cindex+1);
			}, settings.animation_speed);
		}
	});
	
	// show the slider after init everything
	s.css('opacity', '1');
	item.css('visibility', 'hidden');
	
	// main slider function
	function main(_cindex, _tindex) {
		
		if (index_limit < 2) {
			// no need to make slide when we have only one item
			// your process for stand alone slide
			// return;
		}
		
		if (typeof(slider_timer) != 'undefined') {
			clearTimeout(slider_timer);
		}
		if (!safe_bounce) {
			return;
		}
		
		safe_bounce = false;
		if (_tindex >= index_limit) {
			// if target active is higher than end, set to first
			_tindex = 0;
		}
		if (_tindex < 0) {
			// if target active is lower than first, set to end
			_tindex = index_limit - 1;
		}
		cindex = _tindex;
		
		
		
		// start animation
		var out_delay = settings.animation_speed / 3;
		var in_delay = settings.animation_speed * 2 / 3;
	
		// get out
		$(item[_cindex]).find('a.slide-content').each(function(){
			
			$(this).animate({
				left: $(this).attr('start-left')+'px',
				top: $(this).attr('start-top')+'px'
			}, out_delay, 'easeOutBack');
		});
		$(item[_cindex]).find('a.image').each(function(){
			
			$(this).animate({
				left: '100%'
			}, out_delay, 'easeOutBack', function () {
				$(item[_cindex]).css('visibility', 'hidden');
				$(item[_tindex]).css('visibility', 'visible');
				
				// get in
				$(item[_tindex]).find('a.slide-content').each(function(){
					var end_left = Number($(this).attr('end-left'));
					if (hovering && settings.control) {
						end_left = end_left + control_width;
					}
					$(this).animate({
						left: end_left+'px',
						top: $(this).attr('end-top')+'px'
					}, in_delay, 'easeOutBack');
				});
				$(item[_tindex]).find('a.image').each(function(){
					var inner = s.find('.inner');
					var inner_left = inner.offset().left;
					var inner_width = inner.width();
					var end_left = inner_left+inner_width-$(this).width();
					if (hovering && settings.control) {
						end_left = end_left - control_width;
					}
					$(this).animate({
						left: end_left + 'px'
					}, in_delay, 'easeOutBack', function () {
						
						// repeat slider
						safe_bounce = true;
						if (!hovering || !settings.pause_when_hover) {
							slider_timer = setTimeout(function () {
								main(_tindex, _tindex+1);
							}, settings.pause_time);
						}
					});
				});
			});
		});
		
	}
	//main(index_limit-1, 0);
	setTimeout(function(){
		init_top_left();
		main(index_limit-1, 0);
	}, 200);
	
	// stop / start slider when mouse hover
	s.mouseenter(function(){
		hovering = true;
		if (settings.pause_when_hover) {
			if (typeof(slider_timer) != 'undefined') {
				clearTimeout(slider_timer);
			}
		}
		if (settings.control) {
			var inner = s.find('.inner');
			var inner_left = inner.offset().left;
			var inner_width = inner.width();
			s.find('.slide-control').each(function(){
				control_width = $(this).width();
				$(this).css('top', ((s.height() - $(this).height()) / 2) + 'px');
				if ($(this).is('.slide-left')) {
					$(this).animate({
						right: (inner_left + inner_width - $(this).width()) + 'px'
					}, 200);
				} else {
					$(this).animate({
						left: (inner_left + inner_width - $(this).width()) + 'px'
					}, 200);
				}
			});
		}
	}).mouseleave(function(){
		hovering = false;
		if (settings.pause_when_hover) {
			if (typeof(slider_timer) != 'undefined') {
				clearTimeout(slider_timer);
			}
			slider_timer = setTimeout(function(){
				main(cindex, cindex + 1);
			}, settings.pause_time);
		}
		if (settings.control) {
			s.find('.slide-control').each(function(){
				if ($(this).is('.slide-left')) {
					$(this).animate({
						right: '100%'
					}, 200);
				} else {
					$(this).animate({
						left: '100%'
					}, 200);
				}
			});
		}
	});
	
	// animation when keypress
	$("body").keydown(function(e) {
		if(e.keyCode == 37 && e.which == 37) { // left
			if (typeof(slider_timer) != 'undefined') {
				clearTimeout(slider_timer);
			}
			main(cindex, cindex - 1);
		}
		else if(e.keyCode == 39 && e.which == 39) { // right
			if (typeof(slider_timer) != 'undefined') {
				clearTimeout(slider_timer);
			}
			main(cindex, cindex + 1);
		}
	});
	
	// press control button
	s.find('.slide-left').click(function () {
		if (typeof(slider_timer) != 'undefined') {
			clearTimeout(slider_timer);
		}
		main(cindex, cindex - 1);
	});
	s.find('.slide-right').click(function () {
		if (typeof(slider_timer) != 'undefined') {
			clearTimeout(slider_timer);
		}
		main(cindex, cindex + 1);
	});

};
$.fn.slider_rtl = function (options) {
	var defaults = {
		animation_speed: 1000,
		pause_time: 4000,
		control: false,
		pause_when_hover: false
	};
	var settings = $.extend( {}, defaults, options );
	var s = $(this);
	var item = s.find('.slide');
	var cindex = 0; // current active index
	var tindex = 1; // target active index
	var slider_timer;
	var safe_bounce = true;
	var hovering = false;
	var index_limit = item.length;
	var control_width = 0;
	
	// init control
	if (settings.control) {
		s.append('<a class="slide-right slide-control white block abs"><i class="fa fa-angle-left"></i></a><a class="slide-left slide-control white block abs"><i class="fa fa-angle-right"></i></a>');
	}
	
	// save top and left value for content
	function init_top_left() {
		var header_h = $('#header-1').height();
		var inner = s.find('.inner');
		var inner_left = inner.offset().left;
		var inner_width = inner.width();
		var current_top = s.find('.image').offset().top - header_h;
		var content = item.find('a.slide-content');
		var content_wrapper = s.find('.slide-content-wrapper');
		
		
		//restore init position
		s.find('.image').css('right', '100%').css('max-width', (inner_width * 40 / 100) + 'px');
		content_wrapper.css('top', current_top + 'px');
		content.removeAttr('style');
		content.css('position', 'static');
		
		// save end top/left position
		content.each(function(){
			$(this).css('max-width', (inner_width * 60 / 100) + 'px');
			$(this).attr('end-top', ($(this).offset().top - header_h));
			$(this).attr('end-left', inner_left);
		});
		
		// save and set start top/left position
		s.find('.slide-content-wrapper').css('top', 0);
		content.each(function(){
			var a = $(this);
			a.css('position','absolute');
			
			if (a.is('.pre-title')) {
				a.css('right', '50%');
				a.attr('start-left', ($(this).offset().left + 1));
				a.attr('start-top', a.attr('end-top')).css('top', a.attr('end-top')+'px').css('right', a.attr('start-left') + 'px');
			} else if ($(this).is('.title')) {
				a.css('bottom', '100%');
				var start_top = $(this).offset().top - header_h - 1;
				a.css('top', start_top + 'px').css('bottom', 'auto').css('right', inner_left+'px').attr('start-top', start_top).attr('start-left', inner_left);
			} else if (a.is('.caption')) {
				a.css('top', '100%');
				var start_top = $(this).offset().top - header_h + 1;
				a.css('top', start_top + 'px').css('right', inner_left+'px').attr('start-top', start_top).attr('start-left', inner_left);
			} else if (a.is('.button')) {
				var padding = a.css('padding');
				padding = Number(padding.replace('px',''));
				var width = a.width();
				var start_left = - padding - width - 1;
				a.css('right', start_left + 'px').css('right', 'auto').attr('start-left', start_left).attr('start-top', a.attr('end-top')).css('top', a.attr('end-top')+'px');
			}
		});
	}
	init_top_left();
	
	$(window).resize(function(){
		if (typeof(slider_timer) != 'undefined') {
			clearTimeout(slider_timer);
			init_top_left();
			main(cindex, cindex+1);
		} else {
			setTimeout(function () {
				init_top_left();
				main(cindex, cindex+1);
			}, settings.animation_speed);
		}
	});
	
	// show the slider after init everything
	s.css('opacity', '1');
	item.css('visibility', 'hidden');
	
	// main slider function
	function main(_cindex, _tindex) {
		
		
		
		if (index_limit < 2) {
			// no need to make slide when we have only one item
			// your process for stand alone slide
			// return;
		}
		
		if (typeof(slider_timer) != 'undefined') {
			clearTimeout(slider_timer);
		}
		if (!safe_bounce) {
			return;
		}
		
		safe_bounce = false;
		if (_tindex >= index_limit) {
			// if target active is higher than end, set to first
			_tindex = 0;
		}
		if (_tindex < 0) {
			// if target active is lower than first, set to end
			_tindex = index_limit - 1;
		}
		cindex = _tindex;
		
		
		
		// start animation
		var out_delay = settings.animation_speed / 3;
		var in_delay = settings.animation_speed * 2 / 3;
	
		// get out
		$(item[_cindex]).find('a.slide-content').each(function(){
			
			$(this).animate({
				right: $(this).attr('start-left')+'px',
				top: $(this).attr('start-top')+'px'
			}, out_delay, 'easeOutBack');
		});
		$(item[_cindex]).find('a.image').each(function(){
			
			$(this).animate({
				right: '100%'
			}, out_delay, 'easeOutBack', function () {
				$(item[_cindex]).css('visibility', 'hidden');
				$(item[_tindex]).css('visibility', 'visible');
				
				// get in
				$(item[_tindex]).find('a.slide-content').each(function(){
					var end_left = Number($(this).attr('end-left'));
					if (hovering && settings.control) {
						end_left = end_left + control_width;
					}
					$(this).animate({
						right: end_left+'px',
						top: $(this).attr('end-top')+'px'
					}, in_delay, 'easeOutBack');
				});
				$(item[_tindex]).find('a.image').each(function(){
					var inner = s.find('.inner');
					var inner_left = inner.offset().left;
					var inner_width = inner.width();
					var end_left = inner_left+inner_width-$(this).width();
					if (hovering && settings.control) {
						end_left = end_left - control_width;
					}
					$(this).animate({
						right: end_left + 'px'
					}, in_delay, 'easeOutBack', function () {
						
						// repeat slider
						safe_bounce = true;
						if (!hovering || !settings.pause_when_hover) {
							slider_timer = setTimeout(function () {
								main(_tindex, _tindex+1);
							}, settings.pause_time);
						}
					});
				});
			});
		});
		
	}
	//main(index_limit-1, 0);
	setTimeout(function(){
		init_top_left();
		main(index_limit-1, 0);
	}, 200);
	
	// stop / start slider when mouse hover
	s.mouseenter(function(){
		hovering = true;
		if (settings.pause_when_hover) {
			if (typeof(slider_timer) != 'undefined') {
				clearTimeout(slider_timer);
			}
		}
		if (settings.control) {
			var inner = s.find('.inner');
			var inner_left = inner.offset().left;
			var inner_width = inner.width();
			s.find('.slide-control').each(function(){
				control_width = $(this).width();
				$(this).css('top', ((s.height() - $(this).height()) / 2) + 'px');
				if ($(this).is('.slide-left')) {
					$(this).animate({
						left: (inner_left + inner_width - $(this).width()) + 'px'
					}, 200);
				} else {
					$(this).animate({
						right: (inner_left + inner_width - $(this).width()) + 'px'
					}, 200);
				}
			});
		}
	}).mouseleave(function(){
		hovering = false;
		if (settings.pause_when_hover) {
			if (typeof(slider_timer) != 'undefined') {
				clearTimeout(slider_timer);
			}
			slider_timer = setTimeout(function(){
				main(cindex, cindex + 1);
			}, settings.pause_time);
		}
		if (settings.control) {
			s.find('.slide-control').each(function(){
				if ($(this).is('.slide-left')) {
					$(this).animate({
						left: '100%'
					}, 200);
				} else {
					$(this).animate({
						right: '100%'
					}, 200);
				}
			});
		}
	});
	
	// animation when keypress
	$("body").keydown(function(e) {
		if(e.keyCode == 37 && e.which == 37) { // left
			if (typeof(slider_timer) != 'undefined') {
				clearTimeout(slider_timer);
			}
			main(cindex, cindex - 1);
		}
		else if(e.keyCode == 39 && e.which == 39) { // right
			if (typeof(slider_timer) != 'undefined') {
				clearTimeout(slider_timer);
			}
			main(cindex, cindex + 1);
		}
	});
	
	// press control button
	s.find('.slide-left').click(function () {
		if (typeof(slider_timer) != 'undefined') {
			clearTimeout(slider_timer);
		}
		main(cindex, cindex - 1);
	});
	s.find('.slide-right').click(function () {
		if (typeof(slider_timer) != 'undefined') {
			clearTimeout(slider_timer);
		}
		main(cindex, cindex + 1);
	});

};



spotcommerce_easy_text_picker = [
	'.translator i[data-key="',
	'"]',
	'.image-list',
	'id',
	'.widget.Image',
	'','','','h2',
	'.widget-content',
	'img',
	'src',
	'.caption',
	'a',
	'href',
	'.natural-thumbnail img',
	'height',
	'width',
	'src',
	'/s72-c/',
	'/s72-c/',
	'/s1600/',
	'<img src="',
	'" class="replaced"/>',
	'youtube.com',
	'/default.',
	'/default.',
	'/mqdefault.',
	'<img src="',
	'" class="replaced"/>',
	'undefined',
	'mm/dd/yyyy',
	'undefined',
	'undefined',
	'http://lorempixel.com/300/500/',
	'','','','','','','comments',
	'Anonymous',
	'','http://img1.blogblog.com/img/anon36.png',
	'','','entry',
	'post-',
	'published',
	'category',
	'title',
	'content',
	'summary',
	'','','','...',
	'link',
	'alternate',
	'replies',
	'name',
	'uri',
	'gd$image',
	'http://img1.blogblog.com/img/blank.gif',
	'','','media$thumbnail',
	'','thr$total',
	' ',
	'','','','','thr$in-reply-to',
	'thr$in-reply-to',
	'thr$in-reply-to',
	'/default/',
	'/summary/',
	'?alt=json-in-script',
	'gd$extendedProperty',
	'blogger.itemClass',
	'pid-',
	'','undefined',
	'mm/dd/yyyy',
	'undefined',
	'undefined',
	'http://lorempixel.com/300/500/',
	'blog-',
	'.comments',
	'','category',
	'','title',
	'','subtitle',
	'Anonymous',
	'','http://img1.blogblog.com/img/anon36.png',
	'name',
	'uri',
	'gd$image',
	'http://img1.blogblog.com/img/blank.gif',
	'entry',
	'post-',
	'','published',
	'category',
	'','title',
	'','content',
	'','summary',
	'','','','...',
	'','comments',
	'link',
	'alternate',
	'replies',
	'Anonymous',
	'','http://img1.blogblog.com/img/anon36.png',
	'name',
	'uri',
	'gd$image',
	'http://img1.blogblog.com/img/blank.gif',
	'','','media$thumbnail',
	'','thr$total',
	' ',
	'','','','','thr$in-reply-to',
	'thr$in-reply-to',
	'thr$in-reply-to',
	'/default/',
	'/summary/',
	'?alt=json-in-script',
	'','gd$extendedProperty',
	'blogger.itemClass',
	'pid-',
	'','-',
	'dd',
	'mm',
	'yyyy',
	'cookie',
	'; expires=',
	'; path=/', "=", 'test',
	'ok',
	'', ";", "=", "=", "", '', "undefined", '','','?',
	'#',
	'://',
	'/',
	'archive.html',
	'/search?updated-min=',
	'/search?',
	'/search/label/',
	'/p/',
	'.html',
	'/cart/',
	'?page=cart',
	'/checkout/',
	'?page=checkout',
	'/wishlist/',
	'?page=wishlist',
	'/b/',
	'admin',
	'yes',
	'.item-control',
	'.item-control',
	'display',
	'none',
	'','','.',
	'','','.',
	'#primary',
	'<div class="wide section" id="blog"><div class="widget Blog" id="Blog1"><div class="blog-posts hfeed"><div class="clear"></div></div></div></div><div class="clear"></div>',
	'#header-2',
	'','string',
	'!0',
	'','','','','string',
	'_',
	'-',
	'!0',
	'<div class="property out-of-stock efont">',
	'Out of stock',
	'</div>',
	'<div class="property on-sale color-bg efont"><span class="label">',
	'On sale',
	'</span><span class="old old-price" data-old="',
	'">',
	'</span><span class="current current-price" data-price="',
	'">',
	'</span></div>',
	'<div class="property normal color-bg efont current-price" data-price="',
	'">',
	'</div>',
	'.blog-posts.hfeed.index .index-post',
	'even',
	'odd',
	'triple',
	'quad',
	'#popular-items .index-post',
	'even',
	'odd',
	'triple',
	'quad',
	'#home-horizon-section-2 .widget',
	'even',
	'odd',
	'triple',
	'quad',
	'span.trans',
	'data-key',
	'.follow-by-email-submit',
	'SUBSCRIBE',
	'.follow-by-email-address',
	'placeholder',
	'Email address...',
	'#header .menu a',
	'_',
	'sub',
	'<span class="tab"></span>',
	'#header .menu-toggle',
	'#header .menu',
	'display',
	'none',
	'#header .menu-toggle',
	'#header .menu',
	'display',
	'none',
	'#header .menu-toggle',
	'#header .menu',
	'display',
	'none',
	'#header .menu',
	'#header .menu-toggle',
	'slider',
	'#slider',
	'<div class="wide inner"></div>',
	'','','[',']','[',']','','[',']','[',']',
	'<div class="slide">',
	'','<a href="',
	'" class="slide-content pre-title efont white block">',
	'</a>',
	'<a href="',
	'" class="slide-content title efont white block">',
	'</a>',
	'<a href="',
	'" class="slide-content caption white block">',
	'</a>',
	'<a href="',
	'" class="slide-content button efont white color-bg black-hover inb">',
	'</a>',
	'<div class="slide-content-wrapper">',
	'</div>',
	'<a href="',
	'" class="image block abs"><img alt="slide-image" src="',
	'"/></a>',
	'</div>',
	'html[dir="rtl"]',
	'#bar .tabs .active',
	'#bar .tabs',
	'#bar .arrow',
	'left',
	'px',
	'#bar .inner .tabs',
	'#bar .inner',
	'<div class="breadcrumb"></div>',
	'#bar .tabs a',
	'#bar .tabs a.active',
	'active',
	'active',
	'.search-toggle',
	'.search-overlay',
	'#search-form',
	'30%',
	'easeOutBack',
	'.search-overlay',
	'.search-overlay',
	'#search-form',
	'100%', "body", '.search-overlay',
	'display',
	'none',
	'.search-overlay',
	'#search-form',
	'100%',
	'.index-post',
	'.property',
	'.out-of-stock',
	'.add-to-cart',
	'+ ',
	'Readmore',
	' +',
	'disabled',
	'.current-price',
	'.add-to-cart',
	'+ ',
	'Add to cart',
	' +',
	'href',
	'.tabs a',
	'.tabs a',
	'active',
	'active',
	'.latest',
	'#blog',
	'#home-random',
	'#popular-items',
	'.random',
	'#blog',
	'#home-random',
	'#popular-items',
	'.popular',
	'#blog',
	'#home-random',
	'#popular-items',
	'.label-information',
	'_',
	'-',
	'!0',
	'data-count',
	'data-url',
	'.post-tags a[rel="tag"]',
	'_',
	'-',
	'!0',
	'.breadcrumb',
	'<a href="/" class="black color-hover">',
	'Home',
	'</a><span class="sep">/</span>',
	'<a href="',
	'?max-results=8" class="black color-hover">',
	'</a>',
	'.post-tags a[rel="tag"]',
	'href',
	'href',
	'<a href="',
	'?max-results=8" class="black color-hover">',
	'</a><span class="sep">/</span>',
	'<span class="bc-post-title black">404</span>',
	'title',
	'___',
	'404',
	'title',
	'<span class="bc-post-title black">',
	'Archive',
	'</span>',
	'<span class="bc-post-title black">',
	'Cart',
	'</span>',
	'title',
	'___',
	'Cart',
	'title',
	'<span class="bc-post-title black">',
	'Checkout',
	'</span>',
	'title',
	'___',
	'Checkout',
	'title',
	'<span class="bc-post-title black">',
	'Wishlist',
	'</span>',
	'title',
	'___',
	'Wishlist',
	'title',
	'#home-horizon-section .widget.Text .widget-content',
	'##',
	'##',
	'<span class="icon"><i class="fa fa-',
	'"></i></span>',
	'.post .post-description img',
	'src',
	'src',
	'br',
	'a',
	'br',
	'div.separator',
	'br',
	'div.separator',
	'br',
	'div.separator',
	'a',
	'div.separator',
	'.post-header .desc-image-list',
	'','<div class="full">',
	'<div class="natural-thumbnail"><img src="',
	'" alt="post-full-image"/></div>',
	'<div class="natural-thumbnail" style="opacity: 0" ><img src="',
	'" alt="post-full-image"/></div>',
	'</div>',
	'<div class="thumb">',
	'<a class="natural-thumbnail"><img src="',
	'" alt="post-thumb-image"/></a>',
	'<div class="clear"></div></div>',
	'.post-header .desc-image-list .thumb .natural-thumbnail',
	'img',
	'src',
	'.post-header .desc-image-list .full .natural-thumbnail',
	'opacity',
	'1',
	'.post-header .desc-image-list .full .natural-thumbnail',
	'img',
	'src',
	'.post.hentry .post-header-meta-2',
	'<span  class="price-label">',
	'Price',
	':</span>',
	'-',
	'<span  class="inb old-price efont">',
	'</span>',
	'_',
	'<span id="price" class="inb cur-price efont">',
	'</span>',
	'<span class="inb color-bg white efont on-sale">',
	'On sale',
	'</span>',
	'!0',
	'<span class="inb white out-of-stock efont">',
	'Out of stock',
	'</span>',
	'add_to_cart',
	'add_to_wishlist',
	'',',','(',')','(','(',')','',',','(',')','',',','(',')','',',','(',')','','.wishlist-toggle',
	'hide',
	'title',
	'View wishlist',
	'.cart-toggle',
	'hide',
	'title',
	'View cart',
	'.post-header-action-buttons',
	'','data-id',
	'<div class="action-button-wrapper add-to-cart-button-wrapper rel">',
	'<span class="add-to-cart-up change-cart-counter-button color-hover ptr"><i class="fa fa-angle-up"></i></span>',
	'<span class="add-to-cart-down change-cart-counter-button color-hover ptr"><i class="fa fa-angle-down"></i></span>',
	'<a class="add-to-cart color-bg white black-bg-hover" data-id="',
	'">',
	'Add',
	' <span class="counter b">1</span> ',
	'items to cart',
	' <i class="fa fa-shopping-cart icon"></i></a>',
	'<div class="clear"></div>',
	'</div>',
	'<div class="action-button-wrapper add-to-wishlist-button-wrapper rel">',
	'<a class="add-to-wishlist white-bg black green-bg-hover white-hover" data-id="',
	'">',
	'Add to Wishlist',
	' <i class="fa fa-heart"></i></a>',
	'<div class="clear"></div>',
	'</div>',
	'<div class="clear"></div>',
	'<div class="shopping-msg"></div>',
	'<div class="clear"></div>',
	'.post-header-action-buttons .change-cart-counter-button',
	'.post-header-action-buttons .add-to-cart .counter',
	'.add-to-cart-up',
	'.post-header-action-buttons .add-to-cart .counter',
	'.cart-toggle',
	'.wishlist-toggle',
	'.number',
	'.fa',
	'<span class="number color-bg white block abs">',
	'</span>',
	'.disabled',
	'.counter',
	'.counter',
	'data-id',
	'.counter',
	'.shopping-item.hentry',
	'h1.shopping-title',
	'.shopping-msg',
	'<span class="icon green-bg white"><i class="fa fa-check"></i></span> "',
	'" ',
	'was successfully added to your cart',
	'. <a href="/?page=cart">',
	'View cart',
	'</a>',
	'.in-list',
	'<i class="fa fa-check"></i> ',
	'Add to cart',
	'.add-to-cart',
	'.add-to-wishlist',
	'.disabled',
	'data-id',
	'.shopping-item',
	'h1.shopping-title',
	'.shopping-msg',
	'<span class="icon green-bg white"><i class="fa fa-check"></i></span> "',
	'" ',
	'was successfully added to your wishlist',
	'. <a href="/?page=wishlist">',
	'View wishlist',
	'</a>',
	'<div class="cart-content white-bg abs right0">	<div class="cart-list">	</div>	<p class="total"><strong>',
	'Subtotal',
	':</strong> <span class="amount">',
	'<span class="value">0</span>',
	'</span></p>	<p class="buttons">		<a href="/?page=cart" class="button viewcart grey-bg black color-bg-hover white-hover inb efont">',
	'View Cart',
	'</a>		<a href="/?page=checkout" class="button checkout inb color-bg white black-bg-hover efont">',
	'Checkout',
	'</a>	</p></div>',
	'.cart-toggle-wrapper',
	'','.cart-content',
	'/posts/default/',
	'?alt=json-in-script',
	'.cart-content',
	'','_',
	'<div class="cart-item">				<a href="',
	'" class="cart-item-thumb">				<img src="',
	'" alt="cart-item-thumb"></a>				<div class="cart-text">					<a class="cart-item-title" href="',
	'">',
	'</a>					<span class="quantity"><span class="number">',
	'</span> × <span class="price">',
	'<span class="price-value" data-price="',
	'">',
	'</span>',
	'</span></span>					<span class="cart-item-remove" data-id="',
	'" title="',
	'Remove from cart',
	'">×</span>				</div>				<div class="clear"></div>			</div>',
	'.cart-toggle-wrapper .cart-content .cart-list',
	'.cart-toggle-wrapper .cart-content .cart-list .ajax-loader',
	'.cart-toggle-wrapper .cart-content .cart-list .cart-item',
	'.price-value',
	'data-price',
	'.number',
	'.cart-toggle-wrapper .cart-content .total .amount .value',
	'.cart-toggle-wrapper .cart-content .cart-list .cart-item .cart-item-remove',
	'data-id',
	'Can not get item from server!', "jsonp", 'Can not get data from server!',
	'.cart-toggle',
	'.number',
	'.cart-toggle-wrapper .cart-content',
	'.cart-toggle-wrapper .cart-content .cart-list',
	'<img class="ajax-loader" src="',
	'"/>',
	'.cart-toggle-wrapper .cart-content .total .value',
	'0',
	'','.cart-toggle-wrapper .cart-content',
	'.cart-toggle-wrapper',
	'.disabled',
	'.cart-toggle-wrapper',
	'.disabled',
	'.cart-toggle-wrapper',
	'.cart-content',
	'data-id',
	'.index-post[data-id="',
	'"]',
	'.index-post',
	'.blog-posts.hfeed',
	'<div class="empty-wishlist empty-msg">',
	'The wishlist is empty now',
	'</div>',
	'/posts/default/',
	'?alt=json-in-script',
	'','',' even',
	' odd',
	' triple',
	' quad',
	'<div class="index-post small shopping-item',
	'" data-id="',
	'">',
	'<a class="natural-thumbnail" href="',
	'">',
	'<img src="',
	'" class="shopping-thumb"/>',
	'</a>',
	'<div class="content tcenter">',
	'<h2 class="b_ shopping-title"><a class="black color-hover" href="',
	'">',
	'</a></h2>',
	'<a class="add-to-cart in-list" data-id="',
	'"><span class="text black-hover">+ ',
	'Add to cart',
	' +</span></a>',
	'<a class="add-to-cart disabled" href="',
	'"><span class="text black-hover">+ ',
	'Readmore',
	' +</span></a>',
	'<div class="clear"></div>',
	'<a class="remove-from-wishlist" data-id="',
	'"><span class="text black color-hover">',
	'Remove from wishlist',
	'</span></a>',
	'</div>',
	'<div class="clear"></div></div>',
	'.blog-posts.hfeed .ajax-loader',
	'.blog-posts.hfeed .ajax-loader',
	'.blog-posts.hfeed .index-post a.add-to-cart',
	'.blog-posts.hfeed .index-post a.remove-from-wishlist',
	'Can not get item from server!', "jsonp", 'Can not get data from server!',
	'body',
	'wishlist',
	'.blog-posts.hfeed',
	'wishlist-page',
	'.blog-posts.hfeed',
	'<img class="ajax-loader" src="',
	'"/>',
	'.blog-posts.hfeed',
	'<div class="empty-wishlist empty-msg">',
	'The wishlist is empty now',
	'</div>',
	'','body',
	'cart',
	'.blog-posts.hfeed',
	'cart-page',
	'.cart-toggle-wrapper',
	'disabled',
	'.blog-posts.hfeed',
	'<div class="cart-page-buttons"></div>',
	'.blog-posts.hfeed',
	'<div class="cart-page-subtotal"></div>',
	'.blog-posts.hfeed',
	'<div class="cart-page-content"></div>',
	'/posts/default/',
	'?alt=json-in-script',
	'','_',
	'<tr class="cart_item" data-id="',
	'">					<td class="product-remove">						<a class="remove" title="',
	'Remove from cart',
	'" data-id="',
	'">×</a>					</td>					<td class="product-thumbnail">						<a href="',
	'"><img src="',
	'"></a>					</td>					<td class="product-name">						<a href="',
	'">',
	'</a>					</td>					<td class="product-price">						<span class="amount">',
	'<span class="price-value" data-id="',
	'" data-price="',
	'">',
	'</span>',
	'</span>					</td>					<td class="product-quantity">						<div class="quantity buttons_added"><input type="button" value="-" class="minus" data-id="',
	'"><input type="number" step="1" min="1" name="cart[',
	'][qty]" value="',
	'" class="input-text qty text" size="4"><input type="button" value="+" class="plus" data-id="',
	'"></div>					</td>					<td class="product-subtotal">						<span class="amount">',
	'<span class="subtotal-value">',
	'</span>',
	'</span>					</td>				</tr>',
	'<table class="cart-page-table" cellspacing="0"><thead>							<tr>								<th class="product-remove">&nbsp;</th>								<th class="product-thumbnail">&nbsp;</th>								<th class="product-name">',
	'Product',
	'</th>								<th class="product-price">',
	'Price',
	'</th>								<th class="product-quantity">',
	'Quantity',
	'</th>								<th class="product-subtotal">',
	'Total',
	'</th>							</tr>						</thead><tbody>',
	'</tbody></table>',
	'.cart-page-content',
	'.cart-page-content .cart_item',
	'data-id',
	'.price-value[data-id="',
	'"]',
	'data-price',
	'input[name="cart[',
	'][qty]"]',
	'.cart-page-subtotal',
	'<strong class="label">',
	'Subtotal',
	':</strong> <span class="subtotal-value">',
	'<span class="value">',
	'</span>',
	'</span>',
	'.cart-page-buttons',
	'<a class="update-cart-page inb color-bg white-bg black-bg-hover black white-hover">',
	'Update cart',
	'</a> <a class="proceed-checkout inb color-bg white green-bg-hover" href="?page=checkout">',
	'Procceed checkout',
	'</a>',
	'.cart_item .product-quantity input[type="button"]',
	'data-id',
	'input[name="cart[',
	'][qty]"]',
	'.minus',
	'input[name="cart[',
	'][qty]"]',
	'input[name="cart[',
	'][qty]"]',
	'.update-cart-page',
	'.cart_item',
	'data-id',
	'input[name="cart[',
	'][qty]"]',
	'.cart_item .remove',
	'data-id',
	'Can not get item from server!', "jsonp", 'Can not get data from server!',
	'','.cart-page-content',
	'','.cart-page-subtotal',
	'','.cart-page-buttons',
	'','.cart-page-content',
	'<img class="ajax-loader" src="',
	'"/>',
	'.blog-posts.hfeed',
	'<div class="empty-cart empty-msg">',
	'The cart is empty now',
	'</div>',
	'','','','','','','','','','','','','','','','','','','','#ship-to-different-address-checkbox',
	':checked',
	'','p.validate-required',
	'.billing-fields p.validate-required',
	'input[type="text"]',
	'id',
	'_email',
	'@',
	'.',
	'id',
	'_phone',
	'+',
	'id',
	'_postcode',
	'#billing_country',
	'','#billing_first_name',
	'','#billing_last_name',
	'','#billing_company',
	'','#billing_address',
	'','#billing_city',
	'','#billing_postcode',
	'','#billing_email',
	'#billing_phone',
	'#shipping_country',
	'','#shipping_first_name',
	'','#shipping_last_name',
	'','#shipping_company',
	'','#shipping_address',
	'','#shipping_city',
	'','#shipping_postcode',
	'','#order_comments',
	'.checkout-page .payment-methods input[name="payment_method"][checked="checked"]',
	'#ship-to-different-address-checkbox',
	':checked',
	'.checkout-page .contact-form-wrapper',
	'.contact-form-name',
	' ',
	'.contact-form-email',
	'NEW ORDER',
	': #',
	'\n',
	'==========================\n',
	'METHOD',
	': ',
	'\n',
	'Billing Address and Shipping Address',
	'Billing Address',
	'\n',
	'-----------------------------------------------------------\n',
	'    ',
	'First Name',
	': ',
	'\n',
	'    ',
	'Last Name',
	': ',
	'\n',
	'    ',
	'Company Name',
	':',
	'\n',
	'    ',
	'Address',
	': ',
	'\n',
	'    ',
	'Town / City / State',
	': ',
	'\n',
	'    ',
	'Country',
	': ',
	'\n',
	'    ',
	'Postcode / Zip',
	': ',
	'\n',
	'    ',
	'Email',
	': ',
	'\n',
	'    ',
	'Phone',
	': ',
	'\n',
	'\n',
	'Shipping Address',
	'\n',
	'-----------------------------------------------------------\n',
	'    ',
	'First Name',
	': ',
	'\n',
	'    ',
	'Last Name',
	': ',
	'\n',
	'    ',
	'Company Name',
	':',
	'\n',
	'    ',
	'Address',
	': ',
	'\n',
	'    ',
	'Town / City / State',
	': ',
	'\n',
	'    ',
	'Country',
	': ',
	'\n',
	'    ',
	'Postcode / Zip',
	': ',
	'\n',
	'\n',
	'Order Notes',
	'\n',
	'-----------------------------------------------------------\n',
	'\n\n',
	'Order Details',
	'\n',
	'============================================================\n',
	'    ',
	'Product',
	': ',
	'\n',
	'    ',
	'Price',
	': ',
	'\n',
	'    ',
	'Quantity',
	': ',
	'\n',
	'    ',
	'Total',
	': ',
	'\n',
	'    ',
	'Link',
	': ',
	'\n',
	'-----------------------------------------------------------\n',
	'Subtotal',
	': ',
	'\n',
	'-----------------------------------------------------------\n',
	'Shipping',
	': ',
	'\n',
	'-----------------------------------------------------------\n',
	'Total',
	': ',
	'\n',
	'-----------------------------------------------------------\n',
	'\n\n\n\n\n ',
	'.contact-form-email-message',
	'#ship-to-different-address-checkbox',
	':checked',
	'','','p.validate-required',
	'.billing-fields p.validate-required',
	'input[type="text"]',
	'id',
	'_email',
	'@',
	'.',
	'id',
	'_phone',
	'+',
	'id',
	'_postcode',
	'style',
	'border',
	'1px solid red', "html, body", 'billing_country',
	'billing_first_name',
	'billing_last_name',
	'billing_company',
	'billing_address',
	'billing_city',
	'billing_postcode',
	'billing_email',
	'billing_phone',
	'Direct Bank Transfer',
	'Bank Transfer',
	'Cash on Delivery',
	'#ship-to-different-address-checkbox',
	':checked',
	'<p>',
	'Thank you. Your order has been received',
	'</p>		<ul class="order_details">			<li class="order">				<div class="">',
	'Order ID',
	':</div><strong class="color">#',
	'</strong>			</li>			<li class="date">				<div class="">MM/DD/YYY:</div><strong>',
	'/',
	'/',
	'</strong>			</li>			<li class="total">				<div class="">',
	'Total',
	':</div><strong><span class="amount">',
	'</span></strong>			</li>			<li class="method">				<div class="">',
	'Payment method',
	':</div><strong>',
	'</strong>			</li>		</ul>',
	'Direct Bank Transfer',
	'<p>',
	'আমাদের ব্যাংক একাউন্ট আপনার টাকা প্রদান করুন। টাকা প্রদানের রেফারেন্স হিসাবে আপনার অর্ডার আইডি ব্যবহার করুন। আপনার টাকা না পাওয়া পর্যন্ত আপনার অর্ডারটি পাঠানো হবে না।',
	'</p>			<h2>',
	'Our Bank Details',
	'</h2>			<h3 class="color">',
	' - ',
	'</h3>			<ul class="order_details">				<li class="account_number"><div class="">',
	'Account Number',
	':</div><strong class="color">',
	'</strong></li>',
	'<li class="sort_code"><div class="">',
	'Sort Code',
	':</div><strong>',
	'</strong></li>',
	'<li class="iban"><div class="">IBAN:</div><strong>',
	'</strong></li>',
	'<li class="bic"><div class="">BIC:</div><strong>',
	'</strong></li>',
	'</ul>',
	'Bank Transfer',
	'<p>',
	'আমাদের ব্যংক একাউন্ট এ সরাসরি আপনার টাকা প্রদান করুন।  টাকা প্রদানের রেফারেন্স হিসাবে আপনার অর্ডার আইডি ব্যবহার করুন। আপনার টাকা না পাওয়া পর্যন্ত আপনার অর্ডারটি পাঠানো হবে না। Bank Transfer করুন   পেমেন্ট সম্পূর্ণ হলে আমরা আপনার সাথে যোগাযোগ করবো',
	'',
	'',
	'',
	'',
	'',
	'',
	'</span></p>',
	'<p>',
	'পণ্য হাতে নিয়ে টাকা প্রদান করুন',
	'</p>',
	'<h2>',
	'Order Details',
	'</h2>		<table class="shop_table order_details">			<thead>				<tr>					<th class="product-name">',
	'Product',
	'</th>					<th class="product-total">',
	'Total',
	'</th>				</tr>			</thead>			<tfoot>				<tr>					<th scope="row">',
	'Subtotal',
	':</th>					<td><span class="amount">',
	'</span></td>				</tr>				<tr>					<th scope="row">',
	'Shipping',
	':</th>					<td>',
	'Free Shipping',
	'</td>				</tr>				<tr>					<th scope="row">',
	'Total',
	':</th>					<td><span class="amount">',
	'</span></td>				</tr>			</tfoot>			<tbody>',
	'<tr class="order_item">				<td class="product-name">',
	'<strong class="product-quantity">× ',
	'</strong></td>				<td class="product-total"><span class="amount">',
	'</span></td>			</tr>',
	'</tbody>		</table>		<header>			<h2>',
	'Customer details',
	'</h2>		</header>		<dl class="customer_details">			<dt>',
	'Email',
	':</dt>			<dd>',
	'</dd><dt>',
	'Phone',
	':</dt><dd>',
	'</dd>		</dl>		<div class="col2-set addresses">			<div class="col-1 ',
	'','">			<header class="title">				<h3>',
	'Billing Address and Shipping Address',
	'Billing Address',
	'</h3>			</header>			<address>				<p>					',
	' ',
	'<br>					',
	'<br>					',
	'<br>					',
	', ',
	'				</p>			</address>		</div>',
	'<div class="col-2">				<header class="title">					<h3>',
	'Shipping Address',
	'</h3>				</header>				<address>					<p>						',
	' ',
	'<br>						',
	'<br>						',
	'<br>						',
	', ',
	'					</p>				</address>			</div>',
	'<div class="clear"></div></div><div class="clear"></div>',
	'.checkout-step-2',
	'PayPal',
	'https://smanager.xyz/@Freelancerbd',
	'&business=',
	'&currency_code=',
	'&charset=UTF-8',
	'&rm=0',
	'&upload=1',
	'&bn=SpotCommerce_Cart',
	'&invoice=',
	'&first_name=',
	'&last_name=',
	'&company=',
	'&address1=',
	'&city=',
	'&zip=',
	'&country=',
	'&email=',
	'&night_phone_b=',
	'&day_phone_b=',
	'&handling_cart=',
	'&no_shipping=1',
	'&tax_cart=0',
	'&item_name_',
	'=',
	'&quantity_',
	'=',
	'&amount_',
	'=',
	'#ContactForm1_contact-form-success-message',
	'#ContactForm1_contact-form-success-message',
	'.checkout-step-1',
	'.checkout-step-2',
	'#ContactForm1_contact-form-success-message',
	'#ContactForm1_contact-form-error-message',
	'Blogger server had an unknown error!!',
	'.checkout-step-1',
	'.checkout-step-2',
	'/posts/default/',
	'?alt=json-in-script',
	'','_',
	'<tr class="cart_item">				<td class="product-name">',
	' <strong class="product-quantity">×',
	'</strong></td>				<td class="product-total"><span class="amount">',
	'</span></td>			</tr>',
	'Free Shipping',
	'<h3 id="order_review_heading">',
	'Your Order',
	'</h3>					<table class="shop_table" cellspacing="0">						<thead>							<tr>								<th class="product-name">',
	'Product',
	'</th>								<th class="product-total">',
	'Total',
	'</th>							</tr>						</thead>						<tfoot>							<tr class="cart-subtotal">								<th>',
	'Subtotal',
	'</th>								<td><span class="amount">',
	'</span></td>							</tr>							<tr class="shipping">								<th>',
	'Shipping and Handling',
	'</th>								<td>									',
	'								</td>							</tr>							<tr class="order-total">								<th>',
	'Total',
	'</th>								<td><strong><span class="amount">',
	'</span></strong> </td>							</tr>						</tfoot>						<tbody>						',
	'						</tbody>					</table>',
	'.billing-info',
	'<ul class="payment_methods methods">',
	'<li class="payment_method_bacs">							<input id="payment_method_bacs" type="radio" class="input-radio" name="payment_method" value="',
	'Direct Bank Transfer',
	'"/>							<label for="payment_method_bacs">',
	'Direct Bank Transfer',
	' </label>							<div class="payment_box payment_method_bacs"><p>',
	'আমাদের ব্যাংক একাউন্ট আপনার টাকা প্রদান করুন। <b> টাকা প্রদানের রেফারেন্স হিসাবে আপনার অর্ডার আইডি ব্যবহার করুন। </b> আপনার টাকা না পাওয়া পর্যন্ত আপনার অর্ডারটি পাঠানো হবে না।',
	'.</p></div>						</li>',
	'<li class="payment_method_bank">							<input id="payment_method_bank" type="radio" class="input-radio" name="payment_method" value="',
	'Bank Transfer',
	'"/>							<label for="payment_method_bank">',
	'Bank Transfer',
	' </label>							<div class="payment_box payment_method_bank hide">								<p>',
	'আমাদের ব্যংক একাউন্ট এ সরাসরি আপনার টাকা প্রদান করুন। <b> টাকা প্রদানের রেফারেন্স হিসাবে আপনার অর্ডার আইডি ব্যবহার করুন।</b> আপনার টাকা না পাওয়া পর্যন্ত আপনার অর্ডারটি পাঠানো হবে না।',
	'',
	'',
	'',
	'',
	'',
	'',
	'</p>							</div>						</li>',
	'<li class="payment_method_cod">							<input id="payment_method_cod" type="radio" class="input-radio" name="payment_method" value="',
	'Cash on Delivery',
	'"/>							<label for="payment_method_cod">',
	'Cash on Delivery',
	' </label>							<div class="payment_box payment_method_cod hide">								<p>',
	'পণ্য হাতে নিয়ে টাকা প্রদান করুন',
	'</p>							</div>						</li>',
	'<li class="payment_method_paypal">							<input id="payment_method_paypal" type="radio" class="input-radio" name="payment_method" value="PayPal"/>							<label for="payment_method_paypal">Bkash & Others <div class="inb paypal-img"><span class="pay">Online </span><span class="pal">Payment</span></div></label>							<div class="payment_box payment_method_paypal hide">								<p>',
	'<b>Bkash Rocket Nogod Debit Credit Card iBanking & Others Online Payment By Smanager</b>',
	'</p>							</div>						</li>',
	'</ul>',
	'.checkout-page .payment-methods',
	'ul.payment_methods li:first input[type="radio"]',
	'checked',
	'checked',
	'.checkout-step-1 .action-buttons',
	'<a href="/?page=cart" class="white-bg black color-hover inb button">',
	'View Cart',
	'</a> <div class="contact-form-wrapper inb"></div>',
	'#ContactForm1 form[name="contact-form"]',
	'.checkout-page .contact-form-wrapper',
	'.checkout-page .contact-form-wrapper form[name="contact-form"]',
	'<div class="contact-form-inner"></div>',
	'.checkout-page .contact-form-wrapper form[name="contact-form"]',
	'<div class"button"></div>',
	'.checkout-page .contact-form-wrapper form[name="contact-form"] .contact-form-button-submit',
	'.checkout-page .contact-form-wrapper form[name="contact-form"]',
	'.checkout-page .contact-form-wrapper form[name="contact-form"] .contact-form-button-submit',
	'color-bg white inb continue button place-order',
	'Place Order',
	'.checkout-page input[name="payment_method"]',
	'change',
	'checked',
	'.checkout-page .payment_methods input[checked="checked"]',
	'id',
	'.payment_box.',
	'checked',
	'id',
	'.payment_box.',
	'checked',
	'checked',
	'#ContactForm1_contact-form-submit',
	'#ContactForm1_contact-form-submit',
	'Can not get item from server!', "jsonp", 'Can not get data from server!',
	'','.billing-info',
	'<img class="ajax-loader" src="',
	'"/>',
	'<form name="checkout" method="post" class="checkout" action="">	<div class="col-1">		<h3>',
	'Billing Details',
	'</h3>		<div class="billing-fields">',
	'<p class="address-field update_totals_on_change validate-required" id="billing_country_field">					<label for="billing_country" class="">',
	'Country',
	' <abbr class="required" title="required">*</abbr></label>					<select name="billing_country" id="billing_country" class="country_to_state country_select">',
	'billing_country',
	'<option value="',
	'"',
	'','>',
	'</option>',
	'</select>				</p><div class="clear"></div>',
	'<p class="form-row form-row-first validate-required" id="billing_first_name_field">					<label for="billing_first_name" class="">',
	'First Name',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="',
	'billing_first_name',
	'"/>				</p>',
	'<p class="form-row form-row-last validate-required" id="billing_last_name_field">					<label for="billing_last_name" class="">',
	'Last Name',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="',
	'billing_last_name',
	'"/>				</p>',
	'<p class="form-row form-row-wide" id="billing_company_field">					<label for="billing_company" class="">',
	'Company Name',
	'</label>					<input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="" value="',
	'billing_company',
	'"/>				</p>',
	'<p class="form-row form-row-wide address-field validate-required" id="billing_address_field">					<label for="billing_address" class="">',
	'Address',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="billing_address" id="billing_address" placeholder="" value="',
	'billing_address',
	'"/>				</p>',
	'<p class="form-row form-row-wide address-field validate-required" id="billing_city_field" data-o_class="form-row form-row-wide address-field validate-required">					<label for="billing_city" class="">',
	'Town / City / State',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="billing_city" id="billing_city" placeholder="" value="',
	'billing_city',
	'"/>				</p>',
	'<p class="form-row form-row-last address-field validate-required validate-postcode" id="billing_postcode_field" data-o_class="form-row form-row-last address-field validate-required validate-postcode">					<label for="billing_postcode" class="">',
	'Postcode / Zip',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="billing_postcode" id="billing_postcode" placeholder="" value="',
	'billing_postcode',
	'"/>				</p>',
	'<p class="form-row form-row-first validate-required validate-email" id="billing_email_field">				<label for="billing_email" class="">',
	'Email Address',
	' <abbr class="required" title="required">*</abbr></label>				<input type="text" class="input-text " name="billing_email" id="billing_email" placeholder="" value="',
	'billing_email',
	'"/>			</p>			<p class="form-row form-row-last validate-required validate-phone" id="billing_phone_field">				<label for="billing_phone" class="">',
	'Phone',
	' <abbr class="required" title="required">*</abbr></label>				<input type="text" class="input-text " name="billing_phone" id="billing_phone" placeholder="" value="',
	'billing_phone',
	'"/>			</p>		<div class="clear"></div></div>	</div>	<div class="col-2">		<h3 id="ship-to-different-address">			<label for="ship-to-different-address-checkbox" class="checkbox">',
	'Ship to a different address?',
	'</label>			<input id="ship-to-different-address-checkbox" class="input-checkbox" type="checkbox" name="ship_to_different_address" value="1"/>		</h3>		<div class="hide shipping-fields">',
	'<p class="address-field update_totals_on_change validate-required" id="shipping_country_field">					<label for="shipping_country" class="">',
	'Country',
	' <abbr class="required" title="required">*</abbr></label>					<select name="shipping_country" id="shipping_country" class="country_to_state country_select">',
	'<option value="',
	'">',
	'</option>',
	'</select>				</p>',
	'<p class="form-row form-row-first validate-required" id="shipping_first_name_field">					<label for="shipping_first_name" class="">',
	'First Name',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="shipping_first_name" id="shipping_first_name" placeholder="" value=""/>				</p>',
	'<p class="form-row form-row-last validate-required" id="shipping_last_name_field">					<label for="shipping_last_name" class="">',
	'Last Name',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="shipping_last_name" id="shipping_last_name" placeholder="" value=""/>				</p>',
	'<p class="form-row form-row-wide" id="shipping_company_field">					<label for="shipping_company" class="">',
	'Company Name',
	'</label>					<input type="text" class="input-text " name="shipping_company" id="shipping_company" placeholder="" value=""/>				</p>',
	'<p class="form-row form-row-wide address-field validate-required" id="shipping_address_field">					<label for="shipping_address" class="">',
	'Address',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="shipping_address" id="shipping_address" placeholder="" value=""/>				</p>',
	'<p class="form-row form-row-wide address-field validate-required" id="shipping_city_field" data-o_class="form-row form-row-wide address-field validate-required">					<label for="shipping_city" class="">',
	'Town / City / State',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="shipping_city" id="shipping_city" placeholder="" value=""/>				</p>',
	'<p class="form-row form-row-last address-field validate-required validate-postcode" id="shipping_postcode_field" data-o_class="form-row form-row-last address-field validate-required validate-postcode">					<label for="shipping_postcode" class="">',
	'Postcode / Zip',
	' <abbr class="required" title="required">*</abbr></label>					<input type="text" class="input-text " name="shipping_postcode" id="shipping_postcode" placeholder="" value=""/>				</p>',
	'<div class="clear"></div></div>		<p class="form-row notes" id="order_comments_field">			<label for="order_comments" class="">',
	'Order Notes',
	'</label><textarea name="order_comments" class="input-text " id="order_comments" placeholder="" rows="2"></textarea>		</p>	</div></form><div class="clear"></div>',
	'body',
	'checkout',
	'.blog-posts.hfeed',
	'checkout-page',
	'.cart-toggle-wrapper',
	'disabled',
	'a.cart-toggle',
	'href',
	'/?page=cart',
	'.checkout-page',
	'<div class="checkout-step-1 input-info"><div class="checkout-form">',
	'</div><div class="billing-info"></div><div class="payment-methods"></div><div class="action-buttons"></div>',
	'.checkout-page',
	'<div class="checkout-step-2 summary-info hide"><img class="ajax-loader" src="',
	'"/></div>',
	'#ship-to-different-address-checkbox',
	'change',
	':checked',
	'.shipping-fields',
	'.shipping-fields',
	'#blog .index-post',
	'#home-random',
	'<img class="ajax_loading_img" src="',
	'"/>',
	'/posts/summary?alt=json-in-script&max-results=0',
	'/posts/default?alt=json-in-script&max-results=',
	'&start-index=',
	'','',' even',
	' odd',
	' triple',
	' quad',
	'<div class="index-post small shopping-item',
	'" data-id="',
	'">',
	'<a class="natural-thumbnail" href="',
	'">',
	'<img src="',
	'" class="shopping-thumb"/>',
	'</a>',
	'<div class="content tcenter">',
	'<h2 class="b_ shopping-title"><a class="black color-hover" href="',
	'">',
	'</a></h2>',
	'<a class="add-to-cart in-list" data-id="',
	'"><span class="text black-hover">+ ',
	'Add to cart',
	' +</span></a>',
	'<a class="add-to-cart disabled" href="',
	'"><span class="text black-hover">+ ',
	'Readmore',
	' +</span></a>',
	'</div>',
	'<div class="clear"></div></div>',
	'#home-random',
	'<div class="clear"></div>',
	'#home-random .index-post a.add-to-cart', "jsonp", "jsonp", '#home-random',
	'#bar .tabs a.random',
	'','#Label1',
	'h2',
	'a',
	'data-href',
	'_',
	'-',
	'!0',
	'/search/label/',
	'?',
	'?',
	'#Label1',
	'collections',
	'rel',
	'<div class="header"><h2>',
	'<select name="collection-list">',
	'<option value="',
	'">',
	'</option>',
	'</select></h2>',
	'<div class="clear"></div></div><div class="clear"></div><div class="body">',
	'<div name="',
	'" class="inner"><div class="collection-content"></div><a href="',
	'?max-results=8" class="more black color-bg-hover white-hover efont ease" style="display: none;">',
	'View all products of',
	' <span class="upper">',
	'</span></a></div>',
	'</div>',
	'select[name="collection-list"]',
	'disabled',
	'disabled',
	'/posts/default/-/',
	'?alt=json-in-script&max-results=',
	'','',' even',
	' odd',
	' triple',
	' quad',
	'<div class="index-post big shopping-item',
	'" data-id="',
	'">',
	'<a class="natural-thumbnail" href="',
	'">',
	'<img src="',
	'" class="shopping-thumb"/>',
	'</a>',
	'<div class="content tcenter">',
	'<h2 class="b_ shopping-title"><a class="black color-hover" href="',
	'">',
	'</a></h2>',
	'<a class="add-to-cart in-list" data-id="',
	'"><span class="text black-hover">+ ',
	'Add to cart',
	' +</span></a>',
	'<a class="add-to-cart disabled" href="',
	'"><span class="text black-hover">+ ',
	'Readmore',
	' +</span></a>',
	'</div>',
	'<div class="clear"></div></div>',
	'div[name="',
	'"] .collection-content',
	'<div class="clear"></div>',
	'div[name="',
	'"]',
	'active',
	'select[name="collection-list"]',
	'disabled',
	'div[name="',
	'"]',
	'.more',
	'div[name="',
	'"] .collection-content .index-post a.add-to-cart', "jsonp", 'Can not get data from server!',
	'select[name="collection-list"]',
	'change',
	'disabled',
	'disabled',
	'#Label1 .body .inner.active',
	'active',
	'div[name="',
	'"]',
	'active',
	'div[name="',
	'"] .collection-content',
	'div[name="',
	'"] .collection-content',
	'<img src="',
	'" class="ajax_loading_img"/>',
	'/posts/default/-/',
	'?alt=json-in-script&max-results=',
	'','',' even',
	' odd',
	' triple',
	' quad',
	'<div class="index-post big shopping-item',
	'" data-id="',
	'">',
	'<a class="natural-thumbnail" href="',
	'">',
	'<img src="',
	'" class="shopping-thumb"/>',
	'</a>',
	'<div class="content tcenter">',
	'<h2 class="b_ shopping-title"><a class="black color-hover" href="',
	'">',
	'</a></h2>',
	'<a class="add-to-cart in-list" data-id="',
	'"><span class="text black-hover">+ ',
	'Add to cart',
	' +</span></a>',
	'<a class="add-to-cart disabled" href="',
	'"><span class="text black-hover">+ ',
	'Readmore',
	' +</span></a>',
	'</div>',
	'<div class="clear"></div></div>',
	'div[name="',
	'"] .collection-content',
	'<div class="clear"></div>',
	'select[name="collection-list"]',
	'disabled',
	'div[name="',
	'"]',
	'.more',
	'div[name="',
	'"] .collection-content .index-post a.add-to-cart', "jsonp", 'disabled',
	'#Label1',
	'#home-sticky',
	'<div class="clear"></div>',
	'.post.hentry .post-tags',
	'a',
	'_',
	'-',
	'!0',
	'href',
	'href',
	'?max-results=8',
	'.post.hentry .post-tags',
	'','',' even',
	' odd',
	' triple',
	' quad',
	'<div class="index-post big shopping-item',
	'" data-id="',
	'">',
	'<a class="natural-thumbnail" href="',
	'">',
	'<img src="',
	'" class="shopping-thumb"/>',
	'</a>',
	'<div class="content tcenter">',
	'<h2 class="b_ shopping-title"><a class="black color-hover" href="',
	'">',
	'</a></h2>',
	'<a class="add-to-cart in-list" data-id="',
	'"><span class="text black-hover">+ ',
	'Add to cart',
	' +</span></a>',
	'<a class="add-to-cart disabled" href="',
	'"><span class="text black-hover">+ ',
	'Readmore',
	' +</span></a>',
	'</div>',
	'<div class="clear"></div></div>',
	'.post-similar .container',
	'/search/label/',
	'/posts/default/-/',
	'?max-results=0&alt=json-in-script',
	'/posts/default/-/',
	'?max-results=',
	'&start-index=',
	'&alt=json-in-script',
	'.post-similar span.id',
	'.post-similar .container',
	'.post-similar',
	'.post-similar .container .index-post a.add-to-cart', "jsonp", "jsonp", '.comment-thread > ol > li > .comment-block',
	'<div class="arrow"></div>',
	'.comments .comments-content .comment-thread > .continue',
	'comment-cancel-form',
	'color-bg',
	'black-bg-hover',
	'white',
	'display',
	'none',
	'a',
	'Cancel reply',
	'.comments .continue',
	'.comment-cancel-form',
	'a',
	'comment-reply-link',
	'.comments .comment .comment-actions a[o="r"]',
	'comment-reply-link',
	'.comments .comment-reply-link',
	'.comment',
	'.comment-replies',
	'.comment-replybox-thread',
	'.comment-cancel-form',
	'.comment-cancel-form',
	'.comment-cancel-form',
	'.comment-cancel-form',
	'#comment-editor', "html, body", '.comments .comment .comment-actions a[o="r"]',
	'.comment-cancel-form', "html, body", '.blog-posts.hfeed.error_page',
	'p-404',
	'','<h1 class="title-404">',
	'PAGE MISSING',
	' - 404</h1>',
	'<div class="icon-404 color"><i class="fa fa-circle-o-notch"></i></div>',
	'<div class="msg-1-404">',
	'Something Went Wrong',
	'</div>',
	'<div class="msg-2-404">',
	'This search can help you find what you need',
	'</i></div>',
	'#search-form',
	'#search-form',
	'search-404',
	'.search-toggle',
	'Input keywords and enter ...',
	'#search-form #search-text',
	'#search-form #search-text',
	'blur',
	'','#search-form #search-text',
	'focus',''
];



// translated texts from what user inputted in
function spotcommerce_translated_mapper(trans_text) {
	var item_in_cart_recheck = trans_text;
	$(spotcommerce_easy_text_picker[0] + trans_text + spotcommerce_easy_text_picker[1]).each(function () {
		item_in_cart_recheck = $(this).html();
	});
	return item_in_cart_recheck;
}

// build up a vitural spot
function spotcommerce_check_spot(o) {
	var item_in_cart_recheck = new Object();
	item_in_cart_recheck.top = o.offset().top;
	item_in_cart_recheck.left = o.offset().left;
	item_in_cart_recheck.width = o.width();
	item_in_cart_recheck.height = o.height();
	item_in_cart_recheck.right = item_in_cart_recheck.left + item_in_cart_recheck.width;
	item_in_cart_recheck.bottom = item_in_cart_recheck.top + item_in_cart_recheck.height;
	return item_in_cart_recheck;
}

// check if something is in spot
function spotcommerce_in_check_spot(x, y, o) {
	var item_point_collector = spotcommerce_check_spot(o);
	if (y > item_point_collector.top && y < item_point_collector.bottom && x > item_point_collector.left && x < item_point_collector.right) {
		return true;
	}
	return false;
}

// parse widget and get content in chain
$(spotcommerce_easy_text_picker[2]).each(function () {
	var gadget_easy_catch = new Array();
	var gadget_easy_catch_counter = 0;
	var spot_commerce_special_collection = $(this).attr(spotcommerce_easy_text_picker[3]);
	$(this).find(spotcommerce_easy_text_picker[4]).each(function () {
		gadget_easy_catch[gadget_easy_catch_counter] = new Object();
		gadget_easy_catch[gadget_easy_catch_counter].title = spotcommerce_easy_text_picker[5];
		gadget_easy_catch[gadget_easy_catch_counter].src = spotcommerce_easy_text_picker[6];
		gadget_easy_catch[gadget_easy_catch_counter].href = spotcommerce_easy_text_picker[7];

		$(this).find(spotcommerce_easy_text_picker[8]).each(function () {
			gadget_easy_catch[gadget_easy_catch_counter].title = $(this).html();
		});
		$(this).find(spotcommerce_easy_text_picker[9]).each(function () {
			$(this).find(spotcommerce_easy_text_picker[10]).each(function () {
				gadget_easy_catch[gadget_easy_catch_counter].src = $(this).attr(spotcommerce_easy_text_picker[11]);
			});
			$(this).find(spotcommerce_easy_text_picker[12]).each(function () {
				gadget_easy_catch[gadget_easy_catch_counter].caption = $(this).html();
			});
			$(this).find(spotcommerce_easy_text_picker[13]).each(function () {
				gadget_easy_catch[gadget_easy_catch_counter].href = $(this).attr(spotcommerce_easy_text_picker[14]);
			});
		});
		gadget_easy_catch_counter++;
	});
	if (gadget_easy_catch_counter) {
		spotcommerce_gadget_parser(gadget_easy_catch, spot_commerce_special_collection);
	}
});

// replace thumbnail to bigger
function spotcommerce_thumbnail_handler() {
	$(spotcommerce_easy_text_picker[15]).each(function () {
		$(this).removeAttr(spotcommerce_easy_text_picker[16]);
		$(this).removeAttr(spotcommerce_easy_text_picker[17]);
		var image_url_in_first_list = $(this).attr(spotcommerce_easy_text_picker[18]);
		if (image_url_in_first_list != null) {
			if (image_url_in_first_list.indexOf(spotcommerce_easy_text_picker[19]) != -1) {
				image_url_in_first_list = image_url_in_first_list.replace(spotcommerce_easy_text_picker[20], spotcommerce_easy_text_picker[21]);
				$(this).after(spotcommerce_easy_text_picker[22] + image_url_in_first_list + spotcommerce_easy_text_picker[23]);
				$(this).remove();
			} else if (image_url_in_first_list.indexOf(spotcommerce_easy_text_picker[24]) != -1) {
				if (image_url_in_first_list.indexOf(spotcommerce_easy_text_picker[25]) != -1) {
					image_url_in_first_list = image_url_in_first_list.replace(spotcommerce_easy_text_picker[26], spotcommerce_easy_text_picker[27]);
					$(this).after(spotcommerce_easy_text_picker[28] + image_url_in_first_list + spotcommerce_easy_text_picker[29]);
					$(this).remove();
				}
			}
		}
	});
}
spotcommerce_thumbnail_handler();
$(window).resize(function () {
	spotcommerce_thumbnail_handler();
});

// alternative callback 
function spotcommerce_call_back_alternative(json) {
	if (typeof(padding_for_format) == spotcommerce_easy_text_picker[30]) {
		var padding_for_format = spotcommerce_easy_text_picker[31];
	}
	if (typeof(showing_item_content_package) == spotcommerce_easy_text_picker[32]) {
		var showing_item_content_package = 150;
	}
	if (typeof(return_default_work_package) == spotcommerce_easy_text_picker[33]) {
		var return_default_work_package = spotcommerce_easy_text_picker[34];
	}
	var spot_commerce_int_collector = new Object();
	var special_mapping_all_content_filter = /<\S[^>]*>/g;
	spot_commerce_int_collector.id = spotcommerce_easy_text_picker[35];
	spot_commerce_int_collector.published = spotcommerce_easy_text_picker[36];
	spot_commerce_int_collector.cate = new Array();
	spot_commerce_int_collector.title = spotcommerce_easy_text_picker[37];
	spot_commerce_int_collector.content = spotcommerce_easy_text_picker[38];
	spot_commerce_int_collector.summary = spotcommerce_easy_text_picker[39];
	spot_commerce_int_collector.link = spotcommerce_easy_text_picker[40];
	spot_commerce_int_collector.reply_label = spotcommerce_easy_text_picker[41];
	spot_commerce_int_collector.author = new Object();
	spot_commerce_int_collector.author.name = spotcommerce_easy_text_picker[42];
	spot_commerce_int_collector.author.uri = spotcommerce_easy_text_picker[43];
	spot_commerce_int_collector.author.avatar = spotcommerce_easy_text_picker[44];
	spot_commerce_int_collector.thumbnail = spotcommerce_easy_text_picker[45];
	spot_commerce_int_collector.reply_number = 0;
	spot_commerce_int_collector.pid = spotcommerce_easy_text_picker[46];

	if (spotcommerce_easy_text_picker[47]in json) {
		var check_out_cart_holder = json.entry;
		spot_commerce_int_collector.id = check_out_cart_holder.id.$t;
		page_counter_01 = spotcommerce_easy_text_picker[48];
		random_map = spot_commerce_int_collector.id.indexOf(page_counter_01);
		spot_commerce_int_collector.id = spot_commerce_int_collector.id.substring(random_map + page_counter_01.length);
		if (spotcommerce_easy_text_picker[49]in check_out_cart_holder) {
			spot_commerce_int_collector.published = check_out_cart_holder.published.$t;
		}
		spot_commerce_int_collector.published = spotcommerce_wp_diff(spot_commerce_int_collector.published, padding_for_format);
		if (spotcommerce_easy_text_picker[50]in check_out_cart_holder) {
			for (level_8 = 0; level_8 < check_out_cart_holder.category.length; level_8++) {
				spot_commerce_int_collector.cate[level_8] = check_out_cart_holder.category[level_8].term;
			}
		}
		if (spotcommerce_easy_text_picker[51]in check_out_cart_holder) {
			spot_commerce_int_collector.title = check_out_cart_holder.title.$t;
		}
		if (spotcommerce_easy_text_picker[52]in check_out_cart_holder) {
			spot_commerce_int_collector.content = check_out_cart_holder.content.$t;
		}
		if (spotcommerce_easy_text_picker[53]in check_out_cart_holder) {
			spot_commerce_int_collector.summary = check_out_cart_holder.summary.$t;
		}
		if (spot_commerce_int_collector.summary == spotcommerce_easy_text_picker[54]) {
			spot_commerce_int_collector.summary = spot_commerce_int_collector.content.replace(special_mapping_all_content_filter, spotcommerce_easy_text_picker[55]);
		}
		if (spot_commerce_int_collector.content == spotcommerce_easy_text_picker[56]) {
			spot_commerce_int_collector.content = spot_commerce_int_collector.summary;
		}
		if (spot_commerce_int_collector.summary.length > showing_item_content_package) {
			spot_commerce_int_collector.summary = spot_commerce_int_collector.summary.substring(0, showing_item_content_package) + spotcommerce_easy_text_picker[57];
		}
		if (spotcommerce_easy_text_picker[58]in check_out_cart_holder) {
			for (level_8 = 0; level_8 < check_out_cart_holder.link.length; level_8++) {
				if (check_out_cart_holder.link[level_8].rel == spotcommerce_easy_text_picker[59]) {
					spot_commerce_int_collector.link = check_out_cart_holder.link[level_8].href;
				}
				if (check_out_cart_holder.link[level_8].rel == spotcommerce_easy_text_picker[60]) {
					spot_commerce_int_collector.reply_label = check_out_cart_holder.link[level_8].title;
				}
			}
		}
		a0 = check_out_cart_holder.author[0];
		if (spotcommerce_easy_text_picker[61]in a0) {
			spot_commerce_int_collector.author.name = a0.name.$t;
		}
		if (spotcommerce_easy_text_picker[62]in a0) {
			spot_commerce_int_collector.author.uri = a0.uri.$t;
		}
		if (spotcommerce_easy_text_picker[63]in a0) {
			if (a0.gd$image.src != spotcommerce_easy_text_picker[64]) {
				spot_commerce_int_collector.author.avatar = a0.gd$image.src;
			}
		}
		spot_commerce_int_collector.thumbnail = spotcommerce_easy_text_picker[65];
		if (spot_commerce_int_collector.thumbnail == spotcommerce_easy_text_picker[66] && spotcommerce_easy_text_picker[67]in check_out_cart_holder) {
			spot_commerce_int_collector.thumbnail = check_out_cart_holder.media$thumbnail.url;
		}
		if (spot_commerce_int_collector.thumbnail == spotcommerce_easy_text_picker[68]) {
			spot_commerce_int_collector.thumbnail = return_default_work_package;
		}
		if (spotcommerce_easy_text_picker[69]in check_out_cart_holder) {
			spot_commerce_int_collector.reply_number = Number(check_out_cart_holder.thr$total.$t);
		}
		spot_commerce_int_collector.reply_label = spot_commerce_int_collector.reply_label.replace(spot_commerce_int_collector.reply_number + spotcommerce_easy_text_picker[70], spotcommerce_easy_text_picker[71]);
		spot_commerce_int_collector.reply_to = spotcommerce_easy_text_picker[72];
		spot_commerce_int_collector.reply_json = spotcommerce_easy_text_picker[73];
		spot_commerce_int_collector.reply_title = spotcommerce_easy_text_picker[74];

		if (spotcommerce_easy_text_picker[75]in check_out_cart_holder) {
			spot_commerce_int_collector.reply_to = check_out_cart_holder[spotcommerce_easy_text_picker[76]].href;
			spot_commerce_int_collector.reply_json = check_out_cart_holder[spotcommerce_easy_text_picker[77]].source;
			spot_commerce_int_collector.reply_json = spot_commerce_int_collector.reply_json.replace(spotcommerce_easy_text_picker[78], spotcommerce_easy_text_picker[79]);
			spot_commerce_int_collector.reply_json = spot_commerce_int_collector.reply_json + spotcommerce_easy_text_picker[80];
		}
		if (spotcommerce_easy_text_picker[81]in check_out_cart_holder) {
			for (level_8 = 0; level_8 < check_out_cart_holder.gd$extendedProperty.length; level_8++) {
				if (check_out_cart_holder.gd$extendedProperty[level_8].name == spotcommerce_easy_text_picker[82]) {
					spot_commerce_int_collector.pid = check_out_cart_holder.gd$extendedProperty[level_8].value;
				}
			}
		}
		spot_commerce_int_collector.pid = spot_commerce_int_collector.pid.replace(spotcommerce_easy_text_picker[83], spotcommerce_easy_text_picker[84]);
	}
	return spot_commerce_int_collector;
}

// primary call back
function spotcommerce_call_back_primary(json) {
	if (typeof(padding_for_format) == spotcommerce_easy_text_picker[85]) {
		var padding_for_format = spotcommerce_easy_text_picker[86];
	}
	if (typeof(showing_item_content_package) == spotcommerce_easy_text_picker[87]) {
		var showing_item_content_package = 150;
	}
	if (typeof(return_default_work_package) == spotcommerce_easy_text_picker[88]) {
		var return_default_work_package = spotcommerce_easy_text_picker[89];
	}
	var spot_commert_special_collector = new Object();
	var special_mapping_all_content_filter = /<\S[^>]*>/g;
	spot_commert_special_collector.id = json.feed.id.$t;
	var page_counter_01 = spotcommerce_easy_text_picker[90];
	var random_map = spot_commert_special_collector.id.indexOf(page_counter_01);
	spot_commert_special_collector.id = spot_commert_special_collector.id.substring(random_map + page_counter_01.length);
	spot_commert_special_collector.id = spot_commert_special_collector.id.replace(spotcommerce_easy_text_picker[91], spotcommerce_easy_text_picker[92]);
	spot_commert_special_collector.cate = new Array();
	if (spotcommerce_easy_text_picker[93]in json.feed) {
		for (level_1 = 0; level_1 < json.feed.category.length; level_1++) {
			spot_commert_special_collector.cate[level_1] = json.feed.category[level_1].term;
		}
	}
	spot_commert_special_collector.title = spotcommerce_easy_text_picker[94];
	if (spotcommerce_easy_text_picker[95]in json.feed) {
		spot_commert_special_collector.title = json.feed.title.$t;
	}
	spot_commert_special_collector.subtitle = spotcommerce_easy_text_picker[96];
	if (spotcommerce_easy_text_picker[97]in json.feed) {
		spot_commert_special_collector.subtitle = json.feed.subtitle.$t;
	}
	spot_commert_special_collector.admin = new Object();
	spot_commert_special_collector.admin.name = spotcommerce_easy_text_picker[98];
	spot_commert_special_collector.admin.uri = spotcommerce_easy_text_picker[99];
	spot_commert_special_collector.admin.avatar = spotcommerce_easy_text_picker[100];
	if (spotcommerce_easy_text_picker[101]in json.feed.author[0]) {
		spot_commert_special_collector.admin.name = json.feed.author[0].name.$t;
	}
	if (spotcommerce_easy_text_picker[102]in json.feed.author[0]) {
		spot_commert_special_collector.admin.uri = json.feed.author[0].uri.$t;
	}
	if (spotcommerce_easy_text_picker[103]in json.feed.author[0]) {
		if (json.feed.author[0].gd$image.src != spotcommerce_easy_text_picker[104]) {
			spot_commert_special_collector.admin.avatar = json.feed.author[0].gd$image.src;
		}
	}
	spot_commert_special_collector.total_entry = Number(json.feed.openSearch$totalResults.$t);
	spot_commert_special_collector.start_index = Number(json.feed.openSearch$startIndex.$t);
	spot_commert_special_collector.item_per_page = Number(json.feed.openSearch$itemsPerPage.$t);
	spot_commert_special_collector.entry_number = 0;
	if (spotcommerce_easy_text_picker[105]in json.feed) {
		spot_commert_special_collector.entry_number = json.feed.entry.length;
	}
	spot_commert_special_collector.entry = new Array();
	for (level_1 = 0; level_1 < spot_commert_special_collector.entry_number; level_1++) {
		spot_commert_special_collector.entry[level_1] = new Object();
		var spot_commerce_int_collector = new Object();
		var check_out_cart_holder = json.feed.entry[level_1];
		spot_commerce_int_collector.id = check_out_cart_holder.id.$t;
		page_counter_01 = spotcommerce_easy_text_picker[106];
		random_map = spot_commerce_int_collector.id.indexOf(page_counter_01);
		spot_commerce_int_collector.id = spot_commerce_int_collector.id.substring(random_map + page_counter_01.length);
		spot_commerce_int_collector.published = spotcommerce_easy_text_picker[107];
		if (spotcommerce_easy_text_picker[108]in check_out_cart_holder) {
			spot_commerce_int_collector.published = check_out_cart_holder.published.$t;
		}
		spot_commerce_int_collector.published = spotcommerce_wp_diff(spot_commerce_int_collector.published, padding_for_format);
		spot_commerce_int_collector.cate = new Array();
		if (spotcommerce_easy_text_picker[109]in check_out_cart_holder) {
			for (level_8 = 0; level_8 < check_out_cart_holder.category.length; level_8++) {
				spot_commerce_int_collector.cate[level_8] = check_out_cart_holder.category[level_8].term;
			}
		}
		spot_commerce_int_collector.title = spotcommerce_easy_text_picker[110];
		if (spotcommerce_easy_text_picker[111]in check_out_cart_holder) {
			spot_commerce_int_collector.title = check_out_cart_holder.title.$t;
		}
		spot_commerce_int_collector.content = spotcommerce_easy_text_picker[112];
		if (spotcommerce_easy_text_picker[113]in check_out_cart_holder) {
			spot_commerce_int_collector.content = check_out_cart_holder.content.$t;
		}
		spot_commerce_int_collector.summary = spotcommerce_easy_text_picker[114];
		if (spotcommerce_easy_text_picker[115]in check_out_cart_holder) {
			spot_commerce_int_collector.summary = check_out_cart_holder.summary.$t;
		}
		if (spot_commerce_int_collector.summary == spotcommerce_easy_text_picker[116]) {
			spot_commerce_int_collector.summary = spot_commerce_int_collector.content.replace(special_mapping_all_content_filter, spotcommerce_easy_text_picker[117]);
		}
		if (spot_commerce_int_collector.content == spotcommerce_easy_text_picker[118]) {
			spot_commerce_int_collector.content = spot_commerce_int_collector.summary;
		}
		if (spot_commerce_int_collector.summary.length > showing_item_content_package) {
			spot_commerce_int_collector.summary = spot_commerce_int_collector.summary.substring(0, showing_item_content_package) + spotcommerce_easy_text_picker[119];
		}
		spot_commerce_int_collector.link = spotcommerce_easy_text_picker[120];
		spot_commerce_int_collector.reply_label = spotcommerce_easy_text_picker[121];
		if (spotcommerce_easy_text_picker[122]in check_out_cart_holder) {
			for (level_8 = 0; level_8 < check_out_cart_holder.link.length; level_8++) {
				if (check_out_cart_holder.link[level_8].rel == spotcommerce_easy_text_picker[123]) {
					spot_commerce_int_collector.link = check_out_cart_holder.link[level_8].href;
				}
				if (check_out_cart_holder.link[level_8].rel == spotcommerce_easy_text_picker[124]) {
					spot_commerce_int_collector.reply_label = check_out_cart_holder.link[level_8].title;
				}
			}
		}
		spot_commerce_int_collector.author = new Object();
		spot_commerce_int_collector.author.name = spotcommerce_easy_text_picker[125];
		spot_commerce_int_collector.author.uri = spotcommerce_easy_text_picker[126];
		spot_commerce_int_collector.author.avatar = spotcommerce_easy_text_picker[127];
		a0 = check_out_cart_holder.author[0];
		if (spotcommerce_easy_text_picker[128]in a0) {
			spot_commerce_int_collector.author.name = a0.name.$t;
		}
		if (spotcommerce_easy_text_picker[129]in a0) {
			spot_commerce_int_collector.author.uri = a0.uri.$t;
		}
		if (spotcommerce_easy_text_picker[130]in a0) {
			if (a0.gd$image.src != spotcommerce_easy_text_picker[131]) {
				spot_commerce_int_collector.author.avatar = a0.gd$image.src;
			}
		}
		spot_commerce_int_collector.thumbnail = spotcommerce_easy_text_picker[132];
		if (spot_commerce_int_collector.thumbnail == spotcommerce_easy_text_picker[133] && spotcommerce_easy_text_picker[134]in check_out_cart_holder) {
			spot_commerce_int_collector.thumbnail = check_out_cart_holder.media$thumbnail.url;
		}
		if (spot_commerce_int_collector.thumbnail == spotcommerce_easy_text_picker[135]) {
			spot_commerce_int_collector.thumbnail = return_default_work_package;
		}
		spot_commerce_int_collector.reply_number = 0;
		if (spotcommerce_easy_text_picker[136]in check_out_cart_holder) {
			spot_commerce_int_collector.reply_number = Number(check_out_cart_holder.thr$total.$t);
		}
		spot_commerce_int_collector.reply_label = spot_commerce_int_collector.reply_label.replace(spot_commerce_int_collector.reply_number + spotcommerce_easy_text_picker[137], spotcommerce_easy_text_picker[138]);
		spot_commerce_int_collector.reply_to = spotcommerce_easy_text_picker[139];
		spot_commerce_int_collector.reply_json = spotcommerce_easy_text_picker[140];
		spot_commerce_int_collector.reply_title = spotcommerce_easy_text_picker[141];
		if (spotcommerce_easy_text_picker[142]in check_out_cart_holder) {
			spot_commerce_int_collector.reply_to = check_out_cart_holder[spotcommerce_easy_text_picker[143]].href;
			spot_commerce_int_collector.reply_json = check_out_cart_holder[spotcommerce_easy_text_picker[144]].source;
			spot_commerce_int_collector.reply_json = spot_commerce_int_collector.reply_json.replace(spotcommerce_easy_text_picker[145], spotcommerce_easy_text_picker[146]);
			spot_commerce_int_collector.reply_json = spot_commerce_int_collector.reply_json + spotcommerce_easy_text_picker[147];
		}
		spot_commerce_int_collector.pid = spotcommerce_easy_text_picker[148];
		if (spotcommerce_easy_text_picker[149]in check_out_cart_holder) {
			for (level_8 = 0; level_8 < check_out_cart_holder.gd$extendedProperty.length; level_8++) {
				if (check_out_cart_holder.gd$extendedProperty[level_8].name == spotcommerce_easy_text_picker[150]) {
					spot_commerce_int_collector.pid = check_out_cart_holder.gd$extendedProperty[level_8].value;
				}
			}
		}
		spot_commerce_int_collector.pid = spot_commerce_int_collector.pid.replace(spotcommerce_easy_text_picker[151], spotcommerce_easy_text_picker[152]);
		spot_commert_special_collector.entry[level_1] = spot_commerce_int_collector;
	}
	return spot_commert_special_collector;
}

// diff format
function spotcommerce_wp_diff(pub_date, format) {
	pub_date = pub_date.split(spotcommerce_easy_text_picker[153]);
	simple_padding_format = new Date(pub_date[0], pub_date[1] - 1, pub_date[2].substring(0, 2));
	dd = simple_padding_format.getDate();
	mm = simple_padding_format.getMonth() + 1;
	yyyy = simple_padding_format.getFullYear();
	format = format.replace(spotcommerce_easy_text_picker[154], dd);
	format = format.replace(spotcommerce_easy_text_picker[155], mm);
	format = format.replace(spotcommerce_easy_text_picker[156], yyyy);
	return format;
}

/*express lib*/
// space check
function spotcommerce_space_check() {
	if (spotcommerce_easy_text_picker[157]in document) {
		return true;
	}
	return false;
}

// space write
function spotcommerce_space_write(c_name, merchant_data, exdays) {
	if (!spotcommerce_space_check()) {
		return false;
	}
	var target_column = new Date();
	target_column.setDate(target_column.getDate() + exdays);
	var add_match_data = escape(merchant_data) + ((exdays == null) ? '' : spotcommerce_easy_text_picker[158] + target_column.toUTCString()) + spotcommerce_easy_text_picker[159];
	document.cookie = c_name + spotcommerce_easy_text_picker[160] + add_match_data;
	if (spotcommerce_space_send(c_name) !== merchant_data) {
		return false;
	}
	return true;
}

// space spare pool
function spotcommerce_space_pool() {
	if (spotcommerce_space_write(spotcommerce_easy_text_picker[161], spotcommerce_easy_text_picker[162])) {
		return true;
	}
	return false;
}

// space send
function spotcommerce_space_send(c_name) {
	if (!spotcommerce_space_check()) {
		return spotcommerce_easy_text_picker[163];
	}
	var level_1,
	x,
	y,
	ARRcookies = document.cookie.split(spotcommerce_easy_text_picker[164]);
	for (level_1 = 0; level_1 < ARRcookies.length; level_1++) {
		x = ARRcookies[level_1].substr(0, ARRcookies[level_1].indexOf(spotcommerce_easy_text_picker[165]));
		y = ARRcookies[level_1].substr(ARRcookies[level_1].indexOf(spotcommerce_easy_text_picker[166]) + 1);
		x = x.replace(/^\s+|\s+$/g, spotcommerce_easy_text_picker[167]);
		if (x == c_name) {
			return unescape(y);
		}
	}
	return spotcommerce_easy_text_picker[168];
}

// space ready
function spotcommerce_space_ready() {
	if (typeof(localStorage) !== spotcommerce_easy_text_picker[169]) {
		return true;
	}
	return false;
}

// space insert
function spotcommerce_space_insert(page_counter_01, merchant_data) {
	if (spotcommerce_space_ready()) {
		localStorage.setItem(page_counter_01, merchant_data);
		return true;
	}
	return false;
}

// space load
function spotcommerce_space_load(page_counter_01) {
	if (spotcommerce_space_ready()) {
		var item_in_cart_recheck = localStorage.getItem(page_counter_01);
		if (item_in_cart_recheck) {
			return item_in_cart_recheck;
		}
	}
	return spotcommerce_easy_text_picker[170];
}

// adpated wp_diff
function spotcommerce_wp_hum_diff() {
	var simple_padding_format = new Date();
	var member_card = simple_padding_format.getTime();
	member_card += simple_padding_format.getSeconds();
	member_card += simple_padding_format.getMinutes();
	member_card += simple_padding_format.getHours();
	member_card += simple_padding_format.getDay();
	member_card += simple_padding_format.getDate();
	member_card += simple_padding_format.getMonth();
	member_card += simple_padding_format.getFullYear();
	return member_card;
}

// adapted wp_option
function spotcommerce_wp_option_meta(page_counter_01, extra_content_holder) {
	if (spotcommerce_space_pool()) {
		return spotcommerce_space_write(page_counter_01, extra_content_holder, 365);
	} else if (spotcommerce_space_ready()) {
		return spotcommerce_space_insert(page_counter_01, extra_content_holder);
	}
	return false;
}

// adapted wp_out
function spotcommerce_wp_option_out(page_counter_01, extra_content_holder) {
	if (spotcommerce_space_pool()) {
		return spotcommerce_space_send(page_counter_01);
	} else if (spotcommerce_space_ready()) {
		return spotcommerce_space_load(page_counter_01);
	}
	return spotcommerce_easy_text_picker[171];
}

// on parent
function spotcommerce_on_parent() {
	var context_link_href = window.location.href;
	var head_load = context_link_href.indexOf(spotcommerce_easy_text_picker[172]);
	if (head_load != -1) {
		context_link_href = context_link_href.substring(0, head_load);
	}
	head_load = context_link_href.indexOf(spotcommerce_easy_text_picker[173]);
	if (head_load != -1) {
		context_link_href = context_link_href.substring(0, head_load);
	}
	head_load = context_link_href.indexOf(spotcommerce_easy_text_picker[174]);
	if (head_load != -1) {
		context_link_href = context_link_href.substring(head_load + 3);
	}
	head_load = context_link_href.indexOf(spotcommerce_easy_text_picker[175]);
	if (head_load == context_link_href.length - 1) {
		context_link_href = context_link_href.substring(0, head_load);
	}
	if (context_link_href == window.location.hostname) {
		return true;
	}
	return false;
}

// on list
function spotcommerce_on_list() {
	var context_link_href = window.location.href;
	if (context_link_href.indexOf(spotcommerce_easy_text_picker[176]) != -1 || context_link_href.indexOf(spotcommerce_easy_text_picker[177]) != -1) {
		return true;
	}
	return false;
}

// on find
function spotcommerce_on_find() {
	var context_link_href = window.location.href;
	if (context_link_href.indexOf(spotcommerce_easy_text_picker[178]) != -1) {
		return true;
	}
	return false;
}

// on lab
function spotcommerce_on_lab() {
	var context_link_href = window.location.href;
	if (context_link_href.indexOf(spotcommerce_easy_text_picker[179]) != -1) {
		return true;
	}
	return false;
}

// on record
function spotcommerce_on_recorder() {
	if (spotcommerce_on_list() || spotcommerce_on_parent() || spotcommerce_on_lab() || spotcommerce_on_find()) {
		return true;
	}
	return false;
}

// on static
function spotcommerce_on_static() {
	var context_link_href = window.location.href;
	if (context_link_href.indexOf(spotcommerce_easy_text_picker[180]) != -1) {
		return true;
	}
	return false;
}

// on entry
function spotcommerce_on_entry() {
	var context_link_href = window.location.href;
	if (!spotcommerce_on_static() && !spotcommerce_on_list() && context_link_href.indexOf(spotcommerce_easy_text_picker[181]) != -1) {
		return true;
	}
	return false;
}

// on single
function spotcommerce_on_single() {
	if (spotcommerce_on_static() || spotcommerce_on_entry()) {
		return true;
	}
	return false;
}

// on p-list
function spotcommerce_on_pre_list() {
	var context_link_href = window.location.href;
	if (context_link_href.indexOf(spotcommerce_easy_text_picker[182]) != -1 || context_link_href.indexOf(spotcommerce_easy_text_picker[183]) != -1) {
		return true;
	}
	return false;
}

// on o-list
function spotcommerce_on_out_list() {
	var context_link_href = window.location.href;
	if (context_link_href.indexOf(spotcommerce_easy_text_picker[184]) != -1 || context_link_href.indexOf(spotcommerce_easy_text_picker[185]) != -1) {
		return true;
	}
	return false;
}

// on wait list
function spotcommerce_on_waiting_list() {
	var context_link_href = window.location.href;
	if (context_link_href.indexOf(spotcommerce_easy_text_picker[186]) != -1 || context_link_href.indexOf(spotcommerce_easy_text_picker[187]) != -1) {
		return true;
	}
	return false;
}

// on checker
function spotcommerce_on_checker() {
	var context_link_href = window.location.href;
	if (context_link_href.indexOf(spotcommerce_easy_text_picker[188]) != -1) {
		return true;
	}
	return false;
}

// on error
function spotcommerce_on_error() {
	if (!spotcommerce_on_recorder() && !spotcommerce_on_single() && !spotcommerce_on_pre_list() && !spotcommerce_on_out_list() && !spotcommerce_on_waiting_list() && !spotcommerce_on_checker()) {
		return true;
	}
	return false;
}

// on manager
function spotcommerce_on_manage() {
	var page_counter_01 = spotcommerce_easy_text_picker[189];
	var total_data = spotcommerce_easy_text_picker[190];
	if (spotcommerce_space_pool()) {
		if (spotcommerce_space_send(page_counter_01) == total_data) {
			spotcommerce_space_write(page_counter_01, total_data, 300);
			return true;
		}
	} else if (spotcommerce_space_ready) {
		if (localStorage.getItem(page_counter_01) == total_data) {
			localStorage.setItem(page_counter_01, total_data);
			return true;
		}
	}
	if ($(spotcommerce_easy_text_picker[191]).length) {
		var setting_member = false;
		$(spotcommerce_easy_text_picker[192]).each(function () {
			if (!setting_member) {
				if ($(this).css(spotcommerce_easy_text_picker[193]) != spotcommerce_easy_text_picker[194]) {
					if (spotcommerce_space_pool()) {
						spotcommerce_space_write(page_counter_01, total_data, 300);
					} else if (spotcommerce_space_ready) {
						localStorage.setItem(page_counter_01, total_data);
					}
					setting_member = true;
				}
			}
		});
		if (setting_member) {
			return true;
		}
	}
	if (spotcommerce_on_checker()) {
		if (spotcommerce_space_pool()) {
			spotcommerce_space_write(page_counter_01, total_data, 300);
		} else if (spotcommerce_space_ready) {
			localStorage.setItem(page_counter_01, total_data);
		}
		return true;
	}
	return false;
}

// padding ammout
function spotcommerce_padding_amount(waiting_list_pre_pay_amount) {
	var paypal_amount = spotcommerce_easy_text_picker[195];
	var paypal_float = spotcommerce_easy_text_picker[196];
	waiting_list_pre_pay_amount = waiting_list_pre_pay_amount.toString();
	var random_map = waiting_list_pre_pay_amount.indexOf(spotcommerce_easy_text_picker[197]);
	if (random_map != -1) {
		paypal_amount = waiting_list_pre_pay_amount.substring(0, random_map);
		paypal_float = waiting_list_pre_pay_amount.substring(random_map + 1);
	} else {
		paypal_amount = waiting_list_pre_pay_amount;
	}
	if (paypal_amount.length <= 3) {
		return waiting_list_pre_pay_amount;
	}

	// loop and separate long price
	new_price = spotcommerce_easy_text_picker[198];
	for (var level_1 = paypal_amount.length - 1, level_8 = 1; level_1 >= 0; level_1 -= 1, level_8++) {
		new_price += paypal_amount.substring(level_1, level_1 + 1);
		if (level_8 % 3 == 0 && level_8 < paypal_amount.length) {
			new_price += SEP_LONG_PRICE;
		}
	}
	paypal_amount = spotcommerce_easy_text_picker[199];
	for (var level_1 = new_price.length - 1; level_1 >= 0; level_1 -= 1) {
		paypal_amount += new_price.substring(level_1, level_1 + 1);
	}
	waiting_list_pre_pay_amount = paypal_amount;
	if (paypal_float) {
		waiting_list_pre_pay_amount += spotcommerce_easy_text_picker[200] + paypal_float;
	}
	return waiting_list_pre_pay_amount;
}

// box checker
function spotcommerce_box_checker() {
	try {
		return window.self !== window.top;
	} catch (object_format_link) {
		return true;
	}
}
if (spotcommerce_on_pre_list() || spotcommerce_on_waiting_list() || spotcommerce_on_out_list()) {
	$(spotcommerce_easy_text_picker[201]).html(spotcommerce_easy_text_picker[202]);
	$(spotcommerce_easy_text_picker[203]).remove();
}

// empty checker
function spotcommerce_empty_checker(properties) {
	if (properties.length) {
		for (var level_1 = 0; level_1 < properties.length; level_1++) {
			var merchant_data = spotcommerce_easy_text_picker[204];
			if (typeof(properties[level_1]) !== spotcommerce_easy_text_picker[205]) {
				merchant_data = $(properties[level_1]).html();
			} else {
				merchant_data = properties[level_1];
			}
			if (merchant_data === spotcommerce_easy_text_picker[206]) {
				return true;
			}
		}
	}
	return false;
}

// attributes
function spotcommerce_attributes(properties) {
	var paypal_method_1 = spotcommerce_easy_text_picker[207];
	var paypal_method_2 = spotcommerce_easy_text_picker[208];
	var action_api_link = spotcommerce_easy_text_picker[209];
	if (properties.length) {
		for (var level_1 = 0; level_1 < properties.length; level_1++) {
			var merchant_data = spotcommerce_easy_text_picker[210];
			if (typeof(properties[level_1]) !== spotcommerce_easy_text_picker[211]) {
				merchant_data = $(properties[level_1]).html();
			} else {
				merchant_data = properties[level_1];
			}
			if (merchant_data && merchant_data.length > 1 && !isNaN(merchant_data.substring(1))) {
				if (merchant_data.indexOf(spotcommerce_easy_text_picker[212]) == 0) {
					paypal_method_1 = merchant_data.substring(1);
				} else if (merchant_data.indexOf(spotcommerce_easy_text_picker[213]) == 0) {
					paypal_method_2 = merchant_data.substring(1);
				}
			}
			if (merchant_data === spotcommerce_easy_text_picker[214]) {
				action_api_link = spotcommerce_easy_text_picker[215] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[216]) + spotcommerce_easy_text_picker[217];
			}
		}
	}
	if (!action_api_link) {
		if (paypal_method_1 && paypal_method_2) {

			// make api link before send
			action_api_link = spotcommerce_easy_text_picker[218] 
						+ spotcommerce_translated_mapper(spotcommerce_easy_text_picker[219]) 
						+ spotcommerce_easy_text_picker[220] 
						+ paypal_method_2 
						+ spotcommerce_easy_text_picker[221] 
						+ CURRENCY_BEFORE 
						+ spotcommerce_padding_amount(paypal_method_2) 
						+ CURRENCY_AFTER 
						+ spotcommerce_easy_text_picker[222] 
						+ paypal_method_1 
						+ spotcommerce_easy_text_picker[223] 
						+ CURRENCY_BEFORE 
						+ spotcommerce_padding_amount(paypal_method_1) 
						+ CURRENCY_AFTER 
						+ spotcommerce_easy_text_picker[224];

		} else if (paypal_method_1) {
			// switch in case use method 1
			action_api_link = spotcommerce_easy_text_picker[225] + paypal_method_1 + spotcommerce_easy_text_picker[226] + CURRENCY_BEFORE + spotcommerce_padding_amount(paypal_method_1) + CURRENCY_AFTER + spotcommerce_easy_text_picker[227];
		}
	}
	return action_api_link;
}

// random map
var random_map = 0;
$(spotcommerce_easy_text_picker[228]).each(function () {
	if (random_map % 2 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[229]);
	} else {
		$(this).addClass(spotcommerce_easy_text_picker[230]);
	}
	if (random_map % 3 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[231]);
	}
	if (random_map % 4 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[232]);
	}
	random_map++;
});
random_map = 0;
$(spotcommerce_easy_text_picker[233]).each(function () {
	if (random_map % 2 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[234]);
	} else {
		$(this).addClass(spotcommerce_easy_text_picker[235]);
	}
	if (random_map % 3 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[236]);
	}
	if (random_map % 4 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[237]);
	}
	random_map++;
});

// reset map and increasing from beginning
random_map = 0;
$(spotcommerce_easy_text_picker[238]).each(function () {
	if (random_map % 2 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[239]);
	} else {
		$(this).addClass(spotcommerce_easy_text_picker[240]);
	}
	if (random_map % 3 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[241]);
	}
	if (random_map % 4 == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[242]);
	}
	random_map++;
});

// counter for pages
$(spotcommerce_easy_text_picker[243]).each(function () {
	var page_counter_01 = $(this).attr(spotcommerce_easy_text_picker[244]);
	if (page_counter_01) {
		$(this).html(spotcommerce_translated_mapper(page_counter_01));
	}
});
$(spotcommerce_easy_text_picker[245]).each(function () {
	$(this).val(spotcommerce_translated_mapper(spotcommerce_easy_text_picker[246]));
});
$(spotcommerce_easy_text_picker[247]).each(function () {
	$(this).attr(spotcommerce_easy_text_picker[248], spotcommerce_translated_mapper(spotcommerce_easy_text_picker[249]));
});

// remake class for content holder
$(spotcommerce_easy_text_picker[250]).each(function () {
	var extra_content_holder = $(this).html();
	if (extra_content_holder.indexOf(spotcommerce_easy_text_picker[251]) == 0) {
		$(this).addClass(spotcommerce_easy_text_picker[252]);
		extra_content_holder = extra_content_holder.replace(/_/gi, spotcommerce_easy_text_picker[253]);
		$(this).html(extra_content_holder);
	}
});
$(spotcommerce_easy_text_picker[254]).click(function () {
	var select_list_worker = $(spotcommerce_easy_text_picker[255]);
	var item_showing_option = select_list_worker.css(spotcommerce_easy_text_picker[256]);
	if (item_showing_option === spotcommerce_easy_text_picker[257]) {
		select_list_worker.slideDown(300);
		menu_still_in = true;
	} else {
		select_list_worker.slideUp(300);
	}
});

// slide down if showing option enable for select list worker
$(spotcommerce_easy_text_picker[258]).hover(function () {
	var select_list_worker = $(spotcommerce_easy_text_picker[259]);
	var item_showing_option = select_list_worker.css(spotcommerce_easy_text_picker[260]);
	if (item_showing_option === spotcommerce_easy_text_picker[261]) {
		select_list_worker.slideDown(300);
	}
});
$(spotcommerce_easy_text_picker[262]).mouseleave(function (object_format_link) {
	var select_list_worker = $(spotcommerce_easy_text_picker[263]);
	var item_showing_option = select_list_worker.css(spotcommerce_easy_text_picker[264]);
	if (item_showing_option !== spotcommerce_easy_text_picker[265]) {
		if (!spotcommerce_in_check_spot(object_format_link.pageX, object_format_link.pageY, select_list_worker)) {
			select_list_worker.slideUp(300);
		}
	}
});
$(spotcommerce_easy_text_picker[266]).mouseleave(function (object_format_link) {
	if (!spotcommerce_in_check_spot(object_format_link.pageX, object_format_link.pageY, $(spotcommerce_easy_text_picker[267]))) {
		$(this).slideUp(300);
	}
});

// gadget parser
function spotcommerce_gadget_parser(list, member_card) {
	if (member_card === spotcommerce_easy_text_picker[268]) {
		string_attachment = $(spotcommerce_easy_text_picker[269]);
		string_attachment.html(spotcommerce_easy_text_picker[270]);
		for (var level_1 = 0; level_1 < list.length; level_1++) {
			var extra_content_counter = spotcommerce_easy_text_picker[271];
			var more_information = list[level_1].caption;
			var click_here_action = spotcommerce_easy_text_picker[272];
			if (more_information && more_information.indexOf(spotcommerce_easy_text_picker[273]) != -1 && more_information.indexOf(spotcommerce_easy_text_picker[274]) != -1) {
				var head_load = more_information.indexOf(spotcommerce_easy_text_picker[275]);
				var tail_counter_to_check = more_information.indexOf(spotcommerce_easy_text_picker[276], head_load);
				if (tail_counter_to_check !== -1) {
					click_here_action = more_information.substring(head_load + 1, tail_counter_to_check);
					if (tail_counter_to_check + 1 < more_information.length) {
						more_information = more_information.substring(0, head_load);
					} else {
						more_information = more_information.substring(0, head_load) + more_information.substring(tail_counter_to_check + 1);
					}
				}
			}
			var name_for_displaying = list[level_1].title;
			var sub_name_for_displaying = spotcommerce_easy_text_picker[277];
			if (name_for_displaying.indexOf(spotcommerce_easy_text_picker[278]) != -1 && name_for_displaying.indexOf(spotcommerce_easy_text_picker[279]) != -1) {
				var head_load = name_for_displaying.indexOf(spotcommerce_easy_text_picker[280]);
				var tail_counter_to_check = name_for_displaying.indexOf(spotcommerce_easy_text_picker[281], head_load);
				if (tail_counter_to_check !== -1) {
					sub_name_for_displaying = name_for_displaying.substring(head_load + 1, tail_counter_to_check);
					if (tail_counter_to_check + 1 < name_for_displaying.length) {
						name_for_displaying = name_for_displaying.substring(0, head_load);
					} else {
						name_for_displaying = name_for_displaying.substring(0, head_load) + name_for_displaying.substring(tail_counter_to_check + 1);
					}
				}
			}
			extra_content_counter += spotcommerce_easy_text_picker[282];
			var extra_holder_key = spotcommerce_easy_text_picker[283];
			if (sub_name_for_displaying) {
				extra_holder_key += spotcommerce_easy_text_picker[284] + list[level_1].href + spotcommerce_easy_text_picker[285] + sub_name_for_displaying + spotcommerce_easy_text_picker[286];
			}
			if (name_for_displaying) {
				extra_holder_key += spotcommerce_easy_text_picker[287] + list[level_1].href + spotcommerce_easy_text_picker[288] + name_for_displaying + spotcommerce_easy_text_picker[289];
			}
			if (more_information) {
				extra_holder_key += spotcommerce_easy_text_picker[290] + list[level_1].href + spotcommerce_easy_text_picker[291] + more_information + spotcommerce_easy_text_picker[292];
			}
			if (click_here_action) {
				extra_holder_key += spotcommerce_easy_text_picker[293] + list[level_1].href + spotcommerce_easy_text_picker[294] + click_here_action + spotcommerce_easy_text_picker[295];
			}
			if (extra_holder_key) {
				extra_content_counter += spotcommerce_easy_text_picker[296] + extra_holder_key + spotcommerce_easy_text_picker[297];
			}
			if (list[level_1].src) {
				extra_content_counter += spotcommerce_easy_text_picker[298] + list[level_1].href + spotcommerce_easy_text_picker[299] + list[level_1].src + spotcommerce_easy_text_picker[300];
			}
			extra_content_counter += spotcommerce_easy_text_picker[301];
			string_attachment.append(extra_content_counter);
		}
		if ($(spotcommerce_easy_text_picker[302]).length) {
			string_attachment.slider_rtl({
				animation_speed : Slider_Animation_Speed,
				pause_time : Slider_Pause_Time,
				control : Slider_Control,
				pause_when_hover : Slider_Pause_When_Hover
			});
		} else {
			string_attachment.slider({
				animation_speed : Slider_Animation_Speed,
				pause_time : Slider_Pause_Time,
				control : Slider_Control,
				pause_when_hover : Slider_Pause_When_Hover
			});
		}
	}
}

// dynamic pointer
function spotcommerce_dynamic_pointer() {
	$(spotcommerce_easy_text_picker[303]).each(function () {
		var padding_format_content = $(spotcommerce_easy_text_picker[304]).offset().left;
		var padding_format_text = $(this).offset().left;
		var padding_format_wide = $(this).width();
		var padding_format_length = padding_format_text + padding_format_wide / 2;
		var item_point_collector = $(spotcommerce_easy_text_picker[305]);
		var len_re_get = item_point_collector.width();
		var len_re_get_wide = Math.sqrt(2) * len_re_get / 2;
		var len_re_get_depth = padding_format_length - len_re_get_wide - padding_format_content;
		item_point_collector.css(spotcommerce_easy_text_picker[306], len_re_get_depth + spotcommerce_easy_text_picker[307]);
	});
}
if (spotcommerce_on_pre_list() || spotcommerce_on_out_list() || spotcommerce_on_waiting_list()) {
	$(spotcommerce_easy_text_picker[308]).remove();
	$(spotcommerce_easy_text_picker[309]).prepend(spotcommerce_easy_text_picker[310]);
} else {
	spotcommerce_dynamic_pointer();
	$(spotcommerce_easy_text_picker[311]).click(function () {
		$(spotcommerce_easy_text_picker[312]).removeClass(spotcommerce_easy_text_picker[313]);
		$(this).addClass(spotcommerce_easy_text_picker[314]);
		spotcommerce_dynamic_pointer();
	});
}
$(spotcommerce_easy_text_picker[315]).click(function () {
	$(spotcommerce_easy_text_picker[316]).fadeIn(200);
	$(spotcommerce_easy_text_picker[317]).animate({
		top : spotcommerce_easy_text_picker[318],
		opacity : 1
	}, 400, spotcommerce_easy_text_picker[319]);
});
$(spotcommerce_easy_text_picker[320]).click(function () {
	$(spotcommerce_easy_text_picker[321]).fadeOut(200);
	$(spotcommerce_easy_text_picker[322]).animate({
		top : spotcommerce_easy_text_picker[323],
		opacity : 0
	}, 300);
});
$(spotcommerce_easy_text_picker[324]).keydown(function (object_format_link) {
	if (object_format_link.keyCode == 27) {
		if ($(spotcommerce_easy_text_picker[325]).css(spotcommerce_easy_text_picker[326]) !== spotcommerce_easy_text_picker[327]) {
			$(spotcommerce_easy_text_picker[328]).fadeOut(200);
			$(spotcommerce_easy_text_picker[329]).animate({
				top : spotcommerce_easy_text_picker[330],
				opacity : 0
			}, 300);
		}
	}
});
$(spotcommerce_easy_text_picker[331]).each(function () {
	$(this).append(spotcommerce_attributes($(this).find(spotcommerce_easy_text_picker[332])));
	if ($(this).find(spotcommerce_easy_text_picker[333]).length) {
		$(this).find(spotcommerce_easy_text_picker[334]).each(function () {
			$(this).html(spotcommerce_easy_text_picker[335] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[336]) + spotcommerce_easy_text_picker[337]);
			$(this).addClass(spotcommerce_easy_text_picker[338]);
		});
	} else {
		if ($(this).find(spotcommerce_easy_text_picker[339]).length) {
			$(this).find(spotcommerce_easy_text_picker[340]).each(function () {
				$(this).html(spotcommerce_easy_text_picker[341] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[342]) + spotcommerce_easy_text_picker[343]);
				$(this).removeAttr(spotcommerce_easy_text_picker[344]);
			});
		}
	}
});
$(spotcommerce_easy_text_picker[345]).click(function () {
	$(spotcommerce_easy_text_picker[346]).removeClass(spotcommerce_easy_text_picker[347]);
	$(this).addClass(spotcommerce_easy_text_picker[348]);
	if ($(this).is(spotcommerce_easy_text_picker[349])) {
		$(spotcommerce_easy_text_picker[350]).fadeIn();
		$(spotcommerce_easy_text_picker[351]).fadeOut();
		$(spotcommerce_easy_text_picker[352]).fadeOut();
	} else if ($(this).is(spotcommerce_easy_text_picker[353])) {
		$(spotcommerce_easy_text_picker[354]).fadeOut();
		$(spotcommerce_easy_text_picker[355]).fadeIn();
		$(spotcommerce_easy_text_picker[356]).fadeOut();
	} else if ($(this).is(spotcommerce_easy_text_picker[357])) {
		$(spotcommerce_easy_text_picker[358]).fadeOut();
		$(spotcommerce_easy_text_picker[359]).fadeOut();
		$(spotcommerce_easy_text_picker[360]).fadeIn();
	}
	spotcommerce_thumbnail_handler();
});
var short_list_google_search_cate_index = new Array();
var short_list_google_search_cart_graph = new Array();
$(spotcommerce_easy_text_picker[361]).each(function () {
	var drop_spin_title = $(this).html();
	if (drop_spin_title && drop_spin_title.length > 1 && !isNaN(drop_spin_title.substring(1))) {
		if (drop_spin_title.indexOf(spotcommerce_easy_text_picker[362]) == 0) {
			return;
		} else if (drop_spin_title.indexOf(spotcommerce_easy_text_picker[363]) == 0) {
			return;
		}
	}
	if (drop_spin_title === spotcommerce_easy_text_picker[364]) {
		return;
	}
	var random_map = short_list_google_search_cate_index.length;
	short_list_google_search_cate_index[random_map] = new Object();
	short_list_google_search_cate_index[random_map].count = Number($(this).attr(spotcommerce_easy_text_picker[365]));
	short_list_google_search_cate_index[random_map].url = $(this).attr(spotcommerce_easy_text_picker[366]);
	short_list_google_search_cate_index[random_map].name = drop_spin_title;
});
$(spotcommerce_easy_text_picker[367]).each(function () {
	var drop_spin_title = $(this).html();
	if (drop_spin_title && drop_spin_title.length > 1 && !isNaN(drop_spin_title.substring(1))) {
		if (drop_spin_title.indexOf(spotcommerce_easy_text_picker[368]) == 0) {
			short_list_google_search_cart_graph[short_list_google_search_cart_graph.length] = drop_spin_title;
			return;
		} else if (drop_spin_title.indexOf(spotcommerce_easy_text_picker[369]) == 0) {
			short_list_google_search_cart_graph[short_list_google_search_cart_graph.length] = drop_spin_title;
			return;
		}
	}
	if (drop_spin_title === spotcommerce_easy_text_picker[370]) {
		short_list_google_search_cart_graph[short_list_google_search_cart_graph.length] = drop_spin_title;
		return;
	}
});
for (var level_1 = 0; level_1 < short_list_google_search_cate_index.length - 1; level_1++) {
	for (var level_8 = level_1 + 1; level_8 < short_list_google_search_cate_index.length; level_8++) {
		if (short_list_google_search_cate_index[level_1].count < short_list_google_search_cate_index[level_8].count) {
			var spot_commerce_int_collector = short_list_google_search_cate_index[level_1];
			short_list_google_search_cate_index[level_1] = short_list_google_search_cate_index[level_8];
			short_list_google_search_cate_index[level_8] = spot_commerce_int_collector;
		}
	}
}
var short_list_google_search_links = false;
$(spotcommerce_easy_text_picker[371]).each(function () {
	var view_out_content = spotcommerce_easy_text_picker[372] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[373]) + spotcommerce_easy_text_picker[374];
	if (spotcommerce_on_lab()) {
		var context_link_href = window.location.href;
		for (var level_1 = 0; level_1 < short_list_google_search_cate_index.length; level_1++) {
			if (context_link_href.indexOf(short_list_google_search_cate_index[level_1].url) != -1) {
				view_out_content += spotcommerce_easy_text_picker[375] + short_list_google_search_cate_index[level_1].url + spotcommerce_easy_text_picker[376] + short_list_google_search_cate_index[level_1].name + spotcommerce_easy_text_picker[377];
				break;
			}
		}
	} else if (spotcommerce_on_entry()) {
		for (var level_1 = 0; level_1 < short_list_google_search_cate_index.length; level_1++) {
			$(spotcommerce_easy_text_picker[378]).each(function () {
				if ($(this).attr(spotcommerce_easy_text_picker[379]) === short_list_google_search_cate_index[level_1].url) {
					if (!short_list_google_search_links) {
						short_list_google_search_links = new Object();
					}
					short_list_google_search_links.href = $(this).attr(spotcommerce_easy_text_picker[380]);
					short_list_google_search_links.name = $(this).html();
					view_out_content += spotcommerce_easy_text_picker[381] + short_list_google_search_cate_index[level_1].url + spotcommerce_easy_text_picker[382] + short_list_google_search_cate_index[level_1].name + spotcommerce_easy_text_picker[383];
				}
			});
		}
	} else if (spotcommerce_on_static()) {}
	else if (spotcommerce_on_error()) {
		view_out_content += spotcommerce_easy_text_picker[384];
		var name_for_displaying = $(spotcommerce_easy_text_picker[385]).html();
		name_for_displaying = name_for_displaying.replace(spotcommerce_easy_text_picker[386], spotcommerce_easy_text_picker[387]);
		$(spotcommerce_easy_text_picker[388]).html(name_for_displaying);
	} else if (spotcommerce_on_list()) {
		view_out_content += spotcommerce_easy_text_picker[389] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[390]) + spotcommerce_easy_text_picker[391];
	} else if (spotcommerce_on_pre_list()) {
		view_out_content += spotcommerce_easy_text_picker[392] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[393]) + spotcommerce_easy_text_picker[394];
		var name_for_displaying = $(spotcommerce_easy_text_picker[395]).html();
		name_for_displaying = name_for_displaying.replace(spotcommerce_easy_text_picker[396], spotcommerce_translated_mapper(spotcommerce_easy_text_picker[397]));
		$(spotcommerce_easy_text_picker[398]).html(name_for_displaying);
	} else if (spotcommerce_on_out_list()) {
		view_out_content += spotcommerce_easy_text_picker[399] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[400]) + spotcommerce_easy_text_picker[401];
		var name_for_displaying = $(spotcommerce_easy_text_picker[402]).html();
		name_for_displaying = name_for_displaying.replace(spotcommerce_easy_text_picker[403], spotcommerce_translated_mapper(spotcommerce_easy_text_picker[404]));
		$(spotcommerce_easy_text_picker[405]).html(name_for_displaying);
	} else if (spotcommerce_on_waiting_list()) {
		view_out_content += spotcommerce_easy_text_picker[406] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[407]) + spotcommerce_easy_text_picker[408];
		var name_for_displaying = $(spotcommerce_easy_text_picker[409]).html();
		name_for_displaying = name_for_displaying.replace(spotcommerce_easy_text_picker[410], spotcommerce_translated_mapper(spotcommerce_easy_text_picker[411]));
		$(spotcommerce_easy_text_picker[412]).html(name_for_displaying);
	}
	$(this).html(view_out_content);
});
$(spotcommerce_easy_text_picker[413]).each(function () {
	var content_hook = $(this).html();
	for (var level_1 = 0; level_1 < 1000; level_1++) {
		if (!content_hook) {
			break;
		}
		var string_attachment = content_hook.indexOf(spotcommerce_easy_text_picker[414]);
		if (string_attachment == -1) {
			break;
		}
		var object_format_link = content_hook.indexOf(spotcommerce_easy_text_picker[415], string_attachment + 2);
		if (object_format_link == -1) {
			break;
		}
		var show_format_image = content_hook.substring(string_attachment + 2, object_format_link);
		content_hook = content_hook.substring(0, string_attachment) + spotcommerce_easy_text_picker[416] + show_format_image + spotcommerce_easy_text_picker[417] + content_hook.substring(object_format_link + 2);
	}
	$(this).html(content_hook);
});
var gadget_link_objects = new Array();
$(spotcommerce_easy_text_picker[418]).each(function () {
	if ($(this).attr(spotcommerce_easy_text_picker[419])) {
		gadget_link_objects[gadget_link_objects.length] = $(this).attr(spotcommerce_easy_text_picker[420]);
		$(this).next().each(function () {
			if ($(this).is(spotcommerce_easy_text_picker[421])) {
				$(this).remove();
			}
		});
		$(this).parent(spotcommerce_easy_text_picker[422]).each(function () {
			$(this).next().each(function () {
				if ($(this).is(spotcommerce_easy_text_picker[423])) {
					$(this).remove();
				}
			});
			$(this).parent(spotcommerce_easy_text_picker[424]).each(function () {
				$(this).next().each(function () {
					if ($(this).is(spotcommerce_easy_text_picker[425])) {
						$(this).remove();
					}
				});
			});
		});
		$(this).parent(spotcommerce_easy_text_picker[426]).each(function () {
			$(this).next().each(function () {
				if ($(this).is(spotcommerce_easy_text_picker[427])) {
					$(this).remove();
				}
			});
		});
		$(this).parent(spotcommerce_easy_text_picker[428]).each(function () {
			$(this).remove();
		});
		$(this).parent(spotcommerce_easy_text_picker[429]).each(function () {
			$(this).parent(spotcommerce_easy_text_picker[430]).each(function () {
				$(this).remove();
			});
			$(this).remove();
		});
		$(this).remove();
	}
});
if (gadget_link_objects.length) {
	$(spotcommerce_easy_text_picker[431]).html(function () {
		var item_in_cart_recheck = spotcommerce_easy_text_picker[432];
		item_in_cart_recheck += spotcommerce_easy_text_picker[433];
		for (var level_1 = 0; level_1 < gadget_link_objects.length; level_1++) {
			if (level_1 == 0) {
				item_in_cart_recheck += spotcommerce_easy_text_picker[434] + gadget_link_objects[level_1] + spotcommerce_easy_text_picker[435];
			} else {
				item_in_cart_recheck += spotcommerce_easy_text_picker[436] + gadget_link_objects[level_1] + spotcommerce_easy_text_picker[437];
			}
		}
		item_in_cart_recheck += spotcommerce_easy_text_picker[438];
		if (gadget_link_objects.length > 1) {
			item_in_cart_recheck += spotcommerce_easy_text_picker[439];
			for (var level_1 = 0; level_1 < gadget_link_objects.length; level_1++) {
				item_in_cart_recheck += spotcommerce_easy_text_picker[440] + gadget_link_objects[level_1] + spotcommerce_easy_text_picker[441];
			}
			item_in_cart_recheck += spotcommerce_easy_text_picker[442];
		}
		return item_in_cart_recheck;
	});
	spotcommerce_thumbnail_handler();
	$(spotcommerce_easy_text_picker[443]).click(function () {
		$(this).find(spotcommerce_easy_text_picker[444]).each(function () {
			var image_url_in_first_list = $(this).attr(spotcommerce_easy_text_picker[445]);
			$(spotcommerce_easy_text_picker[446]).each(function () {
				if ($(this).css(spotcommerce_easy_text_picker[447]) == spotcommerce_easy_text_picker[448]) {
					$(this).animate({
						opacity : 0
					}, 100, function () {
						$(spotcommerce_easy_text_picker[449]).each(function () {
							if (image_url_in_first_list === $(this).find(spotcommerce_easy_text_picker[450]).attr(spotcommerce_easy_text_picker[451])) {
								$(this).animate({
									opacity : 1
								}, 100);
							}
						});
					});
				}
			});
		});
	});
}
var paypal_early_amount = 0;
var paypal_reject_boolean = false;
$(spotcommerce_easy_text_picker[452]).html(function () {
	var item_in_cart_recheck = spotcommerce_easy_text_picker[453] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[454]) + spotcommerce_easy_text_picker[455];
	var paypal_early_off_amount = false;
	for (var level_1 = 0; level_1 < short_list_google_search_cart_graph.length; level_1++) {
		drop_spin_title = short_list_google_search_cart_graph[level_1];
		if (drop_spin_title && drop_spin_title.length > 1 && !isNaN(drop_spin_title.substring(1)) && drop_spin_title.indexOf(spotcommerce_easy_text_picker[456]) == 0) {
			item_in_cart_recheck += spotcommerce_easy_text_picker[457] + CURRENCY_BEFORE + spotcommerce_padding_amount(drop_spin_title.substring(1)) + CURRENCY_AFTER + spotcommerce_easy_text_picker[458];
			paypal_early_off_amount = true;
			break;
		}
	}
	for (var level_1 = 0; level_1 < short_list_google_search_cart_graph.length; level_1++) {
		drop_spin_title = short_list_google_search_cart_graph[level_1];
		if (drop_spin_title && drop_spin_title.length > 1 && !isNaN(drop_spin_title.substring(1)) && drop_spin_title.indexOf(spotcommerce_easy_text_picker[459]) == 0) {
			paypal_early_amount = drop_spin_title.substring(1);
			item_in_cart_recheck += spotcommerce_easy_text_picker[460] + CURRENCY_BEFORE + spotcommerce_padding_amount(drop_spin_title.substring(1)) + CURRENCY_AFTER + spotcommerce_easy_text_picker[461];
			break;
		}
	}
	if (paypal_early_off_amount) {
		item_in_cart_recheck += spotcommerce_easy_text_picker[462] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[463]) + spotcommerce_easy_text_picker[464];
	}
	for (var level_1 = 0; level_1 < short_list_google_search_cart_graph.length; level_1++) {
		drop_spin_title = short_list_google_search_cart_graph[level_1];
		if (drop_spin_title && drop_spin_title.length > 1 && !isNaN(drop_spin_title.substring(1)) && drop_spin_title === spotcommerce_easy_text_picker[465]) {
			paypal_reject_boolean = true;
			item_in_cart_recheck += spotcommerce_easy_text_picker[466] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[467]) + spotcommerce_easy_text_picker[468];
			break;
		}
	}
	return item_in_cart_recheck;
});
var spot_commerce_active_list_counter = spotcommerce_easy_text_picker[469];
var spot_commerce_waiting_list_counter = spotcommerce_easy_text_picker[470];

// gadget checker
function spotcommerce_gadget_checker() {
	if (spotcommerce_space_pool() || spotcommerce_space_ready()) {
		return true;
	}
	return false;
}

// load package
function spotcommerce_package_load(page_counter_01) {
	var active_list_objects = new Array();
	var active_list_texts = spotcommerce_easy_text_picker[471];
	if (spotcommerce_space_pool()) {
		active_list_texts = spotcommerce_space_send(page_counter_01);
	} else if (spotcommerce_space_ready()) {
		active_list_texts = localStorage.getItem(page_counter_01);
	} else {
		return false;
	}
	if (active_list_texts) {
		active_list_texts = active_list_texts.split(spotcommerce_easy_text_picker[472]);
		for (var level_1 = 0; level_1 < active_list_texts.length; level_1++) {
			if (active_list_texts[level_1] && active_list_texts[level_1].indexOf(spotcommerce_easy_text_picker[473]) != -1 && active_list_texts[level_1].indexOf(spotcommerce_easy_text_picker[474]) != -1) {
				idx = active_list_objects.length;
				active_list_objects[idx] = new Object();
				active_list_objects[idx].id = active_list_texts[level_1].substring(0, active_list_texts[level_1].indexOf(spotcommerce_easy_text_picker[475]));
				active_list_objects[idx].number = Number(active_list_texts[level_1].substring(active_list_texts[level_1].indexOf(spotcommerce_easy_text_picker[476]) + 1, active_list_texts[level_1].indexOf(spotcommerce_easy_text_picker[477])));
			}
		}
	}
	if (active_list_objects.length) {
		return active_list_objects;
	}
	return false;
}

// send out package
function spotcommerce_package_send_out(page_counter_01, member_card, integer_record_list) {
	var active_list_objects = spotcommerce_package_load(page_counter_01);
	if (active_list_objects == false) {
		active_list_objects = new Array();
		active_list_objects[0] = new Object();
		active_list_objects[0].id = member_card;
		active_list_objects[0].number = integer_record_list;
	} else {
		for (var level_1 = 0; level_1 < active_list_objects.length; level_1++) {
			if (active_list_objects[level_1].id == member_card) {
				active_list_objects[level_1].number += integer_record_list;
				break;
			}
		}
		if (level_1 >= active_list_objects.length) {
			idx = active_list_objects.length;
			active_list_objects[idx] = new Object();
			active_list_objects[idx].id = member_card;
			active_list_objects[idx].number = integer_record_list;
		}
	}
	var active_list_texts = spotcommerce_easy_text_picker[478];
	for (var level_1 = 0; level_1 < active_list_objects.length; level_1++) {
		if (active_list_texts) {
			active_list_texts += spotcommerce_easy_text_picker[479];
		}
		active_list_texts += active_list_objects[level_1].id + spotcommerce_easy_text_picker[480] + active_list_objects[level_1].number + spotcommerce_easy_text_picker[481];
	}
	if (spotcommerce_space_pool()) {
		spotcommerce_space_write(page_counter_01, active_list_texts, CART_CACHE_DURATION);
	} else if (spotcommerce_space_ready) {
		localStorage.setItem(page_counter_01, active_list_texts);
	}
}

// come in
function spotcommerce_package_come_in(page_counter_01, member_card, integer_record_list) {
	var active_list_objects = spotcommerce_package_load(page_counter_01);
	if (active_list_objects) {
		for (var level_1 = 0; level_1 < active_list_objects.length; level_1++) {
			if (active_list_objects[level_1].id == member_card) {
				active_list_objects[level_1].number = integer_record_list;
				break;
			}
		}
		if (active_list_objects.length) {
			var active_list_texts = spotcommerce_easy_text_picker[482];
			for (var level_1 = 0; level_1 < active_list_objects.length; level_1++) {
				if (active_list_texts) {
					active_list_texts += spotcommerce_easy_text_picker[483];
				}
				active_list_texts += active_list_objects[level_1].id + spotcommerce_easy_text_picker[484] + active_list_objects[level_1].number + spotcommerce_easy_text_picker[485];
			}
			if (spotcommerce_space_pool()) {
				spotcommerce_space_write(page_counter_01, active_list_texts, CART_CACHE_DURATION);
			} else if (spotcommerce_space_ready) {
				localStorage.setItem(page_counter_01, active_list_texts);
			}
			return true;
		}
	}
	return false;
}

// empty package
function spotcommerce_package_empty(page_counter_01, member_card) {
	var active_list_objects = spotcommerce_package_load(page_counter_01);
	if (active_list_objects) {
		for (var level_1 = 0; level_1 < active_list_objects.length; level_1++) {
			if (active_list_objects[level_1].id == member_card) {
				active_list_objects[level_1].number = 0;
				break;
			}
		}
		if (level_1 >= active_list_objects.length) {
			return false;
		}
		if (active_list_objects.length) {
			var active_list_texts = spotcommerce_easy_text_picker[486];
			for (var level_1 = 0; level_1 < active_list_objects.length; level_1++) {
				if (active_list_objects[level_1].number) {
					if (active_list_texts) {
						active_list_texts += spotcommerce_easy_text_picker[487];
					}
					active_list_texts += active_list_objects[level_1].id + spotcommerce_easy_text_picker[488] + active_list_objects[level_1].number + spotcommerce_easy_text_picker[489];
				}
			}
			if (spotcommerce_space_pool()) {
				spotcommerce_space_write(page_counter_01, active_list_texts, CART_CACHE_DURATION);
			} else if (spotcommerce_space_ready) {
				localStorage.setItem(page_counter_01, active_list_texts);
			}
			return true;
		}
	}
	return false;
}

// package wipe
function spotcommerce_package_wipe(page_counter_01) {
	if (spotcommerce_space_pool()) {
		spotcommerce_space_write(page_counter_01, spotcommerce_easy_text_picker[490]);
		return true;
	} else if (spotcommerce_space_ready) {
		localStorage.removeItem(page_counter_01);
		return true;
	}
	return false;
}
if (spotcommerce_gadget_checker()) {
	$(spotcommerce_easy_text_picker[491]).removeClass(spotcommerce_easy_text_picker[492]).attr(spotcommerce_easy_text_picker[493], spotcommerce_translated_mapper(spotcommerce_easy_text_picker[494]));
	$(spotcommerce_easy_text_picker[495]).removeClass(spotcommerce_easy_text_picker[496]).attr(spotcommerce_easy_text_picker[497], spotcommerce_translated_mapper(spotcommerce_easy_text_picker[498]));
}
$(spotcommerce_easy_text_picker[499]).html(function () {
	var level_24 = spotcommerce_easy_text_picker[500];
	var member_card = $(this).attr(spotcommerce_easy_text_picker[501]);
	if (spotcommerce_gadget_checker() && !paypal_reject_boolean) {
		if (!paypal_reject_boolean) {
			level_24 += spotcommerce_easy_text_picker[502];
			level_24 += spotcommerce_easy_text_picker[503];
			level_24 += spotcommerce_easy_text_picker[504];
			level_24 += spotcommerce_easy_text_picker[505] + member_card + spotcommerce_easy_text_picker[506] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[507]) + spotcommerce_easy_text_picker[508] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[509]) + spotcommerce_easy_text_picker[510];
			level_24 += spotcommerce_easy_text_picker[511];
			level_24 += spotcommerce_easy_text_picker[512];
		}
		level_24 += spotcommerce_easy_text_picker[513];
		level_24 += spotcommerce_easy_text_picker[514] + member_card + spotcommerce_easy_text_picker[515] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[516]) + spotcommerce_easy_text_picker[517];
		level_24 += spotcommerce_easy_text_picker[518];
		level_24 += spotcommerce_easy_text_picker[519];
		level_24 += spotcommerce_easy_text_picker[520];
		level_24 += spotcommerce_easy_text_picker[521];
		level_24 += spotcommerce_easy_text_picker[522];
	}
	return level_24;
});

$(spotcommerce_easy_text_picker[523]).click(function () {
	var active_list_amount_pre_cal = Number($(spotcommerce_easy_text_picker[524]).html());
	if ($(this).is(spotcommerce_easy_text_picker[525])) {
		active_list_amount_pre_cal++;
	} else {
		if (active_list_amount_pre_cal > 1) {
			active_list_amount_pre_cal -= 1;
		}
	}
	$(spotcommerce_easy_text_picker[526]).html(active_list_amount_pre_cal);
});

// tgl counter
function spotcommerce_tgl_counter(page_counter_01) {
	var slt_picker = $(spotcommerce_easy_text_picker[527]);
	if (page_counter_01 == spot_commerce_waiting_list_counter) {
		slt_picker = $(spotcommerce_easy_text_picker[528]);
	}
	var active_list_objects = spotcommerce_package_load(page_counter_01);
	slt_picker.find(spotcommerce_easy_text_picker[529]).remove();
	if (active_list_objects) {
		slt_picker.find(spotcommerce_easy_text_picker[530]).each(function () {
			$(spotcommerce_easy_text_picker[531] + active_list_objects.length + spotcommerce_easy_text_picker[532]).insertAfter($(this));
		});
	}
}
spotcommerce_tgl_counter(spot_commerce_active_list_counter);

// pre list
function spotcommerce_package_pre_lst(object_format_link) {
	if (!$(object_format_link).is(spotcommerce_easy_text_picker[533])) {
		var integer_record_list = 1;
		if ($(object_format_link).find(spotcommerce_easy_text_picker[534]).length) {
			integer_record_list = Number($(object_format_link).find(spotcommerce_easy_text_picker[535]).text());
		}
		var member_card = $(object_format_link).attr(spotcommerce_easy_text_picker[536]);
		if (member_card && integer_record_list) {
			spotcommerce_package_send_out(spot_commerce_active_list_counter, member_card, integer_record_list);
			spotcommerce_tgl_counter(spot_commerce_active_list_counter);
			if ($(object_format_link).find(spotcommerce_easy_text_picker[537]).length) {
				$(object_format_link).parents(spotcommerce_easy_text_picker[538]).each(function () {
					$(this).find(spotcommerce_easy_text_picker[539]).each(function () {
						$(spotcommerce_easy_text_picker[540]).html(spotcommerce_easy_text_picker[541] + $(this).html() + spotcommerce_easy_text_picker[542] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[543]) + spotcommerce_easy_text_picker[544] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[545]) + spotcommerce_easy_text_picker[546]);
					});
				});
			}
			if ($(object_format_link).is(spotcommerce_easy_text_picker[547])) {
				$(object_format_link).html(spotcommerce_easy_text_picker[548] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[549]));
			}
		}
	}
}
$(spotcommerce_easy_text_picker[550]).click(function () {
	spotcommerce_package_pre_lst($(this));
});
$(spotcommerce_easy_text_picker[551]).click(function () {
	if (!$(this).is(spotcommerce_easy_text_picker[552])) {
		var integer_record_list = 1;
		var member_card = $(this).attr(spotcommerce_easy_text_picker[553]);
		if (member_card) {
			spotcommerce_package_send_out(spot_commerce_waiting_list_counter, member_card, integer_record_list);
			$(this).parents(spotcommerce_easy_text_picker[554]).each(function () {
				$(this).find(spotcommerce_easy_text_picker[555]).each(function () {
					$(spotcommerce_easy_text_picker[556]).html(spotcommerce_easy_text_picker[557] + $(this).html() + spotcommerce_easy_text_picker[558] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[559]) + spotcommerce_easy_text_picker[560] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[561]) + spotcommerce_easy_text_picker[562]);
				});
			});
		}
	}
});
$(spotcommerce_easy_text_picker[563] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[564]) + spotcommerce_easy_text_picker[565] + CURRENCY_BEFORE + spotcommerce_easy_text_picker[566] + CURRENCY_AFTER + spotcommerce_easy_text_picker[567] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[568]) + spotcommerce_easy_text_picker[569] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[570]) + spotcommerce_easy_text_picker[571]).appendTo(spotcommerce_easy_text_picker[572]);
var list_of_tgl_objects = spotcommerce_package_load(spot_commerce_active_list_counter);
var list_of_tgl_counter = 0;
var list_of_tgl = false;
var list_of_tgl_content = spotcommerce_easy_text_picker[573];
var list_of_tgl_spinner = false;

// pre lst index
function spotcommerce_package_pre_lst_index() {
	if (!list_of_tgl) {
		$(spotcommerce_easy_text_picker[574]).hide();
		return;
	}
	if (list_of_tgl_spinner) {
		return;
	}
	list_of_tgl_spinner = true;
	$.get(Feed_URL + spotcommerce_easy_text_picker[575] + list_of_tgl_objects[list_of_tgl_counter].id + spotcommerce_easy_text_picker[576], function (json) {
		list_of_tgl_spinner = false;
		if (!list_of_tgl) {
			$(spotcommerce_easy_text_picker[577]).hide();
			return;
		}
		var list_of_tgl_blogger_list = spotcommerce_call_back_alternative(json);
		var paypal_method_1 = spotcommerce_easy_text_picker[578];
		if (list_of_tgl_blogger_list.cate.length) {
			for (var level_1 = 0; level_1 < list_of_tgl_blogger_list.cate.length; level_1++) {
				var merchant_data = list_of_tgl_blogger_list.cate[level_1];
				if (merchant_data && merchant_data.length > 1 && !isNaN(merchant_data.substring(1))) {
					if (merchant_data.indexOf(spotcommerce_easy_text_picker[579]) == 0) {
						paypal_method_1 = merchant_data.substring(1);
						break;
					}
				}
			}
		}
		if (list_of_tgl_blogger_list.id) {
			list_of_tgl_content += spotcommerce_easy_text_picker[580] + list_of_tgl_blogger_list.link + spotcommerce_easy_text_picker[581] + list_of_tgl_blogger_list.thumbnail + spotcommerce_easy_text_picker[582] + list_of_tgl_blogger_list.link + spotcommerce_easy_text_picker[583] + list_of_tgl_blogger_list.title + spotcommerce_easy_text_picker[584] + list_of_tgl_objects[list_of_tgl_counter].number + spotcommerce_easy_text_picker[585] + CURRENCY_BEFORE + spotcommerce_easy_text_picker[586] + paypal_method_1 + spotcommerce_easy_text_picker[587] + spotcommerce_padding_amount(paypal_method_1) + spotcommerce_easy_text_picker[588] + CURRENCY_AFTER + spotcommerce_easy_text_picker[589] + list_of_tgl_objects[list_of_tgl_counter].id + spotcommerce_easy_text_picker[590] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[591]) + spotcommerce_easy_text_picker[592];
			list_of_tgl_counter++;
			if (list_of_tgl_counter < list_of_tgl_objects.length) {
				spotcommerce_package_pre_lst_index();
			} else {
				$(spotcommerce_easy_text_picker[593]).html(list_of_tgl_content);
				$(spotcommerce_easy_text_picker[594]).remove();
				var waiting_list_pre_sub_enter = 0;
				$(spotcommerce_easy_text_picker[595]).each(function () {
					var waiting_list_pre_pay_amount = Number($(this).find(spotcommerce_easy_text_picker[596]).attr(spotcommerce_easy_text_picker[597]));
					var integer_record_list = Number($(this).find(spotcommerce_easy_text_picker[598]).html());
					waiting_list_pre_sub_enter += (waiting_list_pre_pay_amount * integer_record_list);
				});
				$(spotcommerce_easy_text_picker[599]).html(spotcommerce_padding_amount(waiting_list_pre_sub_enter));
				$(spotcommerce_easy_text_picker[600]).click(function () {
					var member_card = $(this).attr(spotcommerce_easy_text_picker[601]);
					spotcommerce_package_empty(spot_commerce_active_list_counter, member_card);
					spotcommerce_tgl_counter(spot_commerce_active_list_counter);
					spotcommerce_package_pre_lst_obj();
				});
			}
		} else {
			if (!spotcommerce_box_checker()) {
				alert(spotcommerce_easy_text_picker[602]);
			}
		}
	}, spotcommerce_easy_text_picker[603]).fail(function () {
		if (!spotcommerce_box_checker()) {
			alert(spotcommerce_easy_text_picker[604]);
		}
	});
}

// pre lst obj
function spotcommerce_package_pre_lst_obj() {
	if ($(spotcommerce_easy_text_picker[605]).find(spotcommerce_easy_text_picker[606]).length) {
		$(spotcommerce_easy_text_picker[607]).show();
		$(spotcommerce_easy_text_picker[608]).html(spotcommerce_easy_text_picker[609] + AJAX_LOADING_IMAGE + spotcommerce_easy_text_picker[610]);
		$(spotcommerce_easy_text_picker[611]).html(spotcommerce_easy_text_picker[612]);
		list_of_tgl_objects = spotcommerce_package_load(spot_commerce_active_list_counter);
		list_of_tgl_counter = 0;
		list_of_tgl_content = spotcommerce_easy_text_picker[613];
		if (list_of_tgl_objects !== false) {
			list_of_tgl = true;
			spotcommerce_package_pre_lst_index();
		}
	} else {
		$(spotcommerce_easy_text_picker[614]).hide();
	}
}
$(spotcommerce_easy_text_picker[615]).mouseenter(function () {
	if (list_of_tgl == false && (!$(this).is(spotcommerce_easy_text_picker[616]))) {
		spotcommerce_package_pre_lst_obj();
	}
});
$(spotcommerce_easy_text_picker[617]).mousedown(function () {
	if (list_of_tgl == false && (!$(this).is(spotcommerce_easy_text_picker[618]))) {
		spotcommerce_package_pre_lst_obj();
	}
});
$(spotcommerce_easy_text_picker[619]).mouseleave(function () {
	list_of_tgl = false;
	$(spotcommerce_easy_text_picker[620]).hide();
});
var wtin_lst_pointers = spotcommerce_package_load(spot_commerce_waiting_list_counter);
var wtin_lst_pointers_record = 0;

// package waiting lst
function spotcommerce_package_waiting_lst(o) {
	$(o).each(function () {
		member_card = $(this).attr(spotcommerce_easy_text_picker[621]);
		spotcommerce_package_empty(spot_commerce_waiting_list_counter, member_card);
		$(spotcommerce_easy_text_picker[622] + member_card + spotcommerce_easy_text_picker[623]).remove();
		if ($(spotcommerce_easy_text_picker[624]).length == 0) {
			$(spotcommerce_easy_text_picker[625]).prepend(spotcommerce_easy_text_picker[626] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[627]) + spotcommerce_easy_text_picker[628]);
		}
	});
}

// package waiting lst index
function spotcommerce_package_waiting_lst_index() {
	$.get(Feed_URL + spotcommerce_easy_text_picker[629] + wtin_lst_pointers[wtin_lst_pointers_record].id + spotcommerce_easy_text_picker[630], function (json) {
		var wtin_lst_pointers_blogger_eleemnts = spotcommerce_call_back_alternative(json);
		if (wtin_lst_pointers_blogger_eleemnts.id) {
			var content_hook = spotcommerce_easy_text_picker[631];
			var active_list_pre_enter = spotcommerce_easy_text_picker[632];
			if (wtin_lst_pointers_record % 2 == 0) {
				active_list_pre_enter += spotcommerce_easy_text_picker[633];
			} else {
				active_list_pre_enter += spotcommerce_easy_text_picker[634];
			}
			if (wtin_lst_pointers_record % 3 == 0) {
				active_list_pre_enter += spotcommerce_easy_text_picker[635];
			}
			if (wtin_lst_pointers_record % 4 == 0) {
				active_list_pre_enter += spotcommerce_easy_text_picker[636];
			}
			object_format_link = wtin_lst_pointers_blogger_eleemnts;
			content_hook += spotcommerce_easy_text_picker[637] + active_list_pre_enter + spotcommerce_easy_text_picker[638] + object_format_link.id + spotcommerce_easy_text_picker[639];
			content_hook += spotcommerce_easy_text_picker[640] + object_format_link.link + spotcommerce_easy_text_picker[641];
			content_hook += spotcommerce_easy_text_picker[642] + object_format_link.thumbnail + spotcommerce_easy_text_picker[643];
			content_hook += spotcommerce_easy_text_picker[644];
			content_hook += spotcommerce_easy_text_picker[645];
			content_hook += spotcommerce_easy_text_picker[646] + object_format_link.link + spotcommerce_easy_text_picker[647] + object_format_link.title + spotcommerce_easy_text_picker[648];
			if (!spotcommerce_empty_checker(object_format_link.cate)) {
				content_hook += spotcommerce_easy_text_picker[649] + object_format_link.id + spotcommerce_easy_text_picker[650] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[651]) + spotcommerce_easy_text_picker[652];
			} else {
				content_hook += spotcommerce_easy_text_picker[653] + object_format_link.link + spotcommerce_easy_text_picker[654] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[655]) + spotcommerce_easy_text_picker[656];
			}
			content_hook += spotcommerce_easy_text_picker[657];
			content_hook += spotcommerce_easy_text_picker[658] + object_format_link.id + spotcommerce_easy_text_picker[659] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[660]) + spotcommerce_easy_text_picker[661];
			content_hook += spotcommerce_easy_text_picker[662];
			content_hook += spotcommerce_attributes(object_format_link.cate);
			content_hook += spotcommerce_easy_text_picker[663];
			$(spotcommerce_easy_text_picker[664]).each(function () {
				$(content_hook).insertBefore($(this));
			});
			wtin_lst_pointers_record++;
			if (wtin_lst_pointers_record < wtin_lst_pointers.length) {
				spotcommerce_package_waiting_lst_index();
			} else {
				$(spotcommerce_easy_text_picker[665]).each(function () {
					$(this).remove();
				});
				spotcommerce_thumbnail_handler();
				$(spotcommerce_easy_text_picker[666]).click(function () {
					spotcommerce_package_pre_lst($(this));
				});
				$(spotcommerce_easy_text_picker[667]).click(function () {
					spotcommerce_package_waiting_lst($(this));
				});
			}
		} else {
			if (!spotcommerce_box_checker()) {
				alert(spotcommerce_easy_text_picker[668]);
			}
		}
	}, spotcommerce_easy_text_picker[669]).fail(function () {
		if (!spotcommerce_box_checker()) {
			alert(spotcommerce_easy_text_picker[670]);
		}
	});
}
if (spotcommerce_on_waiting_list()) {
	$(spotcommerce_easy_text_picker[671]).addClass(spotcommerce_easy_text_picker[672]);
	$(spotcommerce_easy_text_picker[673]).addClass(spotcommerce_easy_text_picker[674]);
	wtin_lst_pointers = spotcommerce_package_load(spot_commerce_waiting_list_counter);
	wtin_lst_pointers_record = 0;
	if (wtin_lst_pointers !== false && wtin_lst_pointers.length) {
		$(spotcommerce_easy_text_picker[675]).prepend(spotcommerce_easy_text_picker[676] + AJAX_LOADING_IMAGE + spotcommerce_easy_text_picker[677]);
		spotcommerce_package_waiting_lst_index();
	} else {
		$(spotcommerce_easy_text_picker[678]).prepend(spotcommerce_easy_text_picker[679] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[680]) + spotcommerce_easy_text_picker[681]);
	}
}
var act_lst_pointers = spotcommerce_package_load(spot_commerce_active_list_counter);
var act_lst_pointers_record = 0;
var act_lst_pointers_extracted = spotcommerce_easy_text_picker[682];
if (spotcommerce_on_pre_list()) {
	$(spotcommerce_easy_text_picker[683]).addClass(spotcommerce_easy_text_picker[684]);
	$(spotcommerce_easy_text_picker[685]).addClass(spotcommerce_easy_text_picker[686]);
	$(spotcommerce_easy_text_picker[687]).addClass(spotcommerce_easy_text_picker[688]);
	$(spotcommerce_easy_text_picker[689]).prepend(spotcommerce_easy_text_picker[690]);
	$(spotcommerce_easy_text_picker[691]).prepend(spotcommerce_easy_text_picker[692]);
	$(spotcommerce_easy_text_picker[693]).prepend(spotcommerce_easy_text_picker[694]);

	// inner function spotcommerce_package_lst_objects
	function spotcommerce_package_lst_objects() {
		$.get(Feed_URL + spotcommerce_easy_text_picker[695] + act_lst_pointers[act_lst_pointers_record].id + spotcommerce_easy_text_picker[696], function (json) {
			var list_of_tgl_blogger_list = spotcommerce_call_back_alternative(json);
			var paypal_method_1 = spotcommerce_easy_text_picker[697];
			if (list_of_tgl_blogger_list.cate.length) {
				for (var level_1 = 0; level_1 < list_of_tgl_blogger_list.cate.length; level_1++) {
					var merchant_data = list_of_tgl_blogger_list.cate[level_1];
					if (merchant_data && merchant_data.length > 1 && !isNaN(merchant_data.substring(1))) {
						if (merchant_data.indexOf(spotcommerce_easy_text_picker[698]) == 0) {
							paypal_method_1 = merchant_data.substring(1);
							break;
						}
					}
				}
			}
			if (list_of_tgl_blogger_list.id) {
				act_lst_pointers_extracted += spotcommerce_easy_text_picker[699] + list_of_tgl_blogger_list.id + spotcommerce_easy_text_picker[700] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[701]) + spotcommerce_easy_text_picker[702] + list_of_tgl_blogger_list.id + spotcommerce_easy_text_picker[703] + list_of_tgl_blogger_list.link + spotcommerce_easy_text_picker[704] + list_of_tgl_blogger_list.thumbnail + spotcommerce_easy_text_picker[705] + list_of_tgl_blogger_list.link + spotcommerce_easy_text_picker[706] + list_of_tgl_blogger_list.title + spotcommerce_easy_text_picker[707] + CURRENCY_BEFORE + spotcommerce_easy_text_picker[708] + list_of_tgl_blogger_list.id + spotcommerce_easy_text_picker[709] + paypal_method_1 + spotcommerce_easy_text_picker[710] + spotcommerce_padding_amount(paypal_method_1) + spotcommerce_easy_text_picker[711] + CURRENCY_AFTER + spotcommerce_easy_text_picker[712] + list_of_tgl_blogger_list.id + spotcommerce_easy_text_picker[713] + list_of_tgl_blogger_list.id + spotcommerce_easy_text_picker[714] + act_lst_pointers[act_lst_pointers_record].number + spotcommerce_easy_text_picker[715] + list_of_tgl_blogger_list.id + spotcommerce_easy_text_picker[716] + CURRENCY_BEFORE + spotcommerce_easy_text_picker[717] + spotcommerce_padding_amount(Number(paypal_method_1) * act_lst_pointers[act_lst_pointers_record].number) + spotcommerce_easy_text_picker[718] + CURRENCY_AFTER + spotcommerce_easy_text_picker[719];
				act_lst_pointers_record++;
				if (act_lst_pointers_record < act_lst_pointers.length) {
					spotcommerce_package_lst_objects();
				} else {
					if (act_lst_pointers_extracted) {
						act_lst_pointers_extracted = spotcommerce_easy_text_picker[720] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[721]) + spotcommerce_easy_text_picker[722] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[723]) + spotcommerce_easy_text_picker[724] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[725]) + spotcommerce_easy_text_picker[726] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[727]) + spotcommerce_easy_text_picker[728] + act_lst_pointers_extracted + spotcommerce_easy_text_picker[729];
						$(spotcommerce_easy_text_picker[730]).html(act_lst_pointers_extracted);
						var waiting_list_pre_sub_enter = 0;
						$(spotcommerce_easy_text_picker[731]).each(function () {
							var member_card = $(this).attr(spotcommerce_easy_text_picker[732]);
							var waiting_list_pre_pay_amount = Number($(spotcommerce_easy_text_picker[733] + member_card + spotcommerce_easy_text_picker[734]).attr(spotcommerce_easy_text_picker[735]));
							var integer_record_list = Number($(spotcommerce_easy_text_picker[736] + member_card + spotcommerce_easy_text_picker[737]).val());
							waiting_list_pre_sub_enter += (waiting_list_pre_pay_amount * integer_record_list);
						});
						$(spotcommerce_easy_text_picker[738]).html(spotcommerce_easy_text_picker[739] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[740]) + spotcommerce_easy_text_picker[741] + CURRENCY_BEFORE + spotcommerce_easy_text_picker[742] + spotcommerce_padding_amount(waiting_list_pre_sub_enter) + spotcommerce_easy_text_picker[743] + CURRENCY_AFTER + spotcommerce_easy_text_picker[744]);
						$(spotcommerce_easy_text_picker[745]).html(spotcommerce_easy_text_picker[746] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[747]) + spotcommerce_easy_text_picker[748] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[749]) + spotcommerce_easy_text_picker[750]);
						$(spotcommerce_easy_text_picker[751]).click(function () {
							var member_card = $(this).attr(spotcommerce_easy_text_picker[752]);
							var integer_record_list = Number($(spotcommerce_easy_text_picker[753] + member_card + spotcommerce_easy_text_picker[754]).val());
							if ($(this).is(spotcommerce_easy_text_picker[755])) {
								if (integer_record_list <= 1) {
									$(spotcommerce_easy_text_picker[756] + member_card + spotcommerce_easy_text_picker[757]).val(1);
									return;
								}
								integer_record_list -= 1;
							} else {
								integer_record_list++;
							}
							$(spotcommerce_easy_text_picker[758] + member_card + spotcommerce_easy_text_picker[759]).val(integer_record_list);
						});
						$(spotcommerce_easy_text_picker[760]).click(function () {
							$(spotcommerce_easy_text_picker[761]).each(function () {
								var member_card = $(this).attr(spotcommerce_easy_text_picker[762]);
								var integer_record_list = Number($(spotcommerce_easy_text_picker[763] + member_card + spotcommerce_easy_text_picker[764]).val());
								spotcommerce_package_come_in(spot_commerce_active_list_counter, member_card, integer_record_list);
							});
							spotcommerce_package_lst_display();
						});
						$(spotcommerce_easy_text_picker[765]).click(function () {
							var member_card = $(this).attr(spotcommerce_easy_text_picker[766]);
							spotcommerce_package_empty(spot_commerce_active_list_counter, member_card);
							spotcommerce_tgl_counter(spot_commerce_active_list_counter);
							spotcommerce_package_lst_display();
						});
					}
				}
			} else {
				if (!spotcommerce_box_checker()) {
					alert(spotcommerce_easy_text_picker[767]);
				}
			}
		}, spotcommerce_easy_text_picker[768]).fail(function () {
			if (!spotcommerce_box_checker()) {
				alert(spotcommerce_easy_text_picker[769]);
			}
		});
	}

	// inner function spotcommerce_package_lst_display
	function spotcommerce_package_lst_display() {
		act_lst_pointers = spotcommerce_package_load(spot_commerce_active_list_counter);
		act_lst_pointers_record = 0;
		act_lst_pointers_extracted = spotcommerce_easy_text_picker[770];
		$(spotcommerce_easy_text_picker[771]).html(spotcommerce_easy_text_picker[772]);
		$(spotcommerce_easy_text_picker[773]).html(spotcommerce_easy_text_picker[774]);
		$(spotcommerce_easy_text_picker[775]).html(spotcommerce_easy_text_picker[776]);
		if (act_lst_pointers) {
			$(spotcommerce_easy_text_picker[777]).html(spotcommerce_easy_text_picker[778] + AJAX_LOADING_IMAGE + spotcommerce_easy_text_picker[779]);
			spotcommerce_package_lst_objects();
		} else {
			$(spotcommerce_easy_text_picker[780]).prepend(spotcommerce_easy_text_picker[781] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[782]) + spotcommerce_easy_text_picker[783]);
		}
	}
	spotcommerce_package_lst_display();
}


var invs_object = new Object();
invs_object.items = new Array();
invs_object.id = spotcommerce_wp_hum_diff();
invs_object.total = 0;
invs_object.shipvalue = SHIPPING_FEE;
invs_object.invinf = new Object();
invs_object.buyerinf = new Object();
invs_object.invinf.country = spotcommerce_easy_text_picker[784];
invs_object.invinf.firstname = spotcommerce_easy_text_picker[785];
invs_object.invinf.lastname = spotcommerce_easy_text_picker[786];
invs_object.invinf.companyname = spotcommerce_easy_text_picker[787];
invs_object.invinf.address = spotcommerce_easy_text_picker[788];
invs_object.invinf.towncitystate = spotcommerce_easy_text_picker[789];
invs_object.invinf.postcodezip = spotcommerce_easy_text_picker[790];
invs_object.invinf.email = spotcommerce_easy_text_picker[791];
invs_object.invinf.phone = spotcommerce_easy_text_picker[792];
invs_object.buyerinf.country = spotcommerce_easy_text_picker[793];
invs_object.buyerinf.firstname = spotcommerce_easy_text_picker[794];
invs_object.buyerinf.lastname = spotcommerce_easy_text_picker[795];
invs_object.buyerinf.companyname = spotcommerce_easy_text_picker[796];
invs_object.buyerinf.address = spotcommerce_easy_text_picker[797];
invs_object.buyerinf.towncitystate = spotcommerce_easy_text_picker[798];
invs_object.buyerinf.postcodezip = spotcommerce_easy_text_picker[799];
invs_object.payment_methods = spotcommerce_easy_text_picker[800];
invs_object.order_notes = spotcommerce_easy_text_picker[801];

var invs_object_lst = spotcommerce_package_load(spot_commerce_active_list_counter);
var invs_object_lst_record = 0;
var invs_object_lst_extracted_content = spotcommerce_easy_text_picker[802];

// package out lst
function spotcommerce_package_out_lst() {
	var item_in_cart_recheck = true;
	var sub_validator_list = $(spotcommerce_easy_text_picker[803]).is(spotcommerce_easy_text_picker[804]);
	var slt_picker = spotcommerce_easy_text_picker[805];
	if (sub_validator_list) {
		slt_picker = $(spotcommerce_easy_text_picker[806]);
	} else {
		slt_picker = $(spotcommerce_easy_text_picker[807]);
	}
	if (slt_picker.length) {
		slt_picker.find(spotcommerce_easy_text_picker[808]).each(function () {
			if (!($(this).val())) {
				item_in_cart_recheck = false;
			} else {
				if ($(this).attr(spotcommerce_easy_text_picker[809]).indexOf(spotcommerce_easy_text_picker[810]) != -1) {
					var prepare_e_address = $(this).val();
					if (prepare_e_address.indexOf(spotcommerce_easy_text_picker[811]) < 1 || prepare_e_address.indexOf(spotcommerce_easy_text_picker[812]) < 3) {
						item_in_cart_recheck = false;
					}
					if (prepare_e_address.length < 6) {
						item_in_cart_recheck = false;
					}
				} else if ($(this).attr(spotcommerce_easy_text_picker[813]).indexOf(spotcommerce_easy_text_picker[814]) != -1) {
					var prepare_e_number = $(this).val();
					if (prepare_e_number.indexOf(spotcommerce_easy_text_picker[815]) == 0) {
						prepare_e_number = prepare_e_number.substring(1);
					}
					if (isNaN(prepare_e_number)) {
						item_in_cart_recheck = false;
					}
				} else if ($(this).attr(spotcommerce_easy_text_picker[816]).indexOf(spotcommerce_easy_text_picker[817]) != -1) {
					var prepare_e_pcode = $(this).val();
					if (isNaN(prepare_e_pcode)) {
						item_in_cart_recheck = false;
					}
				}
			}
		});
	}
	if (item_in_cart_recheck) {
		if (ENABLE_FIELD_COUNTRY) {
			invs_object.invinf.country = $(spotcommerce_easy_text_picker[818]).val();
		} else {
			invs_object.invinf.country = spotcommerce_easy_text_picker[819];
		}
		if (ENABLE_FIELD_FIRST_NAME) {
			invs_object.invinf.firstname = $(spotcommerce_easy_text_picker[820]).val();
		} else {
			invs_object.invinf.firstname = spotcommerce_easy_text_picker[821];
		}
		if (ENABLE_FIELD_LAST_NAME) {
			invs_object.invinf.lastname = $(spotcommerce_easy_text_picker[822]).val();
		} else {
			invs_object.invinf.lastname = spotcommerce_easy_text_picker[823];
		}
		if (ENABLE_FIELD_COMPANY_NAME) {
			invs_object.invinf.companyname = $(spotcommerce_easy_text_picker[824]).val();
		} else {
			invs_object.invinf.companyname = spotcommerce_easy_text_picker[825];
		}
		if (ENABLE_FIELD_ADDRESS) {
			invs_object.invinf.address = $(spotcommerce_easy_text_picker[826]).val();
		} else {
			invs_object.invinf.address = spotcommerce_easy_text_picker[827];
		}
		if (ENABLE_FIELD_TOWN_CITY_STATE) {
			invs_object.invinf.towncitystate = $(spotcommerce_easy_text_picker[828]).val();
		} else {
			invs_object.invinf.towncitystate = spotcommerce_easy_text_picker[829];
		}
		if (ENABLE_FIELD_POST_ZIP_CODE) {
			invs_object.invinf.postcodezip = $(spotcommerce_easy_text_picker[830]).val();
		} else {
			invs_object.invinf.postcodezip = spotcommerce_easy_text_picker[831];
		}
		invs_object.invinf.email = $(spotcommerce_easy_text_picker[832]).val();
		invs_object.invinf.phone = $(spotcommerce_easy_text_picker[833]).val();
		if (ENABLE_FIELD_COUNTRY) {
			invs_object.buyerinf.country = $(spotcommerce_easy_text_picker[834]).val();
		} else {
			invs_object.buyerinf.country = spotcommerce_easy_text_picker[835];
		}
		if (ENABLE_FIELD_FIRST_NAME) {
			invs_object.buyerinf.firstname = $(spotcommerce_easy_text_picker[836]).val();
		} else {
			invs_object.buyerinf.firstname = spotcommerce_easy_text_picker[837];
		}
		if (ENABLE_FIELD_LAST_NAME) {
			invs_object.buyerinf.lastname = $(spotcommerce_easy_text_picker[838]).val();
		} else {
			invs_object.buyerinf.lastname = spotcommerce_easy_text_picker[839];
		}
		if (ENABLE_FIELD_COMPANY_NAME) {
			invs_object.buyerinf.companyname = $(spotcommerce_easy_text_picker[840]).val();
		} else {
			invs_object.buyerinf.companyname = spotcommerce_easy_text_picker[841];
		}
		if (ENABLE_FIELD_ADDRESS) {
			invs_object.buyerinf.address = $(spotcommerce_easy_text_picker[842]).val();
		} else {
			invs_object.buyerinf.address = spotcommerce_easy_text_picker[843];
		}
		if (ENABLE_FIELD_TOWN_CITY_STATE) {
			invs_object.buyerinf.towncitystate = $(spotcommerce_easy_text_picker[844]).val();
		} else {
			invs_object.buyerinf.towncitystate = spotcommerce_easy_text_picker[845];
		}
		if (ENABLE_FIELD_POST_ZIP_CODE) {
			invs_object.buyerinf.postcodezip = $(spotcommerce_easy_text_picker[846]).val();
		} else {
			invs_object.buyerinf.postcodezip = spotcommerce_easy_text_picker[847];
		}
		invs_object.order_notes = $(spotcommerce_easy_text_picker[848]).val();
		invs_object.payment_methods = $(spotcommerce_easy_text_picker[849]).val();
		invs_object.diff_shipping = $(spotcommerce_easy_text_picker[850]).is(spotcommerce_easy_text_picker[851]);
		$(spotcommerce_easy_text_picker[852]).each(function () {
			$(this).find(spotcommerce_easy_text_picker[853]).val(invs_object.invinf.firstname + spotcommerce_easy_text_picker[854] + invs_object.invinf.lastname);
			$(this).find(spotcommerce_easy_text_picker[855]).val(invs_object.invinf.email);
			var prepare_e_content = spotcommerce_translated_mapper(spotcommerce_easy_text_picker[856]) + spotcommerce_easy_text_picker[857] + invs_object.id + spotcommerce_easy_text_picker[858];
			prepare_e_content += spotcommerce_easy_text_picker[859];
			prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[860]) + spotcommerce_easy_text_picker[861] + invs_object.payment_methods + spotcommerce_easy_text_picker[862];
			if (!invs_object.diff_shipping) {
				prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[863]);
			} else {
				prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[864]);
			}
			prepare_e_content += spotcommerce_easy_text_picker[865];
			prepare_e_content += spotcommerce_easy_text_picker[866];
			prepare_e_content += spotcommerce_easy_text_picker[867] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[868]) + spotcommerce_easy_text_picker[869] + invs_object.invinf.firstname + spotcommerce_easy_text_picker[870];
			prepare_e_content += spotcommerce_easy_text_picker[871] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[872]) + spotcommerce_easy_text_picker[873] + invs_object.invinf.lastname + spotcommerce_easy_text_picker[874];
			if (invs_object.invinf.companyname) {
				prepare_e_content += spotcommerce_easy_text_picker[875] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[876]) + spotcommerce_easy_text_picker[877] + invs_object.invinf.companyname + spotcommerce_easy_text_picker[878];
			}
			prepare_e_content += spotcommerce_easy_text_picker[879] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[880]) + spotcommerce_easy_text_picker[881] + invs_object.invinf.address + spotcommerce_easy_text_picker[882];
			prepare_e_content += spotcommerce_easy_text_picker[883] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[884]) + spotcommerce_easy_text_picker[885] + invs_object.invinf.towncitystate + spotcommerce_easy_text_picker[886];
			prepare_e_content += spotcommerce_easy_text_picker[887] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[888]) + spotcommerce_easy_text_picker[889] + invs_object.invinf.country + spotcommerce_easy_text_picker[890];
			prepare_e_content += spotcommerce_easy_text_picker[891] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[892]) + spotcommerce_easy_text_picker[893] + invs_object.invinf.postcodezip + spotcommerce_easy_text_picker[894];
			prepare_e_content += spotcommerce_easy_text_picker[895] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[896]) + spotcommerce_easy_text_picker[897] + invs_object.invinf.email + spotcommerce_easy_text_picker[898];
			prepare_e_content += spotcommerce_easy_text_picker[899] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[900]) + spotcommerce_easy_text_picker[901] + invs_object.invinf.phone + spotcommerce_easy_text_picker[902];
			prepare_e_content += spotcommerce_easy_text_picker[903];
			if (invs_object.diff_shipping) {
				prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[904]) + spotcommerce_easy_text_picker[905];
				prepare_e_content += spotcommerce_easy_text_picker[906];
				prepare_e_content += spotcommerce_easy_text_picker[907] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[908]) + spotcommerce_easy_text_picker[909] + invs_object.buyerinf.firstname + spotcommerce_easy_text_picker[910];
				prepare_e_content += spotcommerce_easy_text_picker[911] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[912]) + spotcommerce_easy_text_picker[913] + invs_object.buyerinf.lastname + spotcommerce_easy_text_picker[914];
				if (invs_object.buyerinf.companyname) {
					prepare_e_content += spotcommerce_easy_text_picker[915] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[916]) + spotcommerce_easy_text_picker[917] + invs_object.buyerinf.companyname + spotcommerce_easy_text_picker[918];
				}
				prepare_e_content += spotcommerce_easy_text_picker[919] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[920]) + spotcommerce_easy_text_picker[921] + invs_object.buyerinf.address + spotcommerce_easy_text_picker[922];
				prepare_e_content += spotcommerce_easy_text_picker[923] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[924]) + spotcommerce_easy_text_picker[925] + invs_object.buyerinf.towncitystate + spotcommerce_easy_text_picker[926];
				prepare_e_content += spotcommerce_easy_text_picker[927] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[928]) + spotcommerce_easy_text_picker[929] + invs_object.invinf.country + spotcommerce_easy_text_picker[930];
				prepare_e_content += spotcommerce_easy_text_picker[931] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[932]) + spotcommerce_easy_text_picker[933] + invs_object.buyerinf.postcodezip + spotcommerce_easy_text_picker[934];
				prepare_e_content += spotcommerce_easy_text_picker[935];
			}
			if (invs_object.order_notes) {
				prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[936]) + spotcommerce_easy_text_picker[937];
				prepare_e_content += spotcommerce_easy_text_picker[938];
				prepare_e_content += invs_object.order_notes;
			}
			prepare_e_content += spotcommerce_easy_text_picker[939];
			prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[940]) + spotcommerce_easy_text_picker[941];
			prepare_e_content += spotcommerce_easy_text_picker[942];
			for (var level_1 = 0; level_1 < invs_object.items.length; level_1++) {
				var object_format_link = invs_object.items[level_1];
				prepare_e_content += spotcommerce_easy_text_picker[943] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[944]) + spotcommerce_easy_text_picker[945] + object_format_link.title + spotcommerce_easy_text_picker[946];
				prepare_e_content += spotcommerce_easy_text_picker[947] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[948]) + spotcommerce_easy_text_picker[949] + CURRENCY_BEFORE + spotcommerce_padding_amount(object_format_link.price) + CURRENCY_AFTER + spotcommerce_easy_text_picker[950];
				prepare_e_content += spotcommerce_easy_text_picker[951] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[952]) + spotcommerce_easy_text_picker[953] + object_format_link.number + spotcommerce_easy_text_picker[954];
				prepare_e_content += spotcommerce_easy_text_picker[955] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[956]) + spotcommerce_easy_text_picker[957] + CURRENCY_BEFORE + spotcommerce_padding_amount(object_format_link.price * object_format_link.number) + CURRENCY_AFTER + spotcommerce_easy_text_picker[958];
				prepare_e_content += spotcommerce_easy_text_picker[959] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[960]) + spotcommerce_easy_text_picker[961] + (object_format_link.link) + spotcommerce_easy_text_picker[962];
				prepare_e_content += spotcommerce_easy_text_picker[963];
			}
			prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[964]) + spotcommerce_easy_text_picker[965] + CURRENCY_BEFORE + spotcommerce_padding_amount(invs_object.total - invs_object.shipvalue) + CURRENCY_AFTER + spotcommerce_easy_text_picker[966];
			prepare_e_content += spotcommerce_easy_text_picker[967];
			var spot_commrce_out_on_mail = invs_object.total;
			prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[968]) + spotcommerce_easy_text_picker[969] + CURRENCY_BEFORE + spotcommerce_padding_amount(invs_object.shipvalue) + CURRENCY_AFTER + spotcommerce_easy_text_picker[970];
			prepare_e_content += spotcommerce_easy_text_picker[971];
			prepare_e_content += spotcommerce_translated_mapper(spotcommerce_easy_text_picker[972]) + spotcommerce_easy_text_picker[973] + CURRENCY_BEFORE + spotcommerce_padding_amount(spot_commrce_out_on_mail) + CURRENCY_AFTER + spotcommerce_easy_text_picker[974];
			prepare_e_content += spotcommerce_easy_text_picker[975];
			prepare_e_content += spotcommerce_easy_text_picker[976];
			$(this).find(spotcommerce_easy_text_picker[977]).val(prepare_e_content);
		});
	}
	return item_in_cart_recheck;
}

// package out lst checker
function spotcommerce_package_out_lst_checker() {
	var item_in_cart_recheck = true;
	var sub_validator_list = $(spotcommerce_easy_text_picker[978]).is(spotcommerce_easy_text_picker[979]);
	var slt_picker = spotcommerce_easy_text_picker[980];
	var out_cart_picker_notify_n_warn = spotcommerce_easy_text_picker[981];
	if (sub_validator_list) {
		slt_picker = $(spotcommerce_easy_text_picker[982]);
	} else {
		slt_picker = $(spotcommerce_easy_text_picker[983]);
	}
	if (slt_picker.length) {
		slt_picker.find(spotcommerce_easy_text_picker[984]).each(function () {
			var out_cart_checker = true;
			if (!($(this).val())) {
				out_cart_checker = false;
			} else {
				if ($(this).attr(spotcommerce_easy_text_picker[985]).indexOf(spotcommerce_easy_text_picker[986]) != -1) {
					var prepare_e_address = $(this).val();
					if (prepare_e_address.indexOf(spotcommerce_easy_text_picker[987]) < 1 || prepare_e_address.indexOf(spotcommerce_easy_text_picker[988]) < 3) {
						out_cart_checker = false;
					}
					if (prepare_e_address.length < 6) {
						out_cart_checker = false;
					}
				} else if ($(this).attr(spotcommerce_easy_text_picker[989]).indexOf(spotcommerce_easy_text_picker[990]) != -1) {
					var prepare_e_number = $(this).val();
					if (prepare_e_number.indexOf(spotcommerce_easy_text_picker[991]) == 0) {
						prepare_e_number = prepare_e_number.substring(1);
					}
					if (isNaN(prepare_e_number)) {
						out_cart_checker = false;
					}
				} else if ($(this).attr(spotcommerce_easy_text_picker[992]).indexOf(spotcommerce_easy_text_picker[993]) != -1) {
					var prepare_e_pcode = $(this).val();
					if (isNaN(prepare_e_pcode)) {
						out_cart_checker = false;
					}
				}
			}
			if (out_cart_checker) {
				$(this).removeAttr(spotcommerce_easy_text_picker[994]);
			} else {
				$(this).css(spotcommerce_easy_text_picker[995], spotcommerce_easy_text_picker[996]);
				if (!out_cart_picker_notify_n_warn) {
					out_cart_picker_notify_n_warn = $(this);
				}
			}
			if (!out_cart_checker) {
				item_in_cart_recheck = false;
			}
		});
	}
	if (!item_in_cart_recheck) {
		var out_cart_related_up_part = 150;
		if (out_cart_picker_notify_n_warn) {
			out_cart_related_up_part = out_cart_picker_notify_n_warn.offset().top;
		}
		$(spotcommerce_easy_text_picker[997]).animate({
			scrollTop : out_cart_related_up_part
		}, 600);
	} else {
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[998], invs_object.invinf.country);
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[999], invs_object.invinf.firstname);
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[1000], invs_object.invinf.lastname);
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[1001], invs_object.invinf.country);
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[1002], invs_object.invinf.address);
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[1003], invs_object.invinf.towncitystate);
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[1004], invs_object.invinf.postcodezip);
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[1005], invs_object.invinf.email);
		spotcommerce_wp_option_meta(spotcommerce_easy_text_picker[1006], invs_object.invinf.phone);
	}
	return item_in_cart_recheck;
}
var out_cart_counter_01 = 0;
var out_cart_counter_02;

// out lst final
function spotcommerce_package_out_lst_final() {
	clearInterval(out_cart_counter_02);
	var spot_commrce_out_on_mail = invs_object.total;
	if (invs_object.payment_methods == spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1007]) || invs_object.payment_methods == spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1008]) || invs_object.payment_methods == spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1009])) {
		var simple_padding_format = new Date();
		var out_cart_adding_amount = $(spotcommerce_easy_text_picker[1010]).is(spotcommerce_easy_text_picker[1011]);
		var content_hook = spotcommerce_easy_text_picker[1012] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1013]) + spotcommerce_easy_text_picker[1014] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1015]) + spotcommerce_easy_text_picker[1016] + invs_object.id + spotcommerce_easy_text_picker[1017] + (simple_padding_format.getMonth() + 1) + spotcommerce_easy_text_picker[1018] + (simple_padding_format.getDate() + 1) + spotcommerce_easy_text_picker[1019] + simple_padding_format.getFullYear() + spotcommerce_easy_text_picker[1020] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1021]) + spotcommerce_easy_text_picker[1022] + CURRENCY_BEFORE + spotcommerce_padding_amount(spot_commrce_out_on_mail) + CURRENCY_AFTER + spotcommerce_easy_text_picker[1023] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1024]) + spotcommerce_easy_text_picker[1025] + invs_object.payment_methods + spotcommerce_easy_text_picker[1026];
		
		if (invs_object.payment_methods == spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1027])) {
			content_hook += spotcommerce_easy_text_picker[1028] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1029]) + spotcommerce_easy_text_picker[1030] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1031]) + spotcommerce_easy_text_picker[1032] + BANK_ACCOUNT_NAME + spotcommerce_easy_text_picker[1033] + BANK_ACCOUNT_BANKNAME + spotcommerce_easy_text_picker[1034] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1035]) + spotcommerce_easy_text_picker[1036] + BANK_ACCOUNT_NUMBER + spotcommerce_easy_text_picker[1037];
			if (BANK_ACCOUNT_SORTCODE) {
				content_hook += spotcommerce_easy_text_picker[1038] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1039]) + spotcommerce_easy_text_picker[1040] + BANK_ACCOUNT_SORTCODE + spotcommerce_easy_text_picker[1041];
			}
			if (BANK_ACCOUNT_IBAN) {
				content_hook += spotcommerce_easy_text_picker[1042] + BANK_ACCOUNT_IBAN + spotcommerce_easy_text_picker[1043];
			}
			if (BANK_ACCOUNT_BIC_SWIFT) {
				content_hook += spotcommerce_easy_text_picker[1044] + BANK_ACCOUNT_BIC_SWIFT + spotcommerce_easy_text_picker[1045];
			}
			content_hook += spotcommerce_easy_text_picker[1046];
		} else if (invs_object.payment_methods == spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1047])) {
			content_hook += spotcommerce_easy_text_picker[1048] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1049]) + spotcommerce_easy_text_picker[1050] + STORE_NAME + spotcommerce_easy_text_picker[1051] + STORE_STREET + spotcommerce_easy_text_picker[1052] + STORE_TOWN + spotcommerce_easy_text_picker[1053] + STORE_STATE + spotcommerce_easy_text_picker[1054] + STORE_COUNTRY + spotcommerce_easy_text_picker[1055] + STORE_POSTCODE + spotcommerce_easy_text_picker[1056];
		} else {
			content_hook += spotcommerce_easy_text_picker[1057] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1058]) + spotcommerce_easy_text_picker[1059];
		}
		content_hook += spotcommerce_easy_text_picker[1060] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1061]) + spotcommerce_easy_text_picker[1062] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1063]) + spotcommerce_easy_text_picker[1064] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1065]) + spotcommerce_easy_text_picker[1066] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1067]) + spotcommerce_easy_text_picker[1068] + CURRENCY_BEFORE + spotcommerce_padding_amount(invs_object.total - invs_object.shipvalue) + CURRENCY_AFTER + spotcommerce_easy_text_picker[1069] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1070]) + spotcommerce_easy_text_picker[1071] + ((invs_object.shipvalue) ? (CURRENCY_BEFORE + spotcommerce_padding_amount(invs_object.shipvalue) + CURRENCY_AFTER) : spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1072])) + spotcommerce_easy_text_picker[1073] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1074]) + spotcommerce_easy_text_picker[1075] + CURRENCY_BEFORE + spotcommerce_padding_amount(spot_commrce_out_on_mail) + CURRENCY_AFTER + spotcommerce_easy_text_picker[1076];
		for (var level_1 = 0; level_1 < invs_object.items.length; level_1++) {
			var out_cart_inform = invs_object.items[level_1];
			content_hook += spotcommerce_easy_text_picker[1077] + out_cart_inform.title + spotcommerce_easy_text_picker[1078] + out_cart_inform.number + spotcommerce_easy_text_picker[1079] + CURRENCY_BEFORE + spotcommerce_padding_amount(out_cart_inform.number * out_cart_inform.price) + CURRENCY_AFTER + spotcommerce_easy_text_picker[1080];
		}
		content_hook += spotcommerce_easy_text_picker[1081] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1082]) + spotcommerce_easy_text_picker[1083] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1084]) + spotcommerce_easy_text_picker[1085] + invs_object.invinf.email + spotcommerce_easy_text_picker[1086] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1087]) + spotcommerce_easy_text_picker[1088] + invs_object.invinf.phone + spotcommerce_easy_text_picker[1089] + ((!out_cart_adding_amount) ? 'full' : spotcommerce_easy_text_picker[1090]) + spotcommerce_easy_text_picker[1091] + ((!out_cart_adding_amount) ? (spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1092])) : (spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1093]))) + spotcommerce_easy_text_picker[1094] + invs_object.invinf.firstname + spotcommerce_easy_text_picker[1095] + invs_object.invinf.lastname + spotcommerce_easy_text_picker[1096] + invs_object.invinf.address + spotcommerce_easy_text_picker[1097] + invs_object.invinf.towncitystate + spotcommerce_easy_text_picker[1098] + invs_object.invinf.country + spotcommerce_easy_text_picker[1099] + invs_object.invinf.postcodezip + spotcommerce_easy_text_picker[1100];
		if (out_cart_adding_amount) {
			content_hook += spotcommerce_easy_text_picker[1101] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1102]) + spotcommerce_easy_text_picker[1103] + invs_object.buyerinf.firstname + spotcommerce_easy_text_picker[1104] + invs_object.buyerinf.lastname + spotcommerce_easy_text_picker[1105] + invs_object.buyerinf.address + spotcommerce_easy_text_picker[1106] + invs_object.buyerinf.towncitystate + spotcommerce_easy_text_picker[1107] + invs_object.buyerinf.country + spotcommerce_easy_text_picker[1108] + invs_object.buyerinf.postcodezip + spotcommerce_easy_text_picker[1109];
		}
		content_hook += spotcommerce_easy_text_picker[1110];
		$(spotcommerce_easy_text_picker[1111]).html(content_hook);
		spotcommerce_package_wipe(spot_commerce_active_list_counter);
		spotcommerce_tgl_counter();
	} else if (invs_object.payment_methods == spotcommerce_easy_text_picker[1112]) {
		var out_cart_link_callback_handler = spotcommerce_easy_text_picker[1113];
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1114] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1115] + CURRENCY_CODE_T;
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1116];
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1117];
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1118];
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1119];
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1120] + invs_object.id;
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1121] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1122] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1123] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1124] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1125] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1126] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1127] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1128] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1129] + encodeURIComponent();
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1130] + encodeURIComponent();
		if (invs_object.shipvalue) {
			out_cart_link_callback_handler += spotcommerce_easy_text_picker[1131] + encodeURIComponent();
		}
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1132];
		out_cart_link_callback_handler += spotcommerce_easy_text_picker[1133];
		for (var level_1 = 0; level_1 < invs_object.items.length; level_1++) {
			var object_format_link = invs_object.items[level_1];
			out_cart_link_callback_handler += spotcommerce_easy_text_picker[1134] + (level_1 + 1) + spotcommerce_easy_text_picker[1135] + encodeURIComponent();
			out_cart_link_callback_handler += spotcommerce_easy_text_picker[1136] + (level_1 + 1) + spotcommerce_easy_text_picker[1137] + encodeURIComponent();
			out_cart_link_callback_handler += spotcommerce_easy_text_picker[1138] + (level_1 + 1) + spotcommerce_easy_text_picker[1139] + encodeURIComponent();
		}
		spotcommerce_package_wipe(spot_commerce_active_list_counter);
		var money_out_counter = 0;
		var money_out_content = $(spotcommerce_easy_text_picker[1140]).html();
		var money_out_checker = setInterval(function () {
				if (!money_out_content) {
					money_out_content = $(spotcommerce_easy_text_picker[1141]).html();
				}
				money_out_counter++;
				if (!money_out_content && money_out_counter > 3 || money_out_counter > 5) {
					clearInterval(money_out_checker);
					setTimeout(function () {
						window.location.href = out_cart_link_callback_handler;
					}, 1000);
				}
			}, 1000);
	} else {}

}

// package out lst end
function spotcommerce_package_out_lst_end() {
	$(spotcommerce_easy_text_picker[1142]).hide();
	$(spotcommerce_easy_text_picker[1143]).show();
	out_cart_counter_02 = setInterval(function () {
			if ($(spotcommerce_easy_text_picker[1144]).html()) {
				spotcommerce_package_out_lst_final();
			}
			out_cart_counter_01++;
			if (out_cart_counter_01 == 1000) {
				if (!$(spotcommerce_easy_text_picker[1145]).html()) {
					spotcommerce_package_out_lst_final();
				} else {
					clearInterval(out_cart_counter_02);
					if (!spotcommerce_box_checker()) {
						alert(spotcommerce_easy_text_picker[1146]);
					}
					$(spotcommerce_easy_text_picker[1147]).show();
					$(spotcommerce_easy_text_picker[1148]).hide();
				}
			}
		}, 10);
}

// inv connector
function spotcommerce_inv_connector() {
	$.get(Feed_URL + spotcommerce_easy_text_picker[1149] + invs_object_lst[invs_object_lst_record].id + spotcommerce_easy_text_picker[1150], function (json) {
		var money_out_inv_j = spotcommerce_call_back_alternative(json);
		var paypal_method_1 = spotcommerce_easy_text_picker[1151];
		if (money_out_inv_j.cate.length) {
			for (var level_1 = 0; level_1 < money_out_inv_j.cate.length; level_1++) {
				var merchant_data = money_out_inv_j.cate[level_1];
				if (merchant_data && merchant_data.length > 1 && !isNaN(merchant_data.substring(1))) {
					if (merchant_data.indexOf(spotcommerce_easy_text_picker[1152]) == 0) {
						paypal_method_1 = merchant_data.substring(1);
						break;
					}
				}
			}
		}
		if (money_out_inv_j.id && paypal_method_1) {
			var random_map = invs_object.items.length;
			invs_object.items[random_map] = new Object();
			invs_object.items[random_map].id = invs_object_lst[invs_object_lst_record].id;
			invs_object.items[random_map].number = invs_object_lst[invs_object_lst_record].number;
			invs_object.items[random_map].price = paypal_method_1;
			invs_object.items[random_map].title = money_out_inv_j.title;
			invs_object.items[random_map].link = money_out_inv_j.link;
			invs_object_lst_extracted_content += spotcommerce_easy_text_picker[1153] + money_out_inv_j.title + spotcommerce_easy_text_picker[1154] + invs_object_lst[invs_object_lst_record].number + spotcommerce_easy_text_picker[1155] + CURRENCY_BEFORE + spotcommerce_padding_amount(paypal_method_1 * invs_object_lst[invs_object_lst_record].number) + CURRENCY_AFTER + spotcommerce_easy_text_picker[1156];
			invs_object_lst_record++;
			if (invs_object_lst_record < invs_object_lst.length) {
				spotcommerce_inv_connector();
			} else {
				if (invs_object_lst_extracted_content) {
					var waiting_list_pre_sub_enter = 0;
					var money_final_out_adding_extra = SHIPPING_FEE;
					for (var level_1 = 0; level_1 < invs_object.items.length; level_1++) {
						waiting_list_pre_sub_enter += (invs_object.items[level_1].price * invs_object.items[level_1].number);
						money_final_out_adding_extra += (invs_object.items[level_1].number * SHIPPING_FEE_FOR_EACH_ITEM);
					}
					var money_final_out_on_mail = money_final_out_adding_extra + waiting_list_pre_sub_enter;
					var money_final_out_notify_buyer = spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1157]);
					if (money_final_out_adding_extra != 0) {
						money_final_out_notify_buyer = CURRENCY_BEFORE + spotcommerce_padding_amount(money_final_out_adding_extra.toFixed(2)) + CURRENCY_AFTER;
					}
					invs_object.total = money_final_out_on_mail;
					invs_object.shipvalue = money_final_out_adding_extra;
					invs_object_lst_extracted_content = spotcommerce_easy_text_picker[1158] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1159]) + spotcommerce_easy_text_picker[1160] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1161]) + spotcommerce_easy_text_picker[1162] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1163]) + spotcommerce_easy_text_picker[1164] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1165]) + spotcommerce_easy_text_picker[1166] + CURRENCY_BEFORE + spotcommerce_padding_amount(waiting_list_pre_sub_enter) + CURRENCY_AFTER + spotcommerce_easy_text_picker[1167] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1168]) + spotcommerce_easy_text_picker[1169] + money_final_out_notify_buyer + spotcommerce_easy_text_picker[1170] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1171]) + spotcommerce_easy_text_picker[1172] + CURRENCY_BEFORE + spotcommerce_padding_amount(money_final_out_on_mail) + CURRENCY_AFTER + spotcommerce_easy_text_picker[1173] + invs_object_lst_extracted_content + spotcommerce_easy_text_picker[1174];
					$(spotcommerce_easy_text_picker[1175]).html(invs_object_lst_extracted_content);
					var money_final_out_way_to_buyer = spotcommerce_easy_text_picker[1176];
					if (ENABLE_DIRECT_BANK_TRANSFER) {
						money_final_out_way_to_buyer += spotcommerce_easy_text_picker[1177] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1178]) + spotcommerce_easy_text_picker[1179] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1180]) + spotcommerce_easy_text_picker[1181] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1182]) + spotcommerce_easy_text_picker[1183];
					}
					if (ENABLE_BANK) {
						money_final_out_way_to_buyer += spotcommerce_easy_text_picker[1184] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1185]) + spotcommerce_easy_text_picker[1186] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1187]) + spotcommerce_easy_text_picker[1188] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1189]) + spotcommerce_easy_text_picker[1190] + STORE_NAME + spotcommerce_easy_text_picker[1191] + STORE_STREET + spotcommerce_easy_text_picker[1192] + STORE_TOWN + spotcommerce_easy_text_picker[1193] + STORE_STATE + spotcommerce_easy_text_picker[1194] + STORE_COUNTRY + spotcommerce_easy_text_picker[1195] + STORE_POSTCODE + spotcommerce_easy_text_picker[1196];
					}
					if (ENABLE_CASH_ON_DELIVERY) {
						money_final_out_way_to_buyer += spotcommerce_easy_text_picker[1197] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1198]) + spotcommerce_easy_text_picker[1199] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1200]) + spotcommerce_easy_text_picker[1201] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1202]) + spotcommerce_easy_text_picker[1203];
					}
					if (ENABLE_PAYPAL) {
						money_final_out_way_to_buyer += spotcommerce_easy_text_picker[1204] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1205]) + spotcommerce_easy_text_picker[1206];
					}
					money_final_out_way_to_buyer += spotcommerce_easy_text_picker[1207];
					$(spotcommerce_easy_text_picker[1208]).html(money_final_out_way_to_buyer);
					$(spotcommerce_easy_text_picker[1209]).attr(spotcommerce_easy_text_picker[1210], spotcommerce_easy_text_picker[1211]);
					$(spotcommerce_easy_text_picker[1212]).html(spotcommerce_easy_text_picker[1213] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1214]) + spotcommerce_easy_text_picker[1215]);
					$(spotcommerce_easy_text_picker[1216]).appendTo(spotcommerce_easy_text_picker[1217]);
					$(spotcommerce_easy_text_picker[1218]).wrapInner(spotcommerce_easy_text_picker[1219]);
					$(spotcommerce_easy_text_picker[1220]).append(spotcommerce_easy_text_picker[1221]);
					$(spotcommerce_easy_text_picker[1222]).appendTo(spotcommerce_easy_text_picker[1223]);


					$(spotcommerce_easy_text_picker[1224]).addClass(spotcommerce_easy_text_picker[1225]).val(spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1226]));
					$(spotcommerce_easy_text_picker[1227]).on(spotcommerce_easy_text_picker[1228], function () 
					{
						if ($(this).attr(spotcommerce_easy_text_picker[1229])) {
							return;
						}
						$(spotcommerce_easy_text_picker[1230]).each(function () {
							var member_card = $(this).attr(spotcommerce_easy_text_picker[1231]);
							$(spotcommerce_easy_text_picker[1232] + member_card).slideUp();
							$(this).removeAttr(spotcommerce_easy_text_picker[1233]);
						});
						var member_card = $(this).attr(spotcommerce_easy_text_picker[1234]);
						$(spotcommerce_easy_text_picker[1235] + member_card).slideDown();
						$(this).attr(spotcommerce_easy_text_picker[1236], spotcommerce_easy_text_picker[1237]);
					});
					$(spotcommerce_easy_text_picker[1238]).mouseenter(function () {
						spotcommerce_package_out_lst();
					});
					$(spotcommerce_easy_text_picker[1239]).click(function () {
						if (spotcommerce_package_out_lst_checker()) {
							spotcommerce_package_out_lst_end();
						}
					});
				}
			}
		} else {
			if (!spotcommerce_box_checker()) {
				alert(spotcommerce_easy_text_picker[1240]);
			}
		}
	}, spotcommerce_easy_text_picker[1241]).fail(function () {
		if (!spotcommerce_box_checker()) {
			alert(spotcommerce_easy_text_picker[1242]);
		}
	});
}

// inv connector inform
function spotcommerce_inv_connector_inform() {
	invs_object_lst = spotcommerce_package_load(spot_commerce_active_list_counter);
	invs_object_lst_record = 0;
	invs_object_lst_extracted_content = spotcommerce_easy_text_picker[1243];
	if (invs_object_lst) {
		$(spotcommerce_easy_text_picker[1244]).html(spotcommerce_easy_text_picker[1245] + AJAX_LOADING_IMAGE + spotcommerce_easy_text_picker[1246]);
		spotcommerce_inv_connector();
	}
}

// inv connector out lst
function spotcommerce_inv_connector_out_lst() {
	var content_hook = spotcommerce_easy_text_picker[1247] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1248]) + spotcommerce_easy_text_picker[1249];
	if (ENABLE_FIELD_COUNTRY) 
	{
		content_hook += spotcommerce_easy_text_picker[1250] 
						+ spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1251]) 
						+ spotcommerce_easy_text_picker[1252];

		var money_final_out_inv_nations = spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1253]);
		for (var level_1 = 0; level_1 < COUNTRY_CODE.length; level_1++) 
		{
			content_hook += spotcommerce_easy_text_picker[1254] 
							+ COUNTRY_CODE[level_1] 
							+ spotcommerce_easy_text_picker[1255] 
							+ ((money_final_out_inv_nations == COUNTRY_CODE[level_1]) ? ' selected="selected"' : spotcommerce_easy_text_picker[1256]) + spotcommerce_easy_text_picker[1257] + COUNTRY_CODE[level_1] + spotcommerce_easy_text_picker[1258];
		}
		content_hook += spotcommerce_easy_text_picker[1259];
	}

	/*	check fields
		premade data for content hook
	*/
	if (ENABLE_FIELD_FIRST_NAME) {
		content_hook += spotcommerce_easy_text_picker[1260] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1261]) + spotcommerce_easy_text_picker[1262] + spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1263]) + spotcommerce_easy_text_picker[1264];
	}
	if (ENABLE_FIELD_LAST_NAME) {
		content_hook += spotcommerce_easy_text_picker[1265] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1266]) + spotcommerce_easy_text_picker[1267] + spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1268]) + spotcommerce_easy_text_picker[1269];
	}
	if (ENABLE_FIELD_COMPANY_NAME) {
		content_hook += spotcommerce_easy_text_picker[1270] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1271]) + spotcommerce_easy_text_picker[1272] + spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1273]) + spotcommerce_easy_text_picker[1274];
	}
	if (ENABLE_FIELD_ADDRESS) {
		content_hook += spotcommerce_easy_text_picker[1275] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1276]) + spotcommerce_easy_text_picker[1277] + spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1278]) + spotcommerce_easy_text_picker[1279];
	}
	if (ENABLE_FIELD_TOWN_CITY_STATE) {
		content_hook += spotcommerce_easy_text_picker[1280] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1281]) + spotcommerce_easy_text_picker[1282] + spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1283]) + spotcommerce_easy_text_picker[1284];
	}
	if (ENABLE_FIELD_POST_ZIP_CODE) {
		content_hook += spotcommerce_easy_text_picker[1285] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1286]) + spotcommerce_easy_text_picker[1287] + spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1288]) + spotcommerce_easy_text_picker[1289];
	}
	content_hook += spotcommerce_easy_text_picker[1290] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1291]) + spotcommerce_easy_text_picker[1292] 
		+ spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1293]) + spotcommerce_easy_text_picker[1294] 
		+ spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1295]) + spotcommerce_easy_text_picker[1296] 
		+ spotcommerce_wp_option_out(spotcommerce_easy_text_picker[1297]) + spotcommerce_easy_text_picker[1298] 
		+ spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1299]) + spotcommerce_easy_text_picker[1300];


	if (ENABLE_FIELD_COUNTRY) {
		content_hook += spotcommerce_easy_text_picker[1301] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1302]) + spotcommerce_easy_text_picker[1303];
		for (var level_1 = 0; level_1 < COUNTRY_CODE.length; level_1++) {
			content_hook += spotcommerce_easy_text_picker[1304] + COUNTRY_CODE[level_1] + spotcommerce_easy_text_picker[1305] + COUNTRY_CODE[level_1] + spotcommerce_easy_text_picker[1306];
		}
		content_hook += spotcommerce_easy_text_picker[1307];
	}

	/*	check fields
		if enabled, add into content hook
		if not, let it empty and handler will take care
	*/
	if (ENABLE_FIELD_FIRST_NAME) {
		content_hook += spotcommerce_easy_text_picker[1308] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1309]) + spotcommerce_easy_text_picker[1310];
	}
	if (ENABLE_FIELD_LAST_NAME) {
		content_hook += spotcommerce_easy_text_picker[1311] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1312]) + spotcommerce_easy_text_picker[1313];
	}
	if (ENABLE_FIELD_COMPANY_NAME) {
		content_hook += spotcommerce_easy_text_picker[1314] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1315]) + spotcommerce_easy_text_picker[1316];
	}
	if (ENABLE_FIELD_ADDRESS) {
		content_hook += spotcommerce_easy_text_picker[1317] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1318]) + spotcommerce_easy_text_picker[1319];
	}
	if (ENABLE_FIELD_TOWN_CITY_STATE) {
		content_hook += spotcommerce_easy_text_picker[1320] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1321]) + spotcommerce_easy_text_picker[1322];
	}
	if (ENABLE_FIELD_POST_ZIP_CODE) {
		content_hook += spotcommerce_easy_text_picker[1323] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1324]) + spotcommerce_easy_text_picker[1325];
	}

	// finalize content hook
	content_hook += spotcommerce_easy_text_picker[1326] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1327]) + spotcommerce_easy_text_picker[1328];


	return content_hook;
}

// check if on an out list
if (spotcommerce_on_out_list()) 
{
	$(spotcommerce_easy_text_picker[1329]).addClass(spotcommerce_easy_text_picker[1330]);
	$(spotcommerce_easy_text_picker[1331]).addClass(spotcommerce_easy_text_picker[1332]);
	$(spotcommerce_easy_text_picker[1333]).addClass(spotcommerce_easy_text_picker[1334]);
	$(spotcommerce_easy_text_picker[1335]).attr(spotcommerce_easy_text_picker[1336], spotcommerce_easy_text_picker[1337]);

	$(spotcommerce_easy_text_picker[1338]).append(
		spotcommerce_easy_text_picker[1339] 
		+ spotcommerce_inv_connector_out_lst() 
		+ spotcommerce_easy_text_picker[1340]);

	$(spotcommerce_easy_text_picker[1341]).append(spotcommerce_easy_text_picker[1342] + AJAX_LOADING_IMAGE + spotcommerce_easy_text_picker[1343]);

	spotcommerce_inv_connector_inform();

	$(spotcommerce_easy_text_picker[1344]).on(spotcommerce_easy_text_picker[1345], function () 
	{
		if ($(this).is(spotcommerce_easy_text_picker[1346])) {
			$(spotcommerce_easy_text_picker[1347]).show();
		} else {
			$(spotcommerce_easy_text_picker[1348]).hide();
		}
	});
}

// json tab second
function spotcommerce_json_tab_second() {
	var rnd_n_counter = $(spotcommerce_easy_text_picker[1349]).length;
	if (rnd_n_counter < 1)
		return;
	$(spotcommerce_easy_text_picker[1350]).html(spotcommerce_easy_text_picker[1351] + AJAX_LOADING_IMAGE + spotcommerce_easy_text_picker[1352]);
	$.get(Feed_URL + spotcommerce_easy_text_picker[1353], function (json) {
		var rnd_n_objects = spotcommerce_call_back_primary(json);
		if (rnd_n_objects.total_entry == 0) {
			return;
		}
		var rnd_n_apply = Math.floor((Math.random() * rnd_n_objects.total_entry) + 1);
		if (rnd_n_apply + rnd_n_counter > rnd_n_objects.total_entry) {
			rnd_n_apply = rnd_n_objects.total_entry - rnd_n_counter + 1;
		}
		if (rnd_n_apply < 1) {
			rnd_n_apply = 1;
		}

		$.get(Feed_URL + spotcommerce_easy_text_picker[1354] + rnd_n_counter + spotcommerce_easy_text_picker[1355] + rnd_n_apply, function (json) {
			var rnd_n_blogger_lists = spotcommerce_call_back_primary(json);
			var content_hook = spotcommerce_easy_text_picker[1356];
			if (rnd_n_blogger_lists.entry.length) {
				for (var level_1 = 0; level_1 < rnd_n_blogger_lists.entry.length; level_1++) 
				{
					var active_list_pre_enter = spotcommerce_easy_text_picker[1357];

					if (level_1 % 2 == 0) 
					{
						active_list_pre_enter += spotcommerce_easy_text_picker[1358];
					} 
					else 
					{
						active_list_pre_enter += spotcommerce_easy_text_picker[1359];
					}

					if (level_1 % 3 == 0) 
					{
						active_list_pre_enter += spotcommerce_easy_text_picker[1360];
					}
					if (level_1 % 4 == 0) 
					{
						active_list_pre_enter += spotcommerce_easy_text_picker[1361];
					}

					object_format_link = rnd_n_blogger_lists.entry[level_1];

					// add to hook content with parsed data
					content_hook += spotcommerce_easy_text_picker[1362] + active_list_pre_enter + spotcommerce_easy_text_picker[1363] + object_format_link.id + spotcommerce_easy_text_picker[1364];
					content_hook += spotcommerce_easy_text_picker[1365] + object_format_link.link + spotcommerce_easy_text_picker[1366];
					content_hook += spotcommerce_easy_text_picker[1367] + object_format_link.thumbnail + spotcommerce_easy_text_picker[1368];
					content_hook += spotcommerce_easy_text_picker[1369];
					content_hook += spotcommerce_easy_text_picker[1370];

					// hook content title and link
					content_hook += spotcommerce_easy_text_picker[1371] 
									+ object_format_link.link 
									+ spotcommerce_easy_text_picker[1372] 
									+ object_format_link.title 
									+ spotcommerce_easy_text_picker[1373];

					// check link cate emtpy or not
					if (!spotcommerce_empty_checker(object_format_link.cate)) 
					{
						content_hook += spotcommerce_easy_text_picker[1374] + object_format_link.id + spotcommerce_easy_text_picker[1375] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1376]) + spotcommerce_easy_text_picker[1377];
					} 
					else 
					{
						content_hook += spotcommerce_easy_text_picker[1378] + object_format_link.link + spotcommerce_easy_text_picker[1379] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1380]) + spotcommerce_easy_text_picker[1381];
					}
					content_hook += spotcommerce_easy_text_picker[1382];
					content_hook += spotcommerce_attributes(object_format_link.cate);
					content_hook += spotcommerce_easy_text_picker[1383];
				}
			}
			$(spotcommerce_easy_text_picker[1384]).html(content_hook + spotcommerce_easy_text_picker[1385]);
			spotcommerce_thumbnail_handler();
			$(spotcommerce_easy_text_picker[1386]).click(function () {
				spotcommerce_package_pre_lst($(this));
			});
		}, spotcommerce_easy_text_picker[1387]);
	}, spotcommerce_easy_text_picker[1388]);
}

/*fixme: some time, json tab not work properly*/
$(spotcommerce_easy_text_picker[1389]).each(function () {
	spotcommerce_json_tab_second();
});
$(spotcommerce_easy_text_picker[1390]).click(function () {
	spotcommerce_json_tab_second();
});

var item_string_pack = new Object();
item_string_pack.title = spotcommerce_easy_text_picker[1391];
item_string_pack.label = new Array();

/*improve: check hyper parameter and filter by split*/
$(spotcommerce_easy_text_picker[1392]).each(function () {
	$(this).find(spotcommerce_easy_text_picker[1393]).each(function () {
		item_string_pack.title = $(this).html();
	});
	item_string_pack.label = new Array();

	// find and modify map
	$(this).find(spotcommerce_easy_text_picker[1394]).each(function () {
		var item_string_hyper = $(this).attr(spotcommerce_easy_text_picker[1395]);
		var drop_spin_title = $(this).html();
		if (drop_spin_title.indexOf(spotcommerce_easy_text_picker[1396]) == -1 && drop_spin_title.indexOf(spotcommerce_easy_text_picker[1397]) == -1 && drop_spin_title != spotcommerce_easy_text_picker[1398]) 
		{
			item_string_pack.label[item_string_pack.label.length] = new Object();
			var random_map = item_string_pack.label.length - 1;

			item_string_pack.label[random_map].link = item_string_hyper;
			item_string_pack.label[random_map].name = drop_spin_title;
			var page_counter_01 = spotcommerce_easy_text_picker[1399];
			var head_load = item_string_hyper.indexOf(page_counter_01);

			// check headload to see if found 
			if (head_load != -1) 
			{
				item_string_hyper = item_string_hyper.substring(head_load + page_counter_01.length);
				item_string_pack.label[random_map].ename = item_string_hyper;
			}
			item_string_hyper = item_string_pack.label[random_map].ename;

			if (item_string_hyper.indexOf(spotcommerce_easy_text_picker[1400]) != -1) 
			{
				item_string_hyper = item_string_hyper.split(spotcommerce_easy_text_picker[1401]);
				item_string_pack.label[random_map].ename = item_string_hyper[0];
			}
		}
	});
});

// link for chain in collection package
if (item_string_pack.label.length) {
	$(spotcommerce_easy_text_picker[1402]).each(function () {
		$(this).addClass(spotcommerce_easy_text_picker[1403]).addClass(spotcommerce_easy_text_picker[1404]);
		var content_hook = spotcommerce_easy_text_picker[1405] + item_string_pack.title;
		content_hook += spotcommerce_easy_text_picker[1406];

		// loop1 
		for (var level_1 = 0; level_1 < item_string_pack.label.length; level_1++) {
			var level_35 = item_string_pack.label[level_1];
			content_hook += spotcommerce_easy_text_picker[1407] + level_35.ename + spotcommerce_easy_text_picker[1408] + level_35.name + spotcommerce_easy_text_picker[1409];
		}
		content_hook += spotcommerce_easy_text_picker[1410];
		content_hook += spotcommerce_easy_text_picker[1411];

		// re scan
		for (var level_1 = 0; level_1 < item_string_pack.label.length; level_1++) {
			var level_35 = item_string_pack.label[level_1];
			content_hook += spotcommerce_easy_text_picker[1412] + level_35.ename + spotcommerce_easy_text_picker[1413] + level_35.link + spotcommerce_easy_text_picker[1414] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1415]) + spotcommerce_easy_text_picker[1416] + level_35.name + spotcommerce_easy_text_picker[1417];
		}

		content_hook += spotcommerce_easy_text_picker[1418];
		$(this).html(content_hook);

		$(spotcommerce_easy_text_picker[1419]).attr(spotcommerce_easy_text_picker[1420], spotcommerce_easy_text_picker[1421]);

		$.get(Feed_URL + spotcommerce_easy_text_picker[1422] + item_string_pack.label[0].ename + spotcommerce_easy_text_picker[1423] + NUMBER_ITEMS_FOR_COLLECTION, function (json) {
			var on_label_lst_obj = spotcommerce_call_back_primary(json);
			var content_hook = spotcommerce_easy_text_picker[1424];

			// loop the entry label list obejct
			if (on_label_lst_obj.entry.length) {
				for (var level_1 = 0; level_1 < on_label_lst_obj.entry.length; level_1++) {
					var active_list_pre_enter = spotcommerce_easy_text_picker[1425];
					if (level_1 % 2 == 0) {
						active_list_pre_enter += spotcommerce_easy_text_picker[1426];
					} else {
						active_list_pre_enter += spotcommerce_easy_text_picker[1427];
					}
					if (level_1 % 3 == 0) {
						active_list_pre_enter += spotcommerce_easy_text_picker[1428];
					}
					if (level_1 % 4 == 0) {
						active_list_pre_enter += spotcommerce_easy_text_picker[1429];
					}

					/*
					fixme: format link some time not work properly, may be undefined pointers
					*/

					object_format_link = on_label_lst_obj.entry[level_1];
					content_hook += spotcommerce_easy_text_picker[1430] + active_list_pre_enter + spotcommerce_easy_text_picker[1431] + object_format_link.id + spotcommerce_easy_text_picker[1432];
					content_hook += spotcommerce_easy_text_picker[1433] + object_format_link.link + spotcommerce_easy_text_picker[1434];
					content_hook += spotcommerce_easy_text_picker[1435] + object_format_link.thumbnail + spotcommerce_easy_text_picker[1436];
					content_hook += spotcommerce_easy_text_picker[1437];
					content_hook += spotcommerce_easy_text_picker[1438];
					content_hook += spotcommerce_easy_text_picker[1439] + object_format_link.link + spotcommerce_easy_text_picker[1440] + object_format_link.title + spotcommerce_easy_text_picker[1441];

					// check cate empty before make content hook
					if (!spotcommerce_empty_checker(object_format_link.cate)) 
					{
						content_hook += spotcommerce_easy_text_picker[1442] + object_format_link.id + spotcommerce_easy_text_picker[1443] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1444]) + spotcommerce_easy_text_picker[1445];
					} 
					else 
					{
						content_hook += spotcommerce_easy_text_picker[1446] + object_format_link.link + spotcommerce_easy_text_picker[1447] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1448]) + spotcommerce_easy_text_picker[1449];
					}

					content_hook += spotcommerce_easy_text_picker[1450];
					content_hook += spotcommerce_attributes(object_format_link.cate);
					content_hook += spotcommerce_easy_text_picker[1451];
				}
			}

			// out put content hook and remake image collection
			$(spotcommerce_easy_text_picker[1452] + item_string_pack.label[0].ename + spotcommerce_easy_text_picker[1453]).html(content_hook + spotcommerce_easy_text_picker[1454]);
			$(spotcommerce_easy_text_picker[1455] + item_string_pack.label[0].ename + spotcommerce_easy_text_picker[1456]).addClass(spotcommerce_easy_text_picker[1457]);
			$(spotcommerce_easy_text_picker[1458]).removeAttr(spotcommerce_easy_text_picker[1459]);

			if (on_label_lst_obj.entry.length >= NUMBER_ITEMS_FOR_COLLECTION) 
			{
				$(spotcommerce_easy_text_picker[1460] + item_string_pack.label[0].ename + spotcommerce_easy_text_picker[1461]).find(spotcommerce_easy_text_picker[1462]).show();
			}
			spotcommerce_thumbnail_handler();

			$(spotcommerce_easy_text_picker[1463] + item_string_pack.label[0].ename + spotcommerce_easy_text_picker[1464]).click(function () 
			{
				spotcommerce_package_pre_lst($(this));
			});
		}, spotcommerce_easy_text_picker[1465]).fail(function () {
			if (!spotcommerce_box_checker()) {
				alert(spotcommerce_easy_text_picker[1466]);
			}
		});

		// on list inner label checker
		$(spotcommerce_easy_text_picker[1467]).on(spotcommerce_easy_text_picker[1468], function () {
			$(this).attr(spotcommerce_easy_text_picker[1469], spotcommerce_easy_text_picker[1470]);
			var on_label_lst_inner = $(this).val();

			$(spotcommerce_easy_text_picker[1471]).removeClass(spotcommerce_easy_text_picker[1472]);
			$(spotcommerce_easy_text_picker[1473] + on_label_lst_inner + spotcommerce_easy_text_picker[1474]).addClass(spotcommerce_easy_text_picker[1475]);


			if (!$(spotcommerce_easy_text_picker[1476] + on_label_lst_inner + spotcommerce_easy_text_picker[1477]).html()) 
			{
				$(spotcommerce_easy_text_picker[1478] + on_label_lst_inner + spotcommerce_easy_text_picker[1479]).html(spotcommerce_easy_text_picker[1480] + AJAX_LOADING_IMAGE + spotcommerce_easy_text_picker[1481]);

				$.get(Feed_URL + spotcommerce_easy_text_picker[1482] + on_label_lst_inner + spotcommerce_easy_text_picker[1483] + NUMBER_ITEMS_FOR_COLLECTION, function (json) {

					var on_label_lst_obj = spotcommerce_call_back_primary(json);
					var content_hook = spotcommerce_easy_text_picker[1484];

					if (on_label_lst_obj.entry.length) {
						for (var level_1 = 0; level_1 < on_label_lst_obj.entry.length; level_1++) {
							var active_list_pre_enter = spotcommerce_easy_text_picker[1485];
							if (level_1 % 2 == 0) {
								active_list_pre_enter += spotcommerce_easy_text_picker[1486];
							} else {
								active_list_pre_enter += spotcommerce_easy_text_picker[1487];
							}
							if (level_1 % 3 == 0) {
								active_list_pre_enter += spotcommerce_easy_text_picker[1488];
							}
							if (level_1 % 4 == 0) {
								active_list_pre_enter += spotcommerce_easy_text_picker[1489];
							}

							object_format_link = on_label_lst_obj.entry[level_1];

							/*content hook maker from parsed data*/
							content_hook += spotcommerce_easy_text_picker[1490] + active_list_pre_enter + spotcommerce_easy_text_picker[1491] + object_format_link.id + spotcommerce_easy_text_picker[1492];
							content_hook += spotcommerce_easy_text_picker[1493] + object_format_link.link + spotcommerce_easy_text_picker[1494];
							content_hook += spotcommerce_easy_text_picker[1495] + object_format_link.thumbnail + spotcommerce_easy_text_picker[1496];

							/*content hook add link and title*/
							content_hook += spotcommerce_easy_text_picker[1497];
							content_hook += spotcommerce_easy_text_picker[1498];
							content_hook += spotcommerce_easy_text_picker[1499] 
										+ object_format_link.link 
										+ spotcommerce_easy_text_picker[1500] 
										+ object_format_link.title 
										+ spotcommerce_easy_text_picker[1501];

							// filter in case link list has empty data
							if (!spotcommerce_empty_checker(object_format_link.cate)) {
								content_hook += spotcommerce_easy_text_picker[1502] + object_format_link.id + spotcommerce_easy_text_picker[1503] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1504]) + spotcommerce_easy_text_picker[1505];
							} else {
								content_hook += spotcommerce_easy_text_picker[1506] + object_format_link.link + spotcommerce_easy_text_picker[1507] + spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1508]) + spotcommerce_easy_text_picker[1509];
							}

							content_hook += spotcommerce_easy_text_picker[1510];
							content_hook += spotcommerce_attributes(object_format_link.cate);
							content_hook += spotcommerce_easy_text_picker[1511];
						}
					}

					/*
					fixme: some time user hover and not load text correctly
					*/					
					$(spotcommerce_easy_text_picker[1512] + on_label_lst_inner + spotcommerce_easy_text_picker[1513]).html(content_hook + spotcommerce_easy_text_picker[1514]);

					$(spotcommerce_easy_text_picker[1515]).removeAttr(spotcommerce_easy_text_picker[1516]);

					if (on_label_lst_obj.entry.length >= NUMBER_ITEMS_FOR_COLLECTION) {
						$(spotcommerce_easy_text_picker[1517] + on_label_lst_inner + spotcommerce_easy_text_picker[1518]).find(spotcommerce_easy_text_picker[1519]).show();
					}

					spotcommerce_thumbnail_handler();

					$(spotcommerce_easy_text_picker[1520] + on_label_lst_inner + spotcommerce_easy_text_picker[1521]).click(function () {
						spotcommerce_package_pre_lst($(this));
					});

				}, spotcommerce_easy_text_picker[1522]);
			} else {
				$(this).removeAttr(spotcommerce_easy_text_picker[1523]);

				spotcommerce_thumbnail_handler();
			}
		});
	});
} else {
	$(spotcommerce_easy_text_picker[1524]).remove();
}

// drop spin box remake
$(spotcommerce_easy_text_picker[1525]).append(spotcommerce_easy_text_picker[1526]);

$(spotcommerce_easy_text_picker[1527]).each(function () {
	$(this).find(spotcommerce_easy_text_picker[1528]).each(function () {
		var drop_spin_title = $(this).html();
		if (drop_spin_title && drop_spin_title.length > 1 && !isNaN(drop_spin_title.substring(1))) {
			if (drop_spin_title.indexOf(spotcommerce_easy_text_picker[1529]) == 0) {
				$(this).hide();
				$(this).next().remove();
				return;
			} else if (drop_spin_title.indexOf(spotcommerce_easy_text_picker[1530]) == 0) {
				$(this).hide();
				$(this).next().remove();
				return;
			}
		}

		/*
		when active drop spin
		hidden the current and remove the next one
		*/
		if (drop_spin_title === spotcommerce_easy_text_picker[1531]) {
			$(this).hide();
			$(this).next().remove();
			return;
		}
		$(this).attr(spotcommerce_easy_text_picker[1532], $(this).attr(spotcommerce_easy_text_picker[1533]) + spotcommerce_easy_text_picker[1534]);
	});
});

// show result pack
$(spotcommerce_easy_text_picker[1535]).show();

// prepare before enter listing
function spotcommerce_json_tab_third(json, current_post_id) {
	var content_hook = spotcommerce_easy_text_picker[1536];
	var simple_listing_limitation = json.entry.length - 1;
	for (var level_1 = 0; level_1 < simple_listing_limitation; level_1++) {
		var object_format_link = json.entry[level_1];
		if (object_format_link.id == current_post_id) {
			simple_listing_limitation++;
			break;
		}
	}

	// out of listing limitation handle
	if (simple_listing_limitation) {
		var simple_listing_recorder = 0;

		// loop until limitation
		for (var level_1 = 0; level_1 < simple_listing_limitation; level_1++) {
			object_format_link = json.entry[level_1];
			var object_format_link = json.entry[level_1];
			if (object_format_link.id == current_post_id) {
				continue;
			}

			// premade before enter with listing recorder
			var active_list_pre_enter = spotcommerce_easy_text_picker[1537];
			if (simple_listing_recorder % 2 == 0) {
				active_list_pre_enter += spotcommerce_easy_text_picker[1538];
			} else {
				active_list_pre_enter += spotcommerce_easy_text_picker[1539];
			}
			if (simple_listing_recorder % 3 == 0) {
				active_list_pre_enter += spotcommerce_easy_text_picker[1540];
			}
			if (simple_listing_recorder % 4 == 0) {
				active_list_pre_enter += spotcommerce_easy_text_picker[1541];
			}

			// collect content for hook
			content_hook += spotcommerce_easy_text_picker[1542] + active_list_pre_enter + spotcommerce_easy_text_picker[1543] + object_format_link.id + spotcommerce_easy_text_picker[1544];
			content_hook += spotcommerce_easy_text_picker[1545] + object_format_link.link + spotcommerce_easy_text_picker[1546];
			content_hook += spotcommerce_easy_text_picker[1547] + object_format_link.thumbnail + spotcommerce_easy_text_picker[1548];
			content_hook += spotcommerce_easy_text_picker[1549];
			content_hook += spotcommerce_easy_text_picker[1550];
			content_hook += spotcommerce_easy_text_picker[1551] 
							+ object_format_link.link 
							+ spotcommerce_easy_text_picker[1552] 
							+ object_format_link.title 
							+ spotcommerce_easy_text_picker[1553];

			// double check to make sure the link list not empty				
			if (!spotcommerce_empty_checker(object_format_link.cate)) {
				content_hook += spotcommerce_easy_text_picker[1554] + object_format_link.id + spotcommerce_easy_text_picker[1555] 			+ spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1556]) 
								+ spotcommerce_easy_text_picker[1557];
			} else {
				/*
				if cate is empty, 
				hook the content with format link instead
				*/
				content_hook += spotcommerce_easy_text_picker[1558] 
							+ object_format_link.link 
							+ spotcommerce_easy_text_picker[1559] 
							+ spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1560]) 
							+ spotcommerce_easy_text_picker[1561];
			}
			content_hook += spotcommerce_easy_text_picker[1562];
			content_hook += spotcommerce_attributes(object_format_link.cate);
			content_hook += spotcommerce_easy_text_picker[1563];

			// increasing record to pointer to next record
			// or out when exit limitation
			simple_listing_recorder++;
		}
	}
	return content_hook;
}

// check link list for chain
if (short_list_google_search_links) {
	$(spotcommerce_easy_text_picker[1564]).each(function () {
		var page_counter_01 = spotcommerce_easy_text_picker[1565];
		var lab_in_chain = short_list_google_search_links.href.substring(short_list_google_search_links.href.indexOf(page_counter_01) + page_counter_01.length);
		var lab_in_chain_increasing = 3;
		$.get(Feed_URL + spotcommerce_easy_text_picker[1566] + lab_in_chain + spotcommerce_easy_text_picker[1567], function (json) {
			var lab_in_chain_index_01 = spotcommerce_call_back_primary(json);
			var money_final_out_on_mail = lab_in_chain_index_01.total_entry;
			var lab_in_chain_key = Math.floor(Math.random() * (money_final_out_on_mail - lab_in_chain_increasing) + 1);
			if (lab_in_chain_key < 1) {
				lab_in_chain_key = 1;
			}

			/*
			fixme: some time Blogger feed return text, instead of json callback
			*/
			$.get(Feed_URL + spotcommerce_easy_text_picker[1568] + lab_in_chain + spotcommerce_easy_text_picker[1569] + (lab_in_chain_increasing + 1) + spotcommerce_easy_text_picker[1570] + lab_in_chain_key + spotcommerce_easy_text_picker[1571], function (json) {

				// init and valide lab_chain
				var lab_in_chain_objects = spotcommerce_call_back_primary(json);
				var lab_in_chain_list_exclude = $(spotcommerce_easy_text_picker[1572]).text();
				var content_hook = spotcommerce_json_tab_third(lab_in_chain_objects, lab_in_chain_list_exclude);

				// double check if have some hooks before apply filter to feed
				if (content_hook) {
					$(spotcommerce_easy_text_picker[1573]).html(
						spotcommerce_json_tab_third(lab_in_chain_objects, lab_in_chain_list_exclude)
					);

					$(spotcommerce_easy_text_picker[1574]).show();
					spotcommerce_thumbnail_handler();

					// premade before enter listing
					$(spotcommerce_easy_text_picker[1575]).click(function () {
						spotcommerce_package_pre_lst($(this));
					});
				}
			}, spotcommerce_easy_text_picker[1576]);
		}, spotcommerce_easy_text_picker[1577]);
	});
}

/*
Update after version 1.2.0
fixme: apply easy text picker also, after fixing TNV Blogger IDE
*/
// comment remake
// ##############
$('.comment-thread > ol > li > .comment-block').each(function(){
	$(this).prepend(spotcommerce_easy_text_picker[1579]);
});


$('.comments .comments-content .comment-thread > .continue').each(function(){
	var cancel_button = $(this);
	cancel_button.addClass('comment-cancel-form').addClass('color-bg').addClass('black-bg-hover').addClass('white').css('display', 'none');
	cancel_button.find('a').html(spotcommerce_translated_mapper(spotcommerce_easy_text_picker[1588]));
});
$('.comments .continue').each(function(){
	if (!$(this).is('.comment-cancel-form')) {
		$(this).find('a').addClass('comment-reply-link');
	}
});
$('.comments .comment .comment-actions a[o="r"]').each(function(){
	$(this).addClass('comment-reply-link');
});
$('.comments .comment-reply-link').mousedown(function(){
	// on reply
	$(this).parents('.comment').each(function(){
		$(this).children().each(function () {
			if ($(this).is('.comment-replies')) {
				var appended = false;
				$(this).find('.comment-replybox-thread').each(function(){
					appended = true;
					$(this).prepend($('.comment-cancel-form'));
				});
				if (!appended) {
					$(this).append($('.comment-cancel-form'));
				}
				$('.comment-cancel-form').show();
			}
		});
	});
});
$('.comment-cancel-form').mousedown(function(){
	setTimeout(function(){
		$('#comment-editor').each(function(){
			$("html, body").animate({ scrollTop: $(this).offset().top }, 200);
		});
	}, 500);
});
$('.comments .comment .comment-actions a[o="r"]').mousedown(function(){
	setTimeout(function(){
		$('.comment-cancel-form').each(function(){
			$("html, body").animate({ scrollTop: $(this).offset().top }, 200);
		});
	}, 500);
});

// 404 page
//<i data-key="Page Missing">Page Missing</i>
//<i data-key="Something Went Wrong">Something Went Wrong</i>
//<i data-key="This search can help you find what you need">This search can help you find what you need</i>
if (spotcommerce_on_error()) {
	$('.blog-posts.hfeed.error_page').each(function(){
		$(this).addClass('p-404');
		var level_404 = '';
		level_404 += '<h1 class="title-404">' + spotcommerce_translated_mapper('PAGE MISSING') + ' - 404</h1>';
		level_404 += '<div class="icon-404 color"><i class="fa fa-circle-o-notch"></i></div>';
		level_404 += '<div class="msg-1-404">'+spotcommerce_translated_mapper('Something Went Wrong')+'</div>';
		level_404 += '<div class="msg-2-404">'+spotcommerce_translated_mapper('This search can help you find what you need')+'</i></div>';
		$(this).html(level_404);
		$('#search-form').appendTo($(this));
		$('#search-form').addClass('search-404');
		$('.search-toggle').remove();
	});
}
var search_place_holder = spotcommerce_translated_mapper('Input keywords and enter ...');
$('#search-form #search-text').val(search_place_holder);
$('#search-form #search-text').on('blur', function(){
	if ($(this).val() == '') {
		$(this).val(search_place_holder);
	}
});
$('#search-form #search-text').on('focus', function(){
	if ($(this).val() == search_place_holder) {
		$(this).val('');
	}
});