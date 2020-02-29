# ljshell

----

[![NPM version][npm-image]][npm-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/ljshell.svg?style=flat-square
[npm-url]: http://npmjs.org/package/ljshell
[download-image]: https://img.shields.io/npm/dm/ljshell.svg?style=flat-square
[download-url]: https://npmjs.org/package/ljshell
----
## install
   [![ljshell](https://nodei.co/npm/ljshell.png)](https://npmjs.org/package/ljshell)
   
### Feature
----
### Keyboard
----
* ljshell
* ljAppObject
* ljUserInfo
* ljHttpInfo
* speechInfo
* ljAudioRecord
* ljAudioPlayer

## Usage
----
```js
import React from 'react';
import { ljUserInfo } from 'ljshell';
class TestComponent extends React.Component {
    componentWillMount() {
        ljUserInfo.getInfo(0, call => {
            this.props.onGetUserInfo(call.info)
        })
        ljUserInfo.getPrivilegeInfo(nAppid, call => {
            this.props.onGetUserIsAdmin(call.result)
        });
    }
    render() {
        return (
            <div>
                test component
            </div>
        );
    }
}
```

## API
----

# 全局自定义事件监听器
### 函数：

#### addEventListener : function(event,listener,once)
        添加一个事件监听器
        参数：
                event           需要监听的事件名称   对于同一个事件，可以有多个监听器
                listener        监听函数     bool function(event,params)   函数返回true，导致该事件随后的监听器不再被触发  返回false 该事件随后的监听器依旧被触发
                once            是否一次性监听  =true 当调用后将自动删除该监听函数

#### removeEventListener : function(event,listener)
        移除一个事件监听器
        参数：
                event           需要移除监听的事件名称
                listener        需要移除监听函数

#### fireEvent : function(event,params)
        手工触发一个事件
        参数：
                event           触发事件名称
                params          触发事件参数

#### fireNativeEvent : function(event,eventParams,callback)
        向原生层触发一个自定义事件
        参数：
                event           触发事件名称
                eventParams     触发事件参数
                callback        原生对该事件反应后回调函数
             

# ljAppObject
        ljshell主应用对象

### 函数：
#### payOrder : function(orderno,callback)
        根据提交的订单号，支付订单

#### closeWebView: function（res）
        退出当前web应用
        参数：
            res     当需要向应用传递返回值时指定
        函数返回：无

#### changeToApp: function(strUrl,callback)
        切换到ljshell指定子应用
        参数：
            strUrl     子应用地址以及参数
        函数返回：
        {
                code:int,       //=0 成功   != 0  失败
                res:object,     //每个应用返回值单独指定
        }                    

#### changeToAppAndClose: function(strUrl,bClose,bWait)
        切换到ljshell指定子应用,并且关闭当前webview
        参数：
            strUrl      子应用地址以及参数
            bClose      是否关闭  可选默认关闭
            bWait       是否等待  可选默认等待
        函数返回：无

#### openScan: function(callback)
        切换到扫码
        参数：
            无
        函数返回:
        {
                code:int,       //=0 成功   != 0  失败
                msg:string,
                url:string,     //扫码获取的url串
        }                    

#### bindReturnKey: function（callback）
        绑定系统返回键  callback绑定回调函数，当绑定成功后，当返回键按下时将会会调用该回调函数
        ****回调函数必须返回一个包含keepcallback键值的对象，如果未返回将只能得到一次调用机会
        ()=>{
             //必要的处理
             return {keepcallback:1};   
        } 

#### callCustomerCenter: function（）
        打开系统客服系统

#### openUrl: function（url,callback）
        在系统浏览器打开指定url

#### filterUrl: function（urlRegex,openType,callback）
        指定在js中需要打开的url打开方式
        urlRegex正则表达式用以匹配url串，如果存在相同的匹配串，将替换先前的设置 
        openType指定匹配的url打开方式
        //打开方式  =0  不允许访问  =1  在当前View中打开   =2  在其他view中打开   =3  用外部浏览器打开 <0如果先前存在相同的匹配串，将从列表中删除

#### pickFile: function（type,maxCount,filter,ext,callback,param）
        从系统中选择指定类型的文件
        type = "image"  选择图像文件
        type = "audio"  选择音频文件
        type = "video"  选择视频文件
        type = "screen"  选择屏幕截图
        type = "document"  选择文档文件
        type = "takephoto"  相机
        type = "takevideo"  录制视频
        type = "path"       选择路径
        type = "savepath"   选择保存文件路径
        maxCount>1 可以多选，最多可以选择maxCount个文件
        filter可以指定文件过滤条件
        ext可以指定保存默认后缀名
        param参数对象
            takevideo参数为{
                longvideo:boolean,  //是否录制长视频，默认短视频
                duration:number     //录制最大时长 小视频默认：15秒  长视频默认3分钟
            } 

#### copyResToPath: function(res,path,rename,callback)
        拷贝资源文件到指定的路径
        参数：
            res     需要拷贝的资源文件
            path    拷贝的目标路径 path=/album 拷贝到系统相册
            rename  重新命名后的名字，null 不重新命名
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
        }                    

#### copyDataToPath: function(data,path,name,callback)
        拷贝文本数据或base64编码的文件内容到指定的路径
        参数：
            data    文本数据或者经过base64编码的二进制数据   格式实例：  data:image/gif;base64,  如果是文本数据可不编码
            path    拷贝的目标路径 path=/res/image 将把图像内容拷贝到本地，并生成一个图像资源
            name    拷贝的目标文件名
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                res:string,  //生成的资源名称
        }                    


#### getLocalUrl: function（files,callback）
        得到指定文件所在的本地Url

#### saveObjectToLocalStorage: function（appid,key,object,callback）
        保存JS对象内容到本地存储
                appid   应用标识
                key     在本地存储中的key
                object  需要保存的对象
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
        }

#### getObjectFromLocalStorage: function（appid,key,object,callback）
        从本地存储中读取先前保存的JS对象
                appid   应用标识
                key     在本地存储中的key
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                object:object,  //返回的对象信息
        }

#### getClassMembers: function（classid,bStudent,callback）
        从系统中获取指定班级成员列表
                classid  班级id
                bStudent 是否仅返回学生
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                members:[
                        {
                                id:1,
                                name:'',
                                role:1,
                                grouprole:1,
                        },
                ]
        }
#### setValueFromKey: function（key,value,callback）
        在当前应用中保存一个key/value对，value必须为string类型，在应用存在期间，一直有效，
        即使webview关闭。
                key     对应的唯一键值，如果以前存在过相同键，则覆盖键值
                value   键值,string类型
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
        }

#### getValueFromKey: function（key,callback）
        在当前应用中获取先前保存的key/value对，
                key     对应的唯一键值
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                value:string,  //先前保存的键值
        }

#### doShare: function(app,appFlag,type,url,title,desc,image,callback）
        像当前常用应用分享信息

                app     = 'qq'  分享到qq
                        = 'wx'  分享到微信
                        = 'wb'  分享到微博

                appFlag = 0     
                                对于qq 分享到QQ好友
                                对于微信 分享到微信好友
                                对于微博 分享到微博
                        = 1
                                对于qq 分享到QQ空间
                                对于微信 分享到微信朋友圈
                                对于微博 不支持

                type    分享类型
                      	//nShareType=0分享文本
                        //nShareType=1分享图片
                        //nShareType=2分享视频
                        //nShareType=3分享声音
                        //nShareType=4分享网页
                        //nShareType=8分享微信小程序
                        //nShareType=9启动微信小程序
                url     分享链接地址
                title   分享标题
                desc    分享描述
                image   相关图片，本地文件
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
        }

#### changeViewSize: function(fullscreen,topmost,width,height,callback）
        改变当前窗口大小，仅适用于PC版本
        参数：
            fullscreen  是否全屏,如果指定了全屏，可以不指定宽高
            topmost     是否设置为最顶层窗口
            width       窗口宽度
            height      窗口高度
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
        }

#### recoverViewSize: function(callback）
        恢复窗口大小到changeViewSize之前大小
        参数：
            无
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
        }

#### openDoc: function(resName,callback)
        用当前系统安装应用打开指定文档
        参数：
            resName  资源名称或者本地绝对路径
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
        }

#### resInLocal: function(resName,callback)
        指定资源本地是否存在
        参数：
            resName  资源名称或者本地绝对路径
        函数返回：
        {
                code:int,    //=0 存在   =1  不存在
                msg:string,  //提示消息
        }

#### getNavigatorProvider: function(callback)
        得到当前系统安装的导航供应商
        参数：
            无
        函数返回：
        {
                code:int,    //=0 存在   =1  不存在
                msg:string,  //提示消息
                providers:[
                        "baidu","apple","amap","tencent"
                ]
        }

#### NavigatorToPos: function(provider,lng,lat,callback)
        使用指定导航供应商导航到目标位置
        参数：
            provider    供应商名称
            lng         精度
            lat         纬度
        函数返回：
        {
                code:int,    //=0 存在   =1  不存在
                msg:string,  //提示消息
        }

#### getCurrentGeoPosition: function(callback)
        使用定位设备获取当前位置
        参数：
                无
        函数返回：
        {
                code:int,    //=0 存在   =1  不存在
                msg:string,  //提示消息
                pos:{
                        lng:xxx,
                        lat:xxx,
                        ...
                },
        }

#### getAppStatus: function(appid,callback)
        得到指定app状态
        参数：
                appid:int,      //指定appid
        函数返回：
        {
                code:int,    //=0 成功   !=0 失败
                msg:string,  //提示消息
                info:{
                   appName:string,      //应用名称
                   status:int,          //0 应用不存在，可能该用户身份不能使用该应用  =1  存在该应用
                   appType:int,         //0 内置应用  1  大厅应用   2  内部应用 3 第三方应用   4 政府应用
                   isWeb:int,           //0 非web应用  1  一般web应用  2  react应用
                   install:boolean,     //本地是否安装
                   serverVersion:int,   //服务器当前版本
                   localVersion:int,    //本地版本
                }
        }

#### getAppConfigInfo: function(appid,callback)
        得到指定app配置信息
        参数：
                appid:int,      //指定appid
        函数返回：
        {
                code:int,    //=0 成功   !=0 失败
                msg:string,  //提示消息
                config:object
        }

#### backToLogin: function(loginname,authcode,password)
        用指定的登录名和密码/token重新登陆，调用后该函数将关闭当前的webview
        参数：
                loginname:string,      //登录名
                authcode:string,      //token
                password:string       //密码   
        //注意： token和密码 两者只要有一个即可
        函数返回：
                函数无返回

#### getMySchoolInfo: function(callback)
        得到自己所在学校信息，仅老师和学校管理者适用
        参数：
            无
        函数返回：
        {
            code:int,    //=0 成功   !=0 失败
            msg:string,  //提示消息
            schoolid:int,//学校ID =0 表明自身学校不存在
            name:string, //学校名称
            province:int,  //学校所在省
            city:int,   //学校所在市
            county:int, //学校所在县
            gradeno:int,//年级ID
            isSixYear:int,//是否六年制
            grade:[int,int],//学校年级列表
            class:[{id,name,grade,master,membercount},{id,name,grade,master,membercount}],//学校班级列表
        }
#### getVideoStreamsInfo: function(video,callback)
        得到指定视频文件所有流信息列表
        参数：
            video       指定视频文件
        函数返回：
        {
            code:int,    //=0 成功   !=0 失败
            msg:string,  //提示消息
            streams：[  //流信息列表
                {
					index:int,          //流索引
                    id:int,             //流id
                    type:string,        //媒体类型
                    format:int,         //像素或音频具体类型
                    frames:int,         //总的帧数
					bitrate:int,        //网络比特率
					width:int,          //视频宽度
					height:int,         //视频高度
					samplerate:int,     //采样率
					bitpersample:int,   //采样深度
                },
                {...}
            ]
        }        
#### synthesizeAudio: function(audioList,totalTime,video,callback)
        合并指定的音頻列表到輸出文件
        参数：
            audioList:[//需要合并的音频文件列表
                {
                    input:string,       //输入文件
                    format:string,      //格式  wave/mp3
                    begin:int           //开始时间 毫秒
                },
                ...
            ]   
            background:string           需要合并的背景音，可以为null
            totalTime:int               输出音频文件总时间(毫秒)  <=0 不指定 由音频文件总时间
            video:string                需要合成的原视频 不指定，则仅合成音频
        函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
            output:string       //输出文件名称，如果指定了video则为合成后的视频文件，否则为音频文件
        }   

#### getAudioDuration: function(audio,callback)
        得到指定的音頻文件时长，目前支持: mp3/wave
    参数:
        audio 音频文件名
        函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
            duration:int        //返回时长  毫秒
        }   

#### getStatusColorInfo: function(callback)
    得到全面屏状态栏当前的背景色信息
    参数:无
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
            topColor:int,      //上状态栏颜色  ARGB
            bottomColor:int,   //下状态栏颜色  ARGB
            bLightText:boolean  //是否高亮文本
        }

#### SetStatusColorInfo: function(info,callback)
    得到全面屏状态栏当前的背景色信息
    参数:
        info：{
            topColor:int,      //上状态栏颜色  ARGB
            bottomColor:int,   //下状态栏颜色  ARGB
            bLightText:boolean  //是否高亮文本
        }
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string         //提示消息
        }

#### EnterVideoChatRoom: function(paramObj,callback)
    进入指定的视频聊天房间
    参数:paramObj
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
            roomid:string       //返回房间标识
        }
    //当房间状态发生改变时，将触发VideoChatRoomStatusChanged事件，传递roomid标识

#### LeaveVideoChatRoom: function(roomid,paramObj,callback)
    离开指定的视频聊天房间
    参数:paramObj
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string         //提示消息
        }

#### banpaiEnterLjlx: function(userid)
    从班牌进入乐教乐学

#### banpaiEnterDesktop: function()
    从班牌进入系统桌面

#### enableScreenSaver: function(bEnable)
    禁止/使能 班牌进入屏保模式

#### openFaceRecognise: function(param)
    在屏幕指定位置打开人脸识别窗口
    参数：param
        {
            left:0,
            top:0,
            width:100,
            height:100
        }

### closeFaceRecognise: function()
    关闭先前打开的人脸识别窗口

### playBeeSound: function()
    播放Bee声音

#### banpaiEnterLjlx: function(userid)
    从班牌进入乐教乐学    

#### getBanpaiAudioVolumn: function(callback)
    获取班牌音量大小 0-100
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
            volumn:int          //音量
        }

#### setBanpaiAudioVolumn: function(volumn,callback)
    设置班牌音量大小 
        volumn音量大小  0-100
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
        }

#### getWifiInfo: function(callback)
    得到目前移动端所处的wifi列表 
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
            info:string         //返回wifi列表,json字符串
        }

#### banpaiQueryAttendance: function(cardID,image,type)
    请求增加指定刷卡考勤 
        cardID      刷卡ID
        image       刷卡图像md5
        type        刷卡类型 0：进，1：出，100：签到
    函数返回：无

#### copyToClipboard: function(text,callback)
    把文本复制到剪贴板
        text        需要拷贝到剪贴板的文本
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string         //提示消息
        }

#### copyFromClipboard: function(callback)
    从剪贴板获取文本 
    参数：无
    函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
            text
        }

#### addWatchProgress: function(resname,progress,watchCnt,forceUpdate,curSecond,callback)
    增加新的视频观看记录
    参数：
        resname:string,                 视频的唯一MD5名称，如果这个视频只有连接，没有MD5名称，那么一般使用m3u8文件名，不要包含路径
        progress:string,                按10秒一次记录的字符串，每位标志一个十秒的观看
        watchCnt:int                    是否新增观看次数，一般只是第一次调用的时候为1，播放过程中调用一律为0
        forceUpdate:boolean             调用时是否需要马上上传数据，一般退出视频播放时需要置1
        curSecond:int                   调用时当前的播放位置，下次可以通过接口获取后从当前位置播放，精确到秒

        函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
        }

#### addWatchProgress2: function(resname,progress,watchCnt,forceUpdate,curSecond,userid,callback)
    增加新的视频观看记录
    参数：
        resname:string,                 视频的唯一MD5名称，如果这个视频只有连接，没有MD5名称，那么一般使用m3u8文件名，不要包含路径
        progress:string,                按10秒一次记录的字符串，每位标志一个十秒的观看
        watchCnt:int                    是否新增观看次数，一般只是第一次调用的时候为1，播放过程中调用一律为0
        forceUpdate:boolean             调用时是否需要马上上传数据，一般退出视频播放时需要置1
        curSecond:int                   调用时当前的播放位置，下次可以通过接口获取后从当前位置播放，精确到秒
        userid:int                      查看视频的用户ID =0 当前用户

        函数返回：
        {
            code:int,           //=0 成功   !=0 失败
            msg:string,         //提示消息
        }

# ljUserInfo
         ljshell用户信息对象
         
### 函数：
#### getInfo : function(userid,callback)
        获取当前用户信息，userid=0获取当前登陆用户信息

#### getPrivilegeInfo : function(appid,callback)
        获取当前用户对于应用是否拥有权限

#### getPrivilegeDetailInfo : function(appinfo,callback)
        获取当前用户对于应用是否拥有权限

#### getUserNickname:function(params,callback)
        获取群组或用户的昵称
        params参数对象
        {
                groups:[groupid,groupid...],
                users:[userid,userid...],
                wait:int                     //是否等待全部结果   =0 不等待，对于本地没缓存的先返回临时结果  =1 等待，更新缓存后才返回结果
        } 
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                names:[
                {
                userid:int,
                nickname:string
                },
                ...
                ]
        }
#### getUserLogo:function(params,callback)
        获取群组/用户/应用图标
        params参数对象
        {
                type:int,     // =0  用户图像    =1   群组图像    =2  应用图像
                userid:int   //对应的用户/群组/应用ID
        } 
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                data:string //图像的base64
        }

# ljDepartmentInfo
         ljshell组织架构对象
         
### 函数：

#### getDepartmentInfo : function(id,callback)
        获取指定ID对应的部门信息 id=0 最上层部门
        参数:
            id:int         //部门id =0  最上层部门
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                info:object  //部门信息
        }

#### getDepartRoleList : function(callback)
        获取组织结构里职务列表
        参数:
            无
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                list:[object]  //职务列表信息数组
        }

# ljHttpInfo
        ljHttpInfo封装ljshell内部网络消息
### 函数：
#### fetch:function(url,param)
        从服务器获取指定url数据   url可以带全路径  对于ljshell内部请求，不用附加全域名
        param参数对象 =null 默认采用Get方法
        {
                method:"GET",//'POST'
                body:string, //对于post方法，body为post内容
                json:int,    //=0  参数列表方式  =1  采用json字段   =2  采用json格式  content-type=json =3 原生请求 不处理结果，直接把body内容传送
                wait:int,    //=0  不等待结果   =1  等待服务器结果
                timeout:int, //超时 默认20秒
                headers:     //附加头
                {
                'user-agent':string,
                ...
                }
        }
        函数返回一个promise对象
                code:int,	//返回0 成功   !=0 失败
                httpcode:int,	//返回http返回码
                msg:string,	//提示消息
                data:{}		//返回数据        

#### query:function(url,param,callback)
        从服务器获取指定url数据   url可以带全路径  对于ljshell内部请求，不用附加全域名
        param参数对象 =null 默认采用Get方法
        {
                method:"GET",//'POST'
                body:string, //对于post方法，body为post内容
                json:int,    //=0  参数列表方式  =1  采用json字段   =2  采用json格式  content-type=json
                wait:int,    //=0  不等待结果   =1  等待服务器结果
                headers:     //附加头
                {
                'user-agent':string,
                ...
                }
        }
        函数返回调用callback，参数
                code:int,	//返回0 成功   !=0 失败
                httpcode:int,	//返回http返回码
                msg:string,	//提示消息
                data:{}		//返回数据        

#### upload:function(files,callback)
        上传文件到服务器  files是一个文件数组
        files:[
                {
                    type:string,        //上传文件类型   'image'  'document'  'audio'  'video' 'other'
                    res:string,         //资源名
                },
                ...
        ]


        函数再上传过程中会不停的调用callback已通知指定的上传状态
        返回：
                code:int,		//返回 =0 开始上传  =1 正在上传  =2 上传成功   <0 失败
                percent:int,		//上传百分比  0-100
                msg:string,		//提示消息
                urls:[			//上传成功后返回对应的url列表信息
                        {
                                "rscname":string,
                                "local":string,
                                "url":string,
                        }
                ]      

#### download:function(files,callback)
        从服务器下载文件  files是一个文件数组
        files:[
                resName,        //需要下载的文件URI
                resName
                ...
        ]
        函数在下载过程中会不停的调用callback已通知当前的下载状态
        返回：
                code:int,		//返回 =0 开始下载  =1 正在下载  =2 下载成功   <0 失败
                percent:int,		//上传百分比  0-100
                msg:string,		//提示消息
                urls:[			//下载成功后返回对应的url列表信息
                        {
                                "rscname":string,
                                "local":string,
                                "url":string,
                        }
                ]      

#### downloadvideo:function(url,localfile,param,callback)
        从服务器下载m3u8视频
        url:
            m3u8视频地址
        localfile:
            保存本地文件名
        param：
            {
                workpath:string,            //工作路径，不传采用localfile所在路径
                resname:string,             //如果不为null，则自动根据资源名称获取m3u8地址，此时url可为null
            }
        函数在下载过程中会不停的调用callback已通知当前的下载状态
        返回：
                code:int,		//返回 =0 开始下载  =1 正在下载  =2 下载成功   <0 失败
                percent:int,		//上传百分比  0-100
                msg:string,		//提示消息

#### getResourceUrl(resname,callback)     
        得到指定资源名对应的外网url地址
        返回：
        {
                code:int,                   //返回 =0 成功  ！=0 失败
                msg:string,                 //提示消息
                url:string                  //对应的url地址
        }    
#### getResourceLocalUrl(resname,callback,width,height,viewWidth,viewHeight)   
        得到指定资源名对应的内网url地址，如果本地不存在，将下载指定文件成功后再触发回调
        返回：
        {
                code:int,                   //返回 =0 成功  ！=0 失败
                msg:string,                 //提示消息
                url:string                  //对应的url地址
        }    
#### getResourceData(resname,callback)     
        得到指定资源名对应的内容数据base64编码
        返回：
        {
                code:int,                   //返回 =0 成功  ！=0 失败
                msg:string,                 //提示消息
                data:string                 //对应的内容base64编码数据
        }     
#### queryPreviewDoc(resname,callback)     
        請求指定的资源预览图像文件列表
        参数：
            resName  资源名称
        函数返回：
        {
                code:int,    //=0 成功   =1  失败
                msg:string,  //提示消息
                files:[
                   {
                       res:string,  //资源名称
                       width:0,     //宽度
                       height:0,    //高度
                   },
                   ...
                ]
        }            


# speechInfo
        ljshell语音评测信息类
### 函数
#### initEvalute(callback)                              //评测初始化，成功后才能开始评测
        调用参数： 无
        注意：
                callback               将统一用于initEvalute，startEvalute，endEvalute回调返回
        当状态发生改变时返回：
        code:int,			//返回0 成功   !=0 失败
        msg:string,			//提示消息
        status:int,			//当前状态  =100 表明评测初始化

#### startEvalute(type,language,text,userdata,callback)	//开始评测
        调用参数：
        {
                type:string,		//类型
                language:string,	//语言
                text:string,		//评测文本
                userdata:userdata,      //用户数据，可为任意类型
        }                        
        当状态发生改变时返回：
        code:int,			//返回0 成功   !=0 失败
        msg:string,			//提示消息
        userdata:userdata,              //用户数据
        status:int,			//当前状态  =0  录音过程中   =1 录音完成   =2  评测完成 
        rettype:int,			//评测结果串类型  =0 正常串  =1  json串  =2  xml串
        result:string,		        //评测结果
        audio:string,		        //录音数据base64编码

#### endEvalute		//结束评测
        调用参数：
                无
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:int,			//当前状态  =200 表明结束评测

#### getTranslationFromWord(word,callback)   		//得到一个单词的相关翻译和读音
        调用参数：
                word
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                data:object                     //单词翻译相关结构

#### startRecognise(realtime，resname) 		//开始语音识别
        调用参数：
        {
                realtime:bool,		//是否实时评测
                resname:string,	        //直接采用语音资源文件评测
        }                        

#### endRecognise()		        //结束语音识别
        调用参数：
                无
        开始识别后到结束，将定期调用startRecognise设置的回调函数
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                res:{
                     status:int,                //识别状态
                                                enum{
                                                        status_unknown = 0,
                                                        status_start = 1,
                                                        status_end = 2,
                                                        status_process = 3,
                                                        status_error = -1,
                                                };
                     text:string,               //当前识别出的文本   
                }

# ljMathProblem
        ljshell数学判题类
### 函数
#### takeMathPhoto(callback)  	//打开相机拍题
        调用参数：
                无
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                image:string,			//最终生成的本地图片名称

#### judgeMathProblem(image,callback)  	//把指定的图像提交判题，返回结果
        调用参数：
                image                           //本地文件名称
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                result:object,			//最终生成的判题结果

# ljAudioRecord
        ljshell音频原生录音操作类
### 函数
#### startRecord(callback)  	//开始录音
        调用参数：
                无，回调直接调用StartRecord时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"start",                 //提示返回状态          

#### pauseRecord()		//暂停录音
        调用参数：
                无，回调直接调用StartRecord时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"pause",                 //提示返回状态
                url:"http://xxxx"               //返回当前可播放的录音当前数据url
#### resumeRecord()		//恢复录音
        调用参数：
                无，回调直接调用StartRecord时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"resume",                 //提示返回状态
#### stopRecord()		//停止录音
        调用参数：
                无，回调直接调用StartRecord时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"stop",                 //提示返回状态
#### cancelRecord()		//取消录音
        调用参数：
                无，回调直接调用StartRecord时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"cancel",                 //提示返回状态
#### resetRecord()		//重置当前录音
        调用参数：
                无，回调直接调用StartRecord时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"reset",                 //提示返回状态
#### setAudioPosition(fSec)	//定位到新位置，重新开始录音     
        调用参数：
                fSec  单位秒，定位到指定时间位置，回调直接调用StartRecord时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"position",              //提示返回状态

#### onCallback()		//当录音状态发生改变是调用
        调用参数：
                主动返回，无需调用,回调直接调用StartRecord时设置的回调
        停止前(调用stopRecord之前)
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"onupdate",              //提示返回状态
                duration:1.2,                   //当前已录制的时长（单位：秒）
                volume:123,                     //当前录制音量
        停止后(调用stopRecord之后)
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"onpercent",             //提示编码进度  =100 成功  
                percent:12,                     //当前进度
                url:"",                         //最终录音文件Url地址
                name:"",                        //最终录音文件ID
                showname:"",                    //最终录音文件显示名称
#### 回调编写实例
        onCallback(callinfo){
           let res = {};
           if (callinfo.code !== 0){
               console.log("录制出错了",callinfo.msg);
               res.keepcallback = 0;//出错了，无需保持回调，下次不会再调用了
           }     
           else{
              switch(callinfo.status){
                case "start":
                   console.log("开始录制了。。。");
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "pause":
                   console.log("暂停录制了。。。，可播放的地址：",callinfo.url);
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "resume":
                   console.log("录制重新恢复了。。。");
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "reset":
                   console.log("录制重置成功了。。。");
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "onupdate":
                   console.log("录制中有数据了：数据长度：",callinfo.duration,"当前音量：",callinfo.volume);
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "stop":
                   console.log("录制已成功停止。。。,可播放的地址：",callinfo.url,"本地文件：",callinfo.file);
                   res.keepcallback = 0;//已经停止录音，无需保持回调，下次不会再调用了
                   break;
                default：
                   res.keepcallback = 0;//不应该运行到这，无需保持回调，下次不会再调用了
                   break;
              }
           }
           return res;
        }                

# ljAudioPlayer
        ljshell音频播放类
### 函数
#### open(res,callback)  	//打开指定的音频资源
        调用参数：
                res 音频资源名
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                id:string,                      //返回id
                status:"loading/start/failed",  //提示返回状态    返回start之后表明打开成功     
                //成功打开以后会不停地调用该回调 返回当前的播放状态  playing 

#### close(id)		        //停止音频播放
        调用参数：
                id 先前打开的音频id，回调直接调用open时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                id:string,
                status:"closed",                 //提示返回状态

#### pause(id)		        //暂停播放
        调用参数：
                id 先前打开的音频id，回调直接调用open时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                id:string,
                status:"pause",                 //提示返回状态

#### resume(id)		        //继续播放
        调用参数：
                id 先前打开的音频id，回调直接调用open时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                id:string,
                status:"resume",                //提示返回状态
#### getPos(id)		        //得到当前播放位置
        调用参数：
                id 先前打开的音频id，回调直接调用open时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"getpos",                //提示返回状态
                id:string,
                pos:int,                        //返回当前位置
#### duration(id)		        //得到当前播放位置
        调用参数：
                id 先前打开的音频id，回调直接调用open时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                status:"getduration",           //提示返回状态
                id:string,
                duration:int,                   //返回音频总时间
#### setPos(id,pos)		//设置当前播放位置
        调用参数：
                id 先前打开的音频id
                pos 当前播放位置，单位毫秒，回调直接调用open时设置的回调
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                id:string,
                status:"setpos",                //提示返回状态

#### onCallback()		//当播放状态发生改变时调用
        调用参数：
                主动返回，无需调用,回调直接调用open时设置的回调
        停止前(调用close之前)
        返回：
                code:int,			//返回0 成功   !=0 失败
                id:string,                      //对应音频id
                msg:string,			//提示消息
                status:"playing",               //提示返回状态
                pos:1231,                       //当前播放位置（单位：毫秒）
#### 回调编写实例
        onCallback(callinfo){
           let res = {};
           if (callinfo.code !== 0){
               console.log("播放出错了",callinfo.msg);
               res.keepcallback = 0;//出错了，无需保持回调，下次不会再调用了
           }     
           else{
              switch(callinfo.status){
                case "start":
                   console.log("开始播放了。。。");
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "pause":
                   console.log("暂停播放了");
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "resume":
                   console.log("播放恢复了。。。");
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "playing":
                   console.log("正在播放：当前位置：",callinfo.pos);
                   res.keepcallback = 1;//保持回调，以便下次还能触发
                   break;
                case "stop":
                   console.log("播放停止。。。");
                   res.keepcallback = 0;//已经停止播放，无需保持回调，下次不会再调用了
                   break;
                default：
                   res.keepcallback = 0;//不应该运行到这，无需保持回调，下次不会再调用了
                   break;
              }
           }
           return res;
        }                

# ljGifObject
        ljshell gif文件操作类
### 函数
#### open(res,callback)  	//打开指定的gif文件资源
        调用参数：
                res gif文件资源名
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                id:string,          //返回id

#### close(id)		        //关闭先前打开的gif文件
        调用参数：
                id 先前打开的gif文件id
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息

#### getFrameCount(id)		//得到gif文件总的帧数
        调用参数：
                id 先前打开的gif文件id
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                count:int           //返回总帧数

#### getGifDimension(id)	//得到gif文件宽高信息
        调用参数：
                id 先前打开的gif文件id
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                width:int,          //返回宽度
                height:int          //返回高度

#### getGifFrameImage(id,index)	//得到gif文件指定帧图像信息
        调用参数：
                id 先前打开的gif文件id
                index帧索引
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                width:int,          //返回宽度
                height:int,         //返回高度
                duration:int,       //该帧延时,单位毫秒
                image:string       //本地文件名，格式png格式
                
# ljTaobao
        ljshell taobao应用操作类
### 函数
#### login(callback)  	//调起淘宝应用，进行登陆授权
        调用参数：
                无
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string,			//提示消息
                id:string,          //返回openid

#### logout(callback)  	//调起淘宝应用，取消当前的登陆授权
        调用参数：
                无
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string			//提示消息

#### openTrade(url,callback)  	//在淘宝中打开指定的商品连接
        调用参数：
                url 商品链接地址
        返回：
                code:int,			//返回0 成功   !=0 失败
                msg:string			//提示消息