// 栏目展开

$('.nav dl dt').click(function () {
    $(this).siblings('a').find('dd').slideToggle()
})

$('.nav dl a').each((index,item)=>{
    // console.log($(item).context.href)
    if( window.location.href.slice(0,$(item).context.href.length)==$(item).context.href){
        $(item).find('dd').addClass("no")
        $(item).find('dd').slideDown(0)
        $(item).siblings('a').find('dd').slideDown(0)
    }
    if($(item).context.href=="http://127.0.0.1:8080/user_index" && window.location.href.slice(0,30)=="http://127.0.0.1:8080/user_edi"){
        $(item).find('dd').slideDown(0)
        $(item).siblings('a').find('dd').slideDown(0)
    }
    if((window.location.href.slice(0,30)=="http://127.0.0.1:8080/works_ed" || window.location.href.slice(0,30)=="http://127.0.0.1:8080/works_ad")&& $(item).context.href=="http://127.0.0.1:8080/works_index"){
        $(item).find('dd').slideDown(0)
        $(item).siblings('a').find('dd').slideDown(0)
    }
    if((window.location.href.slice(0,30)=="http://127.0.0.1:8080/news_add" || window.location.href.slice(0,30)=="http://127.0.0.1:8080/news_ind")&& $(item).context.href=="http://127.0.0.1:8080/news_index"){
        $(item).find('dd').slideDown(0)
        $(item).siblings('a').find('dd').slideDown(0)
    }
    // if($(item).text() == 2){
    // $(item).remove()
    // }
    // if($(item).text() == 2){
    // $(item).text("")
    // }
    })

// let parent=document.getElementsByClassName("user")[0]
// $('.user').find("dd").slideToggle()
// 打印
function preview() {
    bdhtml = window.document.body.innerHTML;
    sprnstr = "<!--startprint-->";
    eprnstr = "<!--endprint-->";
    prnhtml = bdhtml.substr(bdhtml.indexOf(sprnstr) + 17);
    prnhtml = prnhtml.substring(0, prnhtml.indexOf(eprnstr));
    window.document.body.innerHTML = prnhtml;
    window.print();
}

// $(document).ready(function () {
//     if( window.location.href.indexOf("index")>0){
//     var max=Math.ceil(document.getElementById("totall").innerText/10)
//     dready(max)}
// });
function dready(max){
    var sf=window.location.search.indexOf("page")
    var page
    if (sf==-1){page="page=1"}else{
    page=window.location.search.slice(sf,100)}
    page=page.split("=")[1]
    var org=window.location.search.split("page=")
    if(page==""){page=1}
    org=org[0]//.split("=")
    if(org==""){org="?"}
    if( org.slice(org.length-1,org.length)=="&"){org=org.slice(0,org.length-1)}
    org+"page=5"
    pm2=(Number(page)-2)
    if (pm2<1){pm2=""}
    pm1=(Number(page)-1)
    if (pm1<1){pm1=""}
    p1=(Number(page)+1)
    if (p1>max){p1=""}
    p2=(Number(page)+2)
    if (p2>max){p2=""}
    
    console.log("Start paging "+p2)
    document.getElementById("page1").href=org+"&page=1"
    if (pm1==""){document.getElementById("page2").innerText=""}else{
    document.getElementById("page2").href=org+"&page="+pm1}
    document.getElementById("page3").href=org+"&page="+pm2
    document.getElementById("page3").innerText=pm2
    document.getElementById("page4").href=org+"&page="+pm1
    document.getElementById("page4").innerText=pm1
    document.getElementById("page5").innerText=page
    document.getElementById("page6").href=org+"&page="+p1
    document.getElementById("page6").innerText=p1
    document.getElementById("page7").href=org+"&page="+p2
    document.getElementById("page7").innerText= p2
    if (p1==""){document.getElementById("page8").innerText=""}else{
    document.getElementById("page8").href=org+"&page="+p1}
    document.getElementById("page9").href=org+"&page="+(max)
    console.log("当前页面："+page)

    var wlss=window.location.search.split("f=")
    if (wlss.length==1){wlss = ""}else{
    wlss=wlss[1]
    wlss=wlss.split("&")[0]}
    var oDiv = document.getElementById("vipt");
    if (wlss == "") {
        document.getElementById("All").className = "no"
    } else {
        let ff = document.getElementById(wlss);
        ff.className = "no"
    var	viptype=ff.innerText
        oDiv.innerText=viptype;
    }
    document.getElementById("max").innerText="共"+max+"页"}