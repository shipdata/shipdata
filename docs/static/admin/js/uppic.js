$('.uppic').error(function(){
    $(this).attr('src','/static/all/uppic.png')
});
function uppic(e, where, type,size) {
    var that=$(e)
    var s=size||300;
    var t=type||0; //0返回id,1返回路径
    var Cnv = document.createElement('canvas');
    e.parentNode.append(Cnv)
    Cnv.style.display = 'none'
    var Cntx = Cnv.getContext('2d');//获取2d编辑容器
    var img = new Image();
    $('body').toast({
        position:'fixed',
        animateIn:'fadeIn',
        animateOut:'fadeOut',
        content:'上传中...',
        duration:'99999999',
        isCenter:true,
    });
    for (var intI = 0; intI < e.files.length; intI++) {
        var tmpFile = e.files[intI];
        var reader = new FileReader();
        reader.readAsDataURL(tmpFile);
        reader.onload = function (e) {
            url = e.target.result;
            img.src=url;
            img.onload = function () {
                var m = img.width / img.height;         //等比缩放
                Cnv.height =s;                        //该值影响缩放后图片的大小
                Cnv.width= s*m ;                      //img放入画布中
                Cntx.drawImage(img, 0, 0,s*m,s);    //设置起始坐标，结束坐标
                var Pic = Cnv.toDataURL("image/png");
                Pic = Pic.replace(/^data:image\/(png|jpg|gif);base64,/, "");
                $.ajax({
                    url : '/img',
                    type : "post",
                    data :{tp:Pic,where:where},
                    success :function(res){
                        console.log(res)
                        if (res.status==0) {
                             window.wxc.xcConfirm("图片上传失败,请重新上传","error")
                        }else{
                            var r=$('body').toast({
                                position:'fixed',
                                animateIn:'fadeIn',
                                animateOut:'fadeOut',
                                content:'上传成功',
                                duration:'500',
                                isCenter:true,
                            });
                            that.siblings('img').attr('src',res.pathname);
                            // if(t==0){
                                that.siblings('input[type="hidden"]').val(res.mid);
                            // }else{
                            //     that.siblings('input[type="hidden"]').val(res.pathname);
                            // }
                        }
                    }
                });
            }
        }
    }
    e.parentNode.removeChild(Cnv);
};
