window.onload = function(){

if(document.URL.match("/schedules/1")) {
    var canvas = document.getElementById( 'map-canvas' ) ;

    // 中心の位置座標を指定する
    var latlng = new google.maps.LatLng(35.8488658 , 139.603112);

    // 地図のオプションを設定する
    var mapOptions = {
      zoom: 15 ,        // ズーム値
      center: latlng ,    // 中心座標 [latlng]
    };

    // [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
    var map = new google.maps.Map( canvas , mapOptions ) ;

    // マーカーのインスタンスは配列で管理しよう
    var markers = [] ;

    // マーカーのインスタンスを作成する
    markers[0] = new google.maps.Marker({
      map: map ,
      position: new google.maps.LatLng(35.8488658 , 139.603112) ,
    }) ;
  };

if(document.URL.match("/schedules/2")) {
    var canvas = document.getElementById( 'map-canvas' ) ;

    // 中心の位置座標を指定する
    var latlng = new google.maps.LatLng(35.8488658 , 139.603112);

    // 地図のオプションを設定する
    var mapOptions = {
      zoom: 15 ,        // ズーム値
      center: latlng ,    // 中心座標 [latlng]
    };

    // [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
    var map = new google.maps.Map( canvas , mapOptions ) ;

    // マーカーのインスタンスは配列で管理しよう
    var markers = [] ;

    // マーカーのインスタンスを作成する
    markers[0] = new google.maps.Marker({
      map: map ,
      position: new google.maps.LatLng(35.8488658 , 139.603112) ,
    }) ;
  };

  if(document.URL.match("/schedules/12")) {
    var canvas = document.getElementById( 'map-canvas' ) ;

    // 中心の位置座標を指定する
    var latlng = new google.maps.LatLng(36.0574854 , 139.4696577);

    // 地図のオプションを設定する
    var mapOptions = {
      zoom: 15 ,        // ズーム値
      center: latlng ,    // 中心座標 [latlng]
    };

    // [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
    var map = new google.maps.Map( canvas , mapOptions ) ;

    // マーカーのインスタンスは配列で管理しよう
    var markers = [] ;

    // マーカーのインスタンスを作成する
    markers[0] = new google.maps.Marker({
      map: map ,
      position: new google.maps.LatLng(36.0574854 , 139.4696577) ,
    }) ;
  };

  if(document.URL.match("/schedules/22")) {
    var canvas = document.getElementById( 'map-canvas' ) ;

    // 中心の位置座標を指定する
    var latlng = new google.maps.LatLng(36.0574854 , 139.4696577);

    // 地図のオプションを設定する
    var mapOptions = {
      zoom: 15 ,        // ズーム値
      center: latlng ,    // 中心座標 [latlng]
    };

    // [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
    var map = new google.maps.Map( canvas , mapOptions ) ;

    // マーカーのインスタンスは配列で管理しよう
    var markers = [] ;

    // マーカーのインスタンスを作成する
    markers[0] = new google.maps.Marker({
      map: map ,
      position: new google.maps.LatLng(36.0574854 , 139.4696577) ,
    }) ;
  };

  if(document.URL.match("/schedules/32")) {
    var canvas = document.getElementById( 'map-canvas' ) ;

    // 中心の位置座標を指定する
    var latlng = new google.maps.LatLng(36.0574854 , 139.4696577);

    // 地図のオプションを設定する
    var mapOptions = {
      zoom: 15 ,        // ズーム値
      center: latlng ,    // 中心座標 [latlng]
    };

    // [canvas]に、[mapOptions]の内容の、地図のインスタンス([map])を作成する
    var map = new google.maps.Map( canvas , mapOptions ) ;

    // マーカーのインスタンスは配列で管理しよう
    var markers = [] ;

    // マーカーのインスタンスを作成する
    markers[0] = new google.maps.Marker({
      map: map ,
      position: new google.maps.LatLng(36.0574854 , 139.4696577) ,
    }) ;
  };
}