window.addEventListener('load' , function(){
    var header_hd = document.querySelector('.header-hd');
    var topnav = header_hd.querySelector('.topnav');
    var dds = topnav.querySelectorAll('dd');
    var sle_img = document.querySelector('.sle-l').querySelector('.sle-l-img');
    var lis = document.querySelector('.sle-l').querySelector('.sle-l-txt').querySelectorAll('li');
    var sle_r = document.querySelector('.sle-r');
    var menus =document.querySelector('.menu').querySelectorAll('li');
    var submenus =sle_r.querySelector('.submenu').querySelectorAll('li');
    var hotls = document.querySelector('.hot-hd-l').querySelectorAll('li');
    var hotbds = document.querySelector('.hot-bd').querySelectorAll('ul')
    var mo = 0;
    var nu = 0
    function add(obj , times){
        clearInterval(obj.mue);
        obj.mue = setInterval(function(){
            var spte = (times - header_hd.offsetHeight)/10;
            spte = spte > 0 ? Math.ceil(spte) : Math.floor(spte);
            if(times == header_hd.offsetHeight){
                clearInterval(obj.mue);
            }
            header_hd.style.height = header_hd.offsetHeight + spte +'px'
        },15)
    }
    function sle(obj,times){
        clearInterval(obj.mue)
        obj.mue = setInterval(function(){
            var spte = (times - obj.offsetLeft )/5;
            spte = spte > 0 ? Math.ceil(spte) : Math.floor(spte);
            if(times == obj.offsetLeft){
                clearInterval(obj.mue)
            }
            obj.style.left = obj.offsetLeft +spte +'px'
        },15)
    }
    topnav.addEventListener('mouseover' , function(){
        for(var i=0; i<dds.length; i++){
            dds[i].style.display = 'block';
            header_hd.style.background='rgba(0, 0, 0, .65)';
            add('header_hd' , 340)
        } 
    })
    topnav.addEventListener('mouseleave',function(){
        for(var i=0; i<dds.length; i++){
            dds[i].style.display = 'none';
            header_hd.style.background='';
            header_hd.style.height='131px'
        } 
    })
    var time=setInterval(function(){
        mo++;
        if(mo == 5){
            mo =0
        }
        for(var i=0; i<lis.length; i++){
            lis[i].className='';
        }
        lis[mo].className='kn'
        sle(sle_img , -820*mo)
    },1500)
    for(var i=0; i<lis.length; i++){
        lis[i].setAttribute('data-index',i)
        lis[i].addEventListener('mouseover', function(){
            clearInterval(time);
            var index = this.getAttribute('data-index')
           mo= nu = index;
            for(var i=0; i<lis.length; i++){
                lis[i].className='';
            }
            this.className='kn'
            sle(sle_img , -820*index)
        })
        lis[i].addEventListener('mouseout' ,function(){
            time=setInterval(function(){
                mo++;
                if(mo == 5){
                    mo =0
                }
                for(var i=0; i<lis.length; i++){
                    lis[i].className='';
                }
                lis[mo].className='kn'
                sle(sle_img , -820*mo)
            },1500)
        })
    }
    for(var i=0; i<menus.length; i++){
        menus[i].setAttribute('data-index' , i)
        menus[i].addEventListener('mouseover' ,function(){
            var index = this.getAttribute('data-index')
            if(index == 0){
                submenus[0].innerHTML='<a href="javascript">双城之战宝典：4款全新皮肤免费领取</a>'
                submenus[1].innerHTML='<a href="javascript"><span>公告</span>11月4号凌晨1点停机版本更新公告<i>11-03</i></a>'
                submenus[2].innerHTML='<a href="javascript"><span>公告</span> 11.22云顶之弈版本更新公告<i>11-03</i></a>'
                submenus[3].innerHTML='<a href="javascript"><span>公告</span>双城之战魔法引擎礼包限时开放<i>11-03</i></a>'
                submenus[4].innerHTML='<a href="javascript"><span class="xw">新闻</span>云顶之弈：双城之战 装备再发明<i>11-03</i></a>'
                submenus[5].innerHTML='<a href="javascript"><span  class="xw">新闻</span>云顶之弈：双城之战 羁绊一图流<i>11-03</i></a>'
                submenus[6].innerHTML='<a href="javascript"><span>视频 </span>机器人大战 | 云顶之弈<i>11-02</i></a>'
            }else if(index ==1){
                submenus[0].innerHTML='<a href="javascript:;">11月4号凌晨1点停机版本更新公告</a>'
                submenus[1].innerHTML='<a href="javascript:;"><span>公告</span>11.22云顶之弈版本更新公告<i>11-03</i></a>'
                submenus[2].innerHTML='<a href="javascript:;"><span>公告</span>双城之战魔法引擎礼包限时开放<i>11-03</i></a>'
                submenus[3].innerHTML='<a href="javascript:;"><span>公告</span>11月5日周免英雄更新公告<i>11-03</i></a>'
                submenus[4].innerHTML='<a href="javascript:;"><span>公告</span>双城铸龙 2022季前赛专题站<i>11-02</i></a>'
                submenus[5].innerHTML='<a href="javascript:;"><span>公告</span>欢迎来到RiotX《双城之战》<i>11-01</i></a>'
                submenus[6].innerHTML='<a href="javascript:;"><span>公告</span>10月29日周免英雄更新公告<i>10-28</i></a>'
            }else if(index == 2){
                submenus[0].innerHTML='<a href="javascript:;">2021全球总决赛之路 EDG vs GEN</a>'
                submenus[1].innerHTML='<a href="javascript:;"><span>视频</span>音雄之声：EDG稳中带皮晋级决赛         <i>11-01</i></a>'
                submenus[2].innerHTML='<a href="javascript:;"><span>视频</span> TOP5：Scout左右开弓星火破天际         <i>11-01</i></a>'
                submenus[3].innerHTML='<a href="javascript:;"><span>视频</span> 十秒真粉丝：JieJie嘉文一往无前骑士扬威<i>11-01</i></a>'
                submenus[4].innerHTML='<a href="javascript:;"><span>视频</span> 选手靠谱时刻：EDG晋级决赛激情解说版   <i>11-01</i></a>'
                submenus[5].innerHTML='<a href="javascript:;"><span>视频</span> 2021全球总决赛半决赛第二日宣传片      <i>10-31</i></a>'
                submenus[6].innerHTML='<a href="javascript:;"><span>视频</span> TOP5： Ghost地狱狂人千里爆破雷<i>10-31</i></a>'
            }else if(index == 3){
                submenus[0].innerHTML='<a href="javascript:;">让你上分如喝水的下路BP分析（中）</a>'
                submenus[1].innerHTML='<a href="javascript:;"><span>视频</span>世一厄斐琉斯小吕布的控枪秘密                       <i>10-29</i></a>'
                submenus[2].innerHTML='<a href="javascript:;"><span>视频</span>【英雄登场】世界赛大火！卢锡安统治下路的秘密是？   <i> 10-28</i></a>'
                submenus[3].innerHTML='<a href="javascript:;"><span>教学</span>【松子剑魔】峡谷最高分剑魔教你天神下凡             <i>10-28</i></a>'
                submenus[4].innerHTML='<a href="javascript:;"><span>视频</span>韩服新玩法，掠食者人马玩法解析                     <i>10-24</i></a>'
                submenus[5].innerHTML='<a href="javascript:;"><span>视频</span>11.21韩服套路总结，挺近强攻石头人，坦装怨恨锁链婕拉<i> 10-24</i></a>'
                submenus[6].innerHTML='<a href="javascript:;"><span>教学</span>快乐和强度兼具！十大热门无限火力套路总结           <i> 10-21</i></a>'
            }else if(index == 4){
                submenus[0].innerHTML='<a href="javascript:;">神龙尊者亚索双龙之力的由来    </a>'
                submenus[1].innerHTML='<a href="javascript:;"><span>教学</span>神龙尊者背景故事介绍！极具中国风的新皮肤！                  <i>10-22</i></a>'
                submenus[2].innerHTML='<a href="javascript:;"><span>娱乐</span> 《简笔画联盟》刃盾破晓日，剑指传奇时，lpl加油！             <i>10-18</i></a>'
                submenus[3].innerHTML='<a href="javascript:;"><span>娱乐</span> 盟物堂：一瞬间就萌翻你！超可爱的灵魂莲华阿狸！              <i> 10-17</i></a>'
                submenus[4].innerHTML='<a href="javascript:;"><span>娱乐</span> 英雄联盟中最感人的爱情故事，但却造成德玛西亚的禁魔悲剧      <i> 10-16</i></a>'
                submenus[5].innerHTML='<a href="javascript:;"><span>娱乐</span> 《简笔画联盟》唯一能让我变得更加传奇的方式，就只有登基为王了<i> 10-16</i></a>'
                submenus[6].innerHTML='<a href="javascript:;"><span>娱乐</span> 《简笔画联盟》小可爱，快到姐姐怀里来~喵~ <i>10-14 </i></a>'
            }
        })
    }
    for(var i=0; i<hotls.length; i++){
        hotls[i].setAttribute('data-index' , i)
        hotls[i].addEventListener('mouseover' , function(){
           var index = this.getAttribute('data-index');
           for(var i=0; i<hotls.length; i++){
            hotbds[i].style.display='none'
           }
            hotbds[index].style.display='block'
           
        })
    }
})