

let hour = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')
let date = document.getElementById('date')



setInterval(function() {
  let a = new Date();
  let h = a.getHours()
  let m = a.getMinutes()
  let s = a.getSeconds()
  let d = a.getDate()

  if(h<10){
    h = "0" + h
  }
  if(m<10){
    m = "0" + m
  }
  if(s<10){
    s = "0" + s
  }
  hour.innerHTML = h;
  min.innerHTML = m;
  sec.innerHTML = s;
  date.innerHTML = "Date : " + d;
}, 1000);

