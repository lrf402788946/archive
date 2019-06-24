/* eslint-disable no-redeclare */
import Vue from 'vue';
import _ from 'lodash';
import { Message } from 'element-ui';

function addEvent(obj, name, func) {
  if (obj.attachEvent) {
    obj.attachEvent('on' + name, func);
  } else {
    obj.addEventListener(name, func);
  }
}

function plugin() {
  return document.getElementById('view1');
}

function view() {
  return document.getElementById('view1');
}

function thumb() {
  return document.getElementById('thumb1');
}

function CloseVideo() {
  if (Video) {
    view().View_SetText('', 0);
    plugin().Video_Release(Video);
    Video = null;
  }
}

//切换设备
function changeDev() {
  var sSubType = document.getElementById('subType');
  var sResolution = document.getElementById('selRes');
  var lDeviceName = document.getElementById('lab1');
  var sDevice = document.getElementById('device');
  var dev;

  if (sDevice.selectedIndex != -1) {
    //当前有设备被选中时
    if (sDevice.selectedIndex == plugin().Device_GetIndex(DeviceMain)) {
      //查看当前设备是不是用了主摄像头
      dev = DeviceMain; //选中主头
    } else if (sDevice.selectedIndex == plugin().Device_GetIndex(DeviceAssist)) {
      //反之看看是不是副摄像头
      dev = DeviceAssist; //选中副头
    }

    sSubType.options.length = 0;
    var subType = plugin().Device_GetSubtype(dev);
    //查看当前设备的句柄,并不理解什么东西,返回子类型,为数字,用数字变成subType然后添加到选项中
    //用于选择子类型.
    if (subType & 1) {
      sSubType.add(new Option('YUY2'));
    }
    if (subType & 2) {
      sSubType.add(new Option('MJPG'));
    }
    if (subType & 4) {
      sSubType.add(new Option('UYVY'));
    }
    sSubType.selectedIndex = 0;

    var SubtypeName;
    var SelectType;
    if (sSubType.options.selectedIndex != -1) {
      //给子类型搭配到选项的文字部分,此子类型是出图模式
      SubtypeName = sSubType.options[sSubType.options.selectedIndex].text;
      if (SubtypeName == 'YUY2') {
        SelectType = 1;
      } else if (SubtypeName == 'MJPG') {
        SelectType = 2;
      } else if (SubtypeName == 'UYVY') {
        SelectType = 4;
      }
    }

    var nResolution = plugin().Device_GetResolutionCountEx(dev, SelectType); //根据出图模式获取分辨率
    sResolution.options.length = 0;
    for (var i = 0; i < nResolution; i++) {
      var width = plugin().Device_GetResolutionWidthEx(dev, SelectType, i);
      var heigth = plugin().Device_GetResolutionHeightEx(dev, SelectType, i);
      sResolution.add(new Option(width.toString() + '*' + heigth.toString()));
    }
    sResolution.selectedIndex = 0;
  }
}

var DeviceMain; //主头
var DeviceAssist; //副头
var Video; //视频

const Plugin = {
  install(Vue, options) {
    // 4. 添加实例方法
    Vue.prototype.OpenVideo = () => {
      var sSubType = document.getElementById('subType');
      var sResolution = document.getElementById('selRes');
      var lDeviceName = document.getElementById('lab1');
      var sDevice = document.getElementById('device');
      var dev;
      if (sDevice.selectedIndex != -1) {
        //如果没有选择设备
        //关闭设备,关闭视频界面,此处应该是重置的感觉╮(╯▽╰)╭
        CloseVideo();

        if (sDevice.selectedIndex == plugin().Device_GetIndex(DeviceMain)) {
          //查看是否选中了主摄像头
          dev = DeviceMain; //选中主头
        } else if (sDevice.selectedIndex == plugin().Device_GetIndex(DeviceAssist)) {
          //是否选中了副摄像头
          dev = DeviceAssist; //选中副头
        }

        var SubtypeName;
        var SelectType;
        if (sSubType.options.selectedIndex != -1) {
          //options可能有多个,但selectedIndex只返回第一个选项
          SubtypeName = sSubType.options[sSubType.options.selectedIndex].text;
          if (SubtypeName == 'YUY2') {
            SelectType = 1;
          } else if (SubtypeName == 'MJPG') {
            SelectType = 2;
          } else if (SubtypeName == 'UYVY') {
            SelectType = 4;
          }
        }
        //此处是分辨率选择,选择第一个
        var nResolution = sResolution.selectedIndex;
        /*
      创建一个视频
      params:dev:设备句柄,句柄:一个唯一值表示这个变量或者函数,一个标志,
            resolution:分辨率索引
            subtype:子类型,1,YUY2;2,MJPG;4,UYVY;0自动选择
      return: 视频句柄
    */
        Video = plugin().Device_CreateVideo(dev, nResolution, SelectType);
        if (Video) {
          //视频创建成功的情况
          /*
        因为是文件,需要竖着看,所以应该向右旋转
        params:video 视频句柄
        return:true/false
      */
          view().Video_RotateRight(Video);
          /*
        显示视频
        params:video 视频句柄
        return: true/false
      */
          view().View_SelectVideo(Video);
          view().View_SetText('打开视频中，请等待...', 0);
        }
      }
    };
    Vue.prototype.CloseVideo = () => {
      if (Video) {
        view().View_SetText('', 0);
        plugin().Video_Release(Video);
        Video = null;
      }
    };
    Vue.prototype.$Load = () => {
      //设备接入和丢失
      //type设备类型， 1 表示视频设备， 2 表示音频设备
      //idx设备索引
      //dbt 1 表示设备到达， 2 表示设备丢失
      //plugin()返回的是显示镜头显示的区域
      //给显示区域监听设备连接的事件
      addEvent(plugin(), 'DevChange', function(type, idx, dbt) {
        if (1 == type) {
          //视频设备
          if (1 == dbt) {
            /*
              设备到达
              然后获取设备摄像头序号
              获取视频设备),idx(设备索引值)
              params:type(类型,1表示要获取视频设备;2表示要获取音频设备),idx(设备索引)
              return:1主摄像头;2,3副摄像头;-1没获取到
            */
            var deviceType = plugin().Global_GetEloamType(1, idx);
            if (1 == deviceType) {
              //主摄像头
              //查看全局主摄像头变量是不是空的
              if (null == DeviceMain) {
                /*
                  主摄像头变量是空的就创建个
                  params:type(类型,1表示要创建视频设备;2表示要创建音频设备),idx(设备索引,想在第几个设备上创建)
                  return:成功返回设备对象;失败返回0
                */
                DeviceMain = plugin().Global_CreateDevice(1, idx);
                if (DeviceMain) {
                  //成功的情况(返回为对象)
                  var sSubType = document.getElementById('subType');
                  var sResolution = document.getElementById('selRes');
                  var lDeviceName = document.getElementById('lab1');
                  var sDevice = document.getElementById('device');
                  //new Option()是针对<select>标签,进行选项的追加,选择当前设备下可操作的零件(如当前设备的主摄像头)
                  sDevice.add(new Option(plugin().Device_GetFriendlyName(DeviceMain)));
                  sDevice.selectedIndex = idx; //选中主头
                  //给分辨率添加选项
                  changeDev();
                  // OpenVideo(); //是主头自动打开视频
                }
              }
            } else if (2 == deviceType || 3 == deviceType) {
              //辅摄像头
              //副摄像头部分参考主摄像头
              //不过我们这个设备也没有副摄像头,应该用不上
              if (null == DeviceAssist) {
                DeviceAssist = plugin().Global_CreateDevice(1, idx);
                if (DeviceAssist) {
                  var sSubType = document.getElementById('subType');
                  var sResolution = document.getElementById('selRes');
                  var lDeviceName = document.getElementById('lab1');
                  var sDevice = document.getElementById('device');

                  sDevice.add(new Option(plugin().Device_GetFriendlyName(DeviceAssist)));
                }
              }
            }
          } else if (2 == dbt) {
            //设备丢失,没连上设备
            //看看主摄像头存不存在
            if (DeviceMain) {
              //主摄像头存在
              if (plugin().Device_GetIndex(DeviceMain) == idx) {
                //若主摄像头设备为当前丢失设备
                //关闭视频(连接已经掉了,那就关了吧),并减少其(该设备)引用计数,为0时自动销毁
                CloseVideo();
                plugin().Device_Release(DeviceMain);
                //初始化已丢失的主摄像头和所有选项
                DeviceMain = null;

                document.getElementById('device').options.length = 0;
                document.getElementById('subType').options.length = 0;
                document.getElementById('selRes').options.length = 0;
              }
            }
            //看看副摄像头存不存在
            if (DeviceAssist) {
              //看上面的主摄像头注释
              if (plugin().Device_GetIndex(DeviceAssist) == idx) {
                CloseVideo();
                plugin().Device_Release(DeviceAssist);
                DeviceAssist = null;

                document.getElementById('device').options.length = 0;
                document.getElementById('subType').options.length = 0;
                document.getElementById('selRes').options.length = 0;
              }
            }
          }
        }
      });
      //给显示区域设置和缩略图设置名称
      view().Global_SetWindowName('view');
      // thumb().Global_SetWindowName('thumb');
      //高拍仪初始化
      plugin().Global_InitDevs();
    };
    Vue.prototype.$Unload = () => {
      if (Video) {
        //销毁视频,上面写过了
        view().View_SetText('', 0);
        plugin().Video_Release(Video);
        Video = null;
      }
      if (DeviceMain) {
        //销毁主摄像头
        plugin().Device_Release(DeviceMain);
        DeviceMain = null;
      }
      if (DeviceAssist) {
        //同理可得3
        plugin().Device_Release(DeviceAssist);
        DeviceAssist = null;
      }
      //释放资源
      plugin().Global_DeinitDevs();
    };
    Vue.prototype.$Scan = type => {
      var date = new Date();
      var yy = date.getFullYear().toString();
      var mm = (date.getMonth() + 1).toString();
      var dd = date.getDate().toString();
      var hh = date.getHours().toString();
      var nn = date.getMinutes().toString();
      var ss = date.getSeconds().toString();
      var mi = date.getMilliseconds().toString();
      //命名,不过这个命名顺带把存储路径也给带上了
      var Name = yy + mm + dd + hh + nn + ss + mi + '.png';
      /*
          拍照
          params:video:视频句柄
                 scanSize: 0表示默认, 0x04表示A3, 0x08表示A4, 0x10表示A5
                 view:窗口句柄
          return:图像句柄
        */
      var img = plugin().Video_CreateImage(Video, 0, view().View_GetObject());
      /*
          保存图像
          params:img 图像句柄
                 filename:文件名
                 flag:和图像品质有关,0应该够用了吧
        */
      // var bSave = plugin().Image_Save(img, Name, 0);
      var bSave = plugin().Image_GetBase64(img, 13, 0);
      // var https = plugin().Global_CreateHttp('http://10.16.11.186/common/upload');
      // var bSave = await plugin().Http_UploadImage(https, img, 13, 0, `${type}${Name}`);
      // if (bSave) {
      //   //保存成功,显示拍摄效果
      //   //然后将文件放在缩略图里
      //   view().View_PlayCaptureEffect();
      //   // thumb().Thumbnail_Add(Name);
      // }
      //减少引用计数,不明白为啥
      plugin().Image_Release(img);
      if (bSave) return `data:image/png;base64,${bSave}`;
      //`${type}${Name}`
      else return false;
    };
  },
};

Vue.use(Plugin);
