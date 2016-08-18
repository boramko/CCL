function com() {
  var strikeflag = 0;
  var spareflag = false;
  var result = 0;
  var nextone = 0;
  var nexttwo = 0;
  var sp1 = 0;
  var sp2 = 0;
  var count =0;
  
  function htmlTableOne(one, i) {
    alert(i + " ONE번째 그림");
    var a = i;
    a -= 1;
    var tr1 = document.getElementById("data" + a);
    // var one = drowone(one);
    // var cell = tr1.insertCell(0);
    tr1.innerHTML = "<td>" + one + "</td>";
    /*
     * var last = tr1.insertCell(20); last.innerHTML = three;
     */
  }
  function htmlTableTwo(two, rest, i) {
    alert(i + " TWO번째 그림");
    var a = i;
    a += 10;
    var tr1 = document.getElementById("data" + a);
    // var two = drowtwo(two , rest);
    // var cell1 = tr1.insertCell(0);
    tr1.innerHTML = "<td>" + two + "</td>";

    /*
     * var last = tr1.insertCell(20); last.innerHTML = three;
     */
  }

  function totalSum(i) {
    var td = document.getElementById("result" + i);
    td.innerHTML = result;
  }

  
  var i=0;
  
  while (i != 10){
    i++;
    alert("=================" + i +"라운드 =============");
    
    var one = Math.floor(Math.random() * 11);
    var rest =  10 - Number(one);
    htmlTableOne(one, i);
    
    if (spareflag == true) {
      count++;
      alert("spare count " + count);
      alert("sp1 = " + sp1);
      alert("sp2 = " + sp2);
      alert("nextone = " + nextone); //현재값
      result += Number(sp1) + Number(sp2) + Number(one);
      totalSum(i - 1);
      spareflag = false;
    }

    if (one == 10) {
      strikeflag += 1;
      // 스트라이크 그려주기
    } else {
      var two = Math.floor(Math.random() * 11);
      var flag = false;
      while (flag == false) {
        if (two > rest) {
          two = Math.floor(Math.random() * 11);
        }else{
          flag = true;
        }
      }
      htmlTableTwo(two, rest, i);
      sp1 = one;
      sp2 = two;

      alert("1 =" + one);
      alert("2 =" + two);
      alert("rest =" + rest);
      
      if (two == rest) {
        spareflag = true;
        strikeflag = 0;
        nextone = one;
        // 스페어 처리
        alert("spare");
      } else if (one == 0 && two == 0) {
        // one , two zero
        result += Number(one) + Number(two);
        totalSum(i);
        strikeflag = 0;
        alert("zero");
      } else if (one == 0) {
        // one zero
        result += Number(two);
        totalSum(i);
        strikeflag = 0;
        alert("one zero");
      } else if (two == 0) {
        // two zero
        result += Number(one);
        totalSum(i);
        alert("two zero");
        strikeflag = 0;
      } else if (strikeflag == 1) {
        nextone = one;
        nexttwo = two;
        result += one + two + Number(nextone) + Number(nexttwo);
        totalSum(i-1);
        alert("스트라이크");
        result += one + two ;
        totalSum(i);
      } else if (strikeflag == 2) {
        alert("더블");
      } else if (strikeflag >= 3) {
        alert("터키!");
      } else {
        result += Number(one) + Number(two);
        totalSum(i);
        strikeflag = 0;
        alert("add ");
      }
      /*  if(i == 10 && strikeflag == 1 || spareflag == true){
        alert("strikeflag = " + strikeflag );
        alert("spareflag  = " + spareflag );
        
        var three = Math.floor(Math.random() * 11);
        nextone = three;
        
        if(rest == sp2){
          result += Number(sp1) + Number(sp2) + Number(nextone);
          totalSum(i);
        }
          if(three == 0){
          result += Number(three);
          totalSum(i);
        }else if(flag == 1){
          result += 10;
          totalSum(i);
        }
        var a = i;
        a+= 11;
        var tr1 = document.getElementById("data" + a);
        tr1.innerHTML = "<td>"+ three +"</td>";
      }*/
    }
  }
}
