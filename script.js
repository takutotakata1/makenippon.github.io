
$(function(){
    $(".syokika").on('click',function(event){
        sessionStorage['nseiji']=100;
        sessionStorage['nkeizai']=100;
        sessionStorage['ngunji']=100;
        sessionStorage['nbunka']=100;
        sessionStorage['nkouhuku']=100;
    });

    var seiji=parseInt(Number(sessionStorage.getItem('nseiji')),10);
    var keizai=parseInt(Number(sessionStorage.getItem('nkeizai')),10);
    var gunji=parseInt(Number(sessionStorage.getItem('ngunji')),10);
    var bunka=parseInt(Number(sessionStorage.getItem('nbunka')),10);
    var kouhuku=parseInt(Number(sessionStorage.getItem('nkouhuku')),10);

    $(".seijiscore").html("政治力："+String(seiji));
    $(".keizaiscore").html("経済力："+String(keizai));
    $(".gunjiscore").html("軍事力："+String(gunji));
    $(".bunkascore").html("文化力："+String(bunka));
    $(".kouhukuscore").html("幸福度："+String(kouhuku));

    $(".pa1").on('click',function(event){
        seiji+=50;sessionStorage['nseiji']=seiji;
        gunji+=10;sessionStorage['ngunji']=gunji;
    });
    $(".pb1").on('click',function(event){
        gunji+=30;sessionStorage['ngunji']=gunji;
        bunka+=40;sessionStorage['nbunka']=bunka;
        kouhuku-=10;sessionStorage['nkouhuku']=kouhuku;
    });
    $(".pc1").on('click',function(event){
        seiji+=50;sessionStorage['nseiji']=seiji;
        keizai+=20;sessionStorage['nkeizai']=keizai;
        kouhuku-=10;sessionStorage['nkouhuku']=kouhuku;
    });
    $(".ev1").on('click',function(event){
        seiji+=50;sessionStorage['nseiji']=seiji;
        keizai+=50;sessionStorage['nkeizai']=keizai;
        bunka+=50;sessionStorage['nbunka']=bunka;
    });
    $(".en1").on('click',function(event){
        seiji+=keizai*0.1;sessionStorage['nseiji']=seiji;
        kouhuku+=keizai*0.1;sessionStorage['nkouhuku']=kouhuku;
        keizai+=bunka*0.1;sessionStorage['nkeizai']=keizai;
    });

    $(".pa2").on('click',function(event){
        seiji+=10;sessionStorage['nseiji']=seiji;
        keizai+=60;sessionStorage['nkeizai']=keizai;
        kouhuku-=10;sessionStorage['nkouhuku']=kouhuku;
    });
    $(".pb2").on('click',function(event){
        seiji+=40;sessionStorage['nseiji']=seiji;
        bunka+=10;sessionStorage['nbunka']=bunka;
        kouhuku+=10;sessionStorage['nkouhuku']=kouhuku;
    });
    $(".pc2").on('click',function(event){
        seiji+=50;sessionStorage['nseiji']=seiji;
        keizai+=30;sessionStorage['nkeizai']=keizai;
        bunka-=10;sessionStorage['nbunka']=bunka;
        kouhuku-=10;sessionStorage['nkouhuku']=kouhuku;
    });
    $(".ev2").on('click',function(event){
        seiji+=80;sessionStorage['nseiji']=seiji;
    });
    $(".en2").on('click',function(event){
        seiji+=kouhuku*0.1;sessionStorage['nseiji']=seiji;
        keizai+=seiji*0.1;sessionStorage['nkouhuku']=kouhuku;
        keizai+=bunka*0.1;sessionStorage['nkeizai']=keizai;
    });

    $(".pa3").on('click',function(event){
        seiji+=25;sessionStorage['nseiji']=seiji;
        keizai+=50;sessionStorage['nkeizai']=keizai;
        kouhuku-=15;sessionStorage['nkouhuku']=kouhuku;
    });
    $(".pb3").on('click',function(event){
        seiji+=60;sessionStorage['nseiji']=seiji;
        keizai+=20;sessionStorage['nkeizai']=keizai;
        kouhuku-=20;sessionStorage['nkouhuku']=kouhuku;
    });
    $(".pc3").on('click',function(event){
        seiji+=60;sessionStorage['nseiji']=seiji;
    });
    $(".ev3").on('click',function(event){
        keizai+=80;sessionStorage['nkeizai']=keizai;
    });
    $(".en3").on('click',function(event){
        seiji+=keizai*0.1;sessionStorage['nseiji']=seiji;
        kouhuku+=keizai*0.1;sessionStorage['nkouhuku']=kouhuku;
        keizai+=bunka*0.1;sessionStorage['nkeizai']=keizai;
    });

    $(".pa4").on('click',function(event){
        seiji+=50;sessionStorage['nseiji']=seiji;
        kouhuku+=10;sessionStorage['nkouhuku']=kouhuku;
    });
    $(".pb4").on('click',function(event){
        seiji+=50;sessionStorage['nseiji']=seiji;
        keizai+=10;sessionStorage['nkeizai']=keizai;
    });
    $(".pc4").on('click',function(event){
        seiji+=60;sessionStorage['nseiji']=seiji;
    });
    $(".ev4").on('click',function(event){
        seiji-=30;sessionStorage['nseiji']=seiji;
        keizai-=30;sessionStorage['nkeizai']=keizai;
        kouhuku-=30;sessionStorage['nkouhuku']=kouhuku;
    });
});
