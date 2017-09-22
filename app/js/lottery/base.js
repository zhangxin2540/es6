import $ from 'jquery';
class Base{
    /*初始化奖金和玩法及说明
    */
    initPlayList(){
        this.play_list.set('r2',{
            bonus:6,
            tip:'从01~11中任选2个或者多个号码，所选号码与开奖号码任意另个号码相同，即中奖<em class="red">6</em>',
            name:'任二'
        })
        .set('r3',{
            bonus:19,
            tip:'从01~11中任选3个或者多个号码，所选号码与开奖号任意三个号码相同，即中奖<em class="red">19</em>',
            name:'任三'
        })
        .set('r4',{
            bonus:78,
            tip:'从01~11中任选4个或者多个号码，所选号码与开奖号任意四个号码相同，即中奖<em class="red">78</em>',
            name:'任四'
        })
        .set('r5',{
            bonus:540,
            tip:'从01~11中任选5个或者多个号码，所选号码与开奖号号码相同，即中奖<em class="red">540</em>',
            name:'任五'
        })
        .set('r6',{
            bonus:90,
            tip:'从01~11中任选6个或者多个号码，所选号码与开奖号任意五个号码相同，即中奖<em class="red">90</em>',
            name:'任六'
        })
        .set('r7',{
            bonus:26,
            tip:'从01~11中任选6个或者多个号码，所选号码与开奖号任意五个号码相同，即中奖<em class="red">26</em>',
            name:'任七'
        })
        .set('r8',{
            bonus:9,
            tip:'从01~11中任选6个或者多个号码，所选号码与开奖号任意五个号码相同，即中奖<em class="red">9</em>',
            name:'任七'
        })
    }
    //初始化号码
    initNumber(){
        for(let i=1;i<12;i++){
            this.number.add((''+i).padStart(2,'0'));//如果不够2位自动补全，如果够2位不补全。
        }
    }
    /*设置遗漏数据*/
    setOmit(omit){
        let self=this;
        self.omit.clear();
        for(let [index,item] of omit.entries()){
            self.omit.set(index,item)
        }
        $(self.omit_el).each(function(index,item){
            $(item).text(self.omit.get(index));
        });
    }
    /*设置开奖
    */
    setOpenCode(code){
        let self=this;
        self.open_code.clear();
        for(let item of code.values()){
            self.open_code.add(item);
        }
        self.updateOpenCode&&self.updateOpenCode.call(self,code);
    }
    /*号码选中取消
    */
    toggleCodeActive(e){
        let self=this;
        let $cur=$(e.currentTarget);
        $cur.toggleClass('btn-boll-active');
        self.getCount();
    }

}