/*
 helpers
 */
function debug($text,$var){
    if(CONFIG.DEBUG){
        if(console && console.log){
            console.log($text,$var);
        }
    }
}
function th($number){
    var result="th";
    if($number%10==2){
        result="nd";
    }else if($number%10==3){
        result="rd";
    }
    return($number+result);
}
function addCommas(nStr,$separator) {
    $separator=($separator==undefined||$separator==null)?",":$separator;
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + $separator + '$2');
    }
    return x1 + x2;
}
function formatCurrency($value,$separator,$currency){
    var result=String($value).replace(/[^0-9\.\-]/gi,"");
    $separator=($separator==undefined||$separator==null)?",":$separator;
    $currency=($currency==undefined||$currency==null)?"$":$currency;
    if(isNaN($value)){
        result="N/A";
    }else{
        result=$currency+addCommas(Number(result).toFixed(2),$separator);
    }
    return(result);
}
function updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    if (uri.match(re)) {
        return uri.replace(re, '$1' + key + "=" + value + '$2');
    }
    else {
        return uri + separator + key + "=" + value;
    }
}
function niceDate($timestamp){
    var monthNames=[
        "Janu",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]
    var date=new Date();
    date.setTime($timestamp*1000);
    return(date.getHours()+":"+("0"+date.getMinutes()).substr(-2)+" on "+th(date.getDate())+" of "+monthNames[date.getMonth()]+" "+date.getFullYear());
}
function toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}