                                                      //---- 1-----
// Создать массивы А и В. Заполнить случайными числами. Найти все элементы которые повторяются в массивах А и Б.

a=new Array(8);                                                          
b=new Array(10);
repeat=[];  

for( i=0,max=15 ;i<a.length;i++){
	a[i]=Math.floor(Math.random() * Math.floor(max));
}
console.log('Массив А',a);

for( i=0,max=25 ;i<b.length;i++){
	b[i]=Math.floor(Math.random() * Math.floor(max));
}
console.log('Массив В',b);

 for(i=0;i<b.length;i++){
			for(j=0;j<a.length;j++){
				if(b[i]===a[j]){
					repeat.push(b[i]);
				}
		}
 }
 console.log('Массивчик с повторялками: ', repeat);



																		  //  -------2----------
// Создать новый массив А размерностью n. Заполнить случайными числами в любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];
// -------проверить все числа на простоту, и найденные простые числа сохранить в массив B.
// -------найти максимальное число и минимальное число.


// Создать новый массив А размерностью n. Заполнить случайными числами в любом диапазоне. Например A = [23,1,2,52,5,34,23,6,246,436];

// let arrL=+prompt('Какой длины будет наш массив ?');
// a =new Array(arrL);
// prime=[];

// for(i=0,max=900;i<a.length;i++){
// 	a[i]=Math.floor(Math.random() * Math.floor(max));
// }
// console.log('Наш массив',a);

// // -------проверить все числа на простоту, и найденные простые числа сохранить в массив B.

// for(i=0;i<a.length;i++){
// 	isPrime=true;
// 	let c=a[i];
	
// 	if(c>2){
// 		for(j=2;j<c;j++){
// 			if(c%j===0){
// 				isPrime=!isPrime;
// 				break;
// 			}
// 		}
// 	}
// 	if (isPrime){
// 	prime.push(c);
// 	}

// 	// -------найти максимальное число и минимальное число.
// 	var max=0;
// 	for(i=0;i<a.length;i++){
// 	if(a[i]>a[0]){
// 		a[0]=a[i];
// 		max=a[0];
		
// 	}
// }
// var min=0;
// for(i=0;i<a.length;i++){
// 	if(a[i]<a[0]){
// 		a[0]=a[i];
// 		min=a[0];
		
// 	}
// }

// }
// console.log('Массив с простыми числами  ',prime);
// console.log('Максимальное число ',max);
// console.log('Минимальное число ',min);




// 																		  -------3----------
// Элементы массива между min -- max записать в массив B. Массив взять из 2-го задания.


// var arrL=+prompt('Какой длины будет наш массив ?');
// a =new Array(arrL);


// for(i=0,max=900;i<a.length;i++){
// 	a[i]=Math.floor(Math.random() * Math.floor(max));
// }
// console.log('Наш массив',a);

// var b=[];
// var max=0;
// 	for(i=0;i<a.length;i++){
// 	if(a[i]>max){
// 		max=a[i];
		
// 	}
// }
// console.log(max,'max');

// var min=max;
// for(i=0;i<a.length;i++){
// 	if(a[i]<min){
// 		min=a[i];
		
// 	}
// }
// console.log(min,'min');

// for(s=0;s<a.length;s++){
// 	if(a[s]!==max&&a[s]!==min){
// 	b.push(a[s]);
// 	}
	
// }

// console.log('Массивчик в  без мах и min ',b);


														//  -------4-------
// В массиве A поменять местами min и max. Массив взять с 3-го задания.					
							

// let arrL=+prompt('Какой длины будет наш массив ?');
// a =new Array(arrL);
// prime=[];

// for(i=0,max=900;i<a.length;i++){
// 	a[i]=Math.floor(Math.random() * Math.floor(max));
// }
// console.log('Наш массив',a);					

// var min=Math.min(...a);
// console.log('min ДО ', min);
// var max=Math.max(...a);
// console.log('max ДО ', max);

// var iMax=a.indexOf(max);
// var iMin=a.indexOf(min);
// a[iMax]=min;
// a[iMin]=max;

// console.log(a,'Массив после');
