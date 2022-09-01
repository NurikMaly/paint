var canvas=document.getElementById("draw_block"); // Берем canvas
var print=canvas.getContext('2d'); // Присваеваем переменной 2d формат
var myColor='red'; // цвет заливки

var clear,input; // переменная кнопки очистки и палитры цветов
clear=document.getElementById("clear"); //кнопка clear
input=document.getElementById("color"); //input с rgb цветами

var paint,lastik,pencil,back;// переменная кисточки,карандаша,ластика,ведра
paint=document.getElementById("paint1");//Кисточка
pencil=document.getElementById("pencil1");//Карандаш
lastik=document.getElementById("lastik1");//Ластик
back=document.getElementById("back1");//Ведро

var ractange, circle, priamogolnik, triugolnik;// Переменная фигур

ractange=document.getElementById("sq1");//Квадрат
circle=document.getElementById('circle');//Круг
triugolnik=document.getElementById('tr');//Триугольник
priamogolnik=document.getElementById('rc');//Прямоугольник

var select=document.getElementById("select");//переменна размера
input.oninput=function(){
    myColor=input.value;//Переменной myColor присваеваем значение select
    
}
// Цвета 
document.querySelector('.type').onclick=function(){myColor='red';}
document.querySelector('.type1').onclick=function(){myColor='green';}
document.querySelector('.type2').onclick=function(){ myColor='yellow';}
document.querySelector('.type3').onclick=function(){ myColor='blue';}
document.querySelector('.type4').onclick=function(){myColor='black';}
document.querySelector('.type5').onclick=function(){myColor='gray';}
document.querySelector('.type6').onclick=function(){myColor='brown';}
document.querySelector('.type7').onclick=function(){ myColor='purple';}
document.querySelector('.type8').onclick=function(){myColor='gold';}
document.querySelector('.type9').onclick=function(){myColor='white';}
document.querySelector('.type10').onclick=function(){myColor='orange';}
document.querySelector('.type11').onclick=function(){myColor='royalblue';}
document.querySelector('.type12').onclick=function(){myColor='yellowgreen';}
document.querySelector('.type13').onclick=function(){myColor='pink';}

// Функци рисование кисточкой
function paint1(){
canvas.addEventListener('touchstart', (event) => { 
    canvas.addEventListener('touchmove', (event) => { 

        var x=event.offsetX;
        var y=event.offsetY;
        print.fillRect(x+20,y+5,10,10);
        
        print.fillStyle=myColor;
        print.fill();
    })
 });
canvas.onmousedown=function(event){
    canvas.onmousemove=function(event){
    var x=event.offsetX;
    var y=event.offsetY;
    print.fillRect(x+20,y+5,10,10);
    
    print.fillStyle=myColor;
    print.fill();
}
}
canvas.onmouseup=function(event){
    canvas.onmousemove=function(event){
    return false;
}
}
}
clear.onclick=function(){
print.clearRect(0,0,1350,600);
}

// Функци рисование карандашом

function pencil1(){
    canvas.addEventListener('touchstart', (event) => { 
        canvas.addEventListener('touchmove', (event) => { 
            var x=event.offsetX;
            var y=event.offsetY;
            print.fillRect(x-5,y-5,10,10);
            print.lineWidth=1;
            print.fillStyle=myColor;
            print.tool=pencil;
            print.fill();
        })
     });
    canvas.onmousedown=function(event){
        canvas.onmousemove=function(event){
        var x=event.offsetX;
        var y=event.offsetY;
        print.fillRect(x+20,y+30,2,2);
    
        print.fillStyle=myColor;
        print.fill();
    }
    }
    canvas.onmouseup=function(event){
        canvas.onmousemove=function(event){
        return false;
    }
    }
    clear.onclick=function(){
    print.clearRect(0,0,1350,600);
    canvas.style.background='white';
    }
    
    }

// Функци стирание ластиком

    function lastik1(){
  
        canvas.addEventListener('touchstart', (event) => { 
        
                var x=event.offsetX;
                var y=event.offsetY;
                print.fillRect(x-5,y-5,10,10);
                print.lineWidth=1;
                print.fillStyle=myColor;
                print.tool=pencil;
                print.fill();
         });
        canvas.onmousedown=function(event){
            canvas.onmousemove=function(event){
            var x=event.offsetX;
            var y=event.offsetY;
            print.fillRect(x+15,y+20,10,10);
        
            print.fillStyle='white';
            print.fill();
        }
        }
        canvas.onmouseup=function(event){
            canvas.onmousemove=function(event){
            return false;
        }
        }
    }
        clear.onclick=function(){
         
        print.clearRect(0,0,1350,600);
        canvas.style.background='white';
        }
        
        
        function back1(){
            canvas.onmousedown=function(event){
               
                    print.clearRect(0,0,1350,600);
canvas.style.background=myColor;

                
            }
        }
// Функци рисование круга

        function circle1(){
          
                canvas.onmousedown=function(event){
             
                    var x=event.offsetX;
                    var y=event.offsetY;
                    print.beginPath();
                    var img=document.createElement('img');
                    img.src='circle11.png';
                    print.drawImage(img, x,y, select.value, select.value * img.height / img.width);
                    print.fill();
                                        
                                    }
            }
// Функци рисование триугольника
        
            function tr1(){
               
                canvas.onmousedown=function(event){
                    var x=event.offsetX;
                    var y=event.offsetY;
                    print.beginPath();
                    var img=document.createElement('img');
                    img.src='tr11.png';
                    print.drawImage(img, x,y, select.value, select.value * img.height / img.width);
                    print.fill();
                }
          
            
                }
// Функци рисование прмоугльника

                function pr1(){
                    canvas.onmousedown=function(event){
             
                        var x=event.offsetX;
                    var y=event.offsetY;
                    print.beginPath();
                    var img=document.createElement('img');
                    img.src='rc11.png';
                    print.drawImage(img, x,y, select.value, select.value * img.height / img.width);
                    print.fill();
                                            
                                        }
                }
// Функци рисование квадрата

                function rc1(){
                    canvas.onmousedown=function(event){
                        var x=event.offsetX;
                        var y=event.offsetY;
                        print.beginPath();
                        var img=document.createElement('img');
                        img.src='sq11.png';
                        
                        print.drawImage(img, x,y, select.value, select.value * img.height / img.width);
                        print.fill();
                                            
                                        }
                }

                //Выбор кисточки отключается все остольные функций
paint.onclick=function(){
    paint.style.background="rgb(204, 195, 195)";
    pencil.style.background=null;
    back.style.background=null;
    lastik.style.background=null;
    circle.style.background=null;
    triugolnik.style.background=null;
    priamogolnik.style.background=null;
    ractange.style.background=null;
    if(this.style.background==="rgb(204, 195, 195)"){
        canvas.style.cursor="crosshair";
        
        paint1();
    }    
}
                //Выбор карандаша отключается все остольные функций

pencil.onclick=function(){
    pencil.style.background="rgb(204, 195, 195)";
    paint.style.background=null;
    back.style.background=null;
    lastik.style.background=null;
    circle.style.background=null;
    triugolnik.style.background=null;
    priamogolnik.style.background=null;
    ractange.style.background=null;
    if(this.style.background==="rgb(204, 195, 195)"){
        canvas.style.cursor="url(pencil.png) 4 12, auto";
        pencil1();
    }    
}

                //Выбор ластика отключается все остольные функций

lastik.onclick=function(){
    lastik.style.background="rgb(204, 195, 195)";
    pencil.style.background=null;
    back.style.background=null;
    paint.style.background=null;
    circle.style.background=null;
    triugolnik.style.background=null;
    priamogolnik.style.background=null;
    ractange.style.background=null;
    if(this.style.background==="rgb(204, 195, 195)"){
        canvas.style.cursor="url(lastik.png) 4 12, auto";
        lastik1();
    }    
}
                //Выбор заливки отключается все остольные функций

back.onclick=function(){
    back.style.background="rgb(204, 195, 195)";
    pencil.style.background=null;
    paint.style.background=null;
    lastik.style.background=null;
    circle.style.background=null;
    triugolnik.style.background=null;
    priamogolnik.style.background=null;
    ractange.style.background=null;
   if(this.style.background==="rgb(204, 195, 195)"){
        canvas.style.cursor="url(back.png) 4 12, auto";
        back1();
    }    
}
                //Выбор круга отключается все остольные функций

circle.onclick=function(){
    circle.style.background="rgb(204, 195, 195)";
    pencil.style.background=null;
    paint.style.background=null;
    lastik.style.background=null;
    back.style.background=null;
    triugolnik.style.background=null;
    priamogolnik.style.background=null;
    ractange.style.background=null;
   if(this.style.background==="rgb(204, 195, 195)"){
        canvas.style.cursor="crosshair";
        circle1();
    }   
}
                //Выбор триугольника отключается все остольные функций

triugolnik.onclick=function(){
    
    triugolnik.style.background="rgb(204, 195, 195)";
    pencil.style.background=null;
    paint.style.background=null;
    lastik.style.background=null;
    circle.style.background=null;
    back.style.background=null;
    priamogolnik.style.background=null;
    ractange.style.background=null;
   if(this.style.background==="rgb(204, 195, 195)"){
        canvas.style.cursor="crosshair";
        tr1();
    }    
}
                //Выбор прмоугольника отключается все остольные функций

priamogolnik.onclick=function(){
    
    priamogolnik.style.background="rgb(204, 195, 195)";
    pencil.style.background=null;
    paint.style.background=null;
    lastik.style.background=null;
    circle.style.background=null;
    back.style.background=null;
triugolnik.style.background=null;
    ractange.style.background=null;
   if(this.style.background==="rgb(204, 195, 195)"){
        canvas.style.cursor="crosshair";
        pr1();
    }    
}
                //Выбор квадрата отключается все остольные функций

ractange.onclick=function(){
    
    ractange.style.background="rgb(204, 195, 195)";
    pencil.style.background=null;
    paint.style.background=null;
    lastik.style.background=null;
    circle.style.background=null;
    back.style.background=null;
triugolnik.style.background=null;
    priamogolnik.style.background=null;
   if(this.style.background==="rgb(204, 195, 195)"){
        canvas.style.cursor="crosshair";
        rc1();
    }    
}