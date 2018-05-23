require.config({
    paths:{
        "jquery":"lib/jquery",
        "text":"lib/text",
        "page1":"../template/index.html",
        "page2":"../template/base.html",
        "page3":"../template/time.html",
    

    },
    text:{
        onXhr:function(xhr,url){ //在send方法执行之前设置一些header头

        },
        createXhr:function(){//覆盖插件默认对象


        },
        onXhrComplete:function(xhr,url){ //在ajax请求完成后执行的函数

        }
    }
    
});
require(['jquery','text!page1!strip','text!page2!strip','text!page3!strip'],function ($,page1,page2,page3) {
    //加载首页
    // $(".page").html(page1);
    //返回按钮
    $('.top').on('click','#a1',function () {
        $('.page').html(page1)
    });

    // 页面跳转
    $('.top').on('click','#a2',function () {
         $('.page').html(page2)
    });

    $('.top').on('click','#a3',function () {
        $('.page').html(page3)
    });


    $("#dl").click(function(){
        $("#home").show()
    })


});
