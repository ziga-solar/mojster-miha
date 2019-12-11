                                                                   
        


//--- zacetek podprogramov ---------------------function karkoli(x,y,z,...) -------------

//--------------------------zacetek procedure ----------------------------------------------------------


//-- funkcije iz lam in fi v vgaussk, samo za iteracijo

function vgge(FI,LA) 
{//*     PRETVORBA GEOGRAFSKIH KOORDINAT T(FI,LA) V RAVNINSKE
//*     GAUSS-KRUGERJEVE MODULIRANE KOORDINATE T(Y,X) NA
//*     BESSELOVEM  ELIPSOIDU
//      double,longint - za pascal in fortran
var FI, LA,
      A1,A2,A3,A4,A5,A6,T,X,Y,XG,YG,LAM,XX,
      E2,PI,AA,E4,E6,E8,E10,A,B,C,D,E,F,BB,EE,POP,
      FSEK,LSEK,B1,B2,B3,
      FMIN,LMIN,LST,FST,CONA, name,
       

 //      FI=1*gsstr+(gsmr*60+1*gsser)/3600;
 //      LA=1*gdstr+(gdmr*60+1*gdser)/3600;
  
      CONA = 5;
      B1 = 0.9999;
      B2 = 500000.0;
      B3 = 1000000.0;
//  VELJA ZA PETO CONO   AA,BB   elementi besselovega elipsoida



      AA = 6377397.155;
      BB = 6356078.962818;
      EE = (AA*AA-BB*BB)/(BB*BB);
      PI = 4.0 * Math.atan(1.0);
      E2 = (AA*AA-BB*BB)/(AA*AA);
      E4 = E2*E2;
      E6 = E4*E2;
      E8 = E4*E4;
      E10 = E6*E4;
      A = 1.0+3.0*E2/4.0+45.0*E4/64.0+175.0*E6/256.0+11025.0*
           E8/16384.0+43659.0*E10/65536.0;
      B = 3.0*E2/4.0+15.0*E4/16.0+525.0*E6/512.0+2205.0*E8/2048.0+
           72765.0*E10/65536.0;
      C = 15.0*E4/64.0+105.0*E6/256.0+2205.0*E8/4096.0+10395.0*E10/16384.0;
      D = 35.0*E6/512.0+315.0*E8/2048.0+31185.0*E10/131072.0;
      E = 315.0*E8/16384.0+3465.0*E10 /65536.0;
      F = 693.0*E10/131072.0;

    
      FI = FI*PI/180;
      LA = LA*PI/180;
      T = Math.sin(FI)/Math.cos(FI);
      A1 = AA*AA/Math.sqrt(AA*AA+BB*BB*(T*T));
      A2 = A1*Math.sin(FI)/2.0;
      A3 = A1*(Math.cos(FI)*Math.cos(FI))/6.0*(1.0-T*T+EE*Math.cos(FI)*Math.cos(FI));
      A4 = A1*Math.sin(FI)*(Math.cos(FI)*Math.cos(FI))/24.0*(5.0-T*T+9.0*EE*(Math.cos(FI)*Math.cos(FI)) );
      A5 = A1*Math.sin(FI)*Math.cos(FI)*Math.cos(FI)*Math.cos(FI)*Math.cos(FI)/120.0*(5.0-18.0*T*T+(T*T*T*T)
            +EE*(14.0-72.0*(Math.sin(FI)*Math.sin(FI)) ));

      A6 = A1*Math.sin(FI)*Math.cos(FI)*Math.cos(FI)*Math.cos(FI)*Math.cos(FI)/720.0*(61.0-58.0*(T*T)+(T*T*T*T) );
      LAM = LA-CONA*3.0*PI/180.0;
      XX = AA*(1.0-E2)*(A*FI-B/2.0*Math.sin(2.0*FI)+C/4.0*Math.sin(4.0*FI)-
            D/6.0*Math.sin(6.0*FI)+E/8.0*Math.sin(8.0*FI)-F/10.0*Math.sin(10.0*FI));

      XG = 1*XX+A2*(LAM*LAM)+A4*LAM*LAM*LAM*LAM+A6*(LAM*LAM*LAM*LAM)*(LAM*LAM);
      YG = A1*LAM+A3*(LAM*LAM)*LAM+A5*(LAM*LAM*LAM*LAM)*LAM;
      Y = YG*B1+1*B2+CONA*B3;
      X = XG*B1;

   

    // ix := Trunc(x/10)*10;
    //  iy := Trunc(y/10)*10;
    
    //ix = Trunc(X);
    //iy = Trunc(Y);
   //ix = Math.round(X);
   //iy = Math.round(Y);
   ix = 1*X;
   iy = 1*Y;

//if (racun==1) {return ix;}
//if (racun==2) {return iy;}

// spodaj konec funkcije iz lam in fi v vgaussk
}




//  ----------iteracijaz(x,y,i) -----------!!!!!!!!!!!!!!!!!
//  ----------iteracijaz(x,y,i) -----------!!!!!!!!!!!!!!!!!
//  ----------iteracijaz(x,y,i) -----------!!!!!!!!!!!!!!!!!




//=========================== ===ITERACIJA ZORKO====== =============== =================
//=========================== ===ITERACIJA ZORKO====== =============== =================
//=========================== ===ITERACIJA ZORKO====== =============== =================
//=========================== ===ITERACIJA ZORKO====== =============== =================
//=========================== ===ITERACIJA ZORKO====== =============== =================
//=========================== ===ITERACIJA ZORKO====== =============== =================
//=========================== ===ITERACIJA ZORKO====== =============== =================
//=========================== ===ITERACIJA ZORKO====== =============== =================
//=========================== ===ITERACIJA ZORKO====== =============== =================

function iteracijaz(xx,yy, racuni) 

{

xx=1*xx+1*5000000;
yy=1*yy+1*5000000;



if ((xx<5013000)||(yy<5362600)||(xx>5207700)||(yy>5631000)) {alert("To je kraj izven Slovenije, program ne bo pravilno deloval !!!");}
//la 13.25 do 16.7
//fi 45.25 do 47.0
var fi, la, j, fi0, la0,k,ii,jj,fi01,fi02,la01,la02,fii, lai, ir, fi10,la10

//grobo iskanje na desetinko stopinje -----------------------
 for (j=0; j<=37;  j++) 
{
  for (i=0; i<=20;  i++)
   {
    //470+1-(18+1+1)=451  , 167+1-131=35+1+1 ---===malo povecal meje =============
    fi=(471-i)/10; la=(168-j)/10; 
    vgge(fi,la); 
 
  if ( ((xx-ix)>0) )
         { 
        for (k=j; k<=37;  k++)          
          {
           la=(168-k)/10; ir=i;
          vgge(fi,la); 
              if ((yy-iy)>0) 
               {
                fi0=fi; la0=la;
                i=21; j=38; k=38;
               }
          }
     
       if ( ((xx-ix)<0) )
        {
         for (kk=ir; kk<=20;  kk++) 
            {fi=(471-kk)/10; 
             vgge(fi,la);
             if ((xx-ix)>0) 
               {
                fi0=fi; la0=la;
                i=21; j=38;  kk=21;
               }
        
            }
        }

      }
// konec prej for (j=132; j<=168;  j++), zdaj for (j=0; j<=37;  j++) 
}
//------------ izhod sta fi0 in la0 ----------------------
 



// -------------------testiranje rezultata----
// ix in iy pride iz vgge(fi,la); xx in yy sta pa podani vrednosti


fii=fi0;
lai=la0;


//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  PRVIČ ---PRVIČ ---PRVIČ ---
//vrednosti nazaj, tako da lahko preverim ce je zaokrozitev navzgor po pravilih ustrezna,
//lahko, da ni in se zapise mesto ali več (odšteje se sekunda ali več) pred decimalnim stevilom kot rezultat za sekunde,
//odvisnost ni linearna !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);

gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

//alert("  iy="+iy); 
lai_star=lai;
raz1=Math.abs(1*yy-1*iy);
//laip=1*lai+1/3600;
lain=1*lai-(1/3600);
vgge(fii,lain);
raz3=Math.abs(1*yy-1*iy);
//vgge(fii,laip);
//raz2=Math.abs((1*xx+1*yy)-(1*ix+1*iy));
if ((raz3<raz1)) {lai=lain;} else {lai=lai_star;}
//if ((raz2<raz1)&(raz2<raz3)) {lai=laip;}
//alert("raz1  "+raz1+"  |   raz3 "+raz3+"   lai="+lai+ "  iy="+iy);  



//alert("  ix="+ix); 
fii_star=fii;
raz1=Math.abs(1*xx-1*ix);
//laip=1*lai+1/3600;
fiin=1*fii-(1/3600);
vgge(fiin,lai);
raz3=Math.abs(1*xx-1*ix);
//vgge(fii,laip);
//raz2=Math.abs((1*xx+1*yy)-(1*ix+1*iy));
if ((raz3<raz1)) {fii=fiin;} else {fii=fii_star;}
//if ((raz2<raz1)&(raz2<raz3)) {lai=laip;}
//alert("raz1  "+raz1+"  |   raz3 "+raz3+"   lai="+lai+ "  iy="+iy);  




//-----------2
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);

gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

lai_star=lai;
raz1=Math.abs(1*yy-1*iy);
lain=1*lai-(1/3600);
vgge(fii,lain);
raz3=Math.abs(1*yy-1*iy);
if ((raz3<raz1)) {lai=lain;} else {lai=lai_star;}

fii_star=fii;
raz1=Math.abs(1*xx-1*ix);
fiin=1*fii-(1/3600);
vgge(fiin,lai);
raz3=Math.abs(1*xx-1*ix);
if ((raz3<raz1)) {fii=fiin;} else {fii=fii_star;}



//-----------3
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);

gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

lai_star=lai;
raz1=Math.abs(1*yy-1*iy);
lain=1*lai-(1/3600);
vgge(fii,lain);
raz3=Math.abs(1*yy-1*iy);
if ((raz3<raz1)) {lai=lain;} else {lai=lai_star;}

fii_star=fii;
raz1=Math.abs(1*xx-1*ix);
fiin=1*fii-(1/3600);
vgge(fiin,lai);
raz3=Math.abs(1*xx-1*ix);
if ((raz3<raz1)) {fii=fiin;} else {fii=fii_star;}


//-----------4
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);

gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

lai_star=lai;
raz1=Math.abs(1*yy-1*iy);
lain=1*lai-(1/3600);
vgge(fii,lain);
raz3=Math.abs(1*yy-1*iy);
if ((raz3<raz1)) {lai=lain;} else {lai=lai_star;}

fii_star=fii;
raz1=Math.abs(1*xx-1*ix);
fiin=1*fii-(1/3600);
vgge(fiin,lai);
raz3=Math.abs(1*xx-1*ix);
if ((raz3<raz1)) {fii=fiin;} else {fii=fii_star;}


//-------------spodaj, ŠE izboljšanje rezultata
//-----------------------fi+1, la+1, fi-1, la-1, ali kombinacije
fiip=1*fii+(1/3600);
laip=1*lai+1/3600;
fiin=1*fii-(1/3600);
lain=1*lai-(1/3600);
vgge(fii,lai);
fii0=fii;
lai0=lai;
razlika0=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
vgge(fiip,laip);
razlikap=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
vgge(fiin,lain);
razlikan=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikap<razlika0) {fii=fiip; lai=laip; razlika0=razlikap;}
if (razlikan<razlika0) {fii=fiin; lai=lain; razlika0=razlikan;}



vgge(fii0,lain);
razlikaln=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikaln<razlika0) {fii=fii0; lai=lain; razlika0=razlikaln;}
vgge(fiin,lai0);
razlikafn=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikafn<razlika0) {fii=fiin; lai=lai0; razlika0=razlikafn;}
vgge(fii0,laip);
razlikalp=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikalp<razlika0) {fii=fii0; lai=laip; razlika0=razlikalp;}
vgge(fiip,lai0);
razlikafp=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikafp<razlika0) {fii=fiip; lai=lai0; razlika0=razlikafp;}





//-------spodaj, pogoja vržeta rezultata za fi in lambda----------------------------




// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0
// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0
// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0
// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0
// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0


// ix in iy pride iz vgge(fi,la); xx in yy sta pa podani vrednosti
// Spodnja ideja je taka, da fi in lam dobim iz razmerja rec. d_fi=(dx/dx_min)*(1/3600)', fii = fii1+d_fi
// in potem se enako idejo uporabim za mrežo stotin sekunde
//-------------spodaj na 100 sekunde ---------------
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);


gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

x2=ix; y2=iy;

lain=1*lai-(1/3600);
vgge(fii,lain);
y1=iy;
raz_y=1*y2-1*y1;


fiin=1*fii-(1/3600);
vgge(fiin,lai);
x1=ix;
raz_x=1*x2-1*x1;

dx=1*xx-1*x1; dy=1*yy-1*y1;

d_la=(1/3600)*dy/raz_y;      lai=1*lain+1*d_la;
d_fi=(1/3600)*dx/raz_x;      fii=1*fiin+1*d_fi; 
//-------------------spodaj na 100 00 sek----------------------------------


gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60*100)/100;
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);


gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60*100)/100;
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

x2=ix; y2=iy;

lain=1*lai-(1*0.01);
vgge(fii,lain);
y1=iy;
raz_y=1*y2-1*y1;


fiin=1*fii-(1*0.01);
vgge(fiin,lai);
x1=ix;
raz_x=1*x2-1*x1;

dx=1*xx-1*x1; dy=1*yy-1*y1;

d_la=(1/100)*dy/raz_y;      lai=1*lain+1*d_la;
d_fi=(1/100)*dx/raz_x;      fii=1*fiin+1*d_fi; 

//-------------------------------------

//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  DRUGIČ ---DRUGIČ ---DRUGIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  DRUGIČ ---DRUGIČ ---DRUGIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  DRUGIČ ---DRUGIČ ---DRUGIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  DRUGIČ ---DRUGIČ ---DRUGIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  DRUGIČ ---DRUGIČ ---DRUGIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  DRUGIČ ---DRUGIČ ---DRUGIČ ---
//-------spodaj se prej pretvorim ge dolzino v stopinje, min, sek in preracunam PRVIČ ---  DRUGIČ ---DRUGIČ ---DRUGIČ ---
//vrednosti nazaj, tako da lahko preverim ce je zaokrozitev navzgor po pravilih ustrezna,
//lahko, da ni in se zapise mesto ali več (odšteje se sekunda ali več) pred decimalnim stevilom kot rezultat za sekunde,
//odvisnost ni linearna !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);

gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

//alert("  iy="+iy); 
lai_star=lai;
raz1=Math.abs(1*yy-1*iy);
//laip=1*lai+1/3600;
lain=1*lai-(1/3600);
vgge(fii,lain);
raz3=Math.abs(1*yy-1*iy);
//vgge(fii,laip);
//raz2=Math.abs((1*xx+1*yy)-(1*ix+1*iy));
if ((raz3<raz1)) {lai=lain;} else {lai=lai_star;}
//if ((raz2<raz1)&(raz2<raz3)) {lai=laip;}
//alert("raz1  "+raz1+"  |   raz3 "+raz3+"   lai="+lai+ "  iy="+iy);  



//alert("  ix="+ix); 
fii_star=fii;
raz1=Math.abs(1*xx-1*ix);
//laip=1*lai+1/3600;
fiin=1*fii-(1/3600);
vgge(fiin,lai);
raz3=Math.abs(1*xx-1*ix);
//vgge(fii,laip);
//raz2=Math.abs((1*xx+1*yy)-(1*ix+1*iy));
if ((raz3<raz1)) {fii=fiin;} else {fii=fii_star;}
//if ((raz2<raz1)&(raz2<raz3)) {lai=laip;}
//alert("raz1  "+raz1+"  |   raz3 "+raz3+"   lai="+lai+ "  iy="+iy);  




//-----------2
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);

gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

lai_star=lai;
raz1=Math.abs(1*yy-1*iy);
lain=1*lai-(1/3600);
vgge(fii,lain);
raz3=Math.abs(1*yy-1*iy);
if ((raz3<raz1)) {lai=lain;} else {lai=lai_star;}

fii_star=fii;
raz1=Math.abs(1*xx-1*ix);
fiin=1*fii-(1/3600);
vgge(fiin,lai);
raz3=Math.abs(1*xx-1*ix);
if ((raz3<raz1)) {fii=fiin;} else {fii=fii_star;}



//-----------3
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);

gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

lai_star=lai;
raz1=Math.abs(1*yy-1*iy);
lain=1*lai-(1/3600);
vgge(fii,lain);
raz3=Math.abs(1*yy-1*iy);
if ((raz3<raz1)) {lai=lain;} else {lai=lai_star;}

fii_star=fii;
raz1=Math.abs(1*xx-1*ix);
fiin=1*fii-(1/3600);
vgge(fiin,lai);
raz3=Math.abs(1*xx-1*ix);
if ((raz3<raz1)) {fii=fiin;} else {fii=fii_star;}


//-----------4
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);

gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

lai_star=lai;
raz1=Math.abs(1*yy-1*iy);
lain=1*lai-(1/3600);
vgge(fii,lain);
raz3=Math.abs(1*yy-1*iy);
if ((raz3<raz1)) {lai=lain;} else {lai=lai_star;}

fii_star=fii;
raz1=Math.abs(1*xx-1*ix);
fiin=1*fii-(1/3600);
vgge(fiin,lai);
raz3=Math.abs(1*xx-1*ix);
if ((raz3<raz1)) {fii=fiin;} else {fii=fii_star;}


//-------------spodaj, ŠE izboljšanje rezultata
//-----------------------fi+1, la+1, fi-1, la-1, ali kombinacije
fiip=1*fii+(1/3600);
laip=1*lai+1/3600;
fiin=1*fii-(1/3600);
lain=1*lai-(1/3600);
vgge(fii,lai);
fii0=fii;
lai0=lai;
razlika0=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
vgge(fiip,laip);
razlikap=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
vgge(fiin,lain);
razlikan=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikap<razlika0) {fii=fiip; lai=laip; razlika0=razlikap;}
if (razlikan<razlika0) {fii=fiin; lai=lain; razlika0=razlikan;}



vgge(fii0,lain);
razlikaln=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikaln<razlika0) {fii=fii0; lai=lain; razlika0=razlikaln;}
vgge(fiin,lai0);
razlikafn=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikafn<razlika0) {fii=fiin; lai=lai0; razlika0=razlikafn;}
vgge(fii0,laip);
razlikalp=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikalp<razlika0) {fii=fii0; lai=laip; razlika0=razlikalp;}
vgge(fiip,lai0);
razlikafp=Math.sqrt((xx-ix)*(xx-ix)+(yy-iy)*(yy-iy));
if (razlikafp<razlika0) {fii=fiip; lai=lai0; razlika0=razlikafp;}





//-------spodaj, pogoja vržeta rezultata za fi in lambda----------------------------




// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0
// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0
// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0
// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0
// racunanje na stotinko sekunde 10000 10000 10000 10000 10000 10000 10000 10000 ===============0


// ix in iy pride iz vgge(fi,la); xx in yy sta pa podani vrednosti
// Spodnja ideja je taka, da fi in lam dobim iz razmerja rec. d_fi=(dx/dx_min)*(1/3600)', fii = fii1+d_fi
// in potem se enako idejo uporabim za mrežo stotin sekunde
//-------------spodaj na 10_000 sekunde ---------------
gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60);
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);


gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60);
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

x2=ix; y2=iy;

lain=1*lai-(1/3600);
vgge(fii,lain);
y1=iy;
raz_y=1*y2-1*y1;


fiin=1*fii-(1/3600);
vgge(fiin,lai);
x1=ix;
raz_x=1*x2-1*x1;

dx=1*xx-1*x1; dy=1*yy-1*y1;

d_la=(1/3600)*dy/raz_y;      lai=1*lain+1*d_la;
d_fi=(1/3600)*dx/raz_x;      fii=1*fiin+1*d_fi; 
//-------------------spodaj na 100_00 sek----------------------------------


gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60*100)/100;
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);


gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60*100)/100;
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

x2=ix; y2=iy;

lain=1*lai-(1*0.01);
vgge(fii,lain);
y1=iy;
raz_y=1*y2-1*y1;


fiin=1*fii-(1*0.01);
vgge(fiin,lai);
x1=ix;
raz_x=1*x2-1*x1;

dx=1*xx-1*x1; dy=1*yy-1*y1;

d_la=(1/100)*dy/raz_y;      lai=1*lain+1*d_la;
d_fi=(1/100)*dx/raz_x;      fii=1*fiin+1*d_fi; 


//-------------------spodaj ŠE enkrat na 1000_0 sek-s tem odpraviš centimetrske napake---------------------------------


gsstr = Math.floor(lai);
gsmr = Math.floor ((lai-gsstr)*60);
gsser = Math.round(((lai-gsstr)*60-gsmr)*60*1000)/1000;
lai=gsstr+(gsmr*60+1*gsser)/3600;
vgge(fii,lai);


gdstr = Math.floor(fii);
gdmr = Math.floor ((fii-gdstr)*60);
gdser = Math.round(((fii-gdstr)*60-gdmr)*60*1000)/1000;
fii=gdstr+(gdmr*60+1*gdser)/3600;
vgge(fii,lai);

x2=ix; y2=iy;

lain=1*lai-(1*0.001);
vgge(fii,lain);
y1=iy;
raz_y=1*y2-1*y1;


fiin=1*fii-(1*0.001);
vgge(fiin,lai);
x1=ix;
raz_x=1*x2-1*x1;

dx=1*xx-1*x1; dy=1*yy-1*y1;

d_la=(1/1000)*dy/raz_y;      lai=1*lain+1*d_la;
d_fi=(1/1000)*dx/raz_x;      fii=1*fiin+1*d_fi; 

//-------------------------------------


if (racuni==1) {return fii;}
if (racuni==2) {return lai;} 
//---------------------

 retVal=new Array(fii,lai);
 return retVal;    



}
//konec iteracije

}
//------------------------------------------------------------------------------------


//  ----------iteracijaz(x,y,i) -----------!!!!!!!!!!!!!!!!!

//==============iz GK v D48==========================
///-------------------------------------------
function pretvori_vgeod48() {
var ff = self.document.pretvorixy; 
//y=ff.ime_inputa.value; 
x=ff.x.value; 
y=ff.y.value; 
h=0;


//-- decimalni zapis ------------------
rez=iteracijaz(x,y,h); // retVal=new Array(fii,lai); return retVal;    
ff.lamd48d.value=rez[1];
ff.fid48d.value=rez[0];

//--  zapis ° ' "
ff.lamd48.value=deg2DMS(rez[1]);
ff.fid48.value=deg2DMS(rez[0]);

}





//=================================================================












                                                             
                                             
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
function gk2GPS(x,y,h)
{




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
    
    retVal=new Array(fif,lambdaf,hf);
    
    return retVal;    
}




function deg2DMS_(deg)
{
    var D=Math.floor(deg);
    deg=(deg-D)*60;
    var M=Math.floor(deg);
    S=Math.round((deg-M)*6000);
    S/=100;        
     gg=new Array(D,M,S);
 return gg;    
}


//==============iz GK v wgs84==========================
///-------------------------------------------
function pretvori_vgeo() {
var ff = self.document.pretvorixy; 
//y=ff.ime_inputa.value; 
x=ff.x.value; 
y=ff.y.value; 
h=0;

gk2GPS(x,y,h); // retVal=new Array(fif,lambdaf,hf);  return retVal;   
//ff.lam.value=retVal[1];
//ff.fi.value=retVal[0];

//-- decimalni zapis
rez=gk2GPS(x,y,h); // retVal=new Array(fif,lambdaf,hf);  return retVal;   
ff.lamd.value=rez[1];
ff.fid.value=rez[0];

//--  zapis ° ' "
ff.lam.value=deg2DMS(rez[1]);
ff.fi.value=deg2DMS(rez[0]);

}



//=================iz wgs84  v GKXY========================
///-------------------------------------------
function pretvori_vxy() {
var ff = self.document.pretvorixy; 
//y=ff.ime_inputa.value; 
fi=ff.fid.value; 
lam=ff.lamd.value; 
H=0;

rez_xy=GPS2GK(fi,lam,H)
//ff.y1.value=Math.round(rez_xy[1]*100)/100;
//ff.x1.value=Math.round(rez_xy[0]*100)/100;

ff.y1.value=Math.round(rez_xy[1]);
ff.x1.value=Math.round(rez_xy[0]);

}





//=================iz D48  v GKXY========================
///-------------------------------------------
function pretvorizd48_vxy() {
var ff = self.document.pretvorixy; 
//y=ff.ime_inputa.value; 
fi=ff.fid48d.value; 
lam=ff.lamd48d.value; 
H=0;

vgge(fi,lam); // ta pretvori iz fi, lam d48 v GK XY
//ff.y1.value=Math.round(iy*100)/100;
//ff.x1.value=Math.round(ix*100)/100;

ff.y1.value=Math.round(iy-5000000);
ff.x1.value=Math.round(ix-5000000);

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

/// Funkcija za pretvarjanje iz stopinj v stopinje, minute in sekunde
function deg2DMS(deg)
{
    var D=Math.floor(deg);
    deg=(deg-D)*60;
    var M=Math.floor(deg);
    S=Math.round((deg-M)*6000);
    S/=100;
    S=S.toFixed(2);
    //return D+"Â°"+M+"'"+S+"''";
    if(M < 10)
    {
        if(S < 10) S = "0" + S;
        return D+"°0"+M+"'"+S+"''";
    }
    else
    {
        if(S < 10) S = "0" + S;
        return D+"° "+M+"' "+S+"''";
    }
}

/// Funkcija za pretvarjanje iz stopinj, minut in sekund v stopinje
function DMS2deg(D,M,S)
{
    var deg=D+(M/60.0)+(S/3600.0);
    return deg;
}

// end hide -->
