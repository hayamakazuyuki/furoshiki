function initPostcodeJp() {

    // APIキーを指定して住所補完サービスを作成
    var postcodeJp = new postcodejp.address.AutoComplementService('qPSsc4Hnc2wScb0W8v546Cp8RuuK1Eg0DLjuZvu');

    // 郵便番号テキストボックスを指定
    postcodeJp.setZipTextbox('zip_code')

    // 住所補完フィールドを追加
    postcodeJp.add(new postcodejp.address.StateTextbox('prefecture'));
    postcodeJp.add(new postcodejp.address.TownTextbox('city'));
    postcodeJp.add(new postcodejp.address.StreetTextbox('town'));

    // 郵便番号テキストボックスの監視を開始
    postcodeJp.observe();

  }
  if(window.addEventListener){
    window.addEventListener('load', initPostcodeJp)
  }else{
    window.attachEvent('onload', initPostcodeJp)
  }
  
  

function loadTanto() {
  //リストをループ処理で取り出してセットする
  for(var i=0;i<list.length;i++){
    const opt = document.createElement('option');
    opt.value = list[i].val; //value値
    opt.text = list[i].txt; //テキスト値
    document.getElementById('eigyo_tanto').appendChild(opt);
  }
}

const list = [
  {val:"", txt:"-選択-"},
  //第1営業部
  {val:'watanabe', txt:'渡邊'},
  {val:'sano', txt:"佐野"},
  
  //コンサルティング
  {val:'saito', txt:'斉藤'},
  {val:'ishii', txt:'石井'},
  
  //第2営業部
  {val:'tomori', txt:'友利'},
  {val:'nishi', txt:'西'},
  {val:'nagayama', txt:'永山'},
  {val:'miyamoto', txt:'宮本'},
  {val:'nishimura', txt:'西村'},

  //西日本支社
  {val:'hosoda', txt:'細田'},
  {val:'kobayashis', txt:"小林成"},

  //営業統括部
  {val:'higashi', txt:'東'},
  {val:'mizuno', txt:'水野'},
  {val:'masubuchi', txt:'増渕'},

  //営業開発
  {val:'kaihatsu', txt:'営業開発'},

  //事業推進
  {val:'suishin', txt:'事業推進'},

  //エシカル
  {val:'kobayashim', txt:'小林将'},
  {val:'nishijima', txt:'西嶋'},

  //第5営業部
  {val:'komatsu', txt:'小松'},
  {val:'onda', txt:'恩田'},

];

function check() {
  if (orderForm.orderNum.value == "") {
    alert('注文箱数を入力してください。');
    return false;
  }else{
  if(window.confirm('ご注文を登録します。')){
    return true; // OKの場合は送信
  }
  else{
    window.alert('登録を中止します。');
    return false;
  }
}
}

function createConfirmMessage() {
  return message;

}


 /* if (orderForm.orderNum.value == ''){
    alert('注文の箱数を半角数字で入力して下さい。')
    return false;
  }else{
    return true;
  }
*/
