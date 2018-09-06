window.onload = function(){
   
 var shopping = document.querySelector('.nav-right-text .shoppingcar');
 var shoppingimg = document.querySelector('.shoppingcar img');
 var shoppingnone = document.querySelector('.shopping-none');


 shopping.onmouseover = function(){
     shoppingimg.src =  './image/shopping.png';
     shopping.style.color = '#f25807'
     shoppingnone.style.height = '100px';
     shoppingnone.style.lineHeight = '100px';
     shopping.style.background = '#fff'
 }
 shopping.onmouseout = function(){
     shoppingimg.src =  './image/shopping1.png';
     shopping.style.color = '#b0b0b0';
     shoppingnone.style.height = '0';
     shopping.style.background = '#424242'
 }
 shoppingnone.onmouseover = function(){
    shoppingimg.src =  './image/shopping.png';
    shopping.style.color = '#f25807'
    shoppingnone.style.height = '100px';
    shopping.style.color = '#f25807'
    shopping.style.background = '#fff'
 }
 shoppingnone.onmouseout = function(){
    shoppingimg.src =  './image/shopping1.png';
    shopping.style.color = '#b0b0b0';
    shoppingnone.style.height = '0';
    shopping.style.background = '#424242'
 }

 var input_go = document.querySelector('.input_go');
 var search_none = document.querySelector('.search_none');
 input_go.onmouseover = function(){
    search_none.style.display = 'block';
 }
 input_go.onmouseout = function(){
     search_none.style.display ='none';
 }

 var input_search = document.querySelector('.input_search');
 var body = document.querySelector('body');
 var input_searchbool = 1;
 var search_in = document.querySelector('.search_in');
 var input_go = document.querySelector('.input_go');
 var search_none2 = document.querySelector('.search_none2')
    input_search.onclick = function(){
        setTimeout(function(){
            search_in.style.display = 'none';
        },100);
        input_searchbool=0;
        input_go.style.border = '1px solid #ff6700'
        event.stopPropagation();
        search_none2.style.display = 'block';
     }
 
 body.onclick = function(){
    setTimeout(function(){
        search_in.style.display = 'block';
        search_none2.style.display = 'none';
    },100);
    // search_in.style.right = '65px';
    event.stopPropagation();
    // search_in.style.top = '40px';
    input_go.style.border = '1px solid #ccc';
 }
// --------------------------------------------------------导航栏动效
 var product_type = document.querySelectorAll('.product_type li');
 var newspan = document.querySelectorAll('.newspan');
 var nav_hide_ul = document.querySelectorAll('.nav_hide_ul');
 var nav_hide = document.querySelector('.nav_hide');
 var nav_top_length = 8;

 function claer_new_span(i){
    newspan[i].innerHTML = '';
    newspan[i].style.border = 'none'
 }
 var fan = [3,4,5,9,10,11,17,18,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,37,38,41,42,44,45,46,47];

 
 for(var i=0;i<fan.length;i++){
    claer_new_span( fan[i]) ;      
}
 for(var i=0;i<nav_top_length;i++){
     nav_hide_ul[i].style.display = 'none';
     product_type[i].index = i;
    
     product_type[i].onmouseover = function(){
        var a =this.index
       
        for(var k=0; k<nav_top_length;k++){
            nav_hide_ul[k].style.display = 'none';
            nav_hide.style.height = '235px';
        }
        nav_hide_ul[a].style.display = 'block';
        setTimeout(function(){
         
        },1000)
    }
      product_type[i].onmouseout = function(){
        nav_hide.style.height = '0px';
    }
 }
 
 var nav_hide_li = document.querySelectorAll('.nav_hide_li');


 for(var i=0;i<nav_hide_li.length;i++){
    nav_hide_li[i].index = i;
    nav_hide_li[i].onmouseover = function(){
        for(var k=0; k<nav_top_length;k++){
            nav_hide.style.height = '235px';
        }
    }
    nav_hide_li[i].onmouseout = function(){
       
        nav_hide.style.height = '0px';
    }
}

         var imgs = document.querySelector('.tabimg_imgs');
        var radius = document.querySelectorAll('.tabimg_radius a');
        console.log(imgs)
        console.log(radius)
        var length = 5;
        
        var times = null;
        var imgs_radius = 0;
        var tabimg_left = document.querySelector('.tabimg_left');
        var tabimg_right = document.querySelector('.tabimg_right');
         var imgs_index = 0;
        tabimg_left.onclick = function (){
         if(imgs_index!= -4904){
            imgs_index = imgs_index - 1226;
            imgs.style.left = imgs_index + 'px';
            imgs_radius = imgs_radius + 1;
            for (var i = 0; i < length; i++) {
                        radius[i].style.background = 'rgba(0,0,0,0.4)';
                        radius[i].style.border = '2px solid #fff';
                        radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
                    }
                    radius[imgs_radius].style.border = '2px solid #fff';
                    radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
                    radius[imgs_radius].style.background = 'white';
                    clearInterval(times);
                    times  = setInterval(function(){
                        if(imgs_index==-4904){
                            imgs_index = 1226;
                            imgs_radius = -1;
                        }
                        imgs_index = imgs_index - 1226;
                        imgs.style.left = imgs_index + 'px';
                        imgs_radius = imgs_radius + 1;
                        for (var i = 0; i < length; i++) {
                            radius[i].style.background = 'rgba(0,0,0,0.4)';
                            radius[i].style.border = '2px solid #fff';
                            radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
                        }
                        
                        radius[imgs_radius].style.border = '2px solid #fff';
                        radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
                        radius[imgs_radius].style.background = 'white';
                    },3000)
         }
        }
        tabimg_right.onclick = function(){
            if(imgs_index!=0){
              imgs_index = imgs_index + 1226;
              imgs.style.left = imgs_index + 'px';
              imgs_radius = imgs_radius - 1;
              for (var i = 0; i < length; i++) {
                radius[i].style.background = 'rgba(0,0,0,0.4)';
                radius[i].style.border = '2px solid #fff';
                radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
            }
            
            radius[imgs_radius].style.border = '2px solid #fff';
            radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
            radius[imgs_radius].style.background = 'white';
            clearInterval(times);
                    times  = setInterval(function(){
                        if(imgs_index==-4904){
                            imgs_index = 1226;
                            imgs_radius = -1;
                        }
                        imgs_index = imgs_index - 1226;
                        imgs.style.left = imgs_index + 'px';
                        imgs_radius = imgs_radius + 1;
                        for (var i = 0; i < length; i++) {
                            radius[i].style.background = 'rgba(0,0,0,0.4)';
                            radius[i].style.border = '2px solid #fff';
                            radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
                        }
                        
                        radius[imgs_radius].style.border = '2px solid #fff';
                        radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
                        radius[imgs_radius].style.background = 'white';
                    },3000)
            }
        } 
       var times  = setInterval(function(){
            if(imgs_index==-4904){
                imgs_index = 1226;
                imgs_radius = -1;
            }
            imgs_index = imgs_index - 1226;
            imgs.style.left = imgs_index + 'px';
            imgs_radius = imgs_radius + 1;
            for (var i = 0; i < length; i++) {
                radius[i].style.background = 'rgba(0,0,0,0.4)';
                radius[i].style.border = '2px solid #fff';
                radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
            }
            
            radius[imgs_radius].style.border = '2px solid #fff';
            radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
            radius[imgs_radius].style.background = 'white';
        },3000)
        
        radius[0].onclick = function(){
            imgs.style.left = 0;
            imgs_radius = 0;
            for (var i = 0; i < length; i++) {
                radius[i].style.background = 'rgba(0,0,0,0.4)';
                radius[i].style.border = '2px solid #fff';
                radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
            }
            
            radius[0].style.border = '2px solid #fff';
            radius[0].style.borderColor = 'rgba(0,0,0,0.4)';
            radius[0].style.background = 'white';
            clearInterval(times);
            times  = setInterval(function(){
                if(imgs_index==-4904){
                    imgs_index = 1226;
                    imgs_radius = -1;
                }
                imgs_index = imgs_index - 1226;
                imgs.style.left = imgs_index + 'px';
                imgs_radius = imgs_radius + 1;
                for (var i = 0; i < length; i++) {
                    radius[i].style.background = 'rgba(0,0,0,0.4)';
                    radius[i].style.border = '2px solid #fff';
                    radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
                }
                
                radius[imgs_radius].style.border = '2px solid #fff';
                radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
                radius[imgs_radius].style.background = 'white';
            },3000)
        }
        radius[1].onclick = function(){
            imgs.style.left = '-1226px';
            imgs_radius = 1;
            imgs_index = -1226;
            for (var i = 0; i < length; i++) {
                radius[i].style.background = 'rgba(0,0,0,0.4)';
                radius[i].style.border = '2px solid #fff';
                radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
            }
            
            radius[1].style.border = '2px solid #fff';
            radius[1].style.borderColor = 'rgba(0,0,0,0.4)';
            radius[1].style.background = 'white';
            clearInterval(times);
            times  = setInterval(function(){
                if(imgs_index==-4904){
                    imgs_index = 1226;
                    imgs_radius = -1;
                }
                imgs_index = imgs_index - 1226;
                imgs.style.left = imgs_index + 'px';
                imgs_radius = imgs_radius + 1;
                for (var i = 0; i < length; i++) {
                    radius[i].style.background = 'rgba(0,0,0,0.4)';
                    radius[i].style.border = '2px solid #fff';
                    radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
                }
                
                radius[imgs_radius].style.border = '2px solid #fff';
                radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
                radius[imgs_radius].style.background = 'white';
            },3000)
        }
        radius[2].onclick = function(){
            imgs.style.left = '-2452px';
            imgs_radius = 2;
            imgs_index = -2452;
            for (var i = 0; i < length; i++) {
                radius[i].style.background = 'rgba(0,0,0,0.4)';
                radius[i].style.border = '2px solid #fff';
                radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
            }
            
            radius[2].style.border = '2px solid #fff';
            radius[2].style.borderColor = 'rgba(0,0,0,0.4)';
            radius[2].style.background = 'white';
            clearInterval(times);
            times  = setInterval(function(){
                if(imgs_index==-4904){
                    imgs_index = 1226;
                    imgs_radius = -1;
                }
                imgs_index = imgs_index - 1226;
                imgs.style.left = imgs_index + 'px';
                imgs_radius = imgs_radius + 1;
                for (var i = 0; i < length; i++) {
                    radius[i].style.background = 'rgba(0,0,0,0.4)';
                    radius[i].style.border = '2px solid #fff';
                    radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
                }
                
                radius[imgs_radius].style.border = '2px solid #fff';
                radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
                radius[imgs_radius].style.background = 'white';
            },3000)
        }
        radius[3].onclick = function(){
            imgs.style.left = '-3678px';
            imgs_radius = 3;
            imgs_index = -3678;
            for (var i = 0; i < length; i++) {
                radius[i].style.background = 'rgba(0,0,0,0.4)';
                radius[i].style.border = '2px solid #fff';
                radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
            }
            
            radius[3].style.border = '2px solid #fff';
            radius[3].style.borderColor = 'rgba(0,0,0,0.4)';
            radius[3].style.background = 'white';
            clearInterval(times);
            times  = setInterval(function(){
                if(imgs_index==-4904){
                    imgs_index = 1226;
                    imgs_radius = -1;
                }
                imgs_index = imgs_index - 1226;
                imgs.style.left = imgs_index + 'px';
                imgs_radius = imgs_radius + 1;
                for (var i = 0; i < length; i++) {
                    radius[i].style.background = 'rgba(0,0,0,0.4)';
                    radius[i].style.border = '2px solid #fff';
                    radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
                }
                
                radius[imgs_radius].style.border = '2px solid #fff';
                radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
                radius[imgs_radius].style.background = 'white';
            },3000)
        }
        radius[4].onclick = function(){
            imgs.style.left = '-4904px';
            imgs_radius = 4;
            imgs_index = -4904;
            for (var i = 0; i < length; i++) {
                radius[i].style.background = 'rgba(0,0,0,0.4)';
                radius[i].style.border = '2px solid #fff';
                radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
            }
            
            radius[4].style.border = '2px solid #fff';
            radius[4].style.borderColor = 'rgba(0,0,0,0.4)';
            radius[4].style.background = 'white';
            clearInterval(times);
            times  = setInterval(function(){
                if(imgs_index==-4904){
                    imgs_index = 1226;
                    imgs_radius = -1;
                }
                imgs_index = imgs_index - 1226;
                imgs.style.left = imgs_index + 'px';
                imgs_radius = imgs_radius + 1;
                for (var i = 0; i < length; i++) {
                    radius[i].style.background = 'rgba(0,0,0,0.4)';
                    radius[i].style.border = '2px solid #fff';
                    radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
                }
                
                radius[imgs_radius].style.border = '2px solid #fff';
                radius[imgs_radius].style.borderColor = 'rgba(0,0,0,0.4)';
                radius[imgs_radius].style.background = 'white';
            },3000)
        }

        // function nums() {
        //     ++num;
        //     if (num == length) {
        //         num = 0;
        //     }
        //     time(num)
        // }
        // times = setInterval(nums, 3000);
        

     

        // function time(num) {
        //     for (var i = 0; i < length; i++) {
        //         imgs[i].id = '';
        //         radius[i].style.background = 'rgba(0,0,0,0.4)';
        //         radius[i].style.border = '2px solid #fff';
        //         radius[i].style.borderColor = 'rgba(255,255,255,0.3)';
        //     }
        //     imgs[num].id = 'tabimg_active';
        //     radius[num].style.border = '2px solid #fff';
        //     radius[num].style.borderColor = 'rgba(0,0,0,0.4)';
        //     radius[num].style.background = 'white';
        //     // console.log(num);
        //     // console.log('计时器')
        //    return num;
        // }
        
        // radius[1].onclick = function () {
           
        // }
        // for (var k = 0; k < length; k++) {
        //     radius[k].id = k;
           
            
        //     radius[k].onclick = function () {
             
        //         clearInterval(times);
        //         for (var p = 0; p < length; p++) {
        //             imgs[p].id = '';
        //             radius[p].style.background = 'rgba(0,0,0,0.4)';
        //             radius[p].style.border = '2px solid #fff';
        //             radius[p].style.borderColor = 'rgba(255,255,255,0.3)';
        //         }
        //         imgs[this.id].id = 'tabimg_active';
                
        //         radius[this.id].style.border = '2px solid #fff';
        //         radius[this.id].style.borderColor = 'rgba(0,0,0,0.4)';
        //         radius[this.id].style.background = 'white';
        //     }
            
        //     radius[k].onmouseup = function () {
        //         num = this.id;
        //         times = setInterval(nums, 3000);
        //     }
    
        // }
        // ------------------------------------------------------tab切换动效
        

        var tab_text = document.querySelectorAll('.tab_text ul li');
        var tab_text_list_tab = document.querySelectorAll('.tab_text_list_tab');
        var tab_text_list = document.querySelector('.tab_text_list')
        
        for(var i=0;i<10;i++){
            // tab_text_list_tab[i].style.display = 'none';
            tab_text[i].index = i;
            tab_text_list_tab[i].index = i;
         tab_text[i].onmouseover = function(){
             tab_text_list_tab[this.index].style.display = 'block';
         }
         tab_text[i].onmouseout = function(){
            tab_text_list_tab[this.index].style.display = 'none';
         }
         tab_text_list_tab[i].onmouseover = function(){
            tab_text_list_tab[this.index].style.display = 'block';
        }
        tab_text_list_tab[i].onmouseout = function(){
            tab_text_list_tab[this.index].style.display = 'none';
         }
        }

    //    ---------------------------------------小米闪购---------------------------------------
   var zero_shopping_botton = document.querySelectorAll('.zero_shopping_top a');
   var zero_shopping_right = document.querySelector('.zero_shopping_right ul')

   zero_shopping_botton[1].onclick = function(){

        
        zero_shopping_botton[0].style.color = '#ff6700';
        zero_shopping_right.style.left = '-974px'
        zero_shopping_botton[1].style.color = '#ccc'
   }
   zero_shopping_botton[0].onclick = function(){
    zero_shopping_botton[1].style.color = '#ff6700';
    zero_shopping_right.style.left = '0px';
    zero_shopping_botton[0].style.color = '#ccc'
   }

   //--------------------------------------------- 家电---------------------------------------------------     
   var home_appliance_right = document.querySelectorAll('.home_appliance_right');
   var home_appliance_top = document.querySelectorAll('.home_appliance_top ul li');
   var home_appliance_top_a = document.querySelectorAll('.home_appliance_top ul li a')
 
   
   for(var i=0;i<4;i++){
    home_appliance_top[i].index = i;
    
    home_appliance_top[i].onmouseover = function(){
      for(var k=0;k<4;k++){
        home_appliance_right[k].style.display = 'none';
        home_appliance_top_a[k].style.borderBottom = 'none'
        home_appliance_top_a[k].style.color = "#000"
      }
      home_appliance_right[this.index].style.display = 'block';
      home_appliance_top_a[this.index].style.borderBottom = '2px solid #ff6600';
      home_appliance_top_a[this.index].style.color = "#ff6600"
    }

   }

// --------------------------------------------------------------------------------------------------------

var Intelligence_right = document.querySelectorAll('.Intelligence_right');
var Intelligence_top = document.querySelectorAll('.Intelligence_top ul li');
var Intelligence_top_a = document.querySelectorAll('.Intelligence_top ul li a')

for(var i=0;i<5;i++){
    Intelligence_top[i].index = i;
 
    Intelligence_top[i].onmouseover = function(){
   for(var k=0;k<5;k++){
    Intelligence_right[k].style.display = 'none';
     Intelligence_top_a[k].style.borderBottom = 'none'
     Intelligence_top_a[k].style.color = "#000"
   }
   Intelligence_right[this.index].style.display = 'block';
   Intelligence_top_a[this.index].style.borderBottom = '2px solid #ff6600';
   Intelligence_top_a[this.index].style.color = "#ff6600"
 }

}

// -----------------------------------------------------------------------------------------
var collocation_right = document.querySelectorAll('.collocation_right');
var collocation_top = document.querySelectorAll('.collocation_top ul li');
var collocation_top_a = document.querySelectorAll('.collocation_top ul li a')


for(var i=0;i<4;i++){
    collocation_top[i].index = i;
 
    collocation_top[i].onmouseover = function(){
   for(var k=0;k<4;k++){
    collocation_right[k].style.display = 'none';
     collocation_top_a[k].style.borderBottom = 'none'
     collocation_top_a[k].style.color = "#000"
   }
   collocation_right[this.index].style.display = 'block';
   collocation_top_a[this.index].style.borderBottom = '2px solid #ff6600';
   collocation_top_a[this.index].style.color = "#ff6600"
 }

}
// ---------------------------------------------------------------------------

var parts_right = document.querySelectorAll('.parts_right');
var parts_top = document.querySelectorAll('.parts_top ul li');
var parts_top_a = document.querySelectorAll('.parts_top ul li a')


for(var i=0;i<4;i++){
    parts_top[i].index = i;
 
    parts_top[i].onmouseover = function(){
   for(var k=0;k<4;k++){
    parts_right[k].style.display = 'none';
    parts_top_a[k].style.borderBottom = 'none'
     parts_top_a[k].style.color = "#000"
   }
   parts_right[this.index].style.display = 'block';
   parts_top_a[this.index].style.borderBottom = '2px solid #ff6600';
   parts_top_a[this.index].style.color = "#ff6600"
 }

}

// ----------------------------------------------------------------------


periphery_right
periphery_top



var periphery_right = document.querySelectorAll('.periphery_right');
var periphery_top = document.querySelectorAll('.periphery_top ul li');
var periphery_top_a = document.querySelectorAll('.periphery_top ul li a')

for(var i=0;i<5;i++){
    periphery_top[i].index = i;
 
    periphery_top[i].onmouseover = function(){
   for(var k=0;k<5;k++){
    periphery_right[k].style.display = 'none';
    periphery_top_a[k].style.borderBottom = 'none'
    periphery_top_a[k].style.color = "#000"
   }
   periphery_right[this.index].style.display = 'block';
   periphery_top_a[this.index].style.borderBottom = '2px solid #ff6600';
   periphery_top_a[this.index].style.color = "#ff6600"
 }

}
// ---------------------------------------------------------------------
var recommed_top = document.querySelectorAll('.recommed_top ul li');
var recommed_tab = document.querySelector('.recommed_tab ul');

var left =0;
recommed_top[0].onclick = function (){
   
   if(left!=-3678){
    left = left - 1226;
    recommed_tab.style.left = left + 'px';
   
   }
  
}
recommed_top[1].onclick = function(){
    
    if(left!=0){
     
        left = left +1226;
    recommed_tab.style.left = left + 'px';
    }
   
}
// ------------------------------------------------------------------------
var container_tab_book2 = document.querySelector('.container_tab_book2');
var container_tab_book2_button = document.querySelectorAll('.container_tab_book2_button a');
var container_tab_book2_orange = document.querySelectorAll('.container_tab_book2_orange span');


var boox_orange = 0;
var book_left = 0;
container_tab_book2_button[0].onclick = function(){
  
    if(book_left!=-592){
        for(var i=0;i<3;i++){
            container_tab_book2_orange[i].style.background = '#ccc';
            container_tab_book2_orange[i].style.border = '2px solid #fff';
        }
        book_left = book_left - 296;
        container_tab_book2.style.left = book_left + 'px';
        boox_orange = boox_orange + 1;
        container_tab_book2_orange[boox_orange].style.background = '#ccc';
        container_tab_book2_orange[boox_orange].style.border = '2px solid #ff6600';
    }
  
    
}
container_tab_book2_button[1].onclick = function(){
  
    if(book_left!=0){
        for(var i=0;i<3;i++){
            container_tab_book2_orange[i].style.background = '#ccc';
            container_tab_book2_orange[i].style.border = '2px solid #fff';
        }
        book_left = book_left + 296;
        container_tab_book2.style.left = book_left + 'px';
        boox_orange = boox_orange - 1;
        container_tab_book2_orange[boox_orange].style.background = '#ccc';
        container_tab_book2_orange[boox_orange].style.border = '2px solid #ff6600';
    }
}

container_tab_book2_orange[0].onclick = function (){
  
    for(var i=0;i<3;i++){
        container_tab_book2_orange[i].style.background = '#ccc';
        container_tab_book2_orange[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange[0].style.background = '#fff';
    container_tab_book2_orange[0].style.border = '2px solid #ff6600';
    container_tab_book2.style.left = 0 + 'px';
    book_left =  0; 
    boox_orange = 0;
}
container_tab_book2_orange[1].onclick = function (){
    for(var i=0;i<3;i++){
        container_tab_book2_orange[i].style.background = '#ccc';
        container_tab_book2_orange[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange[1].style.background = '#fff';
    container_tab_book2_orange[1].style.border = '2px solid #ff6600';
    container_tab_book2.style.left = -296 + 'px';
    book_left = -296;
    boox_orange = 1;
}
container_tab_book2_orange[2].onclick = function (){
    for(var i=0;i<3;i++){
        container_tab_book2_orange[i].style.background = '#ccc';
        container_tab_book2_orange[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange[2].style.background = '#fff';
    container_tab_book2_orange[2].style.border = '2px solid #ff6600';
    container_tab_book2.style.left = -592 + 'px';
    book_left = -592;
    boox_orange = 2;
}
// ---------------------------------------------------------------------------------

var container_tab_book21 = document.querySelector('.container_tab_book21');
var container_tab_book2_button1 = document.querySelectorAll('.container_tab_book2_button1 a');
var container_tab_book2_orange1 = document.querySelectorAll('.container_tab_book2_orange1 span');
console.log(container_tab_book2_orange);
console.log(container_tab_book2);
console.log(container_tab_book2_button);

var boox_orange1 = 0;
var book_left1 = 0;
container_tab_book2_button1[0].onclick = function(){
  
    if(book_left1!=-888){
        for(var i=0;i<4;i++){
            container_tab_book2_orange1[i].style.background = '#ccc';
            container_tab_book2_orange1[i].style.border = '2px solid #fff';
        }
        book_left1 = book_left1 - 296;
        container_tab_book21.style.left = book_left1 + 'px';
        boox_orange1 = boox_orange1 + 1;
        container_tab_book2_orange1[boox_orange1].style.background = '#ccc';
        container_tab_book2_orange1[boox_orange1].style.border = '2px solid #ff6600';
    }
  
    
}
container_tab_book2_button1[1].onclick = function(){
  
    if(book_left1!=0){
        for(var i=0;i<4;i++){
            container_tab_book2_orange1[i].style.background = '#ccc';
            container_tab_book2_orange1[i].style.border = '2px solid #fff';
        }
        book_left1 = book_left1 + 296;
        container_tab_book21.style.left = book_left1 + 'px';
        boox_orange1 = boox_orange1 - 1;
        container_tab_book2_orange1[boox_orange1].style.background = '#ccc';
        container_tab_book2_orange1[boox_orange1].style.border = '2px solid #ff6600';
    }
}

container_tab_book2_orange1[0].onclick = function (){
    console.log(11)
    for(var i=0;i<4;i++){
        container_tab_book2_orange1[i].style.background = '#ccc';
        container_tab_book2_orange1[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange1[0].style.background = '#fff';
    container_tab_book2_orange1[0].style.border = '2px solid #ff6600';
    container_tab_book21.style.left = 0 + 'px';
    book_left1 =  0; 
    boox_orange1 = 0;
}
container_tab_book2_orange1[1].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange1[i].style.background = '#ccc';
        container_tab_book2_orange1[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange1[1].style.background = '#fff';
    container_tab_book2_orange1[1].style.border = '2px solid #ff6600';
    container_tab_book21.style.left = -296 + 'px';
    book_left1 =  -296; 
    boox_orange1 = 1;
}
container_tab_book2_orange1[2].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange1[i].style.background = '#ccc';
        container_tab_book2_orange1[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange1[2].style.background = '#fff';
    container_tab_book2_orange1[2].style.border = '2px solid #ff6600';
    container_tab_book21.style.left = -592 + 'px';
    book_left1 =  -592; 
    boox_orange1 = 2;
}
container_tab_book2_orange1[3].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange1[i].style.background = '#ccc';
        container_tab_book2_orange1[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange1[3].style.background = '#fff';
    container_tab_book2_orange1[3].style.border = '2px solid #ff6600';
    container_tab_book21.style.left = -888 + 'px';
    book_left1 =  -888; 
    boox_orange1 = 3;
}

// -------------------------------------------------------------------------------
var container_tab_book22 = document.querySelector('.container_tab_book22');
var container_tab_book2_button2 = document.querySelectorAll('.container_tab_book2_button2 a');
var container_tab_book2_orange2 = document.querySelectorAll('.container_tab_book2_orange2 span');


var boox_orange2 = 0;
var book_left2 = 0;
container_tab_book2_button2[0].onclick = function(){
  
    if(book_left2!=-888){
        for(var i=0;i<4;i++){
            container_tab_book2_orange2[i].style.background = '#ccc';
            container_tab_book2_orange2[i].style.border = '2px solid #fff';
        }
        book_left2 = book_left2 - 296;
        container_tab_book22.style.left = book_left2 + 'px';
        boox_orange2 = boox_orange2 + 1;
        container_tab_book2_orange2[boox_orange2].style.background = '#ccc';
        container_tab_book2_orange2[boox_orange2].style.border = '2px solid #ff6600';
    }
  
    
}
container_tab_book2_button2[1].onclick = function(){
  
    if(book_left2!=0){
        for(var i=0;i<4;i++){
            container_tab_book2_orange2[i].style.background = '#ccc';
            container_tab_book2_orange2[i].style.border = '2px solid #fff';
        }
        book_left2 = book_left2 + 296;
        container_tab_book22.style.left = book_left2 + 'px';
        boox_orange2 = boox_orange2 - 1;
        container_tab_book2_orange2[boox_orange2].style.background = '#ccc';
        container_tab_book2_orange2[boox_orange2].style.border = '2px solid #ff6600';
    }
}

container_tab_book2_orange2[0].onclick = function (){
    console.log(11)
    for(var i=0;i<4;i++){
        container_tab_book2_orange2[i].style.background = '#ccc';
        container_tab_book2_orange2[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange2[0].style.background = '#fff';
    container_tab_book2_orange2[0].style.border = '2px solid #ff6600';
    container_tab_book22.style.left = 0 + 'px';
    book_left2 =  0; 
    boox_orange2 = 0;
}
container_tab_book2_orange2[1].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange2[i].style.background = '#ccc';
        container_tab_book2_orange2[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange2[1].style.background = '#fff';
    container_tab_book2_orange2[1].style.border = '2px solid #ff6600';
    container_tab_book22.style.left = -296 + 'px';
    book_left2 =  -296; 
    boox_orange2 = 1;
}
container_tab_book2_orange2[2].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange2[i].style.background = '#ccc';
        container_tab_book2_orange2[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange2[2].style.background = '#fff';
    container_tab_book2_orange2[2].style.border = '2px solid #ff6600';
    container_tab_book22.style.left = -592 + 'px';
    book_left2 =  -592; 
    boox_orange2 = 2;
}
container_tab_book2_orange2[3].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange2[i].style.background = '#ccc';
        container_tab_book2_orange2[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange2[3].style.background = '#fff';
    container_tab_book2_orange2[3].style.border = '2px solid #ff6600';
    container_tab_book22.style.left = -888 + 'px';
    book_left2 =  -888; 
    boox_orange2 = 3;
}
// -----------------------------------------------------------------------------
var container_tab_book23 = document.querySelector('.container_tab_book23');
var container_tab_book2_button3 = document.querySelectorAll('.container_tab_book2_button3 a');
var container_tab_book2_orange3 = document.querySelectorAll('.container_tab_book2_orange3 span');



var boox_orange3 = 0;
var book_left3 = 0;
container_tab_book2_button3[0].onclick = function(){
  
    if(book_left3!=-888){
        for(var i=0;i<4;i++){
            container_tab_book2_orange3[i].style.background = '#ccc';
            container_tab_book2_orange3[i].style.border = '2px solid #fff';
        }
        book_left3 = book_left3 - 296;
        container_tab_book23.style.left = book_left3 + 'px';
        boox_orange3 = boox_orange3 + 1;
        container_tab_book2_orange3[boox_orange3].style.background = '#ccc';
        container_tab_book2_orange3[boox_orange3].style.border = '2px solid #ff6600';
    }
  
    
}
container_tab_book2_button3[1].onclick = function(){
  
    if(book_left3!=0){
        for(var i=0;i<4;i++){
            container_tab_book2_orange3[i].style.background = '#ccc';
            container_tab_book2_orange3[i].style.border = '2px solid #fff';
        }
        book_left3 = book_left3 + 296;
        container_tab_book23.style.left = book_left3 + 'px';
        boox_orange3 = boox_orange3 - 1;
        container_tab_book2_orange3[boox_orange3].style.background = '#ccc';
        container_tab_book2_orange3[boox_orange3].style.border = '2px solid #ff6600';
    }
}

container_tab_book2_orange3[0].onclick = function (){
    console.log(11)
    for(var i=0;i<4;i++){
        container_tab_book2_orange3[i].style.background = '#ccc';
        container_tab_book2_orange3[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange3[0].style.background = '#fff';
    container_tab_book2_orange3[0].style.border = '2px solid #ff6600';
    container_tab_book23.style.left = 0 + 'px';
    book_left3 =  0; 
    boox_orange3 = 0;
}
container_tab_book2_orange3[1].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange3[i].style.background = '#ccc';
        container_tab_book2_orange3[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange3[1].style.background = '#fff';
    container_tab_book2_orange3[1].style.border = '2px solid #ff6600';
    container_tab_book23.style.left = -296 + 'px';
    book_left3 =  -296; 
    boox_orange3 = 1;
}
container_tab_book2_orange3[2].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange3[i].style.background = '#ccc';
        container_tab_book2_orange3[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange3[2].style.background = '#fff';
    container_tab_book2_orange3[2].style.border = '2px solid #ff6600';
    container_tab_book23.style.left = -592 + 'px';
    book_left3 =  -592; 
    boox_orange3 = 2;
}
container_tab_book2_orange3[3].onclick = function (){
    for(var i=0;i<4;i++){
        container_tab_book2_orange3[i].style.background = '#ccc';
        container_tab_book2_orange3[i].style.border = '2px solid #fff';
    }
    container_tab_book2_orange3[3].style.background = '#fff';
    container_tab_book2_orange3[3].style.border = '2px solid #ff6600';
    container_tab_book23.style.left = -888 + 'px';
    book_left3 =  -888; 
    boox_orange3 = 3;
}
// ----------------------------------------------------------------------------------

var fixed = document.querySelectorAll('.fixed div');
var fixed_img = document.querySelectorAll('.fixed img');
var fixed_p = document.querySelectorAll('.fixed p');
fixed[0].onmouseover = function(){
    fixed_img[0].src = './image/2-2.png';
    fixed_p[0].style.color = '#ff6600';
}
fixed[1].onmouseover = function(){
    fixed_p[1].style.color = '#ff6600';
    fixed_img[1].src = './image/4.png'
}
fixed[2].onmouseover = function(){
    fixed_p[2].style.color = '#ff6600';
    fixed_img[2].src = './image/5-5.png'
}
fixed[3].onmouseover = function(){
    fixed_p[3].style.color = '#ff6600';
    fixed_img[3].src = './image/top2.png'
}
fixed[0].onmouseout = function(){
    fixed_p[0].style.color = '';
  
    fixed_img[0].src = './image/1-1.png'
}
fixed[1].onmouseout = function(){
    fixed_p[1].style.color = '';
    fixed_img[1].src = './image/3-3.png'
}
fixed[2].onmouseout = function(){
    fixed_p[2].style.color = '';
    fixed_img[2].src = './image/5.png'
}
fixed[3].onmouseout = function(){
    fixed_p[3].style.color = '';
    fixed_img[3].src = './image/top1.png'
}
// ----------------------------------------------- 


setInterval(function(){
    var Y_top  = document.documentElement.scrollTop;
    if(Y_top>1000){
        fixed[3].style.display = 'block';
    }else{
        fixed[3].style.display = 'none';
    }
},1000)



}