function reset(){
	document.getElementById("ptBac2").reset();
}
function result(){
	var x1, x2, delta, a ,b, c;
	var kq=document.getElementById('xuatKq');

	 a=parseFloat(document.getElementById("constant1").value) ;
	 b=parseFloat(document.getElementById("constant2").value) ;
	 c=parseFloat(document.getElementById("constant3").value) ;
	delta=(b*b-4*a*c);
	if(a!=0)
	{
		if(delta==0){
			x1=x2=(-b/(2*a));
			kq.innerHTML = "Phương trình có nghiệm kép: x1= x2 = " + x1;
		}
		else if(delta>0){
			x1=(-b-Math.sqrt(delta))/2*a;
			x2=(-b+Math.sqrt(delta))/2*a;
			kq.innerHTML = "Phương trình có 2 nghiệm phân biệt: x1= " + x1 + " và x2 = " + x2;
		}
		else{
			kq.innerHTML="phương trình vô nghiệm";
		}
	}
	else{
		kq.innerHTML="không thỏa mãn đề bài";
	}
	
}
function resetBai2(){
	document.getElementById("input").reset();
}
function ktNamNhuan(a){
		a=parseInt(a);
		if(a%100==0){
			if(a%400==0){
				return 1;
			}
			else{
				return 0;
			}
		}
		else if(a%4==0){
			return 1;
		}
		else {
			return 0;
		}

}
function resultBai2(){
	var Month,Year;
	var kq=document.getElementById("outputBai2");
	Month=parseInt(document.getElementById("month").value);
	Year=parseInt(document.getElementById("year").value);
	switch(Month)
	{
		case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
        	kq.innerHTML="tháng này có 31 ngày";
        	break;
        case 4:
        case 6:
        case 9:
        case 11:
            kq.innerHTML = "Tháng này có 30 ngày";
            break;
        case 2:
            if (ktNamNhuan(Year) == 1) {
                kq.innerHTML = "Tháng này có 29 ngày";
                break;
            }
            else {
                kq.innerHTML = "Tháng này có 28 ngày";
                break;
            }
        default:
            kq.innerHTML = " không hợp lệ";
            break;

	}

}

function resetBai3(){
	document.getElementById("input").reset();
}
function kiemtrasnt(x) {
    if (x < 2) {
        return 0;
    }
    for (var j = 2; j <= Math.sqrt(x); j++) {
        if (x % j == 0) {
            return 0;
        }
    }
    return 1;
}
function checkex3() {
    var n, i, dem = 0;
    var allkq='';
    var kq3 = document.getElementById("outputBai3");
    n = parseInt(document.getElementById("n").value);
    for (i = 0; i <= n; i++) {
        if (kiemtrasnt(i)){
            allkq+= i +" ";
            dem++;
        }
    }
    kq3.innerHTML = allkq;
    if (dem == 0) {
        kq3.innerHTML = "-1";
    }
}







