<?php

$Alfa=1.49625622332431e-05;
$Beta=2.65141935723559e-05;
$Gama=-5.34282614688910e-05;

$kon=array(
	'wgs84_a'=>6378137.0, //m
	'wgs84_a2'=>40680631590769,
	'wgs84_b'=>6356752.314,	//m
	'wgs84_b2'=>40408299981544.4,
	'wgs84_e2'=>0.00669438006676466,	//e^2
	'wgs84_e2_'=>0.00673949681993606,	//e'^2;
	'bessel_a'=>6377397.155,	//m
	'bessel_a2'=>40671194472602.1,	//a^2
	'bessel_b'=>6356078.963,	//m
	'bessel_b2'=>40399739783891.2,
	'bessel_e2'=>0.00667437217497493,	//e^2
	'bessel_e2_'=>0.00671921874158131,	//e'^2
	'dX'=>-409.520465,
	'dY'=>-72.191827,
	'dZ'=>-486.872387,
	'dm'=>-17.919456e-6,
	'M0'=>array(1.0,sin($Gama),-1.0*sin($Beta)),
	'M1'=>array(-1*sin($Gama),1,sin($Alfa)),
	'M2'=>array(sin($Beta),-1.0*sin($Alfa),1),
	'E'=>4.76916455578838e-12,
	'D'=>3.43836164444015e-9,
	'C'=>2.64094456224583e-6,
	'B'=>0.00252392459157570,
	'A'=>1.00503730599692
);

function toGps($x,$y,$h=0) {
	global $kon;
	$y=($y-500000)/0.9999;
	$x=(1*$x+5000000)/0.9999;  // 1*x  !!!!!!!!!!!
	
	$ab=(1*$kon['bessel_a'] + 1*$kon['bessel_b']);
	$fi0 = (2 * $x) / $ab;

	$dif=1.0;
	$p1=$kon['bessel_a'] * (1 - $kon['bessel_e2']);
	$n=25;
	while(abs($dif)>0&&$n>0) {
		$L=$p1*($kon['A']*$fi0-$kon['B']*sin(2*$fi0)+$kon['C']*sin(4*$fi0)-$kon['D']*sin(6*$fi0)+$kon['E']*sin(8*$fi0));
		$dif=(2*($x-$L)/$ab);
		$fi0=$fi0+$dif;
		$n--;
	}
	$N=$kon['bessel_a']/(sqrt(1-$kon['bessel_e2']*pow(sin($fi0),2)));
	$t=tan($fi0);
	$t2=pow($t,2);
	$t4=pow($t2,2);
	$cosFi=cos($fi0);
	$ni2=$kon['bessel_e2_']*pow($cosFi,2);
	$lambda=0.261799387799149+($y/($N*$cosFi))-(((1+2*$t2+$ni2)*pow($y,3))/(6*pow($N,3)*$cosFi))+(((5+28*$t2+24*$t4)*pow($y,5))/(120*pow($N,5)*$cosFi));
	$fi=$fi0-(($t*(1+$ni2)*pow($y,2))/(2*pow($N,2)))+($t*(5+3*$t2+6*$ni2-6*$ni2*$t2)*pow($y,4))/(24*pow($N,4))-($t*(61+90*$t2+45*$t4)*pow($y,6))/(720*pow($N,6));

	$N=$kon['bessel_a']/(sqrt(1-$kon['bessel_e2']*pow(Sin($fi),2)));
	$X=($N+$h)*cos($fi)*cos($lambda);
	$Y=($N+$h)*cos($fi)*sin($lambda);
	$Z=(($kon['bessel_b2']/$kon['bessel_a2'])*$N+$h)*sin($fi);

	$X-=$kon['dX']; $Y-=$kon['dY']; $Z-=$kon['dZ'];
	$X/=(1+$kon['dm']); $Y/=(1+$kon['dm']); $Z/=(1+$kon['dm']);

	$X1=$X-$kon['M0'][1]*$Y-$kon['M0'][2]*$Z;
	$Y1=-1*$kon['M1'][0]*$X+$Y-$kon['M1'][2]*$Z;
	$Z1=-1*$kon['M2'][0]*$X-$kon['M2'][1]*$Y+$Z;

	$p=sqrt(pow($X1,2)+pow($Y1,2));
	$O=atan2($Z1*$kon['wgs84_a'],$p*$kon['wgs84_b']);
	$SinO=sin($O);
	$Sin3O=pow($SinO,3);
	$CosO=cos($O);
	$Cos3O=pow($CosO,3);

	$fif=atan2($Z1+$kon['wgs84_e2_']*$kon['wgs84_b']*$Sin3O,$p-$kon['wgs84_e2']*$kon['wgs84_a']*$Cos3O);
	$lambdaf=atan2($Y1,$X1);

	$N=$kon['wgs84_a']/sqrt(1-$kon['wgs84_e2']*pow(sin($fif),2));
	$hf=$p/cos($fif)-$N;

	$fif=($fif*180)/pi();
	$lambdaf=($lambdaf*180)/pi();

	$retVal=array($fif,$lambdaf,$hf);
	return $retVal;    
}

function toGK($fi,$lam,$H=0) {
	global $kon;
	$fi=$fi*pi()/180;
	$lam=$lam*pi()/180;
	
	$N=$kon['wgs84_a']/(sqrt(1-$kon['wgs84_e2']*pow(sin($fi),2)));
	$X=($N+$H)*cos($fi)*cos($lam);
	$Y=($N+$H)*cos($fi)*sin($lam);
	$Z=(($kon['wgs84_b2']/$kon['wgs84_a2'])*$N+$H)*sin($fi);

	$X1=$X+$kon['M0'][1]*$Y+$kon['M0'][2]*$Z;
	$Y1=$kon['M1'][0]*$X+$Y+$kon['M1'][2]*$Z;
	$Z1=$kon['M2'][0]*$X+$kon['M2'][1]*$Y+$Z;

	$X=($X1*(1+$kon['dm']))+$kon['dX'];
	$Y=($Y1*(1+$kon['dm']))+$kon['dY'];
	$Z=($Z1*(1+$kon['dm']))+$kon['dZ'];

	$p=sqrt(pow($X,2)+pow($Y, 2));
	$O=atan2($Z*$kon['bessel_a'],$p*$kon['bessel_b']);
	$SinO=sin($O);
	$Sin3O=pow($SinO,3);
	$CosO=cos($O);
	$Cos3O=pow($CosO,3);
	$fi=atan2($Z+$kon['bessel_e2_']*$kon['bessel_b']*$Sin3O,$p-$kon['bessel_e2']*$kon['bessel_a']*$Cos3O);
	$lam=atan2($Y,$X);
	$N=$kon['bessel_a']/sqrt(1-$kon['bessel_e2']*pow(sin($fi),2));
	$H=$p/cos($fi)-$N;

	$SinFI=sin($fi);
	$CosFI=cos($fi);
	$Sin2FI=pow($SinFI,2);
	$Cos2FI=pow($CosFI,2);
	$Cos3FI=pow($CosFI,3);
	$Cos5FI=pow($CosFI,5);
	$c=$kon['bessel_e2_']*$Cos2FI;
	$c2=pow($c,2);

	$l=$lam-0.261799387799149;
	$l2=pow($l,2);
	$l3=pow($l,3);
	$l4=pow($l,4);
	$l5=pow($l,5);
	$l6=pow($l,6);

	$L=$kon['bessel_a']*(1-$kon['bessel_e2'])*($kon['A']*$fi-($kon['B']*sin(2*$fi))+($kon['C']*sin(4*$fi))-($kon['D']*sin(6*$fi))+($kon['E']*sin(8*$fi)));
	$T=pow(tan($fi),2);
	$T2=pow($T,2);

	$m0=0.9999;
	
	$X=$L+($l2*$N*$SinFI*$CosFI/2)+($l4*$N*$SinFI*$Cos3FI*(5-$T+9*$c+4*$c2)/24)+($l6*$N*$SinFI*$Cos5FI*(61-58*$T+$T2+600*$c-330*$kon['bessel_e2_'])/720);
	$X*=$m0;
	$X-=5000000;

	$Y=($l*$N*$CosFI)+($l3*$N*$Cos3FI*(1-$T+$c)/6)+($l5*$N*$Cos5FI*(5-18*$T+$T2+72*$c-58*$kon['bessel_e2_'])/120);
	$Y*=$m0;
	$Y+=500000;

	return array($X,$Y,$H);
}