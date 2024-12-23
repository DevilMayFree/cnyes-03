(function(){
    var attachSheet = document.head.appendChild(document.createElement('style')).sheet;
    attachSheet.insertRule("#LiTV:has(> div[id^='ppn-Y3ky|Y3k=']) { width: 85%; margin-right: auto; margin-left: auto; }", 0);
    attachSheet.insertRule(".litv-player .unmute { display: none !important; }", 0);
    var b1i = setInterval(function(){
        var l = document.querySelectorAll(".list-title a");
        if(l.length > 0){
            clearInterval(b1i);
            l.forEach(function(a){ a.target = "_blank" });
        }
    }, 500);
    var b2i = setInterval(function(){
        var l = Array.from(document.querySelectorAll("#NewsTwStockExpert.section-aside-container a"));
        if(false == l.every(function(a){ return a.target == "_blank";} )){
            l.forEach(function(a){ a.target = "_blank"; });
        }
    }, 500);
})();