// Javascript - Original code to get API data
/*
<script type="application/javascript">
  var request = new XMLHttpRequest();
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5263045&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148', true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(item => {
        console.log(item.main.temp);
      });
    } else {
      console.log('error');
    }
  }
  request.send();
</script>
*/

/*
// Weather Widget - All from Weather API site
  window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = [];
  //window.myWidgetParam.push({id: 22 ,cityid: '5263045',appid: '8f85b0b140d857dee69d2c4e17d92148',units: 'imperial',containerid: 'openweathermap-widget-1',  });
  window.myWidgetParam.push({id: 22,cityid: '5037649',appid: '8f85b0b140d857dee69d2c4e17d92148',units: 'imperial',containerid: 'openweathermap-widget-2',  });
  window.myWidgetParam.push({id: 22,cityid: '4887398',appid: '8f85b0b140d857dee69d2c4e17d92148',units: 'imperial',containerid: 'openweathermap-widget-3',  });
  window.myWidgetParam.push({id: 22,cityid: '4684888',appid: '8f85b0b140d857dee69d2c4e17d92148',units: 'imperial',containerid: 'openweathermap-widget-4',  });

  (function() {
    var script = document.createElement('script');
    script.async = true;
    script.charset = "utf-8";
    script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(script, s);
  })();*/



//Custom Weather
/*
var request = new XMLHttpRequest();

request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=5263045&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    var divToFill = document.getElementById("tab-default-1");
    divToFill.getElementsByClassName("weather_city_name")[0].innerHTML = data.name + " Weather";
    divToFill.getElementsByClassName("weather_img")[0].innerHTML = '<img src=\'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png\' width = "50", height = "50">';
    divToFill.getElementsByClassName("weather_temp")[0].innerHTML = data.main.temp + " &#8457";
    divToFill.getElementsByClassName("weather_description")[0].innerHTML = data.weather[0].description;
  } else {
    console.log('error');
  }
}
request.send();
*/




//jQuery for Tab selection - Rewrite in Angular
$(document).ready(function(){
  $('.slds-tabs_default__link').click(function(){
    $(this).parent().parent().find('.slds-tabs_default__link').attr('aria-selected','false');
    $(this).attr('aria-selected','true');
    $(this).parent().parent().find('.slds-tabs_default__link').attr('tabindex','-1');
    $(this).attr('tabindex','0');
    $(this).parent().addClass('slds-is-active').siblings().removeClass('slds-is-active');
    $(this).parent().parent().parent().find('.'+$(this).parent().parent().parent().find('.slds-tabs_default__content')[0].classList[0]).removeClass('slds-show').addClass('slds-hide');
    $(this).parent().parent().parent().find('#'+$(this).attr('aria-controls')).removeClass('slds-hide').addClass('slds-show');
  });
});
