///Konstante za racunanje
var wgs84_a=6378137.0;	//m
var wgs84_a2=40680631590769;
var wgs84_b=6356752.314;	//m
var wgs84_b2=40408299981544.4;	
var wgs84_e2=0.00669438006676466; //e^2
var wgs84_e2_=0.00673949681993606; //e'^2;
        
var bessel_a=6377397.155;	//m
var bessel_a2=40671194472602.1; //a^2
var bessel_b=6356078.963;	//m
var bessel_b2=40399739783891.2;
var bessel_e2=0.00667437217497493;  //e^2
var bessel_e2_=0.00671921874158131; //e'^2
var bessel_e4=4.45472439300796e-05;
var bessel_e6=2.97324885358744e-07;
var bessel_e8=1.98445694176601e-09;

var dX=-409.520465;
var dY=-72.191827;
var dZ=-486.872387;
var Alfa=1.49625622332431e-05;
var Beta=2.65141935723559e-05;
var Gama=-5.34282614688910e-05;
var dm=-17.919456e-6;

var M0=new Array(1.0,Math.sin(Gama),-1*Math.sin(Beta));
var M1=new Array(-1*Math.sin(Gama),1,Math.sin(Alfa));
var M2=new Array(Math.sin(Beta),-Math.sin(Alfa),1);

var E=4.76916455578838e-12;
var D=3.43836164444015e-9
var C=2.64094456224583e-6;
var B=0.00252392459157570;
var A=1.00503730599692;
/////////////////////////////////////////////////////////////

///Funkcija za pretvorbo GK koordinat v GPS
function gk2GPS(x,y)
{
    h=0
    y=(y-500000)/0.9999;
    x=(1*x+5000000)/0.9999;  // 1*x  !!!!!!!!!!!
    
    ab=(1*bessel_a + 1*bessel_b);
    fi0 = (2 * x) / ab;
    
    dif=1.0;
    p1=bessel_a * (1 - bessel_e2);
    var n=25;
    while(Math.abs(dif)>0&&n>0)
    {
        L=p1*(A*fi0-B*Math.sin(2*fi0)+C*Math.sin(4*fi0)-D*Math.sin(6*fi0)+E*Math.sin(8*fi0));
        dif=(2*(x-L)/ab);
        fi0=fi0+dif;
        n--;
    }    
    N=bessel_a/(Math.sqrt(1-bessel_e2*Math.pow(Math.sin(fi0),2)));
    t = Math.tan(fi0);
	t2 = Math.pow(t,2);
    t4=Math.pow(t2,2);
    cosFi=Math.cos(fi0);
    ni2=bessel_e2_*Math.pow(cosFi,2);
    lambda=0.261799387799149+(y/(N*cosFi))-(((1+2*t2+ni2)*Math.pow(y,3))/(6*Math.pow(N,3)*cosFi))+(((5+28*t2+24*t4)*Math.pow(y,5))/(120*Math.pow(N,5)*cosFi));
    fi=fi0-((t*(1+ni2)*Math.pow(y,2))/(2*Math.pow(N,2)))+(t*(5+3*t2+6*ni2-6*ni2*t2)*Math.pow(y,4))/(24*Math.pow(N,4))-(t*(61+90*t2+45*t4)*Math.pow(y,6))/(720*Math.pow(N,6));
        
    N=bessel_a/(Math.sqrt(1-bessel_e2*Math.pow(Math.sin(fi),2)));
    X=(N+h)*Math.cos(fi)*Math.cos(lambda);
    Y=(N+h)*Math.cos(fi)*Math.sin(lambda);
    Z=((bessel_b2/bessel_a2)*N+h)*Math.sin(fi);
    
    X-=dX; Y-=dY; Z-=dZ;
    X/=(1+dm); Y/=(1+dm); Z/=(1+dm);
    
    X1=X-M0[1]*Y-M0[2]*Z;
    Y1=-1*M1[0]*X+Y-M1[2]*Z;
    Z1=-1*M2[0]*X-M2[1]*Y+Z;
    
    p=Math.sqrt(Math.pow(X1,2)+Math.pow(Y1,2));
    O=Math.atan2(Z1*wgs84_a,p*wgs84_b);
    SinO=Math.sin(O);
    Sin3O=Math.pow(SinO,3);
    CosO=Math.cos(O);
    Cos3O=Math.pow(CosO,3);
    
    fif=Math.atan2(Z1+wgs84_e2_*wgs84_b*Sin3O,p-wgs84_e2*wgs84_a*Cos3O);
    lambdaf=Math.atan2(Y1,X1);
    
    N=wgs84_a/Math.sqrt(1-wgs84_e2*Math.pow(Math.sin(fif),2));
    hf=p/Math.cos(fif)-N;
    
    fif=(fif*180)/Math.PI;
    lambdaf=(lambdaf*180)/Math.PI;
    
    retVal=new Array(fif, lambdaf);
    
    return retVal;    
}


///Funkcija za predvorbo GPS koordinat v GK
function GPS2GK(fi,lam,H)
{
    fi=fi*Math.PI/180;
    lam=lam*Math.PI/180;
    
    var N=wgs84_a/(Math.sqrt(1-wgs84_e2*Math.pow(Math.sin(fi),2)));
    var X=(N+H)*Math.cos(fi)*Math.cos(lam);
    var Y=(N+H)*Math.cos(fi)*Math.sin(lam);
    var Z=((wgs84_b2/wgs84_a2)*N+H)*Math.sin(fi);
    
    var X1=X+M0[1]*Y+M0[2]*Z;
    var Y1=M1[0]*X+Y+M1[2]*Z;
    var Z1=M2[0]*X+M2[1]*Y+Z;
    
    X=(X1*(1+dm))+dX;
    Y=(Y1*(1+dm))+dY;
    Z=(Z1*(1+dm))+dZ;
    
    var p=Math.sqrt(Math.pow(X,2)+Math.pow(Y, 2));
    var O=Math.atan2(Z*bessel_a,p*bessel_b);
    var SinO=Math.sin(O);
    var Sin3O=Math.pow(SinO,3);
    var CosO=Math.cos(O);
    var Cos3O=Math.pow(CosO,3);
    fi=Math.atan2(Z+bessel_e2_*bessel_b*Sin3O,p-bessel_e2*bessel_a*Cos3O);
    lam=Math.atan2(Y,X);
    N=bessel_a/Math.sqrt(1-bessel_e2*Math.pow(Math.sin(fi),2));
    H=p/Math.cos(fi)-N;
    
    var m0=0.9999;
    var SinFI=Math.sin(fi);
    var CosFI=Math.cos(fi);
    var Sin2FI=Math.pow(SinFI,2);
    var Cos2FI=Math.pow(CosFI,2);
    var Cos3FI=Math.pow(CosFI,3);
    var Cos5FI=Math.pow(CosFI,5);
    var c=bessel_e2_*Cos2FI;
    var c2=Math.pow(c,2);
    
    var l=lam-0.261799387799149;
    var l2=Math.pow(l, 2);
    var l3=Math.pow(l, 3);
    var l4=Math.pow(l, 4);
    var l5=Math.pow(l, 5);
    var l6=Math.pow(l, 6);
    
    var L=bessel_a*(1-bessel_e2)*(A*fi-(B*Math.sin(2*fi))+(C*Math.sin(4*fi))-(D*Math.sin(6*fi))+(E*Math.sin(8*fi)));
    var T=Math.pow(Math.tan(fi),2);
    var T2=Math.pow(T,2);
    
    X=L+(l2*N*SinFI*CosFI/2)+(l4*N*SinFI*Cos3FI*(5-T+9*c+4*c2)/24)+(l6*N*SinFI*Cos5FI*(61-58*T+T2+600*c-330*bessel_e2_)/720);
    X*=m0;
    X-=5000000;
    
    Y=(l*N*CosFI)+(l3*N*Cos3FI*(1-T+c)/6)+(l5*N*Cos5FI*(5-18*T+T2+72*c-58*bessel_e2_)/120);
    Y*=m0;
    Y+=500000;
    
    return new Array(X,Y,H);
}
